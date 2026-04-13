/// <reference types="nativewind/types" />
import React, { useRef, useState, useMemo, useEffect } from 'react';
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

const { width, height } = Dimensions.get('window');

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
    packedBagItems, packItem, showFeedback, setCurrentWave,
    resetCurrentStep, tutorialStep, showTutorial: isTutorialVisible,
  } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';
  const { playCorrect, playIncorrect } = useGameAudio();

  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [currentWaveIdx, setCurrentWaveIdx] = useState(0);
  const [itemPage, setItemPage] = useState(0);
  const [containerLayout, setContainerLayout] = useState({ width, height });

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
    return [...correctItems, ...wrongItems];
  }, [currentWave]);

  const paginatedItems = useMemo(() => {
    const itemSize = 75;
    const slice = activeWaveItems.slice(itemPage * itemsPerPage, (itemPage + 1) * itemsPerPage);
    return slice.map((item, index) => {
      const row = Math.floor(index / 3);
      const col = index % 3;
      const xPos = containerLayout.width * 0.35 - (3 * itemSize) / 2 + col * itemSize;
      const yPos = containerLayout.height * 0.42 + row * (itemSize + 30);
      return { ...item, initialPos: { x: xPos + (Math.random() - 0.5) * 10, y: yPos + (Math.random() - 0.5) * 10 } };
    });
  }, [activeWaveItems, itemPage, containerLayout.width]);

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
  const fingerX       = useSharedValue(-200);
  const fingerY       = useSharedValue(-200);
  const fingerScale   = useSharedValue(1);
  const fingerOpacity = useSharedValue(0);
  const fingerRotate  = useSharedValue(0);   // degrees, for drag lean
  // Ripple
  const rippleScale   = useSharedValue(0);
  const rippleOpacity = useSharedValue(0);
  // Trail
  const trailOpacity  = useSharedValue(0);
  const trailX        = useSharedValue(-200);
  const trailY        = useSharedValue(-200);

  const fingerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: fingerOpacity.value,
    transform: [
      { translateX: fingerX.value },
      { translateY: fingerY.value },
      { scale: fingerScale.value },
      { rotate: `${fingerRotate.value}deg` },
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

  // Helper: fire a ripple from current finger position
  const fireRipple = () => {
    'worklet';
    rippleScale.value = 0;
    rippleOpacity.value = 0.75;
    rippleScale.value = withTiming(3, { duration: 550, easing: Easing.out(Easing.ease) });
    rippleOpacity.value = withTiming(0, { duration: 550 });
  };

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const t = (fn: () => void, ms: number) => { const id = setTimeout(fn, ms); timers.push(id); };

    // Reset everything
    cancelAnimation(fingerX);
    cancelAnimation(fingerY);
    cancelAnimation(fingerScale);
    cancelAnimation(fingerRotate);
    fingerOpacity.value = withTiming(0, { duration: 120 });
    rippleOpacity.value = 0;
    trailOpacity.value = 0;

    if (!isTutorialVisible || currentWaveIdx !== 0) {
      return () => timers.forEach(clearTimeout);
    }

    const item3 = paginatedItems.find(i => i.id === 3);
    if (!item3) return () => timers.forEach(clearTimeout);

    const ix = item3.initialPos.x + 18;
    const iy = item3.initialPos.y + 32;

    // ── TAP TO LEARN ANIMATION ──
    if (tutorialStep === 1) {
      fingerX.value = ix;
      fingerY.value = iy;
      fingerScale.value = 1;
      fingerRotate.value = 0;

      // Fade finger in
      t(() => { fingerOpacity.value = withTiming(1, { duration: 350 }); }, 300);

      // Tap cycle (repeat 3 times)
      [900, 1700, 2500].forEach(delay => {
        t(() => {
          // Press down with natural squeeze
          fingerScale.value = withSequence(
            withTiming(0.6, { duration: 120, easing: Easing.in(Easing.ease) }),
            withTiming(1.15, { duration: 140, easing: Easing.out(Easing.back(2)) }),
            withTiming(1, { duration: 100 })
          );
          fireRipple();
        }, delay);
      });

      // Trigger hint on first tap
      t(() => handleLongPress(3, false), 900);

      // Fade out
      t(() => { fingerOpacity.value = withTiming(0, { duration: 400 }); }, 3400);
    }

    // ── DRAG & DROP ANIMATION ──
    if (tutorialStep === 2) {
      const tx = dropZone.x + dropZone.w / 2 + 10;
      const ty = dropZone.y + dropZone.h / 2 - 10;

      fingerX.value = ix;
      fingerY.value = iy;
      fingerScale.value = 1;
      fingerRotate.value = 0;

      // Fade in
      t(() => { fingerOpacity.value = withTiming(1, { duration: 300 }); }, 200);

      // Hover wobble above item
      t(() => {
        fingerY.value = withSequence(
          withTiming(iy - 12, { duration: 300, easing: Easing.inOut(Easing.ease) }),
          withTiming(iy, { duration: 300, easing: Easing.inOut(Easing.ease) })
        );
      }, 500);

      // Press and grip
      t(() => {
        fingerScale.value = withTiming(0.72, { duration: 180, easing: Easing.in(Easing.ease) });
        fireRipple();
      }, 1100);

      // Show trail dot appearing at item
      t(() => {
        trailX.value = ix + 12;
        trailY.value = iy + 12;
        trailOpacity.value = withTiming(0.55, { duration: 200 });
      }, 1300);

      // Lean finger slightly as drag starts
      t(() => {
        fingerRotate.value = withTiming(-18, { duration: 200 });
      }, 1350);

      // Drag toward bag with smooth cubic ease
      t(() => {
        const dur = 950;
        const ease = Easing.bezier(0.25, 0.1, 0.25, 1);
        fingerX.value = withTiming(tx, { duration: dur, easing: ease });
        fingerY.value = withTiming(ty, { duration: dur, easing: ease });
        trailX.value  = withTiming(tx + 12, { duration: dur, easing: ease });
        trailY.value  = withTiming(ty + 12, { duration: dur, easing: ease });
        trailOpacity.value = withTiming(0, { duration: dur });
      }, 1400);

      // Straighten and release on bag
      t(() => {
        fingerRotate.value = withTiming(0, { duration: 180 });
        fingerScale.value = withSequence(
          withTiming(1.25, { duration: 120, easing: Easing.out(Easing.ease) }),
          withTiming(1, { duration: 120 })
        );
        fireRipple();
      }, 2380);

      // Pack the item
      t(() => {
        const ref = itemRefs.current[3];
        if (ref) {
          ref.animatePack(dropZone.x + dropZone.w / 2 - 30, dropZone.y + dropZone.h / 2 - 30);
          playCorrect();
          packItem(3);
          const bagItem = BAG_ITEMS.find(i => i.id === 3)!;
          showFeedback(
            isNe ? `शाबास! ${bagItem.nameNe}` : `Great job! ${bagItem.name}`,
            isNe ? bagItem.whyNe : bagItem.why,
            'success'
          );
        }
      }, 2500);

      // Fade finger out
      t(() => { fingerOpacity.value = withTiming(0, { duration: 400 }); }, 3000);
    }

    return () => timers.forEach(clearTimeout);
  }, [tutorialStep, isTutorialVisible, paginatedItems]);

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
        ref?.animatePack(dropZone.x + dropZone.w / 2 - 30, dropZone.y + dropZone.h / 2 - 30);
        playCorrect();
        const itemName = isNe && 'nameNe' in item ? (item as any).nameNe : item.name;
        const itemWhy  = isNe && 'whyNe' in item  ? (item as any).whyNe  : item.why;
        showFeedback(isNe ? `शाबास! ${itemName}` : `Great job! ${itemName}`, itemWhy, 'success');
      } else {
        ref?.shakeAndSnapBack();
        playIncorrect();
        const itemName = isNe && 'nameNe' in item ? (item as any).nameNe : item.name;
        const itemWhy  = isNe && 'whyNotNe' in item ? (item as any).whyNotNe : item.why;
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
    const itemWhy  = item.isWrong
      ? ((isNe && 'whyNotNe' in item && (item as any).whyNotNe) || item.why)
      : ((isNe && 'whyNe' in item  && (item as any).whyNe)  || item.why);
    showFeedback(itemName, itemWhy, 'info');
  };

  return (
    <View
      className="flex-1"
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        setContainerLayout({ width, height });
      }}
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
            packed={packed}
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

      {/* ── RIPPLE RING ── */}
      <Animated.View
        pointerEvents="none"
        style={[
          {
            position: 'absolute', zIndex: 9996,
            width: 56, height: 56, borderRadius: 28,
            borderWidth: 2.5, borderColor: '#C06898',
            marginLeft: -28, marginTop: -28,
          },
          rippleAnimatedStyle,
        ]}
      />

      {/* ── DRAG TRAIL DOT ── */}
      <Animated.View
        pointerEvents="none"
        style={[
          {
            position: 'absolute', zIndex: 9997,
            width: 12, height: 12, borderRadius: 6,
            backgroundColor: '#C06898',
            marginLeft: -6, marginTop: -6,
          },
          trailAnimatedStyle,
        ]}
      />

      {/* ── FINGER CURSOR ── */}
      <Animated.View
        pointerEvents="none"
        style={[{ position: 'absolute', zIndex: 9999 }, fingerAnimatedStyle]}
      >
        {/* Soft glow behind finger */}
        <View style={{
          position: 'absolute',
          width: 58, height: 58, borderRadius: 29,
          backgroundColor: 'rgba(192,104,152,0.22)',
          top: -7, left: -7,
        }} />
        <Text style={{ fontSize: 46, lineHeight: 50 }}>👆</Text>
      </Animated.View>
    </View>
  );
}
