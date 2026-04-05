import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useGame } from './context/GameContext';
import Step1Bag from './screens/Step1Bag';
import Step2Documents from './screens/Step2Documents';
import Step3Contacts from './screens/Step3Contacts';
import Step4DangerSigns from './screens/Step4DangerSigns';
import Step5Summary from './screens/Step5Summary';
import { TransitionCard } from './components/TransitionCard';
import { SafeAreaView } from 'react-native-safe-area-context';

import Animated, { FadeInUp, FadeOutDown } from 'react-native-reanimated';
import { TutorialOverlay } from './components/TutorialOverlay';
import { useTranslation } from 'react-i18next';

export default function GameContainer() {
  const {
    currentStep, setStep, isReady, resetCurrentStep, resetStepData,
    packedBagItems, collectedDocuments, savedContacts, feedback, clearFeedback, currentWave, quizProgress
  } = useGame();
  const { i18n } = useTranslation();

  const isNepali = i18n.language === 'ne';
  const toggleLanguage = () => {
    i18n.changeLanguage(isNepali ? 'en' : 'ne');
  };

  useEffect(() => {
    clearFeedback();
  }, [currentStep]);

  const [showTransition, setShowTransition] = useState(false);
  const [transitionStep, setTransitionStep] = useState<1 | 2 | 3 | 4>(1);
  const [showTutorial, setShowTutorial] = useState(true);

  if (!isReady) {
    return <View className="flex-1 bg-[#FFF9FB]" />;
  }

  const handleNextStep = (stepFinished: 1 | 2 | 3 | 4) => {
    setTransitionStep(stepFinished);
    setShowTransition(true);
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
    setStep((transitionStep + 1) as any);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1Bag onNextStep={() => handleNextStep(1)} />;
      case 2: return <Step2Documents onNextStep={() => handleNextStep(2)} />;
      case 3: return <Step3Contacts onNextStep={() => handleNextStep(3)} />;
      case 4: return <Step4DangerSigns onNextStep={() => handleNextStep(4)} />;
      case 5: return <Step5Summary onReplay={() => setStep(1)} />;
      default: return null;
    }
  };

  const getStepName = (step: number) => {
    if (isNepali) {
      switch (step) {
        case 1: return "अस्पतालको झोला";
        case 2: return "महत्त्वपूर्ण कागजातहरू";
        case 3: return "आपतकालीन सम्पर्क";
        case 4: return "खतराका संकेत";
        case 5: return "नतिजा";
        default: return "";
      }
    }
    switch (step) {
      case 1: return "Hospital Bag";
      case 2: return "Important Documents";
      case 3: return "Emergency Contacts";
      case 4: return "Danger Signs";
      case 5: return "Summary";
      default: return "";
    }
  };

  const getWaveLabel = () => {
    if (currentStep === 1) {
      const waveNe: Record<string, string> = { Clothing: 'लत्ताकपडा', Hygiene: 'सरसफाइ', Comfort: 'सुविधा', Baby: 'शिशु' };
      return `🎒 ${packedBagItems.length}/28 · ${isNepali ? (waveNe[currentWave] || currentWave) : currentWave.toUpperCase()}`;
    }
    if (currentStep === 2) {
      const waveNe: Record<string, string> = { Identity: 'परिचय', 'Aama Programme': 'आमा कार्यक्रम', Medical: 'स्वास्थ्य' };
      return `📋 ${collectedDocuments.length}/15 · ${isNepali ? (waveNe[currentWave] || currentWave) : currentWave.toUpperCase()}`;
    }
    if (currentStep === 3) {
      const waveNe: Record<string, string> = { CRITICAL: 'अत्यन्त जरुरी', IMPORTANT: 'महत्त्वपूर्ण', INFO: 'जानकारी' };
      return `📱 ${savedContacts.length}/8 · ${isNepali ? (waveNe[currentWave] || currentWave) : currentWave}`;
    }
    if (currentStep === 4) return `🩺 ${quizProgress.current}/${quizProgress.total} · ${isNepali ? 'प्रश्नोत्तरी' : 'QUIZ'}`;
    return '';
  };

  return (
    <View className="flex-1 bg-[#FFF9FB]">
      <View className="flex-1">
        {renderStep()}

        {/* Feedback toast is rendered inside the header block below */}
      </View>

      {/* Floating Header — matching reference images */}
      <View className="absolute top-0 left-0 right-0 z-[100]">
        <SafeAreaView edges={['top']}>
          {/* Top bar: Prev | Step title | Next */}
          <View className="flex-row items-center justify-between mx-4 mt-1.5 px-1.5 py-2">
            {/* Prev button — same style as Next */}
            <TouchableOpacity
              className={`px-5 py-2 rounded-full bg-[#C06898] ${currentStep === 1 ? 'opacity-30' : ''}`}
              onPress={() => {
                const prevStep = Math.max(1, currentStep - 1) as any;
                // Reset completed step data so it replays fresh (no popup)
                resetStepData(prevStep);
                setStep(prevStep);
              }}
              disabled={currentStep === 1}
              activeOpacity={0.7}
            >
              <Text className="text-[13px] font-[700] text-white">{isNepali ? 'पछिल्लो' : 'Prev'}</Text>
            </TouchableOpacity>

            {/* Center: Step label + name */}
            <View className="items-center flex-1 mx-3">
              <Text className="text-[10px] font-[800] text-[#C06898] tracking-[1px] uppercase mb-0.5">
                {isNepali ? `चरण ${currentStep}` : `STEP ${currentStep}`}
              </Text>
              <Text className="text-[15px] font-[800] text-[#333]">
                {getStepName(currentStep)}
              </Text>
            </View>

            {/* Next button — filled pill */}
            <TouchableOpacity
              className={`px-5 py-2 rounded-full bg-[#C06898] ${currentStep === 5 ? 'opacity-30' : ''}`}
              onPress={() => setStep(Math.min(5, currentStep + 1) as any)}
              disabled={currentStep === 5}
              activeOpacity={0.7}
            >
              <Text className="text-[13px] font-[700] text-white">{isNepali ? 'अर्को' : 'Next'}</Text>
            </TouchableOpacity>
          </View>

          {/* Sub-bar: wave info + language toggle + reset */}
          {currentStep < 5 && (
            <View className="mx-5 mt-0.5 flex-row justify-between items-center px-4 py-1.5 bg-white/85 rounded-full border border-[#F5E1EC]">
              <Text className="text-[10px] font-[800] text-[#9B5983] tracking-[0.3px]" numberOfLines={1}>{getWaveLabel()}</Text>
              <View className="flex-row items-center gap-2">
                <TouchableOpacity className="w-7 h-7 bg-[#F9F0F5] rounded-full justify-center items-center" onPress={toggleLanguage}>
                  <Text className="text-[10px] font-[800] text-[#9B5983]">{isNepali ? 'EN' : 'ने'}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="px-3 py-1 bg-white rounded-full border border-[#F5E1EC]" onPress={() => { resetCurrentStep(); clearFeedback(); }}>
                  <Text className="text-[10px] font-[800] text-[#D4849B]">{isNepali ? 'रिसेट' : 'Reset'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Feedback toast — flows after sub-bar, consistent in both languages */}
          {feedback && (
            <Animated.View
              entering={FadeInUp.duration(300)}
              exiting={FadeOutDown.duration(200)}
              className="mx-4 mt-2.5"
            >
              <View className={`flex-row rounded-[18px] overflow-hidden border shadow-black shadow-opacity-10 shadow-radius-10 elevation-8 ${feedback.type === 'error'
                ? 'bg-[#FFF8F8] border-[#FECACA]'
                : feedback.type === 'info'
                  ? 'bg-white border-[#F0DDE8]'
                  : 'bg-[#F0FDF4] border-[#BBF7D0]'
              }`}>
                {/* Icon strip */}
                <View className={`w-[52px] justify-center items-center ${feedback.type === 'error'
                  ? 'bg-[#FEE2E2]'
                  : feedback.type === 'info'
                    ? 'bg-[#FDF2F8]'
                    : 'bg-[#DCFCE7]'
                }`}>
                  <View className={`w-8 h-8 rounded-lg justify-center items-center ${feedback.type === 'error'
                    ? 'bg-[#FCA5A5]'
                    : feedback.type === 'info'
                      ? 'bg-[#F0C6DB]'
                      : 'bg-[#86EFAC]'
                  }`}>
                    <Text className="text-white text-[16px] font-[900]">
                      {feedback.type === 'success' ? '✓' : feedback.type === 'error' ? '✗' : '💡'}
                    </Text>
                  </View>
                </View>

                {/* Content */}
                <View className="flex-1 py-3.5 px-4 pr-10">
                  <Text className={`text-[14px] font-[800] mb-1 ${feedback.type === 'error' ? 'text-[#B91C1C]' : feedback.type === 'info' ? 'text-[#9B5983]' : 'text-[#166534]'}`}>
                    {feedback.message}
                  </Text>
                  {feedback.detail ? (
                    <Text className="text-[12.5px] text-[#555] leading-[18px] font-[500]">{feedback.detail}</Text>
                  ) : null}
                </View>

                {/* Close button */}
                <TouchableOpacity
                  onPress={clearFeedback}
                  className="absolute top-2.5 right-2.5 w-7 h-7 bg-black/5 rounded-full justify-center items-center"
                  activeOpacity={0.6}
                >
                  <Text className="text-[12px] text-[#999] font-[700]">✕</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          )}
        </SafeAreaView>
      </View>

      <TransitionCard
        visible={showTransition}
        step={transitionStep}
        onComplete={handleTransitionComplete}
      />

      <TutorialOverlay
        visible={showTutorial}
        onClose={() => setShowTutorial(false)}
      />
    </View>
  );
}
