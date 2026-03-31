import React, { useRef, useState, useMemo } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import { useGame } from '../context/GameContext';
import { CONTACTS } from '../../data/contacts';
import { DraggableItem, DraggableItemRef } from '../components/DraggableItem';
import { LinearGradient } from 'expo-linear-gradient';

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
    const correctItems = CONTACTS.filter(item => item.urgency === currentWave).map(item => ({ id: item.id, name: item.name, isWrong: false, why: item.fullDetail, phone: item.phone || '' }));
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
        showFeedback(`Saved: ${item.name}`, item.why, 'success');
      } else {
        ref?.shakeAndSnapBack();
        showFeedback(`Not needed: ${item.name}`, item.why, 'error');
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
        <View style={styles.phoneNotch} />
        <View style={styles.phoneScreen}>
          <Text style={styles.phoneHeader}>Contacts</Text>
          {savedContacts.map(id => {
            const contact = CONTACTS.find(c => c.id === id);
            return (
              <View key={id} style={styles.savedContactRow}>
                <Text style={styles.savedContactText}>{contact?.name}</Text>
              </View>
            );
          })}
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
            name={item.name}
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
    backgroundColor: '#1A1A1A', 
    borderRadius: 30, 
    padding: 8, 
    borderWidth: 2,
    borderColor: '#333',
    shadowColor: '#000', 
    shadowOpacity: 0.4, 
    shadowRadius: 12, 
    elevation: 15 
  },
  phoneScreen: { 
    flex: 1, 
    backgroundColor: '#FAF9F6', 
    borderRadius: 22, 
    width: '100%', 
    height: '100%', 
    padding: 12, 
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#000',
  },
  phoneNotch: {
    position: 'absolute',
    top: 0,
    left: '25%',
    width: '50%',
    height: 18,
    backgroundColor: '#1A1A1A',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    zIndex: 100,
  },
  phoneHeader: { 
    fontSize: 20, 
    fontWeight: '900', 
    marginTop: 15,
    marginBottom: 15, 
    alignSelf: 'center', 
    color: '#B04C8A',
    letterSpacing: 0.5
  },
  savedContactRow: { 
    paddingVertical: 12, 
    paddingHorizontal: 10,
    borderBottomWidth: 1, 
    borderBottomColor: '#F0F0F0',
    backgroundColor: '#FFF',
    marginBottom: 4,
    borderRadius: 8,
  },
  savedContactText: { 
    fontSize: 11, 
    color: '#333', 
    fontWeight: '800' 
  },
});
