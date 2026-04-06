/// <reference types="nativewind/types" />
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useGame } from '../context/GameContext';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
  withRepeat,
  FadeInUp,
  FadeInDown,
} from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { useGameAudio } from '../hooks/useGameAudio';

import { Scenario } from '../../data/firstTrimesterScenarios';
import { FIRST_TRIMESTER_SCENARIOS } from '../../data/firstTrimesterScenarios';
import { SECOND_TRIMESTER_SCENARIOS } from '../../data/secondTrimesterScenarios';
import { THIRD_TRIMESTER_SCENARIOS } from '../../data/thirdTrimesterScenarios';

type TrimesterKey = '1st' | '2nd' | '3rd';

interface TrimesterInfo {
  key: TrimesterKey;
  emoji: string;
  label: string;
  labelNe: string;
  weeks: string;
  weeksNe: string;
  color: string;
  scenarios: Scenario[];
}

const TRIMESTERS: TrimesterInfo[] = [
  {
    key: '1st',
    emoji: '🌱',
    label: 'First Trimester',
    labelNe: 'पहिलो त्रैमासिक',
    weeks: 'Weeks 1–12',
    weeksNe: 'हप्ता १–१२',
    color: '#6BBF8A',
    scenarios: FIRST_TRIMESTER_SCENARIOS,
  },
  {
    key: '2nd',
    emoji: '🌸',
    label: 'Second Trimester',
    labelNe: 'दोस्रो त्रैमासिक',
    weeks: 'Weeks 13–26',
    weeksNe: 'हप्ता १३–२६',
    color: '#E88FB4',
    scenarios: SECOND_TRIMESTER_SCENARIOS,
  },
  {
    key: '3rd',
    emoji: '🍼',
    label: 'Third Trimester',
    labelNe: 'तेस्रो त्रैमासिक',
    weeks: 'Weeks 27–40',
    weeksNe: 'हप्ता २७–४०',
    color: '#7BAED6',
    scenarios: THIRD_TRIMESTER_SCENARIOS,
  },
];

const { width: SCREEN_W } = Dimensions.get('window');

export default function Step4DangerSigns({ onNextStep }: { onNextStep: () => void }) {
  const { addQuizStar, showFeedback, clearFeedback, setQuizProgress, setCurrentWave } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';
  const { playCorrect, playIncorrect } = useGameAudio();

  // ── State ──
  const [selectedTrimester, setSelectedTrimester] = useState<TrimesterKey | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedResult, setSelectedResult] = useState<{ isCorrect: boolean } | null>(null);
  const hasAnswered = useRef(false);

  // Animation
  const shakeOffset = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeOffset.value }],
  }));

  // Derived
  const trimesterInfo = TRIMESTERS.find((t) => t.key === selectedTrimester);
  const scenarios = trimesterInfo?.scenarios ?? [];
  const scenario = scenarios[currentIdx];
  const totalScenarios = scenarios.length;

  // ── Sync quiz progress to GameContext ──
  useEffect(() => {
    if (selectedTrimester && totalScenarios > 0) {
      setQuizProgress(currentIdx + 1, totalScenarios);
    } else {
      setQuizProgress(0, 0);
    }
  }, [currentIdx, selectedTrimester, totalScenarios]);

  // ── Trimester selection ──
  const handleSelectTrimester = (key: TrimesterKey) => {
    setSelectedTrimester(key);
    setCurrentIdx(0);
    setSelectedResult(null);
    hasAnswered.current = false;
    clearFeedback();
    const tri = TRIMESTERS.find((t) => t.key === key);
    if (tri) setCurrentWave(isNe ? tri.labelNe : tri.label);
  };

  const handleBackToSelector = () => {
    setSelectedTrimester(null);
    setCurrentIdx(0);
    setSelectedResult(null);
    hasAnswered.current = false;
    clearFeedback();
    setCurrentWave('');
  };

  // ── Answer handling ──
  const handleSelect = (opt: { text: string; textNe: string; isCorrect: boolean }) => {
    if (hasAnswered.current) return;
    hasAnswered.current = true;

    if (selectedResult) return;

    const explanation = isNe ? scenario!.explanationNe : scenario!.explanation;

    if (opt.isCorrect) {
      addQuizStar();
      playCorrect();
      showFeedback(explanation, '', 'success');
      setSelectedResult({ isCorrect: true });
    } else {
      playIncorrect();
      shakeOffset.value = withSequence(
        withTiming(-5, { duration: 50 }),
        withRepeat(withTiming(5, { duration: 50 }), 3, true),
        withTiming(0, { duration: 50 })
      );
      showFeedback(explanation, '', 'error');

      // Allow retry after a brief pause
      setTimeout(() => {
        hasAnswered.current = false;
      }, 500);
    }
  };

  const handleNext = () => {
    setSelectedResult(null);
    hasAnswered.current = false;
    clearFeedback();
    if (currentIdx < totalScenarios - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      onNextStep();
    }
  };

  // ═══════════════════════════════════════════
  // RENDER: Trimester Selector
  // ═══════════════════════════════════════════
  if (!selectedTrimester) {
    return (
      <View className="flex-1 justify-end pb-10 px-4" pointerEvents="box-none">
        <Animated.View
          entering={FadeInUp.duration(400)}
          className="bg-white/95 rounded-[22px] p-6 border border-[#F5E1EC]"
          style={{
            zIndex: 50,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.08,
            shadowRadius: 16,
            elevation: 10,
          }}
        >
          {/* Heading */}
          <Text className="text-[12px] font-[800] text-[#9B5983] tracking-[1.5px] uppercase mb-1 text-center">
            {isNe ? 'गर्भावस्था परिदृश्य' : 'PREGNANCY SCENARIOS'}
          </Text>
          <Text className="text-[18px] font-[800] text-[#333] mb-1 text-center">
            {isNe ? 'आफ्नो त्रैमासिक छान्नुहोस्' : 'Choose Your Trimester'}
          </Text>
          <Text className="text-[13px] font-[500] text-[#777] mb-5 text-center">
            {isNe
              ? 'प्रत्येक त्रैमासिकमा २० परिदृश्यहरू छन्'
              : 'Each trimester has 20 scenarios to test your knowledge'}
          </Text>

          {/* Trimester cards */}
          <View className="gap-3">
            {TRIMESTERS.map((tri, idx) => (
              <Animated.View key={tri.key} entering={FadeInDown.delay(idx * 100).duration(350)}>
                <TouchableOpacity
                  className="flex-row items-center p-4 rounded-[16px] border-[1.5px]"
                  style={{
                    borderColor: tri.color + '60',
                    backgroundColor: tri.color + '10',
                    shadowColor: tri.color,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 6,
                    elevation: 3,
                  }}
                  onPress={() => handleSelectTrimester(tri.key)}
                  activeOpacity={0.7}
                >
                  <Text className="text-[32px] mr-3">{tri.emoji}</Text>
                  <View className="flex-1">
                    <Text className="text-[16px] font-[700] text-[#333]">
                      {isNe ? tri.labelNe : tri.label}
                    </Text>
                    <Text className="text-[12px] font-[600] mt-0.5" style={{ color: tri.color }}>
                      {isNe ? tri.weeksNe : tri.weeks} · {tri.scenarios.length}{' '}
                      {isNe ? 'परिदृश्य' : 'scenarios'}
                    </Text>
                  </View>
                  <Text className="text-[20px] text-[#CCC]">›</Text>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </Animated.View>
      </View>
    );
  }

  // ═══════════════════════════════════════════
  // RENDER: Quiz flow
  // ═══════════════════════════════════════════
  if (!scenario) return null;

  return (
    <View className="flex-1 justify-end pb-10 px-4" pointerEvents="box-none">
      {/* Scenario card */}
      <Animated.View
        className="bg-white/95 rounded-[22px] p-6 border border-[#F5E1EC]"
        style={[
          {
            zIndex: 50,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.08,
            shadowRadius: 16,
            elevation: 10,
            maxHeight: Dimensions.get('window').height * 0.65,
          },
          animatedStyle,
        ]}
      >
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          {/* Back to trimester selector */}
          <TouchableOpacity
            className="flex-row items-center mb-2"
            onPress={handleBackToSelector}
            activeOpacity={0.7}
          >
            <Text className="text-[11px] font-[700]" style={{ color: trimesterInfo!.color }}>
              ‹ {isNe ? 'त्रैमासिक बदल्नुहोस्' : 'Change Trimester'}
            </Text>
          </TouchableOpacity>

          {/* Progress indicator */}
          <View className="flex-row items-center mb-2">
            <View className="flex-1 h-[4px] bg-[#F5E1EC] rounded-full overflow-hidden mr-2">
              <View
                className="h-full rounded-full"
                style={{
                  width: `${((currentIdx + 1) / totalScenarios) * 100}%`,
                  backgroundColor: trimesterInfo!.color,
                }}
              />
            </View>
            <Text className="text-[11px] font-[700] text-[#9B5983]">
              {currentIdx + 1}/{totalScenarios}
            </Text>
          </View>

          {/* Scenario title & description */}
          <Text className="text-[12px] font-[800] text-[#9B5983] tracking-[1.5px] uppercase mb-2">
            {isNe ? scenario.titleNe : scenario.title}
          </Text>
          <Text className="text-[16px] font-[700] text-[#333] mb-[20px] leading-[24px]">
            {isNe ? scenario.descriptionNe : scenario.description}
          </Text>

          {/* Options / Next button */}
          <View className="gap-2.5">
            {!selectedResult ? (
              scenario.options.map((opt, i) => (
                <TouchableOpacity
                  key={i}
                  className="p-4 bg-[#FFFBFD] rounded-[14px] border-[1.5px] border-[#F5E1EC]"
                  style={{
                    shadowColor: '#F5E1EC',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 2,
                  }}
                  onPress={() => handleSelect(opt)}
                  disabled={selectedResult !== null}
                  activeOpacity={0.7}
                >
                  <Text className="text-[15px] text-[#444] font-[600]">
                    {isNe ? opt.textNe : opt.text}
                  </Text>
                </TouchableOpacity>
              ))
            ) : (
              <TouchableOpacity
                className="py-[16px] rounded-[14px] items-center"
                style={{ backgroundColor: trimesterInfo!.color }}
                onPress={handleNext}
                activeOpacity={0.8}
              >
                <Text className="text-white text-[16px] font-[800]">
                  {currentIdx === totalScenarios - 1
                    ? isNe
                      ? 'खेल सकियो'
                      : 'Finish Scenarios'
                    : isNe
                    ? 'अर्को परिदृश्य'
                    : 'Next Scenario'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
}
