import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, LayoutAnimation, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PHASE2_ITEMS, DECISION_TREE, RESULTS, RIDE_GUIDE, BREATHING_GUIDE } from '../data/phase2';
import { PhaseReminderBanner, Checkbox, InfoCard, SegmentedControl } from '../components/SharedComponents';
import { useChecklist } from '../hooks/useChecklist';
import { useTranslation } from 'react-i18next';

export default function Phase2Screen() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);

  const TABS = t('phase2.tabs', { returnObjects: true }) as string[];

  const renderContent = () => {
    switch (activeTab) {
      case 0: return <NewItemsTab />;
      case 1: return <DecisionTreeTab />;
      case 2: return <RideGuideTab />;
      case 3: return <BreathingGuideTab />;
      default: return null;
    }
  };

  return (
    <View className="flex-1 bg-themeBg">
      <View className="bg-themeWhite pt-12 pb-2 border-b-[0.5px] border-themeBorder px-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mb-3 w-10 h-10 -ml-2 items-center justify-center">
          <Text className="text-[28px] text-textPrimary leading-8">←</Text>
        </TouchableOpacity>
        <Text className="text-[24px] font-bold text-textPrimary tracking-[-0.5px] mb-1">{t('phase2.title')}</Text>
        <Text className="text-[12px] text-textSecondary leading-5">{t('phase2.desc')}</Text>
      </View>
      <PhaseReminderBanner />
      
      <View className="px-1 py-1 bg-themeWhite border-b-[0.5px] border-themeBorder">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 10 }}>
          {TABS.map((tab, idx) => (
            <TouchableOpacity
              key={tab}
              onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                setActiveTab(idx);
              }}
              className={`px-4 py-2 mr-2 rounded-full border-[0.5px] ${activeTab === idx ? 'bg-[#E05C44] border-[#E05C44]' : 'bg-themeWhite border-[#E2D6D8]'}`}
            >
              <Text className={`text-[13px] font-bold ${activeTab === idx ? 'text-themeWhite' : 'text-textSecondary'}`}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <View className="flex-1">
        {renderContent()}
      </View>
    </View>
  );
}

// -------------------------------------------------------------
// SUB-SECTION 1: NEW ITEMS
// -------------------------------------------------------------
const NewItemsTab = () => {
  const { t, i18n } = useTranslation();
  const [checked, toggle] = useChecklist('p2_checked');
  const checkedCount = PHASE2_ITEMS.filter(i => checked.has(i.id)).length;
  
  return (
    <ScrollView className="flex-1 pt-4" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
      <View className="px-4 mb-3 flex-row justify-between items-center">
        <Text className="text-[14px] font-bold text-textSecondary uppercase tracking-[1px]">{t('phase2.new_items_subtitle')}</Text>
        <Text className="text-[14px] font-bold text-[#E05C44]">{t('phase2.ready_count', { count: checkedCount })}</Text>
      </View>

      {PHASE2_ITEMS.map((item) => {
        const isChecked = checked.has(item.id);
        return (
          <InfoCard
            key={item.id}
            title={i18n.language === 'ne' ? item.nameNe : item.name}
            detail={i18n.language === 'ne' ? item.whyNe : item.why}
            checked={isChecked}
            onCheck={() => toggle(item.id)}
            borderColor="#E05C44"
          />
        );
      })}
    </ScrollView>
  );
};

// -------------------------------------------------------------
// SUB-SECTION 2: DECISION TREE
// -------------------------------------------------------------
const DecisionTreeTab = () => {
  const { t, i18n } = useTranslation();
  const [currentNode, setCurrentNode] = useState<string>('Q1');
  const [resultId, setResultId] = useState<string | null>(null);

  useEffect(() => {
    return () => { setCurrentNode('Q1'); setResultId(null); }; // Reset on unmount
  }, []);

  const handleOption = (next?: string, result?: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (result) {
      setResultId(result);
    } else if (next) {
      setCurrentNode(next);
    }
  };

  const startOver = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCurrentNode('Q1');
    setResultId(null);
  };

  if (resultId) {
    const res = (RESULTS as any)[resultId];
    return (
      <ScrollView className="flex-1 p-5" showsVerticalScrollIndicator={false}>
        <View className={`px-4 py-2 rounded-full self-start mb-4 border-[1px]`} style={{ backgroundColor: res.type === 'red' ? '#FCEDED' : res.type === 'amber' ? '#FBF2E1' : '#EBF5ED', borderColor: res.type === 'red' ? '#DE8E94' : res.type === 'amber' ? '#D69E58' : '#6EB88B' }}>
          <Text className={`text-[12px] font-black tracking-[1px]`} style={{ color: res.type === 'red' ? '#A73C44' : res.type === 'amber' ? '#9A5A17' : '#2B6D45' }}>
            {i18n.language === 'ne' ? res.titleNe : res.title}
          </Text>
        </View>

        <Text className="text-[16px] font-bold text-textPrimary mb-3">{t('phase2.what_to_do')}</Text>
        {(i18n.language === 'ne' ? res.pointsNe : res.points).map((pt: string, i: number) => (
          <View key={i} className="flex-row items-start mb-2.5">
            <Text className="text-[18px] mr-2 -mt-1" style={{ color: res.type === 'red' ? '#A73C44' : res.type === 'amber' ? '#9A5A17' : '#2B6D45' }}>•</Text>
            <Text className="text-[15px] text-textSecondary leading-6 flex-1">{pt}</Text>
          </View>
        ))}

        <View className="mt-5 bg-themeWhite border-[1px] border-[#EAE2E3] rounded-xl p-4 shadow-sm relative">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-[12px] font-bold text-[#1C6B9E] uppercase tracking-[0.5px]">{t('phase2.what_to_say')}</Text>
          </View>
          <Text className="text-[15px] font-medium leading-[22px] italic text-textPrimary">"{i18n.language === 'ne' ? res.scriptNe : res.script}"</Text>
        </View>

        <TouchableOpacity onPress={startOver} className="mt-8 py-3.5 bg-themeWhite border-[1px] border-themeBorder rounded-xl items-center mb-6">
          <Text className="text-[14px] font-bold text-textPrimary">{t('phase2.restart')}</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  const qData = (DECISION_TREE as any)[currentNode];

  return (
    <View className="flex-1 p-5 justify-center">
      <View className="bg-themeWhite border-[1px] border-themeBorder rounded-2xl p-5 shadow-sm">
        <Text className="text-[20px] font-bold text-textPrimary text-center mb-6">{i18n.language === 'ne' ? qData.questionNe : qData.question}</Text>
        {qData.options.map((opt: any, i: number) => {
          let bg = '#FEF7F9';
          let border = '#EAE2E3';
          let text = '#2D2325';
          
          if (opt.type === 'urgent') { bg = '#FCEDED'; border = '#DE8E94'; text = '#A73C44'; }
          if (opt.type === 'normal') { bg = '#EBF5ED'; border = '#6EB88B'; text = '#2B6D45'; }
          if (opt.type === 'uncertain') { bg = '#FBF2E1'; border = '#D69E58'; text = '#9A5A17'; }

          return (
            <TouchableOpacity
              key={i}
              onPress={() => handleOption(opt.next, opt.result)}
              className="py-3.5 px-4 rounded-xl border-[1px] mb-3 items-center justify-center"
              style={{ backgroundColor: bg, borderColor: border }}
            >
              <Text className="text-[15px] font-bold text-center" style={{ color: text }}>{i18n.language === 'ne' ? opt.textNe : opt.text}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {currentNode !== 'Q1' && (
        <TouchableOpacity onPress={startOver} className="mt-6 items-center">
          <Text className="text-[14px] font-bold text-textMuted">{t('phase2.start_over')}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// -------------------------------------------------------------
// SUB-SECTION 3: RIDE GUIDE
// -------------------------------------------------------------
const RideGuideTab = () => {
  const { i18n } = useTranslation();
  return (
    <ScrollView className="flex-1 pt-4" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
      {RIDE_GUIDE.map((step) => (
        <View key={step.step} className="bg-themeWhite mx-4 mb-3 border-[0.5px] border-themeBorder rounded-xl p-4 shadow-sm">
          <View className="flex-row items-center mb-2">
            <View className="w-6 h-6 rounded-full bg-[#1C6B9E] items-center justify-center mr-2.5">
              <Text className="text-[12px] font-bold text-themeWhite">{step.step}</Text>
            </View>
            <Text className="text-[16px] font-bold text-textPrimary flex-1">{i18n.language === 'ne' ? step.titleNe : step.title}</Text>
            <View className="bg-[#EAF3FA] px-2 py-1 rounded-md">
              <Text className="text-[10px] font-bold text-[#1C6B9E] uppercase">{i18n.language === 'ne' ? step.whoNe : step.who}</Text>
            </View>
          </View>
          <Text className="text-[14px] text-textSecondary leading-[21px] ml-[34px]">{i18n.language === 'ne' ? step.descNe : step.desc}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

// -------------------------------------------------------------
// SUB-SECTION 4: BREATHING GUIDE
// -------------------------------------------------------------
const BreathingGuideTab = () => {
  return (
    <ScrollView className="flex-1 pt-4" contentContainerStyle={{ paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
      {BREATHING_GUIDE.map((gd) => (
        <BreathingCard key={gd.id} data={gd} />
      ))}
    </ScrollView>
  );
};

const BreathingCard = ({ data }: { data: any }) => {
  const { t, i18n } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  useEffect(() => {
    let anim: Animated.CompositeAnimation;
    if (isPlaying) {
      const inhale = Animated.timing(scaleAnim, { toValue: 1.8, duration: data.inhale * 1000, useNativeDriver: true });
      const hold = Animated.delay(data.hold * 1000);
      const exhale = Animated.timing(scaleAnim, { toValue: 1, duration: data.exhale * 1000, useNativeDriver: true });
      
      anim = Animated.loop(Animated.sequence([inhale, hold, exhale]));
      anim.start();
    } else {
      scaleAnim.stopAnimation();
      scaleAnim.setValue(1);
    }
    return () => { if (anim) anim.stop(); };
  }, [isPlaying, data]);

  return (
    <View className="bg-themeWhite mx-4 mb-4 border-[0.5px] border-themeBorder rounded-xl p-5 shadow-sm items-center">
      <Text className="text-[18px] font-bold text-textPrimary mb-1 text-center">{i18n.language === 'ne' ? data.titleNe : data.title}</Text>
      <Text className="text-[12px] text-textMuted mb-6 text-center">{i18n.language === 'ne' ? data.whenNe : data.when}</Text>
      
      <View className="w-32 h-32 items-center justify-center mb-6 relative">
        <View className="absolute w-[180px] h-[180px] rounded-full border-[1px] border-[#FDF2F4] items-center justify-center" />
        <Animated.View 
          className="w-16 h-16 rounded-full bg-[#F48B9E] shadow-md shadow-[#F48B9E]"
          style={{ transform: [{ scale: scaleAnim }], opacity: isPlaying ? 0.9 : 0.5 }}
        />
      </View>

      <Text className="text-[14px] font-medium text-textSecondary italic text-center mb-5 px-2">
        "{i18n.language === 'ne' ? data.cueNe : data.cue}"
      </Text>

      <View className="flex-row justify-center space-x-4 w-full mb-5">
        <View className="items-center">
          <Text className="text-[11px] font-bold text-[#1C6B9E] uppercase">{t('phase2.inhale')}</Text>
          <Text className="text-[15px] font-bold text-textPrimary">{data.inhale}s</Text>
        </View>
        <View className="items-center mx-4">
          <Text className="text-[11px] font-bold text-[#D69E58] uppercase">{t('phase2.hold')}</Text>
          <Text className="text-[15px] font-bold text-textPrimary">{data.hold}s</Text>
        </View>
        <View className="items-center">
          <Text className="text-[11px] font-bold text-[#6EB88B] uppercase">{t('phase2.exhale')}</Text>
          <Text className="text-[15px] font-bold text-textPrimary">{data.exhale}s</Text>
        </View>
      </View>

      <TouchableOpacity 
        onPress={() => setIsPlaying(!isPlaying)}
        className="w-full py-3.5 rounded-xl items-center justify-center"
        style={{ backgroundColor: isPlaying ? '#FCEDED' : '#F48B9E', borderWidth: isPlaying ? 1 : 0, borderColor: '#DE8E94' }}
      >
        <Text className={`text-[15px] font-bold ${isPlaying ? 'text-[#A73C44]' : 'text-themeWhite'}`}>
          {isPlaying ? t('phase2.stop') : t('phase2.start_breathing')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
