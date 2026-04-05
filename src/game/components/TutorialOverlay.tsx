import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, Dimensions } from 'react-native';
import Animated, { FadeIn, FadeOut, SlideInRight, ZoomIn } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';

const charTutorial = require('../../../assets/images/char_tutorial.png');

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

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

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 bg-black/50">
        {/* Skip button — top right */}
        {!isLast && (
          <Animated.View entering={FadeIn.delay(400)} className="absolute top-14 right-5 z-20">
            <TouchableOpacity 
              onPress={() => { setStep(0); onClose(); }} 
              activeOpacity={0.6}
              className="px-5 py-2.5 bg-white/25 rounded-full border border-white/40"
            >
              <Text className="text-[14px] font-[700] text-white">{isNe ? 'छोड्नुहोस्' : 'Skip'}</Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        <View className="flex-1 items-center">
          {/* Speech bubble area — positioned near top */}
          <View className="w-full mt-24 px-4 z-10">
            <Animated.View 
              key={step}
              entering={SlideInRight.duration(350)}
              className="bg-white rounded-[24px] p-5 pb-4 shadow-black/15 shadow-opacity-20 shadow-radius-20 elevation-12"
              style={{
                borderBottomLeftRadius: 8,
              }}
            >
              {/* Step indicator badge */}
              <View className="flex-row items-center mb-2.5">
                <View className="bg-[#FFF0F6] rounded-full px-3 py-1 mr-2">
                  <Text className="text-[11px] font-[800] text-[#C06898] tracking-[0.5px]">
                    {isNe ? `${step + 1}/${tutorialSteps.length}` : `${step + 1}/${tutorialSteps.length}`}
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
            </Animated.View>

            {/* Bubble tail triangle pointing down-right toward character */}
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
          </View>

          {/* Character cutout — large, anchored on the right */}
          <Animated.View 
            entering={ZoomIn.duration(500).springify()} 
            className="absolute bottom-0 z-0 flex-col justify-end" 
            style={{ right: -80, bottom: -20, width: SCREEN_W * 1.1, height: Dimensions.get('window').height * 0.90 }}
          >
            <Image 
              source={charTutorial} 
              style={{ width: '100%', height: '100%' }}
              resizeMode="contain"
            />
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
};
