/// <reference types="nativewind/types" />
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { useGame } from '../context/GameContext';
import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming, withRepeat } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import { useGameAudio } from '../hooks/useGameAudio';



const SCENARIOS = [
  {
    id: 1,
    title: "Scenario 1 — Heavy bleeding",
    titleNe: "प्रश्न १ — धेरै रगत बग्ने",
    description: "You are soaking through more than one thick pad in an hour. What do you do?",
    descriptionNe: "एक घण्टामा एकभन्दा बढी बाक्लो प्याड भिजिरहेको छ। तपाईं के गर्नुहुन्छ?",
    options: [
      { text: "Call 102 and go to hospital immediately", textNe: "१०२ मा फोन गरेर तुरुन्तै अस्पताल जाने", isCorrect: true },
      { text: "Wait and see if it slows down", textNe: "रोकिन्छ कि हेरेर बस्ने", isCorrect: false },
      { text: "Take a painkiller and rest", textNe: "दुखाइको औषधि खाएर आराम गर्ने", isCorrect: false },
    ],
    explanation: "This is postpartum or antepartum haemorrhage. It can become life-threatening within minutes. 102 is free. Do not wait.",
    explanationNe: "यो प्रसवपछि वा प्रसवअघिको रक्तस्राव हो। केही मिनेटमा ज्यान जोखिममा पर्न सक्छ। १०२ निःशुल्क छ — कुर्नु हुँदैन!",
    pose: 'worried'
  },
  {
    id: 2,
    title: "Scenario 2 — Baby not moving",
    titleNe: "प्रश्न २ — बच्चा हल्लिरहेको छैन",
    description: "You have not felt the baby move for 4 hours. What do you do?",
    descriptionNe: "४ घण्टादेखि बच्चा हल्लिएको थाहा भएको छैन। तपाईं के गर्नुहुन्छ?",
    options: [
      { text: "Wait until morning and check", textNe: "बिहानसम्म कुरेर हेर्ने", isCorrect: false },
      { text: "Drink cold water and wait, then call doctor", textNe: "चिसो पानी पिएर कुर्ने, पछि डाक्टरलाई फोन गर्ने", isCorrect: false },
      { text: "Go to hospital immediately", textNe: "तुरुन्तै अस्पताल जाने", isCorrect: true },
    ],
    explanation: "Zero movement for 4+ hours means oxygen or blood supply may be compromised. Every minute matters. Do not wait.",
    explanationNe: "४ घण्टाभन्दा बढी समय बच्चा नहल्लिनु भनेको अक्सिजन वा रगतमा समस्या हुन सक्छ। हरेक मिनेट महत्त्वपूर्ण छ — कुर्नु हुँदैन।",
    pose: 'worried'
  },
  {
    id: 3,
    title: "Scenario 3 — Water broke, green fluid",
    titleNe: "प्रश्न ३ — पानी फुट्यो, हरियो रङको",
    description: "Your water just broke and the fluid is green and has a bad smell. What do you do?",
    descriptionNe: "तपाईंको पानी भर्खर फुट्यो र त्यो हरियो रङको छ अनि गन्हाउँछ। तपाईं के गर्नुहुन्छ?",
    options: [
      { text: "This is normal — call doctor in morning", textNe: "यो सामान्य हो — बिहान डाक्टरलाई फोन गर्ने", isCorrect: false },
      { text: "Go to hospital immediately", textNe: "तुरुन्तै अस्पताल जाने", isCorrect: true },
      { text: "Take a shower first then go", textNe: "पहिले नुहाएर त्यसपछि जाने", isCorrect: false },
    ],
    explanation: "Green fluid means the baby passed meconium. If inhaled at birth it causes a serious lung condition. Every minute counts.",
    explanationNe: "हरियो पानी भनेको बच्चाले पेटभित्रै दिसा गरेको हो। जन्मदा यो फोक्सोमा गयो भने गम्भीर समस्या हुन्छ। हरेक मिनेट महत्त्वपूर्ण छ।",
    pose: 'worried'
  },
  {
    id: 4,
    title: "Scenario 4 — Severe headache & swelling",
    titleNe: "प्रश्न ४ — कडा टाउको दुखाइ र सुन्निने",
    description: "You have a severe headache, blurry vision, and sudden swelling of hands and face.",
    descriptionNe: "कडा टाउको दुखेको छ, आँखा धमिलो देखिन्छ, र अचानक हात-अनुहार सुन्निएको छ।",
    options: [
      { text: "Drink water and rest", textNe: "पानी पिएर आराम गर्ने", isCorrect: false },
      { text: "Go to hospital immediately", textNe: "तुरुन्तै अस्पताल जाने", isCorrect: true },
      { text: "Monitor for a few hours", textNe: "केही घण्टा हेरेर बस्ने", isCorrect: false },
    ],
    explanation: "These are classic signs of preeclampsia, which can lead to seizures. Requires immediate medical attention.",
    explanationNe: "यी प्रिक्लेम्प्सियाका लक्षण हुन् — यसबाट खल्बलाउने (एक्लाम्प्सिया) हुन सक्छ। तुरुन्तै डाक्टर चाहिन्छ।",
    pose: 'sitting'
  },
  {
    id: 5,
    title: "Scenario 5 — Contractions timing",
    titleNe: "प्रश्न ५ — व्यथा लागिरहेको",
    description: "First baby. Contractions are 5 mins apart, lasting 55s, for an hour.",
    descriptionNe: "पहिलो बच्चा। ५ मिनेटको फरकमा व्यथा आउँछ, ५५ सेकेन्ड टिक्छ, १ घण्टादेखि यस्तै छ।",
    options: [
      { text: "Wait until they are 3 mins apart", textNe: "३ मिनेटको फरक नभएसम्म कुर्ने", isCorrect: false },
      { text: "Head to the hospital", textNe: "अस्पताल जाने", isCorrect: true },
      { text: "This is Braxton Hicks — rest", textNe: "यो नक्कली व्यथा हो — आराम गर्ने", isCorrect: false },
    ],
    explanation: "This is the 5-1-1 rule indicating active labour. Head to the hospital while someone grabs the bag.",
    explanationNe: "यो ५-१-१ नियम हो — सक्रिय प्रसव सुरु भएको हो। अस्पताल जानुहोस्, कसैलाई झोला ल्याउन भन्नुहोस्।",
    pose: 'sitting'
  },
  {
    id: 6,
    title: "Scenario 6 — Constant vomiting",
    titleNe: "प्रश्न ६ — लगातार बान्ता हुने",
    description: "You have been vomiting constantly for a day and cannot keep any fluids down.",
    descriptionNe: "एक दिनदेखि लगातार बान्ता भइरहेको छ र पानी पनि पेटमा बस्दैन।",
    options: [
      { text: "Make sure to keep trying to drink water", textNe: "पानी पिउने कोसिस गरिरहने", isCorrect: false },
      { text: "Go to the hospital for IV fluids", textNe: "नसामा पानी चढाउन अस्पताल जाने", isCorrect: true },
      { text: "Wait another day", textNe: "अर्को दिनसम्म कुर्ने", isCorrect: false },
    ],
    explanation: "Severe dehydration can be dangerous for you and baby. You need IV fluids and medication to prevent malnutrition.",
    explanationNe: "शरीरमा पानी कम हुनु तपाईं र बच्चा दुवैलाई खतरनाक छ। नसामा पानी र औषधि चढाउनु जरुरी छ।",
    pose: 'worried'
  },
  {
    id: 7,
    title: "Scenario 7 — High fever",
    titleNe: "प्रश्न ७ — धेरै ज्वरो आउने",
    description: "You suddenly develop a high fever (above 38°C / 100.4°F) with chills.",
    descriptionNe: "अचानक जाडो लागेर कम्पनसहित धेरै ज्वरो (३८°C भन्दा माथि) आयो।",
    options: [
      { text: "Take paracetamol and wait", textNe: "प्यारासिटामोल खाएर कुर्ने", isCorrect: false },
      { text: "Seek immediate medical help", textNe: "तुरुन्तै डाक्टरकहाँ जाने", isCorrect: true },
      { text: "Take a cold bath", textNe: "चिसो पानीले नुहाउने", isCorrect: false },
    ],
    explanation: "A high fever during pregnancy or postpartum is a strong sign of infection, which can spread quickly.",
    explanationNe: "गर्भावस्थामा वा सुत्केरीपछि धेरै ज्वरो आउनु भनेको संक्रमणको संकेत हो — यो छिटो फैलन सक्छ।",
    pose: 'worried'
  },
  {
    id: 8,
    title: "Scenario 8 — Pain during urination",
    titleNe: "प्रश्न ८ — पिसाब गर्दा पोल्ने",
    description: "You feel a sharp, burning pain when urinating, and need to go constantly.",
    descriptionNe: "पिसाब गर्दा पोल्ने जस्तो दुख्छ र बारम्बार जानुपर्छ।",
    options: [
      { text: "Visit a doctor as soon as possible", textNe: "सकेसम्म चाँडो डाक्टरकहाँ जाने", isCorrect: true },
      { text: "Just drink cranberry juice", textNe: "जुस मात्र पिउने", isCorrect: false },
      { text: "Ignore it, frequent urination is normal", textNe: "बेवास्ता गर्ने — बारम्बार पिसाब लाग्नु सामान्य हो", isCorrect: false },
    ],
    explanation: "While frequent urination is normal, burning pain indicates a UTI. Untreated UTIs can lead to preterm labour.",
    explanationNe: "बारम्बार पिसाब लाग्नु सामान्य हो तर पोल्ने दुखाइ भने पिसाब संक्रमण (UTI) हो। उपचार नगरे समयभन्दा अगाडि नै बच्चा जन्मन सक्छ।",
    pose: 'sitting'
  },
  {
    id: 9,
    title: "Scenario 9 — Preterm backache",
    titleNe: "प्रश्न ९ — समय नपुग्दै ढाड दुख्ने",
    description: "You are 30 weeks pregnant and feel a constant, dull, rhythmic backache.",
    descriptionNe: "तपाईं ३० हप्ताकी गर्भवती हुनुहुन्छ र लगातार नियमित ढाड दुखिरहेको छ।",
    options: [
      { text: "Rest, it's normal pregnancy pain", textNe: "आराम गर्ने — गर्भावस्थामा यस्तो सामान्य हो", isCorrect: false },
      { text: "Go to the hospital to get checked", textNe: "जाँच गराउन अस्पताल जाने", isCorrect: true },
      { text: "Get a massage", textNe: "मालिस गराउने", isCorrect: false },
    ],
    explanation: "A rhythmic backache before 37 weeks can be a sign of preterm labour contractions.",
    explanationNe: "३७ हप्ता नपुग्दै नियमित ढाड दुखाइ समयभन्दा अगाडि प्रसव हुने संकेत हुन सक्छ।",
    pose: 'sitting'
  },
  {
    id: 10,
    title: "Scenario 10 — Extreme fatigue & paleness",
    titleNe: "प्रश्न १० — धेरै थकान र शरीर सेतो हुने",
    description: "You feel extremely dizzy, your skin is unusually pale, and you are constantly exhausted.",
    descriptionNe: "धेरै रिंगटा लाग्छ, शरीर फ्याक्कै छ, र सधैं थकान लाग्छ।",
    options: [
      { text: "Just sleep more", textNe: "बढी सुत्ने", isCorrect: false },
      { text: "Get evaluated for severe anemia", textNe: "रगत कमीको जाँच गराउने", isCorrect: true },
      { text: "Drink more coffee", textNe: "बढी कफी पिउने", isCorrect: false },
    ],
    explanation: "Severe anemia poses an extreme risk during delivery. You need immediate iron therapy or evaluation.",
    explanationNe: "धेरै रगत कमी भएमा बच्चा जन्माउँदा ठूलो जोखिम हुन्छ। तुरुन्तै फलामको औषधि वा जाँच गराउनु जरुरी छ।",
    pose: 'sitting'
  },
  {
    id: 11,
    title: "Scenario 11 — Flashing lights in vision",
    titleNe: "प्रश्न ११ — आँखामा चम्किने देखिने",
    description: "You suddenly start seeing spots, auras, or flashing lights that won't go away.",
    descriptionNe: "अचानक आँखामा थोप्ला-थोप्ला वा चम्किने बत्ती देखिन्छ जुन हट्दैन।",
    options: [
      { text: "Rest your eyes in a dark room", textNe: "अँध्यारो कोठामा आँखा आराम गर्ने", isCorrect: false },
      { text: "Rush to the hospital", textNe: "तुरुन्तै अस्पताल जाने", isCorrect: true },
      { text: "Get new glasses", textNe: "नयाँ चश्मा बनाउने", isCorrect: false },
    ],
    explanation: "Visual disturbances are severe warning signs of progressing preeclampsia and risk of imminent seizure.",
    explanationNe: "आँखामा यस्तो देखिनु प्रिक्लेम्प्सिया बढ्दै गएको गम्भीर चेतावनी हो — कम्पन आउन सक्छ।",
    pose: 'worried'
  },
  {
    id: 12,
    title: "Scenario 12 — Continuous severe abdominal pain",
    titleNe: "प्रश्न १२ — लगातार कडा पेट दुख्ने",
    description: "You have a constant, severe cutting pain in your belly that does not come and go like a contraction.",
    descriptionNe: "पेटमा लगातार कडा काट्ने जस्तो दुख्छ — व्यथाजस्तो आउने-जाने होइन।",
    options: [
      { text: "Go to the emergency room immediately", textNe: "तुरुन्तै इमर्जेन्सीमा जाने", isCorrect: true },
      { text: "Take a warm bath", textNe: "तातो पानीले नुहाउने", isCorrect: false },
      { text: "It's round ligament pain, just wait", textNe: "यो सामान्य दुखाइ हो, कुर्ने", isCorrect: false },
    ],
    explanation: "Continuous severe pain could indicate placental abruption (placenta peeling from the wall). Extremely dangerous.",
    explanationNe: "लगातार कडा दुखाइ साल छुट्टिएको (Placental Abruption) हुन सक्छ — अत्यन्त खतरनाक!",
    pose: 'worried'
  },
  {
    id: 13,
    title: "Scenario 13 — Difficulty breathing",
    titleNe: "प्रश्न १३ — सास फेर्न गाह्रो",
    description: "You are struggling to catch your breath even while resting or lying down.",
    descriptionNe: "आराम गर्दा वा सुत्दा पनि सास फेर्न गाह्रो भइरहेको छ।",
    options: [
      { text: "Propping yourself up with pillows is enough", textNe: "सिरानी राखेर बसे पुग्छ", isCorrect: false },
      { text: "Seek emergency medical care", textNe: "तुरुन्तै डाक्टरकहाँ जाने", isCorrect: true },
      { text: "Use an asthma inhaler casually", textNe: "दमको इन्हेलर प्रयोग गर्ने", isCorrect: false },
    ],
    explanation: "Breathlessness at rest is abnormal and can indicate a blood clot in the lung or heart problems.",
    explanationNe: "आराम गर्दा सास फेर्न गाह्रो हुनु सामान्य होइन — फोक्सोमा रगत जमेको वा मुटुको समस्या हुन सक्छ।",
    pose: 'worried'
  },
  {
    id: 14,
    title: "Scenario 14 — Severe itching",
    titleNe: "प्रश्न १४ — धेरै चिलाउने",
    description: "You have intense itching, especially prominently on your palms and the soles of your feet.",
    descriptionNe: "हत्केलो र पैतालामा धेरै नै चिलाउँछ।",
    options: [
      { text: "Apply moisturizing lotion", textNe: "क्रिम लगाउने", isCorrect: false },
      { text: "Report to your doctor promptly", textNe: "तुरुन्तै डाक्टरलाई भन्ने", isCorrect: true },
      { text: "Change soap", textNe: "साबुन फेर्ने", isCorrect: false },
    ],
    explanation: "Severe itching on palms/soles is a signature symptom of cholestasis of pregnancy, a dangerous liver condition.",
    explanationNe: "हत्केलो र पैतालामा धेरै चिलाउनु कलेजोको समस्या (कोलेस्टेसिस) को लक्षण हो — यो खतरनाक हुन सक्छ।",
    pose: 'sitting'
  },
  {
    id: 15,
    title: "Scenario 15 — Swollen, red, painful calf",
    titleNe: "प्रश्न १५ — खुट्टा सुन्निने, रातो र दुख्ने",
    description: "One of your calves is swollen, red, and feels hot and painful to the touch.",
    descriptionNe: "एउटा पिँडुला सुन्निएको, रातो छ र छुँदा तातो र दुख्छ।",
    options: [
      { text: "Go to the emergency room", textNe: "इमर्जेन्सीमा जाने", isCorrect: true },
      { text: "Massage it deeply", textNe: "गहिरो मालिस गर्ने", isCorrect: false },
      { text: "Elevate your legs", textNe: "खुट्टा माथि राख्ने", isCorrect: false },
    ],
    explanation: "This is a sign of Deep Vein Thrombosis (a blood clot in the leg) which can travel to the lungs if massaged or ignored.",
    explanationNe: "यो नसामा रगत जमेको (DVT) संकेत हो। मालिस गर्दा वा बेवास्ता गर्दा रगतको डल्लो फोक्सोमा पुग्न सक्छ।",
    pose: 'sitting'
  },
  {
    id: 16,
    title: "Scenario 16 — Sudden extreme anxiety",
    titleNe: "प्रश्न १६ — अचानक धेरै डर र चिन्ता",
    description: "You suddenly feel completely confused, restless, or have a feeling of impending doom.",
    descriptionNe: "अचानक धेरै अल्मलिने, बेचैनी, वा केही नराम्रो हुने जस्तो लाग्छ।",
    options: [
      { text: "It's just hormones", textNe: "हर्मोनको कारण हो", isCorrect: false },
      { text: "Seek immediate medical help", textNe: "तुरुन्तै डाक्टरकहाँ जाने", isCorrect: true },
      { text: "Try meditating", textNe: "ध्यान गर्ने कोसिस गर्ने", isCorrect: false },
    ],
    explanation: "A sudden sense of doom or extreme confusion can precede serious medical events like seizures or hemorrhages.",
    explanationNe: "अचानक यस्तो डर वा अल्मल लाग्नु कम्पन वा रक्तस्रावजस्ता गम्भीर समस्याको पूर्वसंकेत हुन सक्छ।",
    pose: 'worried'
  },
  {
    id: 17,
    title: "Scenario 17 — Early clear fluid leak",
    titleNe: "प्रश्न १७ — समय नपुग्दै पानी बग्ने",
    description: "You feel a constant trickle or a gush of clear fluid from the vagina, but you are only 32 weeks pregnant.",
    descriptionNe: "योनीबाट थोपा-थोपा वा एकैचोटि पानी बग्यो, तर तपाईं ३२ हप्ताकी गर्भवती मात्र हुनुहुन्छ।",
    options: [
      { text: "Go to the hospital immediately", textNe: "तुरुन्तै अस्पताल जाने", isCorrect: true },
      { text: "Wear a pad and wait for contractions", textNe: "प्याड लगाएर व्यथा आउने कुर्ने", isCorrect: false },
      { text: "It's probably just urine", textNe: "यो पिसाब मात्र होला", isCorrect: false },
    ],
    explanation: "Premature rupture of membranes leaves the baby highly susceptible to infection and triggers preterm birth.",
    explanationNe: "समय नपुग्दै पानी फुट्नुले बच्चालाई संक्रमणको खतरा हुन्छ र समयभन्दा अगाडि बच्चा जन्मन सक्छ।",
    pose: 'worried'
  },
  {
    id: 18,
    title: "Scenario 18 — Foul-smelling discharge",
    titleNe: "प्रश्न १८ — गन्हाउने स्राव",
    description: "Your vaginal discharge suddenly changes color, looks like pus, and smells very bad.",
    descriptionNe: "योनीबाट बग्ने स्रावको रङ अचानक बदलियो, पिपजस्तो देखिन्छ र धेरै गन्हाउँछ।",
    options: [
      { text: "Contact your doctor for an exam", textNe: "जाँच गराउन डाक्टरलाई भन्ने", isCorrect: true },
      { text: "Use a vaginal douche", textNe: "सफा गर्ने स्प्रे प्रयोग गर्ने", isCorrect: false },
      { text: "Ignore it", textNe: "बेवास्ता गर्ने", isCorrect: false },
    ],
    explanation: "Foul-smelling discharge points to a vaginal or uterine infection, which requires antibiotics.",
    explanationNe: "गन्हाउने स्राव संक्रमणको संकेत हो — एन्टिबायोटिक्स औषधि चाहिन्छ।",
    pose: 'sitting'
  },
  {
    id: 19,
    title: "Scenario 19 — Seizures or fits",
    titleNe: "प्रश्न १९ — कम्पन (फिट) आउने",
    description: "You experience a seizure, losing consciousness and convulsing.",
    descriptionNe: "तपाईंलाई कम्पन (फिट) आयो, होस हरायो र जीउ काम्यो।",
    options: [
      { text: "Get medical emergency service immediately", textNe: "तुरुन्तै इमर्जेन्सी सेवा बोलाउने", isCorrect: true },
      { text: "Sleep it off", textNe: "सुतेर ठिक हुन्छ", isCorrect: false },
      { text: "Drink sugar water", textNe: "चिनीपानी पिउने", isCorrect: false },
    ],
    explanation: "Eclampsia (seizures) is a supreme medical emergency during or directly after pregnancy, requiring immediate stabilization.",
    explanationNe: "एक्लाम्प्सिया (कम्पन) गर्भावस्था वा सुत्केरीपछिको अत्यन्त गम्भीर अवस्था हो — तुरुन्तै उपचार चाहिन्छ!",
    pose: 'worried'
  },
  {
    id: 20,
    title: "Scenario 20 — Severe persistent heartburn",
    titleNe: "प्रश्न २० — पेटको माथिल्लो भाग दुख्ने",
    description: "You have severe pain high in your stomach (right side) that doesn't go away with antacids.",
    descriptionNe: "पेटको माथिल्लो भाग (दाहिने तिर) धेरै दुख्छ र एसिडिटीको औषधिले पनि हट्दैन।",
    options: [
      { text: "Eat smaller meals", textNe: "थोरै-थोरै खाने", isCorrect: false },
      { text: "Seek emergency medical help", textNe: "तुरुन्तै डाक्टरकहाँ जाने", isCorrect: true },
      { text: "Take more antacids", textNe: "बढी एसिडिटीको औषधि खाने", isCorrect: false },
    ],
    explanation: "Severe upper right quadrant pain is often mistaken for heartburn but is actually liver pain caused by severe preeclampsia or HELLP syndrome.",
    explanationNe: "दाहिने माथिल्लो पेट दुखाइलाई छातीको जलन ठान्ने गरिन्छ तर यो कलेजोको दुखाइ हो — गम्भीर प्रिक्लेम्प्सिया वा HELLP सिन्ड्रोमको संकेत।",
    pose: 'sitting'
  }
];

export default function Step4DangerSigns({ onNextStep }: { onNextStep: () => void }) {
  const { addQuizStar, showFeedback, setQuizProgress } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';
  const { playCorrect, playIncorrect } = useGameAudio();
  const [currentScenarioIdx, setCurrentScenarioIdx] = useState(0);
  const [selectedResult, setSelectedResult] = useState<{ isCorrect: boolean, explanation: string } | null>(null);

  // Report quiz progress to context so the sub-bar can show it
  React.useEffect(() => {
    setQuizProgress(currentScenarioIdx + 1, SCENARIOS.length);
  }, [currentScenarioIdx]);

  const scenario = SCENARIOS[currentScenarioIdx];
  const shakeOffset = useSharedValue(0);
  const hasAnswered = React.useRef(false);

  const handleSelect = (opt: any) => {
    if (hasAnswered.current) return;
    hasAnswered.current = true;
    
    if (selectedResult) return; // Fix double tap executing twice
    const isCorrect = opt.isCorrect;
    const explanation = isNe ? scenario.explanationNe : scenario.explanation;
    if (isCorrect) {
      addQuizStar();
      playCorrect();
      showFeedback(isNe ? scenario.titleNe : scenario.title, explanation, 'success');
      setSelectedResult({ isCorrect, explanation });
    } else {
      playIncorrect();
      shakeOffset.value = withSequence(
        withTiming(-5, { duration: 50 }),
        withRepeat(withTiming(5, { duration: 50 }), 3, true),
        withTiming(0, { duration: 50 })
      );
      showFeedback(isNe ? scenario.titleNe : scenario.title, explanation, 'error');
    }
  };

  const handleNext = () => {
    setSelectedResult(null);
    hasAnswered.current = false;
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
      {/* Scenario card at the bottom */}
      <View
        className="absolute bottom-10 left-4 right-4 bg-white/95 rounded-[22px] p-6 shadow-black shadow-opacity-8 shadow-radius-16 elevation-10 border border-[#F5E1EC]"
        style={{ zIndex: 50 }}
      >
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
                  ? (isNe ? "खेल सकियो" : "Finish Simulation")
                  : (isNe ? "अर्को प्रश्न" : "Next Scenario")}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Progress is now shown in the GameContainer sub-bar */}
    </Animated.View>
  );
}



