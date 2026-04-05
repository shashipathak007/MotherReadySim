import React, { useRef, useState, useMemo } from 'react';
import { View, Dimensions, Text, ImageBackground, ScrollView, Image } from 'react-native';
import Svg, { Rect, Circle, Path, Defs, LinearGradient as SvgLinearGradient, Stop, G } from 'react-native-svg';
import { useGame } from '../context/GameContext';
import { CONTACTS } from '../../data/contacts';
import { DraggableItem, DraggableItemRef } from '../components/DraggableItem';
import { StepCompletionModal } from '../components/StepCompletionModal';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import { useGameAudio } from '../hooks/useGameAudio';

const { width, height } = Dimensions.get('window');

const WRONG_CONTACTS = [
  { id: 91, name: "Random shopkeeper", nameNe: "कुनै पसलको व्यापारी", whyNot: "You won't need this during labour", whyNotNe: "व्यथा लाग्दा यो सम्पर्क चाहिँदैन" },
  { id: 92, name: "Travel agency", nameNe: "यात्रा एजेन्सी", whyNot: "Focus on medical contacts only", whyNotNe: "स्वास्थ्य सम्बन्धी सम्पर्कमा मात्र ध्यान दिनुहोस्" },
];

const WRONG_DISTRIBUTION: Record<string, number[]> = {
  CRITICAL: [91],
  IMPORTANT: [92],
  INFO: [],
};

export default function Step3Contacts({ onNextStep }: { onNextStep: () => void }) {
  const { savedContacts, saveContact, showFeedback, setCurrentWave, resetCurrentStep } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';
  const { playCorrect, playIncorrect } = useGameAudio();

  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [currentWaveIdx, setCurrentWaveIdx] = useState(0);
  const [containerLayout, setContainerLayout] = useState({ width: width, height: height });
  const waveCategories = ['CRITICAL', 'IMPORTANT', 'INFO'];
  const currentWave = waveCategories[currentWaveIdx];

  const hasCompletedInitially = useRef(savedContacts.length >= CONTACTS.length);
  const [hasShownCompletionFeedback, setHasShownCompletionFeedback] = useState(false);

  const checkCompletion = (newCount: number) => {
    if (newCount >= CONTACTS.length) {
      if (hasCompletedInitially.current) {
        if (!hasShownCompletionFeedback) {
          setHasShownCompletionFeedback(true);
          setShowCompletionModal(true);
        }
      } else {
        setTimeout(() => onNextStep(), 1500);
      }
    }
  };

  React.useEffect(() => {
    if (currentWave) setCurrentWave(currentWave);
  }, [currentWave, setCurrentWave]);

  React.useEffect(() => {
    let nextWaveIdx = 0;
    for (let i = 0; i < waveCategories.length; i++) {
        const cat = waveCategories[i];
        const correctItemsInWave = CONTACTS.filter(item => item.urgency === cat);
        const collectedInWave = correctItemsInWave.filter(item => savedContacts.includes(item.id));
        if (collectedInWave.length >= correctItemsInWave.length) {
            nextWaveIdx = i + 1;
        } else {
            break; 
        }
    }
    
    if (nextWaveIdx >= waveCategories.length) {
       checkCompletion(savedContacts.length);
    } else {
       setCurrentWaveIdx(nextWaveIdx);
    }
  }, [savedContacts]);

  const activeWaveContacts = useMemo(() => {
    if (!currentWave) return [];
    const correctItems = CONTACTS.filter(item => item.urgency === currentWave).map(item => ({ 
      id: item.id, 
      name: item.name, 
      nameNe: item.nameNe, 
      isWrong: false, 
      why: item.fullDetail, 
      whyNe: item.fullDetailNe, 
      phone: item.phone || '' 
    }));
    const wrongIds = WRONG_DISTRIBUTION[currentWave as keyof typeof WRONG_DISTRIBUTION] || [];
    const wrongItems = WRONG_CONTACTS.filter(i => wrongIds.includes(i.id)).map(item => ({ 
      id: item.id, 
      name: item.name, 
      nameNe: item.nameNe || '', 
      isWrong: true, 
      why: item.whyNot, 
      whyNe: '', 
      whyNotNe: item.whyNotNe || '',
      phone: '' 
    }));
    
    const combined = [...correctItems, ...wrongItems];
    const itemCount = combined.length;
    const itemSize = 85; 
    
    return combined.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => {
      const cols = Math.min(itemCount, 3);
      const row = Math.floor(index / cols);
      const col = index % cols;
      
      const xPos = (containerLayout.width * 0.35) - ((cols * itemSize) / 2) + (col * itemSize) + (itemSize / 2) - 40;
      const yPos = (containerLayout.height * 0.30) + (row * (itemSize + 30));

      return { 
        ...item, 
        initialPos: { 
          x: xPos + (Math.random() - 0.5) * 12, 
          y: yPos + (Math.random() - 0.5) * 12
        } 
      };
    });
  }, [currentWave, savedContacts, containerLayout.width]);

  const dropZone = { 
    x: containerLayout.width * 0.35 - 90, 
    y: containerLayout.height - 380, 
    w: 180, 
    h: 360 
  };
  const itemRefs = useRef<Record<number, DraggableItemRef>>({});

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
        ref?.animatePack(dropZone.x + dropZone.w/2 - 30, dropZone.y + dropZone.h/2 - 30);
        playCorrect();
        const cName = isNe && item.nameNe ? item.nameNe : item.name;
        const cWhy = isNe && item.whyNe ? item.whyNe : item.why;
        showFeedback(cName, cWhy, 'success');
      } else {
        ref?.shakeAndSnapBack();
        playIncorrect();
        const wrongName = isNe && item.nameNe ? item.nameNe : item.name;
        const wrongWhy = isNe && 'whyNotNe' in item && (item as any).whyNotNe ? (item as any).whyNotNe : item.why;
        showFeedback(wrongName, wrongWhy, 'error');
      }
    } else {
      ref?.snapBack();
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
    }
  };

  const getContactEmoji = (id: number) => {
    switch(id) {
       case 1: return '👩‍⚕️';
       case 2: return '🚑';
       case 3: return '🏥';
       case 4: return '🤝';
       case 5: return '👫';
       case 6: return '🏠';
       case 7: return '🩸';
       case 8: return '📞';
       default: return '📱';
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
        className="absolute" 
        style={{ left: dropZone.x, top: dropZone.y, width: dropZone.w, height: dropZone.h }}
      >
        <Image 
          source={require('../../../assets/images/phone_frame.png')}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
          resizeMode="contain"
        />
        
        {/* Screen Content Area — aligned strictly within the mockup bezel */}
        <View style={{ 
          position: 'absolute', 
          top: '12.5%', 
          bottom: '12.5%', 
          left: '11%', 
          right: '11%', 
          overflow: 'hidden', 
          backgroundColor: '#0D0D1A',
          paddingTop: 8, 
          paddingHorizontal: 6,
          borderRadius: 2
        }}>
          <Text className="text-[11px] font-[800] text-white text-center mb-[4px] opacity-90">{isNe ? 'मेरो सम्पर्क' : 'My Care Team'}</Text>
          <ScrollView 
            className="flex-1" 
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
          >
            {savedContacts.map(id => {
              const contact = CONTACTS.find(c => c.id === id);
              return (
                <View key={id} className="flex-row items-center py-[3px] px-[5px] bg-white/10 mb-[2px] rounded-[5px] border border-white/10 gap-1">
                  <Text className="text-[10px]">{getContactEmoji(id)}</Text>
                  <Text className="text-[8px] text-white font-[700] flex-1">{isNe && contact?.nameNe ? contact.nameNe : contact?.name}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>

      {activeWaveContacts.map((item) => {
        const uniqueId = item.isWrong ? -item.id : item.id;
        const packed = !item.isWrong && savedContacts.includes(item.id);
        return (
          <DraggableItem
            key={`contact-${currentWave}-${uniqueId}`}
            ref={(el) => { if (el) itemRefs.current[uniqueId] = el; }}
            id={item.id}
            name={isNe && item.nameNe ? item.nameNe : item.name}
            emoji={getContactEmoji(item.id)}
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
        onReset={() => {
          resetCurrentStep();
          setShowCompletionModal(false);
        }}
      />
    </View>
  );
}
