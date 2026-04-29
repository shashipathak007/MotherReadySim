import { Scenario } from './firstTrimesterScenarios';

export const SECOND_TRIMESTER_SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "What does a haemoglobin of 9.5 mean for a pregnant woman?",
    titleNe: "गर्भवती हुँदा हेमोग्लोबिन ९.५ हुनुको अर्थ के हो?",
    description: "Sima is 16 weeks pregnant and was told her haemoglobin is 9.5 g/dL at her ANC checkup.",
    descriptionNe: "सिमा १६ हप्ताकी गर्भवती छिन् र जाँच गराउँदा उनको हेमोग्लोबिन ९.५ g/dL देखियो।",
    options: [
      { text: "Perfectly normal for pregnancy", textNe: "गर्भवती हुँदा सामान्य हो", isCorrect: false },
      { text: "Mild anaemia, needs iron tablets", textNe: "रगतको कमी छ, आइरन चक्की खाने", isCorrect: true },
      { text: "Needs immediate blood transfusion", textNe: "तुरुन्तै रगत चढाउनुपर्छ", isCorrect: false }
    ],
    explanation: "Normal haemoglobin for a pregnant woman is above 11 g/dL. A reading of 9.5 means mild to moderate anaemia. Sima should take iron tablets daily, eat iron-rich foods, and add vitamin C to improve absorption.",
    explanationNe: "गर्भवती महिलाको हेमोग्लोबिन सामान्यतया ११ g/dL भन्दा माथि हुनुपर्छ। ९.५ हुनु भनेको रगतको कमी हुनु हो। सिमाले दिनदिनै आइरन चक्की खानुपर्छ, रगत बढाउने खानेकुरा खानुपर्छ र कागती, अमला जस्ता भिटामिन सी पाइने कुरा खाएमा आइरन राम्ररी पच्छ।"
  },
  {
    id: 2,
    title: "What is this fluttering sensation Kamala is feeling?",
    titleNe: "कमलाले पेटमा महसुस गरिरहेको यो चलेको जस्तो कुरा के हो?",
    description: "Kamala is 18 weeks pregnant and feels something like a butterfly flutter in her belly.",
    descriptionNe: "कमला १८ हप्ताकी गर्भवती छिन् र उनलाई पेटमा केही चलेको वा पुतली उडेको जस्तो महसुस भइरहेको छ।",
    options: [
      { text: "Gas or indigestion", textNe: "ग्यास वा अपचले हो", isCorrect: false },
      { text: "First baby movements (quickening)", textNe: "बच्चा चल्न थालेको पहिलो संकेत", isCorrect: true },
      { text: "A sign she needs more calcium", textNe: "क्याल्सियम चाहिएको हो", isCorrect: false }
    ],
    explanation: "Quickening — the first time a mother feels her baby move — typically happens between weeks 16–22 for first-time mothers. It often feels like gentle flutters, bubbles, or tapping.",
    explanationNe: "पहिलो पटक आमा बन्दा बच्चा पेटमा चलेको महसुस प्रायः १६ देखि २२ हप्ताको बीचमा हुन्छ। यो सुरुमा पेटमा हावाको फोका फुटेको वा हल्का केही चलेको जस्तो मात्र लाग्छ।"
  },
  {
    id: 3,
    title: "What does a low-lying placenta at 20 weeks mean?",
    titleNe: "२० हप्तामा साल (प्लेसेन्टा) तल हुनुको अर्थ के हो?",
    description: "Priya is 20 weeks pregnant and her anomaly scan shows the placenta is positioned low but the doctor said to recheck at 32 weeks.",
    descriptionNe: "प्रिया २० हप्ताकी गर्भवती छिन्। भिडियो एक्स-रे (अल्ट्रासाउन्ड) गर्दा उनको साल अलि तल देखियो, तर डाक्टरले ३२ हप्तामा फेरि हेर्नुपर्छ भन्नुभयो।",
    options: [
      { text: "Immediate C-section required", textNe: "तुरुन्त अप्रेसन गर्ने", isCorrect: false },
      { text: "Usually moves up as uterus grows", textNe: "पाठेघर बढ्दै जाँदा आफैं माथि सर्छ", isCorrect: true },
      { text: "Baby in danger, needs hospital", textNe: "खतरा छ, अस्पताल भर्ना गर्ने", isCorrect: false }
    ],
    explanation: "Low-lying placenta at 20 weeks is found in about 1 in 20 pregnancies, but in 90% of cases the placenta moves up as the uterus grows. It only becomes a concern if it remains low at 32–36 weeks.",
    explanationNe: "२० हप्तामा साल तल देखिनु २० मध्ये १ महिलामा हुन्छ। तर ९०% जतिमा पाठेघर ठूलो हुँदै जाँदा यो आफैं माथि तानिन्छ। ३२ देखि ३६ हप्तासम्म पनि तलै रह्यो भने मात्र अलि चिन्ताको कुरा हुन्छ।"
  },
  {
    id: 4,
    title: "Why is lower back pain common in the second trimester and what helps?",
    titleNe: "गर्भावस्थाको बीचतिर कम्मर दुख्नु किन सामान्य हो र यसमा केले राहत दिन्छ?",
    description: "Sunita is 22 weeks pregnant and has lower back pain after standing for long periods at her market stall.",
    descriptionNe: "सुनिता २२ हप्ताकी गर्भवती छिन्। पसलमा लामो समय उभिएर काम गर्दा उनको कम्मर धेरै दुख्ने गर्छ।",
    options: [
      { text: "Spine problem, needs X-ray", textNe: "ढाडको समस्या, एक्स-रे गर्ने", isCorrect: false },
      { text: "Uterus shifts gravity, stretch & rest", textNe: "तौल अगाडि परेर हो, आराम गर्ने", isCorrect: true },
      { text: "Must stop working instantly", textNe: "काम गर्न तुरुन्तै छोड्ने", isCorrect: false }
    ],
    explanation: "Lower back pain affects around 50–70% of pregnant women from the second trimester. As the uterus grows, the centre of gravity shifts forward. Gentle stretching, supportive footwear, and seated breaks help.",
    explanationNe: "गर्भावस्थाको बीचतिर ५० देखि ७० प्रतिशत महिलालाई कम्मर दुख्ने समस्या हुन्छ। पेट बढ्दै जाँदा शरीरको ब्यालेन्स मिल्दैन। यस्तो बेला हल्का व्यायाम गर्ने, सजिलो जुत्ता लगाउने र बीच-बीचमा बसेर आराम गर्दा धेरै कम हुन्छ।"
  },
  {
    id: 5,
    title: "Does eating extra ghee make the baby's skin fairer or delivery easier?",
    titleNe: "धेरै घिउ खाँदा बच्चा गोरो जन्मिने र सुत्केरी हुन सजिलो हुन्छ भन्ने कुरा साँचो हो?",
    description: "Nisha is 24 weeks pregnant. Her mother-in-law advises her to eat a lot of ghee to make the baby's skin fair and delivery easier.",
    descriptionNe: "निशा २४ हप्ताकी गर्भवती छिन्। उनकी सासूले बच्चा गोरो जन्मियोस् र सुत्केरी हुन सजिलो होस् भनेर धेरै घिउ खान भनिरहनुभएको छ।",
    options: [
      { text: "Ghee makes skin fair & delivery easy", textNe: "यसले बच्चा गोरो र सुत्केरी सजिलो हुन्छ", isCorrect: false },
      { text: "Genetics decide skin; ghee adds fat", textNe: "जीनमा भर पर्छ, घिउले तौल बढाउँछ", isCorrect: true },
      { text: "Only if mixed with milk", textNe: "दूधसँग मिसाएर मात्र खाने", isCorrect: false }
    ],
    explanation: "Skin colour is determined entirely by genetics — no food can change it. Ghee in moderate amounts is fine nutritionally but large amounts add excess saturated fat without benefit.",
    explanationNe: "बच्चाको छाला गोरो वा कालो हुने कुरा आमाबुबाबाटै आउँछ, खानेकुराले यसमा कुनै फरक पार्दैन। ठिक्क मात्रामा घिउ खानु शरीरलाई राम्रो हो तर धेरै खाँदा शरीरमा अनावश्यक बोसो (फ्याट) मात्र जम्मा हुन्छ जसले फाइदा गर्दैन।"
  },
  {
    id: 6,
    title: "Why is blood group compatibility important during pregnancy?",
    titleNe: "गर्भावस्थामा आमा र बुबाको ब्लड ग्रुप किन थाहा पाउनुपर्छ?",
    description: "Mina is 19 weeks pregnant and her husband asks why they need to know the blood group of both parents.",
    descriptionNe: "मिना १९ हप्ताकी गर्भवती छिन्। उनका श्रीमानले 'हामी दुबैको ब्लड ग्रुप किन जाँच्नुपर्छ?' भनेर सोधेका छन्।",
    options: [
      { text: "Only needed if surgery required", textNe: "अप्रेसन गर्नुपरे मात्र चाहिन्छ", isCorrect: false },
      { text: "To prevent Rh incompatibility", textNe: "रगतको ग्रुप नमिलेर हुने खतरा रोक्न", isCorrect: true },
      { text: "Only for blood transfusions", textNe: "रगत चढाउन मात्र चाहिन्छ", isCorrect: false }
    ],
    explanation: "Rh incompatibility occurs when an Rh-negative mother carries an Rh-positive baby. It is completely preventable with an Rh immunoglobulin injection given at 28 weeks and after delivery.",
    explanationNe: "नेगेटिभ ब्लड ग्रुप भएकी आमाको गर्भमा पोजेटिभ ब्लड ग्रुप भएको बच्चा हुँदा दुई थरी रगत नमिलेर समस्या आउन सक्छ। यसलाई रोक्न २८ हप्तामा र सुत्केरी भएपछि एउटा विशेष सुई लगाएमा बच्चालाई कुनै असर गर्दैन।"
  },
  {
    id: 7,
    title: "Why do pregnant women feel more emotionally sensitive?",
    titleNe: "गर्भवती महिलाहरू किन धेरै भावुक हुन्छन्?",
    description: "Anita is 21 weeks pregnant and feels more emotional than usual — crying at small things.",
    descriptionNe: "अनिता २१ हप्ताकी गर्भवती छिन्। उनी आजकल सानातिना कुरामा पनि रुने गर्छिन् र पहिलेभन्दा धेरै भावुक छिन्।",
    options: [
      { text: "Overreacting, needs to be strong", textNe: "धेरै सोचेर हो, बलियो हुनुपर्छ", isCorrect: false },
      { text: "Hormonal changes affect mood", textNe: "हर्मोनको कारणले हो, यो सामान्य हो", isCorrect: true },
      { text: "Depression, needs medicine", textNe: "डिप्रेसन हो, औषधि खाइहाल्ने", isCorrect: false }
    ],
    explanation: "Oestrogen and progesterone affect the same brain chemistry that regulates mood. Mild emotional sensitivity is completely normal. Persistent low mood may indicate prenatal depression, which is treatable.",
    explanationNe: "गर्भावस्थामा हर्मोनहरु धेरै घटबढ हुने भएकाले मुड छिनछिनमा फेरिरहन्छ। अलिअलि भावुक हुनु वा रुन मन लाग्नु सामान्य कुरा हो। तर सधैंभरि एकदमै उदास वा निराश भइरह्यो भने चाहिँ डाक्टरसँग सल्लाह लिनुपर्छ, यो प्रेग्नेन्सी डिप्रेसन हुन सक्छ।"
  },
  {
    id: 8,
    title: "What does fundal height measurement tell the health worker?",
    titleNe: "पेट नाप्ने (फन्डल हाइट नाप्ने) कामले स्वास्थ्यकर्मीलाई के मा मद्दत गर्छ?",
    description: "Parbati is 23 weeks pregnant and the nurse measures her fundal height at 23 cm.",
    descriptionNe: "पार्वती २३ हप्ताकी गर्भवती छिन् र नर्सले टेपले नाप्दा उनको पेटको उचाइ २३ सेन्टिमिटर देखियो।",
    options: [
      { text: "Check if mother is overweight", textNe: "आमाको तौल धेरै छ कि भनेर जाँच्न", isCorrect: false },
      { text: "Estimate baby's growth in weeks", textNe: "बच्चा कति बढ्यो भनेर नाप्न", isCorrect: true },
      { text: "Check baby's gender", textNe: "छोरा कि छोरी हेर्न", isCorrect: false }
    ],
    explanation: "Fundal height in centimetres roughly equals gestational age in weeks (±2 cm). It is a simple, free, and effective way to monitor fetal growth at every ANC visit.",
    explanationNe: "पेटको उचाइ सेन्टिमिटरमा नाप्दा त्यो गर्भावस्थाका हप्ताहरूसँग लगभग बराबर (२ से.मि. तलमाथि) हुन्छ। भिडियो एक्स-रे नगरीकनै बच्चा ठीक तरिकाले हुर्किरहेको छ कि छैन भनेर जाँच्ने यो निकै सजिलो र राम्रो तरिका हो।"
  },
  {
    id: 9,
    title: "Is painting a room safe during the second trimester?",
    titleNe: "गर्भावस्थामा घर वा कोठामा पेन्ट (रङ्ग) लगाउने ठाउँमा बस्नु सुरक्षित हुन्छ?",
    description: "Devi is 25 weeks pregnant and wants to paint the baby's room. She asks if painting is safe.",
    descriptionNe: "देवी २५ हप्ताकी गर्भवती छिन् र आउने बच्चाको लागि कोठा पेन्ट गराउन चाहन्छिन्। उनले यस्तो बेला पेन्टको काम वरपर बस्न सुरक्षित हुन्छ कि हुँदैन भनेर सोध्दै छिन्।",
    options: [
      { text: "All paints are fully safe", textNe: "सबै पेन्ट सुरक्षित हुन्छन्", isCorrect: false },
      { text: "Avoid fumes, stay away 24-48hrs", textNe: "गन्धबाट बच्ने, टाढा बस्ने", isCorrect: true },
      { text: "Only oil paints are dangerous", textNe: "तेल मिसाएको पेन्ट मात्र खतरनाक हुन्छ", isCorrect: false }
    ],
    explanation: "Many paints contain volatile organic compounds that release harmful fumes. The safest approach is to have someone else paint, use low-VOC paint, keep ventilation, and avoid the room for 24–48 hours.",
    explanationNe: "धेरैजसो पेन्टमा केमिकलको गन्ध आउँछ जसले गर्भवतीलाई असर गर्न सक्छ। आफूले पेन्ट नगर्ने, हावा ओहोरदोहोर हुने गरी झ्याल ढोका खुला राख्ने र पेन्ट सुकेको २४ देखि ४८ घन्टासम्म त्यो कोठामा नबस्नु नै सबैभन्दा सुरक्षित मानिन्छ।"
  },
  {
    id: 10,
    title: "What commonly causes leg cramps during pregnancy?",
    titleNe: "गर्भावस्थामा राति सुत्दा खुट्टा बाउँडिने किन हुन्छ?",
    description: "Bindu is 17 weeks pregnant and has been getting leg cramps at night.",
    descriptionNe: "बिन्दु १७ हप्ताकी गर्भवती छिन् र राति सुत्दा उनको खुट्टा पटक-पटक बाउँडिने गर्छ।",
    options: [
      { text: "Exercising too much, needs rest", textNe: "धेरै हिँडेर हो, आराम गर्ने", isCorrect: false },
      { text: "Low calcium, fluid, or circulation", textNe: "क्याल्सियम र पानीको कमीले हो", isCorrect: true },
      { text: "Baby kicking the muscles", textNe: "बच्चाले लात हानेर हो", isCorrect: false }
    ],
    explanation: "Nocturnal leg cramps are common from the second trimester. They are linked to reduced circulation, low calcium or magnesium, and dehydration. Stretching before bed and eating calcium-rich foods helps.",
    explanationNe: "गर्भावस्थाको बीचतिरबाट राति खुट्टा बाउँडिने समस्या धेरैलाई हुन्छ। यो शरीरमा क्याल्सियम वा पानीको कमीले र रगत राम्रोसँग प्रवाह नहुँदा हुन्छ। सुत्नुअघि खुट्टा तन्काउने (स्ट्रेचिङ गर्ने), दिनभरि पर्याप्त पानी पिउने र क्याल्सियम पाइने खानेकुरा खाँदा यसबाट बच्न सकिन्छ।"
  },
  {
    id: 11,
    title: "What is the glucose screening test checking for?",
    titleNe: "गर्भावस्थामा सुगर (ग्लुकोज) टेस्ट किन गरिन्छ?",
    description: "Gita is 20 weeks pregnant and told she needs a glucose screening test at 24–28 weeks.",
    descriptionNe: "गीता २० हप्ताकी गर्भवती छिन्। डाक्टरले उनलाई २४ देखि २८ हप्ताको बीचमा ग्लुकोज पानी पिएर सुगर टेस्ट गराउन भनेका छन्।",
    options: [
      { text: "Check if mother likes sweet food", textNe: "गुलियो खानेकुरा पच्छ कि पच्दैन हेर्न", isCorrect: false },
      { text: "Screen for gestational diabetes", textNe: "सुगर रोग पत्ता लगाउन", isCorrect: true },
      { text: "Check if baby has diabetes", textNe: "बच्चालाई सुगर छ कि हेर्न", isCorrect: false }
    ],
    explanation: "Gestational diabetes affects about 5–10% of pregnancies. Pregnancy hormones block insulin from working normally. If detected, it can be managed through diet, exercise, and sometimes medication.",
    explanationNe: "गर्भावस्थामा ५-१० प्रतिशत महिलालाई हर्मोनको कारणले पहिले सुगर नभए पनि सुगर देखिन सक्छ। यदि टेस्टमा सुगर देखियो भने खानपानमा ध्यान दिएर र हल्का हिँडडुल गरेर सजिलै नियन्त्रणमा राख्न सकिन्छ।"
  },
  {
    id: 12,
    title: "Is there any medical concern about a pregnant woman attending a funeral?",
    titleNe: "गर्भवती महिला मलामी वा काजकिरियामा जानु स्वास्थ्यको हिसाबले सुरक्षित छ त?",
    description: "Rita is 22 weeks pregnant and her family says she should not attend funerals during pregnancy.",
    descriptionNe: "रिता २२ हप्ताकी गर्भवती छिन्। उनको परिवारले यस्तो अवस्थामा मृत्युको काम (काजकिरिया वा मलामी) मा जान हुँदैन भन्दैछन्।",
    options: [
      { text: "Funeral stress directly harms baby", textNe: "तनावले बच्चालाई सिधै असर गर्छ", isCorrect: false },
      { text: "Safe, but watch crowds and standing", textNe: "सुरक्षित छ, भिडभाडमा ध्यान दिने", isCorrect: true },
      { text: "Never leave house in trimester 2", textNe: "यस्तो बेला घर बाहिर निस्कनै हुँदैन", isCorrect: false }
    ],
    explanation: "There is no medical contraindication. Grief is natural and important. Be mindful of practical things: long standing, crowds, heat, and exhaustion. Sit when possible and stay hydrated.",
    explanationNe: "डाक्टरी हिसाबले मलामी वा किरियापुत्रीकोमा जाँदा कुनै बेफाइदा गर्दैन। दुःखको बेला परिवारसँग बस्नु स्वभाविक हो। तर त्यहाँ लामो समय उभिँदा, भिडभाडले गर्दा सास फेर्न गाह्रो हुने वा गर्मीले थकाइ लाग्न सक्छ। त्यसैले पानी प्रशस्त पिउने र बेलाबेला बस्ने गर्नुपर्छ।"
  },
  {
    id: 13,
    title: "Should Laxmi be worried about breech position at 26 weeks?",
    titleNe: "२६ हप्तामा छाती भिडियो एक्स-रे गर्दा बच्चा उल्टो (ब्रीच) छ भन्यो भने चिन्ता गर्नुपर्छ?",
    description: "Laxmi is 26 weeks pregnant and is told the baby is in a breech position.",
    descriptionNe: "लक्ष्मी २६ हप्ताकी गर्भवती छिन् र डाक्टरले बच्चा उल्टो बसेको (Breech) छ भनेका छन्।",
    options: [
      { text: "Needs C-section scheduled instantly", textNe: "तुरुन्तै अप्रेसनको तयारी गरिहाल्ने", isCorrect: false },
      { text: "Normal, babies turn head-down later", textNe: "सामान्य हो, पछि आफैं सुल्टो हुन्छ", isCorrect: true },
      { text: "Needs exercises every hour", textNe: "हरेक घण्टा व्यायाम गर्नुपर्छ", isCorrect: false }
    ],
    explanation: "At 26 weeks, breech presentation is actually normal. Babies have plenty of room to move and about 75–80% spontaneously turn head-down by 36 weeks. It only becomes a concern at 36+ weeks.",
    explanationNe: "२६ हप्तामा बच्चा उल्टो हुनु एकदमै सामान्य हो। बच्चालाई पाठेघरभित्र घुमफिर गर्न यो बेला प्रशस्त ठाउँ हुन्छ। करिब ७५-८० प्रतिशत बच्चाहरू जन्मने बेला (३६ हप्ता) सम्ममा आफैं टाउको तल गरेर बस्छन्। ३६ हप्तासम्म पनि सुल्टो भएन भने मात्र डाक्टरसँग सल्लाह गर्नुपर्छ।"
  },
  {
    id: 14,
    title: "What is the dark line on the belly and is it normal?",
    titleNe: "पेटमा बिचबाट तलसम्म देखिने कालो धर्सो के हो, र यो सामान्य हो त?",
    description: "Sarita is 18 weeks pregnant and notices a dark vertical line appearing on her belly.",
    descriptionNe: "सरिता १८ हप्ताकी गर्भवती छिन् र उनले भर्खरै आफ्नो पेटको बिचमा ठाडो कालो धर्सो पलाएको देखेकी छिन्।",
    options: [
      { text: "Stretch mark, needs cream", textNe: "स्ट्रेच मार्क हो, क्रिम लगाउने", isCorrect: false },
      { text: "Linea nigra, normal hormonal line", textNe: "हर्मोनले गर्दा हो, पछि आफैं हराउँछ", isCorrect: true },
      { text: "Sign of skin infection", textNe: "छालाको इन्फेक्सनको संकेत हो", isCorrect: false }
    ],
    explanation: "Linea nigra appears in about 75% of pregnant women. It is caused by increased melanocyte-stimulating hormones. It typically fades in the months after delivery. No treatment is needed.",
    explanationNe: "यस्तो रेखा लगभग ७५ प्रतिशत गर्भवती महिलामा देखिन्छ। यो गर्भावस्थामा हर्मोन बढ्दा छालामा आउने स्वाभाविक परिवर्तन हो। सुत्केरी भएको केही महिनापछि यो आफैं हराएर जान्छ, यसको लागि कुनै क्रिम वा उपचार चाहिँदैन।"
  },
  {
    id: 15,
    title: "What is perineal massage and when is it recommended?",
    titleNe: "'पेरिनियल मसाज' भनेको के हो र यो कहिलेदेखि गर्ने सल्लाह दिइन्छ?",
    description: "Deepa is 24 weeks pregnant and has been told to start doing perineal massage to prepare for delivery.",
    descriptionNe: "दीपा २४ हप्ताकी गर्भवती छिन्। उनलाई पछि सुत्केरी हुँदा सजिलो होस् भनेर 'पेरिनियल मसाज' (योनी र मलद्वार बिचको भागको मालिस) सुरु गर्न सल्लाह दिइएको छ।",
    options: [
      { text: "Full body hospital massage", textNe: "अस्पतालमा पुरै शरीरको मालिस", isCorrect: false },
      { text: "Improves elasticity, started later", textNe: "मासु लचिलो बनाउँछ, तर अन्तिमतिर मात्र गर्ने", isCorrect: true },
      { text: "Helps baby turn head-down", textNe: "बच्चालाई उल्टोबाट सुल्टो बनाउँछ", isCorrect: false }
    ],
    explanation: "Perineal massage reduces the risk of severe tearing during delivery, particularly for first-time mothers. It is recommended from 34–36 weeks — not from 24 weeks, which is too early.",
    explanationNe: "सुत्केरी हुने बेला योनीको भाग धेरै नच्यातियोस् भनेर यो मालिस गरिन्छ, विशेष गरी पहिलो बच्चा हुँदा। यसले मासुलाई लचिलो बनाउँछ। तर यो मालिस बच्चा जन्मिने समय नजिकिँदै गर्दा (३४-३६ हप्तामा) गर्नुपर्छ, २४ हप्तामा सुरु गर्नु धेरै चाँडो हुन्छ।"
  },
  {
    id: 16,
    title: "How important is calcium during the second trimester?",
    titleNe: "गर्भावस्थाको बिचतिर क्याल्सियम खानु कत्तिको जरुरी हुन्छ?",
    description: "Kabita is 19 weeks pregnant and her neighbour says she should drink a lot of milk to ensure the baby has strong bones.",
    descriptionNe: "कबिता १९ हप्ताकी गर्भवती छिन्। उनकी छिमेकीले 'बच्चाको हड्डी बलियो बनाउन धेरै दूध पिउनू' भनिरहेकी छिन्।",
    options: [
      { text: "Only important in 3rd trimester", textNe: "अन्तिम ३ महिनामा मात्र चाहिन्छ", isCorrect: false },
      { text: "Crucial for baby's bones and teeth", textNe: "गर्भावस्थाभरि नै एकदमै जरुरी हुन्छ", isCorrect: true },
      { text: "Only milk counts for calcium", textNe: "दूध पिए मात्र पुग्छ", isCorrect: false }
    ],
    explanation: "Calcium is critical throughout pregnancy for the baby's skeleton, teeth, heart, muscles, and nerves. If the mother does not get enough, the body takes calcium from her own bones. Many food sources provide calcium beyond just milk.",
    explanationNe: "बच्चाको हड्डी र दाँत बन्नको लागि क्याल्सियम नभई हुँदैन। आमाले पर्याप्त क्याल्सियम पाइनन् भने बच्चाले आमाको हड्डीबाट खिचेर लिन्छ। दूधबाहेक कोदो, भटमास, ब्रोकाउली, तिल र डाक्टरले दिएको चक्की खानुपर्छ।"
  },
  {
    id: 17,
    title: "Is long-distance vehicle travel safe at 23 weeks?",
    titleNe: "२३ हप्ताको गर्भमा लामो यात्रा वा गाडीको सफर गर्नु सुरक्षित हुन्छ?",
    description: "Hira is 23 weeks pregnant and asks if she can travel in a vehicle for 3 hours to visit her mother.",
    descriptionNe: "हिरा २३ हप्ताकी गर्भवती छिन्। उनी आफ्नी आमालाई भेट्न गाडी वा बसमा ३ घण्टाको बाटो यात्रा गर्न मिल्छ कि मिल्दैन भनेर जान्न चाहन्छिन्।",
    options: [
      { text: "No travel after 12 weeks", textNe: "१२ हप्तापछि यात्रा गर्नै मिल्दैन", isCorrect: false },
      { text: "Safe, take breaks and drink water", textNe: "सुरक्षित छ, बिचमा आराम गर्ने", isCorrect: true },
      { text: "Only travel in ambulance", textNe: "एम्बुलेन्समा मात्र जान मिल्छ", isCorrect: false }
    ],
    explanation: "The second trimester is often called the safe window for travel. A 3-hour journey is generally fine with seatbelt positioned below the belly, hourly breaks to walk, and staying hydrated.",
    explanationNe: "गर्भावस्थाको बीचको समय (१४ देखि २८ हप्तासम्म) यात्रा गर्नको लागि सबैभन्दा सुरक्षित समय मानिन्छ। ३ घण्टा जतिको यात्रा गर्दा आत्तिनुपर्दैन। गाडीमा सिटबेल्ट पेटमुनि लगाउने, हरेक एक-दुई घण्टामा ओर्लेर केही बेर हिँड्ने र पानी प्रशस्त पिउने गर्नुपर्छ।"
  },
  {
    id: 18,
    title: "Is sexual intercourse safe during a normal second-trimester pregnancy?",
    titleNe: "गर्भावस्थाको बीचतिर (दोस्रो त्रैमासिकमा) श्रीमान-श्रीमतीबीच शारीरिक सम्बन्ध राख्नु सुरक्षित हुन्छ?",
    description: "Puja is 25 weeks pregnant and her partner wants to know if it is safe to continue having intimate relations during pregnancy.",
    descriptionNe: "पूजा २५ हप्ताकी गर्भवती छिन्। उनका श्रीमानले यो समयमा शारीरिक सम्बन्ध राख्दा बच्चालाई असर पर्छ कि पर्दैन भनेर सोधिरहेका छन्।",
    options: [
      { text: "Dangerous at any stage", textNe: "पूरै असुरक्षित, असर गर्छ", isCorrect: false },
      { text: "Safe in a normal pregnancy", textNe: "सामान्य अवस्थामा एकदमै सुरक्षित छ", isCorrect: true },
      { text: "Only safe in first trimester", textNe: "पहिलो ३ महिना मात्र सुरक्षित", isCorrect: false }
    ],
    explanation: "In a normal pregnancy without complications, intimate relations are safe throughout. The baby is completely protected by the amniotic sac and fluid. Doctors advise avoidance only in specific high-risk situations.",
    explanationNe: "सामान्य अवस्थाको प्रेग्नेन्सीमा शारीरिक सम्बन्ध राख्दा बच्चालाई कुनै चोटपटक लाग्दैन। बच्चा पाठेघरभित्र पानीको थैलीमा सुरक्षित हुन्छ। तर रगत बगेको छ, पाठेघरको मुख पहिला नै खुलेको छ वा डाक्टरले विशेष आराम गर्न भनेका छन् भने चाहिँ सम्बन्ध राख्नु हुँदैन।"
  },
  {
    id: 19,
    title: "Why do hands and feet swell during the second trimester?",
    titleNe: "गर्भवती हुँदा हात-खुट्टा सुन्निने समस्या किन हुन्छ?",
    description: "Maya is 21 weeks pregnant. She noticed her shoes no longer fit and her rings are tight.",
    descriptionNe: "माया २१ हप्ताकी गर्भवती छिन्। पहिलेको जुत्ताले अहिले खुट्टा थिच्छ र औंलामा औंठी पनि कसिलो भएर निकाल्न गाह्रो भएको छ।",
    options: [
      { text: "Too much salt, stop salt", textNe: "नुन धेरै खाएर हो, नुन खानै छोड्ने", isCorrect: false },
      { text: "Normal fluid and blood increase", textNe: "रगत र पानी बढेकोले हो, सामान्य हो", isCorrect: true },
      { text: "Sign of failing kidneys", textNe: "किड्नी खराब भएको लक्षण हो", isCorrect: false }
    ],
    explanation: "Mild swelling is very common and normal during pregnancy. Blood volume increases by approximately 50% and extra fluid is retained. Watch for sudden facial swelling with headache — that is a warning sign of preeclampsia.",
    explanationNe: "गर्भावस्थामा शरीरमा रगत र पानीको मात्रा धेरै बढ्ने भएकोले दिनभरि हिँड्दा वा उभिँदा बेलुकासम्म खुट्टा अलिकति सुन्निनु सामान्य हो। तर यदि अचानक हातखुट्टासँगै अनुहार पनि सुन्नियो र ज्यादै टाउको दुख्यो भने चाहिँ प्रेसर बढेको हुन सक्छ, तुरुन्तै डाक्टरलाई देखाउनुपर्छ।"
  },
  {
    id: 20,
    title: "What type of exercise is most beneficial in the second trimester?",
    titleNe: "गर्भवती हुँदा कुन-कुन व्यायाम (कसरत) गर्नु राम्रो हो?",
    description: "Suna is 16 weeks pregnant and asks if she should start doing special exercises to prepare for delivery.",
    descriptionNe: "सुना १६ हप्ताकी गर्भवती छिन्। उनले नर्मल डेलिभरी सजिलो होस् भनेर अहिलेदेखि कुनै व्यायाम गर्नुपर्छ कि पर्दैन भनेर सोध्दै छिन्।",
    options: [
      { text: "No exercise should be done", textNe: "कुनै व्यायाम गर्नै हुँदैन", isCorrect: false },
      { text: "Walking, yoga, or Kegel exercises", textNe: "वाक गर्ने, योग र सुरक्षित व्यायाम गर्ने", isCorrect: true },
      { text: "Heavy weight training only", textNe: "गह्रौँ भारी उठाउने काम मात्र गर्ने", isCorrect: false }
    ],
    explanation: "The second trimester is an ideal time to establish a gentle exercise routine. Walking, swimming, prenatal yoga, and Kegel exercises are all recommended and safe in a normal pregnancy.",
    explanationNe: "गर्भावस्थाको १६ हप्ता पछि बिस्तारै हल्का व्यायाम सुरु गर्नु राम्रो हो। बिहान-बेलुका आधा घन्टा जति हिँड्ने (वाक गर्ने), सजिलो खाले योग गर्ने र पेल्भिक व्यायाम गर्दा सुत्केरी हुन सजिलो हुन्छ भने ढाड दुख्ने समस्या पनि कम हुन्छ।"
  }
];
