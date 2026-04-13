/// <reference types="nativewind/types" />
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Animated, { FadeIn, FadeOut, FadeInUp } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { useGame } from '../context/GameContext';

const { height: SCREEN_H } = Dimensions.get('window');

interface TutorialOverlayProps {
  visible: boolean;
  onClose: () => void;
  onNext: (currentStep: number) => void;
}

export const TutorialOverlay: React.FC<TutorialOverlayProps> = ({ visible, onClose, onNext }) => {
  const { tutorialStep, setTutorialStep } = useGame();
  const step = tutorialStep;
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  const tutorialSteps = [
    {
      title: isNe ? 'नमस्ते! म तपाईंकी साथी!' : "Hi there! I'm your guide!",
      description: isNe
        ? 'म तपाईंलाई अस्पतालको लागि तयारी गर्न मद्दत गर्छु — झोला, कागजात, सम्पर्क, र गर्भावस्था परिदृश्यहरू सबै सिकौं!'
        : "I'll help you prepare for the hospital — packing your bag, documents, contacts, and pregnancy scenarios!",
      emoji: '',
    },
    {
      title: isNe ? 'अलि बेर थिच्नुहोस्!' : 'Tap to Learn!',
      description: isNe
        ? 'कुनै पनि सामानमा थिचिराख्नुहोस् — किन चाहिन्छ भन्ने कुरा देख्नुहुन्छ!'
        : 'Tap any item to see why it matters. Every item has a reason!',
      emoji: '',
    },
    {
      title: isNe ? 'छोएर तान्नुहोस्!' : 'Drag & Drop!',
      description: isNe
        ? 'सामानलाई छोएर झोलामा तान्नुहोस्। सही भए हरियो, गलत भए फर्किन्छ!'
        : 'Drag items into the bag. Correct ones stay, wrong ones bounce back!',
      emoji: '',
    },
    {
      title: isNe ? 'भाषा र आवाज' : 'Language & Sound',
      description: isNe
        ? 'माथिको पट्टीमा भाषा बटन थिचेर अंग्रेजी–नेपाली बदल्नुहोस्। आवाज बटनले आवाज खोल्ने वा बन्द गर्छ!'
        : 'Use the top bar to switch language or toggle sound on/off!',
      emoji: '',
    },
  ];

  if (!visible) return null;

  const currentTutorial = tutorialSteps[step];
  const isLast = step === tutorialSteps.length - 1;

  // During tap (step 1) and drag (step 2) demos, tapping the backdrop should
  // NOT close/skip — it should advance to next step instead
  const isDemoStep = step === 1 || step === 2;

  const handleNext = () => onNext(step);
  const handleSkip = () => { setTutorialStep(0); onClose(); };

  return (
    <View
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 200 }}
      pointerEvents="box-none"
    >
      {/* Backdrop — blocks taps on demo steps, dim overlay on info steps */}
      {/* On ALL steps: backdrop absorbs touches so tapping screen never dismisses tutorial */}
      <Animated.View
        entering={FadeIn.duration(200)}
        exiting={FadeOut.duration(150)}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: isDemoStep ? 'transparent' : 'rgba(0,0,0,0.35)',
        }}
        pointerEvents={isDemoStep ? 'none' : 'box-none'}
      >
        {!isDemoStep && (
          /* absorb taps on the dark area — do NOTHING, tutorial only closes via buttons */
          <View style={{ flex: 1 }} />
        )}
      </Animated.View>

      {/* ── TIP CARD — anchored just below the header ── */}
      <Animated.View
        key={step}
        entering={FadeInUp.duration(350).springify()}
        style={{
          position: 'absolute',
          left: 12,
          right: 12,
          top: 50,
          zIndex: 201,
        }}
        pointerEvents="box-none"
      >
        {/* Bubble tail pointing UP (toward header) */}
        <View
    style={{
      position: 'absolute',  // Forces the tail out of the normal layout flow
      bottom: -13,           // Pushes it completely down, sticking out of the bottom edge
      right: 24,             // Pins it to the right side
      width: 0, 
      height: 0,
      borderTopWidth: 14,    // Points the triangle DOWN
      borderTopColor: 'white', 
      borderLeftWidth: 12, 
      borderLeftColor: 'transparent',
      borderRightWidth: 12, 
      borderRightColor: 'transparent',
      zIndex: 1,
    }}
  />

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 18,
            paddingBottom: 16,
            borderWidth: 1.5,
            borderColor: '#F5E1EC',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.12,
            shadowRadius: 14,
            elevation: 14,
          }}
        >
          {/* Skip button */}
          {!isLast && (
            <TouchableOpacity
              onPress={handleSkip}
              activeOpacity={0.6}
              style={{
                position: 'absolute', top: 12, right: 12, zIndex: 10,
                backgroundColor: '#FFF0F6', borderRadius: 20,
                paddingHorizontal: 12, paddingVertical: 6,
                borderWidth: 1, borderColor: '#F5E1EC',
              }}
            >
              <Text style={{ fontSize: 11, fontWeight: '700', color: '#C06898' }}>
                {isNe ? 'छोड्नुहोस्' : 'Skip'}
              </Text>
            </TouchableOpacity>
          )}

          {/* Badge + emoji */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <View style={{ backgroundColor: '#FFF0F6', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4, marginRight: 8 }}>
              <Text style={{ fontSize: 11, fontWeight: '800', color: '#C06898', letterSpacing: 0.5 }}>
                {step + 1}/{tutorialSteps.length}
              </Text>
            </View>
            <Text style={{ fontSize: 20 }}>{currentTutorial.emoji}</Text>
          </View>

          {/* Title */}
          <Text style={{ fontSize: 19, fontWeight: '800', color: '#333', marginBottom: 6 }}>
            {currentTutorial.title}
          </Text>

          {/* Description */}
          <Text style={{ fontSize: 15, color: '#555', lineHeight: 22, fontWeight: '500', marginBottom: 14 }}>
            {currentTutorial.description}
          </Text>

          {/* Progress dots + Next */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {tutorialSteps.map((_, i) => (
                <View
                  key={i}
                  style={{
                    height: 7, borderRadius: 4, marginRight: 6,
                    width: step === i ? 24 : 7,
                    backgroundColor: step === i ? '#C06898' : '#F0DDE8',
                  }}
                />
              ))}
            </View>

            <TouchableOpacity
              onPress={handleNext}
              activeOpacity={0.75}
              style={{ backgroundColor: '#C06898', borderRadius: 30, paddingHorizontal: 22, paddingVertical: 11 }}
            >
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 15 }}>
                {isLast ? (isNe ? 'सुरु गरौं!' : "Let's Go!") : (isNe ? 'अर्को →' : 'Next →')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};
