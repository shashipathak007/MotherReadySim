/// <reference types="nativewind/types" />
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { useGame } from '../context/GameContext';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
  withRepeat,
  FadeInUp,
  FadeInDown,
  Easing,
  cancelAnimation,
} from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { useGameAudio } from '../hooks/useGameAudio';

import { Scenario } from '../../data/firstTrimesterScenarios';
import { FIRST_TRIMESTER_SCENARIOS } from '../../data/firstTrimesterScenarios';
import { SECOND_TRIMESTER_SCENARIOS } from '../../data/secondTrimesterScenarios';
import { THIRD_TRIMESTER_SCENARIOS } from '../../data/thirdTrimesterScenarios';
import { TrimesterKey } from '../context/GameContext';

/** Fisher-Yates shuffle (returns a new array) */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Shuffle scenarios AND shuffle options within each scenario */
function shuffleScenarios(scenarios: Scenario[]): Scenario[] {
  return shuffle(scenarios).map((s) => ({
    ...s,
    options: shuffle(s.options),
  }));
}

/** Re-order scenarios by a saved list of IDs, and shuffle options within each */
function reorderByIds(scenarios: Scenario[], ids: number[]): Scenario[] {
  const map = new Map(scenarios.map((s) => [s.id, s]));
  return ids
    .map((id) => map.get(id))
    .filter(Boolean)
    .map((s) => ({ ...s!, options: shuffle(s!.options) }));
}

interface TrimesterInfo {
  key: TrimesterKey;
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
    label: 'First Trimester',
    labelNe: 'पहिलो त्रैमासिक',
    weeks: 'Weeks 1–12',
    weeksNe: 'हप्ता १–१२',
    color: '#6BBF8A',
    
    scenarios: FIRST_TRIMESTER_SCENARIOS,
  },
  {
    key: '2nd',
    label: 'Second Trimester',
    labelNe: 'दोस्रो त्रैमासिक',
    weeks: 'Weeks 13–26',
    weeksNe: 'हप्ता १३–२६',
    color: '#E88FB4',

    scenarios: SECOND_TRIMESTER_SCENARIOS,
  },
  {
    key: '3rd',
    label: 'Third Trimester',
    labelNe: 'तेस्रो त्रैमासिक',
    weeks: 'Weeks 27–40',
    weeksNe: 'हप्ता २७–४०',
    color: '#7BAED6',
    
    scenarios: THIRD_TRIMESTER_SCENARIOS,
  },
];

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');
const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E', 'F'];
const INACTIVITY_DELAY_MS = 10000;

export default function Step3({ onNextStep }: { onNextStep: () => void }) {
  const {
    addQuizStar, showFeedback, clearFeedback, setQuizProgress, setCurrentWave,
    selectedTrimester: savedTrimester, quizIndex: savedQuizIndex, shuffledScenarioIds,
    setQuizState, clearQuizState,
  } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';
  const { playCorrect, playIncorrect } = useGameAudio();

  // ── State ──
  const [selectedTrimester, setSelectedTrimester] = useState<TrimesterKey | null>(savedTrimester);
  const [currentIdx, setCurrentIdx] = useState(savedQuizIndex);
  const [selectedResult, setSelectedResult] = useState<{ isCorrect: boolean } | null>(null);
  const hasAnswered = useRef(false);
  const [shuffledScenarios, setShuffledScenarios] = useState<Scenario[]>([]);
  const didResume = useRef(false);

  // ── Inactivity idle tap animation state ──
  const idleFingerX       = useSharedValue(-200);
  const idleFingerY       = useSharedValue(-200);
  const idleFingerScale   = useSharedValue(1);
  const idleFingerOpacity = useSharedValue(0);
  const rippleScale       = useSharedValue(0);
  const rippleOpacity     = useSharedValue(0);

  const inactivityTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleLoopTimers    = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isIdleRunning     = useRef(false);

  const idleFingerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: idleFingerOpacity.value,
    transform: [
      { translateX: idleFingerX.value },
      { translateY: idleFingerY.value },
      { scale: idleFingerScale.value },
    ],
  }));

  const rippleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: rippleOpacity.value,
    transform: [
      { translateX: idleFingerX.value + 16 },
      { translateY: idleFingerY.value + 16 },
      { scale: rippleScale.value },
    ],
  }));

  const fireIdleRipple = () => {
    rippleScale.value = 0;
    rippleOpacity.value = 0.7;
    rippleScale.value = withTiming(3.5, { duration: 700, easing: Easing.out(Easing.ease) });
    rippleOpacity.value = withTiming(0, { duration: 700 });
  };

  const stopIdleAnimation = () => {
    if (!isIdleRunning.current) return;
    isIdleRunning.current = false;
    idleLoopTimers.current.forEach(clearTimeout);
    idleLoopTimers.current = [];
    cancelAnimation(idleFingerX);
    cancelAnimation(idleFingerY);
    cancelAnimation(idleFingerScale);
    idleFingerOpacity.value = withTiming(0, { duration: 150 });
    rippleOpacity.value = 0;
  };

  const runIdleCycle = () => {
    if (!isIdleRunning.current) return;
    const addTimer = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      idleLoopTimers.current.push(id);
    };

    // Tap roughly halfway down the options list area
    const tx = SCREEN_W / 2 - 25;
    const ty = SCREEN_H - 180;

    addTimer(() => {
      if (!isIdleRunning.current) return;
      idleFingerX.value = tx + 40;
      idleFingerY.value = ty + 120;
      idleFingerScale.value = 1;
      idleFingerOpacity.value = withTiming(1, { duration: 400 });
      // Float up to tap target
      idleFingerY.value = withTiming(ty, { duration: 600, easing: Easing.out(Easing.ease) });
      idleFingerX.value = withTiming(tx, { duration: 600, easing: Easing.out(Easing.ease) });
    }, 200);

    // Tap down
    addTimer(() => {
      if (!isIdleRunning.current) return;
      idleFingerScale.value = withTiming(0.85, { duration: 150, easing: Easing.in(Easing.ease) });
    }, 900);

    // Release & Ripple
    addTimer(() => {
      if (!isIdleRunning.current) return;
      idleFingerScale.value = withTiming(1, { duration: 150 });
      fireIdleRipple();
    }, 1050);

    // Fade away
    addTimer(() => {
      if (!isIdleRunning.current) return;
      idleFingerOpacity.value = withTiming(0, { duration: 400 });
    }, 1600);

    // Loop
    addTimer(() => {
      if (!isIdleRunning.current) return;
      runIdleCycle();
    }, 3600);
  };

  const startIdleAnimation = () => {
    if (isIdleRunning.current) return;
    isIdleRunning.current = true;
    runIdleCycle();
  };

  const resetInactivityTimer = () => {
    if (isIdleRunning.current) stopIdleAnimation();
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      startIdleAnimation();
    }, INACTIVITY_DELAY_MS);
  };

  useEffect(() => {
    resetInactivityTimer();
    return () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      stopIdleAnimation();
    };
  }, []);

  // ── Resume from saved state on mount ──
  useEffect(() => {
    if (didResume.current) return;
    didResume.current = true;
    if (savedTrimester && shuffledScenarioIds.length > 0) {
      const tri = TRIMESTERS.find((t) => t.key === savedTrimester);
      if (tri) {
        setSelectedTrimester(savedTrimester);
        setCurrentIdx(savedQuizIndex);
        setShuffledScenarios(reorderByIds(tri.scenarios, shuffledScenarioIds));
        setCurrentWave(isNe ? tri.labelNe : tri.label);
      }
    }
  }, []);
  
  // ── Sync local state when external reset clears the quiz ──
  useEffect(() => {
    if (!didResume.current) return;         
    if (savedTrimester === null && selectedTrimester !== null) {
      setSelectedTrimester(null);
      setCurrentIdx(0);
      setSelectedResult(null);
      hasAnswered.current = false;
      setShuffledScenarios([]);
      clearFeedback();
      setCurrentWave('');
    }
  }, [savedTrimester]);

  // Animation
  const shakeOffset = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeOffset.value }],
  }));

  // Derived
  const trimesterInfo = TRIMESTERS.find((t) => t.key === selectedTrimester);
  const scenarios = shuffledScenarios;
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
    resetInactivityTimer();
    setSelectedTrimester(key);
    setCurrentIdx(0);
    setSelectedResult(null);
    hasAnswered.current = false;
    clearFeedback();
    const tri = TRIMESTERS.find((t) => t.key === key);
    if (tri) {
      setCurrentWave(isNe ? tri.labelNe : tri.label);
      // Shuffle questions AND options each time a trimester is selected
      const shuffled = shuffleScenarios(tri.scenarios);
      setShuffledScenarios(shuffled);
      // Persist the selected trimester & shuffled order
      setQuizState(key, 0, shuffled.map((s) => s.id));
    }
  };

  const handleBackToSelector = () => {
    resetInactivityTimer();
    setSelectedTrimester(null);
    setCurrentIdx(0);
    setSelectedResult(null);
    hasAnswered.current = false;
    clearFeedback();
    setCurrentWave('');
    clearQuizState();
  };

  // ── Answer handling ──
  const handleSelect = (opt: { text: string; textNe: string; isCorrect: boolean }) => {
    resetInactivityTimer();
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
    resetInactivityTimer();
    setSelectedResult(null);
    hasAnswered.current = false;
    clearFeedback();
    if (currentIdx < totalScenarios - 1) {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      // Persist the progress
      if (selectedTrimester) {
        setQuizState(selectedTrimester, nextIdx, shuffledScenarios.map((s) => s.id));
      }
    } else {
      // Quiz done — clear saved quiz state
      clearQuizState();
      onNextStep();
    }
  };

  // ═══════════════════════════════════════════
  // RENDER: Trimester Selector
  // ═══════════════════════════════════════════
  if (!selectedTrimester) {
    return (
      <View 
        className="flex-1 justify-end"
        onStartShouldSetResponder={() => { resetInactivityTimer(); return false; }}
        onMoveShouldSetResponder={() => { resetInactivityTimer(); return false; }}
      >
           <LinearGradient
            colors={[
        'rgba(255,255,255,0.9)',
        'rgba(243,58,106,0.05)',
        'rgba(176,76,138,0.08)'
                    ]}
              style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    />

        <Animated.View
          entering={FadeInUp.duration(400)}
          className="rounded-t-[20px] rounded-b-[20px] overflow-hidden"
          style={{
            zIndex: 50,
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.1,
            shadowRadius: 16,
            elevation: 14,
          }}
        >
          {/* Colored accent strip */}
          <View className="h-[3px] bg-[#C06898]" />

          {/* Header */}
          <View className="px-5 pt-4 pb-3">
            <Text className="text-[10px] font-[800] text-[#B07498] tracking-[2px] uppercase mb-1 text-center">
              {isNe ? 'गर्भावस्था परिदृश्य' : 'PREGNANCY SCENARIOS'}
            </Text>
            <Text className="text-[18px] font-[800] text-[#2D2D2D] mb-0.5 text-center">
              {isNe ? 'आफ्नो त्रैमासिक छान्नुहोस्' : 'Choose Your Trimester'}
            </Text>
            <Text className="text-[12px] font-[500] text-[#888] text-center">
              {isNe
                ? 'प्रत्येक त्रैमासिकमा २० परिदृश्यहरू छन्'
                : 'Each trimester has 20 scenarios to test your knowledge'}
            </Text>
          </View>

          {/* Trimester cards */}
          <View className="px-4 pb-5 gap-2.5">
            {TRIMESTERS.map((tri, idx) => (
              <Animated.View key={tri.key} entering={FadeInDown.delay(idx * 80).duration(300)}>
                <TouchableOpacity
                  className="flex-row items-center px-4 py-3.5 rounded-[14px]"
                  style={{
                    backgroundColor: tri.color + '0D',
                    borderWidth: 1.5,
                    borderColor: tri.color + '30',
                  }}
                  onPress={() => handleSelectTrimester(tri.key)}
                  activeOpacity={0.7}
                >
                  <Text className="text-[22px] mr-3"></Text>
                  <View className="flex-1">
                    <Text className="text-[15px] font-[700] text-[#2D2D2D]">
                      {isNe ? tri.labelNe : tri.label}
                    </Text>
                    <Text className="text-[11px] font-[600] mt-0.5" style={{ color: tri.color }}>
                      {isNe ? tri.weeksNe : tri.weeks} · {tri.scenarios.length}{' '}
                      {isNe ? 'परिदृश्य' : 'scenarios'}
                    </Text>
                  </View>
                  <Text className="text-[16px] font-[800]" style={{ color: tri.color }}>›</Text>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </Animated.View>
      </View>
    );
  }

  // 
  // RENDER: Quiz flow
  //
  if (!scenario) return null;

  const triColor = trimesterInfo!.color;
  const progressPct = ((currentIdx + 1) / totalScenarios) * 100;

  return (
    <View 
      className="flex-1 justify-end"
      onStartShouldSetResponder={() => { resetInactivityTimer(); return false; }}
      onMoveShouldSetResponder={() => { resetInactivityTimer(); return false; }}
    >
      <LinearGradient
      colors={[
        'rgba(255,255,255,0.9)',
        'rgba(243,58,106,0.05)',
        'rgba(176,76,138,0.08)'
      ]}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    />

      <Animated.View
        style={[{ zIndex: 50 }, animatedStyle]}
      >
        {/* Full-width card flush to bottom & sides */}
        <View
          className="rounded-t-[20px] rounded-b-[20px] overflow-hidden"
          style={{
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.1,
            shadowRadius: 16,
            elevation: 14,
          }}
        >
          {/* Colored accent strip */}
          <View className="h-[3px]" style={{ backgroundColor: triColor }} />

          {/* ── Header: trimester button + progress ── */}
          <View className="px-4 pt-3 pb-2" style={{ backgroundColor: triColor + '08' }}>
            <View className="flex-row items-center justify-between mb-2">
              <TouchableOpacity
                className="flex-row items-center pl-2.5 pr-3.5 py-1 rounded-full"
                style={{ backgroundColor: triColor }}
                onPress={handleBackToSelector}
                activeOpacity={0.7}
              >
                <Text className="text-white text-[13px] font-[800] mr-1">‹</Text>
                <Text className="text-white text-[11px] font-[700]">
                   Change Trimester
                </Text>
              </TouchableOpacity>

              <Text className="text-[12px] font-[800]" style={{ color: triColor }}>
                {currentIdx + 1}/{totalScenarios}
              </Text>
            </View>

            <View className="h-[4px] rounded-full overflow-hidden" style={{ backgroundColor: triColor + '20' }}>
              <View
                className="h-full rounded-full"
                style={{ width: `${progressPct}%`, backgroundColor: triColor }}
              />
            </View>
          </View>

          {/* ── Question + options ── */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={{ maxHeight: Dimensions.get('window').height * 0.42 }}
          >
            {/* Question */}
            <View className="px-4 pt-1 pb-1">
              <Text className="text-[12px] font-[800] tracking-[1.5px] uppercase mb-1.5" style={{ color: triColor }}>
                {isNe ? scenario.titleNe : scenario.title}
              </Text>
              <Text className="text-[16px] font-[600] text-[#2D2D2D] leading-[24px]">
                {isNe ? scenario.descriptionNe : scenario.description}
              </Text>
            </View>

            {/* Separator */}
            <View className="h-[1px] mx-4" style={{ backgroundColor: triColor + '15' }} />

            {/* Options */}
            <View className="px-4 pt-1 pb-8 gap-2.5">
              {!selectedResult ? (
                scenario.options.map((opt, i) => (
                  <TouchableOpacity
                    key={i}
                    className="flex-row items-center px-3.5 py-3 rounded-[12px]"
                    style={{
                      backgroundColor: triColor + '08',
                      borderWidth: 1.5,
                      borderColor: triColor + '20',
                    }}
                    onPress={() => handleSelect(opt)}
                    disabled={selectedResult !== null}
                    activeOpacity={0.6}
                  >
                    <View
                      className="w-[28px] h-[28px] rounded-[8px] items-center justify-center mr-3"
                      style={{ backgroundColor: triColor + '18' }}
                    >
                      <Text className="text-[13px] font-[800]" style={{ color: triColor }}>
                        {OPTION_LABELS[i]}
                      </Text>
                    </View>
                    <Text className="text-[15px] text-[#3A3A3A] font-[600] leading-[22px] flex-1">
                      {isNe ? opt.textNe : opt.text}
                    </Text>
                  </TouchableOpacity>
                ))
              ) : (
                <TouchableOpacity
                  className="py-[13px] rounded-[12px] items-center"
                  style={{
                    backgroundColor: triColor,
                    shadowColor: triColor,
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.35,
                    shadowRadius: 6,
                    elevation: 6,
                  }}
                  onPress={handleNext}
                  activeOpacity={0.8}
                >
                  <Text className="text-white text-[14px] font-[800] tracking-[0.5px]">
                    {currentIdx === totalScenarios - 1
                      ? isNe ? 'खेल सकियो' : 'Finish Scenarios'
                      : isNe ? 'अर्को परिदृश्य' : 'Next Scenario'}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </View>
      </Animated.View>

      {/* ── IDLE TUTORIAL LAYER ── */}
      <View pointerEvents="none" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9996, elevation: 9996 }}>
        {/* Ripple ring */}
        <Animated.View
          pointerEvents="none"
          style={[{ position: 'absolute', zIndex: 1, width: 56, height: 56, borderRadius: 28, borderWidth: 2.5, borderColor: triColor, marginLeft: -28, marginTop: -28 }, rippleAnimatedStyle]}
        />
        {/* Finger */}
        <Animated.View pointerEvents="none" style={[{ position: 'absolute', zIndex: 2 }, idleFingerAnimatedStyle]}>
          <Image source={require('../../../assets/images/Finger.png')} style={{ width: 110, height: 110 }} resizeMode="contain" />
        </Animated.View>
      </View>
    </View>
  );
}
