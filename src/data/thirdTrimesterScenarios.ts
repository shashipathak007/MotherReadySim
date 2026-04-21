import { Scenario } from './firstTrimesterScenarios';

export const THIRD_TRIMESTER_SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "What is a kick count and why is it recommended from the third trimester?",
    titleNe: "किक काउन्ट (Kick Count) भनेको के हो र सातौं महिना लागेपछि यो किन गर्नुपर्छ?",
    description: "Sunita is 30 weeks pregnant. Her doctor says she needs to do a kick count daily.",
    descriptionNe: "सुनिता ३० हप्ताकी गर्भवती छिन्। डाक्टरले उनलाई दिनदिनै बच्चा चलेको गन्न (किक काउन्ट गर्न) भन्नुभएको छ।",
    options: [
      { text: "Counting the steps mother walks", textNe: "आमा कति कदम हिँडिन् गन्ने", isCorrect: false },
      { text: "Counting baby movements (10 in 2 hrs)", textNe: "कम्तीमा २ घण्टामा १० पटक चल्नुपर्छ", isCorrect: true },
      { text: "Counting baby kicks to ribs", textNe: "करङमा कति लात हान्यो गन्ने", isCorrect: false }
    ],
    explanation: "A kick count is a daily at-home check from 28 weeks. A sudden significant reduction in movement is the most important warning sign to report to the doctor.",
    explanationNe: "२८ हप्ता (सात महिना) लागेपछि गर्भवती महिलाले हरेक दिन बच्चा कति चल्छ भनेर ध्यान दिनुपर्छ। यदि बच्चा पहिलेभन्दा एकदमै कम चलेको छ वा चल्नै छोडेको छ भने तुरुन्तै अस्पताल जानुपर्छ।"
  },
  {
    id: 2,
    title: "What is causing the burning sensation in Puja's chest and throat?",
    titleNe: "पूजालाई खाना खाएपछि छाती र घाँटी पोल्ने (अमिलो पानी आउने) किन भइरहेको छ?",
    description: "Puja is 32 weeks pregnant and feels burning in her chest and throat after eating.",
    descriptionNe: "पूजा ३२ हप्ताकी गर्भवती छिन्। उनलाई खाना खानेबित्तिकै छाती ढुस्स हुने र अमिलो पानी आएर घाँटी पोल्ने गर्छ।",
    options: [
      { text: "Having a heart attack", textNe: "हार्ट अट्याकको लक्षण हो", isCorrect: false },
      { text: "Heartburn, uterus pushes stomach up", textNe: "एसिडले हो, पेटले माथि धकेलेर", isCorrect: true },
      { text: "Gestational diabetes sign", textNe: "प्रेग्नेन्सी सुगरको संकेत हो", isCorrect: false }
    ],
    explanation: "Heartburn is extremely common in the third trimester. The growing uterus pushes the stomach upward. Eat smaller meals and stay upright after eating.",
    explanationNe: "गर्भावस्थाको अन्तिमतिर छाती पोल्ने र अमिलो पानी आउने समस्या एकदम धेरैलाई हुन्छ। बच्चा हुर्किँदै जाँदा पेटको भागलाई माथि थिच्छ जसले गर्दा खाएको कुरा पच्न गाह्रो हुन्छ। थोरै-थोरै गरेर खाने र खाएपछि केही बेर नसुती बस्दा राहत मिल्छ।"
  },
  {
    id: 3,
    title: "Why is a head-down position preferred for delivery?",
    titleNe: "सुत्केरी हुने बेला बच्चाको टाउको तल फर्केको हुनु किन राम्रो मानिन्छ?",
    description: "Kamala is 34 weeks pregnant and is told the baby is in a cephalic (head-down) position.",
    descriptionNe: "कमला ३४ हप्ताकी गर्भवती छिन्। डाक्टरले बच्चा सुल्टो (टाउको तल फर्केको) अवस्थामा छ भनेका छन्।",
    options: [
      { text: "Baby has a large head", textNe: "बच्चाको टाउको ठूलो छ", isCorrect: false },
      { text: "Optimal for normal vaginal delivery", textNe: "नर्मल डेलिभरी हुन सजिलो हुन्छ", isCorrect: true },
      { text: "Makes C-section necessary", textNe: "अप्रेसन गर्नैपर्ने हुन्छ", isCorrect: false }
    ],
    explanation: "About 95% of babies are head-down by 36 weeks. The head being first allows the cervix to dilate most effectively.",
    explanationNe: "प्रायजसो (९५%) बच्चाहरू जन्मने बेलासम्म टाउको तलतिर फर्काएर बस्छन्। यसले गर्दा पाठेघरको मुख खुल्न सजिलो हुन्छ र नर्मल डेलिभरी हुन धेरै मद्दत पुग्छ।"
  },
  {
    id: 4,
    title: "What is lightening and what does it mean in late pregnancy?",
    titleNe: "गर्भावस्थाको अन्तिमतिर 'बच्चा तल झरेको वा खसेको' भन्नुको अर्थ के हो?",
    description: "Bindu is 36 weeks pregnant and feels the baby has dropped lower. She can breathe more easily but needs to urinate more often.",
    descriptionNe: "बिन्दु ३६ हप्ताकी गर्भवती छिन्। उनलाई बच्चा अलि तलतिर सरेको जस्तो लाग्छ। अहिले सास फेर्न सजिलो छ तर छिनछिनमा पिसाब लाग्छ।",
    options: [
      { text: "Baby in position for delivery", textNe: "जन्मको लागि सही ठाउँमा आएको हो", isCorrect: true },
      { text: "Baby stopped growing", textNe: "बच्चा बढ्न छोड्यो", isCorrect: false },
      { text: "About to go into labour now", textNe: "एक-दुई घण्टामै व्यथा लाग्छ", isCorrect: false }
    ],
    explanation: "Lightening happens 2–4 weeks before birth in first-time mothers. Less pressure on diaphragm (easier breathing) but more pressure on bladder (frequent urination).",
    explanationNe: "पहिलो पटक सुत्केरी हुनेहरूमा बच्चा जन्मिनुभन्दा २ वा ३ हप्ता अगाडि नै बच्चा यसरी तल सर्छ। तल सर्दा छातीमाथिको दबाब घट्ने हुनाले सास फेर्न सजिलो हुन्छ, तर पिसाब थैलीमा भार पर्ने भएकोले छिनछिनमा पिसाब लाग्छ।"
  },
  {
    id: 5,
    title: "Do any of these methods safely and reliably induce labour?",
    titleNe: "यीमध्ये कुन तरिकाले छिटो र सुरक्षित रूपमा सुत्केरी व्यथा लगाउन मद्दत गर्छ?",
    description: "Rita is 38 weeks pregnant. A family member advises her to eat spicy food, go on long walks, and drink castor oil to bring on labour faster.",
    descriptionNe: "रिता ३८ हप्ताकी गर्भवती छिन्। छिटो व्यथा लागोस् भनेर परिवारका सदस्यहरूले उनलाई पिरो खानेकुरा खान, धेरै बेरसम्म हिँड्न र अरंडीको (क्यास्टर) तेल पिउन भनेका छन्।",
    options: [
      { text: "Medically proven to induce labour", textNe: "डाक्टरले प्रमाणित गरेको सुरक्षित तरिका", isCorrect: false },
      { text: "Unproven, castor oil causes dehydration", textNe: "ग्यारेन्टी छैन, तेलले झाडापखाला लाग्छ", isCorrect: true },
      { text: "Only long walks work", textNe: "धेरै हिँड्दा मात्र काम गर्छ", isCorrect: false }
    ],
    explanation: "Castor oil is potentially harmful. If labour needs medical induction, it should be done by a doctor with appropriate monitoring.",
    explanationNe: "तेल पिउने वा पिरो खानेकुरा खाँदैमा सुत्केरी व्यथा लाग्दैन, बरु उल्टै झाडापखाला लाग्न सक्छ। यदि दिन पुगेर पनि व्यथा लागेन भने डाक्टरको सल्लाह लिएर मात्र अस्पतालमा औषधि दिएर व्यथा लगाउनुपर्छ।"
  },
  {
    id: 6,
    title: "Is GBS in the vagina during pregnancy dangerous for the mother?",
    titleNe: "गर्भवती हुँदा योनीमा देखिने GBS ब्याक्टेरियाले आमा र बच्चालाई कस्तो असर गर्छ?",
    description: "Nirmala is 35 weeks pregnant and is told she has Group B Streptococcus (GBS) bacteria.",
    descriptionNe: "निर्मला ३५ हप्ताकी गर्भवती छिन्। उनको पिसाब वा योनीको जाँच गर्दा GBS ब्याक्टेरिया (किटाणु) देखिएको छ।",
    options: [
      { text: "Must have a C-section", textNe: "अप्रेसन नै गर्नुपर्छ", isCorrect: false },
      { text: "Antibiotics during labour prevent infection", textNe: "व्यथा लाग्दा एन्टिबायोटिक दिए रोकिन्छ", isCorrect: true },
      { text: "Take antibiotics for 6 months", textNe: "६ महिना लगातार एन्टिबायोटिक खाने", isCorrect: false }
    ],
    explanation: "GBS lives harmlessly in 10–30% of women. IV antibiotics during labour prevent transmission to the baby — no C-section needed.",
    explanationNe: "धेरै महिलाहरूको शरीरमा यो ब्याक्टेरिया कुनै हानी नगरी बसेको हुन्छ। सुत्केरी व्यथा लागेको बेला आमालाई स्लाइनबाट एन्टिबायोटिक दिएपछि बच्चालाई इन्फेक्सन हुनबाट पूर्ण रूपमा रोक्न सकिन्छ। यसको लागि अप्रेसन गरिराख्नु पर्दैन।"
  },
  {
    id: 7,
    title: "How often should ANC visits happen in the third trimester?",
    titleNe: "सातौं महिना (तेस्रो त्रैमासिक) लागेपछि गर्भ जाँच (ANC) गराउन कति कति समयमा जानुपर्छ?",
    description: "Gita is 33 weeks pregnant and asks how often she should attend ANC visits in the third trimester.",
    descriptionNe: "गीता ३३ हप्ताकी गर्भवती छिन्। उनलाई अब सुत्केरी नहुन्जेल कति पटक र कति-कति दिनमा फलोअप (जाँच) मा जानुपर्छ भनेर जान्न मन छ।",
    options: [
      { text: "Only once at 36 weeks", textNe: "३६ हप्तामा एक पटक गए पुग्छ", isCorrect: false },
      { text: "Every 4 weeks, then every 1-2 weeks", textNe: "महिना-महिनामा, पछि १-२ हप्तामा जाने", isCorrect: true },
      { text: "Only if something feels wrong", textNe: "पेट दुख्यो भने मात्र जाने", isCorrect: false }
    ],
    explanation: "ANC frequency increases in the third trimester for monitoring blood pressure, fetal position, and growth. Nepal's Aama Programme requires minimum 4 ANC visits.",
    explanationNe: "अन्तिम महिनाहरूमा आमाको प्रेसर बढ्ने र बच्चाको अवस्था फेरिने जोखिम धेरै हुन्छ। त्यसैले यो बेला छिटो-छिटो जाँच गराउनुपर्छ। नेपाल सरकारको नियम अनुसार यातायात खर्च पाउनका लागि पनि गर्भावस्थाभर कम्तीमा ४ पटक अनिवार्य जाँच गराउनुपर्छ।"
  },
  {
    id: 8,
    title: "What is this discharge Anita is noticing?",
    titleNe: "गर्भावस्थाको अन्तिमतिर योनीबाट बाक्लो रगत मिसिएको सिंगान जस्तो पानी (Mucus plug) आउनुको अर्थ के हो?",
    description: "Anita is 37 weeks pregnant. She has been losing small amounts of thick mucus with some blood streaking.",
    descriptionNe: "अनिता ३७ हप्ताकी गर्भवती छिन्। उनलाई एक-दुई दिनदेखि योनीबाट अलिअलि बाक्लो सिंगान जस्तो रगत मिसिएको ढिक्का (Mucus) गइरहेको छ।",
    options: [
      { text: "Active labour, rush to hospital", textNe: "व्यथा सुरु भइसक्यो, अस्पताल जाने", isCorrect: false },
      { text: "Mucus plug releasing, labour soon", textNe: "म्युकस प्लग बाहिर आएको हो, व्यथा लाग्दैछ", isCorrect: true },
      { text: "Vaginal infection", textNe: "योनीमा इन्फेक्सन भएको हो", isCorrect: false }
    ],
    explanation: "The mucus plug seals the cervix throughout pregnancy. Its release is a normal preparatory sign but doesn't mean labour is imminent.",
    explanationNe: "गर्भावस्थाभरि बच्चालाई संक्रमणबाट बचाउन पाठेघरको मुखमा यो बाक्लो खकार जस्तो ढिक्का (Mucus plug) बसेको हुन्छ। अन्त्यतिर पाठेघरको मुख खुल्न थालेपछि यो बाहिर आउँछ। यो सुत्केरी हुने बेला भयो भन्ने राम्रो संकेत हो, तर आजै वा भोलि नै व्यथा लाग्छ भन्ने हुँदैन।"
  },
  {
    id: 9,
    title: "What is the most helpful way to manage anxiety about labour pain?",
    titleNe: "सुत्केरी हुने बेलाको दुखाइ सम्झेर हुने डर र चिन्ता कम गर्ने सबैभन्दा राम्रो तरिका के हो?",
    description: "Sima is 39 weeks pregnant and is feeling very anxious about the pain of labour.",
    descriptionNe: "सिमा ३९ हप्ताकी गर्भवती छिन्। दिन नजिकिंदै गर्दा उनलाई सुत्केरी व्यथाको दुखाइ सम्झेर एकदमै डर लागिरहेको छ।",
    options: [
      { text: "Request C-section to avoid pain", textNe: "दुखाइबाट बच्न सुरुमै अप्रेसन गर्ने", isCorrect: false },
      { text: "Breathing, support, & understanding help", textNe: "सास लिने अभ्यास र साथले डर कम हुन्छ", isCorrect: true },
      { text: "Don't think, hope for the best", textNe: "नसोच्ने, भगवानको भरोसामा बस्ने", isCorrect: false }
    ],
    explanation: "Anxiety actually increases pain perception. Breathing techniques, a calm support person, and understanding the stages of labour are the most effective approaches.",
    explanationNe: "जति धेरै डर मान्यो, त्यति नै धेरै पेट दुख्ने र सुत्केरी हुन गाह्रो हुन्छ। त्यसैले लामो सास तानेर फाल्ने अभ्यास गर्ने, व्यथा लागेको बेला आफूलाई ढाडस दिने मान्छे सँगै राख्ने र व्यथा लाग्दा के-के हुन्छ भनेर पहिले नै बुझिराख्नाले दुखाइ धेरै सहन सकिन्छ।"
  },
  {
    id: 10,
    title: "When should the hospital bag be fully packed and ready?",
    titleNe: "सुत्केरी हुन अस्पताल जाँदा चाहिने झोला कहिलेदेखि तयार पारेर राख्नुपर्छ?",
    description: "Maya is 31 weeks pregnant and wants to know when she should prepare her hospital bag.",
    descriptionNe: "माया ३१ हप्ताकी गर्भवती छिन्। उनी अस्पताल जाँदा लैजानुपर्ने कपडा र सामानहरुको झोला कहिले प्याक गरेर राख्दा ठीक हुन्छ भनेर जान्न चाहन्छिन्।",
    options: [
      { text: "When labour starts, no need earlier", textNe: "व्यथा लागेको दिन हालेर लगे हुन्छ", isCorrect: false },
      { text: "By 36 weeks at the latest", textNe: "ढिलोमा ३६ हप्तासम्ममा तयार राख्नुपर्छ", isCorrect: true },
      { text: "Only if doctor tells you to", textNe: "डाक्टरले भनेपछि मात्र झोला मिलाउने", isCorrect: false }
    ],
    explanation: "The hospital bag should be packed by 36 weeks. About 10% of babies are born before 37 weeks. Having everything ready avoids stress during contractions.",
    explanationNe: "अस्पतालमा चाहिने झोला ८ महिना (३६ हप्ता) सम्ममा ठिक्क पारेर राख्नुपर्छ। कतिपय बच्चाहरू मिति नपुग्दै जन्मिन सक्छन्। व्यथा लागेर अत्तालिएको बेला सामान खोज्न गाह्रो हुने भएकाले पहिले नै सबै कुरा तयार गरेर राख्दा सजिलो हुन्छ।"
  },
  {
    id: 11,
    title: "Why does shortness of breath become more noticeable from the third trimester?",
    titleNe: "गर्भावस्थाको अन्तिम महिनाहरूमा उकालो वा भर्‍याङ चढ्दा किन स्वाँ-स्वाँ हुन्छ वा सास फेर्न गाह्रो हुन्छ?",
    description: "Devi is 28 weeks pregnant and starts to feel shortness of breath when climbing stairs.",
    descriptionNe: "देवी २८ हप्ताकी गर्भवती छिन्। अचेल उनलाई अलिकति भर्‍याङ चढ्दा वा छिटो हिँड्दा सास फेर्न गाह्रो भएर स्वाँ-स्वाँ हुन्छ।",
    options: [
      { text: "Developed asthma from pregnancy", textNe: "प्रेग्नेन्सीमा दमको रोग सुरु भएको हो", isCorrect: false },
      { text: "Uterus pushes diaphragm, lessening lung space", textNe: "पेटले फोक्सो थिचेर हो, यो सामान्य हो", isCorrect: true },
      { text: "Needs more iron intake", textNe: "रगत कम भएर हो, आइरन धेरै खाने", isCorrect: false }
    ],
    explanation: "As the uterus grows, it pushes against the diaphragm reducing lung space. This is normal and improves slightly when the baby drops in the final weeks.",
    explanationNe: "बच्चा हुर्किँदै जाँदा पाठेघरले माथि छातीतिर थिच्छ जसले गर्दा सास फेर्दा फोक्सोमा हावा भरिने ठाउँ कम हुन्छ। यो धेरै गर्भवती महिलालाई हुने कुरा हो र सुत्केरी हुने बेला बच्चा तल झरेपछि यो आफैै कम भएर जान्छ।"
  },
  {
    id: 12,
    title: "Why is the Tdap or TT vaccine recommended during the third trimester?",
    titleNe: "सातौं वा आठौं महिनामा धनुकटंकार वा लहरेखोकीको खोप (Tdap / TT) किन लगाउनुपर्छ?",
    description: "Parbati is 34 weeks pregnant. Her doctor prescribed a Tdap or TT vaccine during this visit.",
    descriptionNe: "पार्बती ३४ हप्ताकी गर्भवती छिन्। डाक्टरले उनलाई यो जाँचमा एउटा खोप (Tdap वा TT) लगाउनु पर्छ भनेका छन्।",
    options: [
      { text: "Protects mother from diseases during birth", textNe: "सुत्केरी हुँदा आमालाई रोग लाग्न दिँदैन", isCorrect: false },
      { text: "Protects baby from whooping cough initially", textNe: "सुरुको महिना बच्चालाई लहरेखोकीबाट बचाउँछ", isCorrect: true },
      { text: "Only for C-section mothers", textNe: "अप्रेसन गर्ने आमालाई मात्र दिइन्छ", isCorrect: false }
    ],
    explanation: "Maternal antibodies pass through the placenta. Newborns are extremely vulnerable to whooping cough until their own vaccination at 6–8 weeks of age.",
    explanationNe: "बच्चा जन्मिसकेपछि सुरुको ६ हप्तासम्म उसले कुनै खोप लगाउन मिल्दैन। यो बेलामा बच्चालाई लहरेखोकी र धनुकटंकार (Tetanus) जस्तो भयानक रोगबाट बचाउन आमालाई नै गर्भमै खोप लगाइन्छ जसले बच्चालाई पनि सुरक्षित राख्छ।"
  },
  {
    id: 13,
    title: "Is swelling that comes and goes daily in the third trimester normal?",
    titleNe: "अन्तिम महिनाहरूमा दिउँसो खुट्टा सुन्निने र बिहान उठ्दा हराउने समस्या सामान्य हो कि रोग हो?",
    description: "Hira is 30 weeks pregnant and her feet and ankles are visibly swollen by evening but the swelling goes away by morning.",
    descriptionNe: "हिरा ३० हप्ताकी गर्भवती छिन्। दिनभरि हिँड्दा वा बस्दा उनको पैताला र खुट्टा निकै सुन्निन्छ, तर रातभर सुतेर बिहान उठ्दा भने त्यो आफैं हराउँछ।",
    options: [
      { text: "Kidney problem sign", textNe: "मिर्गौला खराब भएको लक्षण हो", isCorrect: false },
      { text: "Normal physiological swelling", textNe: "दिनभर उभिएर सुन्निने, यो सामान्य हो", isCorrect: true },
      { text: "Must stop drinking water", textNe: "पानी पिउनै छोड्नुपर्छ", isCorrect: false }
    ],
    explanation: "Daily resolving ankle swelling is completely normal in the third trimester. Warning signs: swelling that doesn't resolve overnight, or sudden facial swelling with headache.",
    explanationNe: "गर्भावस्थामा शरीरमा पानीको मात्रा बढ्ने र पाठेघरले नसाहरू थिच्ने हुँदा दिनभरको थकानपछि बेलुकासम्म खुट्टा सुन्निनु धेरै जसोलाई हुन्छ। खुट्टा माथि राखेर सुत्दा बिहान आफैं हराउँछ भने डराउनु पर्दैन। तर बिहान उठ्दा पनि सुन्निएको कम भएन भने चाहिँ ब्लड प्रेसर बढेको हुन सक्छ, डाक्टरलाई देखाउनुपर्छ।"
  },
  {
    id: 14,
    title: "What is the glucose tolerance test checking for?",
    titleNe: "ग्लुकोज पानी पिएर गरिने सुगर टेस्ट (GTT) किन र कहिले गरिन्छ?",
    description: "Laxmi is 29 weeks pregnant and has been told to have a glucose tolerance test done this week.",
    descriptionNe: "लक्ष्मी २९ हप्ताकी गर्भवती छिन्। डाक्टरले उनलाई अस्पतालमा आएर ग्लुकोज पानी पिएर सुगर जाँच्न (Glucose Tolerance Test) भनेका छन्।",
    options: [
      { text: "Checks if mother likes sweets", textNe: "आमाले गुलियो खाएको हेर्न", isCorrect: false },
      { text: "Tests for gestational diabetes", textNe: "सुगर रोग पत्ता लगाउन जाँचेको हो", isCorrect: true },
      { text: "Checks if baby will be heavy", textNe: "बच्चा मोटो जन्मिन्छ कि हेर्न", isCorrect: false }
    ],
    explanation: "The glucose tolerance test at 24–28 weeks screens for gestational diabetes. If results are high, it's managed with diet, monitoring, walking, and sometimes insulin.",
    explanationNe: "गर्भावस्थाको २४ देखि २८ हप्ताको बीचमा हर्मोनको कारणले आमालाई सुगर देखिन सक्छ। ग्लुकोज पानी पिएर गरिने यो टेस्टले सुगर छ कि छैन भनेर पक्का गर्छ। सुगर देखिहाल्यो भने पनि प्रायः खानेकुरा बार्ने र दैनिक हिँडडुल गरेर यसलाई सजिलै नियन्त्रण गर्न सकिन्छ।"
  },
  {
    id: 15,
    title: "Is it safe to request early induction of labour without a medical reason?",
    titleNe: "कुनै स्वास्थ्य समस्या नहुँदा पनि डाक्टरलाई भनेर 'औषधि दिएर व्यथा लगाइदिनुस् वा अप्रेसन गरिदिनुस्' भन्नु राम्रो हो?",
    description: "Kabita is 38 weeks pregnant and asks whether she should request early induction of labour.",
    descriptionNe: "कबिता ३८ हप्ताकी गर्भवती छिन्। उनी 'धेरै भारी भइसक्यो, अब अस्पताल गएर औषधि लिएर व्यथा लगाउन लगाएर छिट्टै बच्चा जन्माउँछु' भन्दै छिन्।",
    options: [
      { text: "Always safer 1-2 weeks early", textNe: "एक-दुई हप्ता अगाडि जन्माउनु राम्रो", isCorrect: false },
      { text: "Risks baby's lung development if induced early", textNe: "३९ हप्ता अगावै जन्माउँदा फोक्सो राम्ररी विकास हुँदैन", isCorrect: true },
      { text: "Hospitals are less busy earlier", textNe: "जति चाँडो जन्मायो उति राम्रो", isCorrect: false }
    ],
    explanation: "The final weeks are important for lung maturity and weight gain. Elective induction before 39 weeks without medical reason increases NICU risk for the baby.",
    explanationNe: "गर्भावस्थाको अन्तिमका केही हप्ताहरूमा पनि बच्चाको फोक्सो बलियो हुने र तौल बढ्ने काम भइरहेको हुन्छ। डाक्टरले आवश्यकता देखेमा बाहेक आफ्नै मर्जीले औषधि प्रयोग गरेर बच्चा जन्माउँदा बच्चालाई श्वासप्रश्वासमा समस्या आउन सक्छ।"
  },
  {
    id: 16,
    title: "What is the most practical preparation when the husband works away from home?",
    titleNe: "श्रीमान विदेशमा वा घरबाहिर हुँदा सुत्केरी हुने बेलाको लागि कस्तो तयारी गरेर बस्नुपर्छ?",
    description: "Sarita is 32 weeks pregnant and her husband works away from home. She is worried about being alone when labour starts.",
    descriptionNe: "सरिता ३२ हप्ताकी गर्भवती छिन् र उनका श्रीमान कामको सिलसिलामा बाहिर हुनुहुन्छ। एक्कासी व्यथा सुरु भएमा म एक्लै के गर्ने भनेर उनी ज्यादै आत्तिएकी छिन्।",
    options: [
      { text: "Go wait at hospital now", textNe: "अहिलेदेखि अस्पताल गएर बस्ने", isCorrect: false },
      { text: "Have backup person, contacts, and bag ready", textNe: "योजना बनाउने, झोला र एम्बुलेन्स नम्बर तयार राख्ने", isCorrect: true },
      { text: "Tell husband to fly home instantly", textNe: "श्रीमानलाई भोलि नै घर फर्किन भन्ने", isCorrect: false }
    ],
    explanation: "Prepare a clear plan with a specific backup person, emergency contacts on multiple phones, packed bag with location known, and FCHV number visible. Preparation is the best protection.",
    explanationNe: "यस्तो बेला आत्तिनुभन्दा पूर्वतयारी गर्नु सबैभन्दा राम्रो हो। अचानक व्यथा लाग्दा आफूलाई अस्पताल लैजाने मान्छे को हो भनेर पहिले नै टुंगो लगाउने, एम्बुलेन्स र नजिकको स्वास्थ्य चौकीको नम्बर मोबाइलमा सेभ गर्ने र भित्तामा पनि टाँस्ने, अनि अस्पताल लैजाने झोला ढोकाको छेवैमा तयार गरेर राख्नुपर्छ।"
  },
  {
    id: 17,
    title: "Is it normal to still be pregnant at 40 weeks and beyond?",
    titleNe: "डाक्टरले दिएको मिति (४० हप्ता) काटिसक्दा पनि व्यथा लागेन भने के गर्ने?",
    description: "Deepa is 40 weeks pregnant and has not gone into labour yet. Her family is pushing her to go to hospital immediately.",
    descriptionNe: "दीपाको गर्भ ४० हप्ता पुगिसक्यो तर अझै व्यथा लागेको छैन। डाक्टरले दिएको मिति कटेकोले परिवारका सबैजना आत्तिएर तुरुन्तै अस्पताल जानुपर्छ भनिरहेका छन्।",
    options: [
      { text: "Induce instantly exactly at 40 weeks", textNe: "मिति कट्नेबित्तिकै अप्रेसन गरिहाल्ने", isCorrect: false },
      { text: "Due date is estimate, up to 41 weeks is normal", textNe: "४०-४१ हप्तासम्म जानु एकदम सामान्य हो", isCorrect: true },
      { text: "Definitely needs a C-section", textNe: "मिति काटेपछि पक्का अप्रेसन गर्नुपर्छ", isCorrect: false }
    ],
    explanation: "A due date is an estimate, not a deadline. Most babies arrive between 38–42 weeks. Doctors typically discuss induction by 41–42 weeks if labour hasn't started.",
    explanationNe: "भिडियो एक्स-रे ले दिएको मिति एउटा अनुमानित समय मात्र हो। धेरैजसो बच्चाहरू ३८ देखि ४१ हप्ताको बीचमा जन्मिन्छन्। यदि ४१ हप्तासम्म पनि आफैं व्यथा लागेन भने चाहिँ डाक्टरसँग गएर औषधि राखेर व्यथा लगाउने वा के गर्ने भनेर सल्लाह गर्नुपर्छ, तर ४० हप्ता पुग्ने बित्तिकै आत्तिनुपर्दैन।"
  },
  {
    id: 18,
    title: "What is the recommended sleeping position in the third trimester?",
    titleNe: "अन्तिम महिनाहरूमा राति सुत्दा कसरी सुत्नु बच्चाका लागि सबैभन्दा राम्रो मानिन्छ?",
    description: "Rina is 35 weeks pregnant and asks if she should still be sleeping on her back.",
    descriptionNe: "रिना ३५ हप्ताकी गर्भवती छिन्। उनी 'अहिले पेट धेरै ठूलो भइसक्यो, अब उत्तानो परेर सुत्न मिल्छ कि मिल्दैन?' भनेर सोधिरहेकी छिन्।",
    options: [
      { text: "Flat on back with pillow", textNe: "सधैं उत्तानो मात्र सुत्ने", isCorrect: false },
      { text: "Left side improves blood flow", textNe: "देब्रे कोल्टे सुत्दा रगत राम्ररी पुग्छ", isCorrect: true },
      { text: "On stomach with donut pillow", textNe: "घोप्टो परेर सुत्ने", isCorrect: false }
    ],
    explanation: "Left-side sleeping optimises circulation to the placenta. If she wakes on her back, simply roll to the left — no need to panic.",
    explanationNe: "पेट ठूलो भएपछि उत्तानो सुत्दा पाठेघरले शरीरका ठूला नसाहरूलाई थिच्छ र बच्चासम्म रगत राम्ररी पुग्न पाउँदैन। त्यसैले देब्रे (बायाँ) कोल्टे फर्केर सुत्नु सबैभन्दा सुरक्षित हो। तर कहिलेकाहीँ निद्रामा उत्तानो परिएछ भने पनि डराउनु पर्दैन, ब्युँझिने बित्तिकै फेरि कोल्टे परेर सुते हुन्छ।"
  },
  {
    id: 19,
    title: "What is a birth plan and is it useful?",
    titleNe: "सुत्केरी हुने योजना (Birth Plan) भनेको के हो? के यो साँच्चै काम लाग्ने कुरा हो?",
    description: "Mina is 37 weeks pregnant and asks if she should prepare a birth plan.",
    descriptionNe: "मिना ३७ हप्ताकी गर्भवती छिन्। उनले अस्पताल जाँदा 'बर्थ प्लान' (Birth Plan) बनाएर जानुपर्छ भन्ने सुनेकी छिन् र यो भनेको के हो भनेर जान्न चाहन्छिन्।",
    options: [
      { text: "Legal doc forcing doctors", textNe: "डाक्टरलाई बाध्य पार्ने कानुनी कागज हो", isCorrect: false },
      { text: "Notes preferences for delivery room", textNe: "सुत्केरी हुँदा चाहिने सुविधा लेखिएको नोट हो", isCorrect: true },
      { text: "Only wealthy city folks need it", textNe: "धनी मानिसलाई मात्र चाहिने कुरा हो", isCorrect: false }
    ],
    explanation: "A birth plan summarises the mother's preferences for labour. It's not legally binding but improves communication with the healthcare team.",
    explanationNe: "बर्थ प्लान भनेको तपाईंले सुत्केरी हुने बेलामा कस्तो वातावरण चाहनुभएको छ (जस्तै: श्रीमान् सँगै बस्ने कि नबस्ने, दुखाइ कम गर्ने सुई लिने कि नलिने) भनेर अस्पताललाई जानकारी गराउने तरिका हो। यो कुनै कानुनी नियम होइन, तर यसले डाक्टर र नर्सलाई तपाईंलाई सजिलो बनाउन मद्दत गर्छ।"
  },
  {
    id: 20,
    title: "How do nutritional needs change in the third trimester?",
    titleNe: "गर्भावस्थाको अन्तिम ३ महिनामा खानपानमा कस्तो परिवर्तन ल्याउनुपर्छ?",
    description: "Sunita is 28 weeks pregnant and asks what she should eat differently in the third trimester.",
    descriptionNe: "सुनिता २८ हप्ता (सात महिना) की गर्भवती छिन्। अब अन्तिम महिनाहरूमा बच्चाको विकासको लागि के कुरा बढी खानुपर्छ भनेर उनी सोध्दै छिन्।",
    options: [
      { text: "Eat less for smaller baby", textNe: "बच्चा ठूलो होला भनेर एकदम कम खाने", isCorrect: false },
      { text: "Needs calcium, iron, omega-3", textNe: "क्याल्सियम, आइरन र ओमेगा-३ धेरै खाने", isCorrect: true },
      { text: "Stop eating all fats completely", textNe: "चिल्लो खानेकुरा पुरै खान छोड्ने", isCorrect: false }
    ],
    explanation: "The third trimester has the most rapid baby growth. Key focuses: calcium for bones, iron for blood, omega-3 for brain development. Eat balanced nutrient-dense meals.",
    explanationNe: "अन्तिम महिनाहरूमा बच्चा एकदम छिटो हुर्किने भएकाले बढी पोषण चाहिन्छ। बच्चाको हड्डी बलियो बनाउन दूध-दही (क्याल्सियम), रगत बढाउन सागपात र गेडागुडी (आइरन), আৰু दिमागको विकासको लागि ओखर वा माछा (ओमेगा-३) जस्ता खानेकुरा प्रशस्त खानुपर्छ। धेरै पेट भर्नेभन्दा पनि पोषिलो कुरा खान ध्यान दिनुपर्छ।"
  }
];
