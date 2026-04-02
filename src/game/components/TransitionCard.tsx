import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
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
    emoji: '📁',
    title: 'Bag Packed!',
    titleNe: 'झोला तयार भयो!',
    subtitle: 'Now find your important documents.',
    subtitleNe: 'अब आवश्यक कागजातहरू जम्मा गर्नुहोस्।',
    accent: '#3B82F6',
    bgColor: 'rgba(239, 246, 255, 0.97)',
    badge: '✅ Step 1 Complete',
  },
  2: {
    emoji: '📱',
    title: 'Documents Ready!',
    titleNe: 'कागजात तयार!',
    subtitle: 'Now save your emergency contacts.',
    subtitleNe: 'अब आपतकालीन सम्पर्कहरू सुरक्षित गर्नुहोस्।',
    accent: '#10B981',
    bgColor: 'rgba(236, 253, 245, 0.97)',
    badge: '✅ Step 2 Complete',
  },
  3: {
    emoji: '⚠️',
    title: 'Contacts Saved!',
    titleNe: 'सम्पर्क सुरक्षित!',
    subtitle: 'Do you know the danger signs?',
    subtitleNe: 'के तपाईंलाई खतराका संकेतहरू थाहा छ?',
    accent: '#F59E0B',
    bgColor: 'rgba(255, 251, 235, 0.97)',
    badge: '✅ Step 3 Complete',
  },
  4: {
    emoji: '🏆',
    title: 'Quiz Done!',
    titleNe: 'प्रश्नोत्तरी सकियो!',
    subtitle: "Let's see your final results.",
    subtitleNe: 'अब तपाईंको नतिजा हेरौं।',
    accent: '#B04C8A',
    bgColor: 'rgba(253, 242, 248, 0.97)',
    badge: '✅ Step 4 Complete',
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
    <Animated.View style={[styles.overlay, overlayStyle]}>
      <Pressable style={styles.overlayPress} onPress={handleDismiss}>
        <Animated.View style={[styles.card, cardStyle, { backgroundColor: content.bgColor }]}>
          {/* Accent line at top */}
          <View style={[styles.accentBar, { backgroundColor: content.accent }]} />
          
          {/* Badge */}
          <View style={[styles.badge, { backgroundColor: content.accent + '18' }]}>
            <Text style={[styles.badgeText, { color: content.accent }]}>{content.badge}</Text>
          </View>

          {/* Big Emoji */}
          <Animated.View style={emojiStyle}>
            <Text style={styles.emoji}>{content.emoji}</Text>
          </Animated.View>

          {/* Title */}
          <Text style={[styles.title, { color: content.accent }]}>{isNe ? content.titleNe : content.title}</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>{isNe ? content.subtitleNe : content.subtitle}</Text>

          {/* Divider */}
          <View style={[styles.divider, { backgroundColor: content.accent + '25' }]} />

          {/* Tap hint */}
          <View style={[styles.tapHint, { backgroundColor: content.accent + '12' }]}>
            <Text style={[styles.hintText, { color: content.accent }]}>{isNe ? 'अगाडि बढ्न ट्याप गर्नुहोस् →' : 'Tap to continue →'}</Text>
          </View>
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  overlayPress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '82%',
    borderRadius: 28,
    paddingHorizontal: 30,
    paddingTop: 36,
    paddingBottom: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
    overflow: 'hidden',
  },
  accentBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  badge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 24,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  emoji: {
    fontSize: 72,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#555',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  divider: {
    width: 60,
    height: 2,
    borderRadius: 1,
    marginBottom: 20,
  },
  tapHint: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  hintText: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
