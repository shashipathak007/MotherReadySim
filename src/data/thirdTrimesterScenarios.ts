import { Scenario } from './firstTrimesterScenarios';

export const THIRD_TRIMESTER_SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "What is a kick count and why is it recommended from the third trimester?",
    titleNe: "किक काउन्ट (Kick Count) भनेको के हो र सातौं महिना लागेपछि यो किन गर्नुपर्छ?",
    description: "Sunita is 30 weeks pregnant. Her doctor says she needs to do a kick count daily.",
    descriptionNe: "सुनिता ३० हप्ताकी गर्भवती छिन्। डाक्टरले उनलाई दिनदिनै बच्चा चलेको गन्न (किक काउन्ट गर्न) भन्नुभएको छ।",
    options: [
      { text: "Counting the steps mother walks", textNe: "आमा दिनभरिमा कति कदम हिँडिन् गन्ने", isCorrect: false },
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
      { text: "Having a heart attack", textNe: "यो हार्ट अट्याकको लक्षण हो", isCorrect: false },
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
      { text: "Baby has a large head", textNe: "बच्चाको टाउको ठूलो भएर हो", isCorrect: false },
      { text: "Optimal for normal vaginal delivery", textNe: "यसले नर्मल डेलिभरी हुन सजिलो हुन्छ", isCorrect: true },
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
      { text: "Medically proven to induce labour", textNe: "यो डाक्टरले प्रमाणित गरेको सुरक्षित तरिका हो", isCorrect: false },
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
      { text: "Must have a C-section", textNe: "यस्तो बेला अप्रेसन नै गर्नुपर्छ", isCorrect: false },
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
      { text: "Active labour, rush to hospital", textNe: "व्यथा सुरु भइसक्यो, तुरुन्तै अस्पताल जाने", isCorrect: false },
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
      { text: "Request C-section to avoid pain", textNe: "दुखाइबाट बच्न डाक्टरलाई अप्रेसन गर्न लगाउने", isCorrect: false },
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
      { text: "When labour starts, no need earlier", textNe: "व्यथा लागेको दिन झोलामा हालेर लगे हुन्छ", isCorrect: false },
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
      { text: "Developed asthma from pregnancy", textNe: "प्रेग्नेन्सीमा दमको रोग सुरु भएर हो", isCorrect: false },
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
      { text: "Protects mother from diseases during birth", textNe: "यसले सुत्केरी हुँदा आमालाई रोग लाग्न दिँदैन", isCorrect: false },
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
      { text: "Kidney problem sign", textNe: "यो मिर्गौला (किड्नी) खराब भएको लक्षण हो", isCorrect: false },
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
      { text: "Checks if mother likes sweets", textNe: "आमालाई गुलियो कत्तिको पच्छ भनेर हेर्न", isCorrect: false },
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
      { text: "Go wait at hospital now", textNe: "अहिलेदेखि नै अस्पताल गएर बस्ने", isCorrect: false },
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
      { text: "Induce instantly exactly at 40 weeks", textNe: "मिति कट्नेबित्तिकै तुरुन्तै अप्रेसन गरिहाल्ने", isCorrect: false },
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
      { text: "Flat on back with pillow", textNe: "सिरानी राखेर सधैं उत्तानो मात्र सुत्ने", isCorrect: false },
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
      { text: "Legal doc forcing doctors", textNe: "यो डाक्टरलाई नियम मान्न बाध्य पार्ने कानुनी कागज हो", isCorrect: false },
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
  },
  {
    id: 21,
    title: "Sunita's baby has not moved much today at 32 weeks — what should she do?",
    titleNe: "३२ हप्तामा आज बच्चा पहिलेभन्दा कम चल्यो — यस्तोमा के गर्ने?",
    description: "Sunita is 32 weeks pregnant and noticed her baby has been unusually quiet all day.",
    descriptionNe: "सुनिता ३२ हप्ताकी गर्भवती छिन्। आज उनलाई बच्चा पहिलेभन्दा धेरै कम चलेको जस्तो लागेको छ।",
    options: [
      { text: "Wait until tomorrow to check", textNe: "आज वास्ता नगर्ने, भोलिसम्म पर्खिने", isCorrect: false },
      { text: "Eat something sweet, lie down, count movements", textNe: "केही गुलियो खाएर कोल्टे फेरेर पल्टिने र हल्चल गन्ने", isCorrect: true },
      { text: "Baby is just sleeping, ignore it", textNe: "बच्चा सुतेको मात्र हुन सक्छ, केही गर्नु पर्दैन", isCorrect: false }
    ],
    explanation: "If movement feels reduced, eat something sweet, lie on your left side for an hour and count movements. If fewer than 10 movements in 2 hours, go to hospital immediately. Do not wait overnight.",
    explanationNe: "बच्चाको हल्चल कम लाग्यो भने केही गुलियो खाने, देब्रे कोल्टे परेर एक घण्टा सुत्ने र हल्चल गन्ने। यदि २ घण्टामा १० पटकभन्दा कम चल्यो भने तुरुन्तै अस्पताल जानुपर्छ। भोलिसम्म कुरेर बस्नु खतरनाक हुन सक्छ।"
  },
  {
    id: 22,
    title: "Is it normal to feel very tired again in the third trimester?",
    titleNe: "तेस्रो त्रैमासिकमा फेरि धेरै थकाइ लाग्न थाल्नु सामान्य हो?",
    description: "Puja is 30 weeks pregnant and feels as tired as she did in the first trimester.",
    descriptionNe: "पूजा ३० हप्ताकी गर्भवती छिन्। उनलाई पहिलो महिनाहरूमा जस्तै फेरि धेरै थकाइ लाग्न थालेको छ।",
    options: [
      { text: "She must be anaemic again", textNe: "रगत कम भएको हुनसक्छ, तुरुन्त जचाउने", isCorrect: false },
      { text: "Normal — baby's weight increases fatigue", textNe: "सामान्य हो — बच्चाको तौल र शारीरिक परिवर्तनले थकाइ बढाउँछ", isCorrect: true },
      { text: "Sign of early labour starting", textNe: "यो समयभन्दा अगाडि नै सुत्केरी व्यथा सुरु हुने संकेत हो", isCorrect: false }
    ],
    explanation: "Third-trimester fatigue returns because of the baby's increasing weight, disrupted sleep, frequent urination at night, and the physical demands on the body. Rest whenever possible.",
    explanationNe: "बच्चाको तौल बढ्नु, राति पटक-पटक पिसाब लाग्नु र राम्ररी निद्रा नपर्नुले तेस्रो त्रैमासिकमा फेरि थकाइ लाग्नु सामान्य हो। शरीरलाई आवश्यक परेको बेला आराम गर्नु नै सबैभन्दा राम्रो उपाय हो।"
  },
  {
    id: 23,
    title: "Kamala has been having trouble sleeping at 34 weeks — what helps?",
    titleNe: "३४ हप्तामा निद्रा लाग्न गाह्रो भइरहेको छ — के गर्दा आराम मिल्छ?",
    description: "Kamala is 34 weeks pregnant and cannot sleep well due to discomfort and frequent urination.",
    descriptionNe: "कमला ३४ हप्ताकी गर्भवती छिन्। पेट ठूलो भएर असजिलो हुने र छिनछिनमा पिसाब लाग्ने भएकाले उनलाई निद्रा परिरहेको छैन।",
    options: [
      { text: "Take sleeping tablets", textNe: "निद्रा लाग्ने औषधि (Sleeping Tablets) खाने", isCorrect: false },
      { text: "Pillow between knees, less water at night", textNe: "गोडाको बीचमा सिरानी राख्ने र राति पानी कम पिउने", isCorrect: true },
      { text: "Sleep sitting upright in a chair", textNe: "कुर्सीमा बसेर मात्र सुत्ने", isCorrect: false }
    ],
    explanation: "Placing a pillow between the knees and under the belly relieves pressure. Reducing fluids 2 hours before bed cuts night-time toilet trips. Sleeping tablets are unsafe in pregnancy.",
    explanationNe: "सुत्ने बेला गोडाको बीचमा र पेटमुनि सिरानी राख्दा शरीरलाई सजिलो हुन्छ। सुत्नुभन्दा २ घण्टा अघिदेखि पानी कम पिउँदा राति पिसाब लाग्ने क्रम घट्छ। गर्भावस्थामा जथाभाबी निद्राको औषधि खानु हुँदैन।"
  },
  {
    id: 24,
    title: "Bindu's mother says she must eat papaya seeds to prepare the birth canal — true?",
    titleNe: "मेवाको बीउ खाँदा सुत्केरी हुन सजिलो हुन्छ भन्ने कुरा साँचो हो?",
    description: "Bindu is 36 weeks pregnant and her mother advises eating papaya seeds to 'open the birth canal'.",
    descriptionNe: "बिन्दु ३६ हप्ताकी गर्भवती छिन्। उनकी आमाले 'मेवाको बीउ खाँदा सुत्केरीको बाटो खुल्छ' भन्दै खान सल्लाह दिइरहनुभएको छ।",
    options: [
      { text: "True — traditional remedy works", textNe: "साँचो हो — यो पुरानो र प्रभावकारी घरेलु उपाय हो", isCorrect: false },
      { text: "No evidence, and can cause uterine contractions early", textNe: "यसको कुनै प्रमाण छैन, बरु समय नपुगी व्यथा लाग्न सक्छ", isCorrect: true },
      { text: "Totally safe, eat freely", textNe: "एकदम सुरक्षित छ, जति खाए पनि हुन्छ", isCorrect: false }
    ],
    explanation: "Papaya seeds contain compounds that can trigger uterine contractions and are not scientifically proven to help delivery. There is a risk of premature labour. No food 'opens the birth canal' — it opens through natural hormonal processes.",
    explanationNe: "मेवाको बीउले पाठेघर खुम्च्याउने काम गर्न सक्छ, जसले गर्दा समय नपुगी व्यथा लाग्ने डर हुन्छ। कुनै पनि खानेकुराले सुत्केरीको बाटो खोल्ने होइन, यो शरीरको प्राकृतिक प्रक्रिया र हर्मोनको कारण आफैँ खुल्ने कुरा हो।"
  },
  {
    id: 25,
    title: "Nirmala leaks a small amount of urine when she laughs or sneezes — embarrassing?",
    titleNe: "हाँस्दा वा छिँक्दा थोरै पिसाब चुहिन्छ — के यो कुनै रोग हो?",
    description: "Nirmala is 33 weeks pregnant and sometimes leaks urine when sneezing or coughing.",
    descriptionNe: "निर्मला ३३ हप्ताकी गर्भवती छिन्। उनलाई छिँक्दा वा हाँस्दा कहिलेकाहीँ थोरै पिसाब चुहिने समस्या हुन थालेको छ।",
    options: [
      { text: "Bladder has ruptured", textNe: "पिसाब थैली फुटेको वा फुस्किएको संकेत हो", isCorrect: false },
      { text: "Stress incontinence, Kegel exercises help", textNe: "यो सामान्य हो, केगेल (Kegel) व्यायामले सुधार हुन्छ", isCorrect: true },
      { text: "Must stop drinking water completely", textNe: "पिसाब रोक्न पानी पिउनै बन्द गर्नुपर्छ", isCorrect: false }
    ],
    explanation: "Stress incontinence affects up to 50% of pregnant women. The baby's weight presses on the bladder. Kegel exercises strengthen the pelvic floor and reduce leakage significantly.",
    explanationNe: "गर्भावस्थामा बच्चाको तौलले पिसाब थैलीमा दबाब दिने हुँदा यस्तो हुनु सामान्य हो। यसलाई कम गर्न 'केगेल व्यायाम' (पिसाब रोक्ने मांसपेशी कडा पार्ने र छोड्ने अभ्यास) गर्दा धेरै राहत मिल्छ।"
  },
  {
    id: 26,
    title: "Should Rita stay in the hospital from 38 weeks to wait for labour?",
    titleNe: "३८ हप्ता पुगेपछि व्यथा लाग्नु अघि नै अस्पतालमा भर्ना भएर बस्नुपर्छ?",
    description: "Rita is 38 weeks pregnant and lives 2 hours from the hospital. Her family wants her to move to the hospital now.",
    descriptionNe: "रिता ३८ हप्ताकी गर्भवती छिन् र उनको घर अस्पतालबाट २ घण्टा टाढा छ। परिवारले उनलाई अहिल्यै अस्पतालमा भर्ना हुन भनिरहेका छन्।",
    options: [
      { text: "Yes, admit at 38 weeks for safety", textNe: "हो, सुरक्षाका लागि ३८ हप्तामै भर्ना हुनुपर्छ", isCorrect: false },
      { text: "Stay nearby and have a clear transport plan", textNe: "अस्पताल नजिकै बस्ने र यातायातको योजना तयार राख्ने", isCorrect: true },
      { text: "Hospitals do not accept early admissions", textNe: "व्यथा नलागी अस्पतालले भर्ना लिँदैन", isCorrect: false }
    ],
    explanation: "Hospitals are not a place to wait for labour. The best plan for remote areas is to move close to the hospital after 37 weeks — stay with a relative, or at a waiting home if available — and have emergency transport identified.",
    explanationNe: "व्यथा नलागी अस्पतालमा भर्ना हुनु आवश्यक छैन। घर टाढा छ भने ३७ हप्तापछि अस्पतालको नजिक पर्ने आफन्तको घर वा प्रतीक्षालयमा बस्नु र एम्बुलेन्स वा यातायातको साधन तयारी अवस्थामा राख्नु सबैभन्दा राम्रो उपाय हो।"
  },
  {
    id: 27,
    title: "Is it safe to continue working in the office at 35 weeks?",
    titleNe: "३५ हप्तामा अफिस गएर काम गर्न सुरक्षित हुन्छ?",
    description: "Gita is 35 weeks pregnant and still going to office every day.",
    descriptionNe: "गीता ३५ हप्ताकी गर्भवती छिन् र उनी अझै पनि दिनहुँ अफिस गइरहेकी छिन्।",
    options: [
      { text: "Must stop working from 28 weeks", textNe: "२८ हप्ता पुगेपछि काम गर्न पूरै बन्द गर्नुपर्छ", isCorrect: false },
      { text: "Safe for desk jobs; listen to body", textNe: "बसेर गर्ने काम सुरक्षित हुन्छ; शरीरलाई बढी थकाइ लाग्न नदिने", isCorrect: true },
      { text: "Only work from home is allowed", textNe: "घरबाट मात्र काम गर्न मिल्छ, अफिस जानु हुँदैन", isCorrect: false }
    ],
    explanation: "Desk jobs are safe well into late pregnancy. Most women in Nepal's Maternity Protection law are entitled to maternity leave from 2 weeks before delivery. Taking leave earlier is fine if the body needs it.",
    explanationNe: "बसेर गरिने सामान्य कामहरू अन्तिम महिनासम्म पनि गर्न सकिन्छ। नेपालको कानुन अनुसार सुत्केरी हुनुभन्दा २ हप्ता अघिदेखि बिदा लिन पाइन्छ। तर यदि धेरै थकाइ लाग्ने वा गाह्रो हुने भएमा पहिले नै बिदा लिनु राम्रो हुन्छ।"
  },
  {
    id: 28,
    title: "Anita has been told her baby is big at 36 weeks — will she need a C-section?",
    titleNe: "३६ हप्तामा बच्चा ठूलो छ भनिएको छ — के अब अप्रेसन नै गर्नुपर्छ?",
    description: "Anita is 36 weeks pregnant and the ultrasound estimates a larger than average baby.",
    descriptionNe: "अनिता ३६ हप्ताकी गर्भवती छिन् र भिडियो एक्सरेमा बच्चाको तौल सामान्यभन्दा बढी देखिएको छ।",
    options: [
      { text: "All big babies need C-section", textNe: "बच्चा ठूलो भएपछि सधैँ अप्रेसन (C-Section) नै गर्नुपर्छ", isCorrect: false },
      { text: "Scan estimates can be off — doctor decides", textNe: "भिडियो एक्सरेको तौल सधैँ सही हुँदैन — डाक्टरको सल्लाह मान्ने", isCorrect: true },
      { text: "Eat less to shrink the baby", textNe: "बच्चाको तौल घटाउन आमाले खाना कम खाने", isCorrect: false }
    ],
    explanation: "Ultrasound weight estimates in late pregnancy can be off by 10–20%. A big scan measurement alone does not determine the delivery method. The doctor assesses the mother's pelvis, baby's position, and health together.",
    explanationNe: "भिडियो एक्सरेले देखाउने तौल वास्तविकभन्दा १०-२०% तलमाथि हुन सक्छ। बच्चाको आकार मात्र हेरेर अप्रेसन गर्ने निर्णय गरिँदैन; आमाको स्वास्थ्य, बच्चा बस्ने तरिका र अरु कुराहरू विचार गरेर डाक्टरले निर्णय गर्नुहुन्छ।"
  },
  {
    id: 29,
    title: "Why is skin-to-skin contact important immediately after birth?",
    titleNe: "बच्चा जन्मिएपछि तुरुन्तै आमाको छातीमा टाँसेर राख्नु किन जरुरी छ?",
    description: "Sima is 38 weeks pregnant and wants to know what skin-to-skin contact means and why it matters.",
    descriptionNe: "सिमा ३८ हप्ताकी गर्भवती छिन्। उनी 'स्किन-टु-स्किन कन्ट्याक्ट' भनेको के हो र यो किन गरिन्छ भनेर जान्न चाहन्छिन्।",
    options: [
      { text: "Only for C-section babies", textNe: "यो अप्रेसन गरेर जन्मिएका बच्चाहरूका लागि मात्र हो", isCorrect: false },
      { text: "Regulates baby's temperature and starts bonding", textNe: "यसले बच्चाको तापक्रम मिलाउँछ र आमासँग सामीप्य बढाउँछ", isCorrect: true },
      {text: "Harmful if mother had pain relief", isCorrect: false,textNe: 'आमाले दुखाइ कम गर्ने औषधि वा सुई लगाएको भए यो हानिकारक हुन्छ'}
    ],
    explanation: "Immediate skin-to-skin contact keeps the newborn warm, stabilises heart rate and breathing, triggers oxytocin for bonding, and encourages the first breastfeed. It is recommended for all births.",
    explanationNe: "जन्मिनेबित्तिकै आमाको नाङ्गो छातीमा बच्चालाई राख्दा उसको तापक्रम र मुटुको गति स्थिर हुन्छ। यसले आमा र बच्चाको सम्बन्ध बलियो बनाउनुका साथै स्तनपान सुरु गर्न पनि सजिलो बनाउँछ।"
  },
  {
    id: 30,
    title: "Parbati is 39 weeks and losing yellowish fluid — is this normal discharge or water breaking?",
    titleNe: "३९ हप्तामा हल्का पहेँलो पानी बगिरहेको छ — यो सामान्य हो कि खतराको संकेत?",
    description: "Parbati is 39 weeks pregnant and has noticed fluid leaking that smells slightly sweet.",
    descriptionNe: "पार्वती ३९ हप्ताकी गर्भवती छिन्। उनलाई अलिअलि गुलियो गन्ध आउने पहेँलो पानी बगेको जस्तो लागेको छ।",
    options: [
      { text: "Normal vaginal discharge, ignore it", textNe: "यो सामान्य सेतो पानी हो, केही गर्नु पर्दैन", isCorrect: false },
      { text: "Could be amniotic fluid — call doctor immediately", textNe: "यो पानीको थैली फुटेको हुन सक्छ — तुरुन्त अस्पताल जाने", isCorrect: true },
      { text: "Only urgent if bright red", textNe: "पानी रातो रङ्गको भएमा मात्र अस्पताल जाने", isCorrect: false }
    ],
    explanation: "Amniotic fluid is typically clear to slightly yellowish with a sweet smell — different from urine or discharge. Any suspected water breaking requires immediate medical evaluation regardless of contractions.",
    explanationNe: "पानीको थैली फुटेपछि आउने पानी सफा वा हल्का पहेँलो र अलि गुलियो गन्धको हुन्छ। व्यथा लागे पनि नलागे पनि, यस्तो पानी बगेको शंका लागेमा तुरुन्तै डाक्टर वा अस्पतालमा सम्पर्क गर्नुपर्छ।"
  },
  {
    id: 31,
    title: "Hira's mother-in-law says she must shave the belly area before going to hospital — is that true?",
    titleNe: "सासूले अस्पताल जानुअगाडि पेट र तल्लो भागको रौं काट्नुपर्छ भन्नुहुन्छ — के यो सही हो?",
    description: "Hira is 37 weeks pregnant and her mother-in-law says she must shave her belly and pubic area before going to hospital.",
    descriptionNe: "हिरा ३७ हप्ताकी गर्भवती छिन्। उनकी सासूले 'अस्पताल जानुअगाडि पेट र तल्लो भागको रौं सफा गर्नुपर्छ' भनिरहनुभएको छ।",
    options: [
      { text: "Yes, always required before delivery", textNe: "हो, सुत्केरी हुनुअघि यो अनिवार्य छ", isCorrect: false },
      { text: "Not required — hospital will advise if needed", textNe: "पर्दैन — अस्पताल पुगेपछि आवश्यक परे नर्स वा डाक्टरले आफैँ भन्नुहुन्छ", isCorrect: true },
      { text: "Only for C-section, not normal delivery", textNe: "अप्रेसन गर्ने हो भने मात्र गर्नुपर्छ", isCorrect: false }
    ],
    explanation: "Routine shaving before delivery is no longer recommended by modern guidelines. If needed for a C-section, hospital staff will handle it. Shaving at home can cause small cuts that increase infection risk.",
    explanationNe: "आधुनिक चिकित्सा पद्धति अनुसार घरमै रौं काट्नु जरुरी छैन। यदि अप्रेसन (C-Section) गर्नुपर्ने भएमा अस्पतालका कर्मचारीले सुरक्षित तरिकाले गरिदिन्छन्। घरमा आफैँले काट्दा सानो चोट लाग्न सक्छ, जसले इन्फेक्सनको जोखिम बढाउँछ।"
  },
  {
    id: 32,
    title: "Devi is 36 weeks and asked about group B strep test — what is it?",
    titleNe: "३६ हप्तामा GBS टेस्ट गर्न भनिएको छ — यो के हो?",
    description: "Devi is 36 weeks pregnant and her doctor recommends a Group B Strep swab test.",
    descriptionNe: "देवी ३६ हप्ताकी गर्भवती छिन्। डाक्टरले उनलाई GBS को लागि स्वाब टेस्ट (Swab Test) गर्न सल्लाह दिएका छन्।",
    options: [
      { text: "Tests for sexually transmitted infection", textNe: "यो यौन रोग लागेको छ कि छैन भनेर गरिने जाँच हो", isCorrect: false },
      { text: "Checks for bacteria that can infect newborn during birth", textNe: "जन्मने बेला बच्चालाई सङ्क्रमण गराउन सक्ने किटाणु जाँच्न गरिने टेस्ट हो", isCorrect: true },
      { text: "It is only done in city hospitals", textNe: "यो सहरका ठूला अस्पतालमा मात्र गरिने जाँच हो", isCorrect: false }
    ],
    explanation: "GBS is a bacteria that lives harmlessly in 10–30% of women. If present, IV antibiotics during labour protect the baby completely. The test is a simple painless vaginal swab.",
    explanationNe: "GBS एउटा यस्तो किटाणु हो जुन १०-३०% स्वस्थ महिलाको शरीरमा पनि हुन सक्छ। यदि यो देखियो भने, सुत्केरी व्यथा लागेको बेला आमालाई एन्टिबायोटिक दिएर बच्चालाई सङ्क्रमण हुनबाट जोगाइन्छ। यो एक साधारण र दुखाइरहित जाँच हो।"
  },
  {
    id: 33,
    title: "Rina's neighbour says watching birth videos will increase fear — is this true?",
    titleNe: "सुत्केरी हुने भिडियो हेर्दा डर बढ्छ भन्छन् — के साँचो हो?",
    description: "Rina is 37 weeks pregnant and is deciding whether to watch childbirth videos to prepare.",
    descriptionNe: "रिना ३७ हप्ताकी गर्भवती छिन्। उनी सुत्केरी हुने प्रक्रिया बुझ्नका लागि भिडियो हेर्ने कि नहेर्ने भन्ने दोधारमा छिन्।",
    options: [
      { text: "Always makes fear worse", textNe: "भिडियो हेर्दा सधैँ डर बढ्छ, त्यसैले नहेर्नु नै राम्रो", isCorrect: false },
      { text: "Positive birth videos reduce fear", textNe: "सकारात्मक र जानकारीमूलक भिडियोले डर कम गर्न मद्दत गर्छ", isCorrect: true },
      { text: "Only watch medical textbook content", textNe: "मेडिकल कलेजमा पढाइने खालका जटिल भिडियो मात्र हेर्ने", isCorrect: false }
    ],
    explanation: "Watching positive, calm birth videos and reading about the stages of labour reduces fear by replacing unknown anxiety with understanding. Avoid dramatised painful hospital shows.",
    explanationNe: "सुत्केरी हुने बेला के-के हुन्छ भनेर पहिले नै बुझ्दा मनको डर हट्छ। तर चिच्याएको वा दुखाइ मात्र देखाइएका नाटकीय भिडियोभन्दा डाक्टरले सिकाएका वा सकारात्मक अनुभव भएका भिडियो हेर्नु राम्रो हुन्छ।"
  },
  {
    id: 34,
    title: "Can Sarita take a hot bath at 35 weeks to ease backache?",
    titleNe: "३५ हप्तामा ढाडको दुखाइ कम गर्न धेरै तातो पानीले नुहाउन मिल्छ?",
    description: "Sarita is 35 weeks pregnant and wants to soak in a hot bath for her backache.",
    descriptionNe: "सरिता ३५ हप्ताकी गर्भवती छिन्। ढाड दुखेको कम गर्न उनलाई धेरै तातो पानीमा नुहाउन मन लागेको छ।",
    options: [
      { text: "Hot baths are perfectly safe", textNe: "तातो पानीले नुहाउनु एकदमै सुरक्षित हुन्छ", isCorrect: false },
      { text: "Warm (not hot) bath is fine; avoid overheating", textNe: "मन्द न्यानो पानीले नुहाउन मिल्छ; तर पानी धेरै तातो हुनुहुँदैन", isCorrect: true },
      { text: "No baths allowed after 30 weeks", textNe: "३० हप्ता पुगेपछि नुहाउन बन्द गर्नुपर्छ", isCorrect: false }
    ],
    explanation: "A warm bath relieves backache and is safe. A very hot bath (above 38–39°C) can raise core body temperature and cause dizziness, especially at late stage. Lukewarm water is ideal.",
    explanationNe: "मन्द न्यानो पानीले नुहाउँदा मांसपेशीलाई आराम मिल्छ र ढाडको दुखाइ कम हुन्छ। तर ज्यादै तातो पानीले शरीरको तापक्रम बढाउनुका साथै चक्कर लाग्ने समस्या हुन सक्छ, जुन अन्तिम महिनामा जोखिमपूर्ण हुन्छ। ठिक्कको मनतातो पानी सबैभन्दा राम्रो हो।"
  },
  {
    id: 35,
    title: "Deepa hears colostrum is bad and she should discard the first milk — is this right?",
    titleNe: "पहिलो बिगौती दूध (खिर) बच्चालाई नदिई फ्याँक्नुपर्छ भन्छन् — के यो सही हो?",
    description: "Deepa is 38 weeks pregnant. Her mother-in-law says to throw away the first yellow milk as it is dirty.",
    descriptionNe: "दीपा ३८ हप्ताकी गर्भवती छिन्। उनलाई सासूले 'सुरुको पहेँलो दूध फोहोर हुन्छ, त्यसैले फ्याँक्नुपर्छ' भनिरहनुभएको छ।",
    options: [
      { text: "Yes, it looks dirty so discard it", textNe: "हो, यो पहेँलो र फोहोर देखिन्छ, त्यसैले नदिने", isCorrect: false },
      { text: "No — colostrum is 'liquid gold', most important feed", textNe: "होइन — यो 'तरल सुन' जस्तै मूल्यवान् छ, बच्चालाई खुवाउनै पर्छ", isCorrect: true },
      { text: "Only give if baby is hungry after 3 days", textNe: "बच्चा जन्मिएको ३ दिनपछि मात्र दूध खुवाउन सुरु गर्ने", isCorrect: false }
    ],
    explanation: "Colostrum is the most nutrient-dense substance a baby can receive. It is packed with antibodies, proteins, and growth factors. The yellow colour is from beta-carotene. It must never be discarded.",
    explanationNe: "सुरुको पहेँलो दूध (Colostrum) बच्चाका लागि पहिलो खोप जस्तै हो। यसमा रोगसँग लड्ने शक्ति (Antibodies) र पौष्टिक तत्वहरू प्रशस्त हुन्छन्। यो पहेँलो देखिनुको कारण यसमा भएको भिटामिन हो — यसलाई कहिल्यै नफ्याँक्नुहोस्।"
  },
  {
    id: 36,
    title: "Is it safe to use a hot water bottle on the belly for pain relief at 31 weeks?",
    titleNe: "३१ हप्तामा पेट दुखेको बेला तातो पानीको थैली (Hot Bottle) पेटमा राख्न मिल्छ?",
    description: "Laxmi is 31 weeks pregnant and sometimes places a hot water bottle on her belly for comfort.",
    descriptionNe: "लक्ष्मी ३१ हप्ताकी गर्भवती छिन्। उनी पेट दुखाइमा आराम पाउन तातो पानीको थैली वा बोतल पेटमा राख्छिन्।",
    options: [
      { text: "Safe at any heat for as long as needed", textNe: "जति धेरै तातो भए पनि र जति बेरसम्म राखे पनि हुन्छ", isCorrect: false },
      { text: "Warm is fine; avoid direct intense heat on belly", textNe: "ठिक्कको न्यानो ठिक छ; तर सिधै पेटमा ज्यादै तातो नराख्ने", isCorrect: true },
      { text: "Only safe on lower back, never belly", textNe: "यो ढाडमा मात्र राख्न मिल्छ, पेटमा राख्नै हुँदैन", isCorrect: false }
    ],
    explanation: "A warm (not very hot) water bottle on the lower back or belly is safe for short periods. Avoid placing very hot objects directly on the belly for long periods as it can overheat the baby.",
    explanationNe: "हल्का मनतातो पानीको थैली छोटो समयका लागि पेट वा ढाडमा राख्दा केही हुँदैन। तर धेरै तातो कुरा लामो समयसम्म पेटमा राख्दा बच्चालाई असर पर्न सक्छ, त्यसैले सावधानी अपनाउनुपर्छ।"
  },
  {
    id: 37,
    title: "Parbati's family says she must not eat eggs near delivery time — true?",
    titleNe: "सुत्केरी हुने समय नजिकिँदा अण्डा खानु हुँदैन भन्छन् — के यो साँचो हो?",
    description: "Parbati is 37 weeks pregnant. Her elder family members say eggs cause a 'slippery' baby and should be avoided.",
    descriptionNe: "पार्वती ३७ हप्ताकी गर्भवती छिन्। उनलाई घरका ठूलाले 'अण्डा खाँदा बच्चा चिप्लो हुन्छ, सुत्केरी बेला गाह्रो हुन्छ' भन्दै खान रोकेका छन्।",
    options: [
      { text: "True, eggs are harmful near delivery", textNe: "साँचो हो, सुत्केरी हुने समय नजिकिँदा अण्डा नखानु नै राम्रो", isCorrect: false },
      { text: "False — eggs are excellent protein for mother and baby", textNe: "गलत हो — अण्डा आमा र बच्चा दुवैका लागि प्रोटिनको राम्रो स्रोत हो", isCorrect: true },
      { text: "Only raw eggs are dangerous", textNe: "काँचो अण्डा मात्र खान नहुने हो, पाकेको खानु हुँदैन", isCorrect: false }
    ],
    explanation: "Eggs have no effect on delivery. They are one of the best protein sources and contain choline, which is vital for baby's brain development. Cooked eggs are perfectly safe throughout pregnancy.",
    explanationNe: "अण्डा खाँदा सुत्केरी हुन गाह्रो हुन्छ भन्ने कुरा केवल भ्रम मात्र हो। अण्डामा बच्चाको दिमागको विकासका लागि चाहिने 'कोलिन' र प्रोटिन प्रशस्त हुन्छ। राम्ररी पकाएको अण्डा गर्भावस्थाको अन्तिम दिनसम्म पनि खान सकिन्छ।"
  },
  {
    id: 38,
    title: "Gita is 40 weeks and still pregnant — how can she cope with the waiting?",
    titleNe: "४० हप्ता पुग्दा पनि बच्चा जन्मिएन — यो पर्खाइमा के गर्ने?",
    description: "Gita is 40 weeks pregnant. Everyone keeps asking when the baby is coming and she feels stressed.",
    descriptionNe: "गीताको गर्भावस्था ४० हप्ता पुगिसक्यो। सबैले 'बच्चा कहिले जन्मिन्छ' भनेर सोधिरहेकाले उनलाई तनाव भइरहेको छ।",
    options: [
      { text: "Stress will force the baby out", textNe: "तनाव लिँदा बच्चा छिटो जन्मिन मद्दत पुग्छ", isCorrect: false },
      { text: "Rest, light walks, stay connected to doctor", textNe: "आराम गर्ने, हल्का हिँड्ने र डाक्टरको सम्पर्कमा रहने", isCorrect: true },
      { text: "Go to hospital and demand induction", textNe: "अस्पताल गएर जबर्जस्ती व्यथा लगाउन लगाउने", isCorrect: false }
    ],
    explanation: "Waiting beyond the due date is very common and normal until 41–42 weeks. Light walks, restful activities, and staying connected to your health provider for monitoring is the best approach.",
    explanationNe: "तोकिएको मिति कटेर केही दिन ढिला हुनु सामान्य हो। धेरैजसो बच्चा ४१ हप्तासम्म जन्मिन्छन्। यस्तो बेला आत्तिनुभन्दा मन शान्त राख्ने, हल्का हिँडडुल गर्ने र नियमित रूपमा डाक्टरलाई जचाउनु पर्छ।"
  },
  {
    id: 39,
    title: "What warning signs mean Rina must go to hospital immediately at 32 weeks?",
    titleNe: "३२ हप्तामा कुन-कुन लक्षण देखिएमा तुरुन्तै अस्पताल जानुपर्छ?",
    description: "Rina is 32 weeks pregnant and wants to know which symptoms require urgent hospital care.",
    descriptionNe: "रिना ३२ हप्ताकी गर्भवती छिन्। उनले कुन-कुन खतराका संकेतहरू देखिएमा तुरुन्त अस्पताल जानुपर्छ भनेर जान्न चाहन्छिन्।",
    options: [
      { text: "Only when contractions are 5 mins apart", textNe: "व्यथा ५-५ मिनेटको फरकमा लाग्दा मात्र जाने", isCorrect: false },
      { text: "Heavy bleeding, severe headache, baby not moving, water breaking", textNe: "रगत बग्ने, कडा टाउको दुखाइ, बच्चा नचल्ने वा पानी बग्ने", isCorrect: true },
      { text: "Only if fever is above 40 degrees", textNe: "ज्वरो एकदमै धेरै (४० डिग्री) पुगेमा मात्र", isCorrect: false }
    ],
    explanation: "Emergency signs at any stage of the third trimester: heavy vaginal bleeding, severe persistent headache, vision changes, baby not moving for hours, fluid leaking, or severe belly pain. These require immediate hospital care — no waiting.",
    explanationNe: "योनीबाट धेरै रगत बग्ने, कडा टाउको दुख्ने, आँखा धमिलो हुने, बच्चा घण्टौँसम्म नचल्ने, पानी बग्ने वा पेट ज्यादै दुख्ने जस्ता लक्षण देखिएमा अस्पताल जान एक मिनेट पनि ढिला गर्नु हुँदैन। यो आमा र बच्चा दुवैका लागि खतराको संकेत हो।"
  },
  {
    id: 40,
    title: "Is it normal for the baby's movement pattern to change at 38 weeks?",
    titleNe: "३८ हप्तामा बच्चाको चल्ने तरिका फेरिनु सामान्य हो?",
    description: "Maya is 38 weeks pregnant and feels the baby is moving differently — less kicking but more rolling.",
    descriptionNe: "माया ३८ हप्ताकी गर्भवती छिन्। उनलाई बच्चाले लात कम हानेको तर यताउति ढल्केको वा घुमेको बढी महसुस हुन्छ।",
    options: [
      { text: "Movement must always be the same kicks", textNe: "बच्चाले सधैँ पहिले जस्तै लात नै हान्नुपर्छ", isCorrect: false },
      { text: "Type can change but total movement must continue", textNe: "चल्ने तरिका फेरिन सक्छ, तर कुल हल्चल घट्नु हुँदैन", isCorrect: true },
      { text: "Less movement is normal as space reduces", textNe: "ठाउँ कम भएकाले बच्चा कम चल्नु एकदमै सामान्य हो", isCorrect: false }
    ],
    explanation: "The type of movement can change in late pregnancy as the baby has less room. However the total amount of movement should not decrease. If movement feels significantly reduced, contact the doctor immediately.",
    explanationNe: "अन्तिम महिनामा पाठेघरमा ठाउँ कम हुने भएकाले बच्चाले पहिले जस्तो खुट्टा चलाउन पाउँदैन, बरु यताउति घुमेको बढी महसुस हुन्छ। तर बच्चा कति पटक चल्यो भन्ने सङ्ख्या भने घट्नु हुँदैन। यदि बच्चा पहिलेभन्दा निकै कम चलेको छ भने तुरुन्त अस्पताल जानुपर्छ।"
  },
  {
    id: 41,
    title: "Should Sunita start expressing colostrum before delivery at 36 weeks?",
    titleNe: "३६ हप्तामा सुत्केरी अगाडि नै स्तनबाट खिर निचोर्ने (Colostrum Harvesting) गर्नुपर्छ?",
    description: "Sunita is 36 weeks pregnant and has been advised to start expressing colostrum before birth.",
    descriptionNe: "सुनिता ३६ हप्ताकी गर्भवती छिन्। उनलाई कसैले 'जन्मिनु अगाडि नै स्तनबाट बिगौती दूध निचोरेर राख्नुपर्छ' भनेको छ।",
    options: [
      { text: "Recommended for all pregnant women", textNe: "सबै गर्भवती महिलाले यो गर्नैपर्छ", isCorrect: false },
      { text: "Only if medically advised — can trigger labour", textNe: "डाक्टरले भनेमा मात्र — यसले समय नपुगी व्यथा लाग्न सक्छ", isCorrect: true },
      { text: "Useless before birth", textNe: "बच्चा नजन्मिई यो दूधको कुनै काम हुँदैन", isCorrect: false }
    ],
    explanation: "Antenatal colostrum harvesting is only recommended in certain medical situations (diabetic mothers, small babies). For a normal pregnancy, nipple stimulation before labour can trigger contractions.",
    explanationNe: "सुत्केरी हुनु अगाडि खिर (बिगौती दूध) निचोर्ने काम सबैले गर्नुपर्दैन। यो विशेष अवस्थामा (जस्तै: मधुमेह भएकी आमा) डाक्टरले मात्र सल्लाह दिन्छन्। सामान्य अवस्थामा स्तन निचोर्दा पाठेघर खुम्चिएर समय नपुग्दै व्यथा लाग्ने जोखिम हुन्छ।"
  },
  {
    id: 42,
    title: "What is the purpose of the stretch marks appearing on Puja's belly?",
    titleNe: "पेटमा देखिएका तन्किएका धर्साहरू (Stretch Marks) किन आउँछन्?",
    description: "Puja is 30 weeks pregnant and has noticed stretch marks forming on her belly and thighs.",
    descriptionNe: "पूजा ३० हप्ताकी गर्भवती छिन्। उनको पेट र तिघ्रामा रातो-सेतो धर्साहरू देखिन थालेका छन्।",
    options: [
      { text: "Sign of poor nutrition", textNe: "यो पोषणको कमी भएको संकेत हो", isCorrect: false },
      { text: "Normal skin stretching — moisturise for comfort", textNe: "यो छाला तन्किएर भएको हो — आरामका लागि तेल वा क्रिम लगाउने", isCorrect: true },
      { text: "Can be prevented by not gaining weight", textNe: "तौल बढ्न नदिएमा यो आउँदैन", isCorrect: false }
    ],
    explanation: "Stretch marks are caused by rapid skin stretching and partly by genetics. They cannot be fully prevented. Moisturising keeps skin comfortable and reduces itching. They fade after delivery.",
    explanationNe: "गर्भावस्थामा शरीर र छाला छिटो तन्किँदा यस्ता धर्साहरू आउनु स्वाभाविक हो। यसलाई पूर्ण रूपमा रोक्न सकिँदैन, तर नरिवलको तेल वा मोइस्चराइजर लगाउँदा चिलाउने कम हुन्छ। सुत्केरी भएपछि यी धर्साहरू बिस्तारै हल्का हुँदै जान्छन्।"
  },
  {
    id: 43,
    title: "Kamala is 34 weeks and wants to know if it is too late to attend a birthing class",
    titleNe: "३४ हप्तामा 'सुत्केरी तयारी कक्षा' मा जानु धेरै ढिलो भइसक्यो?",
    description: "Kamala is 34 weeks pregnant and is wondering if it is too late to join a birthing preparation class.",
    descriptionNe: "कमला ३४ हप्ताकी गर्भवती छिन्। उनी सुत्केरी हुने प्रक्रिया सिक्न चाहन्छिन् तर अब ढिलो भयो कि भनेर सोच्दै छिन्।",
    options: [
      { text: "Too late, only useful in first trimester", textNe: "अब ढिलो भइसक्यो, यो सुरुको महिनामा मात्र काम लाग्छ", isCorrect: false },
      { text: "Not too late — even one class helps reduce fear", textNe: "ढिलो भएको छैन — एउटै कक्षाले पनि डर कम गर्न मद्दत गर्छ", isCorrect: true },
      { text: "Classes are only for first-time mothers", textNe: "यो कक्षा पहिलो पटक आमा बन्नेहरूका लागि मात्र हो", isCorrect: false }
    ],
    explanation: "It is never too late to attend a prenatal class. Even a single session covering breathing techniques, signs of labour, and what to expect at the hospital significantly reduces anxiety.",
    explanationNe: "सुत्केरी तयारी कक्षाका लागि ३४ हप्ता ढिलो होइन। सास फेर्ने तरिका, व्यथाका लक्षण र अस्पतालमा हुने प्रक्रियाबारे थोरै जानकारीले पनि मनको तनाव र डरलाई निकै कम गर्छ।"
  },
  {
    id: 44,
    title: "Bindu's husband is worried the baby will feel pain during a normal vaginal delivery",
    titleNe: "नर्मल डेलिभरी हुँदा बच्चालाई धेरै दुख्छ कि भनेर बुबालाई डर लागेको छ — साँचो हो?",
    description: "Bindu is 38 weeks pregnant. Her husband is worried about the baby being harmed during a vaginal birth.",
    descriptionNe: "बिन्दु ३८ हप्ताकी गर्भवती छिन्। उनका श्रीमानलाई नर्मल सुत्केरी हुँदा बच्चालाई कष्ट हुन्छ कि भन्ने चिन्ता छ।",
    options: [
      { text: "Yes, baby is traumatised during birth", textNe: "हो, जन्मिँदा बच्चालाई निकै गाह्रो र चोट महसुस हुन्छ", isCorrect: false },
      { text: "Normal birth is the safest design for babies", textNe: "नर्मल जन्म बच्चाको लागि प्राकृतिक र सबैभन्दा सुरक्षित प्रक्रिया हो", isCorrect: true },
      { text: "C-section is always safer for baby", textNe: "बच्चाको लागि अप्रेसन (C-Section) सधैँ सुरक्षित हुन्छ", isCorrect: false }
    ],
    explanation: "The birth canal gently squeezes the baby in ways that help clear fluid from the lungs. Babies are designed for birth. A normal vaginal delivery without complications is the safest outcome for both mother and baby.",
    explanationNe: "नर्मल सुत्केरी हुँदा बच्चाको फोक्सोमा भएको तरल पदार्थ प्राकृतिक रूपमै बाहिर निस्कन्छ, जसले उसलाई श्वास फेर्न सजिलो बनाउँछ। सामान्य अवस्थामा नर्मल डेलिभरी नै आमा र बच्चा दुवैका लागि सबैभन्दा उत्तम र सुरक्षित मानिन्छ।"
  },
  {
    id: 45,
    title: "Should Sima get the iron injection near delivery or just keep taking tablets?",
    titleNe: "सुत्केरी हुने बेला आइरनको सुई लगाउनु राम्रो कि चक्की नै खाइरहने?",
    description: "Sima is 35 weeks pregnant. Someone told her she should get iron injections instead of tablets now.",
    descriptionNe: "सिमा ३५ हप्ताकी गर्भवती छिन्। कसैले उनलाई 'अब चक्की छोडेर आइरनको सुई लगाए रगत छिटो बढ्छ' भनेको छ।",
    options: [
      { text: "Injections are always better than tablets", textNe: "सुई चक्कीभन्दा सधैँ प्रभावकारी र राम्रो हुन्छ", isCorrect: false },
      { text: "Continue tablets unless anaemia is severe", textNe: "रगतको मात्रा धेरै नै कम नभएसम्म चक्की नै खाइरहने", isCorrect: true },
      { text: "Stop iron completely before delivery", textNe: "सुत्केरी हुनुभन्दा अगाडि आइरन खान बन्द गर्नुपर्छ", isCorrect: false }
    ],
    explanation: "Oral iron tablets are the first-line treatment. Iron injections are only used when anaemia is severe (Hb below 7–8), the mother cannot tolerate oral iron, or time is very short before delivery.",
    explanationNe: "आइरन चक्की खानु नै सबैभन्दा राम्रो विकल्प हो। सुई केवल रगत धेरै कम भएको अवस्थामा वा चक्कीले काम नगरेमा मात्र डाक्टरको सल्लाहमा दिइन्छ। रगतको जाँच नगरी आफैँ सुई लगाउनु हुँदैन।"
  },
  {
    id: 46,
    title: "Nirmala at 31 weeks wonders if she can lie on her back for a short rest",
    titleNe: "३१ हप्तामा केही बेरका लागि उत्तानो परेर आराम गर्न मिल्छ?",
    description: "Nirmala is 31 weeks pregnant and sometimes lies on her back for 10–15 minutes.",
    descriptionNe: "निर्मला ३१ हप्ताकी गर्भवती छिन्। उनी थकाइ लाग्दा कहिलेकाहीँ १०-१५ मिनेट उत्तानो पल्टिन्छिन्।",
    options: [
      { text: "Never at all after 20 weeks", textNe: "२० हप्तापछि उत्तानो सुत्नु नै हुँदैन", isCorrect: false },
      { text: "Short periods are fine; avoid all night on back", textNe: "थोरै समयका लागि ठिकै छ; तर रातभर उत्तानो नसुत्ने", isCorrect: true },
      { text: "Only unsafe in the first trimester", textNe: "यो सुरुको ३ महिनामा मात्र असुरक्षित हुन्छ", isCorrect: false }
    ],
    explanation: "Lying on your back briefly is fine. Sleeping all night on the back from the third trimester is what to avoid, as it can compress blood vessels. If dizzy, just roll to the left side.",
    explanationNe: "१०-१५ मिनेट उत्तानो पल्टिँदा बच्चालाई केही हुँदैन। तर लामो समय वा रातभर उत्तानो सुत्दा पाठेघरको तौलले मुख्य नसाहरू थिचिन सक्छन्। आराम गर्दा वा सुत्दा देब्रे कोल्टे फर्किनु सबैभन्दा राम्रो हुन्छ।"
  },
  {
    id: 47,
    title: "Rita is 37 weeks — what are the early signs that labour might be starting soon?",
    titleNe: "३७ हप्तामा कुन-कुन संकेतले सुत्केरी हुने बेला नजिकियो भन्ने बुझाउँछ?",
    description: "Rita is 37 weeks pregnant and wants to know early signs that labour may be approaching.",
    descriptionNe: "रिता ३७ हप्ताकी गर्भवती छिन्। उनी व्यथा सुरु हुनुभन्दा अगाडि देखिने लक्षणहरू जान्न चाहन्छिन्।",
    options: [
      { text: "Fever and vomiting mean labour is starting", textNe: "ज्वरो आउनु र बान्ता हुनु व्यथा सुरु भएको संकेत हो", isCorrect: false },
      { text: "Nesting urge, loose stools, mucus plug, baby dropping", textNe: "घर मिलाउन जाँगर चल्नु, पातलो दिसा, बाक्लो सिंगान जस्तो तरल आउनु", isCorrect: true },
      { text: "Only contractions count as a sign", textNe: "पेट कडा भएर दुख्नु मात्र एकमात्र संकेत हो", isCorrect: false }
    ],
    explanation: "Pre-labour signs include: nesting instinct, loose bowels, loss of the mucus plug, and the baby dropping lower. These can appear days before active labour starts.",
    explanationNe: "व्यथा लाग्नु अगाडि देखिने संकेतहरू: घरका सामान मिलाउन मन लाग्नु (Nesting), दिसा पातलो हुनु, योनीबाट बाक्लो म्युकस (Mucus Plug) निस्कनु र बच्चा तल झरेको महसुस हुनु हुन्। यस्तो भएमा अस्पताल जाने तयारी गर्नुपर्छ।"
  },
  {
    id: 48,
    title: "Deepa is scared of episiotomy — what is it and is it always done?",
    titleNe: "'एपिसियोटोमी' (Episiotomy) भनेको के हो र के यो सबैलाई गरिन्छ?",
    description: "Deepa is 36 weeks pregnant and has heard of episiotomy but is scared.",
    descriptionNe: "दीपा ३६ हप्ताकी गर्भवती छिन्। उनले सुत्केरी हुँदा गरिने सानो काट (एपिसियोटोमी) को बारेमा सुनेकी छिन् र उनी डराएकी छिन्।",
    options: [
      { text: "Always done for all normal deliveries", textNe: "यो सबै नर्मल सुत्केरीमा अनिवार्य रूपमा गरिन्छ", isCorrect: false },
      { text: "Only done when medically necessary, not routine", textNe: "यो आवश्यक परेमा मात्र गरिन्छ, सबैलाई गरिँदैन", isCorrect: true },
      { text: "Never done anymore", textNe: "अहिले यो पद्धति कतै पनि प्रयोग गरिँदैन", isCorrect: false }
    ],
    explanation: "Episiotomy is a small surgical cut to widen the vaginal opening if the baby is in distress. It is no longer a routine procedure for every birth.",
    explanationNe: "यो बच्चालाई निस्कन गाह्रो भएको अवस्थामा योनीको मुख थोरै फराकिलो बनाउन गरिने सानो काट हो। अचेल यो सबैलाई गरिँदैन; यदि बच्चा वा आमालाई जोखिम देखिएमा मात्र डाक्टरले यो निर्णय लिन्छन्।"
  },
  {
    id: 49,
    title: "What should Hira eat the day before and on the day she thinks labour is starting?",
    titleNe: "व्यथा लाग्ने बेला र सुत्केरी हुने दिन के खानु राम्रो हुन्छ?",
    description: "Hira is 39 weeks pregnant and asks what she should eat as labour approaches.",
    descriptionNe: "हिरा ३९ हप्ताकी गर्भवती छिन् र उनी सुत्केरी हुने बेला के खाने भनेर सोध्दै छिन्।",
    options: [
      { text: "Stop eating completely from 37 weeks", textNe: "३७ हप्ता पुगेपछि केही पनि नखाने", isCorrect: false },
      { text: "Light, easy-to-digest meals and stay hydrated", textNe: "हल्का, सजिलै पच्ने खानेकुरा र प्रशस्त पानी पिउने", isCorrect: true },
      { text: "Eat very heavily to store energy", textNe: "धेरै शक्ति चाहिन्छ भनेर धेरै भारी खाना खाने", isCorrect: false }
    ],
    explanation: "Light meals — like rice, toast, fruit, or soup — are ideal. Heavy meals can cause nausea during labour. Stay well hydrated.",
    explanationNe: "व्यथा लाग्ने बेला धेरै भारी खाना खाँदा वाकवाकी लाग्न सक्छ। त्यसैले जाउलो, सुप, फलफूल जस्ता सजिलो खानेकुरा खाने र पानी पिइरहने। यसले सुत्केरी हुने बेला शक्ति प्रदान गर्छ।"
  },
  {
    id: 50,
    title: "Kabita is 34 weeks and family says she must not eat ghee — it will make baby stuck",
    titleNe: "घिउ खाँदा बच्चा मोटो भएर अड्किन्छ भन्छन् — के यो साँचो हो?",
    description: "Kabita is 34 weeks pregnant. Her family says eating ghee will make the baby too big.",
    descriptionNe: "कबिता ३४ हप्ताकी गर्भवती छिन्। उनलाई घरमा 'घिउ धेरै खाए बच्चा ठूलो भएर जन्मिँदा अड्किन्छ' भनिएको छ।",
    options: [
      { text: "True — ghee makes delivery difficult", textNe: "हो, घिउले बच्चा मोटो बनाउँछ र सुत्केरी गाह्रो हुन्छ", isCorrect: false },
      { text: "False — moderate ghee is fine; overall calories matter", textNe: "गलत हो — ठिक्क मात्रामा घिउ खानु सुरक्षित र स्वस्थ छ", isCorrect: true },
      { text: "Replace all fat with ghee only", textNe: "अरू तेल छाडेर घिउ मात्र खानुपर्छ", isCorrect: false }
    ],
    explanation: "Moderate ghee does not cause the baby to get stuck. Baby size is determined by genetics and overall calorie intake. A balanced diet is key.",
    explanationNe: "ठिक्क मात्रामा घिउ खाँदा बच्चा अड्किने भन्ने कुरा केवल भ्रम हो। बच्चाको तौल आमाको कुल खानपान र वंशाणुगत गुणमा भर पर्छ। सन्तुलित र पौष्टिक खाना खानु नै सबैभन्दा राम्रो हो।"
  }
];