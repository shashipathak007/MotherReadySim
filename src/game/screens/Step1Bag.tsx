import React, { useRef, useState, useMemo, useEffect } from 'react';
import { View, Dimensions, ImageBackground } from 'react-native';
import { useGame } from '../context/GameContext';
import { BAG_ITEMS, DO_NOT_PACK_ITEMS } from '../../data/bagItems';
import { HospitalBag } from '../components/GameSVGs';
import { DraggableItem, DraggableItemRef } from '../components/DraggableItem';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');

const WRONG_DISTRIBUTION: Record<string, number[]> = {
  Clothing: [4, 8],
  Hygiene: [1, 2, 3],
  Comfort: [], 
  Baby: [5, 6, 7]
};

export default function Step1Bag({ onNextStep }: { onNextStep: () => void }) {
  const { packedBagItems, packItem, showFeedback, setCurrentWave } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';
  
  const [currentWaveIdx, setCurrentWaveIdx] = useState(0);
  const [containerLayout, setContainerLayout] = useState({ width: width, height: height });
  const waveCategories = ['Clothing', 'Hygiene', 'Comfort', 'Baby'];
  const currentWave = waveCategories[currentWaveIdx];

  const checkCompletion = (newPackCount: number) => {
    if (newPackCount >= BAG_ITEMS.length) {
      setTimeout(() => onNextStep(), 1500);
    }
  };

  useEffect(() => {
    if (currentWave) setCurrentWave(currentWave);
  }, [currentWave, setCurrentWave]);

  useEffect(() => {
    let nextWaveIdx = 0;
    for (let i = 0; i < waveCategories.length; i++) {
        const cat = waveCategories[i];
        const correctItemsInWave = BAG_ITEMS.filter(item => item.category === cat);
        const packedInWave = correctItemsInWave.filter(item => packedBagItems.includes(item.id));
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
    const correctItems = BAG_ITEMS.filter(i => i.category === currentWave).map(item => ({ ...item, isWrong: false, why: item.why }));
    const wrongIds = WRONG_DISTRIBUTION[currentWave as keyof typeof WRONG_DISTRIBUTION];
    const wrongItems = DO_NOT_PACK_ITEMS.filter(i => wrongIds.includes(i.id)).map(item => ({ ...item, isWrong: true, why: item.whyNot }));
    const combined = [...correctItems, ...wrongItems];
    return combined.sort((a, b) => a.name.localeCompare(b.name)).map((item) => ({ 
      ...item, 
      initialPos: { 
        x: containerLayout.width / 2 - 35 + (Math.random() - 0.5) * (containerLayout.width * 0.8), 
        y: containerLayout.height * 0.25 + (Math.random() * (containerLayout.height * 0.25)) 
      } 
    }));
  }, [currentWave, packedBagItems.length === 0]); 

  const dropZone = { 
    x: containerLayout.width / 2 - 110, 
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
    const inZone = cx > dropZone.x && cx < dropZone.x + dropZone.w && cy > dropZone.y && cy < dropZone.y + dropZone.h;
    const ref = itemRefs.current[isWrong ? -id : id];

    if (inZone) {
      if (!isWrong) {
        packItem(id);
        ref?.animatePack(dropZone.x + dropZone.w/2 - 30, dropZone.y + dropZone.h/2 - 30);
        const itemName = isNe && 'nameNe' in item ? (item as any).nameNe : item.name;
        const itemWhy = isNe && 'whyNe' in item ? (item as any).whyNe : item.why;
        showFeedback(isNe ? `राम्रो छनोट: ${itemName}` : `Good choice: ${itemName}`, itemWhy, 'success');
      } else {
        ref?.shakeAndSnapBack();
        const itemName = isNe && 'nameNe' in item ? (item as any).nameNe : item.name;
        const itemWhy = isNe && 'whyNotNe' in item ? (item as any).whyNotNe : item.why;
        showFeedback(isNe ? `चाहिँदैन: ${itemName}` : `Not needed: ${itemName}`, itemWhy, 'error');
      }
    } else {
      ref?.snapBack();
    }
  };

  const handleLongPress = (id: number, isWrong: boolean) => {
    const item = activeWaveItems.find(i => i.id === id && i.isWrong === isWrong);
    if (item) {
      const itemName = isNe && 'nameNe' in item && (item as any).nameNe ? (item as any).nameNe : item.name;
      let itemWhy: string;
      if (item.isWrong) {
        itemWhy = isNe && 'whyNotNe' in item && (item as any).whyNotNe ? (item as any).whyNotNe : item.why;
      } else {
        itemWhy = isNe && 'whyNe' in item && (item as any).whyNe ? (item as any).whyNe : item.why;
      }
      showFeedback(itemName, itemWhy, 'info');
    }
  };

  const bagFilledPhase = Math.floor((packedBagItems.length / BAG_ITEMS.length) * 4);

  return (
    <View 
      className="flex-1"
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        setContainerLayout({ width, height });
      }}
    >
      {/* Background with subtle blur */}
      <View className="absolute inset-0">
        <ImageBackground 
          source={require('../../../assets/images/bedroom_bg.png')} 
          className="flex-1"
          resizeMode="cover"
          blurRadius={3}
        >
          <LinearGradient 
            colors={['rgba(255,249,251,0.25)', 'rgba(255,245,248,0.45)', 'rgba(255,249,251,0.55)']} 
            className="absolute inset-0" 
          />
        </ImageBackground>
      </View>

      <View 
        className="absolute justify-center items-center"
        style={{ left: dropZone.x, top: dropZone.y, width: dropZone.w, height: dropZone.h }}
      >
        <HospitalBag filled={bagFilledPhase} isZipped={packedBagItems.length >= BAG_ITEMS.length} glow />
      </View>

      {activeWaveItems.map((item) => {
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
            color={item.isWrong ? '#F5F0F0' : '#FFFBFD'}
          />
        );
      })}
    </View>
  );
}
