import { Scenario } from './firstTrimesterScenarios';

export const THIRD_TRIMESTER_SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "What is a kick count and why is it recommended from the third trimester?",
    titleNe: "किक काउन्ट के हो र तेस्रो त्रैमासिकदेखि किन सिफारिस गरिन्छ?",
    description: "Sunita is 30 weeks pregnant. Her doctor says she needs to do a kick count daily.",
    descriptionNe: "सुनिता ३० हप्ताकी गर्भवती छिन्। डाक्टरले उनलाई दैनिक किक काउन्ट गर्न भन्नुभयो।",
    options: [
      { text: "Counting the number of steps the mother walks", textNe: "आमाले हिँडेको कदमको संख्या गन्ने", isCorrect: false },
      { text: "Counting baby movements — you should feel at least 10 movements in 2 hours. A daily check that the baby is well.", textNe: "बच्चाको हलचल गन्ने — २ घण्टामा कम्तीमा १० हलचल महसुस गर्नुपर्छ। बच्चा ठीक छ भन्ने दैनिक जाँच।", isCorrect: true },
      { text: "Counting how many times the baby kicks the ribs", textNe: "बच्चाले कति पटक करङमा लात हान्छ गन्ने", isCorrect: false }
    ],
    explanation: "A kick count is a daily at-home check from 28 weeks. A sudden significant reduction in movement is the most important warning sign to report to the doctor.",
    explanationNe: "किक काउन्ट २८ हप्तादेखि गरिने दैनिक घरमै जाँच हो। हलचलमा अचानक उल्लेखनीय कमी आउनु डाक्टरलाई भन्नुपर्ने सबैभन्दा महत्त्वपूर्ण चेतावनी संकेत हो।"
  },
  {
    id: 2,
    title: "What is causing the burning sensation in Puja's chest and throat?",
    titleNe: "पूजाको छाती र घाँटीमा जलन किन भइरहेको छ?",
    description: "Puja is 32 weeks pregnant and feels burning in her chest and throat after eating.",
    descriptionNe: "पूजा ३२ हप्ताकी गर्भवती छिन् र खाना खाएपछि छाती र घाँटीमा जलन महसुस गर्छिन्।",
    options: [
      { text: "She is having a heart attack", textNe: "उनलाई हृदयघात भइरहेको छ", isCorrect: false },
      { text: "Heartburn (acid reflux) — very common as the growing uterus pushes the stomach upward", textNe: "छातीको जलन (एसिड रिफ्लक्स) — बढ्दो पाठेघरले पेट माथि थिच्दा धेरै सामान्य", isCorrect: true },
      { text: "A sign of gestational diabetes", textNe: "गर्भकालीन मधुमेहको संकेत", isCorrect: false }
    ],
    explanation: "Heartburn is extremely common in the third trimester. The growing uterus pushes the stomach upward. Eat smaller meals and stay upright after eating.",
    explanationNe: "तेस्रो त्रैमासिकमा छातीको जलन धेरै सामान्य हो। बढ्दो पाठेघरले पेट माथि थिच्छ। सानो-सानो खाना खाने र खाएपछि सीधा बस्ने गर्नुपर्छ।"
  },
  {
    id: 3,
    title: "Why is a head-down position preferred for delivery?",
    titleNe: "प्रसूतिका लागि टाउको तल किन उत्तम हुन्छ?",
    description: "Kamala is 34 weeks pregnant and is told the baby is in a cephalic (head-down) position.",
    descriptionNe: "कमला ३४ हप्ताकी गर्भवती छिन् र बच्चा सेफालिक (टाउको तल) अवस्थामा छ भनिएको छ।",
    options: [
      { text: "It means the baby will be born with a larger head", textNe: "बच्चा ठूलो टाउकोसँग जन्मिन्छ", isCorrect: false },
      { text: "Head-down is optimal for normal vaginal delivery — the head is the largest part and paves the way for the body", textNe: "टाउको तल सामान्य प्रसूतिका लागि उत्तम — टाउको सबैभन्दा ठूलो भाग हो र शरीरलाई बाटो बनाउँछ", isCorrect: true },
      { text: "The head-down position makes C-section necessary", textNe: "टाउको तलको अवस्थाले सिजेरियन आवश्यक बनाउँछ", isCorrect: false }
    ],
    explanation: "About 95% of babies are head-down by 36 weeks. The head being first allows the cervix to dilate most effectively.",
    explanationNe: "लगभग ९५% बच्चा ३६ हप्तासम्म टाउको तल हुन्छन्। टाउको पहिले हुँदा पाठेघरको मुख सबैभन्दा प्रभावकारी रूपमा फैलिन्छ।"
  },
  {
    id: 4,
    title: "What is lightening and what does it mean in late pregnancy?",
    titleNe: "लाइटनिङ के हो र गर्भावस्थाको अन्तिम समयमा यसको अर्थ के हो?",
    description: "Bindu is 36 weeks pregnant and feels the baby has dropped lower. She can breathe more easily but needs to urinate more often.",
    descriptionNe: "बिन्दु ३६ हप्ताकी गर्भवती छिन् र बच्चा तल झरेको महसुस गर्छिन्। सास फेर्न सजिलो छ तर बारम्बार पिसाब लाग्छ।",
    options: [
      { text: "The baby has moved into position for delivery — the head has engaged in the pelvis. This is a positive sign.", textNe: "बच्चा प्रसूतिको लागि स्थितिमा आएको छ — टाउको श्रोणिमा फसेको छ। यो सकारात्मक संकेत हो।", isCorrect: true },
      { text: "The baby has stopped growing", textNe: "बच्चा बढ्न बन्द भएको छ", isCorrect: false },
      { text: "She is about to go into labour immediately", textNe: "उनलाई तुरुन्तै प्रसव पीडा सुरु हुन्छ", isCorrect: false }
    ],
    explanation: "Lightening happens 2–4 weeks before birth in first-time mothers. Less pressure on diaphragm (easier breathing) but more pressure on bladder (frequent urination).",
    explanationNe: "लाइटनिङ पहिलो पटक आमा हुनेहरूमा जन्मभन्दा २–४ हप्ता अघि हुन्छ। डायफ्राममा कम दबाब (सास फेर्न सजिलो) तर मूत्राशयमा बढी दबाब (बारम्बार पिसाब)।"
  },
  {
    id: 5,
    title: "Do any of these methods safely and reliably induce labour?",
    titleNe: "के यी मध्ये कुनै विधिले सुरक्षित रूपमा प्रसव पीडा ल्याउँछ?",
    description: "Rita is 38 weeks pregnant. A family member advises her to eat spicy food, go on long walks, and drink castor oil to bring on labour faster.",
    descriptionNe: "रिता ३८ हप्ताकी गर्भवती छिन्। परिवारका सदस्यले प्रसव चाँडो ल्याउन पिरो खाना, लामो हिँडाइ, र अरण्डीको तेल पिउन सल्लाह दिनुभयो।",
    options: [
      { text: "Yes, all three are medically proven to induce labour", textNe: "हो, तीनवटै चिकित्सकीय रूपमा प्रमाणित छन्", isCorrect: false },
      { text: "None of these are medically proven. Castor oil can cause severe diarrhoea, dehydration, and should be avoided.", textNe: "यी कुनै पनि चिकित्सकीय रूपमा प्रमाणित छैनन्। अरण्डीको तेलले गम्भीर पखाला, निर्जलीकरण गराउन सक्छ — नपिउनुहोस्।", isCorrect: true },
      { text: "Only long walks work", textNe: "लामो हिँडाइ मात्र काम गर्छ", isCorrect: false }
    ],
    explanation: "Castor oil is potentially harmful. If labour needs medical induction, it should be done by a doctor with appropriate monitoring.",
    explanationNe: "अरण्डीको तेल हानिकारक हुन सक्छ। प्रसव पीडा ल्याउनुपर्ने भए डाक्टरले उचित निगरानीमा गर्नुपर्छ।"
  },
  {
    id: 6,
    title: "Is GBS in the vagina during pregnancy dangerous for the mother?",
    titleNe: "के गर्भावस्थामा GBS ब्याक्टेरिया आमाको लागि खतरनाक छ?",
    description: "Nirmala is 35 weeks pregnant and is told she has Group B Streptococcus (GBS) bacteria.",
    descriptionNe: "निर्मला ३५ हप्ताकी गर्भवती छिन् र उनमा ग्रुप B स्ट्रेप्टोकोकस (GBS) ब्याक्टेरिया भेटिएको छ।",
    options: [
      { text: "Yes — she will need a C-section", textNe: "हो — उनलाई सिजेरियन चाहिन्छ", isCorrect: false },
      { text: "GBS usually causes no symptoms in the mother but can infect the baby during delivery. Antibiotics given during labour prevent transmission.", textNe: "GBS ले सामान्यतया आमामा लक्षण देखाउँदैन तर प्रसूतिमा बच्चालाई सङ्क्रमण गर्न सक्छ। प्रसव पीडामा एन्टिबायोटिकले रोक्छ।", isCorrect: true },
      { text: "She must take antibiotics for 6 months immediately", textNe: "उनले तुरुन्तै ६ महिना एन्टिबायोटिक खानुपर्छ", isCorrect: false }
    ],
    explanation: "GBS lives harmlessly in 10–30% of women. IV antibiotics during labour prevent transmission to the baby — no C-section needed.",
    explanationNe: "GBS १०–३०% महिलामा हानिरहित रूपमा बस्छ। प्रसव पीडामा IV एन्टिबायोटिकले बच्चामा सङ्क्रमण रोक्छ — सिजेरियन आवश्यक छैन।"
  },
  {
    id: 7,
    title: "How often should ANC visits happen in the third trimester?",
    titleNe: "तेस्रो त्रैमासिकमा ANC भ्रमण कति पटक हुनुपर्छ?",
    description: "Gita is 33 weeks pregnant and asks how often she should attend ANC visits in the third trimester.",
    descriptionNe: "गीता ३३ हप्ताकी गर्भवती छिन् र तेस्रो त्रैमासिकमा कति पटक ANC जाँच गर्ने भनेर सोध्छिन्।",
    options: [
      { text: "Only once at 36 weeks", textNe: "३६ हप्तामा एक पटक मात्र", isCorrect: false },
      { text: "Every 4 weeks until 36 weeks, then every 1–2 weeks until delivery", textNe: "३६ हप्तासम्म हरेक ४ हप्तामा, त्यसपछि प्रसूतिसम्म हरेक १–२ हप्तामा", isCorrect: true },
      { text: "Only when she feels something is wrong", textNe: "केही गलत महसुस गरेमा मात्र", isCorrect: false }
    ],
    explanation: "ANC frequency increases in the third trimester for monitoring blood pressure, fetal position, and growth. Nepal's Aama Programme requires minimum 4 ANC visits.",
    explanationNe: "तेस्रो त्रैमासिकमा रक्तचाप, भ्रूणको स्थिति, र वृद्धि निगरानीका लागि ANC बढ्छ। नेपालको आमा कार्यक्रमले कम्तीमा ४ ANC भ्रमण आवश्यक पार्छ।"
  },
  {
    id: 8,
    title: "What is this discharge Anita is noticing?",
    titleNe: "अनिताले देखिरहेको यो स्राव के हो?",
    description: "Anita is 37 weeks pregnant. She has been losing small amounts of thick mucus with some blood streaking.",
    descriptionNe: "अनिता ३७ हप्ताकी गर्भवती छिन्। उनलाई थोरै मात्रामा बाक्लो म्यूकस र रगतको धर्को आइरहेको छ।",
    options: [
      { text: "She is in active labour and must rush to hospital immediately", textNe: "उनलाई सक्रिय प्रसव पीडा भइरहेको छ र तुरुन्तै अस्पताल दौडनुपर्छ", isCorrect: false },
      { text: "This is the mucus plug (bloody show) releasing as the cervix softens. Labour may start in days or weeks.", textNe: "यो म्यूकस प्लग (ब्लडी शो) हो जुन पाठेघरको मुख नरम हुँदा निस्कन्छ। प्रसव पीडा दिन वा हप्तामा सुरु हुन सक्छ।", isCorrect: true },
      { text: "She has a vaginal infection", textNe: "उनलाई योनि संक्रमण छ", isCorrect: false }
    ],
    explanation: "The mucus plug seals the cervix throughout pregnancy. Its release is a normal preparatory sign but doesn't mean labour is imminent.",
    explanationNe: "म्यूकस प्लगले गर्भभर पाठेघरको मुख बन्द राख्छ। यसको निस्कनु सामान्य तयारीको संकेत हो तर प्रसव तुरुन्तै हुन्छ भन्ने होइन।"
  },
  {
    id: 9,
    title: "What is the most helpful way to manage anxiety about labour pain?",
    titleNe: "प्रसव पीडाको चिन्ता व्यवस्थापन गर्ने सबैभन्दा सहयोगी तरिका के हो?",
    description: "Sima is 39 weeks pregnant and is feeling very anxious about the pain of labour.",
    descriptionNe: "सिमा ३९ हप्ताकी गर्भवती छिन् र प्रसव पीडाको बारेमा धेरै चिन्तित छिन्।",
    options: [
      { text: "She should request a C-section to avoid all pain", textNe: "दुखाइबाट बच्न सिजेरियन माग्नुपर्छ", isCorrect: false },
      { text: "Learning breathing techniques, having a supportive birth partner, and understanding what to expect reduces anxiety significantly.", textNe: "सास फेर्ने प्रविधि सिक्ने, सहयोगी साथी राख्ने, र के हुन्छ बुझ्नाले चिन्ता धेरै कम हुन्छ।", isCorrect: true },
      { text: "She should not think about it and hope for the best", textNe: "यसबारे नसोचेर राम्रोको आशा गर्ने", isCorrect: false }
    ],
    explanation: "Anxiety actually increases pain perception. Breathing techniques, a calm support person, and understanding the stages of labour are the most effective approaches.",
    explanationNe: "चिन्ताले वास्तवमा दुखाइको अनुभूति बढाउँछ। सास फेर्ने प्रविधि, शान्त सहयोगी व्यक्ति, र प्रसवका चरणहरू बुझ्नु सबैभन्दा प्रभावकारी उपाय हुन्।"
  },
  {
    id: 10,
    title: "When should the hospital bag be fully packed and ready?",
    titleNe: "अस्पतालको झोला कहिलेसम्म पूरा तयार हुनुपर्छ?",
    description: "Maya is 31 weeks pregnant and wants to know when she should prepare her hospital bag.",
    descriptionNe: "माया ३१ हप्ताकी गर्भवती छिन् र अस्पतालको झोला कहिले तयार गर्ने भनेर जान्न चाहन्छिन्।",
    options: [
      { text: "The day labour starts — there is no need to prepare earlier", textNe: "प्रसव पीडा सुरु हुने दिन — पहिले तयार गर्नुपर्दैन", isCorrect: false },
      { text: "By 36 weeks at the latest. Labour can start early and it is better to be prepared.", textNe: "ढिलोमा ३६ हप्तासम्म। प्रसव चाँडै सुरु हुन सक्छ र तयार हुनु राम्रो।", isCorrect: true },
      { text: "Only if the doctor says so", textNe: "डाक्टरले भनेमा मात्र", isCorrect: false }
    ],
    explanation: "The hospital bag should be packed by 36 weeks. About 10% of babies are born before 37 weeks. Having everything ready avoids stress during contractions.",
    explanationNe: "अस्पतालको झोला ३६ हप्तासम्म तयार गर्नुपर्छ। लगभग १०% बच्चा ३७ हप्ताभन्दा पहिले जन्मिन्छन्। सबै तयार भएमा संकुचनको समयमा तनाव कम हुन्छ।"
  },
  {
    id: 11,
    title: "Why does shortness of breath become more noticeable from the third trimester?",
    titleNe: "तेस्रो त्रैमासिकदेखि सास फेर्न किन गाह्रो हुन्छ?",
    description: "Devi is 28 weeks pregnant and starts to feel shortness of breath when climbing stairs.",
    descriptionNe: "देवी २८ हप्ताकी गर्भवती छिन् र भर्‍याङ चढ्दा सास फेर्न गाह्रो हुन थालेको छ।",
    options: [
      { text: "She has developed asthma from the pregnancy", textNe: "गर्भावस्थाबाट उनलाई दम भएको छ", isCorrect: false },
      { text: "The growing uterus pushes up against the diaphragm, reducing lung expansion space. Mild breathlessness is common. Sudden severe breathlessness at rest is a warning sign.", textNe: "बढ्दो पाठेघरले डायफ्राममा थिच्छ, फोक्सो फैलिने ठाउँ कम हुन्छ। हल्का सास कम हुनु सामान्य हो। आरामको बेला अचानक गम्भीर सास कम हुनु चेतावनी हो।", isCorrect: true },
      { text: "She needs to increase her iron intake", textNe: "उनलाई फलाम बढाउनुपर्छ", isCorrect: false }
    ],
    explanation: "As the uterus grows, it pushes against the diaphragm reducing lung space. This is normal and improves slightly when the baby drops in the final weeks.",
    explanationNe: "पाठेघर बढ्दा डायफ्राममा थिच्छ र फोक्सोको ठाउँ कम हुन्छ। यो सामान्य हो र अन्तिम हप्तामा बच्चा तल झर्दा अलि सुधार हुन्छ।"
  },
  {
    id: 12,
    title: "Why is the Tdap or TT vaccine recommended during the third trimester?",
    titleNe: "तेस्रो त्रैमासिकमा Tdap वा TT खोप किन सिफारिस गरिन्छ?",
    description: "Parbati is 34 weeks pregnant. Her doctor prescribed a Tdap or TT vaccine during this visit.",
    descriptionNe: "पार्बती ३४ हप्ताकी गर्भवती छिन्। डाक्टरले यस भ्रमणमा Tdap वा TT खोप दिनुभयो।",
    options: [
      { text: "To protect the mother from all diseases during delivery", textNe: "प्रसूतिमा आमालाई सबै रोगबाट जोगाउन", isCorrect: false },
      { text: "Antibodies the mother develops pass to the baby through the placenta, protecting the baby from whooping cough in the first weeks of life", textNe: "आमामा बन्ने एन्टिबडी प्लेसेन्टाबाट बच्चामा जान्छ, जन्मपछिको पहिलो हप्तामा बच्चालाई कुकुरखोकीबाट जोगाउँछ", isCorrect: true },
      { text: "It is only for mothers having a C-section", textNe: "सिजेरियन गर्ने आमालाई मात्र", isCorrect: false }
    ],
    explanation: "Maternal antibodies pass through the placenta. Newborns are extremely vulnerable to whooping cough until their own vaccination at 6–8 weeks of age.",
    explanationNe: "आमाको एन्टिबडी प्लेसेन्टाबाट बच्चामा जान्छ। नवजात शिशुहरू ६–८ हप्तामा आफ्नो खोप नलगाउञ्जेल कुकुरखोकीबाट धेरै कमजोर हुन्छन्।"
  },
  {
    id: 13,
    title: "Is swelling that comes and goes daily in the third trimester normal?",
    titleNe: "तेस्रो त्रैमासिकमा दैनिक आउने-जाने सुन्निने सामान्य हो?",
    description: "Hira is 30 weeks pregnant and her feet and ankles are visibly swollen by evening but the swelling goes away by morning.",
    descriptionNe: "हिरा ३० हप्ताकी गर्भवती छिन् र साँझसम्म खुट्टा र गोली देखिने गरी सुन्निन्छ तर बिहानसम्म हराउँछ।",
    options: [
      { text: "No — any swelling means she has a kidney problem", textNe: "होइन — कुनै पनि सुन्निने मिर्गौलाको समस्या हो", isCorrect: false },
      { text: "Yes — swelling that develops during the day and resolves overnight is physiological oedema, very common in the third trimester", textNe: "हो — दिनमा बढ्ने र रातमा हराउने सुन्निने शारीरिक ओडेमा हो, तेस्रो त्रैमासिकमा धेरै सामान्य", isCorrect: true },
      { text: "She must stop drinking water to reduce swelling", textNe: "सुन्निने कम गर्न पानी पिउन बन्द गर्नुपर्छ", isCorrect: false }
    ],
    explanation: "Daily resolving ankle swelling is completely normal in the third trimester. Warning signs: swelling that doesn't resolve overnight, or sudden facial swelling with headache.",
    explanationNe: "दैनिक हराउने गोली सुन्निने तेस्रो त्रैमासिकमा पूर्ण सामान्य हो। चेतावनी: रातभर नहराउने सुन्निने, वा अचानक अनुहार सुन्निने र टाउको दुख्ने।"
  },
  {
    id: 14,
    title: "What is the glucose tolerance test checking for?",
    titleNe: "ग्लुकोज सहनशीलता परीक्षणले के जाँच गर्छ?",
    description: "Laxmi is 29 weeks pregnant and has been told to have a glucose tolerance test done this week.",
    descriptionNe: "लक्ष्मी २९ हप्ताकी गर्भवती छिन् र यो हप्ता ग्लुकोज सहनशीलता परीक्षण गर्न भनिएको छ।",
    options: [
      { text: "Whether the mother likes sweets", textNe: "आमालाई गुलियो मनपर्छ कि भनेर", isCorrect: false },
      { text: "It tests for gestational diabetes. A high result means dietary changes and monitoring are needed to keep blood sugar controlled.", textNe: "यसले गर्भकालीन मधुमेहको जाँच गर्छ। उच्च नतिजा भए आहार परिवर्तन र निगरानी आवश्यक छ।", isCorrect: true },
      { text: "Whether the baby will be overweight", textNe: "बच्चा बढी तौलसँग जन्मिन्छ कि भनेर", isCorrect: false }
    ],
    explanation: "The glucose tolerance test at 24–28 weeks screens for gestational diabetes. If results are high, it's managed with diet, monitoring, walking, and sometimes insulin.",
    explanationNe: "२४–२८ हप्तामा ग्लुकोज सहनशीलता परीक्षणले गर्भकालीन मधुमेहको जाँच गर्छ। उच्च नतिजा भए आहार, निगरानी, हिँडाइ, र कहिलेकाहीं इन्सुलिनबाट व्यवस्थापन गरिन्छ।"
  },
  {
    id: 15,
    title: "Is it safe to request early induction of labour without a medical reason?",
    titleNe: "चिकित्सकीय कारण बिना चाँडो प्रसव प्रेरण माग्न सुरक्षित छ?",
    description: "Kabita is 38 weeks pregnant and asks whether she should request early induction of labour.",
    descriptionNe: "कबिता ३८ हप्ताकी गर्भवती छिन् र चाँडो प्रसव प्रेरण माग्ने कि भनेर सोध्छिन्।",
    options: [
      { text: "Yes, delivering a week or two early is always safer", textNe: "हो, एक-दुई हप्ता चाँडो जन्माउनु सधैं सुरक्षित छ", isCorrect: false },
      { text: "Medical induction without a clear reason before 39 weeks increases the risk of complications for the baby. The final weeks still matter for development.", textNe: "३९ हप्ताभन्दा पहिले स्पष्ट कारण बिना प्रसव प्रेरणले बच्चाको जोखिम बढाउँछ। अन्तिम हप्ताहरू विकासका लागि महत्त्वपूर्ण छन्।", isCorrect: true },
      { text: "The earlier the better — hospitals are less busy", textNe: "जति चाँडो उति राम्रो — अस्पतालमा कम भीड हुन्छ", isCorrect: false }
    ],
    explanation: "The final weeks are important for lung maturity and weight gain. Elective induction before 39 weeks without medical reason increases NICU risk for the baby.",
    explanationNe: "अन्तिम हप्ताहरू फोक्सोको परिपक्वता र तौल बढ्नका लागि महत्त्वपूर्ण छन्। चिकित्सकीय कारण बिना ३९ हप्ताभन्दा पहिले प्रेरणले बच्चाको NICU जोखिम बढाउँछ।"
  },
  {
    id: 16,
    title: "What is the most practical preparation when the husband works away from home?",
    titleNe: "श्रीमान घरबाट टाढा काम गर्दा सबैभन्दा व्यावहारिक तयारी के हो?",
    description: "Sarita is 32 weeks pregnant and her husband works away from home. She is worried about being alone when labour starts.",
    descriptionNe: "सरिता ३२ हप्ताकी गर्भवती छिन् र उनका श्रीमान घरबाट टाढा काम गर्नुहुन्छ। प्रसव पीडा सुरु हुँदा एक्लै हुने कुरामा उनी चिन्तित छिन्।",
    options: [
      { text: "Move to the hospital now and wait there", textNe: "अहिले अस्पतालमा जाने र त्यहीं कुर्ने", isCorrect: false },
      { text: "Identify a clear plan: a designated backup person, all contacts saved and shared, hospital bag packed, and FCHV's number displayed prominently", textNe: "स्पष्ट योजना बनाउने: तोकिएको सहयोगी व्यक्ति, सबै सम्पर्क सेभ गरिएको, झोला तयार, र FCHV को नम्बर देखिने ठाउँमा राख्ने", isCorrect: true },
      { text: "Call her husband to come home immediately", textNe: "श्रीमानलाई तुरुन्तै घर आउन फोन गर्ने", isCorrect: false }
    ],
    explanation: "Prepare a clear plan with a specific backup person, emergency contacts on multiple phones, packed bag with location known, and FCHV number visible. Preparation is the best protection.",
    explanationNe: "विशिष्ट सहयोगी व्यक्ति, धेरै फोनमा आपतकालीन सम्पर्क, ठाउँ थाहा भएको तयार झोला, र FCHV नम्बर देखिने गरी स्पष्ट योजना बनाउनुहोस्। तयारी नै सबैभन्दा राम्रो सुरक्षा हो।"
  },
  {
    id: 17,
    title: "Is it normal to still be pregnant at 40 weeks and beyond?",
    titleNe: "४० हप्ता र त्यसभन्दा बढीमा अझै गर्भवती हुनु सामान्य हो?",
    description: "Deepa is 40 weeks pregnant and has not gone into labour yet. Her family is pushing her to go to hospital immediately.",
    descriptionNe: "दीपा ४० हप्ताकी गर्भवती छिन् र अझै प्रसव पीडा सुरु भएको छैन। परिवारले तुरुन्तै अस्पताल जान भनिरहेको छ।",
    options: [
      { text: "No — she must be induced immediately at exactly 40 weeks", textNe: "होइन — ठ्याक्कै ४० हप्तामा तुरुन्तै प्रेरण गर्नुपर्छ", isCorrect: false },
      { text: "Yes — a due date is an estimate. Only 5% of babies are born on the exact due date. Going to 40–41 weeks is completely normal.", textNe: "हो — नियत मिति अनुमान मात्र हो। केवल ५% बच्चा ठ्याक्कै नियत मितिमा जन्मिन्छन्। ४०–४१ हप्ता पूर्ण सामान्य हो।", isCorrect: true },
      { text: "She is definitely going to need a C-section", textNe: "उनलाई निश्चित रूपमा सिजेरियन चाहिन्छ", isCorrect: false }
    ],
    explanation: "A due date is an estimate, not a deadline. Most babies arrive between 38–42 weeks. Doctors typically discuss induction by 41–42 weeks if labour hasn't started.",
    explanationNe: "नियत मिति अनुमान हो, समयसीमा होइन। धेरैजसो बच्चा ३८–४२ हप्तामा जन्मिन्छन्। प्रसव सुरु नभए ४१–४२ हप्तामा डाक्टरले प्रेरणबारे छलफल गर्छन्।"
  },
  {
    id: 18,
    title: "What is the recommended sleeping position in the third trimester?",
    titleNe: "तेस्रो त्रैमासिकमा सिफारिस गरिएको सुत्ने स्थिति के हो?",
    description: "Rina is 35 weeks pregnant and asks if she should still be sleeping on her back.",
    descriptionNe: "रिना ३५ हप्ताकी गर्भवती छिन् र उनी अझै ढाडमा सुत्नुपर्छ कि भनेर सोध्छिन्।",
    options: [
      { text: "Only on the back with a pillow under the knees", textNe: "घुँडामुनि सिरानी राखेर ढाडमा मात्र", isCorrect: false },
      { text: "Left-side sleeping is preferred — it improves blood flow to the placenta and avoids compressing the vena cava", textNe: "बायाँ छेउमा सुत्नु उत्तम — प्लेसेन्टामा रक्तप्रवाह सुधार्छ र भेना काभा थिच्दैन", isCorrect: true },
      { text: "On the stomach with a donut pillow", textNe: "डोनट सिरानीसँग पेटमा", isCorrect: false }
    ],
    explanation: "Left-side sleeping optimises circulation to the placenta. If she wakes on her back, simply roll to the left — no need to panic.",
    explanationNe: "बायाँ छेउमा सुत्दा प्लेसेन्टामा रक्तसञ्चार उत्तम हुन्छ। ढाडमा ब्यूँझिए बायाँतिर पल्टिनु — आत्तिनु पर्दैन।"
  },
  {
    id: 19,
    title: "What is a birth plan and is it useful?",
    titleNe: "जन्म योजना के हो र यो उपयोगी छ?",
    description: "Mina is 37 weeks pregnant and asks if she should prepare a birth plan.",
    descriptionNe: "मिना ३७ हप्ताकी गर्भवती छिन् र जन्म योजना बनाउनुपर्छ कि भनेर सोध्छिन्।",
    options: [
      { text: "A legal document that forces doctors to follow your instructions", textNe: "कानुनी कागजात जसले डाक्टरलाई तपाईंको निर्देशन पालना गर्न बाध्य पार्छ", isCorrect: false },
      { text: "A written note of the mother's preferences — who should be in the room, pain management wishes, breastfeeding plans. Useful for communication, not binding.", textNe: "आमाको प्राथमिकताको लिखित नोट — कोठामा को हुनुपर्छ, दुखाइ व्यवस्थापन, स्तनपान योजना। सञ्चारका लागि उपयोगी, बाध्यकारी होइन।", isCorrect: true },
      { text: "Something only wealthy people in cities need", textNe: "शहरका धनी मानिसलाई मात्र चाहिने", isCorrect: false }
    ],
    explanation: "A birth plan summarises the mother's preferences for labour. It's not legally binding but improves communication with the healthcare team.",
    explanationNe: "जन्म योजनाले प्रसूतिका लागि आमाको प्राथमिकता संक्षेपमा राख्छ। यो कानुनी रूपमा बाध्यकारी छैन तर स्वास्थ्य टोलीसँग सञ्चार सुधार्छ।"
  },
  {
    id: 20,
    title: "How do nutritional needs change in the third trimester?",
    titleNe: "तेस्रो त्रैमासिकमा पोषणको आवश्यकता कसरी परिवर्तन हुन्छ?",
    description: "Sunita is 28 weeks pregnant and asks what she should eat differently in the third trimester.",
    descriptionNe: "सुनिता २८ हप्ताकी गर्भवती छिन् र तेस्रो त्रैमासिकमा के फरक खानुपर्छ भनेर सोध्छिन्।",
    options: [
      { text: "She should eat much less to avoid a large baby", textNe: "ठूलो बच्चाबाट बच्न धेरै कम खानुपर्छ", isCorrect: false },
      { text: "Calorie needs increase slightly. Calcium, iron, and omega-3 rich foods become particularly important for the baby's bones, blood, and brain development.", textNe: "क्यालोरी आवश्यकता अलि बढ्छ। क्याल्सियम, आइरन, र ओमेगा-३ युक्त खाना बच्चाको हड्डी, रगत, र मस्तिष्क विकासका लागि विशेष महत्त्वपूर्ण हुन्छ।", isCorrect: true },
      { text: "She should stop eating any fats", textNe: "कुनै पनि बोसो खाना बन्द गर्नुपर्छ", isCorrect: false }
    ],
    explanation: "The third trimester has the most rapid baby growth. Key focuses: calcium for bones, iron for blood, omega-3 for brain development. Eat balanced nutrient-dense meals.",
    explanationNe: "तेस्रो त्रैमासिकमा बच्चाको सबैभन्दा छिटो वृद्धि हुन्छ। मुख्य: हड्डीका लागि क्याल्सियम, रगतका लागि आइरन, मस्तिष्क विकासका लागि ओमेगा-३। सन्तुलित पोषणयुक्त खाना खाने।"
  }
];
