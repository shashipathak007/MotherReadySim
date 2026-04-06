/// <reference types="nativewind/types" />
import React, { useRef, useState, useMemo } from 'react';
import { View, Dimensions, ImageBackground, Image } from 'react-native';
import { useGame } from '../context/GameContext';
import { DOCUMENTS } from '../../data/documents';
// Import removed for OpenFolder
import { DraggableItem, DraggableItemRef } from '../components/DraggableItem';
import { StepCompletionModal } from '../components/StepCompletionModal';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import { useGameAudio } from '../hooks/useGameAudio';

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
  const { collectedDocuments, collectDocument, showFeedback, setCurrentWave, resetCurrentStep } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';
  const { playCorrect, playIncorrect } = useGameAudio();
  
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const waveCategories = ['Identity', 'Aama Programme', 'Medical'];
  const [currentWaveIdx, setCurrentWaveIdx] = useState(0);
  const [containerLayout, setContainerLayout] = useState({ width: width, height: height });
  const currentWave = waveCategories[currentWaveIdx];

  const hasCompletedInitially = useRef(collectedDocuments.length >= DOCUMENTS.length);
  const isFirstCompletion = useRef(false);

  const checkCompletion = (newCount: number) => {
    if (newCount >= DOCUMENTS.length) {
      isFirstCompletion.current = !hasCompletedInitially.current;
      setShowCompletionModal(true);
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
    const itemCount = combined.length;
    const itemSize = 85; 
    
    return combined.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => {
      const cols = Math.min(itemCount, 3);
      const row = Math.floor(index / cols);
      const col = index % cols;
      
      const xPos = (containerLayout.width * 0.35) - ((cols * itemSize) / 2) + (col * itemSize) + (itemSize / 2) - 40;
      const yPos = (containerLayout.height * 0.35) + (row * (itemSize + 30));

      return { 
        ...item, 
        initialPos: { 
          x: xPos + (Math.random() - 0.5) * 12, 
          y: yPos + (Math.random() - 0.5) * 12
        } 
      };
    });
  }, [currentWave, collectedDocuments.length === 0, containerLayout.width]);

  const dropZone = { 
    x: containerLayout.width * 0.35 - 100, 
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
        playCorrect();
        const docName = isNe && 'nameNe' in item ? (item as any).nameNe : item.name;
        const docWhy = isNe && 'whyNeededNe' in item ? (item as any).whyNeededNe : item.why;
        showFeedback(isNe ? `सही! ${docName}` : `Good choice: ${docName}`, docWhy, 'success');
      } else {
        ref?.shakeAndSnapBack();
        playIncorrect();
        const wrongName = isNe && 'nameNe' in item && (item as any).nameNe ? (item as any).nameNe : item.name;
        const wrongWhy = isNe && 'whyNotNe' in item && (item as any).whyNotNe ? (item as any).whyNotNe : item.why;
        showFeedback(isNe ? `यो चाहिँदैन: ${wrongName}` : `Not needed: ${item.name}`, wrongWhy, 'error');
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
      <View 
        className="absolute justify-center items-center"
        style={{ left: dropZone.x - 20, top: dropZone.y - 20, width: dropZone.w + 40, height: dropZone.h + 40 }}
      >
        <Image
          source={
            collectedDocuments.length >= DOCUMENTS.length
              ? require('../../../assets/images/folder_full.png')
              : require('../../../assets/images/folder_empty.png')
          }
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
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
            isWrong={item.isWrong}
            initialPos={item.initialPos}
            onDrop={handleDrop}
            onLongPress={handleLongPress}
            packed={packed}
            color={item.isWrong ? '#F5F0F0' : '#FFFBFD'}
          />
        );
      })}

      <StepCompletionModal
        visible={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        onNext={isFirstCompletion.current ? () => { setShowCompletionModal(false); onNextStep(); } : undefined}
        onReset={() => {
          resetCurrentStep();
          setShowCompletionModal(false);
        }}
      />
    </View>
  );
}
