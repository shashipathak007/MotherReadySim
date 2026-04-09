/// <reference types="nativewind/types" />
import React from 'react';
import { View, Text, TouchableOpacity, Share, ImageBackground, ScrollView } from 'react-native';
import { useGame } from '../context/GameContext';
import Animated, { FadeInUp, ZoomIn, FadeInDown } from 'react-native-reanimated';
import { BAG_ITEMS } from '../../data/bagItems';
import { CONTACTS } from '../../data/contacts';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

export default function Step4({ onReplay }: { onReplay: () => void }) {
  const { packedBagItems, savedContacts, quizStars, resetGame } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  const totalPossibleStars = 20;
  const bagItemsCount = BAG_ITEMS.filter(i => ['Clothing', 'Hygiene', 'Comfort', 'Baby'].includes(i.category)).length;
  const docItemsCount = BAG_ITEMS.filter(i => ['LegalDocs', 'HealthDocs', 'ClinicalDocs'].includes(i.category)).length;

  const packedBagsCount = packedBagItems.filter(id => id < 100).length;
  const packedDocsCount = packedBagItems.filter(id => id >= 100).length;

  const bagRatio = packedBagsCount / bagItemsCount;
  const docRatio = packedDocsCount / docItemsCount;
  const contactsRatio = savedContacts.length / CONTACTS.length;
  const quizRatio = quizStars / totalPossibleStars;

  const scorePercentage = (bagRatio + docRatio + contactsRatio + quizRatio) / 4;

  let badgeMsg = '';
  let badgeEmoji = '';
  let subMsg = '';
  if (scorePercentage >= 1) {
    badgeMsg = isNe ? 'पूरा तयार!' : 'Fully Prepared';
    badgeEmoji = '🏆';
    subMsg = isNe ? 'शाबास! तपाईं अस्पतालको लागि पूरा तयार हुनुहुन्छ!' : 'Great Job! You are completely prepared.';
  } else if (scorePercentage > 0.7) {
    badgeMsg = isNe ? 'झण्डै तयार' : 'Almost Ready';
    badgeEmoji = '💪';
    subMsg = isNe ? 'राम्रो भयो! छुटेका चरणहरू हेरेर फेरि खेल्नुहोस्।' : 'Great job! Review the steps you missed and try again.';
  } else {
    badgeMsg = isNe ? 'सिक्दै जानुहोस्' : 'Keep Learning';
    badgeEmoji = '📖';
    subMsg = isNe ? 'राम्रो सुरुवात! छुटेका चरणहरू हेरेर फेरि प्रयास गर्नुहोस्।' : 'You are getting there! Review the steps you missed and try again.';
  }

  const handleShare = async () => {
  try {
    await Share.share({
      message: isNe 
        ? `मैले Aama Ready खेलेर "${badgeMsg}" हासिल गरेँ! तपाईं पनि खेल्नुस् र आफ्नो तयारी जाँच्नुस्।`
        : `I just completed the Aama Ready journey and earned "${badgeMsg}"! Try the game and test your pregnancy preparedness in Nepal.`,
    });
  } catch (error) {
    console.error(error);
  }
};

  const handleReplay = () => {
    resetGame();
    onReplay();
  };

  const getProgressColor = (ratio: number) => {
    if (ratio >= 1) return '#10B981';
    if (ratio >= 0.6) return '#F59E0B';
    return '#EF4444';
  };

  const ProgressBar = ({ ratio, label, icon, count, total }: { ratio: number, label: string, icon: string, count: number, total: number }) => (
    <View className="mb-4">
      <View className="flex-row items-center mb-1.5">
        <Text className="text-base mr-2">{icon}</Text>
        <Text className="text-sm font-[700] text-[#444] flex-1">{label}</Text>
        <Text className="text-sm font-[800] text-[#9B5983]">{count}/{total}</Text>
      </View>
      <View className="h-2.5 bg-[#F3F4F6] rounded-[5px] overflow-hidden">
        <View 
          className="h-2.5 rounded-[5px]" 
          style={{ width: `${Math.max(ratio * 100, 3)}%`, backgroundColor: getProgressColor(ratio) }} 
        />
      </View>
    </View>
  );

  return (
    <View className="flex-1">
      <LinearGradient
      colors={[
        'rgba(255,255,255,0.9)',
        'rgba(243,58,106,0.05)',
        'rgba(176,76,138,0.08)'
      ]}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    />
      <ScrollView contentContainerStyle={{ paddingTop: 80, paddingBottom: 50, paddingHorizontal: 24, alignItems: 'center' }} showsVerticalScrollIndicator={false}>
        {/* Badge */}
        <Animated.View entering={ZoomIn.delay(200)} className="items-center mb-7">
          <Text className="text-[64px] pt-8">{badgeEmoji}</Text>
          <Text className="text-[28px] font-[800] text-[#9B5983] text-center mb-2">{badgeMsg}</Text>
          <Text className="text-[28px] color-[#F59E0B]">{'⭐'.repeat(Math.round((quizStars / totalPossibleStars) * 5))}{'☆'.repeat(5 - Math.round((quizStars / totalPossibleStars) * 5))}</Text>
        </Animated.View>

        {/* Stats Card */}
        <Animated.View entering={FadeInUp.delay(400)} className="w-full bg-white/95 rounded-[22px] p-6 mb-6 shadow-black shadow-opacity-8 shadow-radius-16 elevation-8 border border-[#F5E1EC]">
          <Text className="text-lg font-[900] text-[#333] mb-5 text-center">{isNe ? 'नतिजा' : 'Your Results'}</Text>
          
          <ProgressBar icon="🎒" label={isNe ? 'अस्पतालको झोला' : 'Hospital Bag'} ratio={bagRatio} count={packedBagsCount} total={bagItemsCount} />
          <ProgressBar icon="📁" label={isNe ? 'जरुरी कागजातहरू' : 'Important Documents'} ratio={docRatio} count={packedDocsCount} total={docItemsCount} />
          <ProgressBar icon="📱" label={isNe ? 'सम्पर्क नम्बरहरू' : 'Contacts'} ratio={contactsRatio} count={savedContacts.length} total={CONTACTS.length} />
          <ProgressBar icon="🤰" label={isNe ? 'गर्भावस्था परिदृश्य' : 'Pregnancy Scenarios'} ratio={quizRatio} count={quizStars} total={totalPossibleStars} />

          <View className="flex-row items-center justify-between mt-5 pt-4 border-t border-[#F0E0E8]">
            <Text className="text-lg font-[900] text-[#333]">{isNe ? 'जम्मा स्कोर' : 'Overall Score'}</Text>
            <Text 
              className="text-[32px] font-[900]" 
              style={{ color: getProgressColor(scorePercentage) }}
            >
              {Math.round(scorePercentage * 100)}%
            </Text>
          </View>
        </Animated.View>

        {/* Message */}
        <Animated.View entering={FadeInUp.delay(600)}>
          <Text className="text-[15px] color-[#555] text-center mb-7 italic leading-6 px-2">{subMsg}</Text>
        </Animated.View>

        {/* Action Buttons — stacked for better tap targets */}
        <Animated.View entering={FadeInDown.delay(800)} className="w-full gap-3">
          {/* Share button — primary, full width */}
          <TouchableOpacity 
            className="w-full rounded-full overflow-hidden shadow-[#C06898] shadow-opacity-20 shadow-radius-12 elevation-6" 
            onPress={handleShare} 
            activeOpacity={0.8}
          >
            <View className="bg-[#C06898] py-4 flex-row items-center justify-center gap-2">
              <Text className="text-[22px]">📤</Text>
              <Text className="text-white text-[16px] font-[800]">{isNe ? 'स्कोर साझा गर्नुहोस्' : 'Share My Score'}</Text>
            </View>
          </TouchableOpacity>

          {/* Play again — secondary, outlined */}
          <TouchableOpacity 
            className="w-full py-3.5 rounded-full items-center justify-center bg-white/90 border-[1.5px] border-[#E8B4D0]" 
            onPress={handleReplay}
            activeOpacity={0.7}
          >
            <Text className="text-[#9B5983] text-[15px] font-[700]">{isNe ? 'फेरि खेल्नुहोस्' : 'Play Again'}</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </View>
  );
}
