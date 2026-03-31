import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal } from 'react-native';
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

interface TutorialOverlayProps {
  visible: boolean;
  onClose: () => void;
}

export const TutorialOverlay: React.FC<TutorialOverlayProps> = ({ visible, onClose }) => {
  const [step, setStep] = useState(0);

  const tutorialSteps = [
    {
      title: "Welcome to Aama Ready!",
      description: "This simulator will help you prepare for your hospital trip. Let's learn how to interact with the items.",
      icon: "👋"
    },
    {
      title: "Drag and Drop",
      description: "Gently drag items into the bag or folder to pack them. Use your finger to move them around.",
      icon: "👆"
    },
    {
      title: "Learn Details",
      description: "Hold down (long tap) on any item to see why it is important for your pregnancy journey.",
      icon: "💡"
    }
  ];

  if (!visible) return null;

  const currentTutorial = tutorialSteps[step];

  const handleNext = () => {
    if (step < tutorialSteps.length - 1) {
      setStep(step + 1);
    } else {
      onClose();
    }
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <Animated.View 
          entering={ZoomIn.duration(400)} 
          exiting={ZoomOut.duration(300)}
          style={styles.card}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>{currentTutorial.icon}</Text>
          </View>
          
          <Text style={styles.title}>{currentTutorial.title}</Text>
          <Text style={styles.description}>{currentTutorial.description}</Text>

          <View style={styles.footer}>
            <View style={styles.dots}>
              {tutorialSteps.map((_, i) => (
                <View 
                  key={i} 
                  style={[styles.dot, step === i && styles.activeDot]} 
                />
              ))}
            </View>

            <TouchableOpacity onPress={handleNext} style={styles.nextBtn}>
              <LinearGradient colors={['#F33A6A', '#B04C8A']} style={styles.btnGradient}>
                <Text style={styles.btnText}>
                  {step === tutorialSteps.length - 1 ? "Got it!" : "Next"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 24,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFF5F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  dots: {
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginRight: 6,
  },
  activeDot: {
    backgroundColor: '#B04C8A',
    width: 20,
  },
  nextBtn: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  btnGradient: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  btnText: {
    color: '#FFF',
    fontWeight: '900',
    fontSize: 16,
  }
});
