/// <reference types="nativewind/types" />
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Animated, { FadeIn, FadeOut, FadeInDown } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';

interface TutorialOverlayProps {
  visible: boolean;
  onClose: () => void;
}

export const TutorialOverlay: React.FC<TutorialOverlayProps> = ({ visible, onClose }) => {
  const [step, setStep] = useState(0);
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  const tutorialSteps = [
    {
      title: isNe ? "नमस्ते! म तपाईंकी साथी!" : "Hi there! I'm your guide!",
      description: isNe
        ? "म तपाईंलाई अस्पतालको लागि तयारी गर्न मद्दत गर्छु — झोला, कागजात, सम्पर्क, र खतराका चिन्हहरू सबै सिकौं!"
        : "I'll help you prepare for the hospital — we'll learn about packing your bag, documents, contacts, and danger signs!",
      emoji: '👋',
    },
    {
      title: isNe ? "छोएर तान्नुहोस्!" : "Drag & Drop!",
      description: isNe
        ? "सामानलाई औँलाले छोएर झोला, फोल्डर वा फोनमा तान्नुहोस्। सही छान्नुभयो भने हरियो हुन्छ, गलत भए फर्किन्छ!"
        : "Touch items and drag them to the bag, folder, or phone. Right ones glow green, wrong ones bounce back!",
      emoji: '👆',
    },
    {
      title: isNe ? "अलि बेर थिच्नुहोस्!" : "Long Press to Learn!",
      description: isNe
        ? "कुनै पनि सामानमा अलि बेर थिचिराख्नुहोस् — किन चाहिन्छ भन्ने कुरा देख्नुहुन्छ। हरेक सामानको कारण छ!"
        : "Hold any item for a moment to see why it matters. Every item has a reason!",
      emoji: '💡',
    },
    {
      title: isNe ? "भाषा र आवाज" : "Language & Sound",
      description: isNe
        ? "माथिको पट्टीमा भाषा बटन थिचेर अंग्रेजी–नेपाली बदल्नुहोस्। 🔊 बटनले आवाज खोल्ने वा बन्द गर्ने!"
        : "Switch between English & Nepali with the language button in the top bar. Use 🔊 to toggle sound on or off!",
      emoji: '🌐',
    },
  ];

  if (!visible) return null;

  const currentTutorial = tutorialSteps[step];
  const isLast = step === tutorialSteps.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setStep(step + 1);
    } else {
      setStep(0);
      onClose();
    }
  };

  const handleSkip = () => {
    setStep(0);
    onClose();
  };

  return (
    <View className="absolute inset-0 z-[200]" pointerEvents="box-none">
      {/* Semi-transparent backdrop */}
      <Animated.View
        entering={FadeIn.duration(300)}
        exiting={FadeOut.duration(200)}
        className="absolute inset-0 bg-black/40"
      >
        <TouchableOpacity
          className="flex-1"
          activeOpacity={1}
          onPress={handleSkip}
        />
      </Animated.View>

      {/* Tip card positioned just under the progress bar area */}
      <Animated.View
        key={step}
        entering={FadeInDown.duration(400).springify()}
        className="absolute left-4 right-4 z-30"
        style={{ top: 50 }}
      >
        <View
          className="bg-white rounded-[20px] p-5 pb-4 border-[1.5px] border-[#F5E1EC]"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.12,
            shadowRadius: 16,
            elevation: 12,
          }}
        >
          {/* Skip button — inside card, top right */}
          {!isLast && (
            <TouchableOpacity
              onPress={handleSkip}
              activeOpacity={0.6}
              className="absolute top-3 right-3 z-10 px-3.5 py-1.5 bg-[#FFF0F6] rounded-full border border-[#F5E1EC]"
            >
              <Text className="text-[11px] font-[700] text-[#C06898]">{isNe ? 'छोड्नुहोस्' : 'Skip'}</Text>
            </TouchableOpacity>
          )}

          {/* Step indicator badge + emoji */}
          <View className="flex-row items-center mb-2.5">
            <View className="bg-[#FFF0F6] rounded-full px-3 py-1 mr-2">
              <Text className="text-[11px] font-[800] text-[#C06898] tracking-[0.5px]">
                {step + 1}/{tutorialSteps.length}
              </Text>
            </View>
            <Text className="text-[20px]">{currentTutorial.emoji}</Text>
          </View>

          {/* Title */}
          <Text className="text-[18px] font-[800] text-[#333] mb-2">{currentTutorial.title}</Text>

          {/* Description */}
          <Text className="text-[14px] text-[#555] leading-[21px] font-[500] mb-4">{currentTutorial.description}</Text>

          {/* Progress dots + Next button */}
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              {tutorialSteps.map((_, i) => (
                <View
                  key={i}
                  className={`h-[7px] rounded-full mr-2 ${step === i ? 'w-6 bg-[#C06898]' : 'w-[7px] bg-[#F0DDE8]'}`}
                />
              ))}
            </View>

            <TouchableOpacity
              onPress={handleNext}
              className="rounded-full px-6 py-3 bg-[#C06898]"
              activeOpacity={0.75}
            >
              <Text className="text-white font-[700] text-[14px]">
                {isLast ? (isNe ? "सुरु गरौं! 🎉" : "Let's Go! 🎉") : (isNe ? "अर्को →" : "Next →")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bubble tail pointing down toward the character */}
        <View
          style={{
            width: 0,
            height: 0,
            alignSelf: 'flex-end',
            marginRight: 40,
            borderTopWidth: 14,
            borderTopColor: 'white',
            borderLeftWidth: 14,
            borderLeftColor: 'transparent',
            borderRightWidth: 0,
            borderRightColor: 'transparent',
          }}
        />
      </Animated.View>
    </View>
  );
};
