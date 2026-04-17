/// <reference types="nativewind/types" />
import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import { useGame } from '../context/GameContext';
import { BAG_ITEMS, DO_NOT_PACK_ITEMS } from '../../data/bagItems';
import { DraggableItem, DraggableItemRef } from '../components/DraggableItem';
import { StepCompletionModal } from '../components/StepCompletionModal';
import { useTranslation } from 'react-i18next';
import { useGameAudio } from '../hooks/useGameAudio';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  Easing,
  cancelAnimation,
} from 'react-native-reanimated';

const INACTIVITY_DELAY_MS = 10000; // 10 seconds

const { width, height } = Dimensions.get('window');
const FINGER_VISUAL_X_OFFSET = -24;
const FINGER_VISUAL_Y_OFFSET = -10;
const STEP1_DRAG_TARGET_Y_OFFSET = -24;
const STEP1_PACK_TARGET_Y_OFFSET = -20;

const waveCategories = [
  'Clothing',
  'Hygiene',
  'Comfort',
  'Baby',
  'LegalDocs',
  'HealthDocs',
  'ClinicalDocs',
];

const WRONG_DISTRIBUTION: Record<string, number[]> = {
  Clothing: [4, 8],
  Hygiene: [1, 2, 3],
  Comfort: [],
  Baby: [5, 6, 7],
  LegalDocs: [91],
  HealthDocs: [92],
  ClinicalDocs: [93],
};

export default function Step1({ onNextStep }: { onNextStep: () => void }) {
  const {
    packedBagItems, packItem, showFeedback, clearFeedback, setCurrentWave,
    resetCurrentStep, tutorialStep, showTutorial: isTutorialVisible,
    setShowTutorial,
  } = useGame();
  const tutorialHideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Ref mirror of isTutorialVisible so the animation effect doesn't re-run when we hide/show the tutorial
  const isTutorialVisibleRef = useRef(isTutorialVisible);
  // Stable function refs so early effects can call idle helpers defined later
  const stopIdleAnimationRef = useRef<() => void>(() => { });
  const resetInactivityTimerRef = useRef<() => void>(() => { });
  useEffect(() => {
    isTutorialVisibleRef.current = isTutorialVisible;
    if (isTutorialVisible) {
      // Main tutorial is showing — stop idle anim and pause the inactivity timer
      stopIdleAnimationRef.current();
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    } else {
      // Tutorial dismissed — restart the inactivity countdown
      resetInactivityTimerRef.current();
    }
  }, [isTutorialVisible]);
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';
  const { playCorrect, playIncorrect } = useGameAudio();

  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [currentWaveIdx, setCurrentWaveIdx] = useState(0);
  const [itemPage, setItemPage] = useState(0);
  const [containerLayout, setContainerLayout] = useState({ width, height });
  // Hide the real item while the ghost drags during tutorial step 2
  const [hideTutorialItem, setHideTutorialItem] = useState(false);

  const itemsPerPage = 6;
  const currentWave = waveCategories[currentWaveIdx];

  const hasCompletedInitially = useRef(packedBagItems.length >= BAG_ITEMS.length);
  const isFirstCompletion = useRef(false);

  const checkCompletion = (count: number) => {
    if (count >= BAG_ITEMS.length) {
      isFirstCompletion.current = !hasCompletedInitially.current;
      setShowCompletionModal(true);
    }
  };

  useEffect(() => {
    if (currentWave) setCurrentWave(currentWave);
  }, [currentWave]);

  useEffect(() => { setItemPage(0); }, [currentWaveIdx]);

  // Advance wave when all correct items in current wave are packed
  useEffect(() => {
    let nextWaveIdx = 0;
    for (let i = 0; i < waveCategories.length; i++) {
      const cat = waveCategories[i];
      const correctInWave = BAG_ITEMS.filter(item => item.category === cat);
      if (correctInWave.length === 0) { nextWaveIdx = i + 1; continue; }
      const packedInWave = correctInWave.filter(item => packedBagItems.includes(item.id));
      if (packedInWave.length >= correctInWave.length) { nextWaveIdx = i + 1; } else { break; }
    }
    if (nextWaveIdx >= waveCategories.length) {
      checkCompletion(packedBagItems.length);
    } else {
      setCurrentWaveIdx(nextWaveIdx);
    }
  }, [packedBagItems]);

  const activeWaveItems = useMemo(() => {
    if (!currentWave) return [];
    const correctItems = BAG_ITEMS
      .filter(i => i.category === currentWave)
      .map(item => ({ ...item, isWrong: false }));
    const wrongIds = WRONG_DISTRIBUTION[currentWave] || [];
    const wrongItems = DO_NOT_PACK_ITEMS
      .filter(i => wrongIds.includes(i.id))
      .map(item => ({ ...item, isWrong: true, why: item.whyNot }));
    const combined = [...correctItems, ...wrongItems];
    // Swap shawl (id:3, correct) and tight jeans (id:4, wrong) positions in the grid
    // so the drag tutorial finger lands correctly above the shawl
    const shawlIdx = combined.findIndex(i => i.id === 3 && !i.isWrong);
    const jeansIdx = combined.findIndex(i => i.id === 4 && i.isWrong);
    if (shawlIdx !== -1 && jeansIdx !== -1) {
      [combined[shawlIdx], combined[jeansIdx]] = [combined[jeansIdx], combined[shawlIdx]];
    }
    return combined;
  }, [currentWave]);

  const paginatedItems = useMemo(() => {
  const itemSize = 70;

  // Horizontal spacing between columns
  const colSpacing = itemSize + 30;

  // Vertical spacing between rows
  const baseRowSpacing = itemSize + 40;

  // Extra gap between first row and second row
  const extraGap = 30;

  const columns = 3;
  const rightPadding = 180;

  const slice = activeWaveItems.slice(
    itemPage * itemsPerPage,
    (itemPage + 1) * itemsPerPage
  );

  // Right aligned grid
  const totalGridWidth = (columns - 1) * colSpacing;
  const startX = containerLayout.width - totalGridWidth - rightPadding;

  return slice.map((item, index) => {
    const row = Math.floor(index / columns);
    const col = index % columns;

    const xPos = startX + col * colSpacing;

    const yPos =
      containerLayout.height * 0.42 +
      row * baseRowSpacing +
      (row >= 1 ? extraGap : 0);

    return {
      ...item,
      initialPos: {
        x: xPos + (Math.random() - 0.5) * 10,
        y: yPos + (Math.random() - 0.5) * 10,
      },
    };
  });
}, [
  activeWaveItems,
  itemPage,
  containerLayout.width,
  containerLayout.height,
]);

  // Keep paginatedItemsRef in sync for inactivity animation
  useEffect(() => { paginatedItemsRef.current = paginatedItems; }, [paginatedItems]);

  // Auto-advance page when all correct items on current page are packed
  useEffect(() => {
    const slice = activeWaveItems.slice(itemPage * itemsPerPage, (itemPage + 1) * itemsPerPage);
    const correctOnPage = slice.filter(i => !i.isWrong);
    if (correctOnPage.length > 0 && correctOnPage.every(i => packedBagItems.includes(i.id))) {
      if ((itemPage + 1) * itemsPerPage < activeWaveItems.length) {
        const timer = setTimeout(() => setItemPage(p => p + 1), 800);
        return () => clearTimeout(timer);
      }
    }
  }, [packedBagItems, itemPage, activeWaveItems]);

  const dropZone = {
    x: containerLayout.width * 0.35 - 110,
    y: containerLayout.height - 240,
    w: 220,
    h: 180,
  };

  const itemRefs = useRef<Record<number, DraggableItemRef>>({});

  // ── Finger animation shared values ──
  const fingerX = useSharedValue(-200);
  const fingerY = useSharedValue(-200);
  const fingerScale = useSharedValue(1);
  const fingerOpacity = useSharedValue(0);
  const fingerRotate = useSharedValue(0);   // degrees, for drag lean
  // Ripple
  const rippleScale = useSharedValue(0);
  const rippleOpacity = useSharedValue(0);
  // Trail
  const trailOpacity = useSharedValue(0);
  const trailX = useSharedValue(-200);
  const trailY = useSharedValue(-200);
  // Ghost item (follows finger during drag tutorial)
  const ghostOpacity = useSharedValue(0);

  // ── Inactivity idle-tutorial shared values (separate from main tutorial finger) ──
  const idleFingerX = useSharedValue(-200);
  const idleFingerY = useSharedValue(-200);
  const idleFingerScale = useSharedValue(1);
  const idleFingerOpacity = useSharedValue(0);
  const idleFingerRotate = useSharedValue(0);
  const idleGhostOpacity = useSharedValue(0);
  const idleRippleScale = useSharedValue(0);
  const idleRippleOpacity = useSharedValue(0);
  // Which item id the idle ghost is showing
  const [idleGhostItem, setIdleGhostItem] = useState<{ emoji: string; name: string } | null>(null);

  // Inactivity timer & running flag
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleLoopTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isIdleRunning = useRef(false);
  // Keep a live ref to paginatedItems so the idle loop always sees the latest items
  const paginatedItemsRef = useRef([] as typeof paginatedItems);
  // Keep a live ref to dropZone
  const dropZoneRef = useRef({ x: 0, y: 0, w: 0, h: 0 });
  // Keep dropZoneRef in sync for inactivity animation
  dropZoneRef.current = dropZone;
  // Keep a live ref to packedBagItems
  const packedRef = useRef(packedBagItems);
  useEffect(() => { packedRef.current = packedBagItems; }, [packedBagItems]);

  const fingerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: fingerOpacity.value,
    transform: [
      { translateX: fingerX.value + FINGER_VISUAL_X_OFFSET },
      { translateY: fingerY.value + FINGER_VISUAL_Y_OFFSET },
      { scale: fingerScale.value },
      { rotate: `${fingerRotate.value}deg` },
    ],
  }));

  // Ghost sits just below the finger tip (finger emoji is ~50px, item rides under it)
  const ghostAnimatedStyle = useAnimatedStyle(() => ({
    opacity: ghostOpacity.value,
    transform: [
      // finger tip is roughly at (fingerX, fingerY+10); item center offset so it appears "held"
      { translateX: fingerX.value - 10 },
      { translateY: fingerY.value + 38 },
    ],
  }));

  const rippleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: rippleOpacity.value,
    transform: [
      { translateX: fingerX.value + 16 },
      { translateY: fingerY.value + 16 },
      { scale: rippleScale.value },
    ],
  }));

  const trailAnimatedStyle = useAnimatedStyle(() => ({
    opacity: trailOpacity.value,
    transform: [
      { translateX: trailX.value },
      { translateY: trailY.value },
    ],
  }));

  // ── Idle tutorial animated styles ──
  const idleFingerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: idleFingerOpacity.value,
    transform: [
      { translateX: idleFingerX.value + FINGER_VISUAL_X_OFFSET },
      { translateY: idleFingerY.value + FINGER_VISUAL_Y_OFFSET },
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

  const idleRippleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: idleRippleOpacity.value,
    transform: [
      { translateX: idleFingerX.value + 16 },
      { translateY: idleFingerY.value + 16 },
      { scale: idleRippleScale.value },
    ],
  }));

  const fireRipple = () => {
    rippleScale.value = 0;
    rippleOpacity.value = 0.7;
    rippleScale.value = withTiming(3.5, { duration: 700, easing: Easing.out(Easing.ease) });
    rippleOpacity.value = withTiming(0, { duration: 700 });
  };

  const fireIdleRipple = () => {
    idleRippleScale.value = 0;
    idleRippleOpacity.value = 0.7;
    idleRippleScale.value = withTiming(3.5, { duration: 700, easing: Easing.out(Easing.ease) });
    idleRippleOpacity.value = withTiming(0, { duration: 700 });
  };

  // Clear all idle loop timers
  const clearIdleTimers = () => {
    idleLoopTimers.current.forEach(clearTimeout);
    idleLoopTimers.current = [];
  };

  // Stop idle animation immediately and reset finger to offscreen
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
    idleRippleOpacity.value = 0;
    setIdleGhostItem(null);
  }, [
    idleFingerOpacity, idleGhostOpacity, idleRippleOpacity,
    idleFingerX, idleFingerY, idleFingerScale, idleFingerRotate
  ]);
  stopIdleAnimationRef.current = stopIdleAnimation;

  // Run one full idle cycle: drag anim on a visible item, then recurse
  const runIdleCycle = useCallback(() => {
    if (!isIdleRunning.current) return;

    const items = paginatedItemsRef.current;
    const packed = packedRef.current;
    const dz = dropZoneRef.current;

    // Pick a random visible (not-yet-packed) item to demo dragging
    const dragCandidates = items.filter(i => !(!i.isWrong && packed.includes(i.id)));
    if (dragCandidates.length === 0) {
      // Nothing to show; stop idle and let inactivity timer restart later
      isIdleRunning.current = false;
      return;
    }
    const dragItem = dragCandidates[Math.floor(Math.random() * dragCandidates.length)];

    // Start finger right above the item's visual center (item circle is 82px)
    const dix = dragItem.initialPos.x;
    const diy = dragItem.initialPos.y - 160;

    // Target = inside the bag (same approach as Step 2)
    const tx = dz.x + dz.w / 2 - 28;
    const ty = dz.y - 130 + STEP1_DRAG_TARGET_Y_OFFSET;

    const addTimer = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      idleLoopTimers.current.push(id);
    };

    // ── DRAG demo ──
    addTimer(() => {
      if (!isIdleRunning.current) return;
      const ghostEmoji = dragItem.emoji ?? '📦';
      const ghostName = ('nameNe' in dragItem && isNe) ? (dragItem as any).nameNe : dragItem.name;
      setIdleGhostItem({ emoji: ghostEmoji, name: ghostName });

      idleFingerX.value = dix;
      idleFingerY.value = diy - 180;
      idleFingerScale.value = 1;
      idleFingerRotate.value = 0;
      idleGhostOpacity.value = 0;

      idleFingerOpacity.value = withTiming(1, { duration: 400 });
      idleFingerY.value = withTiming(diy, { duration: 500, easing: Easing.out(Easing.ease) });
    }, 200);

    // Press to grab (no ripple — avoids looking like a tap)
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

    // Drag to bag
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

    // Release + ripple
    addTimer(() => {
      if (!isIdleRunning.current) return;
      idleFingerScale.value = withSequence(
        withTiming(1.2, { duration: 140 }),
        withTiming(1, { duration: 140 })
      );
      fireIdleRipple();
    }, 3200);

    // Hide ghost, fade out finger
    addTimer(() => {
      if (!isIdleRunning.current) return;
      idleGhostOpacity.value = withTiming(0, { duration: 250 });
      idleFingerOpacity.value = withTiming(0, { duration: 400 });
      setIdleGhostItem(null);
    }, 3700);

    // Recurse with a short pause between cycles
    addTimer(() => {
      if (!isIdleRunning.current) return;
      runIdleCycle();
    }, 4700);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNe]);

  // Start idle animation
  const startIdleAnimation = useCallback(() => {
    if (isIdleRunning.current) return;
    isIdleRunning.current = true;
    runIdleCycle();
  }, [runIdleCycle]);

  // Reset inactivity timer on user activity
  const resetInactivityTimer = useCallback(() => {
    // If idle anim was running, stop it
    if (isIdleRunning.current) {
      stopIdleAnimation();
    }
    // Clear previous timer
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    // Don't schedule idle during the main tutorial
    if (isTutorialVisibleRef.current) return;
    inactivityTimer.current = setTimeout(() => {
      startIdleAnimation();
    }, INACTIVITY_DELAY_MS);
  }, [startIdleAnimation, stopIdleAnimation]);
  resetInactivityTimerRef.current = resetInactivityTimer;

  // Start inactivity timer on mount, clear on unmount
  useEffect(() => {
    resetInactivityTimer();
    return () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      clearIdleTimers();
      isIdleRunning.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const t = (fn: () => void, ms: number) => { const id = setTimeout(fn, ms); timers.push(id); };

    cancelAnimation(fingerX);
    cancelAnimation(fingerY);
    cancelAnimation(fingerScale);
    cancelAnimation(fingerRotate);
    fingerOpacity.value = withTiming(0, { duration: 120 });
    ghostOpacity.value = 0;
    rippleOpacity.value = 0;
    trailOpacity.value = 0;
    setHideTutorialItem(false);

    if (!isTutorialVisibleRef.current || currentWaveIdx !== 0) {
      return () => timers.forEach(clearTimeout);
    }

    const item3 = paginatedItems.find(i => i.id === 3);
    if (!item3) return () => timers.forEach(clearTimeout);

    // Finger sits ON the item center
    const ix = item3.initialPos.x + 10;
    const iy = item3.initialPos.y - 50;

    // ── TAP TO LEARN — slow deliberate taps ──
    if (tutorialStep === 1) {
      fingerX.value = ix;
      fingerY.value = iy - 200;
      fingerScale.value = 1;
      fingerRotate.value = 0;

      // Float down onto item
      t(() => {
        fingerOpacity.value = withTiming(1, { duration: 500 });
        fingerY.value = withTiming(iy, { duration: 600, easing: Easing.out(Easing.ease) });
      }, 500);

      // TAP 1 — slow press, hold, lift
      t(() => {
        fingerY.value = withTiming(iy + 16, { duration: 400, easing: Easing.in(Easing.ease) });
        fingerScale.value = withTiming(0.82, { duration: 400 });
        fireRipple();
        handleLongPress(3, false);
      }, 1400);
      t(() => {
        fingerY.value = withTiming(iy, { duration: 400, easing: Easing.out(Easing.ease) });
        fingerScale.value = withTiming(1, { duration: 400 });
      }, 2000);

      // TAP 2
      t(() => {
        fingerY.value = withTiming(iy + 16, { duration: 400, easing: Easing.in(Easing.ease) });
        fingerScale.value = withTiming(0.82, { duration: 400 });
        fireRipple();
      }, 3000);
      t(() => {
        fingerY.value = withTiming(iy, { duration: 400, easing: Easing.out(Easing.ease) });
        fingerScale.value = withTiming(1, { duration: 400 });
      }, 3600);

      // TAP 3
      t(() => {
        fingerY.value = withTiming(iy + 16, { duration: 400, easing: Easing.in(Easing.ease) });
        fingerScale.value = withTiming(0.82, { duration: 400 });
        fireRipple();
      }, 4600);
      t(() => {
        fingerY.value = withTiming(iy, { duration: 400, easing: Easing.out(Easing.ease) });
        fingerScale.value = withTiming(1, { duration: 400 });
      }, 5200);

      // Fade out
      t(() => { fingerOpacity.value = withTiming(0, { duration: 600 }); }, 6000);
    }

    // ── DRAG & DROP — finger ON item, both move together to bag ──
    if (tutorialStep === 2) {
      // Target = bag center
      const tx = dropZone.x + dropZone.w / 2 - 28;
      const ty = dropZone.y + dropZone.h / 2 - 40 + STEP1_DRAG_TARGET_Y_OFFSET;

      fingerX.value = ix;
      fingerY.value = iy - 200;
      fingerScale.value = 1;
      fingerRotate.value = 0;
      ghostOpacity.value = 0;

      // Float down onto item
      t(() => {
        fingerOpacity.value = withTiming(1, { duration: 500 });
        fingerY.value = withTiming(iy, { duration: 600, easing: Easing.out(Easing.ease) });
      }, 400);

      // Press down to grab — show ghost item attached to finger, hide real item
      t(() => {
        fingerScale.value = withTiming(0.85, { duration: 300, easing: Easing.in(Easing.ease) });
        ghostOpacity.value = withTiming(1, { duration: 200 });
        setHideTutorialItem(true);
        fireRipple();
      }, 1200);

      // Lean slightly
      t(() => { fingerRotate.value = withTiming(-12, { duration: 300 }); }, 1550);

      // SLOW drag — finger + ghost move together over 2 seconds
      // (ghost is driven by ghostAnimatedStyle which reads fingerX/fingerY directly)
      t(() => {
        const dur = 2000;
        const ease = Easing.inOut(Easing.ease);
        fingerX.value = withTiming(tx, { duration: dur, easing: ease });
        fingerY.value = withTiming(ty, { duration: dur, easing: ease });
      }, 1600);

      // Straighten on arrival
      t(() => { fingerRotate.value = withTiming(0, { duration: 250 }); }, 3650);

      // Release bounce
      t(() => {
        fingerScale.value = withSequence(
          withTiming(1.2, { duration: 150 }),
          withTiming(1, { duration: 150 })
        );
        fireRipple();
      }, 3700);

      // Pack the item — hide ghost, animate real item into bag, hide tutorial so success tip is visible
      t(() => {
        ghostOpacity.value = withTiming(0, { duration: 200 });
        const ref = itemRefs.current[3];
        if (ref) {
          ref.animatePack(
            dropZone.x + dropZone.w / 2 - 30,
            dropZone.y + dropZone.h / 2 - 30 + STEP1_PACK_TARGET_Y_OFFSET
          );
          playCorrect();
          const bagItem = BAG_ITEMS.find(i => i.id === 3)!;
          showFeedback(
            isNe ? `शाबास! ${bagItem.nameNe}` : `Great job! ${bagItem.name}`,
            isNe ? bagItem.whyNe : bagItem.why,
            'success'
          );
        }
        // Hide tutorial card so the success feedback is fully visible for 2 seconds,
        // then clear the tip and bring the tutorial back
        if (tutorialHideTimer.current) clearTimeout(tutorialHideTimer.current);
        setShowTutorial(false);
        tutorialHideTimer.current = setTimeout(() => {
          clearFeedback();
          setShowTutorial(true);
        }, 2000);
      }, 3850);

      // Fade out finger
      t(() => { fingerOpacity.value = withTiming(0, { duration: 500 }); }, 4500);

      // Ensure the real item becomes visible again after the demo drag completes
      // (tutorial should demonstrate the action, but not permanently pack the item for gameplay)
      t(() => { setHideTutorialItem(false); }, 4600);
    }

    return () => timers.forEach(clearTimeout);
  }, [tutorialStep, paginatedItems]);

  const handleDrop = (id: number, x: number, y: number, isWrong: boolean) => {
    const item = activeWaveItems.find(i => i.id === id && i.isWrong === isWrong);
    if (!item) return;

    const cx = x + 30;
    const cy = y + 30;

    const inZone =
      cx > dropZone.x && cx < dropZone.x + dropZone.w &&
      cy > dropZone.y && cy < dropZone.y + dropZone.h;

    const ref = itemRefs.current[isWrong ? -id : id];

    if (inZone) {
      if (!isWrong) {
        packItem(id);
        ref?.animatePack(
          dropZone.x + dropZone.w / 2 - 30,
          dropZone.y + dropZone.h / 2 - 30 + STEP1_PACK_TARGET_Y_OFFSET
        );
        playCorrect();
        const itemName = isNe && 'nameNe' in item ? (item as any).nameNe : item.name;
        const itemWhy = isNe && 'whyNe' in item ? (item as any).whyNe : item.why;
        showFeedback(isNe ? `शाबास! ${itemName}` : `Great job! ${itemName}`, itemWhy, 'success');
      } else {
        ref?.shakeAndSnapBack();
        playIncorrect();
        const itemName = isNe && 'nameNe' in item ? (item as any).nameNe : item.name;
        const itemWhy = isNe && 'whyNotNe' in item ? (item as any).whyNotNe : item.why;
        showFeedback(isNe ? `ओहो! ${itemName} चाहिँदैन` : `Oops! ${itemName} isn't needed`, itemWhy, 'error');
      }
    } else {
      ref?.snapBack();
    }
  };

  const handleLongPress = (id: number, isWrong: boolean) => {
    const item = activeWaveItems.find(i => i.id === id && i.isWrong === isWrong);
    if (!item) return;
    const itemName = isNe && 'nameNe' in item && (item as any).nameNe ? (item as any).nameNe : item.name;
    const itemWhy = item.isWrong
      ? ((isNe && 'whyNotNe' in item && (item as any).whyNotNe) || item.why)
      : ((isNe && 'whyNe' in item && (item as any).whyNe) || item.why);
    showFeedback(itemName, itemWhy, 'info');

    // During tap-tutorial step: hide tutorial so the info tip is fully visible for 2s,
    // then clear the tip and bring the tutorial back
    if (isTutorialVisible && tutorialStep === 1) {
      if (tutorialHideTimer.current) clearTimeout(tutorialHideTimer.current);
      setShowTutorial(false);
      tutorialHideTimer.current = setTimeout(() => {
        clearFeedback();
        setShowTutorial(true);
      }, 2000);
    }
  };

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
      <LinearGradient
        colors={['rgba(255,255,255,0.9)', 'rgba(243,58,106,0.05)', 'rgba(176,76,138,0.08)']}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />

      {/* Hospital Bag Drop Zone */}
      <View
        className="absolute justify-center items-center"
        style={{ left: dropZone.x - 15, top: dropZone.y - 30, width: dropZone.w + 30, height: dropZone.h + 60 }}
      >
        <Image
          source={
            packedBagItems.length >= BAG_ITEMS.length
              ? require('../../../assets/images/hospital_bag_closed.png')
              : require('../../../assets/images/hospital_bag_open.png')
          }
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
      </View>

      {/* Draggable Items */}
      {paginatedItems.map((item) => {
        const uniqueId = item.isWrong ? -item.id : item.id;
        const packed = !item.isWrong && packedBagItems.includes(item.id);
        return (
          <DraggableItem
            key={`bag-${currentWave}-${uniqueId}`}
            ref={(el) => { if (el) itemRefs.current[uniqueId] = el; }}
            id={item.id}
            name={isNe && 'nameNe' in item ? (item as any).nameNe : item.name}
            emoji={item.emoji || '📦'}
            isWrong={item.isWrong}
            initialPos={item.initialPos}
            onDrop={handleDrop}
            onLongPress={handleLongPress}
            packed={packed || (hideTutorialItem && item.id === 3 && !item.isWrong)}
            color={item.isWrong ? '#FFF5F6' : '#FFFFFF'}
          />
        );
      })}

      <StepCompletionModal
        visible={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        onNext={isFirstCompletion.current ? () => { setShowCompletionModal(false); onNextStep(); } : undefined}
        onReset={() => { resetCurrentStep(); setShowCompletionModal(false); }}
      />

      {/* ── TUTORIAL ANIMATION LAYER — must be LAST child so it always paints above draggable items ── */}
      <View
        pointerEvents="none"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9995, elevation: 9995 }}
      >
        {/* GHOST ITEM (follows finger during drag tutorial) */}
        {(() => {
          const item3 = paginatedItems.find(i => i.id === 3);
          const ghostEmoji = item3?.emoji ?? '🩴';
          const ghostName = item3 ? (isNe && 'nameNe' in item3 ? (item3 as any).nameNe : item3.name) : '';
          return (
            <Animated.View
              pointerEvents="none"
              style={[{ position: 'absolute', zIndex: 3 }, ghostAnimatedStyle]}
            >
              <View
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 36,
                  backgroundColor: '#FFFFFF',
                  borderWidth: 3.5,
                  borderColor: '#F85797',
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#C06898',
                  shadowOffset: { width: 0, height: 3 },
                  shadowOpacity: 0.35,
                  shadowRadius: 8,
                  elevation: 10,
                }}
              >
                <Text style={{ fontSize: 36, textAlign: 'center' }}>{ghostEmoji}</Text>
              </View>
              <View
                style={{
                  width: 92,
                  marginTop: 4,
                  marginLeft: -10,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  borderWidth: 1.5,
                  borderColor: '#F5E1EC',
                  paddingHorizontal: 7,
                  paddingVertical: 4,
                }}
              >
                <Text style={{ fontSize: 10, fontWeight: '700', textAlign: 'center', color: '#333', lineHeight: 13 }} numberOfLines={2}>
                  {ghostName}
                </Text>
              </View>
            </Animated.View>
          );
        })()}

        {/* RIPPLE RING */}
        <Animated.View
          pointerEvents="none"
          style={[
            {
              position: 'absolute', zIndex: 1,
              width: 56, height: 56, borderRadius: 28,
              borderWidth: 2.5, borderColor: '#C06898',
              marginLeft: -28, marginTop: -28,
            },
            rippleAnimatedStyle,
          ]}
        />

        {/* DRAG TRAIL DOT */}
        <Animated.View
          pointerEvents="none"
          style={[
            {
              position: 'absolute', zIndex: 2,
              width: 12, height: 12, borderRadius: 6,
              backgroundColor: '#C06898',
              marginLeft: -6, marginTop: -6,
            },
            trailAnimatedStyle,
          ]}
        />

        {/* FINGER CURSOR — topmost */}
        <Animated.View
          pointerEvents="none"
          style={[{ position: 'absolute', zIndex: 4 }, fingerAnimatedStyle]}
        >
          <Image source={require('../../../assets/images/Finger.png')} style={{ width: 110, height: 110 }} resizeMode="contain" />
        </Animated.View>

        {/* ── IDLE / INACTIVITY TUTORIAL LAYER (zIndex 9996 — above main tutorial finger) ── */}
        {/* Idle ghost item dragged by idle finger */}
        {idleGhostItem && (
          <Animated.View
            pointerEvents="none"
            style={[{ position: 'absolute', zIndex: 5 }, idleGhostAnimatedStyle]}
          >
            <View
              style={{
                width: 72, height: 72, borderRadius: 36,
                backgroundColor: '#FFFFFF',
                borderWidth: 3.5, borderColor: '#F85797',
                justifyContent: 'center', alignItems: 'center',
                shadowColor: '#C06898',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.35, shadowRadius: 8, elevation: 10,
              }}
            >
              <Text style={{ fontSize: 36, textAlign: 'center' }}>{idleGhostItem.emoji}</Text>
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

        {/* Idle ripple ring */}
        <Animated.View
          pointerEvents="none"
          style={[
            {
              position: 'absolute', zIndex: 5,
              width: 56, height: 56, borderRadius: 28,
              borderWidth: 2.5, borderColor: '#C06898',
              marginLeft: -28, marginTop: -28,
            },
            idleRippleAnimatedStyle,
          ]}
        />

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
