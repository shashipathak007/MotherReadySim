import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';

interface StepCompletionModalProps {
  visible: boolean;
  onClose: () => void;
  onReset: () => void;
}

export const StepCompletionModal: React.FC<StepCompletionModalProps> = ({ visible, onClose, onReset }) => {
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  if (!visible) return null;

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
              <Text className="text-[38px]">🎖️</Text>
            </View>
            
            {/* Title */}
            <Text className="text-[20px] font-[800] text-[#333] text-center mb-3">
              {isNe ? "अभ्यास पूरा भयो!" : "Step Completed!"}
            </Text>
            
            {/* Description */}
            <Text className="text-[14px] text-[#777] text-center leading-[22px] mb-7 font-[500] px-1">
              {isNe 
                ? "तपाईंले यो चरण पहिले नै पूरा गरिसक्नुभएको छ। के तपाईं यसलाई फेरि अभ्यास गर्न चाहनुहुन्छ?" 
                : "You have already completed this step. Would you like to practice it again?"}
            </Text>

            {/* Buttons */}
            <View className="flex-row gap-3 w-full">
              <TouchableOpacity 
                onPress={onReset} 
                className="flex-1 rounded-xl py-3 bg-[#F0DDE8] items-center"
                activeOpacity={0.7}
              >
                <Text className="text-[#9B5983] font-[800] text-[13px]">
                  {isNe ? "फेरि गर्नुहोस्" : "Reset Step"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={onClose} 
                className="flex-1 rounded-xl py-3 bg-[#C06898] items-center"
                activeOpacity={0.7}
              >
                <Text className="text-white font-[800] text-[13px]">
                  {isNe ? "जारी राख्नुहोस्" : "Continue"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};
