import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useGame } from './context/GameContext';
import Step1Bag from './screens/Step1Bag';
import Step2Documents from './screens/Step2Documents';
import Step3Contacts from './screens/Step3Contacts';
import Step4DangerSigns from './screens/Step4DangerSigns';
import Step5Summary from './screens/Step5Summary';
import { TransitionCard } from './components/TransitionCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp, FadeOutDown, SlideInDown, SlideOutDown } from 'react-native-reanimated';
import { TutorialOverlay } from './components/TutorialOverlay';
import { useTranslation } from 'react-i18next';

export default function GameContainer() {
  const { 
    currentStep, setStep, isReady, resetCurrentStep,
    packedBagItems, collectedDocuments, savedContacts, feedback, clearFeedback, currentWave
  } = useGame();
  const { i18n } = useTranslation();

  const isNepali = i18n.language === 'ne';
  const toggleLanguage = () => {
    i18n.changeLanguage(isNepali ? 'en' : 'ne');
  };

  useEffect(() => {
    clearFeedback();
  }, [currentStep]);

  const [showTransition, setShowTransition] = useState(false);
  const [transitionStep, setTransitionStep] = useState<1|2|3|4>(1);
  const [showTutorial, setShowTutorial] = useState(true);

  if (!isReady) {
    return <View style={styles.container} />; // Loading state
  }

  const handleNextStep = (stepFinished: 1|2|3|4) => {
    setTransitionStep(stepFinished);
    setShowTransition(true);
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
    setStep((transitionStep + 1) as any);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1Bag onNextStep={() => handleNextStep(1)} />;
      case 2: return <Step2Documents onNextStep={() => handleNextStep(2)} />;
      case 3: return <Step3Contacts onNextStep={() => handleNextStep(3)} />;
      case 4: return <Step4DangerSigns onNextStep={() => handleNextStep(4)} />;
      case 5: return <Step5Summary onReplay={() => setStep(1)} />;
      default: return null;
    }
  };


  const getStepName = (step: number) => {
    if (isNepali) {
      switch(step) {
        case 1: return "अस्पतालको झोला";
        case 2: return "कागजातहरू";
        case 3: return "आपतकालीन सम्पर्क";
        case 4: return "खतराका संकेत";
        case 5: return "नतिजा";
        default: return "";
      }
    }
    switch(step) {
      case 1: return "Hospital Bag";
      case 2: return "Important Documents";
      case 3: return "Emergency Contacts";
      case 4: return "Danger Signs Quiz";
      case 5: return "Simulation Summary";
      default: return "";
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.headerArea}>
        <LinearGradient
          colors={['#FFF5F8', '#FFFFFF']}
          style={styles.headerContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <TouchableOpacity 
            style={styles.navBtn} 
            onPress={() => setStep(Math.max(1, currentStep - 1) as any)}
            disabled={currentStep === 1}
          >
            <Text style={[styles.navBtnText, currentStep === 1 && styles.navBtnDisabled]}>{isNepali ? 'अघि' : 'Prev'}</Text>
          </TouchableOpacity>

          <View style={styles.stepTitleContainer}>
            <Text style={styles.stepLabel}>{isNepali ? `चरण ${currentStep}` : `Step ${currentStep}`}</Text>
            <Text style={styles.stepName}>{getStepName(currentStep)}</Text>
          </View>

          <TouchableOpacity 
            style={styles.navBtn} 
            onPress={() => setStep(Math.min(5, currentStep + 1) as any)}
            disabled={currentStep === 5}
          >
            <Text style={[styles.navBtnText, currentStep === 5 && styles.navBtnDisabled]}>{isNepali ? 'अर्को' : 'Next'}</Text>
          </TouchableOpacity>
        </LinearGradient>

        {currentStep < 5 && (
           <View style={styles.statusSubHeader}>
             <View style={styles.statusInfoGroup}>
                {currentStep === 1 && <Text style={styles.statusText}>🎒 {packedBagItems.length}/28 • {currentWave}</Text>}
                {currentStep === 2 && <Text style={styles.statusText}>📁 {collectedDocuments.length}/15 • {currentWave}</Text>}
                {currentStep === 3 && <Text style={styles.statusText}>📞 {savedContacts.length}/8 • {currentWave}</Text>}
                {currentStep === 4 && <Text style={styles.statusText}>⚠️ {isNepali ? 'खतराका संकेत' : 'Danger Signs Quiz'}</Text>}
             </View>
             <View style={styles.headerActions}>
               <TouchableOpacity style={styles.langToggle} onPress={toggleLanguage}>
                 <Text style={styles.langToggleText}>{isNepali ? 'EN' : 'ने'}</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.resetBadge} onPress={() => { resetCurrentStep(); clearFeedback(); }}>
                  <Text style={styles.resetBadgeText}>{isNepali ? 'रिसेट' : 'Reset'}</Text>
               </TouchableOpacity>
             </View>
           </View>
        )}
      </View>

      <View style={styles.content}>
        {renderStep()}
        
        {feedback && (
          <Animated.View 
            entering={FadeInUp} 
            exiting={FadeOutDown} 
            style={[
              styles.feedbackBar, 
              styles.feedbackOverlay,
              feedback.type === 'error' ? styles.feedbackError : (feedback.type === 'info' ? styles.feedbackInfo : styles.feedbackSuccess)
            ]}
          >
             <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
               <View style={{ flex: 1, paddingRight: 35 }}>
                 <Text style={[styles.feedbackTitle, feedback.type === 'info' && styles.infoText]}>
                    {feedback.type === 'success' ? '✅' : (feedback.type === 'error' ? '❌' : '💡')} {feedback.message}
                 </Text>
                 {feedback.detail ? <Text style={styles.feedbackDetail}>{feedback.detail}</Text> : null}
               </View>
               <TouchableOpacity 
                 onPress={clearFeedback} 
                 style={styles.closeFeedbackBtn}
                 activeOpacity={0.7}
               >
                 <Text style={styles.closeX}>✕</Text>
               </TouchableOpacity>
             </View>
          </Animated.View>
        )}
      </View>


      <TransitionCard 
        visible={showTransition} 
        step={transitionStep} 
        onComplete={handleTransitionComplete} 
      />

      <TutorialOverlay 
        visible={showTutorial} 
        onClose={() => setShowTutorial(false)} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9FB',
  },
  headerArea: {
    backgroundColor: '#FFF',
    zIndex: 100,
    shadowColor: '#B04C8A',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FADDEB',
  },
  statusSubHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFF5F8',
    borderBottomWidth: 1,
    borderBottomColor: '#FADDEB',
  },
  statusInfoGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#B04C8A',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  feedbackBar: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FADDEB',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    zIndex: 200,
  },
  feedbackOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(176, 76, 138, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  feedbackSuccess: {
    backgroundColor: '#F0FDF4',
  },
  feedbackError: {
    backgroundColor: '#FEF2F2',
  },
  feedbackInfo: {
    backgroundColor: '#F0F9FF',
    borderLeftWidth: 4,
    borderLeftColor: '#0EA5E9',
  },
  infoText: {
    color: '#0369A1',
  },
  closeFeedbackBtn: {
    position: 'absolute',
    right: 0,
    top: -5,
    width: 32,
    height: 32,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeX: {
    fontSize: 16,
    color: '#666',
    fontWeight: '900',
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#111',
    marginBottom: 6,
  },
  feedbackDetail: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
    fontWeight: '600',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  langToggle: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#B04C8A',
    borderRadius: 20,
  },
  langToggleText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#FFF',
  },
  resetBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#F33A6A',
  },
  resetBadgeText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#F33A6A',
  },
  stepTitleContainer: {
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 11,
    fontWeight: '900',
    color: '#B04C8A',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  stepName: {
    fontSize: 16,
    fontWeight: '900',
    color: '#333',
  },
  navBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#B04C8A',
    borderRadius: 12,
  },
  navBtnText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFF',
  },
  navBtnDisabled: {
    opacity: 0.3,
  },
  content: {
    flex: 1,
  }
});
