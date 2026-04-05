import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useGame } from '../context/GameContext';
import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming, withRepeat } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';



const SCENARIOS = [
  {
    id: 1,
    title: "Scenario 1 — Heavy bleeding",
    titleNe: "परिस्थिति १ — अत्यधिक रक्तस्राव",
    description: "You are soaking through more than one thick pad in an hour. What do you do?",
    descriptionNe: "एक घण्टामा एकभन्दा बढी बाक्लो प्याड भिज्दैछ। तपाईं के गर्नुहुन्छ?",
    options: [
      { text: "Call 102 and go to hospital immediately", textNe: "१०२ मा फोन गरेर तुरुन्तै अस्पताल जानुहोस्", isCorrect: true },
      { text: "Wait and see if it slows down", textNe: "रोकिन्छ कि भनेर कुर्नुहोस्", isCorrect: false },
      { text: "Take a painkiller and rest", textNe: "पीडा निवारक औषधि खाएर आराम गर्नुहोस्", isCorrect: false },
    ],
    explanation: "This is postpartum or antepartum haemorrhage. It can become life-threatening within minutes. 102 is free. Do not wait.",
    explanationNe: "यो प्रसवपूर्व वा प्रसवपछिको रक्तस्राव हो। केही मिनेटमा ज्यान जोखिममा पर्न सक्छ। १०२ नि:शुल्क छ। कुर्नुहुँदैन।",
    pose: 'worried'
  },
  {
    id: 2,
    title: "Scenario 2 — Baby not moving",
    titleNe: "परिस्थिति २ — बच्चा चलेको छैन",
    description: "You have not felt the baby move for 4 hours. What do you do?",
    descriptionNe: "४ घण्टादेखि बच्चा चलेको महसुस भएको छैन। तपाईं के गर्नुहुन्छ?",
    options: [
      { text: "Wait until morning and check", textNe: "बिहानसम्म कुरेर हेर्नुहोस्", isCorrect: false },
      { text: "Drink cold water and wait, then call doctor", textNe: "चिसो पानी पिएर कुर्नुहोस्, पछि डक्टरलाई फोन गर्नुहोस्", isCorrect: false },
      { text: "Go to hospital immediately", textNe: "तुरुन्तै अस्पताल जानुहोस्", isCorrect: true },
    ],
    explanation: "Zero movement for 4+ hours means oxygen or blood supply may be compromised. Every minute matters. Do not wait.",
    explanationNe: "४ घण्टाभन्दा बढी समय चाल नहुनु भनेको अक्सिजन वा रगतको आपूर्तिमा समस्या हुन सक्छ। हरेक मिनेट महत्त्वपूर्ण छ।",
    pose: 'worried'
  },
  {
    id: 3,
    title: "Scenario 3 — Water broke, green fluid",
    titleNe: "परिस्थिति ३ — पानी फुट्यो, हरियो पानी",
    description: "Your water just broke and the fluid is green and has a bad smell. What do you do?",
    descriptionNe: "तपाईंको पानी भर्खर फुट्यो र पानी हरियो छ र गन्हाउँछ। तपाईं के गर्नुहुन्छ?",
    options: [
      { text: "This is normal — call doctor in morning", textNe: "यो सामान्य हो — बिहान डक्टरलाई फोन गर्नुहोस्", isCorrect: false },
      { text: "Go to hospital immediately", textNe: "तुरुन्तै अस्पताल जानुहोस्", isCorrect: true },
      { text: "Take a shower first then go", textNe: "पहिले नुहाएर अनि जानुहोस्", isCorrect: false },
    ],
    explanation: "Green fluid means the baby passed meconium. If inhaled at birth it causes a serious lung condition. Every minute counts.",
    explanationNe: "हरियो पानी भनेको बच्चाले पेटभित्रै दिसा गरेको हो। जन्मँदा फोक्सोमा तानेमा गम्भीर समस्या हुन्छ। हरेक मिनेट महत्त्वपूर्ण छ।",
    pose: 'worried'
  },
  {
    id: 4,
    title: "Scenario 4 — Severe headache & swelling",
    titleNe: "परिस्थिति ४ — कडा टाउको दुखाइ र सुन्निनु",
    description: "You have a severe headache, blurry vision, and sudden swelling of hands and face.",
    descriptionNe: "कडा टाउको दुखेको छ, धमिलो देखिन्छ, र अचानक हात र अनुहार सुन्निएको छ।",
    options: [
      { text: "Drink water and rest", textNe: "पानी पिएर आराम गर्नुहोस्", isCorrect: false },
      { text: "Go to hospital immediately", textNe: "तुरुन्तै अस्पताल जानुहोस्", isCorrect: true },
      { text: "Monitor for a few hours", textNe: "केही घण्टा हेर्नुहोस्", isCorrect: false },
    ],
    explanation: "These are classic signs of preeclampsia, which can lead to seizures. Requires immediate medical attention.",
    explanationNe: "यी प्रिएक्लाम्प्सियाका लक्षण हुन्, जसले कम्पन (एक्लाम्प्सिया) ल्याउन सक्छ। तुरुन्तै चिकित्सा आवश्यक छ।",
    pose: 'sitting'
  },
  {
    id: 5,
    title: "Scenario 5 — Contractions timing",
    titleNe: "परिस्थिति ५ — व्यथाको समय",
    description: "First baby. Contractions are 5 mins apart, lasting 55s, for an hour.",
    descriptionNe: "पहिलो बच्चा। व्यथा ५ मिनेटको फरकमा, ५५ सेकेन्ड रहने, लगातार १ घण्टा।",
    options: [
      { text: "Wait until they are 3 mins apart", textNe: "३ मिनेटको फरक नभएसम्म कुर्नुहोस्", isCorrect: false },
      { text: "Head to the hospital", textNe: "अस्पताल जानुहोस्", isCorrect: true },
      { text: "This is Braxton Hicks — rest", textNe: "यो नक्कली व्यथा हो — आराम गर्नुहोस्", isCorrect: false },
    ],
    explanation: "This is the 5-1-1 rule indicating active labour. Head to the hospital while someone grabs the bag.",
    explanationNe: "यो ५-१-१ नियम हो जसले सक्रिय प्रसव भइरहेको संकेत गर्छ। अस्पताल जानुहोस्।",
    pose: 'sitting'
  },
  {
    id: 6,
    title: "Scenario 6 — Constant vomiting",
    titleNe: "परिस्थिति ६ — लगातार बान्ता",
    description: "You have been vomiting constantly for a day and cannot keep any fluids down.",
    descriptionNe: "एक दिनदेखि लगातार बान्ता भइरहेको छ र कुनै पनि तरल पदार्थ पेटमा बस्दैन।",
    options: [
      { text: "Make sure to keep trying to drink water", textNe: "पानी पिउने प्रयास जारी राख्नुहोस्", isCorrect: false },
      { text: "Go to the hospital for IV fluids", textNe: "नसाबाट पानी हाल्न अस्पताल जानुहोस्", isCorrect: true },
      { text: "Wait another day", textNe: "अर्को दिन कुर्नुहोस्", isCorrect: false },
    ],
    explanation: "Severe dehydration can be dangerous for you and baby. You need IV fluids and medication to prevent malnutrition.",
    explanationNe: "गम्भीर निर्जलीकरण तपाईं र बच्चा दुवैको लागि खतरनाक छ। नसाबाट पानी र औषधि आवश्यक छ।",
    pose: 'worried'
  },
  {
    id: 7,
    title: "Scenario 7 — High fever",
    titleNe: "परिस्थिति ७ — उच्च ज्वरो",
    description: "You suddenly develop a high fever (above 38°C / 100.4°F) with chills.",
    descriptionNe: "अचानक कम्पनसहित उच्च ज्वरो (३८°C / १००.४°F भन्दा माथि) आयो।",
    options: [
      { text: "Take paracetamol and wait", textNe: "प्यारासिटामोल खाएर कुर्नुहोस्", isCorrect: false },
      { text: "Seek immediate medical help", textNe: "तुरुन्तै चिकित्सा सहायता लिनुहोस्", isCorrect: true },
      { text: "Take a cold bath", textNe: "चिसो पानीले नुहाउनुहोस्", isCorrect: false },
    ],
    explanation: "A high fever during pregnancy or postpartum is a strong sign of infection, which can spread quickly.",
    explanationNe: "गर्भावस्था वा सुत्केरीपछि उच्च ज्वरो संक्रमणको गम्भीर संकेत हो, जुन चाँडै फैलन सक्छ।",
    pose: 'worried'
  },
  {
    id: 8,
    title: "Scenario 8 — Pain during urination",
    titleNe: "परिस्थिति ८ — पिसाब गर्दा दुखाइ",
    description: "You feel a sharp, burning pain when urinating, and need to go constantly.",
    descriptionNe: "पिसाब गर्दा तीव्र पोल्ने दुखाइ हुन्छ र बारम्बार जानुपर्छ।",
    options: [
      { text: "Visit a doctor as soon as possible", textNe: "सकेसम्म चाँडो डक्टरलाई भेट्नुहोस्", isCorrect: true },
      { text: "Just drink cranberry juice", textNe: "क्र्यानबेरी जुस मात्र पिउनुहोस्", isCorrect: false },
      { text: "Ignore it, frequent urination is normal", textNe: "बेवास्ता गर्नुहोस्, बारम्बार पिसाब लाग्नु सामान्य हो", isCorrect: false },
    ],
    explanation: "While frequent urination is normal, burning pain indicates a UTI. Untreated UTIs can lead to preterm labour.",
    explanationNe: "बारम्बार पिसाब लाग्नु सामान्य भए पनि, पोल्ने दुखाइ पिसाब प्रणालीको संक्रमण (UTI) हो। उपचार नगरेमा समयपूर्व प्रसव हुन सक्छ।",
    pose: 'sitting'
  },
  {
    id: 9,
    title: "Scenario 9 — Preterm backache",
    titleNe: "परिस्थिति ९ — समयपूर्व ढाड दुखाइ",
    description: "You are 30 weeks pregnant and feel a constant, dull, rhythmic backache.",
    descriptionNe: "तपाईं ३० हप्ताको गर्भवती हुनुहुन्छ र लगातार, मन्द, नियमित ढाड दुखाइ महसुस हुँदैछ।",
    options: [
      { text: "Rest, it's normal pregnancy pain", textNe: "आराम गर्नुहोस्, यो सामान्य गर्भावस्थाको दुखाइ हो", isCorrect: false },
      { text: "Go to the hospital to get checked", textNe: "जँचाउन अस्पताल जानुहोस्", isCorrect: true },
      { text: "Get a massage", textNe: "मालिस गराउनुहोस्", isCorrect: false },
    ],
    explanation: "A rhythmic backache before 37 weeks can be a sign of preterm labour contractions.",
    explanationNe: "३७ हप्ता अगाडि नियमित ढाड दुखाइ समयपूर्व प्रसवको संकेत हुन सक्छ।",
    pose: 'sitting'
  },
  {
    id: 10,
    title: "Scenario 10 — Extreme fatigue & paleness",
    titleNe: "परिस्थिति १० — अत्यधिक थकान र फ्याक्कै पर्नु",
    description: "You feel extremely dizzy, your skin is unusually pale, and you are constantly exhausted.",
    descriptionNe: "अत्यधिक रिंगटा लाग्छ, छाला असामान्य रूपमा फ्याक्कै छ, र सधैं थकित हुनुहुन्छ।",
    options: [
      { text: "Just sleep more", textNe: "बढी सुत्नुहोस्", isCorrect: false },
      { text: "Get evaluated for severe anemia", textNe: "गम्भीर रक्तअल्पताको जाँच गराउनुहोस्", isCorrect: true },
      { text: "Drink more coffee", textNe: "बढी कफी पिउनुहोस्", isCorrect: false },
    ],
    explanation: "Severe anemia poses an extreme risk during delivery. You need immediate iron therapy or evaluation.",
    explanationNe: "गम्भीर रक्तअल्पताले प्रसवको बेला अत्यन्त जोखिम पैदा गर्छ। तुरुन्तै फलाम चिकित्सा वा जाँच आवश्यक छ।",
    pose: 'sitting'
  },
  {
    id: 11,
    title: "Scenario 11 — Flashing lights in vision",
    titleNe: "परिस्थिति ११ — आँखामा चम्किने बत्ती देखिनु",
    description: "You suddenly start seeing spots, auras, or flashing lights that won't go away.",
    descriptionNe: "अचानक आँखामा थोप्ला, प्रकाश वा चम्किने बत्ती देखिन्छ जुन हट्दैन।",
    options: [
      { text: "Rest your eyes in a dark room", textNe: "अँध्यारो कोठामा आँखा आराम गर्नुहोस्", isCorrect: false },
      { text: "Rush to the hospital", textNe: "तुरुन्तै अस्पताल दगुर्नुहोस्", isCorrect: true },
      { text: "Get new glasses", textNe: "नयाँ चश्मा बनाउनुहोस्", isCorrect: false },
    ],
    explanation: "Visual disturbances are severe warning signs of progressing preeclampsia and risk of imminent seizure.",
    explanationNe: "दृष्टिमा गडबडी प्रिएक्लाम्प्सिया बढ्दै गएको र कम्पन हुने जोखिमको गम्भीर चेतावनी हो।",
    pose: 'worried'
  },
  {
    id: 12,
    title: "Scenario 12 — Continuous severe abdominal pain",
    titleNe: "परिस्थिति १२ — लगातार कडा पेट दुखाइ",
    description: "You have a constant, severe cutting pain in your belly that does not come and go like a contraction.",
    descriptionNe: "पेटमा लगातार, कडा काट्ने जस्तो दुखाइ छ जुन व्यथाजस्तो आउने जाने होइन।",
    options: [
      { text: "Go to the emergency room immediately", textNe: "तुरुन्तै आकस्मिक विभागमा जानुहोस्", isCorrect: true },
      { text: "Take a warm bath", textNe: "तातो पानीले नुहाउनुहोस्", isCorrect: false },
      { text: "It's round ligament pain, just wait", textNe: "यो लिगामेन्ट दुखाइ हो, कुर्नुहोस्", isCorrect: false },
    ],
    explanation: "Continuous severe pain could indicate placental abruption (placenta peeling from the wall). Extremely dangerous.",
    explanationNe: "लगातार कडा दुखाइ साल छुट्टिएको (Placental Abruption) हुन सक्छ। अत्यन्तै खतरनाक।",
    pose: 'worried'
  },
  {
    id: 13,
    title: "Scenario 13 — Difficulty breathing",
    titleNe: "परिस्थिति १३ — सास फेर्न गाह्रो",
    description: "You are struggling to catch your breath even while resting or lying down.",
    descriptionNe: "आराम गर्दा वा सुत्दा पनि सास फेर्न गाह्रो भइरहेको छ।",
    options: [
      { text: "Propping yourself up with pillows is enough", textNe: "सिरानी राखेर बसे पुग्छ", isCorrect: false },
      { text: "Seek emergency medical care", textNe: "आकस्मिक चिकित्सा लिनुहोस्", isCorrect: true },
      { text: "Use an asthma inhaler casually", textNe: "दम्का इन्हेलर प्रयोग गर्नुहोस्", isCorrect: false },
    ],
    explanation: "Breathlessness at rest is abnormal and can indicate a blood clot in the lung or heart problems.",
    explanationNe: "आराममा सास फेर्न गाह्रो हुनु असामान्य छ। यसले फोक्सोमा रगत जमेको वा मुटुको समस्याको संकेत गर्न सक्छ।",
    pose: 'worried'
  },
  {
    id: 14,
    title: "Scenario 14 — Severe itching",
    titleNe: "परिस्थिति १४ — कडा चिलाउने",
    description: "You have intense itching, especially prominently on your palms and the soles of your feet.",
    descriptionNe: "हत्केलो र पैतालामा विशेष गरी कडा चिलाउँछ।",
    options: [
      { text: "Apply moisturizing lotion", textNe: "मोइस्चराइजर लोसन लगाउनुहोस्", isCorrect: false },
      { text: "Report to your doctor promptly", textNe: "तुरुन्तै आफ्नो डक्टरलाई भन्नुहोस्", isCorrect: true },
      { text: "Change soap", textNe: "साबुन फेर्नुहोस्", isCorrect: false },
    ],
    explanation: "Severe itching on palms/soles is a signature symptom of cholestasis of pregnancy, a dangerous liver condition.",
    explanationNe: "हत्केलो/पैतालामा कडा चिलाउनु गर्भावस्थाको कोलेस्टेसिस (कलेजोको खतरनाक समस्या) को लक्षण हो।",
    pose: 'sitting'
  },
  {
    id: 15,
    title: "Scenario 15 — Swollen, red, painful calf",
    titleNe: "परिस्थिति १५ — सुन्निएको, रातो, दुख्ने पिँडुला",
    description: "One of your calves is swollen, red, and feels hot and painful to the touch.",
    descriptionNe: "एउटा पिँडुला सुन्निएको, रातो र छुँदा तातो र दुख्ने छ।",
    options: [
      { text: "Go to the emergency room", textNe: "आकस्मिक विभागमा जानुहोस्", isCorrect: true },
      { text: "Massage it deeply", textNe: "गहिरो मालिस गर्नुहोस्", isCorrect: false },
      { text: "Elevate your legs", textNe: "खुट्टा माथि राख्नुहोस्", isCorrect: false },
    ],
    explanation: "This is a sign of Deep Vein Thrombosis (a blood clot in the leg) which can travel to the lungs if massaged or ignored.",
    explanationNe: "यो गहिरो नसामा रगत जमेको (DVT) संकेत हो। मालिस गर्दा वा बेवास्ता गर्दा रगतको डल्लो फोक्सोमा पुग्न सक्छ।",
    pose: 'sitting'
  },
  {
    id: 16,
    title: "Scenario 16 — Sudden extreme anxiety",
    titleNe: "परिस्थिति १६ — अचानक अत्यधिक चिन्ता",
    description: "You suddenly feel completely confused, restless, or have a feeling of impending doom.",
    descriptionNe: "अचानक पूर्ण रूपमा अल्मलिनु, बेचैनी, वा केही नराम्रो हुनेछ जस्तो महसुस।",
    options: [
      { text: "It's just hormones", textNe: "हर्मोनको कारण हो", isCorrect: false },
      { text: "Seek immediate medical help", textNe: "तुरुन्तै चिकित्सा सहायता लिनुहोस्", isCorrect: true },
      { text: "Try meditating", textNe: "ध्यान गर्ने प्रयास गर्नुहोस्", isCorrect: false },
    ],
    explanation: "A sudden sense of doom or extreme confusion can precede serious medical events like seizures or hemorrhages.",
    explanationNe: "अचानक अत्यधिक चिन्ता वा अल्मलिनुले कम्पन वा रक्तस्रावजस्ता गम्भीर घटनाको पूर्वसंकेत हुन सक्छ।",
    pose: 'worried'
  },
  {
    id: 17,
    title: "Scenario 17 — Early clear fluid leak",
    titleNe: "परिस्थिति १७ — समयपूर्व पानी बग्नु",
    description: "You feel a constant trickle or a gush of clear fluid from the vagina, but you are only 32 weeks pregnant.",
    descriptionNe: "योनीबाट लगातार थोपा-थोपा वा एकैचोटि स्पष्ट पानी बग्यो, तर तपाईं ३२ हप्ताको गर्भवती मात्र हुनुहुन्छ।",
    options: [
      { text: "Go to the hospital immediately", textNe: "तुरुन्तै अस्पताल जानुहोस्", isCorrect: true },
      { text: "Wear a pad and wait for contractions", textNe: "प्याड लगाएर व्यथा आउने कुर्नुहोस्", isCorrect: false },
      { text: "It's probably just urine", textNe: "यो पिसाब मात्र हो", isCorrect: false },
    ],
    explanation: "Premature rupture of membranes leaves the baby highly susceptible to infection and triggers preterm birth.",
    explanationNe: "समयपूर्व पानी फुट्नुले बच्चालाई संक्रमणको उच्च जोखिम हुन्छ र समयपूर्व प्रसव हुन सक्छ।",
    pose: 'worried'
  },
  {
    id: 18,
    title: "Scenario 18 — Foul-smelling discharge",
    titleNe: "परिस्थिति १८ — गन्हाउने स्राव",
    description: "Your vaginal discharge suddenly changes color, looks like pus, and smells very bad.",
    descriptionNe: "योनीबाट बग्ने स्रावको रङ अचानक बदलियो, पिपजस्तो देखिन्छ र कडा गन्हाउँछ।",
    options: [
      { text: "Contact your doctor for an exam", textNe: "जाँचका लागि डक्टरलाई सम्पर्क गर्नुहोस्", isCorrect: true },
      { text: "Use a vaginal douche", textNe: "योनी सफा गर्ने स्प्रे प्रयोग गर्नुहोस्", isCorrect: false },
      { text: "Ignore it", textNe: "बेवास्ता गर्नुहोस्", isCorrect: false },
    ],
    explanation: "Foul-smelling discharge points to a vaginal or uterine infection, which requires antibiotics.",
    explanationNe: "गन्हाउने स्रावले योनी वा पाठेघरको संक्रमणको संकेत गर्छ, जसका लागि एन्टिबायोटिक्स आवश्यक हुन्छ।",
    pose: 'sitting'
  },
  {
    id: 19,
    title: "Scenario 19 — Seizures or fits",
    titleNe: "परिस्थिति १९ — कम्पन (छारे रोग जस्तो)",
    description: "You experience a seizure, losing consciousness and convulsing.",
    descriptionNe: "तपाईंलाई कम्पन (फिट) आयो, होस हरायो र जीउ काम्यो।",
    options: [
      { text: "Get medical emergency service immediately", textNe: "तुरुन्तै आकस्मिक चिकित्सा सेवा लिनुहोस्", isCorrect: true },
      { text: "Sleep it off", textNe: "सुतेर ठिक हुन्छ", isCorrect: false },
      { text: "Drink sugar water", textNe: "चिनीपानी पिउनुहोस्", isCorrect: false },
    ],
    explanation: "Eclampsia (seizures) is a supreme medical emergency during or directly after pregnancy, requiring immediate stabilization.",
    explanationNe: "एक्लाम्प्सिया (कम्पन) गर्भावस्था वा सुत्केरीपछिको अत्यन्त गम्भीर आकस्मिक अवस्था हो। तुरुन्तै उपचार आवश्यक।",
    pose: 'worried'
  },
  {
    id: 20,
    title: "Scenario 20 — Severe persistent heartburn",
    titleNe: "परिस्थिति २० — कडा लगातार छातीमा जलन",
    description: "You have severe pain high in your stomach (right side) that doesn't go away with antacids.",
    descriptionNe: "पेटको माथिल्लो भागमा (दाहिने तिर) कडा दुखाइ छ जुन एसिडिटीको औषधिले पनि हट्दैन।",
    options: [
      { text: "Eat smaller meals", textNe: "थोरै-थोरै खानुहोस्", isCorrect: false },
      { text: "Seek emergency medical help", textNe: "आकस्मिक चिकित्सा सहायता लिनुहोस्", isCorrect: true },
      { text: "Take more antacids", textNe: "बढी एन्टासिड खानुहोस्", isCorrect: false },
    ],
    explanation: "Severe upper right quadrant pain is often mistaken for heartburn but is actually liver pain caused by severe preeclampsia or HELLP syndrome.",
    explanationNe: "पेटको दाहिने माथिल्लो भागको कडा दुखाइलाई प्रायः छातीको जलन ठानिन्छ तर वास्तवमा यो कलेजोको दुखाइ हो जुन गम्भीर प्रिएक्लाम्प्सिया वा HELLP सिन्ड्रोमले गर्दा हुन्छ।",
    pose: 'sitting'
  }
];

export default function Step4DangerSigns({ onNextStep }: { onNextStep: () => void }) {
  const { addQuizStar, showFeedback, setQuizProgress } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';
  const [currentScenarioIdx, setCurrentScenarioIdx] = useState(0);
  const [selectedResult, setSelectedResult] = useState<{ isCorrect: boolean, explanation: string } | null>(null);

  // Report quiz progress to context so the sub-bar can show it
  React.useEffect(() => {
    setQuizProgress(currentScenarioIdx + 1, SCENARIOS.length);
  }, [currentScenarioIdx]);

  const scenario = SCENARIOS[currentScenarioIdx];
  const shakeOffset = useSharedValue(0);

  const handleSelect = (opt: any) => {
    const isCorrect = opt.isCorrect;
    const explanation = isNe ? scenario.explanationNe : scenario.explanation;
    if (isCorrect) {
      addQuizStar();
      showFeedback(isNe ? 'सही!' : 'Correct!', explanation, 'success');
      setSelectedResult({ isCorrect, explanation });
    } else {
      shakeOffset.value = withSequence(
        withTiming(-5, { duration: 50 }),
        withRepeat(withTiming(5, { duration: 50 }), 3, true),
        withTiming(0, { duration: 50 })
      );
      showFeedback(isNe ? 'ठिक होइन' : 'Not quite right', explanation, 'error');
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
    <Animated.View className="flex-1" style={animatedStyle}>
      {/* Background with subtle blur */}
      <View className="absolute inset-0">
        <ImageBackground 
          source={require('../../../assets/images/bedroom_bg.png')} 
          className="flex-1"
          resizeMode="cover"
          blurRadius={3}
        >
          <LinearGradient 
            colors={['rgba(255,249,251,0.25)', 'rgba(255,245,248,0.45)', 'rgba(255,249,251,0.55)']} 
            className="absolute inset-0" 
          />
        </ImageBackground>
      </View>

      {/* Scenario card at the bottom */}
      <View className="absolute bottom-10 left-4 right-4 bg-white/95 rounded-[22px] p-6 shadow-black shadow-opacity-8 shadow-radius-16 elevation-10 border border-[#F5E1EC]">
        <Text className="text-[12px] font-[800] text-[#9B5983] tracking-[1.5px] uppercase mb-2">{isNe ? scenario.titleNe : scenario.title}</Text>
        <Text className="text-[16px] font-[700] text-[#333] mb-[20px] leading-[24px]">{isNe ? scenario.descriptionNe : scenario.description}</Text>
        
        <View className="gap-2.5">
          {!selectedResult ? (
            scenario.options.map((opt, i) => (
              <TouchableOpacity 
                key={i} 
                className="p-4 bg-[#FFFBFD] rounded-[14px] border-[1.5px] border-[#F5E1EC] shadow-[#F5E1EC] shadow-opacity-10 shadow-radius-4 elevation-2"
                onPress={() => handleSelect(opt)}
                disabled={selectedResult !== null}
                activeOpacity={0.7}
              >
                <Text className="text-[15px] text-[#444] font-[600]">{isNe ? opt.textNe : opt.text}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <TouchableOpacity 
              className={`py-[16px] rounded-[14px] items-center ${selectedResult.isCorrect ? 'bg-[#C06898]' : 'bg-[#C4636E]'}`}
              onPress={handleNext}
              activeOpacity={0.8}
            >
              <Text className="text-white text-[16px] font-[800]">
                {currentScenarioIdx === SCENARIOS.length - 1 
                  ? (isNe ? "सिमुलेसन सकियो" : "Finish Simulation") 
                  : (isNe ? "अर्को परिदृश्य" : "Next Scenario")}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Progress is now shown in the GameContainer sub-bar */}
    </Animated.View>
  );
}



