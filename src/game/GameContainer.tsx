/// <reference types="nativewind/types" />
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useGame } from './context/GameContext';
import Step1 from './screens/Step1';
import Step2 from './screens/Step2';
import Step3 from './screens/Step3';
import Step4 from './screens/Step4';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScenarioImages } from './constants/ScenarioImages';

import Animated, { FadeInUp, FadeOutDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { TutorialOverlay } from './components/TutorialOverlay';
import { useTranslation } from 'react-i18next';

const charGoodJob = require('../../assets/images/char_correct.png');
const charOhNo = require('../../assets/images/char_incorrect.png');
const charInfo = require('../../assets/images/char_tutorial.png');

const { width: SCREEN_W } = Dimensions.get('window');

export default function GameContainer() {
  const {
    currentStep, setStep, isReady, resetCurrentStep, resetGame,
    packedBagItems, savedContacts, feedback, clearFeedback, currentWave, quizProgress,
    soundEnabled, toggleSound, setTutorialStep, showTutorial,
    completeTutorial, selectedTrimester, quizIndex, shuffledScenarioIds, step3CharacterVisible, quizReviewVisible, quizResults, setQuizReviewVisible,
    currentCategoryIdx, setCategoryIdx
  } = useGame();
  const { i18n } = useTranslation();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const isNepali = i18n.language === 'ne';
  const toggleLanguage = () => {
    i18n.changeLanguage(isNepali ? 'en' : 'ne');
  };

  const [entryStep, setEntryStep] = useState<number>(1);

  // No auto-demo actions needed in GameContainer — animations handled in Step1

  // Jump to the requested step if navigated with initialStep param
  useEffect(() => {
    const initialStep = route.params?.initialStep;
    if (initialStep && initialStep >= 1 && initialStep <= 5) {
      setStep(initialStep as any);
      setEntryStep(initialStep);
    }
    // Clear the param so re-navigating with same step works
    if (route.params?.initialStep) {
      navigation.setParams({ initialStep: undefined });
    }
  }, [route.params?.initialStep]);

  useEffect(() => {
    clearFeedback();
  }, [currentStep]);

  if (!isReady) {
    return <View className="flex-1 bg-[#FFF9FB]" />;
  }

  const handleNextStep = (stepFinished: 1 | 2 | 3) => {
    setStep((stepFinished + 1) as any);
  };



  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1 onNextStep={() => handleNextStep(1)} />;
      case 2: return <Step2 onNextStep={() => handleNextStep(2)} />;
      case 3: return <Step3 onNextStep={() => handleNextStep(3)} />;
      case 4: return <Step4 onReplay={() => { resetGame(); navigation.navigate('Welcome'); }} />;
      default: return null;
    }
  };

  const getStepName = (step: number) => {
    if (isNepali) {
      switch (step) {
        case 1: return "अस्पतालको झोला";
        case 2: return "सम्पर्क नम्बरहरू";
        case 3: return "गर्भावस्था परिदृश्य";
        case 4: return "नतिजा";
        default: return "";
      }
    }
    switch (step) {
      case 1: return "Hospital Bag";
      case 2: return "Emergency Contacts";
      case 3: return "Pregnancy Scenarios";
      case 4: return "Summary";
      default: return "";
    }
  };

  const getWaveLabel = () => {
    if (currentStep === 1) {
      const waveNe: Record<string, string> = {
        Clothing: 'लत्ताकपडा',
        Hygiene: 'सरसफाइ',
        Comfort: 'सुविधा',
        Baby: 'शिशु',
        LegalDocs: 'कानुनी कागजातहरू',
        HealthDocs: 'स्वास्थ्य कार्डहरू',
        ClinicalDocs: 'जाँच रिपोर्टहरू'
      };
      return `🎒 ${packedBagItems.length}/43 · ${isNepali ? (waveNe[currentWave] || currentWave) : currentWave.replace('Docs', ' Docs').toUpperCase()}`;
    }
    if (currentStep === 2) {
      const waveNe: Record<string, string> = { CRITICAL: 'एकदम जरुरी', IMPORTANT: 'जरुरी', INFO: 'जानकारी' };
      return `📱 ${savedContacts.length}/8 · ${isNepali ? (waveNe[currentWave] || currentWave) : currentWave}`;
    }
    if (currentStep === 3) {
      if (quizProgress.total > 0) {
        return `🤰 ${quizProgress.current}/${quizProgress.total} · ${currentWave || (isNepali ? 'परिदृश्य' : 'SCENARIOS')}`;
      }
      return `🤰 ${isNepali ? 'त्रैमासिक छान्नुहोस्' : 'SELECT TRIMESTER'}`;
    }
    return '';
  };

  // Get the right character image and exclamation for feedback type
  const getFeedbackCharacter = () => {
    if (!feedback) return { image: charInfo, exclamation: '', bgColor: 'bg-white', borderColor: 'border-[#F0DDE8]', textColor: 'text-[#9B5983]' };

    if (feedback.type === 'success') {
      return {
        image: charGoodJob,
        exclamation: isNepali ? 'शाबास!' : 'Good Job!',
        bgColor: 'bg-[#F0FDF4]',
        borderColor: 'border-[#86EFAC]',
        textColor: 'text-[#166534]',
        accentColor: '#16A34A',
      };
    }
    if (feedback.type === 'error') {
      return {
        image: charOhNo,
        exclamation: isNepali ? 'धेरैले यो गल्ती गर्छन्!' : 'Many get this one wrong!',
        bgColor: 'bg-[#FFFBEB]',
        borderColor: 'border-[#FDE68A]',
        textColor: 'text-[#92400E]',
        accentColor: '#D97706',
      };
    }
    if (feedback.type === 'question') {
      return {
        image: charInfo,
        exclamation: '',
        bgColor: 'bg-[#FFF9FB]',
        borderColor: 'border-[#F5E1EC]',
        textColor: 'text-[#9B5983]',
        accentColor: '#9B5983',
      };
    }
    return {
      image: charInfo,
      exclamation: isNepali ? 'जानकारी 💡' : 'Did you know? 💡',
      bgColor: 'bg-white',
      borderColor: 'border-[#F0DDE8]',
      textColor: 'text-[#9B5983]',
      accentColor: '#9B5983',
    };
  };

  const getBackgroundImage = () => {
    switch (currentStep) {
      case 1: return require('../../assets/images/bedroom_bg.png');
      case 2: return require('../../assets/images/phone_bg.png');
      case 3:
        if (selectedTrimester && shuffledScenarioIds.length > 0) {
          const currentId = shuffledScenarioIds[quizIndex];
          let prefix = '';
          if (selectedTrimester === '1st') prefix = 'F';
          else if (selectedTrimester === '2nd') prefix = 'S';
          else if (selectedTrimester === '3rd') prefix = 'T';

          if (prefix && currentId) {
            const imgKey = prefix + currentId;
            if (ScenarioImages[imgKey]) {
              return ScenarioImages[imgKey];
            }
          }
        }
        return require('../../assets/images/bedroom_bg.png');
      case 4: return require('../../assets/images/aama_ready_main_bg.png');
      default: return require('../../assets/images/bedroom_bg.png');
    }
  };

  return (
    <View className="flex-1 bg-[#FFF9FB]">
      {/* 1. Global Background behind everything */}
      <View className="absolute inset-0">
        <ImageBackground
          source={getBackgroundImage()}
          className="flex-1"
          resizeMode="cover"
          blurRadius={1.5}
        >
          <LinearGradient
            colors={[
              'rgba(255,255,255,0.92)',
              'rgba(243,58,106,0.06)',
              'rgba(176,76,138,0.10)'
            ]}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
        </ImageBackground>
      </View>

      {/* 2. Character Rendered below the interactive steps */}
      {currentStep < 4 && (currentStep !== 3 || step3CharacterVisible) && (
        <View
          className={`absolute pointer-events-none flex-col justify-end ${showTutorial ? 'z-[210]' : 'z-10'}`}
          style={{
            bottom: 0,
            right: (currentStep === 3 || showTutorial) ? undefined : -200,
            left: (currentStep === 3 || showTutorial) ? 160 : undefined,
            width: SCREEN_W * 1.1,
            height: Dimensions.get('window').height * 0.90
          }}
        >
          <Image
            source={feedback ? getFeedbackCharacter().image : charInfo}
            style={{ width: '100%', height: '100%' }}
            resizeMode="contain"
          />
        </View>
      )}

      {/* 3. Steps with transparent bg taking interactivity */}
      <View className="flex-1" style={{ zIndex: 20 }}>
        {renderStep()}
      </View>

      {/* Floating Header */}
      <View className="absolute top-0 left-0 right-0 z-[100]">
        <SafeAreaView edges={['top']}>
          {/* Top bar: Back | Step title | Next */}
          <View className="flex-row items-center justify-between mx-4 mt-1.5 px-1.5 py-2">
            {/* Back button */}
            <TouchableOpacity
              className="px-5 py-2 rounded-full bg-[#C06898]"
              onPress={() => {
                if (currentStep === 3 && quizReviewVisible) {
                  setQuizReviewVisible(false);
                } else if (currentStep === 1) {
                  if (currentCategoryIdx > 0) {
                    setCategoryIdx(currentCategoryIdx - 1);
                  } else {
                    navigation.navigate('Welcome');
                  }
                } else if (currentStep === 2) {
                  if (currentCategoryIdx > 0) {
                    setCategoryIdx(currentCategoryIdx - 1);
                  } else {
                    setStep(1, 6); // Go to Step 1, last category (ClinicalDocs)
                  }
                } else if (currentStep === 3) {
                  setStep(2, 2); // Go to Step 2, last category (INFO)
                } else if (currentStep === entryStep) {
                  navigation.navigate('Welcome');
                } else {
                  const prevStep = Math.max(1, currentStep - 1) as any;
                  setStep(prevStep);
                }
              }}
              activeOpacity={0.7}
            >
              <Text className="text-[15px] font-[700] text-white">{isNepali ? 'पछाडि' : 'Back'}</Text>
            </TouchableOpacity>

            {/* Center: Step label + name */}
            <View className="items-center flex-1 mx-3">
              <Text className="text-[12px] font-[800] text-[#C06898] tracking-[1px] uppercase mb-0.5">
                {isNepali ? `चरण ${currentStep}` : `STEP ${currentStep}`}
              </Text>
              <Text className="text-[15px] font-[800] text-[#333]">
                {getStepName(currentStep)}
              </Text>
            </View>

            {/* Next button */}
            <TouchableOpacity
              className={`px-5 py-2 rounded-full bg-[#C06898] ${currentStep === 4 ? 'opacity-30' : ''}`}
              onPress={() => {
                if (currentStep === 1) {
                  if (currentCategoryIdx < 6) {
                    setCategoryIdx(currentCategoryIdx + 1);
                  } else {
                    setStep(2);
                  }
                } else if (currentStep === 2) {
                  if (currentCategoryIdx < 2) {
                    setCategoryIdx(currentCategoryIdx + 1);
                  } else {
                    setStep(3);
                  }
                } else if (currentStep === 3) {
                  if (quizResults && quizResults.length >= 1 && !quizReviewVisible) {
                    clearFeedback();
                    setQuizReviewVisible(true);
                  } else {
                    setStep(4);
                  }
                } else {
                  setStep(Math.min(4, currentStep + 1) as any);
                }
              }}
              disabled={currentStep === 4}
              activeOpacity={0.7}
            >
              <Text className="text-[15px] font-[700] text-white">{isNepali ? 'अर्को' : 'Next'}</Text>
            </TouchableOpacity>
          </View>

          {/* Sub-bar: wave info + language toggle + reset */}
          {currentStep < 4 && !(currentStep === 3 && quizReviewVisible) && (
            <View className="mx-5 mt-0.5 flex-row justify-between items-center px-4 py-1.5 bg-white/85 rounded-full border border-[#F5E1EC]">
              <Text className="text-[13px] font-[800] text-[#9B5983] tracking-[0.3px]" numberOfLines={1}>{getWaveLabel()}</Text>
              <View className="flex-row items-center gap-2">
                <TouchableOpacity className="w-7 h-7 bg-[#F9F0F5] rounded-full justify-center items-center" onPress={toggleSound}>
                  <Text className="text-[12px]">{soundEnabled ? '🔊' : '🔇'}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-7 h-7 bg-[#F9F0F5] rounded-full justify-center items-center" onPress={toggleLanguage}>
                  <Text className="text-[12px] font-[800] text-[#9B5983]">{isNepali ? 'EN' : 'ने'}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="px-3 py-1 bg-white rounded-full border border-[#F5E1EC]" onPress={() => { resetCurrentStep(); clearFeedback(); }}>
                  <Text className="text-[12px] font-[800] text-[#D4849B]">{isNepali ? 'रिसेट' : 'Reset'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Enhanced Feedback — speech bubble (hidden on review screen) */}
          {feedback && !quizReviewVisible && (() => {
            const feedbackStyle = getFeedbackCharacter();
            return (
              <Animated.View
                entering={FadeInUp.duration(350)}
                exiting={FadeOutDown.duration(200)}
                className="mt-2 w-full px-4 z-20"
              >
                <View className="flex-1">
                  <View className={`rounded-[18px] overflow-hidden border-[1.5px] shadow-black/10 shadow-opacity-12 shadow-radius-10 elevation-8 ${feedbackStyle.bgColor} ${feedbackStyle.borderColor}`}>
                    {/* Exclamation header — "Good Job!" or "Oh No!" */}
                    {feedbackStyle.exclamation ? (
                      <View className="pt-3 px-3.5 pr-9">
                        <Text className={`text-[18px] font-[700] mb-0.5 ${feedbackStyle.textColor}`}>
                          {feedbackStyle.exclamation}
                        </Text>
                      </View>
                    ) : (
                      <View className="pt-2" />
                    )}

                    {/* Feedback content */}
                    <View className="pb-3 px-3.5 pr-9">
                      <Text className={`text-[16px] font-[500] mb-0.2 ${feedback.type === 'error' ? 'text-[#92400E]' : feedback.type === 'info' ? 'text-[#7C3E6B]' : 'text-[#14532D]'}`}>
                        {feedback.message}
                      </Text>
                      {feedback.detail ? (
                        <Text className="text-[14px] text-[#555] leading-[20px] font-[500] mt-0.5">{feedback.detail}</Text>
                      ) : null}
                    </View>

                    {/* Close button */}
                    <TouchableOpacity
                      onPress={clearFeedback}
                      className="absolute top-2 right-2 w-7 h-7 bg-black/8 rounded-full justify-center items-center"
                      activeOpacity={0.6}
                    >
                      <Text className="text-[16px] text-[#888] font-[700]">✕</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Bubble tail pointing to character */}
                  <View
                    style={{
                      width: 0,
                      height: 0,
                      alignSelf: 'flex-end',
                      marginRight: 40,
                      borderTopWidth: 14,
                      borderTopColor: feedback.type === 'error' ? '#FFFBEB' : feedback.type === 'info' ? 'white' : '#F0FDF4',
                      borderLeftWidth: 14,
                      borderLeftColor: 'transparent',
                      borderRightWidth: 0,
                      borderRightColor: 'transparent',
                    }}
                  />
                </View>
              </Animated.View>
            );
          })()}
        </SafeAreaView>
      </View>



      <TutorialOverlay
        visible={showTutorial}
        onClose={() => { completeTutorial(); resetCurrentStep(); }}
        onNext={(step) => {
          if (step < 3) {
            setTutorialStep(step + 1);
          } else {
            setTutorialStep(0);
            completeTutorial();
            // Reset any items packed during the tutorial demo so player starts fresh at 0/43
            resetCurrentStep();
          }
        }}
      />
    </View>
  );
}

