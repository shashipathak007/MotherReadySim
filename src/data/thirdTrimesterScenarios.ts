import { Scenario } from './firstTrimesterScenarios';

export const THIRD_TRIMESTER_SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "What is a kick count and why is it recommended from the third trimester?",
    titleNe: "किक काउन्ट (Kick Count) भनेको के हो र सातौं महिना लागेपछि यो किन गर्नुपर्छ?",
    description: "Sunita is 30 weeks pregnant. Her doctor says she needs to do a kick count daily.",
    descriptionNe: "सुनिता ३० हप्ताकी गर्भवती छिन्। डाक्टरले उनलाई दिनदिनै बच्चा चलेको गन्न (किक काउन्ट गर्न) भन्नुभएको छ।",
    options: [
      { text: "Counting the number of steps the mother walks", textNe: "आमा दिनमा कति कदम हिँडिन् भनेर गन्ने", isCorrect: false },
      { text: "Counting baby movements — you should feel at least 10 movements in 2 hours. A daily check that the baby is well.", textNe: "पेटभित्र बच्चा कति पटक चल्यो भनेर गन्ने — बच्चा कम्तीमा २ घण्टामा १० पटक चल्नुपर्छ। यो बच्चा स्वस्थ छ भनेर घरमै गरिने जाँच हो।", isCorrect: true },
      { text: "Counting how many times the baby kicks the ribs", textNe: "बच्चाले आमाको करङमा कति पटक लात हान्यो भनेर गन्ने", isCorrect: false }
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
      { text: "She is having a heart attack", textNe: "यो हार्ट अट्याक (हृदयघात) को लक्षण हो", isCorrect: false },
      { text: "Heartburn (acid reflux) — very common as the growing uterus pushes the stomach upward", textNe: "यो ग्यास्ट्रिक र एसिडले गर्दा हो — पेट ठूलो हुँदै जाँदा आन्द्रा र आमाशयलाई माथि धकेल्ने भएकाले यस्तो हुनु सामान्य हो", isCorrect: true },
      { text: "A sign of gestational diabetes", textNe: "यो प्रेग्नेन्सी सुगर (मधुमेह) भएको संकेत हो", isCorrect: false }
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
      { text: "It means the baby will be born with a larger head", textNe: "यसको अर्थ बच्चाको टाउको धेरै ठूलो छ भन्ने हो", isCorrect: false },
      { text: "Head-down is optimal for normal vaginal delivery — the head is the largest part and paves the way for the body", textNe: "नर्मल डेलिभरी हुनको लागि यो सबैभन्दा राम्रो अवस्था हो — टाउको पहिले निस्केपछि शरीरलाई बाटो बनाउन सजिलो हुन्छ", isCorrect: true },
      { text: "The head-down position makes C-section necessary", textNe: "यसरी टाउको तल हुँदा अप्रेसन (सिजेरियन) गर्नैपर्ने हुन्छ", isCorrect: false }
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
      { text: "The baby has moved into position for delivery — the head has engaged in the pelvis. This is a positive sign.", textNe: "बच्चा जन्मिनको लागि सही ठाउँमा आएको छ — बच्चाको टाउको पाठेघरको तल्लो भागमा बसेको छ। यो एकदम राम्रो संकेत हो।", isCorrect: true },
      { text: "The baby has stopped growing", textNe: "यसको अर्थ बच्चा पेटमा बढ्न छोड्यो भन्ने हो", isCorrect: false },
      { text: "She is about to go into labour immediately", textNe: "यसको अर्थ अब एक-दुई घण्टामै सुत्केरी व्यथा लाग्छ भन्ने हो", isCorrect: false }
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
      { text: "Yes, all three are medically proven to induce labour", textNe: "हो, यी तीनवटै कुराले व्यथा लगाउँछ भनेर डाक्टरहरूले नै प्रमाणित गरेका छन्", isCorrect: false },
      { text: "None of these are medically proven. Castor oil can cause severe diarrhoea, dehydration, and should be avoided.", textNe: "यसले व्यथा लाग्छ भन्ने कुराको कुनै ग्यारेन्टी छैन। अरंडीको तेल पिउँदा त झन् कडा पखाला लाग्ने र शरीरमा पानीको कमी हुने खतरा हुन्छ — त्यसैले यो खानु हुँदैन।", isCorrect: true },
      { text: "Only long walks work", textNe: "धेरै लामो समय हिँड्दा मात्र काम गर्छ", isCorrect: false }
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
      { text: "Yes — she will need a C-section", textNe: "हो — यसले गर्दा उनलाई अप्रेसन (सिजेरियन) नै गर्नुपर्छ", isCorrect: false },
      { text: "GBS usually causes no symptoms in the mother but can infect the baby during delivery. Antibiotics given during labour prevent transmission.", textNe: "यसले आमालाई खासै असर गर्दैन तर बच्चा जन्मिने बेलामा बच्चालाई घाउ-खटिरा वा इन्फेक्सन गराउन सक्छ। सुत्केरी व्यथा लागेको बेला एन्टिबायोटिक दिएर यसलाई सजिलै रोक्न सकिन्छ।", isCorrect: true },
      { text: "She must take antibiotics for 6 months immediately", textNe: "उनले आजैदेखि ६ महिनासम्म लगातार एन्टिबायोटिक खानुपर्छ", isCorrect: false }
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
      { text: "Only once at 36 weeks", textNe: "३६ औं हप्तामा एक पटक मात्र गए पुग्छ", isCorrect: false },
      { text: "Every 4 weeks until 36 weeks, then every 1–2 weeks until delivery", textNe: "९ महिना (३६ हप्ता) नलाग्दासम्म हरेक महिना, र त्यसपछि सुत्केरी नहुन्जेल हरेक १ वा २ हप्तामा जानुपर्छ", isCorrect: true },
      { text: "Only when she feels something is wrong", textNe: "पेट दुख्यो वा बच्चा चलेन भने मात्र जाने, नत्र पर्दैन", isCorrect: false }
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
      { text: "She is in active labour and must rush to hospital immediately", textNe: "सुत्केरी व्यथा सुरु भइसक्यो, उनलाई तुरुन्तै अस्पताल लगिहाल्नुपर्छ", isCorrect: false },
      { text: "This is the mucus plug (bloody show) releasing as the cervix softens. Labour may start in days or weeks.", textNe: "यसलाई 'म्युकस प्लग' वा 'ब्लडी शो' भनिन्छ जुन पाठेघरको मुख खुल्न थाल्दा बाहिर निस्कन्छ। यसको अर्थ अबको केही दिन वा एक-दुई हप्ताभित्र सुत्केरी व्यथा लाग्न सक्छ भन्ने हो।", isCorrect: true },
      { text: "She has a vaginal infection", textNe: "यो योनीमा एलर्जी वा इन्फेक्सन भएको लक्षण हो", isCorrect: false }
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
      { text: "She should request a C-section to avoid all pain", textNe: "दुखाइबाट बच्न सुरुमै अप्रेसन गर्ने सल्लाह गर्नुपर्छ", isCorrect: false },
      { text: "Learning breathing techniques, having a supportive birth partner, and understanding what to expect reduces anxiety significantly.", textNe: "लामो सास फेर्न सिक्ने, आफ्नो साथमा श्रीमान वा आमालाई राख्ने, र डेलिभरी कसरी हुन्छ भनेर राम्ररी बुझ्ने गर्दा डर धेरै कम हुन्छ", isCorrect: true },
      { text: "She should not think about it and hope for the best", textNe: "यसबारे पटक्कै नसोच्ने र भगवानको भरोसामा बस्ने", isCorrect: false }
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
      { text: "The day labour starts — there is no need to prepare earlier", textNe: "व्यथा लागेको दिन बिस्तारै हालेर लगे हुन्छ — पहिले नै तयार गर्नु पर्दैन", isCorrect: false },
      { text: "By 36 weeks at the latest. Labour can start early and it is better to be prepared.", textNe: "ढिलोमा ३६ हप्ता (८ महिनाको अन्त्य) सम्ममा। कहिलेकाहीँ महिना नपुगी अगाडि नै व्यथा लाग्न सक्छ, त्यसैले तयार रहनु राम्रो हो।", isCorrect: true },
      { text: "Only if the doctor says so", textNe: "डाक्टरले 'अब तयार पार्नु' भनेपछि मात्र झोला मिलाउने", isCorrect: false }
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
      { text: "She has developed asthma from the pregnancy", textNe: "यसको मतलब उनलाई प्रेग्नेन्सीमा दम (Asthma) को रोग सुरु भएको छ", isCorrect: false },
      { text: "The growing uterus pushes up against the diaphragm, reducing lung expansion space. Mild breathlessness is common. Sudden severe breathlessness at rest is a warning sign.", textNe: "पेट ठूलो हुँदै जाँदा माथि फोक्सोतिर ढकेल्छ, जसले गर्दा फोक्सो राम्ररी फुल्न पाउँदैन। यस्तो बेला हल्का सास फेर्न गाह्रो हुनु एकदम सामान्य हो। तर बसेको बेला एक्कासी श्वास बन्द होला जस्तो भयो भने चाहिँ खतरा हो।", isCorrect: true },
      { text: "She needs to increase her iron intake", textNe: "रगत कम भएर हो, उनले धेरै आइरन खानुपर्छ", isCorrect: false }
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
      { text: "To protect the mother from all diseases during delivery", textNe: "यसले सुत्केरी हुने बेला आमालाई कुनै पनि रोग लाग्न दिँदैन", isCorrect: false },
      { text: "Antibodies the mother develops pass to the baby through the placenta, protecting the baby from whooping cough in the first weeks of life", textNe: "यो खोप लगाएपछि आमाको शरीरमा बन्ने रोगसँग लड्ने क्षमता पाठेघर हुँदै बच्चासम्म पुग्छ र बच्चालाई जन्मेको केही महिनासम्म लहरेखोकी र धनुकटंकारबाट बचाउँछ", isCorrect: true },
      { text: "It is only for mothers having a C-section", textNe: "यो खोप अप्रेसन (सिजेरियन) गर्नुपर्ने आमाहरूलाई मात्र दिइन्छ", isCorrect: false }
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
      { text: "No — any swelling means she has a kidney problem", textNe: "होइन — सुन्निनु भनेको मिर्गौला (किड्नी) खराब भएको लक्षण हो", isCorrect: false },
      { text: "Yes — swelling that develops during the day and resolves overnight is physiological oedema, very common in the third trimester", textNe: "हो — दिनभर उभिएर सुन्निने र सुतेपछि हराउने समस्या पानी जमेर हुने सामान्य कुरा हो, अन्तिम महिनाहरूमा यस्तो धेरैलाई हुन्छ", isCorrect: true },
      { text: "She must stop drinking water to reduce swelling", textNe: "सुन्निन कम गर्न उनले दिनभर पानी नै पिउनु हुँदैन", isCorrect: false }
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
      { text: "Whether the mother likes sweets", textNe: "आमाले धेरै गुलियो कुरा खाएकी छिन् कि भनेर हेर्न", isCorrect: false },
      { text: "It tests for gestational diabetes. A high result means dietary changes and monitoring are needed to keep blood sugar controlled.", textNe: "यो गर्भावस्थामा हुन सक्ने सुगर रोग (Gestational Diabetes) पत्ता लगाउन गरिन्छ। यदि सुगर धेरै देखियो भने खानपान बार्नुपर्ने हुन्छ।", isCorrect: true },
      { text: "Whether the baby will be overweight", textNe: "पछि बच्चा धेरै मोटो जन्मिन्छ कि भनेर हेर्न", isCorrect: false }
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
      { text: "Yes, delivering a week or two early is always safer", textNe: "हो, दिन पुगिसकेकोले एक-दुई हप्ता अगाडि नै बच्चा जन्माउनु राम्रो हो", isCorrect: false },
      { text: "Medical induction without a clear reason before 39 weeks increases the risk of complications for the baby. The final weeks still matter for development.", textNe: "कुनै स्वास्थ्य समस्या नभइकन ३९ हप्ता अगावै औषधि दिएर सुत्केरी गराउँदा बच्चाको फोक्सो राम्ररी विकास नभएको हुन सक्छ।", isCorrect: true },
      { text: "The earlier the better — hospitals are less busy", textNe: "जति चाँडो जन्मायो उति राम्रो — आमालाई सजिलो हुन्छ", isCorrect: false }
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
      { text: "Move to the hospital now and wait there", textNe: "अहिलेदेखि नै अस्पताल गएर भर्ना भइहाल्ने र व्यथा नलागुन्जेल उतै बस्ने", isCorrect: false },
      { text: "Identify a clear plan: a designated backup person, all contacts saved and shared, hospital bag packed, and FCHV's number displayed prominently", textNe: "पहिले नै प्रस्ट योजना बनाउने: सहयोग गर्ने गाउँको मान्छे तोक्ने, अस्पताल झोला तयार राख्ने, र एम्बुलेन्स तथा स्वास्थ्य स्वयम्सेविकाको नम्बर भित्तामा टाँसेर राख्ने", isCorrect: true },
      { text: "Call her husband to come home immediately", textNe: "जसरी भए पनि श्रीमानलाई भोलि नै घर फर्किन भन्ने", isCorrect: false }
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
      { text: "No — she must be induced immediately at exactly 40 weeks", textNe: "मिति कट्नेबित्तिकै तुरुन्तै अस्पताल गएर अप्रेसन गरिहाल्नुपर्छ", isCorrect: false },
      { text: "Yes — a due date is an estimate. Only 5% of babies are born on the exact due date. Going to 40–41 weeks is completely normal.", textNe: "पर्दैन — डाक्टरले दिएको मिति एउटा अन्दाज मात्र हो। जम्मा ५ प्रतिशत बच्चाहरू मात्र त्यो ठ्याक्कै मितिमा जन्मिन्छन्। ४०-४१ हप्तासम्म जानु एकदम सामान्य हो।", isCorrect: true },
      { text: "She is definitely going to need a C-section", textNe: "मिति काटेपछि अब पक्का अप्रेसन नै गर्नुपर्छ", isCorrect: false }
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
      { text: "Only on the back with a pillow under the knees", textNe: "घुँडामुनि सिरानी राखेर सधैं उत्तानो मात्र सुत्ने", isCorrect: false },
      { text: "Left-side sleeping is preferred — it improves blood flow to the placenta and avoids compressing the vena cava", textNe: "देब्रे कोल्टे परेर सुत्नु सबैभन्दा राम्रो हो — यसले गर्दा साल (Placenta) र बच्चासम्म रगत राम्ररी पुग्छ र आमाको मुख्य नसा थिचिँदैन", isCorrect: true },
      { text: "On the stomach with a donut pillow", textNe: "पेटलाई सिरानीमाथि राखेर घोप्टो परेर सुत्ने", isCorrect: false }
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
      { text: "A legal document that forces doctors to follow your instructions", textNe: "यो एउटा कानुनी कागज हो जसले तपाईंले भनेकै जसरी सुत्केरी गराउन डाक्टरलाई बाध्य पार्छ", isCorrect: false },
      { text: "A written note of the mother's preferences — who should be in the room, pain management wishes, breastfeeding plans. Useful for communication, not binding.", textNe: "यो भनेको सुत्केरी हुने बेला आफूलाई के-के सुविधा चाहिन्छ, को मान्छे सँगै बसोस् भन्ने चाहना छ भनेर लेखिएको एउटा नोट हो। यसले डाक्टरलाई तपाईंको इच्छा बुझ्न मद्दत गर्छ।", isCorrect: true },
      { text: "Something only wealthy people in cities need", textNe: "यो ठूला सहरका धनी मानिसहरूलाई मात्र चाहिने कुरा हो", isCorrect: false }
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
      { text: "She should eat much less to avoid a large baby", textNe: "बच्चा धेरै ठूलो भएर जन्माउन गाह्रो होला भनेर पहिलेभन्दा एकदम कम खानेकुरा खानुपर्छ", isCorrect: false },
      { text: "Calorie needs increase slightly. Calcium, iron, and omega-3 rich foods become particularly important for the baby's bones, blood, and brain development.", textNe: "खाना थोरै बढाउनुपर्छ। बच्चाको हड्डी, रगत र राम्रो दिमाग बन्नको लागि क्याल्सियम, आइरन र ओमेगा-३ धेरै पाइने कुराहरू खानुपर्छ।", isCorrect: true },
      { text: "She should stop eating any fats", textNe: "घिउ, तेल वा चिल्लो हुने खानेकुरा पुरै खान छोड्नुपर्छ", isCorrect: false }
    ],
    explanation: "The third trimester has the most rapid baby growth. Key focuses: calcium for bones, iron for blood, omega-3 for brain development. Eat balanced nutrient-dense meals.",
    explanationNe: "अन्तिम महिनाहरूमा बच्चा एकदम छिटो हुर्किने भएकाले बढी पोषण चाहिन्छ। बच्चाको हड्डी बलियो बनाउन दूध-दही (क्याल्सियम), रगत बढाउन सागपात र गेडागुडी (आइरन), र दिमागको विकासको लागि ओखर वा माछा (ओमेगा-३) जस्ता खानेकुरा प्रशस्त खानुपर्छ। धेरै पेट भर्नेभन्दा पनि पोषिलो कुरा खान ध्यान दिनुपर्छ।"
  }
];
