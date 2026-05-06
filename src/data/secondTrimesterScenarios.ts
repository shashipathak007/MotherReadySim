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
  },
  {
    id: 21,
    title: "Sima notices her belly button poking out at 22 weeks — is something wrong?",
    titleNe: "सिमाको नाइटो २२ हप्तामा बाहिर निस्किन थाल्यो — के यो सामान्य हो?",
    description: "Sima is 22 weeks pregnant and her belly button is starting to pop outward.",
    descriptionNe: "सिमा २२ हप्ताकी गर्भवती छिन् र उनको नाइटो बिस्तारै बाहिरतिर निस्किन थालेको छ।",
    options: [
      { text: "Hernia — needs surgery", textNe: "हर्निया भएको हो, अप्रेसन गर्नुपर्छ", isCorrect: false },
      { text: "Normal — uterus pushes belly button out", textNe: "सामान्य हो — पाठेघर बढ्दा नाइटो बाहिर धकेलिन्छ", isCorrect: true },
      { text: "Baby is pushing the wrong way", textNe: "बच्चाले गलत ठाउँमा बल गरेको हो", isCorrect: false }
    ],
    explanation: "As the uterus expands, it pushes the belly button outward in many pregnancies. It is completely harmless and returns to normal after delivery.",
    explanationNe: "पाठेघरको आकार बढ्दै जाँदा धेरैजसो गर्भवती महिलाको नाइटो बाहिरतिर धकेलिन्छ। यो पूर्णतया सामान्य हो र सुत्केरी भएपछि यो आफैं पहिलेकै अवस्थामा फर्कन्छ।"
  },
  {
    id: 22,
    title: "Should Kamala start sleeping on her left side at 20 weeks?",
    titleNe: "के कमलाले २० हप्तादेखि नै देब्रे कोल्टे सुत्न सुरु गर्नुपर्छ?",
    description: "Kamala is 20 weeks pregnant and wonders if she should already be sleeping on her left side.",
    descriptionNe: "कमला २० हप्ताकी गर्भवती छिन्। उनलाई 'अब देब्रे कोल्टे सुत्नुपर्छ' भन्ने सल्लाह दिइएको छ, के यो सही हो?",
    options: [
      { text: "Only important from 36 weeks", textNe: "३६ हप्तापछि मात्र ध्यान दिए पुग्छ", isCorrect: false },
      { text: "Good habit to start now, especially later", textNe: "अहिलेदेखि नै बानी बसाल्नु राम्रो हुन्छ", isCorrect: true },
      { text: "Right side is better", textNe: "दाहिने कोल्टे सुत्नु बढी राम्रो हो", isCorrect: false }
    ],
    explanation: "Left-side sleeping improves blood flow to the placenta and kidneys. From around 20 weeks it is a good habit to develop. If she wakes on her back, there is no need to panic — just roll over.",
    explanationNe: "देब्रे कोल्टे सुत्दा साल (Placenta) र मिर्गौलामा रगतको बहाव राम्रो हुन्छ। २० हप्तादेखि नै यस्तो बानी बसाल्नु फाइदाजनक हुन्छ। यदि निद्रामा उत्तानो परेको अवस्थामा ब्युँझनुभयो भने नआत्तिनुहोस्, बिस्तारै कोल्टे फर्कनुहोस्।"
  },
  {
    id: 23,
    title: "Priya is told her baby is measuring small — should she be worried?",
    titleNe: "भिडियो एक्स-रेमा बच्चाको आकार सानो देखियो — के चिन्ता गर्नुपर्छ?",
    description: "Priya is 24 weeks pregnant. The ultrasound shows the baby is measuring slightly small for its age.",
    descriptionNe: "प्रिया २४ हप्ताकी गर्भवती छिन्। भिडियो एक्स-रे (Ultrasound) गर्दा बच्चाको विकास उमेर अनुसार अलि कम देखिएको छ।",
    options: [
      { text: "Baby is definitely unhealthy", textNe: "बच्चा अस्वस्थ भएर यस्तो भएको हो", isCorrect: false },
      { text: "Needs monitoring — many causes", textNe: "नियमित निगरानी चाहिन्छ — यसका धेरै कारण हुन सक्छन्", isCorrect: true },
      { text: "Eat double food immediately", textNe: "तुरुन्तै दोब्बर मात्रामा खाना खान सुरु गर्ने", isCorrect: false }
    ],
    explanation: "A baby measuring small can be due to natural variation, inaccurate dates, or occasionally poor placental blood flow. The doctor will monitor closely and advise accordingly.",
    explanationNe: "बच्चाको आकार सानो हुनुमा गर्भको मिति फरक पर्नु, बच्चाको आफ्नै शारीरिक बनावट वा सालबाट रगतको प्रवाह कम हुनु जस्ता कारण हुन सक्छन्। यस्तो अवस्थामा डाक्टरले नियमित जाँच गरी आवश्यक सल्लाह दिनेछन्।"
  },
  {
    id: 24,
    title: "Sunita is craving non-stop cold drinks and soda at 18 weeks — any concern?",
    titleNe: "१८ हप्तामा सुनितालाई चिसो र सोडा धेरै पिउन मन लाग्छ — के यसले असर गर्छ?",
    description: "Sunita is 18 weeks pregnant and is craving cold soda and sugary drinks every day.",
    descriptionNe: "सुनिता १८ हप्ताकी गर्भवती छिन्। उनलाई दिनदिनै चिसो सोडा र गुलियो पेय पदार्थ पिउन मन लाग्छ।",
    options: [
      { text: "Fine, body needs sugar and fluid", textNe: "ठिकै हो, शरीरलाई चिनी र झोल पदार्थ चाहिन्छ", isCorrect: false },
      { text: "Limit sodas — raises blood sugar", textNe: "सोडा कम गर्ने — यसले सुगर बढाउन सक्छ", isCorrect: true },
      { text: "Only diet soda is safe", textNe: "डाइट सोडा (Diet Soda) मात्र सुरक्षित हुन्छ", isCorrect: false }
    ],
    explanation: "Sugary drinks are linked to gestational diabetes and excessive weight gain. Water, coconut water, buttermilk, and fresh juices are much better alternatives.",
    explanationNe: "धेरै गुलियो पेय पदार्थ पिउँदा गर्भावस्थामा मधुमेह (Diabetes) हुने र तौल अस्वभाविक रूपमा बढ्ने जोखिम हुन्छ। यसको सट्टा पानी, नरिवलको पानी, मोही वा ताजा फलफूलको रस पिउनु धेरै राम्रो हुन्छ।"
  },
  {
    id: 25,
    title: "Why is Nisha's doctor checking her blood pressure at every ANC visit?",
    titleNe: "निशाको हरेक जाँचमा डाक्टरले रक्तचाप (BP) किन नाप्छन्?",
    description: "Nisha is 26 weeks pregnant and notices the nurse checks her blood pressure at every visit.",
    descriptionNe: "निशा २६ हप्ताकी गर्भवती छिन्। उनले अस्पताल जाँदा हरेक पटक नर्सले रक्तचाप नाप्ने गरेको देख्छिन्।",
    options: [
      { text: "Just routine hospital procedure", textNe: "यो अस्पतालको सामान्य प्रक्रिया मात्र हो", isCorrect: false },
      { text: "Screens for preeclampsia — a serious complication", textNe: "प्रिएक्लाम्प्सिया (गम्भीर समस्या) को पहिचान गर्न", isCorrect: true },
      { text: "To decide on C-section", textNe: "अप्रेसन गर्ने कि नगर्ने भनेर निर्णय गर्न", isCorrect: false }
    ],
    explanation: "High blood pressure in pregnancy can lead to preeclampsia — a potentially life-threatening condition for both mother and baby. Early detection through routine monitoring is critical.",
    explanationNe: "गर्भावस्थामा उच्च रक्तचाप हुनु 'प्रिएक्लाम्प्सिया' को लक्षण हुन सक्छ, जसले आमा र बच्चा दुवैलाई जोखिममा पार्न सक्छ। नियमित जाँचबाट यसलाई समयमै पत्ता लगाउन सकिन्छ।"
  },
  {
    id: 26,
    title: "Is Mina's itchy belly at 20 weeks normal or a sign of something serious?",
    titleNe: "२० हप्तामा मिनाको पेट चिलाउनु सामान्य हो कि खतराको संकेत?",
    description: "Mina is 20 weeks pregnant and her belly feels very itchy as it stretches.",
    descriptionNe: "मिना २० हप्ताकी गर्भवती छिन् र पेटको छाला तन्किँदा उनलाई धेरै चिलाउने समस्या भएको छ।",
    options: [
      { text: "Liver disease, test immediately", textNe: "कलेजोको रोग हुन सक्छ, तुरुन्त जाँच गर्ने", isCorrect: false },
      { text: "Normal skin stretching — moisturise", textNe: "छाला तन्किएर हो — मोइस्चराइजर लगाउने", isCorrect: true },
      { text: "Stop drinking water to reduce stretching", textNe: "छाला नतन्कियोस् भनेर पानी पिउन कम गर्ने", isCorrect: false }
    ],
    explanation: "Mild belly itching from stretching skin is very common. Coconut oil or unscented moisturiser helps. Warning: intense itching on palms and soles (especially at night) may signal cholestasis — tell the doctor.",
    explanationNe: "पेटको छाला तन्किँदा हल्का चिलाउनु सामान्य हो। यसको लागि नरिवलको तेल वा मोइस्चराइजर प्रयोग गर्न सकिन्छ। तर यदि हत्केला वा पैतालामा राती धेरै चिलाउँछ भने, त्यो कलेजोसम्बन्धी समस्या हुन सक्छ, यसबारे डाक्टरलाई भन्नुपर्छ।"
  },
  {
    id: 27,
    title: "Does the anomaly scan at 20 weeks check the baby's gender?",
    titleNe: "२० हप्तामा गरिने एनोमेली स्क्यानले बच्चाको लिङ्ग जाँच गर्छ?",
    description: "Anita is 19 weeks pregnant and asks what the 20-week anomaly scan actually checks.",
    descriptionNe: "अनिता १९ हप्ताकी गर्भवती छिन्। उनलाई २० हप्तामा गरिने 'एनोमेली स्क्यान' ले के के जाँच गर्छ भन्ने जिज्ञासा छ।",
    options: [
      { text: "Mainly to find baby's gender", textNe: "मुख्यतया छोरा कि छोरी भनेर हेर्न", isCorrect: false },
      { text: "Checks all baby organs for abnormalities", textNe: "बच्चाका अंगहरूको विकास र अवस्था हेर्न", isCorrect: true },
      { text: "Only checks placenta position", textNe: "सालको अवस्था मात्र हेर्न", isCorrect: false }
    ],
    explanation: "The anomaly scan checks the baby's brain, heart, spine, kidneys, limbs, and face for structural abnormalities. In Nepal, determining sex by ultrasound is not permitted by law.",
    explanationNe: "एनोमेली स्क्यानले बच्चाको मुटु, दिमाग, मेरुदण्ड र मृगौला जस्ता अंगहरूमा कुनै समस्या छ कि छैन भनेर विस्तृत रूपमा जाँच गर्छ। नेपालको कानुन अनुसार भिडियो एक्स-रेबाट बच्चाको लिङ्ग पहिचान गर्नु अपराध हो।"
  },
  {
    id: 28,
    title: "Is it safe for Parbati to go to the cinema or crowded market at 23 weeks?",
    titleNe: "२३ हप्तामा पार्वतीका लागि चलचित्र हल वा भिडभाड भएको बजार जानु सुरक्षित छ?",
    description: "Parbati is 23 weeks pregnant and wants to go to a busy market with her family.",
    descriptionNe: "पार्वती २३ हप्ताकी गर्भवती छिन् र उनी परिवारसँग भिडभाड भएको बजार घुम्न जान चाहन्छिन्।",
    options: [
      { text: "Never go to crowds while pregnant", textNe: "गर्भावस्थामा भिडभाडमा कतै जानु हुँदैन", isCorrect: false },
      { text: "Generally safe, be mindful of jostling", textNe: "प्रायः सुरक्षित हुन्छ, तर धक्का लाग्ला भनेर सजग रहनुपर्छ", isCorrect: true },
      { text: "Only go if husband carries her", textNe: "श्रीमानले बोकेर लैजाने भए मात्र जान मिल्छ", isCorrect: false }
    ],
    explanation: "Crowded places are generally safe during the second trimester. Be careful of being bumped in the belly. Avoid very hot, stuffy environments and take rest breaks.",
    explanationNe: "दोस्रो त्रैमासिकमा भिडभाड भएको ठाउँमा जानु खासै असुरक्षित हुँदैन। तर पेटमा कसैको धक्का वा ठक्कर लाग्न सक्छ, त्यसमा ध्यान दिनुहोस्। धेरै गर्मी वा गुम्सिएको ठाउँमा नबस्नुहोस् र बेलाबेलामा आराम गर्नुहोस्।"
  },
  {
    id: 29,
    title: "Gita feels dizzy when she stands up quickly at 22 weeks — why?",
    titleNe: "२२ हप्तामा गीतालाई एक्कासि उठ्दा किन रिंगटा लाग्छ?",
    description: "Gita is 22 weeks pregnant and feels dizzy and lightheaded whenever she stands up quickly.",
    descriptionNe: "गीता २२ हप्ताकी गर्भवती छिन्। उनी अचानक उठ्दा वा उभिँदा उनलाई रिंगटा लाग्ने र आँखा धमिलो हुने हुन्छ।",
    options: [
      { text: "Sign of fainting disease", textNe: "यो बेहोस हुने रोगको लक्षण हो", isCorrect: false },
      { text: "Blood pressure drop on standing — normal", textNe: "उठ्दा अचानक रक्तचाप घट्नु — यो सामान्य हो", isCorrect: true },
      { text: "Baby pressing on brain", textNe: "बच्चाले दिमागमा थिचेको भएर हो", isCorrect: false }
    ],
    explanation: "Postural hypotension — a temporary drop in blood pressure when changing position — is common in pregnancy. Rising slowly, staying hydrated, and avoiding standing for long periods helps.",
    explanationNe: "गर्भावस्थामा शरीरको अवस्था (Position) बदल्दा अचानक रक्तचाप कम हुन सक्छ। उठ्दा बिस्तारै उठ्ने, पर्याप्त पानी पिउने र लामो समयसम्म नउभिने गर्नाले यसमा राहत मिल्छ।"
  },
  {
    id: 30,
    title: "Is it safe to eat street food and outside meals during the second trimester?",
    titleNe: "के दोस्रो त्रैमासिकमा बाहिरको वा सडकको खाना खानु सुरक्षित हुन्छ?",
    description: "Bindu is 19 weeks pregnant and sometimes eats street food or restaurant meals.",
    descriptionNe: "बिन्दु १९ हप्ताकी गर्भवती छिन् र उनी कहिलेकाहीँ सडकको खाजा वा होटलको खाना खान्छिन्।",
    options: [
      { text: "All outside food is forbidden", textNe: "बाहिरको कुनै पनि खाना खानु हुँदैन", isCorrect: false },
      { text: "Choose hot, freshly cooked food", textNe: "ताजा र तातो पकाएको खाना मात्र छनोट गर्ने", isCorrect: true },
      { text: "Raw salads from outside are safest", textNe: "बाहिरको काँचो सलाद सबैभन्दा सुरक्षित हुन्छ", isCorrect: false }
    ],
    explanation: "Freshly cooked hot food from clean places is generally safe. Avoid raw salads, unpeeled fruits, cold cuts, and food left out for long periods due to food poisoning risk.",
    explanationNe: "सफा ठाउँमा ताजा पकाइएको तातो खाना खानु सुरक्षित हुन्छ। तर बाहिरको काँचो सलाद र धेरै समयसम्म खुल्ला राखिएका खानेकुराले 'फुड पोइजनिङ' गराउन सक्ने भएकाले तिनबाट बच्नुपर्छ।"
  },
  {
    id: 31,
    title: "Sarita's mother says she must eat liver every week for the baby — is that true?",
    titleNe: "आमाले हप्तामा एक पटक कलेजो (Liver) खान भन्नुहुन्छ — के यो साँचो हो?",
    description: "Sarita is 24 weeks pregnant. Her mother insists she must eat animal liver weekly for iron.",
    descriptionNe: "सरिता २४ हप्ताकी गर्भवती छिन्। उनकी आमाले रगत बढाउन हप्तामा एक पटक कलेजो खानैपर्छ भन्नुहुन्छ।",
    options: [
      { text: "Eat every day — more is better", textNe: "दिनहुँ खाने — जति धेरै खायो उति राम्रो", isCorrect: false },
      { text: "Occasionally fine, but limit due to vitamin A", textNe: "कहिलेकाहीँ ठिक छ, तर धेरै खानु हुँदैन", isCorrect: true },
      { text: "Always forbidden in pregnancy", textNe: "गर्भावस्थामा कलेजो कहिल्यै खानु हुँदैन", isCorrect: false }
    ],
    explanation: "Liver is rich in iron and B vitamins. However it is also very high in vitamin A (retinol), and excessive vitamin A in early pregnancy can cause birth defects. Eating it occasionally (once a week or less) is safe.",
    explanationNe: "कलेजोमा आइरन र भिटामिन 'बी' प्रशस्त हुन्छ तर यसमा भिटामिन 'ए' (Retinol) पनि धेरै हुन्छ। गर्भावस्थामा भिटामिन 'ए' को मात्रा धेरै भयो भने बच्चामा जन्मजात समस्या आउन सक्छ। त्यसैले हप्तामा एक पटक भन्दा बढी नखानु राम्रो हुन्छ।"
  },
  {
    id: 32,
    title: "Hira gets strong headaches at 25 weeks with blurred vision — what should she do?",
    titleNe: "२५ हप्तामा कडा टाउको दुखाइसँगै आँखा धमिलो भएमा के गर्ने?",
    description: "Hira is 25 weeks pregnant. She has a severe headache with blurry vision and slightly swollen face.",
    descriptionNe: "हिरा २५ हप्ताकी गर्भवती छिन्। उनलाई असाध्यै टाउको दुखिरहेको छ, आँखा धमिलो देखिन्छ र अनुहार अलि सुन्निएको छ।",
    options: [
      { text: "Rest and it will pass", textNe: "आराम गरेपछि ठिक हुन्छ", isCorrect: false },
      { text: "Go to hospital immediately — preeclampsia sign", textNe: "तुरुन्तै अस्पताल जाने — यो खतराको संकेत हो", isCorrect: true },
      { text: "Take 2 paracetamol and wait", textNe: "दुई चक्की सिटामोल खाएर पर्खने", isCorrect: false }
    ],
    explanation: "Severe headache with vision changes and facial swelling are classic warning signs of preeclampsia — a dangerous pregnancy complication. This is a medical emergency requiring immediate hospital evaluation.",
    explanationNe: "कडा टाउको दुखाइ, आँखा धमिलो हुनु र अनुहार सुन्निनु 'प्रिएक्लाम्प्सिया' को गम्भीर लक्षण हुन सक्छ। यसले आमा र बच्चा दुवैलाई जोखिममा पार्न सक्ने भएकाले तुरुन्तै अस्पताल जानु अत्यन्त जरुरी हुन्छ।"
  },
  {
    id: 33,
    title: "Why does Kabita need to drink more water during the second trimester?",
    titleNe: "दोस्रो त्रैमासिकमा पानी धेरै पिउनु किन जरुरी हुन्छ?",
    description: "Kabita is 21 weeks pregnant and often forgets to drink enough water.",
    descriptionNe: "कबिता २१ हप्ताकी गर्भवती छिन् तर उनले पर्याप्त पानी पिउन बिर्सिरहन्छिन्।",
    options: [
      { text: "Drinking more causes more swelling", textNe: "धेरै पानी पिउँदा खुट्टा अझ बढी सुन्निन्छ", isCorrect: false },
      { text: "Needed for amniotic fluid and circulation", textNe: "पानीको थैली र रगत प्रवाह सन्तुलित राख्न", isCorrect: true },
      { text: "Only important in final month", textNe: "अन्तिम महिनामा मात्र धेरै पानी पिए पुग्छ", isCorrect: false }
    ],
    explanation: "Water makes up amniotic fluid, supports increased blood volume, prevents constipation, and reduces UTI risk. Aim for at least 8–10 glasses per day.",
    explanationNe: "पानीले बच्चाको वरिपरिको थैली (Amniotic Fluid) बनाउन मद्दत गर्छ, रगतको मात्रा बढाउँछ र कब्जियत तथा पिसाबको सङ्क्रमण (UTI) बाट जोगाउँछ। दिनमा कम्तीमा ८ देखि १० गिलास पानी पिउने लक्ष्य राख्नुपर्छ।"
  },
  {
    id: 34,
    title: "Deepa wonders if she can dye or henna her hair at 20 weeks",
    titleNe: "२० हप्तामा कपालमा मेहेन्दी वा रङ्ग लगाउन मिल्छ?",
    description: "Deepa is 20 weeks pregnant and wants to apply henna (mehndi) to her hands and hair.",
    descriptionNe: "दीपा २० हप्ताकी गर्भवती छिन् र उनी हात तथा कपालमा मेहेन्दी लगाउन चाहन्छिन्।",
    options: [
      { text: "All henna and dyes are toxic", textNe: "मेहेन्दी र रङ्ग सबै हानिकारक हुन्छन्", isCorrect: false },
      { text: "Natural henna is safe; avoid black chemical henna", textNe: "प्राकृतिक मेहेन्दी सुरक्षित हुन्छ; केमिकल भएको कालो मेहेन्दी नलगाउने", isCorrect: true },
      { text: "Fine on hands, never on hair", textNe: "हातमा लगाउन हुन्छ तर कपालमा हुँदैन", isCorrect: false }
    ],
    explanation: "Natural plant-based henna is considered safe. Black henna contains PPD (para-phenylenediamine), a chemical that can cause skin reactions. Regular hair colouring should be done in a ventilated room.",
    explanationNe: "प्राकृतिक बोटबिरुवाबाट बनेको मेहेन्दी सुरक्षित मानिन्छ। तर बजारमा पाइने 'कालो मेहेन्दी' मा PPD जस्ता रसायन हुन सक्छन् जसले एलर्जी गराउँछ। कपालमा रङ्ग लगाउँदा हावा ओहोरदोहोर हुने ठाउँमा बसेर लगाउनु राम्रो हुन्छ।"
  },
  {
    id: 35,
    title: "Is it normal for breasts to leak fluid at 22 weeks?",
    titleNe: "२२ हप्तामा स्तनबाट दूध जस्तो तरल पदार्थ चुहिनु सामान्य हो?",
    description: "Rita is 22 weeks pregnant and notices a small amount of yellowish fluid leaking from her breasts.",
    descriptionNe: "रिता २२ हप्ताकी गर्भवती छिन्। उनको स्तनबाट अलिकति पहेंलो-सेतो रङ्गको तरल पदार्थ चुहिन थालेको छ।",
    options: [
      { text: "Breast infection sign", textNe: "स्तनमा इन्फेक्सन भएको संकेत हो", isCorrect: false },
      { text: "Colostrum forming — completely normal", textNe: "बिगौते दूध (Colostrum) बन्दैछ — यो सामान्य हो", isCorrect: true },
      { text: "Needs an immediate breast exam", textNe: "तुरुन्तै स्तन जाँच गराउनुपर्छ", isCorrect: false }
    ],
    explanation: "Colostrum — the first nutrient-rich breast milk — can start forming as early as 16–22 weeks. It is perfectly normal and is an excellent sign the body is preparing for breastfeeding.",
    explanationNe: "बच्चाका लागि पोषणयुक्त पहिलो दूध (बिगौते दूध) गर्भावस्थाकै क्रममा बन्न सुरु गर्छ। यस्तो तरल पदार्थ चुहिनु एकदमै सामान्य हो र यो शरीरले स्तनपानको लागि तयारी गर्दैछ भन्ने राम्रो संकेत हो।"
  },
  {
    id: 36,
    title: "Does watching violent or upsetting content on TV harm the baby?",
    titleNe: "डरलाग्दो फिल्म वा झगडाका कार्यक्रम हेर्दा बच्चालाई असर गर्छ?",
    description: "Laxmi is 19 weeks pregnant and her mother-in-law says she should only watch happy programmes.",
    descriptionNe: "लक्ष्मी १९ हप्ताकी गर्भवती छिन्। सासूले 'डरलाग्दो वा झगडाको कार्यक्रम हेर्दा बच्चा डराउँछ' भन्नुहुन्छ।",
    options: [
      { text: "Yes, baby sees everything clearly", textNe: "हो, बच्चाले टिभीमा सबै कुरा देख्छ", isCorrect: false },
      { text: "No direct harm, but stress affects mother", textNe: "सिधा असर हुन्न, तर आमाको तनावले बच्चालाई असर गर्न सक्छ", isCorrect: true },
      { text: "Baby hears and memorises all sounds", textNe: "बच्चाले सबै आवाज सुनेर याद गर्छ", isCorrect: false }
    ],
    explanation: "The baby cannot see TV content. However sustained high stress in the mother releases cortisol, which can cross the placenta. Watching relaxing, positive content is good for the mother's wellbeing.",
    explanationNe: "बच्चाले टिभीमा के चलिरहेको छ देख्न सक्दैन। तर आमा धेरै तनावमा हुँदा शरीरमा 'स्ट्रेस हर्मोन' बढ्छ, जसले साल (Placenta) मार्फत बच्चालाई असर गर्न सक्छ। त्यसैले रमाइला र सकारात्मक कुरा हेर्नु आमा र बच्चा दुवैका लागि राम्रो हो।"
  },
  {
    id: 37,
    title: "Kabita is 19 weeks and still not feeling baby move — should she worry?",
    titleNe: "१९ हप्ता भइसक्दा पनि बच्चा चलेको थाहा पाइएन — के यो चिन्ताको विषय हो?",
    description: "Kabita is 19 weeks pregnant and has not clearly felt the baby move yet.",
    descriptionNe: "कबिता १९ हप्ताकी गर्भवती छिन् तर उनले अहिलेसम्म बच्चा चलेको स्पष्ट महसुस गरेकी छैनन्।",
    options: [
      { text: "Baby has stopped growing", textNe: "बच्चाको विकास रोकिएको संकेत हो", isCorrect: false },
      { text: "Normal — most feel movement by 20–22 weeks", textNe: "सामान्य हो — प्रायः २० देखि २२ हप्तामा महसुस हुन्छ", isCorrect: true },
      { text: "Go to hospital for emergency scan", textNe: "तुरुन्तै अस्पताल गएर भिडियो एक्स-रे गर्ने", isCorrect: false }
    ],
    explanation: "First-time mothers typically feel movement between 18–22 weeks, and sometimes later. Placenta position and body shape can affect when it is felt. If 24 weeks pass without any movement, then inform the doctor.",
    explanationNe: "पहिलो पटक आमा बन्न लागेका महिलाले बच्चा चलेको थाहा पाउन १८ देखि २२ हप्तासम्म लाग्न सक्छ। सालको स्थिति वा शरीरको बनावटले गर्दा पनि अलि ढिलो महसुस हुन सक्छ। यदि २४ हप्तासम्म पनि केही थाहा पाइएन भने मात्र डाक्टरसँग सल्लाह लिनुपर्छ।"
  },
  {
    id: 38,
    title: "Should Parbati take vitamin D supplements during the second trimester?",
    titleNe: "दोस्रो त्रैमासिकमा भिडामिन 'डी' को चक्की खानु जरुरी छ?",
    description: "Parbati is 26 weeks pregnant and asks if she needs extra vitamin D.",
    descriptionNe: "पार्वती २६ हप्ताकी गर्भवती छिन्। उनलाई भिटामिन 'डी' खानुपर्छ कि पर्दैन भन्ने अन्योल छ।",
    options: [
      { text: "No — sunlight alone is enough", textNe: "पर्दैन — घाममा बसे पुग्छ", isCorrect: false },
      { text: "Yes — deficiency is common and affects baby bones", textNe: "हो — यसको कमीले बच्चाको हड्डीको विकासमा असर गर्छ", isCorrect: true },
      { text: "Only for women who stay indoors", textNe: "घरभित्र मात्र बस्ने महिलालाई मात्र चाहिन्छ", isCorrect: false }
    ],
    explanation: "Vitamin D deficiency is widespread in Nepal. It is essential for calcium absorption, bone development, and immune function. Supplements are commonly prescribed and are safe.",
    explanationNe: "नेपालमा धेरै महिलाहरूमा भिटामिन 'डी' को कमी पाइन्छ। यो क्याल्सियम पचाउन र बच्चाको हड्डी बलियो बनाउन आवश्यक छ। डाक्टरले सिफारिस गरे अनुसार भिटामिन 'डी' को चक्की खानु सुरक्षित र फाइदाजनक हुन्छ।"
  },
  {
    id: 39,
    title: "Is snoring during pregnancy a sign of something serious?",
    titleNe: "गर्भावस्थामा राति घुर्ने (खर्राटा लाग्ने) समस्या केही गम्भीर हो?",
    description: "Gita is 24 weeks pregnant and her husband says she has started snoring at night.",
    descriptionNe: "गीता २४ हप्ताकी गर्भवती छिन्। श्रीमानले अचेल उनी राति घुर्न थालेको बताउनुहुन्छ।",
    options: [
      { text: "Harmless, ignore it completely", textNe: "यो सामान्य हो, वास्ता नगरे हुन्छ", isCorrect: false },
      { text: "Common in pregnancy — mention to doctor if severe", textNe: "सामान्य हो — तर धेरै समस्या भएमा डाक्टरलाई भन्ने", isCorrect: true },
      { text: "Sign of heart failure", textNe: "यो मुटुको रोगको लक्षण हो", isCorrect: false }
    ],
    explanation: "Pregnancy snoring is very common due to nasal congestion from hormones and increased blood volume. However, severe snoring with gasping can indicate sleep apnoea, which is worth checking if the mother feels tired despite sleeping.",
    explanationNe: "हर्मोनको परिवर्तन र रगतको मात्रा बढ्दा नाकको भित्री भाग सुन्निएर घुर्ने समस्या हुन सक्छ। यो धेरैजसो सामान्य हुन्छ। तर यदि सुत्दा श्वास फेर्नै गाह्रो हुने वा निन्द्रा पुग्दा पनि धेरै थकाइ लाग्ने भयो भने डाक्टरलाई देखाउनुपर्छ।"
  },
  {
    id: 40,
    title: "Sunita was told her placenta is posterior — is that a problem?",
    titleNe: "साल (Placenta) पाठेघरको पछाडितिर (Posterior) छ भन्नुको अर्थ के हो? के यो चिन्ताको विषय हो?",
    description: "Sunita is 21 weeks pregnant and her ultrasound says placenta posterior.",
    descriptionNe: "सुनिता २१ हप्ताकी गर्भवती छिन्। उनको अल्ट्रासाउन्ड रिपोर्टमा 'Placenta Posterior' देखिएको छ, तर उनलाई यसको अर्थ थाहा छैन।",
    options: [
      { text: "Dangerous position, needs surgery", textNe: "यो खतरनाक अवस्था हो, शल्यक्रिया गर्नुपर्छ", isCorrect: false },
      { text: "Back wall — a perfectly normal position", textNe: "पाठेघरको पछाडिको भित्तामा छ — यो पूर्णतया सामान्य अवस्था हो", isCorrect: true },
      { text: "Baby cannot get nutrition", textNe: "बच्चाले पर्याप्त पोषण पाउँदैन", isCorrect: false }
    ],
    explanation: "Posterior placenta means it is attached to the back wall of the uterus. This is a completely normal and common position. It may mean the mother feels baby movements slightly later.",
    explanationNe: "पोस्टेरियर (Posterior) साल हुनु भनेको यो पाठेघरको पछाडिको भित्तामा जोडिएको छ भन्ने हो। यो एकदमै सामान्य र प्राकृतिक अवस्था हो। यस्तो हुँदा आमाले बच्चा चलेको अलि ढिलो महसुस गर्न सक्नुहुन्छ, तर यसले बच्चालाई कुनै असर गर्दैन।"
  },
  {
    id: 41,
    title: "Can Nisha do household chores like sweeping and mopping at 20 weeks?",
    titleNe: "२० हप्तामा घरको काम जस्तै झाडु लगाउने र पोछा लगाउने गर्न मिल्छ?",
    description: "Nisha is 20 weeks pregnant and wonders if doing housework is safe.",
    descriptionNe: "निशा २० हप्ताकी गर्भवती छिन्। उनी झाडु-पोछा र सामान्य घरको काम गर्न मिल्छ कि मिल्दैन भनेर जान्न चाहन्छिन्।",
    options: [
      { text: "No household work at all", textNe: "कुनै पनि घरको काम गर्नु हुँदैन", isCorrect: false },
      { text: "Light chores are fine, avoid heavy lifting", textNe: "हल्का काम मिल्छ, तर गह्रौँ सामान उठाउनु हुँदैन", isCorrect: true },
      { text: "Only allowed to cook, nothing else", textNe: "खाना पकाउन मात्र हुन्छ, अरु केही हुँदैन", isCorrect: false }
    ],
    explanation: "Light household chores — sweeping, mopping, cooking — are safe and even beneficial. Avoid lifting heavy objects, climbing ladders, or using harsh chemical cleaning products.",
    explanationNe: "झाडु-पोछा र खाना पकाउने जस्ता हल्का घरका काम गर्नु सुरक्षित हुन्छ र यसले शरीरलाई सक्रिय राख्न मद्दत गर्छ। तर गह्रौँ सामान उठाउने, भर्याङ वा उचाइमा चढ्ने वा कडा केमिकल भएका सफाइ सामग्री प्रयोग गर्ने काम भने नगर्नुहोस्।"
  },
  {
    id: 42,
    title: "Mina's family pressures her to eat meat even though she is vegetarian — must she?",
    titleNe: "परिवारले मासु खान दबाब दिन्छन् तर मिना शाकाहारी हुन् — के मासु खानैपर्छ?",
    description: "Mina is 22 weeks pregnant and is a lifelong vegetarian. Her family says she must eat meat for the baby.",
    descriptionNe: "मिना २२ हप्ताकी गर्भवती छिन् र उनी सधैँदेखि शाकाहारी हुन्। उनलाई परिवारले 'बच्चाको लागि मासु खानैपर्छ' भनिरहनुभएको छ।",
    options: [
      { text: "Must eat meat — no alternative", textNe: "मासु खानैपर्छ, अरु उपाय छैन", isCorrect: false },
      { text: "Balanced vegetarian diet is absolutely sufficient", textNe: "सन्तुलित शाकाहारी खाना पूर्ण रूपमा पर्याप्त हुन्छ", isCorrect: true },
      { text: "Only fish is needed, not other meat", textNe: "माछा मात्र खाए पुग्छ, अरु मासु चाहिँदैन", isCorrect: false }
    ],
    explanation: "A well-planned vegetarian diet with lentils, beans, dairy, eggs, nuts, and seeds provides all the protein and iron needed for a healthy pregnancy. B12 supplementation is important for strict vegetarians.",
    explanationNe: "दाल, गेडागुडी, दूध-दही, अण्डा, ओखर र सिमी जस्ता कुराहरू राम्रोसँग खाएमा शाकाहारी महिलाले पनि बच्चाका लागि आवश्यक प्रोटिन र पोषण पाउन सक्छन्। कडा शाकाहारी (Vegan) हरूका लागि भिटामिन बी-१२ को चक्की खानु जरुरी हुन सक्छ।"
  },
  {
    id: 43,
    title: "Parbati heard that wearing a tight belt helps support the belly — true?",
    titleNe: "पेट कसेर बाँध्दा वा बेल्ट लगाउँदा बच्चालाई राम्रो हुन्छ भन्ने सुनिन्छ — के यो साँचो हो?",
    description: "Parbati is 25 weeks pregnant and an elder suggests tying a tight cloth around her belly.",
    descriptionNe: "पार्वती २५ हप्ताकी गर्भवती छिन्। उनलाई घरका ठूलाले पेटमा कसेर कपडा बाँध्न सल्लाह दिएका छन्।",
    options: [
      { text: "Good for baby's position", textNe: "यसले बच्चाको स्थान मिलाउन मद्दत गर्छ", isCorrect: false },
      { text: "Tight binding is harmful — use proper belly band", textNe: "कसेर बाँध्नु हानिकारक हुन सक्छ — उचित सपोर्ट बेल्ट मात्र प्रयोग गर्ने", isCorrect: true },
      { text: "Only bind at night, not day", textNe: "राति मात्र बाँध्न मिल्छ, दिउँसो हुँदैन", isCorrect: false }
    ],
    explanation: "Tightly binding the belly can restrict blood circulation and baby movement. If back support is needed, medical maternity support belts are designed for safe use.",
    explanationNe: "कसेर पेट बाँध्दा रगतको प्रवाह र बच्चाको हल्चलमा बाधा पुग्न सक्छ। यदि ढाड दुख्ने समस्याका कारण सपोर्ट चाहिएको हो भने, मेडिकल पसलमा पाइने विशेष 'मेटर्निटी सपोर्ट बेल्ट' मात्र प्रयोग गर्नु सुरक्षित हुन्छ।"
  },
  {
    id: 44,
    title: "Is it safe for Hira to travel by air at 24 weeks?",
    titleNe: "२४ हप्तामा हवाइजहाजमा यात्रा गर्नु सुरक्षित हुन्छ?",
    description: "Hira is 24 weeks pregnant and needs to travel by plane for a family occasion.",
    descriptionNe: "हिरा २४ हप्ताकी गर्भवती छिन्। उनलाई पारिवारिक कामले हवाइजहाजमा कतै जानुपर्ने भएको छ।",
    options: [
      { text: "Never fly during pregnancy", textNe: "गर्भावस्थामा कहिल्यै जहाज चढ्नु हुँदैन", isCorrect: false },
      { text: "Safe up to ~36 weeks — walk and hydrate", textNe: "३६ हप्तासम्म सुरक्षित हुन्छ — प्रशस्त पानी पिउने र हिँडडुल गर्ने", isCorrect: true },
      { text: "Only safe in first trimester", textNe: "पहिलो तीन महिनामा मात्र जहाज चढ्न मिल्छ", isCorrect: false }
    ],
    explanation: "Air travel is generally safe up to 36 weeks in an uncomplicated pregnancy. Most airlines allow travel until 36 weeks with a medical certificate. Walk every hour and wear compression socks if available.",
    explanationNe: "कुनै जटिलता नभएको सामान्य गर्भावस्थामा ३६ हप्तासम्म हवाइजहाजमा यात्रा गर्न सकिन्छ। धेरैजसो एयरलाइन्सले डक्टरको रिपोर्ट भएमा ३६ हप्तासम्म अनुमति दिन्छन्। यात्राको बेला बेलाबेलामा उठेर हिँड्ने र पर्याप्त पानी पिउने गर्नुपर्छ।"
  },
  {
    id: 45,
    title: "Should Sarita take the double dose if she missed iron for two days?",
    titleNe: "दुई दिन आइरन खान बिर्सिएमा एकैचोटि दुई चक्की खाँदा हुन्छ?",
    description: "Sarita is 23 weeks pregnant and forgot to take her iron tablets for two days.",
    descriptionNe: "सरिता २३ हप्ताकी गर्भवती छिन् र उनले दुई दिनदेखि आइरन चक्की खान बिर्सिएकी छिन्।",
    options: [
      { text: "Take two at once to catch up", textNe: "बिर्सिएको भर्ना गर्न एकैचोटि दुई चक्की खाने", isCorrect: false },
      { text: "Resume one tablet daily from today", textNe: "आजदेखि नियमित रूपमा एक-एक चक्की खान सुरु गर्ने", isCorrect: true },
      { text: "Stop taking iron for a week", textNe: "एक हप्तासम्म आइरन नखाएर छोड्ने", isCorrect: false }
    ],
    explanation: "Never double dose on iron — it causes nausea, vomiting, and stomach pain. Simply resume the regular once-daily dose.",
    explanationNe: "आइरनको चक्की एकैचोटि दुईवटा कहिल्यै नखानुहोस्, यसले पेट दुख्ने, वाकवाकी लाग्ने र बान्ता हुने समस्या निम्त्याउँछ। बिर्सिएको दिनको कुरा छोडेर आजदेखि पहिलेकै जस्तो दिनको एउटा चक्की खान सुरु गर्नुहोस्।"
  },
  {
    id: 46,
    title: "Is constipation during the second trimester normal, and what helps?",
    titleNe: "दोस्रो त्रैमासिकमा दिसा कडा हुनु (कब्जियत) सामान्य हो? यसमा के गर्दा ठिक हुन्छ?",
    description: "Bindu is 17 weeks pregnant and suffering from constipation. She asks if this is normal.",
    descriptionNe: "बिन्दु १७ हप्ताकी गर्भवती छिन् र उनलाई कब्जियतको समस्या भएको छ। के यो सामान्य हो?",
    options: [
      { text: "Sign of poor diet only", textNe: "खराब खानाका कारण मात्र यस्तो भएको हो", isCorrect: false },
      { text: "Normal — iron + hormones slow digestion", textNe: "सामान्य हो — आइरन र हर्मोनले पाचन प्रक्रिया ढिलो गर्छ", isCorrect: true },
      { text: "Take strong laxatives daily", textNe: "दिनहुँ कडा जुलाब (दिसा खुकुलो पार्ने औषधि) खाने", isCorrect: false }
    ],
    explanation: "Progesterone relaxes digestive muscles and iron supplements worsen constipation. Increase water, fibre-rich vegetables, fruits, and gentle walking. Avoid harsh laxatives.",
    explanationNe: "गर्भावस्थाको हर्मोन र आइरन चक्कीका कारण दिसा कडा हुन सक्छ। यसबाट बच्न पर्याप्त पानी पिउने, हरियो सागपात र फलफूल खाने र हल्का हिँडडुल गर्ने गर्नुपर्छ। डक्टरको सल्लाहबिना दिसा खुकुलो पार्ने कडा औषधिहरू नखानुहोस्।"
  },
  {
    id: 47,
    title: "Can Maya attend a wedding ceremony at 25 weeks?",
    titleNe: "के २५ हप्ताकी गर्भवती माया विवाहको भोज वा उत्सवमा सहभागी हुन मिल्छ?",
    description: "Maya is 25 weeks pregnant and plans to attend a relative's wedding. Her family wonders if it is safe for her to go.",
    descriptionNe: "माया २५ हप्ताकी गर्भवती छिन् र उनी एउटा विवाहको उत्सवमा सहभागी हुने योजनामा छिन्। यस्तो अवस्थामा भोजभतेर वा भीडभाडमा जानु सुरक्षित छ कि छैन भनेर परिवारमा जिज्ञासा छ।",
    options: [
      { text: "No social events at all", textNe: "गर्भवती भएको बेला कुनै पनि सामाजिक कार्यक्रममा जानु हुँदैन", isCorrect: false },
      { text: "Fine — rest frequently, stay hydrated", textNe: "मिल्छ — तर बेलाबेलामा आराम गर्ने र पर्याप्त पानी पिउने", isCorrect: true },
      { text: "Must avoid weddings entirely", textNe: "विवाह जस्ता भीडभाड हुने कार्यक्रममा जानै हुँदैन", isCorrect: false }
    ],
    explanation: "Attending social events is perfectly fine at 25 weeks. Make sure to sit down frequently, avoid standing for long periods, eat healthy snacks, and stay hydrated.",
    explanationNe: "२५ हप्ताको समयमा विवाह वा अन्य कुनै उत्सवमा सहभागी हुनु सुरक्षित हुन्छ। तर लामो समयसम्म नउभिने, बीच-बीचमा बसेर आराम गर्ने, समय-समयमा खाइरहने र पर्याप्त पानी पिउने कुरामा विशेष ध्यान दिनुपर्छ।"
},
  {
    id: 48,
    title: "Is it harmful if Rina cries a lot due to stress during the second trimester?",
    titleNe: "दोस्रो त्रैमासिकमा धेरै रुनु वा तनाव लिनुले बच्चालाई असर गर्छ?",
    description: "Rina is 21 weeks pregnant and going through a difficult family situation causing her to cry often.",
    descriptionNe: "रिना २१ हप्ताकी गर्भवती छिन्। घरको समस्याका कारण उनी अचेल धेरै रुन्छिन् र तनावमा छिन्।",
    options: [
      { text: "Crying once damages the baby permanently", textNe: "एकपटक रोएमा बच्चालाई सधैँका लागि असर पर्छ", isCorrect: false },
      { text: "Short-term crying is fine — long-term stress is what to address", textNe: "थोरै रोएमा केही हुन्न — तर धेरै लामो समय तनाव लिनु हुँदैन", isCorrect: true },
      { text: "Crying transfers sadness to baby", textNe: "रोएको बेला बच्चामा पनि उदासी सर्छ", isCorrect: false }
    ],
    explanation: "Occasional crying is harmless. However chronic, sustained emotional stress releases cortisol which may affect fetal development over time. Support, counselling, and positive relationships are the solution.",
    explanationNe: "कहिलेकाहीँ मन हल्का गर्न रुनु सामान्य हो र यसले बच्चालाई असर गर्दैन। तर हप्तौंसम्म तनावमा रहँदा शरीरमा 'स्ट्रेस हर्मोन' बढ्न सक्छ, जसले बच्चाको विकासमा असर पार्न सक्छ। यस्तो बेला परिवारको साथ लिने वा डक्टरसँग कुरा गर्नु राम्रो हुन्छ।"
  },
  {
    id: 49,
    title: "What does group B strep detected at 26 weeks mean for Kabita?",
    titleNe: "पिसाब जाँचमा GBS ब्याक्टेरिया देखिएमा के बुझ्ने?",
    description: "Kabita is 26 weeks pregnant and her urine test showed Group B Strep bacteria.",
    descriptionNe: "कबिता २६ हप्ताकी गर्भवती छिन्। उनको पिसाब जाँच गर्दा GBS (Group B Strep) ब्याक्टेरिया देखिएको छ।",
    options: [
      { text: "Requires immediate C-section", textNe: "यसका लागि तुरुन्तै अप्रेसन (C-Section) गर्नुपर्छ", isCorrect: false },
      { text: "Treated with antibiotics now; IV given during labour", textNe: "अहिले एन्टिबायोटिक खाने र सुत्केरी व्यथा लागेको बेला पनि औषधि दिइन्छ", isCorrect: true },
      { text: "Nothing to do, always harmless", textNe: "यसमा केही गर्नुपर्दैन, यसले कहिल्यै हानि गर्दैन", isCorrect: false }
    ],
    explanation: "GBS found in urine during pregnancy is treated with antibiotics immediately, and the mother receives IV antibiotics during labour to protect the baby from infection during delivery.",
    explanationNe: "पिसाबमा GBS भेटिएमा तुरुन्तै एन्टिबायोटिकको कोर्स पूरा गर्नुपर्छ। साथै, सुत्केरी हुने समयमा बच्चालाई सङ्क्रमण नहोस् भनेर डक्टरले स्लाइनमार्फत थप एन्टिबायोटिक दिन्छन्। यसले बच्चालाई पूर्ण रूपमा सुरक्षित राख्छ।"
  },
  {
    id: 50,
    title: "Why does Gita suddenly feel energetic and better in the second trimester?",
    titleNe: "दोस्रो त्रैमासिक सुरु भएपछि किन थकाइ कम हुने र फुर्तिलो महसुस हुन्छ?",
    description: "Gita is 16 weeks pregnant and feels surprisingly better — less nausea and more energy.",
    descriptionNe: "गीता १६ हप्ताकी गर्भवती छिन्। उनलाई अचम्म लागेको छ — वाकवाकी कम भएको छ र उनले पहिलेभन्दा धेरै फुर्तिलो महसुस गरेकी छिन्।",
    options: [
      { text: "Baby has stopped growing", textNe: "बच्चाको विकास रोकिएर यस्तो भएको हो", isCorrect: false },
      { text: "Normal — second trimester is usually easier", textNe: "सामान्य हो — दोस्रो त्रैमासिक प्रायः सजिलो र रमाइलो हुन्छ", isCorrect: true },
      { text: "She must be doing something wrong", textNe: "उनले केही गल्ती गरेकाले यस्तो भएको हो", isCorrect: false }
    ],
    explanation: "The second trimester is known as the 'golden period' of pregnancy. Nausea fades, energy returns, and the bump is growing but not yet heavy. This is completely normal and positive.",
    explanationNe: "१४ देखि २८ हप्तासम्मको समयलाई गर्भावस्थाको 'सुनौलो समय' भनिन्छ। यति बेला वाकवाकी कम हुन्छ, शरीरमा जाँगर आउँछ र पेट पनि धेरै गह्रौँ भइसकेको हुँदैन। यो एकदमै सकारात्मक र सामान्य अवस्था हो।"
  }
];