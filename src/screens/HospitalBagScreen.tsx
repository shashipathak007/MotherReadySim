import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  Alert,
} from 'react-native';
import {
  BAG_ITEMS,
  DO_NOT_PACK_ITEMS,
  CATEGORY_COLORS,
  BagCategory,
  BagItem,
} from '../data/bagItems';
import {
  Checkbox,
  SegmentedControl,
  ResetButton,
} from '../components/SharedComponents';
import { useChecklist } from '../hooks/useChecklist';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CATEGORIES: BagCategory[] = ['Clothing', 'Hygiene', 'Comfort', 'Baby'];

export default function HospitalBagScreen({ isEmbedded }: { isEmbedded?: boolean }) {
  const [activeTab, setActiveTab] = useState(0);
  const [checked, toggle, resetAll] = useChecklist('bag_checked');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [expandedDoNot, setExpandedDoNot] = useState<number | null>(null);

  const checkedCount = BAG_ITEMS.filter((i) => checked.has(i.id)).length;
  const totalItems = BAG_ITEMS.length;

  const handleReset = useCallback(() => {
    Alert.alert(
      'Reset all items?',
      'This will uncheck everything in your hospital bag list.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            resetAll();
          },
        },
      ]
    );
  }, [resetAll]);

  const toggleExpand = useCallback((id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  const toggleExpandDoNot = useCallback((id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedDoNot((prev) => (prev === id ? null : id));
  }, []);

  const renderPackTab = () => {
    return (
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {CATEGORIES.map((cat) => {
          const items = BAG_ITEMS.filter((i) => i.category === cat);
          const colors = CATEGORY_COLORS[cat];
          return (
            <View key={cat}>
              <View className="flex-row items-center bg-themeBg px-4 py-3 border-b-[0.5px] border-themeBorder">
                <View className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.text }} />
                <Text className="text-[16px] font-bold text-textPrimary flex-1">{cat}</Text>
                <Text className="text-[12px] font-medium text-textMuted">
                  {items.filter((i) => checked.has(i.id)).length}/{items.length}
                </Text>
              </View>
              {items.map((item) => (
                <PackItemCard
                  key={item.id}
                  item={item}
                  isChecked={checked.has(item.id)}
                  isExpanded={expandedId === item.id}
                  onCheck={() => toggle(item.id)}
                  onExpand={() => toggleExpand(item.id)}
                />
              ))}
            </View>
          );
        })}
        <View className="h-10" />
      </ScrollView>
    );
  };

  const renderDoNotPackTab = () => {
    return (
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center py-5 px-4">
          <Text className="text-[36px] mb-2">🚫</Text>
          <Text className="text-[18px] font-bold text-redText mb-1">Items to Avoid</Text>
          <Text className="text-[12px] text-textMuted text-center">
            These items may seem useful but can cause harm
          </Text>
        </View>
        {DO_NOT_PACK_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="bg-themeWhite mx-4 mt-2 rounded-xl border-[0.5px] border-themeBorder border-l-[3px] border-l-redBorder overflow-hidden"
            activeOpacity={0.7}
            onPress={() => toggleExpandDoNot(item.id)}
          >
            <View className="flex-row items-center p-3.5">
              <View className="flex-1">
                <Text className="text-[14px] font-bold text-redText mb-1.5 leading-5">{item.name}</Text>
                <View className="bg-redBg px-2 py-[3px] rounded-full self-start">
                  <Text className="text-[11px] font-semibold text-redText">✕ Do not pack</Text>
                </View>
              </View>
              <Text className="text-[16px] text-textMuted ml-1">{expandedDoNot === item.id ? '▲' : '▼'}</Text>
            </View>
            {expandedDoNot === item.id && (
              <View className="bg-[#FCEDED] px-3.5 py-3 border-t-[0.5px] border-t-[#DE8E94]">
                <Text className="text-[12px] font-bold text-redText mb-1 uppercase tracking-[0.5px]">Why not?</Text>
                <Text className="text-[14px] leading-[21px] text-[#A73C44]">{item.whyNot}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
        <View className="h-10" />
      </ScrollView>
    );
  };

  return (
    <View className="flex-1 bg-themeBg">
      <View className="bg-themeWhite border-b-[0.5px] border-themeBorder pt-2">
        {!isEmbedded && (
          <View className="flex-row justify-between items-center px-4 mb-1 mt-12">
            <Text className="text-[22px] font-bold text-textPrimary tracking-[-0.3px]">Hospital Bag</Text>
            {activeTab === 0 && <ResetButton onPress={handleReset} />}
          </View>
        )}
        {isEmbedded && activeTab === 0 && (
          <View className="flex-row justify-end px-4 mb-2 mt-2">
            <ResetButton onPress={handleReset} />
          </View>
        )}
        {activeTab === 0 && (
          <View className="px-4 mb-1">
            <View className="flex-row justify-between items-center mb-1.5">
              <Text className="text-[12px] text-textSecondary font-medium">
                {checkedCount} of {totalItems} items packed
              </Text>
              <Text className="text-[12px] font-bold text-themePrimary">
                {totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0}%
              </Text>
            </View>
            <View className="h-2.5 bg-themeBorder rounded-full overflow-hidden">
              <View
                className="h-2.5 bg-themePrimary rounded-full"
                style={{ width: `${totalItems > 0 ? (checkedCount / totalItems) * 100 : 0}%` }}
              />
            </View>
            {checkedCount === totalItems && totalItems > 0 && (
              <View className="mt-3 bg-greenBg border-[1px] border-greenBorder py-3 px-4 rounded-xl items-center">
                <Text className="text-[14px] text-greenText font-bold">✓ All packed! You are ready.</Text>
              </View>
            )}
          </View>
        )}
        <SegmentedControl
          tabs={['Pack These', 'Do NOT Pack']}
          activeIndex={activeTab}
          onTabPress={(i) => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setActiveTab(i);
          }}
        />
      </View>

      {activeTab === 0 ? renderPackTab() : renderDoNotPackTab()}
    </View>
  );
}

interface PackItemCardProps {
  item: BagItem;
  isChecked: boolean;
  isExpanded: boolean;
  onCheck: () => void;
  onExpand: () => void;
}

const PackItemCard: React.FC<PackItemCardProps> = React.memo(
  ({ item, isChecked, isExpanded, onCheck, onExpand }) => {
    const colors = CATEGORY_COLORS[item.category];
    return (
      <View
        className={`bg-themeWhite mx-4 mt-2 rounded-xl border-[0.5px] border-themeBorder overflow-hidden ${
          isChecked ? 'border-l-[3px] border-l-greenBorder' : ''
        }`}
      >
        <View className="flex-row items-center p-3.5">
          <Checkbox checked={isChecked} onToggle={onCheck} />
          <TouchableOpacity
            className="flex-1 ml-3"
            activeOpacity={0.6}
            onPress={onExpand}
          >
            <Text
              className={`text-[14px] font-semibold leading-5 ${
                isChecked ? 'text-textMuted' : 'text-textPrimary'
              }`}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onExpand} className="p-2 ml-1">
            <Text className="text-[16px] text-textMuted">{isExpanded ? '▲' : '›'}</Text>
          </TouchableOpacity>
        </View>
        {isExpanded && (
          <View className="bg-[#EBF5ED] px-3.5 py-3 border-t-[0.5px] border-t-themeBorder">
            <Text className="text-[12px] font-bold text-greenText mb-1 uppercase tracking-[0.5px]">Why bring this?</Text>
            <Text className="text-[14px] text-textSecondary leading-[21px]">{item.why}</Text>
          </View>
        )}
      </View>
    );
  }
);
