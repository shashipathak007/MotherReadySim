import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';

interface IncompleteStepModalProps {
  visible: boolean;
  onGoBackToIncomplete: () => void;
  onProceedAnyway: () => void;
}

export const IncompleteStepModal: React.FC<IncompleteStepModalProps> = ({ visible, onGoBackToIncomplete, onProceedAnyway }) => {
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  if (!visible) return null;

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 }}>
        <Animated.View
          entering={ZoomIn.springify().damping(14).stiffness(150)}
          exiting={ZoomOut.duration(200)}
          style={{
            backgroundColor: 'white',
            borderRadius: 28,
            width: '100%',
            maxWidth: 340,
            alignItems: 'center',
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.18,
            shadowRadius: 24,
            elevation: 14,
          }}
        >
          {/* Top accent strip */}
          <View style={{ width: '100%', height: 5, backgroundColor: '#E29A26' }} />

          <View style={{ paddingHorizontal: 28, paddingTop: 28, paddingBottom: 24, alignItems: 'center', width: '100%' }}>
            {/* Big alert emoji circle */}
            <View style={{
              width: 88,
              height: 88,
              borderRadius: 44,
              backgroundColor: '#FFF8EA',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
              borderWidth: 2.5,
              borderColor: '#FBE8C4',
            }}>
              <Text style={{ fontSize: 42 }}>⚠️</Text>
            </View>

            {/* Title */}
            <Text style={{ fontSize: 22, fontWeight: '800', color: '#222', textAlign: 'center', marginBottom: 10 }}>
              {isNe ? 'पुरा गर्नुभएको छैन!' : 'Step Incomplete!'}
            </Text>

            {/* Sub-text */}
            <Text style={{ fontSize: 14, color: '#777', textAlign: 'center', lineHeight: 22, marginBottom: 24, fontWeight: '500', paddingHorizontal: 4 }}>
              {isNe
                ? 'तपाईंले अघिल्ला केही कुराहरू छुटाउनु भएको छ। के तपाईं छुटेका कुरा पूरा गर्न चाहनुहुन्छ कि अर्को चरणमा जानुहुन्छ?'
                : 'You skipped some items in the previous sections. Do you want to go back and complete them or proceed to the next step?'}
            </Text>

            {/* Buttons */}
            <View style={{ flexDirection: 'row', gap: 12, width: '100%' }}>
              <TouchableOpacity
                onPress={onProceedAnyway}
                style={{
                  flex: 1,
                  borderRadius: 14,
                  paddingVertical: 13,
                  backgroundColor: '#F3F4F6',
                  alignItems: 'center',
                }}
                activeOpacity={0.7}
              >
                <Text style={{ color: '#6B7280', fontWeight: '800', fontSize: 13 }}>
                  {isNe ? 'अर्को चरणमा जाने' : 'Next Step'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onGoBackToIncomplete}
                style={{
                  flex: 1,
                  borderRadius: 14,
                  paddingVertical: 13,
                  backgroundColor: '#E29A26',
                  alignItems: 'center',
                }}
                activeOpacity={0.7}
              >
                <Text style={{ color: 'white', fontWeight: '800', fontSize: 13 }}>
                  {isNe ? 'पूरा गर्न फर्कनुहोस्' : 'Complete Step'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};
