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
import { DOCUMENTS, DOC_CATEGORY_COLORS, DocCategory } from '../data/documents';
import { Checkbox, ResetButton } from '../components/SharedComponents';
import { useChecklist } from '../hooks/useChecklist';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CATEGORIES: DocCategory[] = ['Identity', 'Aama Programme', 'Medical', 'Payment'];

export default function DocumentsScreen({ isEmbedded }: { isEmbedded?: boolean }) {
  const [checked, toggle, resetAll] = useChecklist('docs_checked');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const checkedCount = DOCUMENTS.filter((d) => checked.has(d.id)).length;
  const totalDocs = DOCUMENTS.length;
  const pct = totalDocs > 0 ? Math.round((checkedCount / totalDocs) * 100) : 0;

  const handleReset = useCallback(() => {
    Alert.alert(
      'Reset all documents?',
      'This will uncheck all document items.',
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

  return (
    <View className="flex-1 bg-themeBg">
      <View className="bg-themeWhite pt-2 pb-[14px] border-b-[0.5px] border-themeBorder px-4">
        {!isEmbedded && (
          <View className="flex-row justify-between items-center mb-2 mt-12">
            <Text className="text-[22px] font-bold text-textPrimary tracking-[-0.3px]">Documents</Text>
            <ResetButton onPress={handleReset} />
          </View>
        )}
        {isEmbedded && (
          <View className="flex-row justify-end mb-2 mt-2">
            <ResetButton onPress={handleReset} />
          </View>
        )}
        <View className="flex-row justify-between items-center mb-1.5">
          <Text className="text-[12px] text-textSecondary font-medium">
            {checkedCount} of {totalDocs} documents ready
          </Text>
          <Text className="text-[12px] text-themePrimary font-bold">{pct}%</Text>
        </View>
        <View className="h-2.5 bg-themeBorder rounded-full overflow-hidden">
          <View className="h-2.5 bg-themePrimary rounded-full" style={{ width: `${pct}%` }} />
        </View>
        {checkedCount === totalDocs && totalDocs > 0 && (
          <View className="mt-3 bg-greenBg border-[1px] border-greenBorder py-3 px-4 rounded-xl items-center">
            <Text className="text-[14px] text-greenText font-bold">✓ All documents ready!</Text>
          </View>
        )}
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {CATEGORIES.map((cat) => {
          const items = DOCUMENTS.filter((d) => d.category === cat);
          if (items.length === 0) return null;
          const colors = DOC_CATEGORY_COLORS[cat];
          return (
            <View key={cat}>
              <View className="flex-row items-center bg-themeBg px-4 py-3 border-b-[0.5px] border-themeBorder">
                <View className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.text }} />
                <Text className="text-[16px] font-bold text-textPrimary flex-1">{cat}</Text>
                <Text className="text-[12px] text-textMuted font-medium">
                  {items.filter((i) => checked.has(i.id)).length}/{items.length}
                </Text>
              </View>
              {items.map((doc) => {
                const isChecked = checked.has(doc.id);
                const isExpanded = expandedId === doc.id;
                return (
                  <View
                    key={doc.id}
                    className={`bg-themeWhite mx-4 mt-2 rounded-xl border-[0.5px] border-themeBorder overflow-hidden ${
                      isChecked ? 'border-l-[3px] border-l-greenBorder' : ''
                    }`}
                  >
                    <View className="flex-row items-center p-3.5">
                      <Checkbox checked={isChecked} onToggle={() => toggle(doc.id)} />
                      <TouchableOpacity
                        className="flex-1 ml-3"
                        activeOpacity={0.6}
                        onPress={() => toggleExpand(doc.id)}
                      >
                        <Text
                          className={`text-[14px] font-semibold leading-5 ${
                            isChecked ? 'text-textMuted' : 'text-textPrimary'
                          }`}
                        >
                          {doc.name}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => toggleExpand(doc.id)} className="p-2 ml-1">
                        <Text className="text-[16px] text-textMuted">{isExpanded ? '▲' : '›'}</Text>
                      </TouchableOpacity>
                    </View>
                    {isExpanded && (
                      <View className="bg-[#EAF3FA] px-3.5 py-3 border-t-[0.5px] border-t-themeBorder">
                        <Text className="text-[12px] font-bold text-blueText mb-1 uppercase tracking-[0.5px]">Why needed?</Text>
                        <Text className="text-[14px] text-textSecondary leading-[21px]">{doc.whyNeeded}</Text>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          );
        })}
        <View className="h-10" />
      </ScrollView>
    </View>
  );
}
