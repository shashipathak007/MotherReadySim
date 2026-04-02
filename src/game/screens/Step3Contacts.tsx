import React, { useRef, useState, useMemo } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, Linking, ImageBackground, ScrollView } from 'react-native';
import Svg, { Rect, Circle, Path, Defs, LinearGradient as SvgLinearGradient, Stop, G } from 'react-native-svg';
import { useGame } from '../context/GameContext';
import { CONTACTS } from '../../data/contacts';
import { DraggableItem, DraggableItemRef } from '../components/DraggableItem';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');

const WRONG_CONTACTS = [
  { id: 91, name: "Random shopkeeper", whyNot: "You won't need this during labour" },
  { id: 92, name: "Travel agency", whyNot: "Focus on medical contacts only" },
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
    const correctItems = CONTACTS.filter(item => item.urgency === currentWave).map(item => ({ id: item.id, name: item.name, nameNe: item.nameNe, isWrong: false, why: item.fullDetail, whyNe: item.fullDetailNe, phone: item.phone || '' }));
    const wrongIds = WRONG_DISTRIBUTION[currentWave as keyof typeof WRONG_DISTRIBUTION] || [];
    const wrongItems = WRONG_CONTACTS.filter(i => wrongIds.includes(i.id)).map(item => ({ id: item.id, name: item.name, isWrong: true, why: item.whyNot, phone: '' }));
    
    const combined = [...correctItems, ...wrongItems];
    return combined.sort((a, b) => a.name.localeCompare(b.name)).map((item) => ({ 
      ...item, 
      initialPos: { 
        x: containerLayout.width / 2 - 40 + (Math.random() - 0.5) * (containerLayout.width * 0.8), 
        y: containerLayout.height * 0.25 + (Math.random() * (containerLayout.height * 0.25)) 
      } 
    }));
  }, [currentWave, savedContacts.length === 0]);

  const dropZone = { 
    x: containerLayout.width / 2 - 80, 
    y: containerLayout.height - 290, // Adjusted for smaller phones
    w: 160, 
    h: 260 
  };
  const itemRefs = useRef<Record<number, DraggableItemRef>>({});

  const checkCompletion = (newCount: number) => {
    if (newCount >= CONTACTS.length) {
      setTimeout(() => onNextStep(), 1500);
    }
  };

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
        showFeedback(isNe ? `चाहिँदैन: ${item.name}` : `Not needed: ${item.name}`, item.why, 'error');
      }
    } else {
      ref?.snapBack();
    }
  };

  const handleLongPress = (id: number, isWrong: boolean) => {
    const item = activeWaveContacts.find(i => i.id === id && i.isWrong === isWrong);
    if (item) {
      showFeedback(item.name, item.why, 'info');
    }
  };

  const getContactEmoji = (id: number) => {
    switch(id) {
       case 1: return '🚑';
       case 2: return '🤰';
       case 3: return '👨‍⚕️';
       case 4: return '🛻';
       default: return '📞';
    }
  };

  return (
    <View 
      style={styles.container}
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        setContainerLayout({ width, height });
      }}
    >
      <ImageBackground 
        source={require('../../../assets/images/phone_bg.png')} 
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      >
        <LinearGradient colors={['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.7)']} style={StyleSheet.absoluteFill} />
      </ImageBackground>

      <View style={[styles.phoneDropZone, { left: dropZone.x, top: dropZone.y, width: dropZone.w, height: dropZone.h }]}>
        {/* Phone SVG — fully transparent, no white box */}
        <Svg width={dropZone.w} height={dropZone.h} viewBox={`0 0 ${dropZone.w} ${dropZone.h}`} style={{ position: 'absolute', top: 0, left: 0 }}>
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
              <Stop offset="0%" stopColor="#C2185B" />
              <Stop offset="100%" stopColor="#880E4F" />
            </SvgLinearGradient>
          </Defs>
          {/* Phone body */}
          <Rect x="6" y="2" width={dropZone.w - 12} height={dropZone.h - 4} rx="22" fill="url(#phoneBg)" />
          {/* Screen */}
          <Rect x="12" y="20" width={dropZone.w - 24} height={dropZone.h - 42} rx="14" fill="url(#screen)" />
          {/* Notch */}
          <Rect x={dropZone.w / 2 - 20} y="2" width="40" height="14" rx="7" fill="#0D0D1A" />
          {/* Home indicator */}
          <Rect x={dropZone.w / 2 - 22} y={dropZone.h - 14} width="44" height="5" rx="2.5" fill="#333355" />
          {/* Header bar */}
          <Rect x="12" y="20" width={dropZone.w - 24} height="38" rx="0" fill="url(#headerBar)" />
          <Rect x="12" y="20" width={dropZone.w - 24} height="14" rx="14" fill="url(#headerBar)" />
          {/* Phone icon in header */}
          <Circle cx="32" cy="39" r="10" fill="rgba(255,255,255,0.15)" />
          <Path d="M27,35 C27,33 32,33 35,35 L35,40 C33,41 31,41 29,40 L27,35 Z" fill="#FFF" opacity="0.8" />
          {/* Contact list rows — placeholders */}
          {[0,1,2,3,4].map(i => (
            <G key={i} transform={`translate(12, ${62 + i * 34})`}>
              <Rect width={dropZone.w - 24} height="28" rx="6" fill={i % 2 === 0 ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)'} />
              <Circle cx="18" cy="14" r="10" fill="rgba(194,24,91,0.5)" />
              <Rect x="34" y="8" width={dropZone.w - 80} height="5" rx="2.5" fill="rgba(255,255,255,0.25)" />
              <Rect x="34" y="17" width={(dropZone.w - 80) * 0.6} height="3" rx="1.5" fill="rgba(255,255,255,0.12)" />
            </G>
          ))}
        </Svg>
        {/* Saved contacts overlay */}
        <View style={styles.phoneScreen}>
          <Text style={styles.phoneHeader}>{isNe ? 'मेरो टोली' : 'My Care Team'}</Text>
          <ScrollView 
            style={styles.contactsScroll} 
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
          >
            {savedContacts.map(id => {
              const contact = CONTACTS.find(c => c.id === id);
              return (
                <View key={id} style={styles.savedContactRow}>
                  <Text style={styles.savedContactEmoji}>{getContactEmoji(id)}</Text>
                  <Text style={styles.savedContactText}>{isNe && contact?.nameNe ? contact.nameNe : contact?.name}</Text>
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
            color={item.isWrong ? '#F0F0F0' : '#FFF'}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9FB' },
  phoneDropZone: { 
    position: 'absolute',
  },
  phoneScreen: {
    position: 'absolute',
    top: 60,
    left: 18,
    right: 18,
    bottom: 20,
    paddingTop: 4,
    paddingHorizontal: 4,
    overflow: 'hidden',
  },
  contactsScroll: {
    flex: 1,
  },
  phoneHeader: {
    fontSize: 10,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 3,
    opacity: 0.9,
  },
  savedContactRow: { 
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3, 
    paddingHorizontal: 5,
    backgroundColor: 'rgba(255,255,255,0.12)',
    marginBottom: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    gap: 4,
  },
  savedContactEmoji: {
    fontSize: 10,
  },
  savedContactText: { 
    fontSize: 8, 
    color: '#FFFFFF', 
    fontWeight: '700',
    flex: 1,
  },
});
