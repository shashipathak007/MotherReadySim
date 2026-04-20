/// <reference types="nativewind/types" />
import React, { forwardRef, useImperativeHandle, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
  withSequence,
  withRepeat,
  cancelAnimation
} from 'react-native-reanimated';
import { getItemIcon, getContactIcon } from './ItemIcons';

export interface DraggableItemRef {
  shakeAndSnapBack: () => void;
  snapBack: () => void;
  animatePack: (targetX: number, targetY: number) => void;
}

interface DraggableItemProps {
  id: number;
  name: string;
  emoji?: string;
  isWrong?: boolean;
  initialPos: { x: number, y: number };
  onDrop: (id: number, x: number, y: number, isWrong: boolean) => void;
  onLongPress?: (id: number, isWrong: boolean) => void;
  packed: boolean;
  color?: string;
  isContact?: boolean;
}

export const DraggableItem = forwardRef<DraggableItemRef, DraggableItemProps>(({
  id, name, emoji, isWrong = false, initialPos, onDrop, onLongPress, packed, color = '#FFFBFD', isContact = false
}, ref) => {
  const translateX = useSharedValue(initialPos.x);
  const translateY = useSharedValue(initialPos.y);
  const scale = useSharedValue(1);
  const zIndex = useSharedValue(1);
  const rotation = useSharedValue(0);

  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  const prevPackedRef = useRef(packed);
  useEffect(() => {
    // Important: don't "follow" `initialPos` on every re-render.
    // Items should remain wherever the user dropped them. We only reset when an item
    // transitions from packed -> unpacked (e.g. step reset).
    const wasPacked = prevPackedRef.current;
    prevPackedRef.current = packed;
    if (wasPacked && !packed) {
      translateX.value = withSpring(initialPos.x);
      translateY.value = withSpring(initialPos.y);
      scale.value = withSpring(1);
      rotation.value = withSpring(0);
      zIndex.value = 1;
    }
  }, [packed, initialPos.x, initialPos.y]);

  useImperativeHandle(ref, () => ({
    shakeAndSnapBack: () => {
      'worklet';
      cancelAnimation(translateX);
      cancelAnimation(translateY);
      const currentX = translateX.value;
      translateX.value = withSequence(
        withTiming(currentX - 10, { duration: 50 }),
        withRepeat(withTiming(currentX + 10, { duration: 50 }), 3, true),
        withSpring(currentX)
      );
      scale.value = withSpring(1);
      rotation.value = withSpring(0);
      zIndex.value = 1;
    },
    snapBack: () => {
      'worklet';
      scale.value = withSpring(1);
      rotation.value = withSpring(0);
      zIndex.value = 1;
    },
    animatePack: (targetX: number, targetY: number) => {
      'worklet';
      translateX.value = withSpring(targetX);
      translateY.value = withSpring(targetY);
      scale.value = withTiming(0, { duration: 500 });
      zIndex.value = 1;
    }
  }));

  const panGesture = Gesture.Pan()
    .enabled(!packed)
    .onStart(() => {
      startX.value = translateX.value;
      startY.value = translateY.value;
      scale.value = withSpring(1.15);
      zIndex.value = 100;
      rotation.value = withSpring(5);
    })
    .onUpdate((event) => {
      translateX.value = startX.value + event.translationX;
      translateY.value = startY.value + event.translationY;
    })
    .onEnd(() => {
      runOnJS(onDrop)(id, translateX.value, translateY.value, isWrong);
      scale.value = withSpring(1);
      rotation.value = withSpring(0);
      zIndex.value = 1;
    });

  const tapGesture = Gesture.Tap()
    .enabled(!packed)
    .onEnd(() => {
      if (onLongPress) {
        runOnJS(onLongPress)(id, isWrong);
      }
    });

  const composedGesture = Gesture.Exclusive(panGesture, tapGesture);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
        { rotate: `${rotation.value}deg` }
      ],
      zIndex: zIndex.value,
      opacity: packed ? 0 : 1,
    };
  });

  return (
    <GestureDetector gesture={composedGesture}>
      <Animated.View style={[animatedStyle]}>
        {/* Circle */}
        <View
          style={{
            width: 82,
            height: 82,
            borderRadius: 41,
            backgroundColor: '#FFFFFF',
            borderWidth: 3.5,
            borderColor: '#F85797',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#C06898',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 6,
            elevation: 6,
          }}
        >
          {isContact
            ? (getContactIcon(id, isWrong, 55) || <Text style={{ fontSize: 50, textAlign: 'center' }}>{emoji}</Text>)
            : (getItemIcon(id, isWrong, 55) || <Text style={{ fontSize: 50, textAlign: 'center' }}>{emoji}</Text>)
          }
        </View>

        {/* Text label — sits directly below circle, centered under it */}
        <View
          style={{
            width: 100,
            marginTop: 4,
            marginLeft: -10, 
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            borderWidth: 1.5,
            borderColor: isWrong ? '#E8D5D5' : '#F5E1EC',
            paddingHorizontal: 6,
            paddingVertical: 4,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.08,
            shadowRadius: 2,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontWeight: '700',
              textAlign: 'center',
              color: '#333',
              lineHeight: 13,
            }}
            numberOfLines={2}
          >{name}</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
});