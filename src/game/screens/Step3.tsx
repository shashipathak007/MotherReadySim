/// <reference types="nativewind/types" />
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
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
  ZoomIn,
  Easing,
  cancelAnimation,
} from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { useGameAudio } from '../hooks/useGameAudio';
import ConfettiCannon from 'react-native-confetti-cannon';

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
    selectedTrimester: savedTrimester, quizIndex: savedQuizIndex, shuffledScenarioIds, quizResults: savedQuizResults,
    setQuizState, clearQuizState, feedback,
    setStep3CharacterVisible,
  } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';
  const { playCorrect, playIncorrect } = useGameAudio();
  const isFocused = useIsFocused();

  // ── State ──
  const [selectedTrimester, setSelectedTrimester] = useState<TrimesterKey | null>(savedTrimester);
  const [currentIdx, setCurrentIdx] = useState(savedQuizIndex);
  const [selectedResult, setSelectedResult] = useState<{ isCorrect: boolean } | null>(null);
  const hasAnswered = useRef(false);
  const [shuffledScenarios, setShuffledScenarios] = useState<Scenario[]>([]);
  const didResume = useRef(false);
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [questionVisible, setQuestionVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const questionRevealTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiAmount, setConfettiAmount] = useState(100);
  const [quizResults, setQuizResults] = useState<{ id: number; isCorrect: boolean }[]>(savedQuizResults || []);
  const [showReview, setShowReview] = useState(false);
  const madeMistakeOnCurrent = useRef(false);

  // ── Inactivity idle tap animation state ──
  const idleFingerX = useSharedValue(-200);
  const idleFingerY = useSharedValue(-200);
  const idleFingerScale = useSharedValue(1);
  const idleFingerOpacity = useSharedValue(0);
  const rippleScale = useSharedValue(0);
  const rippleOpacity = useSharedValue(0);

  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleLoopTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isIdleRunning = useRef(false);

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

    // Tap lower (below options area)
    const tx = SCREEN_W / 2 - 25;
    const ty = SCREEN_H - 110;

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
    clearFeedback();
    return () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
      if (questionRevealTimer.current) clearTimeout(questionRevealTimer.current);
      stopIdleAnimation();
      clearFeedback();
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
        setQuizResults(savedQuizResults || []);
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
      setQuestionVisible(false);
      setOptionsVisible(false);
      setStep3CharacterVisible(true);
      setShuffledScenarios([]);
      clearFeedback();
      setCurrentWave('');
      setStreak(0);
      setQuizResults([]);
      setShowReview(false);
      madeMistakeOnCurrent.current = false;
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

  // ── Auto-show question in global speech bubble (delayed) ──
  useEffect(() => {
    // Don't re-show the question if the user already answered correctly
    // (we want char_correct to stay visible until "Next Scenario" is clicked)
    if (isFocused && scenario && questionVisible && !feedback && !selectedResult) {
      const q = isNe ? scenario.descriptionNe : scenario.description;
      const t = isNe ? scenario.titleNe : scenario.title;
      showFeedback(q, t, 'question');
    }
  }, [isFocused, scenario, questionVisible, feedback, isNe, selectedResult]);

  // ── Reveal question + options + character together in one tick ──
  useEffect(() => {
    if (questionRevealTimer.current) clearTimeout(questionRevealTimer.current);
    setQuestionVisible(false);
    setOptionsVisible(false);
    setStep3CharacterVisible(false);

    if (!selectedTrimester || !scenario) return;

    const delayMs = 2000;
    questionRevealTimer.current = setTimeout(() => {
      // Batch all three in one render cycle so they appear simultaneously
      setQuestionVisible(true);
      setOptionsVisible(true);
      setStep3CharacterVisible(true);
    }, delayMs);

    return () => {
      if (questionRevealTimer.current) clearTimeout(questionRevealTimer.current);
    };
  }, [selectedTrimester, scenario?.id]);

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
    if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    setSelectedTrimester(key);
    setCurrentIdx(0);
    setSelectedResult(null);
    hasAnswered.current = false;
    setQuestionVisible(false);
    setOptionsVisible(false);
    setStep3CharacterVisible(false);
    clearFeedback();
    setStreak(0);
    setQuizResults([]);
    setShowReview(false);
    madeMistakeOnCurrent.current = false;
    const tri = TRIMESTERS.find((t) => t.key === key);
    if (tri) {
      setCurrentWave(isNe ? tri.labelNe : tri.label);
      // Shuffle questions AND options each time a trimester is selected
      const shuffled = shuffleScenarios(tri.scenarios);
      setShuffledScenarios(shuffled);
      // Persist the selected trimester & shuffled order
      setQuizState(key, 0, shuffled.map((s) => s.id), []);
    }
  };

  const handleBackToSelector = () => {
    resetInactivityTimer();
    if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    setSelectedTrimester(null);
    setCurrentIdx(0);
    setSelectedResult(null);
    hasAnswered.current = false;
    setQuestionVisible(false);
    setOptionsVisible(false);
    setStep3CharacterVisible(true);
    clearFeedback();
    setCurrentWave('');
    clearQuizState();
    setStreak(0);
    setQuizResults([]);
    setShowReview(false);
    madeMistakeOnCurrent.current = false;
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

      if (!madeMistakeOnCurrent.current) {
        setStreak(s => {
          const newStreak = s + 1;
          setHighestStreak(h => Math.max(h, newStreak));
          
          if (newStreak === 5 || newStreak === 10 || newStreak === 15 || newStreak === 20) {
            let amount = 100;
            if (newStreak === 10) amount = 200;
            if (newStreak === 15) amount = 300;
            if (newStreak === 20) amount = 400;
            setConfettiAmount(amount);
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 4000);
          }
          return newStreak;
        });
      }

      setQuizResults(prev => [...prev, { id: scenario!.id, isCorrect: !madeMistakeOnCurrent.current }]);

      // Keep char_correct visible — do NOT auto-clear success feedback.
      // It will be cleared when "Next Scenario" is tapped (handleNext).
    } else {
      madeMistakeOnCurrent.current = true;
      setStreak(0);
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

      // Auto-clear error feedback after 8 second
      if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
      feedbackTimer.current = setTimeout(() => {
        clearFeedback();
      }, 8000); //Explanation time 
    }
  };

  const handleNext = () => {
    resetInactivityTimer();
    if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    setSelectedResult(null);
    hasAnswered.current = false;
    madeMistakeOnCurrent.current = false;
    setQuestionVisible(false);
    setOptionsVisible(false);
    setStep3CharacterVisible(false);
    clearFeedback();
    if (currentIdx < totalScenarios - 1) {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      // Persist the progress
      if (selectedTrimester) {
        setQuizState(selectedTrimester, nextIdx, shuffledScenarios.map((s) => s.id), quizResults);
      }
    } else {
      // Quiz done — show review screen
      setShowReview(true);
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
  if (showReview) {
    return (
      <View className="flex-1 bg-white" style={{ paddingTop: 60 }}>
        <LinearGradient colors={['rgba(255,255,255,0.9)', 'rgba(243,58,106,0.05)', 'rgba(176,76,138,0.08)']} style={{ position: 'absolute', width: '100%', height: '100%' }} />
        <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
          <Text className="text-[24px] font-[800] text-[#9B5983] mb-6 text-center">
            {isNe ? 'परिदृश्यको समीक्षा' : 'Scenario Review'}
          </Text>
          {shuffledScenarios.map((s, idx) => {
            const res = quizResults.find(r => r.id === s.id);
            const isCorrect = res?.isCorrect ?? false;
            const correctOption = s.options.find(o => o.isCorrect);
            const correctText = correctOption ? (isNe ? correctOption.textNe : correctOption.text) : '';

            return (
              <Animated.View entering={FadeInUp.delay(idx * 50)} key={s.id} className={`mb-4 p-4 rounded-[14px] bg-white border ${isCorrect ? 'border-[#86EFAC]' : 'border-[#FCA5A5]'} shadow-sm`}>
                <View className="flex-row items-center mb-2">
                  <Text className="text-[16px] mr-2 leading-5">{isCorrect ? '✅' : '❌'}</Text>
                  <Text className={`text-[12px] font-[800] uppercase tracking-[1px] ${isCorrect ? 'text-[#16A34A]' : 'text-[#DC2626]'}`}>
                    {isCorrect ? (isNe ? 'सही उत्तर' : 'CORRECT') : (isNe ? 'गलत उत्तर' : 'INCORRECT')}
                  </Text>
                </View>
                <Text className="text-[15px] font-[800] text-[#333] mb-1.5">
                  {idx + 1}. {isNe ? s.titleNe : s.title}
                </Text>
                <Text className="text-[14px] font-[500] text-[#666] mb-3 leading-5">
                  {isNe ? s.descriptionNe : s.description}
                </Text>

                {/* Explicitly show the correct answer */}
                <View className={`mb-3 p-3 rounded-[8px] border ${isCorrect ? 'bg-[#F0FDF4] border-[#BBF7D0]' : 'bg-[#FEF2F2] border-[#FECACA]'}`}>
                  <Text className="text-[12px] font-[700] text-[#666] mb-1">
                    {isNe ? 'सही विकल्प:' : 'Correct Answer:'}
                  </Text>
                  <Text className={`text-[14px] font-[800] ${isCorrect ? 'text-[#166534]' : 'text-[#991B1B]'}`}>
                    ✓ {correctText}
                  </Text>
                </View>

                {/* Explanation */}
                <View className="bg-[#F9F0F5] p-3 rounded-[8px]">
                  <Text className="text-[12px] font-[700] text-[#C06898] mb-1">
                    {isNe ? 'व्याख्या:' : 'Explanation:'}
                  </Text>
                  <Text className="text-[14px] font-[600] text-[#9B5983] leading-5">
                    {isNe ? s.explanationNe : s.explanation}
                  </Text>
                </View>
              </Animated.View>
            );
          })}
          <TouchableOpacity
            className="w-full py-4 rounded-full bg-[#C06898] items-center mt-6 mb-4 shadow-md"
            onPress={() => {
              setShowReview(false);
              clearQuizState();
              onNextStep();
            }}
            activeOpacity={0.8}
          >
            <Text className="text-white font-[800] text-[16px] tracking-wide">{isNe ? 'अगाडि बढ्नुहोस्' : 'Continue'}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  if (!scenario) return null;

  const triColor = trimesterInfo!.color;
  const progressPct = ((currentIdx + 1) / totalScenarios) * 100;
  const showBottomCard = optionsVisible || selectedResult !== null;

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

      {showBottomCard ? (
        <Animated.View
          style={[{ zIndex: 50 }, animatedStyle]}
        >
          {/* Main card floating with bottom space */}
          <View
            className="rounded-[20px] overflow-hidden mx-1 mb-1"
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

                <View className="flex-row items-center">
                  {highestStreak > 0 && (
                    <Animated.View entering={ZoomIn.springify()} className="mr-2 bg-white px-2 py-0.5 rounded-full border border-purple-200">
                      <Text className="text-[12px] font-[800] text-purple-500">🏆 {highestStreak}</Text>
                    </Animated.View>
                  )}
                  {streak >= 1 && (
                    <Animated.View entering={ZoomIn.springify()} className="mr-3 bg-white px-2 py-0.5 rounded-full border border-orange-200">
                      <Text className="text-[12px] font-[800] text-orange-500">🔥 {streak}</Text>
                    </Animated.View>
                  )}
                  <Text className="text-[12px] font-[800]" style={{ color: triColor }}>
                    {currentIdx + 1}/{totalScenarios}
                  </Text>
                </View>
              </View>

              <View className="h-[4px] rounded-full overflow-hidden" style={{ backgroundColor: triColor + '20' }}>
                <View
                  className="h-full rounded-full"
                  style={{ width: `${progressPct}%`, backgroundColor: triColor }}
                />
              </View>
            </View>

            {/* ── Options ── */}
            <ScrollView
              showsVerticalScrollIndicator={true}
              bounces={true}
              style={{ maxHeight: Dimensions.get('window').height * 0.28 }}
            >
              <View className="px-4 pt-2 pb-4 gap-1.5">
                {!selectedResult ? (
                  scenario.options.map((opt, i) => (
                    <TouchableOpacity
                      key={i}
                      className="flex-row items-center px-3 py-2 rounded-[10px]"
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
                        className="w-[24px] h-[24px] rounded-[6px] items-center justify-center mr-3"
                        style={{ backgroundColor: triColor + '18' }}
                      >
                        <Text className="text-[12px] font-[800]" style={{ color: triColor }}>
                          {OPTION_LABELS[i]}
                        </Text>
                      </View>
                      <Text className="text-[14px] text-[#3A3A3A] font-[600] leading-[20px] flex-1">
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
      ) : null}

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

      {/* Confetti Animation */}
      {showConfetti && (
        <View pointerEvents="none" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, elevation: 9999 }}>
          <ConfettiCannon count={confettiAmount} origin={{ x: SCREEN_W / 2, y: -20 }} fadeOut={true} fallSpeed={2500} />
        </View>
      )}
    </View>
  );
}
