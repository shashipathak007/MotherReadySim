import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withTiming, 
  runOnJS 
} from 'react-native-reanimated';
import { OpenFolder } from './GameSVGs';
import Svg, { Polygon, Rect, Circle, Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

interface TransitionCardProps {
  step: 1 | 2 | 3 | 4;
  onComplete: () => void;
  visible: boolean;
}

const TRANSITION_CONTENT = {
  1: {
    text: "Bag packed. Now find your documents.",
    illustration: () => <View style={styles.svgContainer}><OpenFolder filled={3} /></View>
  },
  2: {
    text: "Documents ready. Now save your emergency contacts.",
    illustration: () => (
      <View style={styles.svgContainer}>
        <Svg width="100" height="100" viewBox="0 0 100 100">
          <Rect x="20" y="10" width="60" height="80" rx="10" fill="#333" />
          <Rect x="25" y="15" width="50" height="60" rx="5" fill="#FFF" />
          <Circle cx="50" cy="80" r="4" fill="#666" />
        </Svg>
      </View>
    )
  },
  3: {
    text: "Contacts saved. Now — do you know the danger signs?",
    illustration: () => (
      <View style={styles.svgContainer}>
        <Svg width="100" height="100" viewBox="0 0 100 100">
          <Polygon points="50,10 90,90 10,90" fill="#FADDEB" stroke="#F33A6A" strokeWidth="5" strokeLinejoin="round" />
          <Rect x="45" y="30" width="10" height="30" fill="#F33A6A" rx="5" />
          <Rect x="45" y="68" width="10" height="10" fill="#F33A6A" rx="5" />
        </Svg>
      </View>
    )
  },
  4: {
    text: "You know what to watch for. Let's see if you're ready.",
    illustration: () => (
      <View style={styles.svgContainer}>
        <Svg width="100" height="100" viewBox="0 0 100 100">
          <Path d="M10,80 L90,80 L90,40 L10,40 Z" fill="#FADDEB" />
          <Path d="M30,40 L30,20 L70,20 L70,40" fill="none" stroke="#B04C8A" strokeWidth="5" />
          <Rect x="45" y="50" width="10" height="20" fill="#F33A6A" />
          <Rect x="40" y="55" width="20" height="10" fill="#F33A6A" />
        </Svg>
      </View>
    )
  }
};

export const TransitionCard: React.FC<TransitionCardProps> = ({ step, onComplete, visible }) => {
  const translateX = useSharedValue(500); // Start off-screen right

  useEffect(() => {
    if (visible) {
      translateX.value = withSpring(0, { damping: 15 });
      const timer = setTimeout(() => {
        handleDismiss();
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      translateX.value = withTiming(500);
    }
  }, [visible]);

  const handleDismiss = () => {
    translateX.value = withTiming(-500, { duration: 300 }, () => {
      runOnJS(onComplete)();
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  if (!visible) return null;

  const content = TRANSITION_CONTENT[step];

  return (
    <View style={styles.overlay}>
      <Animated.View style={[styles.cardContainer, animatedStyle]}>
        <LinearGradient 
          colors={['#F33A6A', '#B04C8A']}
          style={styles.card}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Pressable style={styles.content} onPress={handleDismiss}>
            {content.illustration()}
            <Text style={styles.text}>{content.text}</Text>
            <Text style={styles.hint}>(Tap to continue)</Text>
          </Pressable>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  cardContainer: {
    width: '85%',
    height: 400,
    borderRadius: 30,
    shadowColor: '#F33A6A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 15,
  },
  card: {
    flex: 1,
    borderRadius: 30,
    padding: 30,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgContainer: {
    width: 180,
    height: 180,
    marginBottom: 40,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.95)'
  },
  text: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 34,
  },
  hint: {
    marginTop: 25,
    fontSize: 13,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.8)',
    textTransform: 'uppercase',
    letterSpacing: 2
  }
});
