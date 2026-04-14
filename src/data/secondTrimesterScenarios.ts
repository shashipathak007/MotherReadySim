import { Scenario } from './firstTrimesterScenarios';

export const SECOND_TRIMESTER_SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "What does a haemoglobin of 9.5 mean for a pregnant woman?",
    titleNe: "गर्भवती हुँदा हेमोग्लोबिन ९.५ हुनुको अर्थ के हो?",
    description: "Sima is 16 weeks pregnant and was told her haemoglobin is 9.5 g/dL at her ANC checkup.",
    descriptionNe: "सिमा १६ हप्ताकी गर्भवती छिन् र जाँच गराउँदा उनको हेमोग्लोबिन ९.५ g/dL देखियो।",
    options: [
      { text: "It is perfectly normal for pregnancy", textNe: "गर्भवती हुँदा यस्तो हुनु सामान्य हो", isCorrect: false },
      { text: "It means she has mild anaemia and needs to increase iron-rich foods and take iron tablets regularly", textNe: "उनलाई अलिकति रगतको कमी छ। उनले आइरन चक्की र रगत बढ्ने खानेकुरा नियमित खानुपर्छ।", isCorrect: true },
      { text: "It means she needs a blood transfusion immediately", textNe: "उनलाई तुरुन्तै रगत चढाउनुपर्छ", isCorrect: false }
    ],
    explanation: "Normal haemoglobin for a pregnant woman is above 11 g/dL. A reading of 9.5 means mild to moderate anaemia. Sima should take iron tablets daily, eat iron-rich foods, and add vitamin C to improve absorption.",
    explanationNe: "गर्भवती महिलाको हेमोग्लोबिन सामान्यतया ११ g/dL भन्दा माथि हुनुपर्छ। ९.५ हुनु भनेको रगतको कमी हुनु हो। सिमाले दिनदिनै आइरन चक्की खानुपर्छ, रगत बढाउने खानेकुरा खानुपर्छ र कागती, अमला जस्ता भिटामिन सी पाइने कुरा खाएमा आइरन राम्ररी पच्छ।"
  },
  {
    id: 2,
    title: "What is this fluttering sensation Kamala is feeling?",
    titleNe: "कमलाले महसुस गरिरहेको यो चलेको जस्तो के हो?",
    description: "Kamala is 18 weeks pregnant and feels something like a butterfly flutter in her belly.",
    descriptionNe: "कमला १८ हप्ताकी गर्भवती छिन् र उनलाई पेटमा केही चलेको वा पुतली उडेको जस्तो महसुस भइरहेको छ।",
    options: [
      { text: "Gas or indigestion — not the baby", textNe: "ग्यास वा अपचले गर्दा हो — बच्चा चलेको होइन", isCorrect: false },
      { text: "This is likely quickening — the first baby movements. Completely normal at 16–20 weeks.", textNe: "यसलाई 'क्विकनिङ' भनिन्छ — पेटमा बच्चा चल्न थालेको पहिलो संकेत। १६ देखि २० हप्तामा यस्तो हुनु एकदम सामान्य हो।", isCorrect: true },
      { text: "A sign she needs more calcium", textNe: "यसको मतलब उनलाई अझै क्याल्सियम चाहिन्छ", isCorrect: false }
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
      { text: "She must have a C-section immediately", textNe: "तुरुन्तै अप्रेसन (सिजेरियन) गर्नुपर्छ", isCorrect: false },
      { text: "In 90% of cases it moves upward as the uterus grows. It's noted but not necessarily a problem.", textNe: "९०% जसो अवस्थामा पाठेघर बढ्दै जाँदा यो आफैं माथि सर्छ। यो कुरा पछि सम्म ध्यान दिनुपर्छ तर सधैं समस्या हुन्छ भन्ने छैन।", isCorrect: true },
      { text: "The baby is in danger and she must be hospitalised", textNe: "बच्चा खतरामा छ र उनलाई अस्पताल भर्ना गर्नुपर्छ", isCorrect: false }
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
      { text: "Something is wrong with her spine and she needs an X-ray", textNe: "उनको ढाडमा समस्या छ र एक्स-रे गरिहाल्नुपर्छ", isCorrect: false },
      { text: "The growing uterus shifts the body's centre of gravity. Gentle stretching, supportive footwear, and seated breaks help.", textNe: "पाठेघर बढ्दै जाँदा शरीरको तौल अगाडि पर्छ। हल्का व्यायाम गर्ने, सजिलो जुत्ता लगाउने र बीच-बीचमा बसेर आराम गर्दा धेरै कम हुन्छ।", isCorrect: true },
      { text: "She must stop working immediately", textNe: "उनले काम गर्न तुरुन्तै छोड्नुपर्छ", isCorrect: false }
    ],
    explanation: "Lower back pain affects around 50–70% of pregnant women from the second trimester. As the uterus grows, the centre of gravity shifts forward. Gentle stretching, supportive footwear, and seated breaks help.",
    explanationNe: "गर्भावस्थाको बीचतिर ५० देखि ७० प्रतिशत महिलालाई कम्मर दुख्ने समस्या हुन्छ। पेट बढ्दै जाँदा शरीरको ब्यालेन्स मिल्दैन। यस्तो बेला हल्का स्ट्रेचिङ गर्ने, सजिलो जुत्ता चप्पल लगाउने र लामो समय नउभिएर बेला बेला आराम गर्दा राम्रो हुन्छ।"
  },
  {
    id: 5,
    title: "Does eating extra ghee make the baby's skin fairer or delivery easier?",
    titleNe: "धेरै घिउ खाँदा बच्चा गोरो जन्मिने र सुत्केरी हुन सजिलो हुन्छ भन्ने कुरा साँचो हो?",
    description: "Nisha is 24 weeks pregnant. Her mother-in-law advises her to eat a lot of ghee to make the baby's skin fair and delivery easier.",
    descriptionNe: "निशा २४ हप्ताकी गर्भवती छिन्। उनकी सासूले बच्चा गोरो जन्मियोस् र सुत्केरी हुन सजिलो होस् भनेर धेरै घिउ खान भनिरहनुभएको छ।",
    options: [
      { text: "Yes, ghee lightens skin and lubricates the birth canal", textNe: "हो, घिउले बच्चालाई गोरो बनाउँछ र बच्चा जन्मिने बाटो चिल्लो बनाउँछ", isCorrect: false },
      { text: "No — skin colour is determined by genetics. Moderate ghee is fine but large amounts add excess calories.", textNe: "होइन, बच्चाको रङ आमाबुबाको जीनमा भर पर्छ, खानेकुराले होइन। ठिक्क घिउ खानु राम्रै हो तर धेरै खाँदा तौल मात्र बढाउँछ।", isCorrect: true },
      { text: "Yes, but only if combined with milk", textNe: "हो, तर दूधसँग मिसाएर खानुपर्छ", isCorrect: false }
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
      { text: "It is only needed if the mother needs surgery", textNe: "आमालाई अप्रेसन गर्नुपरेमा मात्र चाहिन्छ", isCorrect: false },
      { text: "If the mother is Rh-negative and father is Rh-positive, Rh incompatibility can occur — treatable with an injection if caught early", textNe: "यदि आमाको नेगेटिभ (Negative) र बुबाको पोजेटिभ (Positive) ब्लड ग्रुप रहेछ भने बच्चालाई असर गर्न सक्छ। यो कुरा समयमै थाहा पाए सहजै सुईबाट रोक्न सकिन्छ।", isCorrect: true },
      { text: "Blood groups are only relevant for transfusions", textNe: "रगत चढाउनुपर्दा मात्र ब्लड ग्रुप थाहा पाए हुन्छ", isCorrect: false }
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
      { text: "She is overreacting and needs to be stronger", textNe: "उनी सानो कुरालाई ठूलो बनाउँदैछिन्, उनी अलि स्ट्रङ हुनुपर्छ", isCorrect: false },
      { text: "Hormonal changes — particularly rising oestrogen and progesterone — directly affect brain chemistry and mood. Emotional sensitivity is normal.", textNe: "शरीरमा हर्मोनहरू परिवर्तन भएकोले यस्तो हुन्छ। यस्तो बेला धेरै भावुक हुनु वा झर्को लाग्नु একদম सामान्य हो।", isCorrect: true },
      { text: "She has depression and needs medication immediately", textNe: "उनी डिप्रेसनमा छिन् र तुरुन्तै औषधि खानुपर्छ", isCorrect: false }
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
      { text: "Whether the mother is overweight", textNe: "आमाको तौल धेरै बढेको छ कि भनेर जाँचेको हो", isCorrect: false },
      { text: "It roughly estimates the baby's growth — fundal height in cm approximately matches weeks of pregnancy", textNe: "यसले पेट भित्र बच्चा कति बढिरहेको छ भन्ने अन्दाज हुन्छ। जति हप्ताको गर्भ भयो, यो उचाइ पनि लगभग त्यति नै सेन्टिमिटर हुन्छ।", isCorrect: true },
      { text: "Whether the baby's gender is male or female", textNe: "गर्भमा छोरा छ कि छोरी भनेर जाँचेको हो", isCorrect: false }
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
      { text: "Yes, all paints are safe in pregnancy", textNe: "हो, सबै खाले पेन्ट गर्भावस्थामा सुरक्षित नै हुन्छन्", isCorrect: false },
      { text: "Best to minimise exposure — some paints contain VOCs. Use low-VOC paint, keep windows open, and have someone else paint.", textNe: "पेन्टको गन्धबाट सकेसम्म बच्नु राम्रो। पेन्ट गर्दा झ्याल खुला राख्ने र आफूले नगरी अरूलाई गर्न लगाउने।", isCorrect: true },
      { text: "Only oil-based paints are dangerous", textNe: "तेल मिसाइएको (ओइल-बेस्ड) पेन्ट मात्र खतरनाक हुन्छ", isCorrect: false }
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
      { text: "She is exercising too much and needs to rest completely", textNe: "उनले धेरै काम वा व्यायाम गरेर हो, उनलाई पूर्ण आराम चाहिन्छ", isCorrect: false },
      { text: "Often linked to low calcium and magnesium, or reduced circulation. Calf stretching before bed, hydration, and calcium-rich foods help.", textNe: "प्रायजसो शरीरमा क्याल्सियमको कमी, पानीको कमी वा रक्तसञ्चार कम भएर यस्तो हुन्छ। सुत्नुअघि खुट्टा हल्का स्ट्रेच गर्ने र पानी प्रसस्त पिउने गर्नुपर्छ।", isCorrect: true },
      { text: "Leg cramps mean the baby is kicking the muscles", textNe: "खुट्टा बाउँडिनुको अर्थ बच्चाले भित्रबाट लात हानेर हो", isCorrect: false }
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
      { text: "Whether the mother likes sweet food", textNe: "उनलाई गुलियो कुरा पच्छ कि पच्दैन भनेर जाँचेको हो", isCorrect: false },
      { text: "Gestational diabetes — high blood sugar that develops during pregnancy. Very common and manageable if detected early.", textNe: "यो गर्भावस्थामा हुन सक्ने सुगर रोग पत्ता लगाउन गरिन्छ। यो समयमै थाहा भयो भने नियन्त्रण गर्न धेरै सजिलो हुन्छ।", isCorrect: true },
      { text: "Whether the baby will be born with diabetes", textNe: "बच्चा सुगर रोग लिएर जन्मिन्छ कि भनेर हेर्न हो", isCorrect: false }
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
      { text: "Yes, the stress of a funeral can directly harm the baby", textNe: "हो, त्यहाँको तनावले गर्दा बच्चालाई सिधै असर पर्छ", isCorrect: false },
      { text: "No direct medical concern — grief is natural. Be mindful of practical things: long standing, crowds, and heat.", textNe: "स्वास्थ्यको हिसाबले कुनै हानी हुँदैन। यद्यपि लामो समय उभिने, भिडभाडमा बस्ने वा गर्मीमा थकाइ लाग्ने कुरामा चाहिँ ध्यान दिनुपर्छ।", isCorrect: true },
      { text: "She should never leave the house in the second trimester", textNe: "दोस्रो त्रैमासिकमा घरबाहिर कतै जानै हुँदैन", isCorrect: false }
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
      { text: "Yes — she needs a C-section scheduled immediately", textNe: "हो — उनले तुरुन्तै अप्रेसन (सिजेरियन) को तयारी गर्नुपर्छ", isCorrect: false },
      { text: "No — most babies are breech at 26 weeks. 75–80% turn head-down by 36 weeks on their own.", textNe: "पर्दैन — २६ हप्ताको बेला धेरैजसो बच्चा उल्टै हुन्छन्। प्रायजसो बच्चाहरू ३६ हप्ता नपुग्दै आफैं सुल्टो (तलतिर टाउको भएको) हुन्छन्।", isCorrect: true },
      { text: "She needs to do special exercises every hour to turn the baby", textNe: "बच्चा सुल्टो बनाउन उनले हरेक घण्टा व्यायाम गर्नुपर्छ", isCorrect: false }
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
      { text: "A stretch mark — she needs to apply cream immediately", textNe: "यो छाला तन्किएर फाटेको (स्ट्रेच मार्क) हो — उनले तुरुन्त क्रिम लगाउनुपर्छ", isCorrect: false },
      { text: "This is linea nigra — completely normal pigmentation caused by hormonal changes. It fades after delivery.", textNe: "यसलाई 'लिनिया निग्रा' भनिन्छ — यो हर्मोनको कारणले छालामा आउने सामान्य गाढा रङ हो। बच्चा जन्मिएपछि यो आफैं हराएर जान्छ।", isCorrect: true },
      { text: "A sign of a skin infection", textNe: "यो छालामा कुनै एलर्जी वा इन्फेक्सन भएको संकेत हो", isCorrect: false }
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
      { text: "A full body massage done at the hospital", textNe: "यो सुत्केरी हुनु अघि अस्पतालमा गरिने पुरै शरीरको मालिस हो", isCorrect: false },
      { text: "Gentle massage of the perineum to improve elasticity — recommended from 34–36 weeks, not 24 weeks", textNe: "योनीको तल्लो भागलाई लचिलो बनाउन गरिने हल्का मालिस हो — तर यो ३४-३६ हप्ता देखि गर्ने हो, २४ हप्तामा होइन।", isCorrect: true },
      { text: "A massage to help the baby turn head-down", textNe: "यसले पेटभित्रको बच्चालाई तल फर्कन मद्दत गर्छ", isCorrect: false }
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
      { text: "Calcium is only important in the third trimester", textNe: "क्याल्सियम गर्भावस्थाको अन्तिम तिर मात्र भए पुग्छ", isCorrect: false },
      { text: "Very important throughout pregnancy — dairy, sesame seeds, ragi, leafy greens, and supplements all contribute", textNe: "यो गर्भावस्थाभरि नै एकदमै जरुरी हुन्छ। दूध, दही, हरियो सागपात, कोदो र डाक्टरले दिएको क्याल्सियम चक्की सबै खानुपर्छ।", isCorrect: true },
      { text: "Only milk counts — other foods do not provide calcium", textNe: "दूधबाट मात्र क्याल्सियम पाइन्छ — अरू खानेकुराबाट पर्याप्त पुग्दैन", isCorrect: false }
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
      { text: "No travel is allowed after 12 weeks", textNe: "१२ हप्ता पुगेपछि लामो यात्रा गर्नै मिल्दैन", isCorrect: false },
      { text: "Short to medium trips are generally safe. Wear seatbelt below belly, take breaks every hour, and stay hydrated.", textNe: "३-४ घण्टाको यात्रा सामान्यतया सुरक्षित नै हुन्छ। सिटबेल्ट लगाउँदा पेटमुनि पर्ने गरी लगाउने, बीच-बीचमा झरेर अलिअलि हिँड्ने र पानी पिइरहने गर्नुपर्छ।", isCorrect: true },
      { text: "Only if travelling by ambulance", textNe: "अत्यन्त जरुरी परे एम्बुलेन्समा मात्र जान मिल्छ", isCorrect: false }
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
      { text: "No — it is dangerous for the baby at any stage", textNe: "हुँदैन — गर्भावस्थामा यो पूर्ण रूपमा असुरक्षित हुन्छ र बच्चालाई असर गर्छ", isCorrect: false },
      { text: "Yes — in a normal pregnancy without complications, it is safe. The baby is protected by the amniotic sac and cervical mucus plug.", textNe: "हो — यदि डाक्टरले कुनै विशेष कारणले आराम गर्न भनेका छैनन् भने सामान्य गर्भावस्थामा यो एकदमै सुरक्षित हुन्छ।", isCorrect: true },
      { text: "Only in the first trimester", textNe: "सुरुको ३ महिना मात्र सुरक्षित हुन्छ, त्यसपछि हुँदैन", isCorrect: false }
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
      { text: "She is eating too much salt and should go on a low-salt diet immediately", textNe: "उनले धेरै नुन खाएकोले यस्तो भएको हो, नुन खानै छोड्नुपर्छ", isCorrect: false },
      { text: "Mild swelling is normal — blood volume increases by 50% and fluid accumulates in extremities, especially toward end of day", textNe: "अलिअलि सुन्निनु सामान्य कुरा हो — शरीरमा रगत र पानीको मात्रा बढेकोले साँझपख खुट्टा र हातहरु सुन्निने गर्छन्।", isCorrect: true },
      { text: "Her kidneys are failing", textNe: "यो मिर्गौ́ला (किड्नी) खराब भएको लक्षण हो", isCorrect: false }
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
      { text: "No exercise should be done during pregnancy", textNe: "गर्भवती भएपछि कुनै पनि काम वा व्यायाम गर्नु हुँदैन", isCorrect: false },
      { text: "Walking, swimming, prenatal yoga, and pelvic floor (Kegel) exercises are all beneficial and safe", textNe: "मर्निङ वाक गर्ने, गर्भवतीका लागि गराइने योग र पेल्भिक व्यायाम (Kegel) गर्ने गर्दा धेरै फाइदा हुन्छ र यी सुरक्षित पनि छन्।", isCorrect: true },
      { text: "Only heavy weight training", textNe: "जिम गएर गह्रौँ तौल उचाल्ने काम मात्र गर्नुपर्छ", isCorrect: false }
    ],
    explanation: "The second trimester is an ideal time to establish a gentle exercise routine. Walking, swimming, prenatal yoga, and Kegel exercises are all recommended and safe in a normal pregnancy.",
    explanationNe: "गर्भावस्थाको १६ हप्ता पछि बिस्तारै हल्का व्यायाम सुरु गर्नु राम्रो हो। बिहान-बेलुका आधा घन्टा जति हिँड्ने (वाक गर्ने), सजिलो खाले योग गर्ने र पेल्भिक व्यायाम गर्दा सुत्केरी हुन सजिलो हुन्छ भने ढाड दुख्ने समस्या पनि कम हुन्छ।"
  }
];
