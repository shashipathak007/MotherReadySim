import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { useGame } from '../context/GameContext';
import { PregnantWoman } from '../components/GameSVGs';
import Animated, { FadeInUp, FadeOutDown, useSharedValue, useAnimatedStyle, withSequence, withTiming, withRepeat } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const SCENARIOS = [
  {
    id: 1,
    title: "Scenario 1 — Heavy bleeding",
    description: "You are soaking through more than one thick pad in an hour. What do you do?",
    options: [
      { text: "Call 102 and go to hospital immediately", isCorrect: true },
      { text: "Wait and see if it slows down", isCorrect: false },
      { text: "Take a painkiller and rest", isCorrect: false },
    ],
    explanation: "This is postpartum or antepartum haemorrhage. It can become life-threatening within minutes. 102 is free. Do not wait.",
    pose: 'worried'
  },
  {
    id: 2,
    title: "Scenario 2 — Baby not moving",
    description: "You have not felt the baby move for 4 hours. What do you do?",
    options: [
      { text: "Wait until morning and check", isCorrect: false },
      { text: "Drink cold water and wait, then call doctor", isCorrect: false },
      { text: "Go to hospital immediately", isCorrect: true },
    ],
    explanation: "Zero movement for 4+ hours means oxygen or blood supply may be compromised. Every minute matters. Do not wait.",
    pose: 'worried'
  },
  {
    id: 3,
    title: "Scenario 3 — Water broke, green fluid",
    description: "Your water just broke and the fluid is green and has a bad smell. What do you do?",
    options: [
      { text: "This is normal — call doctor in morning", isCorrect: false },
      { text: "Go to hospital immediately", isCorrect: true },
      { text: "Take a shower first then go", isCorrect: false },
    ],
    explanation: "Green fluid means the baby passed meconium. If inhaled at birth it causes a serious lung condition. Every minute counts.",
    pose: 'worried'
  },
  {
    id: 4,
    title: "Scenario 4 — Severe headache & swelling",
    description: "You have a severe headache, blurry vision, and sudden swelling of hands and face.",
    options: [
      { text: "Drink water and rest", isCorrect: false },
      { text: "Go to hospital immediately", isCorrect: true },
      { text: "Monitor for a few hours", isCorrect: false },
    ],
    explanation: "These are classic signs of preeclampsia, which can lead to seizures. Requires immediate medical attention.",
    pose: 'sitting'
  },
  {
    id: 5,
    title: "Scenario 5 — Contractions timing",
    description: "First baby. Contractions are 5 mins apart, lasting 55s, for an hour.",
    options: [
      { text: "Wait until they are 3 mins apart", isCorrect: false },
      { text: "Head to the hospital", isCorrect: true },
      { text: "This is Braxton Hicks — rest", isCorrect: false },
    ],
    explanation: "This is the 5-1-1 rule indicating active labour. Head to the hospital while someone grabs the bag.",
    pose: 'sitting'
  },
  {
    id: 6,
    title: "Scenario 6 — Constant vomiting",
    description: "You have been vomiting constantly for a day and cannot keep any fluids down.",
    options: [
      { text: "Make sure to keep trying to drink water", isCorrect: false },
      { text: "Go to the hospital for IV fluids", isCorrect: true },
      { text: "Wait another day", isCorrect: false },
    ],
    explanation: "Severe dehydration can be dangerous for you and baby. You need IV fluids and medication to prevent malnutrition.",
    pose: 'worried'
  },
  {
    id: 7,
    title: "Scenario 7 — High fever",
    description: "You suddenly develop a high fever (above 38°C / 100.4°F) with chills.",
    options: [
      { text: "Take paracetamol and wait", isCorrect: false },
      { text: "Seek immediate medical help", isCorrect: true },
      { text: "Take a cold bath", isCorrect: false },
    ],
    explanation: "A high fever during pregnancy or postpartum is a strong sign of infection, which can spread quickly.",
    pose: 'worried'
  },
  {
    id: 8,
    title: "Scenario 8 — Pain during urination",
    description: "You feel a sharp, burning pain when urinating, and need to go constantly.",
    options: [
      { text: "Visit a doctor as soon as possible", isCorrect: true },
      { text: "Just drink cranberry juice", isCorrect: false },
      { text: "Ignore it, frequent urination is normal", isCorrect: false },
    ],
    explanation: "While frequent urination is normal, burning pain indicates a UTI. Untreated UTIs can lead to preterm labour.",
    pose: 'sitting'
  },
  {
    id: 9,
    title: "Scenario 9 — Preterm backache",
    description: "You are 30 weeks pregnant and feel a constant, dull, rhythmic backache.",
    options: [
      { text: "Rest, it's normal pregnancy pain", isCorrect: false },
      { text: "Go to the hospital to get checked", isCorrect: true },
      { text: "Get a massage", isCorrect: false },
    ],
    explanation: "A rhythmic backache before 37 weeks can be a sign of preterm labour contractions.",
    pose: 'sitting'
  },
  {
    id: 10,
    title: "Scenario 10 — Extreme fatigue & paleness",
    description: "You feel extremely dizzy, your skin is unusually pale, and you are constantly exhausted.",
    options: [
      { text: "Just sleep more", isCorrect: false },
      { text: "Get evaluated for severe anemia", isCorrect: true },
      { text: "Drink more coffee", isCorrect: false },
    ],
    explanation: "Severe anemia poses an extreme risk during delivery. You need immediate iron therapy or evaluation.",
    pose: 'sitting'
  },
  {
    id: 11,
    title: "Scenario 11 — Flashing lights in vision",
    description: "You suddenly start seeing spots, auras, or flashing lights that won't go away.",
    options: [
      { text: "Rest your eyes in a dark room", isCorrect: false },
      { text: "Rush to the hospital", isCorrect: true },
      { text: "Get new glasses", isCorrect: false },
    ],
    explanation: "Visual disturbances are severe warning signs of progressing preeclampsia and risk of imminent seizure.",
    pose: 'worried'
  },
  {
    id: 12,
    title: "Scenario 12 — Continuous severe abdominal pain",
    description: "You have a constant, severe cutting pain in your belly that does not come and go like a contraction.",
    options: [
      { text: "Go to the emergency room immediately", isCorrect: true },
      { text: "Take a warm bath", isCorrect: false },
      { text: "It's round ligament pain, just wait", isCorrect: false },
    ],
    explanation: "Continuous severe pain could indicate placental abruption (placenta peeling from the wall). Extremely dangerous.",
    pose: 'worried'
  },
  {
    id: 13,
    title: "Scenario 13 — Difficulty breathing",
    description: "You are struggling to catch your breath even while resting or lying down.",
    options: [
      { text: "Propping yourself up with pillows is enough", isCorrect: false },
      { text: "Seek emergency medical care", isCorrect: true },
      { text: "Use an asthma inhaler casually", isCorrect: false },
    ],
    explanation: "Breathlessness at rest is abnormal and can indicate a blood clot in the lung or heart problems.",
    pose: 'worried'
  },
  {
    id: 14,
    title: "Scenario 14 — Severe itching",
    description: "You have intense itching, especially prominently on your palms and the soles of your feet.",
    options: [
      { text: "Apply moisturizing lotion", isCorrect: false },
      { text: "Report to your doctor promptly", isCorrect: true },
      { text: "Change soap", isCorrect: false },
    ],
    explanation: "Severe itching on palms/soles is a signature symptom of cholestasis of pregnancy, a dangerous liver condition.",
    pose: 'sitting'
  },
  {
    id: 15,
    title: "Scenario 15 — Swollen, red, painful calf",
    description: "One of your calves is swollen, red, and feels hot and painful to the touch.",
    options: [
      { text: "Go to the emergency room", isCorrect: true },
      { text: "Massage it deeply", isCorrect: false },
      { text: "Elevate your legs", isCorrect: false },
    ],
    explanation: "This is a sign of Deep Vein Thrombosis (a blood clot in the leg) which can travel to the lungs if massaged or ignored.",
    pose: 'sitting'
  },
  {
    id: 16,
    title: "Scenario 16 — Sudden extreme anxiety",
    description: "You suddenly feel completely confused, restless, or have a feeling of impending doom.",
    options: [
      { text: "It's just hormones", isCorrect: false },
      { text: "Seek immediate medical help", isCorrect: true },
      { text: "Try meditating", isCorrect: false },
    ],
    explanation: "A sudden sense of doom or extreme confusion can precede serious medical events like seizures or hemorrhages.",
    pose: 'worried'
  },
  {
    id: 17,
    title: "Scenario 17 — Early clear fluid leak",
    description: "You feel a constant trickle or a gush of clear fluid from the vagina, but you are only 32 weeks pregnant.",
    options: [
      { text: "Go to the hospital immediately", isCorrect: true },
      { text: "Wear a pad and wait for contractions", isCorrect: false },
      { text: "It's probably just urine", isCorrect: false },
    ],
    explanation: "Premature rupture of membranes leaves the baby highly susceptible to infection and triggers preterm birth.",
    pose: 'worried'
  },
  {
    id: 18,
    title: "Scenario 18 — Foul-smelling discharge",
    description: "Your vaginal discharge suddenly changes color, looks like pus, and smells very bad.",
    options: [
      { text: "Contact your doctor for an exam", isCorrect: true },
      { text: "Use a vaginal douche", isCorrect: false },
      { text: "Ignore it", isCorrect: false },
    ],
    explanation: "Foul-smelling discharge points to a vaginal or uterine infection, which requires antibiotics.",
    pose: 'sitting'
  },
  {
    id: 19,
    title: "Scenario 19 — Seizures or fits",
    description: "You experience a seizure, losing consciousness and convulsing.",
    options: [
      { text: "Get medical emergency service immediately", isCorrect: true },
      { text: "Sleep it off", isCorrect: false },
      { text: "Drink sugar water", isCorrect: false },
    ],
    explanation: "Eclampsia (seizures) is a supreme medical emergency during or directly after pregnancy, requiring immediate stabilization.",
    pose: 'worried'
  },
  {
    id: 20,
    title: "Scenario 20 — Severe persistent heartburn",
    description: "You have severe pain high in your stomach (right side) that doesn't go away with antacids.",
    options: [
      { text: "Eat smaller meals", isCorrect: false },
      { text: "Seek emergency medical help", isCorrect: true },
      { text: "Take more antacids", isCorrect: false },
    ],
    explanation: "Severe upper right quadrant pain is often mistaken for heartburn but is actually liver pain caused by severe preeclampsia or HELLP syndrome.",
    pose: 'sitting'
  }
];

export default function Step4DangerSigns({ onNextStep }: { onNextStep: () => void }) {
  const { addQuizStar, showFeedback } = useGame();
  const [currentScenarioIdx, setCurrentScenarioIdx] = useState(0);
  const [selectedResult, setSelectedResult] = useState<{ isCorrect: boolean, explanation: string } | null>(null);

  const scenario = SCENARIOS[currentScenarioIdx];
  const shakeOffset = useSharedValue(0);

  const handleSelect = (opt: any) => {
    const isCorrect = opt.isCorrect;
    if (isCorrect) {
      addQuizStar();
      showFeedback(`✅ Correct!`, scenario.explanation, 'success');
      setSelectedResult({ isCorrect, explanation: scenario.explanation });
    } else {
      shakeOffset.value = withSequence(
        withTiming(-5, { duration: 50 }),
        withRepeat(withTiming(5, { duration: 50 }), 3, true),
        withTiming(0, { duration: 50 })
      );
      showFeedback(`❌ Not quite right`, scenario.explanation, 'error');
      // We don't set selectedResult here so the user can try again
    }
  };

  const handleNext = () => {
    setSelectedResult(null);
    if (currentScenarioIdx < SCENARIOS.length - 1) {
      setCurrentScenarioIdx(prev => prev + 1);
    } else {
      onNextStep();
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeOffset.value }]
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <ImageBackground source={require('../../../assets/images/bedroom_bg.png')} style={StyleSheet.absoluteFill}>
        <LinearGradient colors={['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.6)']} style={StyleSheet.absoluteFill} />
      </ImageBackground>
      
      {/* Character */}
      <View style={styles.characterContainer}>
        <PregnantWoman pose={scenario.pose as any} />
      </View>

      <View style={styles.scenarioCard}>
        <Text style={styles.scenarioTitle}>{scenario.title}</Text>
        <Text style={styles.scenarioDesc}>{scenario.description}</Text>
        
        <View style={styles.optionsContainer}>
          {!selectedResult ? (
            scenario.options.map((opt, i) => (
              <TouchableOpacity 
                key={i} 
                style={styles.optionBtn} 
                onPress={() => handleSelect(opt)}
                disabled={selectedResult !== null}
              >
                <Text style={styles.optionText}>{opt.text}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <TouchableOpacity 
              style={[styles.btn, selectedResult.isCorrect ? styles.btnCorrect : styles.btnWrong]} 
              onPress={handleNext}
            >
              <Text style={styles.btnText}>
                {currentScenarioIdx === SCENARIOS.length - 1 ? "Finish Simulation" : "Next Scenario"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9FB' },
  topProgress: { position: 'absolute', top: 20, left: 20, backgroundColor: 'rgba(255,255,255,0.95)', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 15, shadowColor: '#B04C8A', shadowOpacity: 0.1, shadowRadius: 5, zIndex: 10 },
  progressText: { fontWeight: '900', fontSize: 13, color: '#B04C8A', textTransform: 'uppercase' },
  characterContainer: { position: 'absolute', top: 100, left: width / 2 - 60 },
  scenarioCard: { position: 'absolute', bottom: 30, left: 20, right: 20, backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 25, padding: 25, shadowColor: '#B04C8A', shadowOpacity: 0.1, shadowRadius: 10, elevation: 10 },
  scenarioTitle: { fontSize: 13, fontWeight: '900', color: '#B04C8A', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 },
  scenarioDesc: { fontSize: 18, fontWeight: '800', color: '#111', marginBottom: 25, lineHeight: 28 },
  optionsContainer: { gap: 12 },
  optionBtn: { padding: 18, backgroundColor: '#FFF', borderRadius: 15, borderWidth: 1, borderColor: '#FADDEB', shadowColor: '#FADDEB', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
  optionText: { fontSize: 16, color: '#333', fontWeight: '800' },
  btn: { paddingVertical: 18, borderRadius: 15, alignItems: 'center' },
  btnCorrect: { backgroundColor: '#B04C8A' },
  btnWrong: { backgroundColor: '#A73C44' },
  btnText: { color: '#FFF', fontSize: 18, fontWeight: '900' }
});
