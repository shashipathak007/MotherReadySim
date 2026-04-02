import React, { forwardRef, useImperativeHandle, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

export interface DraggableItemRef {
  shakeAndSnapBack: () => void;
  snapBack: () => void;
  animatePack: (targetX: number, targetY: number) => void;
}

interface DraggableItemProps {
  id: number;
  name: string;
  emoji?: string;
  category?: string;
  isWrong?: boolean;
  initialPos: { x: number, y: number };
  onDrop: (id: number, x: number, y: number, isWrong: boolean) => void;
  onLongPress?: (id: number, isWrong: boolean) => void;
  packed: boolean;
  color?: string;
}

export const DraggableItem = forwardRef<DraggableItemRef, DraggableItemProps>(({ 
  id, name, emoji, category, isWrong = false, initialPos, onDrop, onLongPress, packed, color = '#FFF'
}, ref) => {
  const translateX = useSharedValue(initialPos.x);
  const translateY = useSharedValue(initialPos.y);
  const scale = useSharedValue(1);
  const zIndex = useSharedValue(1);
  const rotation = useSharedValue(0);

  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  useEffect(() => {
    if (!packed) {
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
        withTiming(currentX, { duration: 200 })
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
    });

  const longPressGesture = Gesture.LongPress()
    .enabled(!packed)
    .minDuration(400)
    .onStart(() => {
      if (onLongPress) {
        runOnJS(onLongPress)(id, isWrong);
      }
    });

  const composedGesture = Gesture.Race(panGesture, longPressGesture);

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
      <Animated.View style={[animatedStyle, styles.container, { backgroundColor: color }]}>
        <View style={styles.iconCircle}>
          <Text style={styles.emoji}>{emoji}</Text>
        </View>
        <View style={styles.labelWrapper}>
          <Text style={styles.label} numberOfLines={2}>{name}</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
});

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 75,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 1.5,
    borderColor: '#FCC2D7',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 26,
  },
  labelWrapper: {
    position: 'absolute',
    bottom: -36,
    width: 96,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderWidth: 1.5,
    borderColor: '#FADDEB',
    shadowColor: '#B04C8A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  label: {
    fontSize: 11,
    fontWeight: '900',
    color: '#1A1A1A',
    textAlign: 'center',
  }
});
