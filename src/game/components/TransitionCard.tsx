/// <reference types="nativewind/types" />
import React, { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withTiming, 
  withSequence,
  withDelay,
  runOnJS 
} from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';

interface TransitionCardProps {
  step: 1 | 2 | 3 | 4;
  onComplete: () => void;
  visible: boolean;
}

const TRANSITION_CONTENT = {
  1: {
    emoji: '📋',
    title: 'Bag Packed!',
    titleNe: 'झोला तयार भयो!',
    subtitle: 'Now find your important documents.',
    subtitleNe: 'अब जरुरी कागजातहरू जम्मा गरौं।',
    accent: '#5B8DB8',
    bgColor: 'rgba(240, 247, 255, 0.97)',
    badge: 'Step 1 Complete',
    badgeNe: 'चरण १ सकियो',
  },
  2: {
    emoji: '📱',
    title: 'Documents Ready!',
    titleNe: 'कागजात तयार भयो!',
    subtitle: 'Now save your emergency contacts.',
    subtitleNe: 'अब सम्पर्क नम्बरहरू सेभ गरौं।',
    accent: '#5BA88C',
    bgColor: 'rgba(240, 253, 248, 0.97)',
    badge: 'Step 2 Complete',
    badgeNe: 'चरण २ सकियो',
  },
  3: {
    emoji: '🩺',
    title: 'Contacts Saved!',
    titleNe: 'सम्पर्क सेभ भयो!',
    subtitle: 'Do you know the danger signs?',
    subtitleNe: 'के तपाईंलाई खतराका चिन्हहरू थाहा छ?',
    accent: '#C49A3C',
    bgColor: 'rgba(255, 252, 240, 0.97)',
    badge: 'Step 3 Complete',
    badgeNe: 'चरण ३ सकियो',
  },
  4: {
    emoji: '🌟',
    title: 'Quiz Done!',
    titleNe: 'प्रश्न सकियो!',
    subtitle: "Let's see your final results.",
    subtitleNe: 'अब नतिजा हेरौं!',
    accent: '#C06898',
    bgColor: 'rgba(253, 245, 250, 0.97)',
    badge: 'Step 4 Complete',
    badgeNe: 'चरण ४ सकियो',
  }
};

export const TransitionCard: React.FC<TransitionCardProps> = ({ step, onComplete, visible }) => {
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';
  const scale = useSharedValue(0.6);
  const opacity = useSharedValue(0);
  const emojiScale = useSharedValue(0);
  const overlayOpacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      overlayOpacity.value = withTiming(1, { duration: 250 });
      scale.value = withSpring(1, { damping: 12, stiffness: 120 });
      opacity.value = withTiming(1, { duration: 300 });
      emojiScale.value = withDelay(200, withSequence(
        withSpring(1.3, { damping: 8 }),
        withSpring(1, { damping: 10 })
      ));

      const timer = setTimeout(() => {
        handleDismiss();
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      scale.value = withTiming(0.6, { duration: 200 });
      opacity.value = withTiming(0, { duration: 200 });
      overlayOpacity.value = withTiming(0, { duration: 200 });
      emojiScale.value = 0;
    }
  }, [visible]);

  const handleDismiss = () => {
    overlayOpacity.value = withTiming(0, { duration: 250 });
    scale.value = withTiming(0.8, { duration: 250 });
    opacity.value = withTiming(0, { duration: 250 }, () => {
      runOnJS(onComplete)();
    });
  };

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const emojiStyle = useAnimatedStyle(() => ({
    transform: [{ scale: emojiScale.value }],
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: overlayOpacity.value,
  }));

  if (!visible) return null;

  const content = TRANSITION_CONTENT[step];

  return (
    <Animated.View 
      className="absolute inset-0 bg-black/35 justify-center items-center z-[1000]" 
      style={overlayStyle}
    >
      <Pressable className="flex-1 justify-center items-center w-full" onPress={handleDismiss}>
        <Animated.View 
          className="w-[82%] rounded-[26px] px-[28px] pt-[32px] pb-[26px] items-center shadow shadow-black shadow-opacity-10 shadow-radius-20 elevation-16 border border-white/80 overflow-hidden" 
          style={[cardStyle, { backgroundColor: content.bgColor }]}
        >
          {/* Accent line at top */}
          <View 
            className="absolute top-0 left-0 right-0 h-1 rounded-t-[26px]" 
            style={{ backgroundColor: content.accent }} 
          />
          
          {/* Badge */}
          <View 
            className="px-4 py-1.5 rounded-[20px] mb-5" 
            style={{ backgroundColor: content.accent + '15' }}
          >
            <Text 
              className="text-[12px] font-[700] tracking-[0.5px]" 
              style={{ color: content.accent }}
            >
              {isNe ? content.badgeNe : content.badge}
            </Text>
          </View>

          {/* Big Emoji */}
          <Animated.View style={emojiStyle}>
            <Text className="text-[64px] mb-4">{content.emoji}</Text>
          </Animated.View>

          {/* Title */}
          <Text 
            className="text-[26px] font-[800] text-center mb-2" 
            style={{ color: content.accent }}
          >
            {isNe ? content.titleNe : content.title}
          </Text>

          {/* Subtitle */}
          <Text className="text-[16px] font-[500] text-[#666] text-center leading-[24px] mb-5 px-2">
            {isNe ? content.subtitleNe : content.subtitle}
          </Text>

          {/* Divider */}
          <View 
            className="w-[50px] h-0.5 rounded-sm mb-4" 
            style={{ backgroundColor: content.accent + '20' }} 
          />

          {/* Tap hint */}
          <View 
            className="px-5 py-2.5 rounded-[20px]" 
            style={{ backgroundColor: content.accent + '10' }}
          >
            <Text 
              className="text-[13px] font-[600] tracking-[0.3px]" 
              style={{ color: content.accent }}
            >
              {isNe ? 'अगाडि बढ्न छुनुहोस्' : 'Tap to continue'}
            </Text>
          </View>
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
};
