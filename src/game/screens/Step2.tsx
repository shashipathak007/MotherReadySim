/// <reference types="nativewind/types" />
import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { View, Dimensions, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useGame } from '../context/GameContext';
import { CONTACTS } from '../../data/contacts';
import { DraggableItem, DraggableItemRef } from '../components/DraggableItem';
import { StepCompletionModal } from '../components/StepCompletionModal';
import { IncompleteStepModal } from '../components/IncompleteStepModal';
import Animated, {
  FadeInDown, useSharedValue, useAnimatedStyle, withTiming, Easing, cancelAnimation, withSequence,
} from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { useGameAudio } from '../hooks/useGameAudio';
import { LinearGradient } from 'expo-linear-gradient';
import { getContactIcon } from '../components/ItemIcons';

const INACTIVITY_DELAY_MS = 12000;

const { width, height } = Dimensions.get('window');

const WRONG_CONTACTS = [
  { id: 91, name: "Random shopkeeper", nameNe: "कुनै पसलको व्यापारी", whyNot: "You won't need this during labour", whyNotNe: "व्यथा लाग्दा यो सम्पर्क चाहिँदैन" },
  { id: 92, name: "Travel agency", nameNe: "यात्रा एजेन्सी", whyNot: "Focus on medical contacts only", whyNotNe: "स्वास्थ्य सम्बन्धी सम्पर्कमा मात्र ध्यान दिनुहोस्" },
  { id: 93, name: "Astrologer / Jyotish", nameNe: "ज्योतिष", whyNot: "Not an emergency medical contact", whyNotNe: "यो आपतकालीन स्वास्थ्य सम्पर्क होइन" },
];

const WRONG_DISTRIBUTION: Record<string, number[]> = {
  CRITICAL: [91],
  IMPORTANT: [92],
  INFO: [93],
};



export default function Step2({ onNextStep }: { onNextStep: () => void }) {
  const {
    savedContacts, saveContact, showFeedback, clearFeedback, setCurrentWave,
    resetCurrentStep, currentCategoryIdx, setCategoryIdx,
    addStep2Mistake, step2Mistakes, step2ReviewVisible, setStep2ReviewVisible,
    reviewReturnToSummary, setReviewReturnToSummary, setStep
  } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';
  const { playCorrect, playIncorrect } = useGameAudio();

  const [showIncompleteModal, setShowIncompleteModal] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [itemPage, setItemPage] = useState(0);
  const itemsPerPage = 6;
  const [containerLayout, setContainerLayout] = useState({ width: width, height: height });
  const [itemPositions, setItemPositions] = useState<Record<number, { x: number; y: number }>>({});
  const scrollRef = useRef<ScrollView>(null);
  const waveCategories = ['CRITICAL', 'IMPORTANT', 'INFO'];
  const currentWave = waveCategories[currentCategoryIdx];


  const checkCompletion = (newCount: number) => {
    if (newCount >= CONTACTS.length) {
      setShowCompletionModal(true);
    }
  };

  useEffect(() => {
    if (currentWave) setCurrentWave(currentWave);
    setItemPage(0);
  }, [currentWave, setCurrentWave, currentCategoryIdx]);

  const isWaveComplete = useMemo(() => {
    if (!currentWave) return false;
    const correctInWave = CONTACTS.filter(item => item.urgency === currentWave);
    if (correctInWave.length === 0) return false;
    const packedInWave = correctInWave.filter(item => savedContacts.includes(item.id));
    return packedInWave.length >= correctInWave.length;
  }, [currentWave, savedContacts]);

  // Advance wave when current wave is completed or if navigating to an already completed wave
  useEffect(() => {
    if (isWaveComplete) {
      let nextWaveIdx = currentCategoryIdx + 1;
      while (nextWaveIdx < waveCategories.length) {
        const cat = waveCategories[nextWaveIdx];
        const correctInWave = CONTACTS.filter(item => item.urgency === cat);
        const packedInWave = correctInWave.filter(item => savedContacts.includes(item.id));
        if (packedInWave.length < correctInWave.length) {
          break;
        }
        nextWaveIdx++;
      }
      if (nextWaveIdx < waveCategories.length) {
        setCategoryIdx(nextWaveIdx);
      } else {
        if (savedContacts.length >= CONTACTS.length) {
          checkCompletion(savedContacts.length);
        } else {
          setShowIncompleteModal(true);
        }
      }
    }
  }, [isWaveComplete, currentCategoryIdx, setCategoryIdx]);

  useEffect(() => {
    if (savedContacts.length > 0) {
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
    }
  }, [savedContacts]);

  // Items — same layout formula as Step 1
  const activeWaveContacts = useMemo(() => {
    if (!currentWave) return [];
    const correctItems = CONTACTS.filter(item => item.urgency === currentWave).map(item => ({
      id: item.id, name: item.name, nameNe: item.nameNe,
      isWrong: false, why: item.fullDetail, whyNe: item.fullDetailNe,
      phone: item.phone || ''
    }));
    const wrongIds = WRONG_DISTRIBUTION[currentWave as keyof typeof WRONG_DISTRIBUTION] || [];
    const wrongItems = WRONG_CONTACTS.filter(i => wrongIds.includes(i.id)).map(item => ({
      id: item.id, name: item.name, nameNe: item.nameNe || '',
      isWrong: true, why: item.whyNot, whyNe: '', whyNotNe: item.whyNotNe || '', phone: ''
    }));

    return [...correctItems, ...wrongItems].sort((a, b) => a.name.localeCompare(b.name));
  }, [currentWave]);

  const paginatedContacts = useMemo(() => {
    const slice = activeWaveContacts.slice(
      itemPage * itemsPerPage,
      (itemPage + 1) * itemsPerPage
    );
    const itemCount = slice.length;
    const itemSize = 75;
    const colSpacing = itemSize + 30;
    const baseRowSpacing = itemSize + 40;
    const extraGap = 30;
    const columns = 3;
    const rightPadding = 180;

    return slice.map((item, index) => {
      const cols = Math.min(itemCount, columns);
      const row = Math.floor(index / cols);
      const col = index % cols;

      const totalGridWidth = (cols - 1) * colSpacing;
      const startX = containerLayout.width - totalGridWidth - rightPadding;
      const xPos = startX + col * colSpacing;
      const yPos = containerLayout.height * 0.35 + row * baseRowSpacing + (row >= 1 ? extraGap : 0);

      return {
        ...item,
        initialPos: {
          x: xPos + (Math.random() - 0.5) * 10,
          y: yPos + (Math.random() - 0.5) * 10,
        },
      };
    });
  }, [activeWaveContacts, itemPage, containerLayout.width, containerLayout.height]);

  // Auto-advance page when all correct items on current page are saved
  useEffect(() => {
    const slice = activeWaveContacts.slice(itemPage * itemsPerPage, (itemPage + 1) * itemsPerPage);
    const correctOnPage = slice.filter(i => !i.isWrong);
    if (correctOnPage.length > 0 && correctOnPage.every(i => savedContacts.includes(i.id))) {
      if ((itemPage + 1) * itemsPerPage < activeWaveContacts.length) {
        const timer = setTimeout(() => setItemPage(p => p + 1), 800);
        return () => clearTimeout(timer);
      }
    }
  }, [savedContacts, itemPage, activeWaveContacts]);

  // Ensure every visible item has a persisted position (prevents snapping back after re-renders).
  useEffect(() => {
    setItemPositions(prev => {
      let changed = false;
      const next = { ...prev };
      for (const it of paginatedContacts) {
        const uniqueId = it.isWrong ? -it.id : it.id;
        if (!next[uniqueId]) {
          next[uniqueId] = it.initialPos;
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [paginatedContacts]);

  // Drop zone — EXACTLY same as Step 1 bag
  const dropZone = {
    x: containerLayout.width * 0.35 - 110,
    y: containerLayout.height - 240,
    w: 220,
    h: 180
  };
  const itemRefs = useRef<Record<number, DraggableItemRef>>({});

  // ── Inactivity idle-tutorial shared values ──
  const idleFingerX = useSharedValue(-200);
  const idleFingerY = useSharedValue(-200);
  const idleFingerScale = useSharedValue(1);
  const idleFingerOpacity = useSharedValue(0);
  const idleFingerRotate = useSharedValue(0);
  const idleGhostOpacity = useSharedValue(0);
  const [idleGhostItem, setIdleGhostItem] = useState<{ emoji: string; name: string; id: number; isWrong: boolean } | null>(null);

  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleLoopTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isIdleRunning = useRef(false);
  // Track last shown feedback item so we can re-translate when language changes
  const lastFeedbackRef = useRef<{ id: number; isWrong: boolean; feedbackType: 'success' | 'error' | 'info' } | null>(null);

  // Live refs to current state so the idle loop has latest values
  const activeWaveContactsRef = useRef(paginatedContacts);
  useEffect(() => { activeWaveContactsRef.current = paginatedContacts; }, [paginatedContacts]);
  const dropZoneRef = useRef(dropZone);
  useEffect(() => { dropZoneRef.current = dropZone; }, [dropZone]);
  const savedRef = useRef(savedContacts);
  useEffect(() => { savedRef.current = savedContacts; }, [savedContacts]);

  const idleFingerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: idleFingerOpacity.value,
    transform: [
      { translateX: idleFingerX.value },
      { translateY: idleFingerY.value },
      { scale: idleFingerScale.value },
      { rotate: `${idleFingerRotate.value}deg` },
    ],
  }));

  const idleGhostAnimatedStyle = useAnimatedStyle(() => ({
    opacity: idleGhostOpacity.value,
    transform: [
      { translateX: idleFingerX.value - 10 },
      { translateY: idleFingerY.value + 38 },
    ],
  }));

  const clearIdleTimers = () => {
    idleLoopTimers.current.forEach(clearTimeout);
    idleLoopTimers.current = [];
  };

  const stopIdleAnimation = useCallback(() => {
    if (!isIdleRunning.current) return;
    isIdleRunning.current = false;
    clearIdleTimers();
    cancelAnimation(idleFingerX);
    cancelAnimation(idleFingerY);
    cancelAnimation(idleFingerScale);
    cancelAnimation(idleFingerRotate);
    idleFingerOpacity.value = withTiming(0, { duration: 150 });
    idleGhostOpacity.value = withTiming(0, { duration: 150 });
    setIdleGhostItem(null);
  }, []);

  const runIdleCycle = useCallback(() => {
    if (!isIdleRunning.current) return;

    const items = activeWaveContactsRef.current;
    const saved = savedRef.current;
    const dz = dropZoneRef.current;

    const dragCandidates = items.filter(i => !(!i.isWrong && saved.includes(i.id)));
    if (dragCandidates.length === 0) {
      isIdleRunning.current = false;
      return;
    }
    const dragItem = dragCandidates[Math.floor(Math.random() * dragCandidates.length)];

    const dix = dragItem.initialPos.x + 10;
    const diy = dragItem.initialPos.y - 50;

    const tx = dz.x + dz.w / 2 - 28;
    const ty = dz.y + 20; // Top half of the phone

    const addTimer = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      idleLoopTimers.current.push(id);
    };

    // ── DRAG demo ──
    addTimer(() => {
      if (!isIdleRunning.current) return;
      const ghostEmoji = getContactEmoji(dragItem.id);
      const ghostName = (dragItem as any).nameNe && isNe ? (dragItem as any).nameNe : dragItem.name;
      setIdleGhostItem({ emoji: ghostEmoji, name: ghostName, id: dragItem.id, isWrong: dragItem.isWrong });

      idleFingerX.value = dix;
      idleFingerY.value = diy - 180;
      idleFingerScale.value = 1;
      idleFingerRotate.value = 0;
      idleGhostOpacity.value = 0;

      idleFingerOpacity.value = withTiming(1, { duration: 400 });
      idleFingerY.value = withTiming(diy, { duration: 500, easing: Easing.out(Easing.ease) });
    }, 200);

    // Press to grab (no ripple)
    addTimer(() => {
      if (!isIdleRunning.current) return;
      idleFingerScale.value = withTiming(0.85, { duration: 280, easing: Easing.in(Easing.ease) });
      idleGhostOpacity.value = withTiming(1, { duration: 200 });
    }, 900);

    // Lean
    addTimer(() => {
      if (!isIdleRunning.current) return;
      idleFingerRotate.value = withTiming(-12, { duration: 280 });
    }, 1200);

    // Drag to phone
    addTimer(() => {
      if (!isIdleRunning.current) return;
      const dur = 1800;
      const ease = Easing.inOut(Easing.ease);
      idleFingerX.value = withTiming(tx, { duration: dur, easing: ease });
      idleFingerY.value = withTiming(ty, { duration: dur, easing: ease });
    }, 1300);

    // Straighten on arrival
    addTimer(() => {
      if (!isIdleRunning.current) return;
      idleFingerRotate.value = withTiming(0, { duration: 220 });
    }, 3140);

    // Release
    addTimer(() => {
      if (!isIdleRunning.current) return;
      idleFingerScale.value = withSequence(
        withTiming(1.2, { duration: 140 }),
        withTiming(1, { duration: 140 })
      );
    }, 3200);

    // Hide ghost, fade out finger
    addTimer(() => {
      if (!isIdleRunning.current) return;
      idleGhostOpacity.value = withTiming(0, { duration: 250 });
      idleFingerOpacity.value = withTiming(0, { duration: 400 });
      setIdleGhostItem(null);
    }, 3700);

    // Recurse
    addTimer(() => {
      if (!isIdleRunning.current) return;
      runIdleCycle();
    }, 4700);
  }, [isNe]);

  const startIdleAnimation = useCallback(() => {
    if (isIdleRunning.current) return;
    isIdleRunning.current = true;
    runIdleCycle();
  }, [runIdleCycle]);

  const resetInactivityTimer = useCallback(() => {
    if (isIdleRunning.current) stopIdleAnimation();
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      startIdleAnimation();
    }, INACTIVITY_DELAY_MS);
  }, [startIdleAnimation, stopIdleAnimation]);

  useEffect(() => {
    resetInactivityTimer();
    return () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      clearIdleTimers();
      isIdleRunning.current = false;
    };
  }, [resetInactivityTimer]);

  // ── Re-translate feedback when language changes ──
  useEffect(() => {
    if (!lastFeedbackRef.current) return;
    const { id, isWrong, feedbackType } = lastFeedbackRef.current;
    const item = activeWaveContacts.find(i => i.id === id && i.isWrong === isWrong);
    if (!item) return;
    const itemName = isNe && item.nameNe ? item.nameNe : item.name;
    if (feedbackType === 'success') {
      const cWhy = isNe && item.whyNe ? item.whyNe : item.why;
      showFeedback(itemName, cWhy, 'success');
    } else if (feedbackType === 'error') {
      const wrongWhy = isNe && 'whyNotNe' in item && (item as any).whyNotNe ? (item as any).whyNotNe : item.why;
      showFeedback(itemName, wrongWhy, 'error');
    } else {
      const infoWhy = item.isWrong
        ? (isNe && 'whyNotNe' in item && (item as any).whyNotNe ? (item as any).whyNotNe : item.why)
        : (isNe && item.whyNe ? item.whyNe : item.why);
      showFeedback(itemName, infoWhy, 'info');
    }
  }, [isNe]);

  const handleDrop = (id: number, x: number, y: number, isWrong: boolean) => {
    const item = activeWaveContacts.find(i => i.id === id && i.isWrong === isWrong);
    if (!item) return;

    const cx = x + 30;
    const cy = y + 30;
    const inZone = cx > dropZone.x && cx < dropZone.x + dropZone.w && cy > dropZone.y && cy < dropZone.y + dropZone.h;
    const ref = itemRefs.current[isWrong ? -id : id];

    if (inZone) {
      if (!isWrong) {
        saveContact(item.id);
        ref?.animatePack(dropZone.x + dropZone.w / 2 - 30, dropZone.y + dropZone.h / 2 - 30);
        playCorrect();
        const cName = isNe && item.nameNe ? item.nameNe : item.name;
        const cWhy = isNe && item.whyNe ? item.whyNe : item.why;
        showFeedback(cName, cWhy, 'success');
        lastFeedbackRef.current = { id, isWrong: false, feedbackType: 'success' };
      } else {
        ref?.shakeAndSnapBack();
        playIncorrect();
        addStep2Mistake(item.id);
        const wrongName = isNe && item.nameNe ? item.nameNe : item.name;
        const wrongWhy = isNe && 'whyNotNe' in item && (item as any).whyNotNe ? (item as any).whyNotNe : item.why;
        showFeedback(wrongName, wrongWhy, 'error');
        lastFeedbackRef.current = { id, isWrong: true, feedbackType: 'error' };
      }
    } else {
      // Persist where the user dropped it (do not snap back).
      const uniqueId = isWrong ? -id : id;
      setItemPositions(prev => ({ ...prev, [uniqueId]: { x, y } }));
    }
  };

  const handleLongPress = (id: number, isWrong: boolean) => {
    const item = activeWaveContacts.find(i => i.id === id && i.isWrong === isWrong);
    if (item) {
      const itemName = isNe && item.nameNe ? item.nameNe : item.name;
      let itemWhy: string;
      if (item.isWrong) {
        itemWhy = isNe && 'whyNotNe' in item && (item as any).whyNotNe ? (item as any).whyNotNe : item.why;
      } else {
        itemWhy = isNe && item.whyNe ? item.whyNe : item.why;
      }
      showFeedback(itemName, itemWhy, 'info');
      lastFeedbackRef.current = { id, isWrong, feedbackType: 'info' };
    }
  };

  const getContactEmoji = (id: number) => {
    switch (id) {
      case 1: return '👩‍⚕️'; case 2: return '🚑'; case 3: return '🏥';
      case 4: return '🧕'; case 5: return '👫'; case 6: return '🏠';
      case 7: return '🩸'; case 8: return '📞';
      case 9: return '👮'; case 10: return '🚕'; case 11: return '🚙';
      case 12: return '👵'; case 13: return '🏛️'; case 14: return '💉';
      default: return '📱';
    }
  };

  // ── RENDER REVIEW SCREEN ──
  if (step2ReviewVisible) {
    // 1. Saved correctly
    const savedCorrect = CONTACTS.filter(item => savedContacts.includes(item.id));

    // 2. Put incorrectly
    const savedIncorrect = WRONG_CONTACTS.filter(item => step2Mistakes.includes(item.id));

    // 3. Left out
    const leftOut = CONTACTS.filter(item => !savedContacts.includes(item.id));

    return (
      <View className="flex-1 bg-white">
        <LinearGradient colors={['rgba(255,255,255,0.9)', 'rgba(243,58,106,0.05)', 'rgba(176,76,138,0.08)']} style={{ position: 'absolute', width: '100%', height: '100%' }} />
        <ScrollView contentContainerStyle={{ paddingTop: 110, paddingHorizontal: 20, paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
          <Text className="text-[24px] font-[800] text-[#9B5983] mb-6 text-center">
            {isNe ? 'चरण २: तपाईंको समीक्षा' : 'Step 2: Your Review'}
          </Text>

          {savedCorrect.length > 0 && (
            <View className="mb-6">
              <Text className="text-[18px] font-[800] text-[#16A34A] mb-3">
                {isNe ? 'तपाईंले राखेका सही सम्पर्कहरू' : 'Correctly Saved Contacts'}
              </Text>
              {savedCorrect.map(item => (
                <View key={item.id} className="mb-4 p-4 rounded-[14px] bg-[#F0FDF4] border border-[#BBF7D0] shadow-sm flex-row items-center">
                  <Text className="text-[24px] mr-3">{getContactEmoji(item.id)}</Text>
                  <View className="flex-1">
                    <Text className="text-[15px] font-[800] text-[#166534] mb-1">
                      {isNe && item.nameNe ? item.nameNe : item.name}
                    </Text>
                    <Text className="text-[13px] font-[600] text-[#15803D] leading-5">
                      {isNe && item.fullDetailNe ? item.fullDetailNe : item.fullDetail}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {savedIncorrect.length > 0 && (
            <View className="mb-6">
              <Text className="text-[18px] font-[800] text-[#DC2626] mb-3">
                {isNe ? 'तपाईंले राख्न नहुने सम्पर्कहरू' : 'Contacts You Shouldn\'t Save'}
              </Text>
              {savedIncorrect.map(item => (
                <View key={item.id} className="mb-4 p-4 rounded-[14px] bg-[#FEF2F2] border border-[#FECACA] shadow-sm flex-row items-center">
                  <Text className="text-[24px] mr-3">{getContactEmoji(item.id)}</Text>
                  <View className="flex-1">
                    <Text className="text-[15px] font-[800] text-[#991B1B] mb-1">
                      {isNe && item.nameNe ? item.nameNe : item.name}
                    </Text>
                    <Text className="text-[13px] font-[600] text-[#B91C1C] leading-5">
                      {isNe && item.whyNotNe ? item.whyNotNe : item.whyNot}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {leftOut.length > 0 && (
            <View className="mb-6">
              <Text className="text-[18px] font-[800] text-[#D97706] mb-3">
                {isNe ? 'तपाईंले छुटाउनुभएका सम्पर्कहरू' : 'Contacts You Left Out'}
              </Text>
              {leftOut.map(item => (
                <View key={item.id} className="mb-4 p-4 rounded-[14px] bg-[#FFFBEB] border border-[#FDE68A] shadow-sm flex-row items-center">
                  <Text className="text-[24px] mr-3">{getContactEmoji(item.id)}</Text>
                  <View className="flex-1">
                    <Text className="text-[15px] font-[800] text-[#B45309] mb-1">
                      {isNe && item.nameNe ? item.nameNe : item.name}
                    </Text>
                    <Text className="text-[13px] font-[600] text-[#D97706] leading-5">
                      {isNe && item.fullDetailNe ? item.fullDetailNe : item.fullDetail}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          <TouchableOpacity
            className="w-full py-4 rounded-full bg-white border-[2px] border-[#C06898] items-center mt-4 mb-3 shadow-sm"
            onPress={() => {
              setStep2ReviewVisible(false);
              let firstInc = 0;
              for (let i = 0; i <= 2; i++) {
                const cat = waveCategories[i];
                const correctInWave = CONTACTS.filter(item => item.urgency === cat);
                const isWaveComp = correctInWave.length === 0 || (correctInWave.filter(item => savedContacts.includes(item.id)).length >= correctInWave.length);
                if (!isWaveComp) { firstInc = i; break; }
              }
              setCategoryIdx(firstInc);
            }}
            activeOpacity={0.8}
          >
            <Text className="text-[#C06898] font-[800] text-[16px] tracking-wide">{isNe ? 'चरण पूरा गर्न फर्कनुहोस्' : 'Return to Complete Step'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-full py-4 rounded-full bg-[#C06898] items-center mb-4 shadow-md"
            onPress={() => {
              setStep2ReviewVisible(false);
              clearFeedback();
              if (reviewReturnToSummary) {
                setReviewReturnToSummary(false);
                setStep(4 as any);
              } else {
                onNextStep();
              }
            }}
            activeOpacity={0.8}
          >
            <Text className="text-white font-[800] text-[16px] tracking-wide">{isNe ? 'अगाडि बढ्नुहोस्' : 'Continue'}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  return (
    <View
      className="flex-1"
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        setContainerLayout({ width, height });
      }}
      onStartShouldSetResponder={() => { resetInactivityTimer(); return false; }}
      onMoveShouldSetResponder={() => { resetInactivityTimer(); return false; }}
    >
      <LinearGradient colors={['rgba(255,255,255,0.9)', 'rgba(243,58,106,0.05)', 'rgba(176,76,138,0.08)']}
        style={{ position: 'absolute', width: '100%', height: '100%', }}
      />
      {/* Phone image — EXACTLY same pattern as bag in Step 1 */}
      <View
        className="absolute justify-center items-center"
        style={{ left: dropZone.x - 15, top: dropZone.y - 30, width: dropZone.w + 30, height: dropZone.h + 60 }}
      >
        <Image
          source={require('../../../assets/images/phone_frame.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
      </View>

      {/* Contacts displayed on phone screen area */}
      {(() => {
        // Phone image container bounds
        const containerLeft = dropZone.x - 15;
        const containerTop = dropZone.y - 30;
        const containerW = dropZone.w + 30;
        const containerH = dropZone.h + 60;

        // phone_frame.png is 462x868 (ratio 0.532)
        // With resizeMode="contain", calculate actual rendered phone size & position
        const phoneRatio = 462 / 868;
        const containerRatio = containerW / containerH;
        let renderedW: number, renderedH: number, offsetX: number, offsetY: number;

        if (containerRatio > phoneRatio) {
          // Container is wider — phone constrained by height
          renderedH = containerH;
          renderedW = containerH * phoneRatio;
          offsetX = (containerW - renderedW) / 2;
          offsetY = 0;
        } else {
          // Container is taller — phone constrained by width
          renderedW = containerW;
          renderedH = containerW / phoneRatio;
          offsetX = 0;
          offsetY = (containerH - renderedH) / 2;
        }

        // Screen area within the RENDERED phone image
        // From the phone_frame.png: screen starts ~8% left, ~15% top, ~84% wide, ~72% tall
        const screenLeft = containerLeft + offsetX + renderedW * 0.10;
        const screenTop = containerTop + offsetY + renderedH * 0.17;
        const screenW = renderedW * 0.80;
        const screenH = renderedH * 0.68;

        return (
          <View
            style={{
              position: 'absolute',
              left: screenLeft,
              top: screenTop,
              width: screenW,
              height: screenH,
              overflow: 'hidden',
              borderRadius: 4,
            }}
          >
            <ScrollView
              ref={scrollRef}
              showsVerticalScrollIndicator={true}
              nestedScrollEnabled
              contentContainerStyle={{ paddingVertical: 4 }}
            >
              {savedContacts.map(id => {
                const contact = CONTACTS.find(c => c.id === id);
                return (
                  <Animated.View
                    entering={FadeInDown.duration(300)}
                    key={id}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 3,
                      paddingHorizontal: 4,
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      marginBottom: 2,
                      borderRadius: 4,
                      gap: 3
                    }}
                  >
                    <Text style={{ fontSize: 8 }}>{getContactEmoji(id)}</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 6, color: 'white', fontWeight: '700' }} numberOfLines={1}>
                        {isNe && contact?.nameNe ? contact.nameNe : contact?.name}
                      </Text>
                      <Text style={{ fontSize: 5, color: 'rgba(255,255,255,0.5)' }} numberOfLines={1}>
                        {contact?.phone || ''}
                      </Text>
                    </View>
                  </Animated.View>
                );
              })}
            </ScrollView>
          </View>
        );
      })()}

      {/* Draggable items — same layout as Step 1 */}
      {!isWaveComplete && paginatedContacts.map((item) => {
        const uniqueId = item.isWrong ? -item.id : item.id;
        const packed = !item.isWrong && savedContacts.includes(item.id);
        const persistedPos = itemPositions[uniqueId] ?? item.initialPos;
        return (
          <DraggableItem
            key={`contact-${currentWave}-${uniqueId}`}
            ref={(el) => { if (el) itemRefs.current[uniqueId] = el; }}
            id={item.id}
            name={isNe && item.nameNe ? item.nameNe : item.name}
            emoji={getContactEmoji(item.id)}
            isWrong={item.isWrong}
            initialPos={persistedPos}
            onDrop={handleDrop}
            onLongPress={handleLongPress}
            packed={packed}
            color={item.isWrong ? '#F5F0F0' : '#FFFBFD'}
            isContact={true}
          />
        );
      })}


      <StepCompletionModal
        visible={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        onNext={() => { setShowCompletionModal(false); setStep2ReviewVisible(true); }}
        onReset={() => {
          resetCurrentStep();
          setShowCompletionModal(false);
        }}
      />
      <IncompleteStepModal
        visible={showIncompleteModal}
        onGoBackToIncomplete={() => {
          setShowIncompleteModal(false);
          setTimeout(() => {
            let firstInc = 0;
            for (let i = 0; i <= 2; i++) {
              const cat = waveCategories[i];
              const correctInWave = CONTACTS.filter(item => item.urgency === cat);
              const isWaveComp = correctInWave.length === 0 || (correctInWave.filter(item => savedContacts.includes(item.id)).length >= correctInWave.length);
              if (!isWaveComp) { firstInc = i; break; }
            }
            setCategoryIdx(firstInc);
          }, 300);
        }}
        onProceedAnyway={() => {
          setShowIncompleteModal(false);
          setStep2ReviewVisible(true);
        }}
      />

      {/* ── IDLE / INACTIVITY TUTORIAL LAYER ── */}
      <View
        pointerEvents="none"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9996, elevation: 9996 }}
      >
        {idleGhostItem && (
          <Animated.View
            pointerEvents="none"
            style={[{ position: 'absolute', zIndex: 5 }, idleGhostAnimatedStyle]}
          >
            <View
              style={{
                width: 72, height: 72, borderRadius: 36,
                backgroundColor: '#FFFFFF', borderWidth: 3.5, borderColor: '#F85797',
                justifyContent: 'center', alignItems: 'center',
                shadowColor: '#C06898', shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.35, shadowRadius: 8, elevation: 10,
              }}
            >
              {getContactIcon(idleGhostItem.id, idleGhostItem.isWrong, 60) || <Text style={{ fontSize: 36, textAlign: 'center' }}>{idleGhostItem.emoji}</Text>}
            </View>
            <View
              style={{
                width: 92, marginTop: 4, marginLeft: -10,
                backgroundColor: '#FFFFFF', borderRadius: 10,
                borderWidth: 1.5, borderColor: '#F5E1EC',
                paddingHorizontal: 7, paddingVertical: 4,
              }}
            >
              <Text style={{ fontSize: 10, fontWeight: '700', textAlign: 'center', color: '#333', lineHeight: 13 }} numberOfLines={2}>
                {idleGhostItem.name}
              </Text>
            </View>
          </Animated.View>
        )}

        {/* Idle finger cursor */}
        <Animated.View
          pointerEvents="none"
          style={[{ position: 'absolute', zIndex: 6 }, idleFingerAnimatedStyle]}
        >
          <Image source={require('../../../assets/images/Finger.png')} style={{ width: 110, height: 110 }} resizeMode="contain" />
        </Animated.View>
      </View>
    </View>
  );
}
