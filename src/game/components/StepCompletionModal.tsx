import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';

interface StepCompletionModalProps {
  visible: boolean;
  onClose: () => void;
  onReset: () => void;
  /** If provided, shows a "Next Step" button instead of Continue — for first-time completions */
  onNext?: () => void;
}

export const StepCompletionModal: React.FC<StepCompletionModalProps> = ({ visible, onClose, onReset, onNext }) => {
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  if (!visible) return null;

  const isFirstTime = !!onNext;

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
          <View style={{ width: '100%', height: 5, backgroundColor: isFirstTime ? '#C06898' : '#9B5983' }} />

          <View style={{ paddingHorizontal: 28, paddingTop: 28, paddingBottom: 24, alignItems: 'center', width: '100%' }}>
            {/* Big celebration emoji circle */}
            <View style={{
              width: 88,
              height: 88,
              borderRadius: 44,
              backgroundColor: '#FFF5F9',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
              borderWidth: 2.5,
              borderColor: '#F5E1EC',
            }}>
              <Text style={{ fontSize: 42 }}>{isFirstTime ? '🎉' : '🎖️'}</Text>
            </View>

            {/* Title */}
            <Text style={{ fontSize: 22, fontWeight: '800', color: '#222', textAlign: 'center', marginBottom: 10 }}>
              {isFirstTime
                ? (isNe ? 'बधाई छ! 🌟' : 'Great Job! 🌟')
                : (isNe ? 'यो चरण सकियो!' : 'Step Completed!')}
            </Text>

            {/* Sub-text */}
            <Text style={{ fontSize: 14, color: '#777', textAlign: 'center', lineHeight: 22, marginBottom: 24, fontWeight: '500', paddingHorizontal: 4 }}>
              {isFirstTime
                ? (isNe
                    ? 'तपाईंले यो चरण सफलतापूर्वक पूरा गर्नुभयो! अर्को चरणमा जाने?'
                    : 'You completed this step successfully! Ready for the next one?')
                : (isNe
                    ? 'तपाईंले यो चरण पहिले नै पूरा गर्नुभएको छ। फेरि अभ्यास गर्नुहुन्छ?'
                    : 'You have already completed this step. Would you like to practice again?')}
            </Text>

            {/* Buttons */}
            <View style={{ flexDirection: 'row', gap: 12, width: '100%' }}>
              <TouchableOpacity
                onPress={onReset}
                style={{
                  flex: 1,
                  borderRadius: 14,
                  paddingVertical: 13,
                  backgroundColor: '#F0DDE8',
                  alignItems: 'center',
                }}
                activeOpacity={0.7}
              >
                <Text style={{ color: '#9B5983', fontWeight: '800', fontSize: 13 }}>
                  {isNe ? 'फेरि खेल्ने' : isFirstTime ? 'Stay & Practice' : 'Reset Step'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={isFirstTime ? onNext : onClose}
                style={{
                  flex: 1,
                  borderRadius: 14,
                  paddingVertical: 13,
                  backgroundColor: '#C06898',
                  alignItems: 'center',
                }}
                activeOpacity={0.7}
              >
                <Text style={{ color: 'white', fontWeight: '800', fontSize: 13 }}>
                  {isNe ? 'अगाडि बढ्ने' : isFirstTime ? 'Next Step →' : 'Continue'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};
