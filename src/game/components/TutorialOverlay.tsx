import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';
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
      title: isNe ? "आमा रेडी मा स्वागत छ!" : "Welcome to Aama Ready!",
      description: isNe 
        ? "यो सिमुलेटरले तपाईंलाई अस्पताल जाने तयारी गर्न मद्दत गर्छ। सामानहरूसँग कसरी अन्तरक्रिया गर्ने सिकौं।" 
        : "This simulator will help you prepare for your hospital trip. Let's learn how to interact with the items.",
      icon: "🤰"
    },
    {
      title: isNe ? "तानेर राख्नुहोस्" : "Drag and Drop",
      description: isNe 
        ? "सामानहरूलाई बिस्तारै तानेर झोला वा फोल्डरमा राख्नुहोस्। औंलाले छोएर सार्नुहोस्।" 
        : "Gently drag items into the bag or folder to pack them. Use your finger to move them around.",
      icon: "👆"
    },
    {
      title: isNe ? "विवरण हेर्नुहोस्" : "Learn More",
      description: isNe 
        ? "कुनै पनि सामानमा लामो समय थिच्नुहोस् — यो तपाईंको गर्भावस्थाको यात्रामा किन महत्त्वपूर्ण छ भनेर हेर्न सक्नुहुन्छ।" 
        : "Hold down on any item to see why it is important for your pregnancy journey.",
      icon: "💡"
    }
  ];

  if (!visible) return null;

  const currentTutorial = tutorialSteps[step];
  const isLast = step === tutorialSteps.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setStep(step + 1);
    } else {
      onClose();
    }
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 bg-black/45 justify-center items-center px-8">
        <Animated.View 
          entering={ZoomIn.duration(350)} 
          exiting={ZoomOut.duration(250)}
          className="bg-white rounded-[28px] w-full max-w-[340px] items-center shadow-black shadow-opacity-15 shadow-radius-24 elevation-12 overflow-hidden"
        >
          {/* Top accent */}
          <View className="w-full h-1 bg-[#C06898]" />

          <View className="px-7 pt-7 pb-6 items-center w-full">
            {/* Icon */}
            <View className="w-[76px] h-[76px] rounded-full bg-[#FFF5F9] justify-center items-center mb-5 border-2 border-[#F5E1EC]">
              <Text className="text-[38px]">{currentTutorial.icon}</Text>
            </View>
            
            {/* Title */}
            <Text className="text-[20px] font-[800] text-[#333] text-center mb-3">{currentTutorial.title}</Text>
            
            {/* Description */}
            <Text className="text-[14px] text-[#777] text-center leading-[22px] mb-7 font-[500] px-1">{currentTutorial.description}</Text>

            {/* Bottom row: dots + button */}
            <View className="flex-row justify-between items-center w-full">
              {/* Progress dots */}
              <View className="flex-row items-center">
                {tutorialSteps.map((_, i) => (
                  <View 
                    key={i} 
                    className={`h-2 rounded-full mr-2 ${step === i ? 'w-6 bg-[#C06898]' : 'w-2 bg-[#F0DDE8]'}`} 
                  />
                ))}
              </View>

              {/* Next/Got it button — clean pill */}
              <TouchableOpacity 
                onPress={handleNext} 
                className={`rounded-full px-7 py-3 ${isLast ? 'bg-[#C06898]' : 'bg-[#C06898]'}`}
                activeOpacity={0.75}
              >
                <Text className="text-white font-[700] text-[14px] tracking-[0.3px]">
                  {isLast ? (isNe ? "बुझें!" : "Got it!") : (isNe ? "अर्को" : "Next")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};
