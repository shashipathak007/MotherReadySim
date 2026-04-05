import React, { forwardRef, useImperativeHandle, useEffect } from 'react';
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
}

export const DraggableItem = forwardRef<DraggableItemRef, DraggableItemProps>(({
  id, name, emoji, isWrong = false, initialPos, onDrop, onLongPress, packed, color = '#FFFBFD'
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
      scale.value = withSpring(1.12);
      zIndex.value = 100;
      rotation.value = withSpring(3);
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
      <Animated.View
        style={[animatedStyle, { backgroundColor: color }]}
        className="w-[72px] h-[72px] rounded-full justify-center items-center shadow shadow-black shadow-opacity-15 shadow-radius-5 elevation-6 border-[3px] border-[#F48B9E]"
      >
        <View className={`w-[48px] h-[48px] rounded-full justify-center items-center ${isWrong ? 'bg-[#F5F0F0]' : 'bg-white/90'}`}>
          <Text className="text-[42px]">{emoji}</Text>
        </View>
        <View className={`absolute bottom-[-34px] w-[92px] rounded-xl px-1.5 py-1 border-[1.5px] shadow-opacity-8 shadow-radius-2 elevation-2 ${isWrong ? 'bg-[#F9F5F5] border-[#E8D5D5]' : 'bg-white border-[#F5E1EC]'}`}>
          <Text className={`text-[10px] font-[700] text-center ${isWrong ? 'text-[#888]' : 'text-[#333]'}`} numberOfLines={2}>{name}</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
});
