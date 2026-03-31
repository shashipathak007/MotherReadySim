import React, { useRef, useState, useMemo } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useGame } from '../context/GameContext';
import { DOCUMENTS } from '../../data/documents';
import { OpenFolder } from '../components/GameSVGs';
import { DraggableItem, DraggableItemRef } from '../components/DraggableItem';
import Animated, { FadeInUp, FadeOutDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const WRONG_DOCS = [
  { id: 91, name: 'Old expired ID', whyNot: 'This is expired — bring your current Nagarikta' },
  { id: 92, name: "Child's report card", whyNot: 'This is not needed at the hospital' },
  { id: 93, name: 'A random receipt', whyNot: 'Leave household papers at home' },
  { id: 94, name: 'Ration card', whyNot: 'Ration card is not accepted as identity at the maternity ward' },
];

const WRONG_DISTRIBUTION: Record<string, number[]> = {
  Identity: [91, 94],
  'Aama Programme': [93],
  Medical: [92],
};

export default function Step2Documents({ onNextStep }: { onNextStep: () => void }) {
  const { collectedDocuments, collectDocument, showFeedback, setCurrentWave } = useGame();

  const [wrongAttempts, setWrongAttempts] = useState(0);

  const waveCategories = ['Identity', 'Aama Programme', 'Medical'];
  const [currentWaveIdx, setCurrentWaveIdx] = useState(0);
  const [containerLayout, setContainerLayout] = useState({ width: width, height: height });
  const currentWave = waveCategories[currentWaveIdx];

  React.useEffect(() => {
    if (currentWave) setCurrentWave(currentWave);
  }, [currentWave, setCurrentWave]);

  // Derive the current wave from collected items
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

  const checkCompletion = (newCount: number) => {
    if (newCount >= DOCUMENTS.length) {
      setTimeout(() => onNextStep(), 1500);
    }
  };

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
        showFeedback(`Good choice: ${item.name}`, item.why, 'success');
      } else {
        ref?.shakeAndSnapBack();
        showFeedback(`Not needed: ${item.name}`, item.why, 'error');
      }
    } else {
      ref?.snapBack();
    }
  };

  const handleLongPress = (id: number, isWrong: boolean) => {
    const item = activeWaveDocs.find(i => i.id === id && i.isWrong === isWrong);
    if (item) {
      showFeedback(item.name, item.why, 'info');
    }
  };

  const getDocEmoji = (category: string) => {
    switch(category) {
      case 'Identity': return '🆔';
      case 'Aama Programme': return '📜';
      case 'Medical': return '🏥';
      case 'Payment': return '💳';
      default: return '📄';
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
        source={require('../../../assets/images/desk_bg.png')} 
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      >
        <LinearGradient colors={['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.7)']} style={StyleSheet.absoluteFill} />
      </ImageBackground>

      <View style={[styles.dropZone, { left: dropZone.x, top: dropZone.y, width: dropZone.w, height: dropZone.h }]}>
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
            name={item.name}
            emoji={getDocEmoji(item.category)}
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
  progressTop: { position: 'absolute', top: 20, left: 20, backgroundColor: 'rgba(255,255,255,0.9)', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 15, shadowColor: '#3498DB', shadowOpacity: 0.1, shadowRadius: 5, zIndex: 10 },
  progressText: { fontWeight: '800', fontSize: 13, color: '#3498DB', textTransform: 'uppercase' },
  waveBanner: { position: 'absolute', top: 20, right: 20, backgroundColor: '#3498DB', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, zIndex: 10 },
  waveText: { fontWeight: '900', fontSize: 13, color: '#FFF', textTransform: 'uppercase' },
  dropZone: { position: 'absolute', justifyContent: 'center', alignItems: 'center' },
  infoCard: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 30, paddingBottom: 50, borderTopLeftRadius: 35, borderTopRightRadius: 35, shadowColor: '#3498DB', shadowOpacity: 0.15, shadowRadius: 15, elevation: 20 },
  infoCardRight: { backgroundColor: '#F7FBFF' },
  infoCardWrong: { backgroundColor: '#FEF9F9' },
  infoCardHint: { backgroundColor: '#F9F9F9' },
  infoTitle: { fontSize: 22, fontWeight: '900', marginBottom: 5 },
  infoTitleSub: { fontSize: 18, fontWeight: '800', color: '#111', marginBottom: 12 },
  infoDesc: { fontSize: 16, color: '#444', lineHeight: 26, marginBottom: 25 },
  textRight: { color: '#3498DB' },
  textWrong: { color: '#A73C44' },
  textHint: { color: '#2980B9' },
  btn: { paddingVertical: 18, borderRadius: 15, alignItems: 'center' },
  btnRight: { backgroundColor: '#3498DB' },
  btnWrong: { backgroundColor: '#A73C44' },
  btnHint: { backgroundColor: '#2980B9' },
  btnText: { color: '#FFF', fontSize: 18, fontWeight: '900' }
});
