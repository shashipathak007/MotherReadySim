/// <reference types="nativewind/types" />
import React, { useRef, useState, useMemo, useEffect } from 'react';
import { View, Dimensions, Text, ScrollView, Image } from 'react-native';
import { useGame } from '../context/GameContext';
import { CONTACTS } from '../../data/contacts';
import { DraggableItem, DraggableItemRef } from '../components/DraggableItem';
import { StepCompletionModal } from '../components/StepCompletionModal';
import Animated, { FadeInDown, useSharedValue, useAnimatedStyle, withSpring, withSequence } from 'react-native-reanimated';
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

  const phoneScale = useSharedValue(1);
  const triggerPhoneReaction = () => {
    'worklet';
    phoneScale.value = withSequence(
      withSpring(1.08, { damping: 8, stiffness: 120 }),
      withSpring(1)
    );
  };
  const phoneAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: phoneScale.value }]
  }));

  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [currentWaveIdx, setCurrentWaveIdx] = useState(0);
  const [containerLayout, setContainerLayout] = useState({ width: width, height: height });
  const waveCategories = ['CRITICAL', 'IMPORTANT', 'INFO'];
  const currentWave = waveCategories[currentWaveIdx];

  const hasCompletedInitially = useRef(savedContacts.length >= CONTACTS.length);
  const isFirstCompletion = useRef(false);

  const checkCompletion = (newCount: number) => {
    if (newCount >= CONTACTS.length) {
      isFirstCompletion.current = !hasCompletedInitially.current;
      setShowCompletionModal(true);
    }
  };

  useEffect(() => {
    if (currentWave) setCurrentWave(currentWave);
  }, [currentWave, setCurrentWave]);

  useEffect(() => {
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

  // Items — same layout formula as Step 1
  const activeWaveContacts = useMemo(() => {
    if (!currentWave) return [];
    const correctItems = CONTACTS.filter(item => item.urgency === currentWave).map(item => ({
      id: item.id, name: item.name, nameNe: item.nameNe,
      isWrong: false, why: item.fullDetail, whyNe: item.fullDetailNe,
      phone: item.phone || ''
    }));
    const wrongIds = WRONG_DISTRIBUTION[currentWave as keyof typeof WRONG_DISTRIBUTION] || [];
    const wrongItems = WRONG_CONTACTS.filter(i => wrongIds.includes(i.id)).map(item => ({
      id: item.id, name: item.name, nameNe: item.nameNe || '',
      isWrong: true, why: item.whyNot, whyNe: '', whyNotNe: item.whyNotNe || '', phone: ''
    }));

    const combined = [...correctItems, ...wrongItems];
    const itemCount = combined.length;
    const itemSize = 75;

    return combined.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => {
      const cols = Math.min(itemCount, 3);
      const row = Math.floor(index / cols);
      const col = index % cols;

      const xPos = (containerLayout.width * 0.35) - ((cols * itemSize) / 2) + (col * itemSize) + (itemSize / 2) - 35;
      const yPos = (containerLayout.height * 0.35) + (row * (itemSize + 30));

      return {
        ...item,
        initialPos: {
          x: xPos + (Math.random() - 0.5) * 10,
          y: yPos + (Math.random() - 0.5) * 10
        }
      };
    });
  }, [currentWave, savedContacts.length === 0, containerLayout.width]);

  // Drop zone — EXACTLY same as Step 1 bag
  const dropZone = {
    x: containerLayout.width * 0.35 - 110,
    y: containerLayout.height - 240,
    w: 220,
    h: 180
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
        triggerPhoneReaction();
        ref?.animatePack(dropZone.x + dropZone.w / 2 - 30, dropZone.y + dropZone.h / 2 - 30);
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
    switch (id) {
      case 1: return '👩‍⚕️'; case 2: return '🚑'; case 3: return '🏥';
      case 4: return '🤝'; case 5: return '👫'; case 6: return '🏠';
      case 7: return '🩸'; case 8: return '📞'; default: return '📱';
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
      {/* Phone image — EXACTLY same pattern as bag in Step 1 */}
      <View 
        className="absolute justify-center items-center"
        style={{ left: dropZone.x - 15, top: dropZone.y - 30, width: dropZone.w + 30, height: dropZone.h + 60 }}
      >
        <Image
          source={require('../../../assets/images/phone_frame.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
      </View>

      {/* Contacts displayed on phone screen area */}
      {(() => {
        // Phone image container bounds
        const containerLeft = dropZone.x - 15;
        const containerTop = dropZone.y - 30;
        const containerW = dropZone.w + 30;
        const containerH = dropZone.h + 60;

        // phone_frame.png is 462x868 (ratio 0.532)
        // With resizeMode="contain", calculate actual rendered phone size & position
        const phoneRatio = 462 / 868;
        const containerRatio = containerW / containerH;
        let renderedW: number, renderedH: number, offsetX: number, offsetY: number;

        if (containerRatio > phoneRatio) {
          // Container is wider — phone constrained by height
          renderedH = containerH;
          renderedW = containerH * phoneRatio;
          offsetX = (containerW - renderedW) / 2;
          offsetY = 0;
        } else {
          // Container is taller — phone constrained by width
          renderedW = containerW;
          renderedH = containerW / phoneRatio;
          offsetX = 0;
          offsetY = (containerH - renderedH) / 2;
        }

        // Screen area within the RENDERED phone image
        // From the phone_frame.png: screen starts ~8% left, ~15% top, ~84% wide, ~72% tall
        const screenLeft = containerLeft + offsetX + renderedW * 0.10;
        const screenTop = containerTop + offsetY + renderedH * 0.17;
        const screenW = renderedW * 0.80;
        const screenH = renderedH * 0.68;

        return (
      <View
        style={{
          position: 'absolute',
          left: screenLeft,
          top: screenTop,
          width: screenW,
          height: screenH,
          overflow: 'hidden',
          borderRadius: 4,
        }}
        pointerEvents="none"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          contentContainerStyle={{ paddingVertical: 2 }}
        >
          {savedContacts.map(id => {
            const contact = CONTACTS.find(c => c.id === id);
            return (
              <Animated.View
                entering={FadeInDown.duration(300)}
                key={id}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 3,
                  paddingHorizontal: 4,
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  marginBottom: 2,
                  borderRadius: 4,
                  gap: 3
                }}
              >
                <Text style={{ fontSize: 8 }}>{getContactEmoji(id)}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 6, color: 'white', fontWeight: '700' }} numberOfLines={1}>
                    {isNe && contact?.nameNe ? contact.nameNe : contact?.name}
                  </Text>
                  <Text style={{ fontSize: 5, color: 'rgba(255,255,255,0.5)' }} numberOfLines={1}>
                    {contact?.phone || ''}
                  </Text>
                </View>
              </Animated.View>
            );
          })}
        </ScrollView>
      </View>
        );
      })()}

      {/* Draggable items — same layout as Step 1 */}
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
        onNext={isFirstCompletion.current ? () => { setShowCompletionModal(false); onNextStep(); } : undefined}
        onReset={() => {
          resetCurrentStep();
          setShowCompletionModal(false);
        }}
      />
    </View>
  );
}
