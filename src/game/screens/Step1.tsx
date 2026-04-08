/// <reference types="nativewind/types" />
import React, { useRef, useState, useMemo, useEffect } from 'react';
import { View, Dimensions, Image } from 'react-native';
import { useGame } from '../context/GameContext';
import { BAG_ITEMS, DO_NOT_PACK_ITEMS } from '../../data/bagItems';
import { DraggableItem, DraggableItemRef } from '../components/DraggableItem';
import { StepCompletionModal } from '../components/StepCompletionModal';
import { useTranslation } from 'react-i18next';
import { useGameAudio } from '../hooks/useGameAudio';

const { width, height } = Dimensions.get('window');

const waveCategories = [
  'Clothing',
  'Hygiene',
  'Comfort',
  'Baby',
  'LegalDocs',
  'HealthDocs',
  'ClinicalDocs'
];


const waveLabels: Record<string, string> = {
  Clothing: 'Clothing',
  Hygiene: 'Hygiene',
  Comfort: 'Comfort',
  Baby: 'Baby',
  LegalDocs: 'Legal Documents',
  HealthDocs: 'Health Documents',
  ClinicalDocs: 'Clinical Documents'
};

const WRONG_DISTRIBUTION: Record<string, number[]> = {
  Clothing: [4, 8],
  Hygiene: [1, 2, 3],
  Comfort: [],
  Baby: [5, 6, 7],
  LegalDocs: [91],
  HealthDocs: [92],
  ClinicalDocs: [93]
};

export default function Step1({ onNextStep }: { onNextStep: () => void }) {
  const { packedBagItems, packItem, showFeedback, setCurrentWave, resetCurrentStep } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';
  const { playCorrect, playIncorrect } = useGameAudio();

  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [currentWaveIdx, setCurrentWaveIdx] = useState(0);
  const [containerLayout, setContainerLayout] = useState({ width, height });

  const currentWave = waveCategories[currentWaveIdx];

  const hasCompletedInitially = useRef(packedBagItems.length >= BAG_ITEMS.length);
  const isFirstCompletion = useRef(false);

  const checkCompletion = (newPackCount: number) => {
    if (newPackCount >= BAG_ITEMS.length) {
      isFirstCompletion.current = !hasCompletedInitially.current;
      setShowCompletionModal(true);
    }
  };


  useEffect(() => {
    if (currentWave) setCurrentWave(currentWave);
  }, [currentWave]);

  
  useEffect(() => {
    let nextWaveIdx = 0;

    for (let i = 0; i < waveCategories.length; i++) {
      const cat = waveCategories[i];

      const correctItemsInWave = BAG_ITEMS.filter(item => item.category === cat);


      if (correctItemsInWave.length === 0) {
        nextWaveIdx = i + 1;
        continue;
      }

      const packedInWave = correctItemsInWave.filter(item =>
        packedBagItems.includes(item.id)
      );

      if (packedInWave.length >= correctItemsInWave.length) {
        nextWaveIdx = i + 1;
      } else {
        break;
      }
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
      .map(item => ({ ...item, isWrong: false, why: item.why }));

    const wrongIds = WRONG_DISTRIBUTION[currentWave] || [];

    const wrongItems = DO_NOT_PACK_ITEMS
      .filter(i => wrongIds.includes(i.id))
      .map(item => ({ ...item, isWrong: true, why: item.whyNot }));

    const combined = [...correctItems, ...wrongItems];

    const itemSize = 75;

    return combined.map((item, index) => {
      const cols = Math.min(combined.length, 3);
      const row = Math.floor(index / cols);
      const col = index % cols;

      const xPos =
        containerLayout.width * 0.35 -
        (cols * itemSize) / 2 +
        col * itemSize;

      const yPos =
        containerLayout.height * 0.35 +
        row * (itemSize + 30);

      return {
        ...item,
        initialPos: {
          x: xPos + (Math.random() - 0.5) * 10,
          y: yPos + (Math.random() - 0.5) * 10
        }
      };
    });
  }, [currentWave, containerLayout.width]);

  const dropZone = {
    x: containerLayout.width * 0.35 - 110,
    y: containerLayout.height - 240,
    w: 220,
    h: 180
  };

  const itemRefs = useRef<Record<number, DraggableItemRef>>({});


  const handleDrop = (id: number, x: number, y: number, isWrong: boolean) => {
    const item = activeWaveItems.find(i => i.id === id && i.isWrong === isWrong);
    if (!item) return;

    const cx = x + 30;
    const cy = y + 30;

    const inZone =
      cx > dropZone.x &&
      cx < dropZone.x + dropZone.w &&
      cy > dropZone.y &&
      cy < dropZone.y + dropZone.h;

    const ref = itemRefs.current[isWrong ? -id : id];

    if (inZone) {
      if (!isWrong) {
        packItem(id);
        ref?.animatePack(
          dropZone.x + dropZone.w / 2 - 30,
          dropZone.y + dropZone.h / 2 - 30
        );

        playCorrect();

        const itemName = isNe && 'nameNe' in item ? item.nameNe : item.name;
        const itemWhy = isNe && 'whyNe' in item ? item.whyNe : item.why;

        showFeedback(
          isNe ? `शाबास! ${itemName}` : `Great job! ${itemName}`,
          itemWhy,
          'success'
        );
      } else {
        ref?.shakeAndSnapBack();
        playIncorrect();

        const itemName = isNe && 'nameNe' in item ? item.nameNe : item.name;
        const itemWhy = isNe && 'whyNotNe' in item ? item.whyNotNe : item.why;

        showFeedback(
          isNe ? `ओहो! ${itemName} चाहिँदैन` : `Oops! ${itemName} isn't needed`,
          itemWhy,
          'error'
        );
      }
    } else {
      ref?.snapBack();
    }
  };


  const handleLongPress = (id: number, isWrong: boolean) => {
    const item = activeWaveItems.find(i => i.id === id && i.isWrong === isWrong);
    if (!item) return;

    const itemName =
      isNe && 'nameNe' in item && item.nameNe ? item.nameNe : item.name;

    const itemWhy = item.isWrong
      ? (isNe && 'whyNotNe' in item && (item as any).whyNotNe) || item.why
      : (isNe && 'whyNe' in item && (item as any).whyNe) || item.why;

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
      {/* Bag */}
      <View
        className="absolute justify-center items-center"
        style={{
          left: dropZone.x - 15,
          top: dropZone.y - 30,
          width: dropZone.w + 30,
          height: dropZone.h + 60
        }}
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

      {/* Items */}
      {activeWaveItems.map((item) => {
        const uniqueId = item.isWrong ? -item.id : item.id;
        const packed = !item.isWrong && packedBagItems.includes(item.id);

        return (
          <DraggableItem
            key={`bag-${currentWave}-${uniqueId}`}
            ref={(el) => {
              if (el) itemRefs.current[uniqueId] = el;
            }}
            id={item.id}
            name={isNe && 'nameNe' in item ? item.nameNe : item.name}
            emoji={item.emoji || '📦'}
            isWrong={item.isWrong}
            initialPos={item.initialPos}
            onDrop={handleDrop}
            onLongPress={handleLongPress}
            packed={packed}
            color={item.isWrong ? '#F5F0F0' : '#FFFBFD'}
          />
        );
      })}

      {/* Completion */}
      <StepCompletionModal
        visible={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        onNext={
          isFirstCompletion.current
            ? () => {
                setShowCompletionModal(false);
                onNextStep();
              }
            : undefined
        }
        onReset={() => {
          resetCurrentStep();
          setShowCompletionModal(false);
        }}
      />
    </View>
  );
}