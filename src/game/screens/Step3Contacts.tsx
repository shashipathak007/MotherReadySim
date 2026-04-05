import React, { useRef, useState, useMemo } from 'react';
import { View, Dimensions, Text, ImageBackground, ScrollView } from 'react-native';
import Svg, { Rect, Circle, Path, Defs, LinearGradient as SvgLinearGradient, Stop, G } from 'react-native-svg';
import { useGame } from '../context/GameContext';
import { CONTACTS } from '../../data/contacts';
import { DraggableItem, DraggableItemRef } from '../components/DraggableItem';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

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
  const { savedContacts, saveContact, showFeedback, setCurrentWave } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  const [currentWaveIdx, setCurrentWaveIdx] = useState(0);
  const [containerLayout, setContainerLayout] = useState({ width: width, height: height });
  const waveCategories = ['CRITICAL', 'IMPORTANT', 'INFO'];
  const currentWave = waveCategories[currentWaveIdx];

  const checkCompletion = (newCount: number) => {
    if (newCount >= CONTACTS.length) {
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
    return combined.sort((a, b) => a.name.localeCompare(b.name)).map((item) => ({ 
      ...item, 
      initialPos: { 
        x: containerLayout.width / 2 - 40 + (Math.random() - 0.5) * (containerLayout.width * 0.8), 
        y: containerLayout.height * 0.25 + (Math.random() * (containerLayout.height * 0.25)) 
      } 
    }));
  }, [currentWave, savedContacts, containerLayout]);

  const dropZone = { 
    x: containerLayout.width / 2 - 80, 
    y: containerLayout.height - 290, 
    w: 160, 
    h: 260 
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
        const cName = isNe && item.nameNe ? item.nameNe : item.name;
        const cWhy = isNe && item.whyNe ? item.whyNe : item.why;
        showFeedback(isNe ? `सुरक्षित: ${cName}` : `Saved: ${cName}`, cWhy, 'success');
      } else {
        ref?.shakeAndSnapBack();
        const wrongName = isNe && item.nameNe ? item.nameNe : item.name;
        const wrongWhy = isNe && 'whyNotNe' in item && (item as any).whyNotNe ? (item as any).whyNotNe : item.why;
        showFeedback(isNe ? `चाहिँदैन: ${wrongName}` : `Not needed: ${item.name}`, wrongWhy, 'error');
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
      {/* Background with subtle blur */}
      <View className="absolute inset-0">
        <ImageBackground 
          source={require('../../../assets/images/phone_bg.png')} 
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
        className="absolute" 
        style={{ left: dropZone.x, top: dropZone.y, width: dropZone.w, height: dropZone.h }}
      >
        <Svg width={dropZone.w} height={dropZone.h} viewBox={`0 0 ${dropZone.w} ${dropZone.h}`} className="absolute top-0 left-0">
          <Defs>
            <SvgLinearGradient id="phoneBg" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor="#1C1C2E" />
              <Stop offset="100%" stopColor="#0D0D1A" />
            </SvgLinearGradient>
            <SvgLinearGradient id="screen" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor="#1E3A5F" />
              <Stop offset="100%" stopColor="#0F2040" />
            </SvgLinearGradient>
            <SvgLinearGradient id="headerBar" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor="#C06898" />
              <Stop offset="100%" stopColor="#9B5983" />
            </SvgLinearGradient>
          </Defs>
          <Rect x="6" y="2" width={dropZone.w - 12} height={dropZone.h - 4} rx="22" fill="url(#phoneBg)" />
          <Rect x="12" y="20" width={dropZone.w - 24} height={dropZone.h - 42} rx="14" fill="url(#screen)" />
          <Rect x={dropZone.w / 2 - 20} y="2" width="40" height="14" rx="7" fill="#0D0D1A" />
          <Rect x={dropZone.w / 2 - 22} y={dropZone.h - 14} width="44" height="5" rx="2.5" fill="#333355" />
          <Rect x="12" y="20" width={dropZone.w - 24} height="38" rx="0" fill="url(#headerBar)" />
          <Rect x="12" y="20" width={dropZone.w - 24} height="14" rx="14" fill="url(#headerBar)" />
          <Circle cx="32" cy="39" r="10" fill="rgba(255,255,255,0.15)" />
          <Path d="M27,35 C27,33 32,33 35,35 L35,40 C33,41 31,41 29,40 L27,35 Z" fill="#FFF" opacity="0.8" />
          {[0,1,2,3,4].map(i => (
            <G key={i} transform={`translate(12, ${62 + i * 34})`}>
              <Rect width={dropZone.w - 24} height="28" rx="6" fill={i % 2 === 0 ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)'} />
              <Circle cx="18" cy="14" r="10" fill="rgba(192,104,152,0.5)" />
              <Rect x="34" y="8" width={dropZone.w - 80} height="5" rx="2.5" fill="rgba(255,255,255,0.25)" />
              <Rect x="34" y="17" width={(dropZone.w - 80) * 0.6} height="3" rx="1.5" fill="rgba(255,255,255,0.12)" />
            </G>
          ))}
        </Svg>
        
        <View className="absolute top-[60px] left-[18px] right-[18px] bottom-[20px] pt-1 px-1 overflow-hidden">
          <Text className="text-[10px] font-[800] text-white text-center mb-[3px] opacity-90">{isNe ? 'मेरो टोली' : 'My Care Team'}</Text>
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
    </View>
  );
}
