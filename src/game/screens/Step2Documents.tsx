import React, { useRef, useState, useMemo } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useGame } from '../context/GameContext';
import { DOCUMENTS } from '../../data/documents';
import { OpenFolder } from '../components/GameSVGs';
import { DraggableItem, DraggableItemRef } from '../components/DraggableItem';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');

const WRONG_DOCS = [
  { id: 91, name: 'Old expired ID', nameNe: 'म्याद सकिएको पुरानो परिचयपत्र', whyNot: 'This is expired — bring your current Nagarikta', whyNotNe: 'यो म्याद सकिएको छ — हालको नागरिकता लिएर जानुहोस्' },
  { id: 92, name: "Child's report card", nameNe: 'बच्चाको विद्यालयको रिपोर्ट कार्ड', whyNot: 'This is not needed at the hospital', whyNotNe: 'यो अस्पतालमा चाहिँदैन' },
  { id: 93, name: 'A random receipt', nameNe: 'कुनै पुरानो रसिद', whyNot: 'Leave household papers at home', whyNotNe: 'घरायसी कागजातहरू घरमै छाड्नुहोस्' },
];

const WRONG_DISTRIBUTION: Record<string, number[]> = {
  Identity: [91],
  'Aama Programme': [93],
  Medical: [92],
};

export default function Step2Documents({ onNextStep }: { onNextStep: () => void }) {
  const { collectedDocuments, collectDocument, showFeedback, setCurrentWave } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  const waveCategories = ['Identity', 'Aama Programme', 'Medical'];
  const [currentWaveIdx, setCurrentWaveIdx] = useState(0);
  const [containerLayout, setContainerLayout] = useState({ width: width, height: height });
  const currentWave = waveCategories[currentWaveIdx];

  const checkCompletion = (newCount: number) => {
    if (newCount >= DOCUMENTS.length) {
      setTimeout(() => onNextStep(), 1500);
    }
  };

  React.useEffect(() => {
    if (currentWave) setCurrentWave(currentWave);
  }, [currentWave, setCurrentWave]);

  React.useEffect(() => {
    let nextWaveIdx = 0;
    for (let i = 0; i < waveCategories.length; i++) {
        const cat = waveCategories[i];
        const correctItemsInWave = DOCUMENTS.filter(item => item.category === cat);
        const collectedInWave = correctItemsInWave.filter(item => collectedDocuments.includes(item.id));
        if (collectedInWave.length >= correctItemsInWave.length) {
            nextWaveIdx = i + 1;
        } else {
            break; 
        }
    }
    
    if (nextWaveIdx >= waveCategories.length) {
       checkCompletion(collectedDocuments.length);
    } else {
       setCurrentWaveIdx(nextWaveIdx);
    }
  }, [collectedDocuments]);

  const activeWaveDocs = useMemo(() => {
    if (!currentWave) return [];
    const correctItems = DOCUMENTS.filter(i => i.category === currentWave).map(item => ({ ...item, isWrong: false, why: item.whyNeeded }));
    const wrongIds = WRONG_DISTRIBUTION[currentWave as keyof typeof WRONG_DISTRIBUTION] || [];
    const wrongItems = WRONG_DOCS.filter(i => wrongIds.includes(i.id)).map(item => ({ ...item, isWrong: true, why: item.whyNot, category: 'Other' }));
    
    const combined = [...correctItems, ...wrongItems];
    return combined.sort((a, b) => a.name.localeCompare(b.name)).map((item) => ({ 
      ...item, 
      initialPos: { 
        x: containerLayout.width / 2 - 40 + (Math.random() - 0.5) * (containerLayout.width * 0.8), 
        y: containerLayout.height * 0.25 + (Math.random() * (containerLayout.height * 0.25)) 
      } 
    }));
  }, [currentWave, collectedDocuments.length === 0]);

  const dropZone = { 
    x: containerLayout.width / 2 - 100, 
    y: containerLayout.height - 240, 
    w: 200, 
    h: 200 
  };
  const itemRefs = useRef<Record<number, DraggableItemRef>>({});

  const handleDrop = (id: number, x: number, y: number, isWrong: boolean) => {
    const item = activeWaveDocs.find(i => i.id === id && i.isWrong === isWrong);
    if (!item) return;

    const cx = x + 30;
    const cy = y + 30;
    const inZone = cx > dropZone.x && cx < dropZone.x + dropZone.w && cy > dropZone.y && cy < dropZone.y + dropZone.h;
    const ref = itemRefs.current[isWrong ? -id : id];

    if (inZone) {
      if (!isWrong) {
        collectDocument(id);
        ref?.animatePack(dropZone.x + dropZone.w/2 - 30, dropZone.y + dropZone.h/2 - 30);
        const docName = isNe && 'nameNe' in item ? (item as any).nameNe : item.name;
        const docWhy = isNe && 'whyNeededNe' in item ? (item as any).whyNeededNe : item.why;
        showFeedback(isNe ? `राम्रो छनोट: ${docName}` : `Good choice: ${docName}`, docWhy, 'success');
      } else {
        ref?.shakeAndSnapBack();
        const wrongName = isNe && 'nameNe' in item && (item as any).nameNe ? (item as any).nameNe : item.name;
        const wrongWhy = isNe && 'whyNotNe' in item && (item as any).whyNotNe ? (item as any).whyNotNe : item.why;
        showFeedback(isNe ? `चाहिँदैन: ${wrongName}` : `Not needed: ${item.name}`, wrongWhy, 'error');
      }
    } else {
      ref?.snapBack();
    }
  };

  const handleLongPress = (id: number, isWrong: boolean) => {
    const item = activeWaveDocs.find(i => i.id === id && i.isWrong === isWrong);
    if (item) {
      const itemName = isNe && 'nameNe' in item && (item as any).nameNe ? (item as any).nameNe : item.name;
      let itemWhy: string;
      if (item.isWrong) {
        itemWhy = isNe && 'whyNotNe' in item && (item as any).whyNotNe ? (item as any).whyNotNe : item.why;
      } else {
        itemWhy = isNe && 'whyNeededNe' in item && (item as any).whyNeededNe ? (item as any).whyNeededNe : item.why;
      }
      showFeedback(itemName, itemWhy, 'info');
    }
  };

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
          source={require('../../../assets/images/desk_bg.png')} 
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
        <OpenFolder filled={Math.floor((collectedDocuments.length / DOCUMENTS.length) * 4)} glow />
      </View>

      {activeWaveDocs.map((item) => {
        const uniqueId = item.isWrong ? -item.id : item.id;
        const packed = !item.isWrong && collectedDocuments.includes(item.id);
        return (
          <DraggableItem
            key={`doc-${currentWave}-${uniqueId}`}
            ref={(el) => { if (el) itemRefs.current[uniqueId] = el; }}
            id={item.id}
            name={isNe && 'nameNe' in item && (item as any).nameNe ? (item as any).nameNe : item.name}
            emoji={'emoji' in item ? (item as any).emoji : '📄'}
            category={item.category}
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
