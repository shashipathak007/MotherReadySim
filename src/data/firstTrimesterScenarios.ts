export interface ScenarioOption {
  text: string;
  textNe: string;
  isCorrect: boolean;
}

export interface Scenario {
  id: number;
  title: string;
  titleNe: string;
  description: string;
  descriptionNe: string;
  options: ScenarioOption[];
  explanation: string;
  explanationNe: string;
}

export const FIRST_TRIMESTER_SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "Morning sickness at 6 weeks — what is the best thing Sita can do?",
    titleNe: "६ हप्ताको गर्भ छ र बिहान वाकवाकी लाग्छ भने सीताले के गर्दा राम्रो हुन्छ?",
    description: "Sita is 6 weeks pregnant. Every morning she wakes up feeling very nauseous and sometimes vomits before breakfast.",
    descriptionNe: "सीता ६ हप्ताकी गर्भवती छिन्। उनलाई हरेक बिहान उठ्नेबित्तिकै धेरै वाकवाकी लाग्छ र कहिलेकाहीं केही खानु अगाडि नै बान्ता हुन्छ।",
    options: [
      { text: "Skip breakfast to avoid vomiting", textNe: "बान्ता हुन्छ भनेर बिहान केही नखाने", isCorrect: false },
      { text: "Eat small dry snacks like crackers or dry toast before getting out of bed", textNe: "ओछ्यानबाट उठ्नुभन्दा पहिले नै बिस्कुट वा टोस्ट जस्ता सुक्खा खानेकुरा थोरै खाने", isCorrect: true },
      { text: "Take a strong anti-nausea tablet immediately", textNe: "तुरुन्तै वाकवाकी रोक्ने कडा औषधि खाइहाल्ने", isCorrect: false }
    ],
    explanation: "Eating small dry snacks before getting up prevents an empty stomach, which is the main trigger for morning sickness. Keeping crackers on the bedside table and eating a few before even sitting up is one of the most effective and safe strategies. Morning sickness is very common and usually resolves by week 12–14.",
    explanationNe: "बिहान उठ्नेबित्तिकै पेट खाली हुँदा धेरै वाकवाकी लाग्छ। त्यसैले ओछ्यानको छेउमा बिस्कुट राखेर बिहान उठ्नुअघि नै थोरै खाँदा धेरै राहत मिल्छ। यो एकदम सामान्य समस्या हो र प्रायः ३ महिना (१२-१४ हप्ता) लागेपछि आफैं निको हुन्छ।"
  },
  {
    id: 2,
    title: "Why are folic acid tablets especially important in the first trimester?",
    titleNe: "सुरुको ३ महिनामा फोलिक एसिड चक्की खानु किन यति धेरै जरुरी छ?",
    description: "Puja is 8 weeks pregnant and her doctor prescribed iron and folic acid tablets. She sometimes forgets to take them.",
    descriptionNe: "पूजा ८ हप्ताकी गर्भवती छिन्। डाक्टरले उनलाई आइरन र फोलिक एसिड चक्की खान दिएका छन्, तर उनी कहिलेकाहीं खान बिर्सिन्छिन्।",
    options: [
      { text: "They prevent the mother from feeling tired", textNe: "यसले आमालाई थकाइ लाग्नबाट बचाउँछ", isCorrect: false },
      { text: "They help the baby's neural tube (brain and spine) develop correctly in the first 12 weeks", textNe: "सुरुको १२ हप्तामा यसले बच्चाको दिमाग र मेरुदण्डको राम्रो विकास हुन मद्दत गर्छ", isCorrect: true },
      { text: "They increase the mother's appetite", textNe: "यसले आमाको भोक बढाउँछ", isCorrect: false }
    ],
    explanation: "Folic acid is critical in the first 12 weeks because the baby's neural tube — which becomes the brain and spinal cord — forms during this period. A deficiency increases the risk of neural tube defects like spina bifida.",
    explanationNe: "सुरुको १२ हप्ता (३ महिना) मा फोलिक एसिड खानैपर्छ किनभने यसले बच्चाको दिमाग र मेरुदण्ड बन्न मद्दत गर्छ। यो नखाएमा बच्चा अपाङ्ग जन्मने डर हुन्छ।"
  },
  {
    id: 3,
    title: "Light spotting without pain at 10 weeks — what should Kamala do?",
    titleNe: "१० हप्ताको गर्भ छ र नदुखीकन अलिकति रगत (स्पटिङ) देखिएमा के गर्ने?",
    description: "Kamala is 10 weeks pregnant. She noticed some very light pink spotting in her underwear after a long walk. She has no pain.",
    descriptionNe: "कमला १० हप्ताकी गर्भवती छिन्। धेरै हिँडेपछि उनले भित्री लुगामा हल्का गुलाबी रगतको दाग देखिन्। तर उनलाई पेट दुखेको छैन।",
    options: [
      { text: "Ignore it, spotting is always normal in pregnancy", textNe: "वास्ता नगर्ने, प्रेग्नेन्सीमा रगत देखिनु सामान्य कुरा हो", isCorrect: false },
      { text: "Rest, reduce activity, and call her doctor to describe it", textNe: "काम छोडेर आराम गर्ने र डाक्टरलाई फोन गरेर यसबारे सोध्ने", isCorrect: true },
      { text: "Go to hospital immediately by ambulance", textNe: "एम्बुलेन्स बोलाएर तुरुन्तै अस्पताल गइहाल्ने", isCorrect: false }
    ],
    explanation: "Light spotting without pain is common in the first trimester and can happen after physical activity. However, any spotting should be reported to the doctor. Do not ignore it, but no need to panic without pain or heavy bleeding.",
    explanationNe: "सुरुको महिनाहरूमा नदुखीकन हल्का रगत देखिनु सामान्य पनि हुन सक्छ। तर यसलाई बेवास्ता गर्नु हुँदैन, घरमा आराम गरेर डाक्टर वा स्वास्थ्यकर्मीलाई जानकारी गराउनु सबैभन्दा राम्रो हो।"
  },
  {
    id: 4,
    title: "What is the recommendation about caffeine during pregnancy?",
    titleNe: "गर्भवती हुँदा चिया र कफी खान मिल्छ कि मिल्दैन?",
    description: "Sunita is 7 weeks pregnant and still drinking 2 cups of tea and 1 cup of coffee every day.",
    descriptionNe: "सुनीता ७ हप्ताकी गर्भवती छिन्। उनी अझै पनि दिनको २ कप चिया र १ कप कफी पिउने गर्छिन्।",
    options: [
      { text: "Caffeine is completely safe in any amount during pregnancy", textNe: "जति चिया-कफी खाए पनि बच्चालाई केही हानी गर्दैन", isCorrect: false },
      { text: "Limit caffeine to under 200mg per day — about 1 small cup of coffee or 2 cups of tea", textNe: "चिया-कफी धेरै नखाने — दिनमा १ सानो कप कफी वा २ कप चिया मात्र खाने", isCorrect: true },
      { text: "Stop all caffeine immediately or the baby will be harmed", textNe: "चुरोट-रक्सी जस्तै चिया-कफी पनि आजैदेखि पुरै छोड्नुपर्छ", isCorrect: false }
    ],
    explanation: "High caffeine intake is linked to low birth weight and miscarriage. The recommendation is under 200mg per day — roughly one small coffee or two cups of tea.",
    explanationNe: "धेरै चिया-कफी खानाले बच्चाको तौल कम हुने वा गर्भपतन हुने डर हुन्छ। त्यसैले दिनभरमा बढीमा २ कप चिया वा १ कप मात्र कफी खानु राम्रो हुन्छ।"
  },
  {
    id: 5,
    title: "Is it true that a pregnant woman needs to eat for two in the first trimester?",
    titleNe: "गर्भवती भएपछि आमा र बच्चा दुई जनाको लागि खाना खानुपर्छ भन्छन्, यो साँचो हो?",
    description: "Maya is 9 weeks pregnant. Her husband suggests she should eat for two since she is now pregnant.",
    descriptionNe: "माया ९ हप्ताकी गर्भवती छिन्। उनका श्रीमानले 'अब त आमा र बच्चा दुई जनाको लागि खानुपर्छ, धेरै खाऊ' भनिरहेका छन्।",
    options: [
      { text: "Yes, she should double her food intake from day one", textNe: "हो, गर्भवती भएको दिनदेखि नै खानाको मात्रा दोब्बर गर्नुपर्छ", isCorrect: false },
      { text: "No — extra calories are only needed from the second trimester, and only about 300 extra calories per day", textNe: "होइन — सुरुको ३ महिना थप खाना चाहिँदैन। चौथो महिना लागेपछि अलिकति (दिनको ३०० क्यालोरी जति) थपे पुग्छ।", isCorrect: true },
      { text: "Yes, but only for protein foods", textNe: "हो, तर प्रोटिन धेरै भएको खानेकुरा मात्र डबल गर्ने", isCorrect: false }
    ],
    explanation: "The idea of eating for two is a myth. In the first trimester, no significant extra calories are needed. From the second trimester onward, only about 300 extra calories per day are needed.",
    explanationNe: "दुई जनाको लागि खानुपर्छ भन्ने कुरा गलत हो। सुरुको ३ महिनामा आमालाई थप खाना चाहिँदैन। चौथो महिना लागेपछि दिनको थोरै (करिब ३०० क्यालोरी) पोषिलो खाना थपे पुग्छ, धेरै खाएर मोटोपन मात्र बढ्छ।"
  },
  {
    id: 6,
    title: "Is physical activity safe during a normal first-trimester pregnancy?",
    titleNe: "गर्भवती भएको सुरुको महिनाहरूमा काम गर्नु वा हिँडडुल गर्नु सुरक्षित हुन्छ?",
    description: "Gita is 11 weeks pregnant. She is a farmer and continues doing her usual field work — walking, bending, and carrying light loads.",
    descriptionNe: "गीता ११ हप्ताकी गर्भवती छिन्। उनी खेतबारीको सामान्य काम जस्तै हिँड्ने, निहुरिने र हल्का कुराहरू बोक्ने गर्छिन्।",
    options: [
      { text: "No, she should rest completely for all 9 months", textNe: "होइन, गर्भवती भएपछि ९ महिनासम्म सुतेर पूर्ण आराम गर्नुपर्छ", isCorrect: false },
      { text: "Yes, moderate activity is safe and even beneficial — she should avoid heavy lifting but normal daily activity is fine", textNe: "हो, हल्का काम गर्दा आमा र बच्चा दुवैलाई राम्रो हुन्छ — धेरै गह्रौँ भारी बोक्नु हुँदैन तर घरको सामान्य काम गर्न मज्जाले मिल्छ", isCorrect: true },
      { text: "Yes, but only walking is allowed", textNe: "हो, तर बिहान-बेलुका हिँड्ने (वाक गर्ने) बाहेक अरू काम गर्नु हुँदैन", isCorrect: false }
    ],
    explanation: "Moderate physical activity is safe and beneficial during a normal pregnancy. Complete bed rest is not recommended unless the doctor specifically advises it.",
    explanationNe: "सामान्य अवस्थामा गर्भवतीले बिस्तारै घरको वा खेतको हल्का काम गर्नु राम्रो हो। डाक्टरले आराम गर्न भनेका छैनन् भने दैनिक गरिरहेका सामान्य काम गर्न सुरक्षित नै हुन्छ।"
  },
  {
    id: 7,
    title: "Which of these foods is genuinely unsafe during early pregnancy?",
    titleNe: "गर्भावस्थाको सुरुमा खान नहुने कुरा कुन हो?",
    description: "Rina is 6 weeks pregnant and her sister advises her to stop eating papaya, pineapple, and raw eggs.",
    descriptionNe: "रिना ६ हप्ताकी गर्भवती छिन्। उनकी दिदीले उनलाई मेवा, भुइँकटहर र राम्ररी नपाकेको अण्डा नखान सल्लाह दिँदै छिन्।",
    options: [
      { text: "Ripe papaya in small amounts", textNe: "थोरै मात्रामा पाकेको मेवा", isCorrect: false },
      { text: "Raw or undercooked eggs — risk of Salmonella infection", textNe: "काँचो वा राम्ररी नपाकेको अण्डा (हाफ-बोयल) — यसले पेटमा इन्फेक्सन गराउन सक्छ", isCorrect: true },
      { text: "Ripe pineapple in small amounts", textNe: "थोरै मात्रामा पाकेको भुइँकटहर", isCorrect: false }
    ],
    explanation: "Raw or undercooked eggs can carry Salmonella bacteria. Ripe papaya and ripe pineapple in normal amounts are safe. Unripe green papaya should be avoided.",
    explanationNe: "काँचो वा राम्ररी नबिनेको (हाफ-बोयल) अण्डा खाँदा फुड पोइजनिङ (इन्फेक्सन) हुने डर हुन्छ, त्यसैले यसलाई पूरै पकाएर मात्र खानुपर्छ। तर पाकेको मेवा र पाकेको भुइँकटहर ठिक्क मात्रामा खाँदा केही फरक पर्दैन।"
  },
  {
    id: 8,
    title: "Should a healthy pregnant woman stop working in the first trimester?",
    titleNe: "स्वस्थ गर्भवती महिलाले काम वा जागिर छोड्नुपर्छ र?",
    description: "Sarita is 8 weeks pregnant and still going to her job as a teacher every day. Her mother-in-law says she should stop working.",
    descriptionNe: "सरिता ८ हप्ताकी गर्भवती छिन् र दिनहुँ स्कुलमा पढाउन जान्छिन्। उनकी सासूले 'अब सुत्केरी नहुन्जेल बिदा लिएर घरमै बस' भन्दै हुनुहुन्छ।",
    options: [
      { text: "Yes, complete rest is required for the first 3 months", textNe: "हो, सुरुको ३ महिना घरमै सुतेर आराम गर्नुपर्छ", isCorrect: false },
      { text: "No — working in a normal job is safe. She should avoid heavy physical strain but teaching is fine.", textNe: "होइन — सामान्य जागिर खान वा पढाउन जान सुरक्षित नै हुन्छ। धेरै गाह्रो पर्ने काम गर्नु हुँदैन तर पढाउने काम गर्न मिल्छ।", isCorrect: true },
      { text: "She should work only 2 hours per day", textNe: "उनले दिनमा जम्मा २ घण्टा मात्र काम गर्न मिल्छ", isCorrect: false }
    ],
    explanation: "Working during pregnancy is safe for most women in most jobs. Teaching is a low-risk job.",
    explanationNe: "धेरैजसो स्वास्थ्य समस्या नभएका गर्भवती महिलालाई काम गर्न सुरक्षित नै हुन्छ। गाह्रो नहुने सामान्य पेशा वा जागिर सुत्केरी हुनु अघिसम्म पनि मज्जाले गर्न सकिन्छ।"
  },
  {
    id: 9,
    title: "When should the first ANC checkup ideally happen?",
    titleNe: "पहिलो पटक गर्भ जाँच (ANC) गराउन कहिले जानुपर्छ?",
    description: "Priya is 10 weeks pregnant and has not had her first ANC checkup yet.",
    descriptionNe: "प्रिया १० हप्ताकी गर्भवती छिन् र उनले अहिलेसम्म स्वास्थ्य चौकीमा गएर गर्भ जाँच गराएकी छैनन्।",
    options: [
      { text: "Only at 6 months when the belly is showing", textNe: "पेट अलि ठूलो भएर देखिन थालेपछि ५-६ महिनातिर जाने", isCorrect: false },
      { text: "As early as possible — ideally within the first 12 weeks", textNe: "सकेसम्म चाँडो — गर्भवती भएको ३ महिना (१२ हप्ता) भित्रै पहिलो जाँच गराइसक्नुपर्छ", isCorrect: true },
      { text: "Only when she feels something is wrong", textNe: "केही समस्या भयो वा पेट दुख्यो भने मात्र जाने", isCorrect: false }
    ],
    explanation: "The first ANC checkup should happen before 12 weeks. Nepal's Aama Programme requires a minimum of 4 ANC visits for the full cash incentive.",
    explanationNe: "पहिलो गर्भ जाँच ३ महिना (१२ हप्ता) भित्रै गरिसक्नु सबैभन्दा राम्रो हो। नेपाल सरकारको नियम अनुसार यातायात खर्च र भत्ता पाउन पनि समयमै जाँच गराउन सुरु गर्नुपर्छ।"
  },
  {
    id: 10,
    title: "Why is extreme fatigue so common in the first trimester?",
    titleNe: "गर्भवती भएको सुरुको ३ महिनामा एकदमै धेरै थकाइ लाग्नु सामान्य हो?",
    description: "Laxmi is 7 weeks pregnant and feeling very tired all the time, even without doing much work.",
    descriptionNe: "लक्ष्मी ७ हप्ताकी गर्भवती छिन्। उनी धेरै काम नगर्दा पनि सधैं आलस्य लाग्ने र धेरै थकाइ लाग्ने अनुभव गर्छिन्।",
    options: [
      { text: "She is being lazy and needs to push through it", textNe: "उनी अल्छी भएकी हुन्, उनले काम गर्नुपर्छ", isCorrect: false },
      { text: "Her body is producing high levels of progesterone, which causes sleepiness, and is building the placenta — both require huge energy", textNe: "हर्मोनको कारणले गर्दा यस्तो हुन्छ र पेटमा बच्चाको लागि साल (Placenta) बन्ने प्रक्रियामा शरीरको धेरै शक्ति खर्च हुन्छ।", isCorrect: true },
      { text: "She must be anaemic — she needs an iron injection immediately", textNe: "उनलाई रगतको कमी भएको पक्का हो — तुरुन्तै आइरन सुई लगाउनुपर्छ", isCorrect: false }
    ],
    explanation: "First-trimester fatigue is caused by high progesterone and the body building the placenta. Rest is genuinely needed. Fatigue typically improves by week 12–14.",
    explanationNe: "सुरुको ३ महिनामा शरीरभित्र हर्मोनहरू फेरबदल हुने र बच्चाका लागि साल (Placenta) बन्ने भएकाले शरीरले धेरै शक्ति खर्च गर्छ। त्यसैले यस्तो बेला धेरै थकान र आलस्य लाग्नु एकदम सामान्य हो।"
  },
  {
    id: 11,
    title: "Are vivid dreams during pregnancy normal?",
    titleNe: "गर्भवती हुँदा राति एकदमै अनौठा र प्रस्ट सपनाहरू देख्नु सामान्य हो?",
    description: "Nirmala is 9 weeks pregnant. She has been having vivid and sometimes strange dreams every night.",
    descriptionNe: "निर्मला ९ हप्ताकी गर्भवती छिन्। राति सुत्दा उनले हरेक दिन एकदमै अनौठा र कहिलेकाहीं तर्साउने खालका सपनाहरू देखिरहेकी छिन्।",
    options: [
      { text: "No — vivid dreams mean the baby is in distress", textNe: "होइन — यस्ता सपना देख्नु भनेको बच्चा खतरामा छ भन्ने संकेत हो", isCorrect: false },
      { text: "Yes — hormonal changes and increased REM sleep make vivid dreams very common in all three trimesters", textNe: "हो — हर्मोनहरू परिवर्तन भएकोले गर्भवती महिलाले यस्ता सपना देख्नु एकदम सामान्य कुरा हो", isCorrect: true },
      { text: "Only if they happen before midnight", textNe: "राती १२ बजे अगाडि देखिएका सपना मात्र सामान्य हुन्", isCorrect: false }
    ],
    explanation: "Vivid, intense, and sometimes strange dreams are completely normal throughout pregnancy due to hormonal changes affecting sleep architecture.",
    explanationNe: "गर्भावस्थामा हर्मोनहरूको कारणले निद्राको तरिका अलिकति फेरिन्छ। त्यसले गर्दा राति धेरै सपना देखिने र ती सपना निकै प्रस्ट वा अनौठा लाग्ने हुन सक्छन्। यस्तो सपनाले बच्चालाई कुनै असर गर्दैन, डराउनु पर्दैन।"
  },
  {
    id: 12,
    title: "Is bleeding gums during pregnancy normal or a cause for concern?",
    titleNe: "गर्भवती हुँदा गिजाबाट रगत आउनु सामान्य हो कि डराउनुपर्छ?",
    description: "Bindu is 11 weeks pregnant and her gums have been bleeding slightly when she brushes her teeth.",
    descriptionNe: "बिन्दु ११ हप्ताकी गर्भवती छिन्। आजभोलि दाँत माझ्दा उनको गिजाबाट अलिअलि रगत आइरहेको छ।",
    options: [
      { text: "She has a serious vitamin deficiency and must see a specialist", textNe: "उनलाई कुपोषण भएको छ र तुरुन्तै डाक्टरकहाँ जानुपर्छ", isCorrect: false },
      { text: "Mild gum bleeding (pregnancy gingivitis) is very common due to hormonal changes — maintain good dental hygiene", textNe: "यो हर्मोनको कारणले गिजा अलि सुन्निने भएर हो र यो सामान्य कुरा हो — हल्का ब्रस गर्ने र मुख सफा राख्ने", isCorrect: true },
      { text: "She must stop brushing her teeth immediately", textNe: "उनले दाँत माझ्न तुरुन्तै बन्द गर्नुपर्छ", isCorrect: false }
    ],
    explanation: "Pregnancy gingivitis affects up to 75% of pregnant women due to increased progesterone causing more blood flow to gum tissue.",
    explanationNe: "गर्भावस्थामा हर्मोन बढेको कारणले गिजामा धेरै रगत प्रवाह हुन्छ, त्यसैले ब्रस गर्दा हल्का रगत आउनु सामान्य हो। तर पनि दाँत माझ्न छोड्नु हुँदैन, नरम ब्रसले बिस्तारै सफा गरेर मुख सफा राख्नुपर्छ।"
  },
  {
    id: 13,
    title: "Should Kabita continue ANC checkups if she follows traditional rituals?",
    titleNe: "धामीझाँक्री वा पुजापाठमा विश्वास गर्नेले पनि स्वास्थ्य चौकी गएर गर्भ जाँच गर्नुपर्छ र?",
    description: "Kabita is 8 weeks pregnant and her family is advising her to visit a local faith healer and follow specific rituals.",
    descriptionNe: "कबिता ८ हप्ताकी गर्भवती छिन्। परिवारका पाका मान्छेहरूले उनलाई धामीकहाँ गएर फुक्न र ग्रह शान्ति गर्न भनिरहेका छन्।",
    options: [
      { text: "No — if she follows traditional rituals, ANC is not needed", textNe: "पर्दैन — धामीकहाँ गएर झारफुक गराएपछि डाक्टरलाई देखाउनु पर्दैन", isCorrect: false },
      { text: "Yes — traditional rituals and ANC checkups are not mutually exclusive. Medical care during pregnancy is essential regardless of cultural practices.", textNe: "पर्छ — पुजापाठ गर्नु आफ्नो ठाउँमा छ तर आमा र बच्चा स्वस्थ छन् कि छैनन् भनेर हेर्न स्वास्थ्य चौकी जानैपर्छ।", isCorrect: true },
      { text: "Only if the faith healer says so", textNe: "धामीले डाक्टरकहाँ जा भने मात्र जाने", isCorrect: false }
    ],
    explanation: "Traditional practices should be respected but they do not replace the critical medical monitoring that ANC checkups provide.",
    explanationNe: "आफ्नो धर्म र परम्परा मान्नु ठिकै हो, तर त्यसले मात्र बच्चाको तौल, प्रेसर र रगतको अवस्था बताउँदैन। त्यसैले पुजाआजा गर्दै गर्दा पनि नियमित रूपमा स्वास्थ्य जाँच (ANC) त गराउनैपर्छ।"
  },
  {
    id: 14,
    title: "Are herbal teas and traditional mixtures safe during the first trimester?",
    titleNe: "सुरुको ३ महिनामा गाउँघरमा पाइने जडीबुटीको झोल खानु सुरक्षित हुन्छ?",
    description: "Deepa is 10 weeks pregnant and has been told by her mother to drink special herbal mixtures from the village.",
    descriptionNe: "दीपा १० हप्ताकी गर्भवती छिन्। उनकी आमाले बच्चा राम्रो हुन्छ भनेर वनको जडीबुटी उमालेर पिउन भन्दै हुनुहुन्छ।",
    options: [
      { text: "All herbs are natural so they are always safe", textNe: "जडीबुटी भनेको केमिकल नभएको प्राकृतिक कुरा हो, जति खाए पनि हुन्छ", isCorrect: false },
      { text: "Many herbal mixtures have not been tested in pregnancy and some can cause uterine contractions — always check with a doctor or ANM before taking any herb", textNe: "केही जडीबुटीले पाठेघर खुम्च्याएर गर्भपतन गराउन सक्छन् — डाक्टर वा नर्सलाई नसोध्ने त्यस्ता कुराहरू खानु हुँदैन", isCorrect: true },
      { text: "Herbal drinks are better than any medicine", textNe: "जडीबुटी भनेको अस्पतालको औषधिभन्दा धेरै राम्रो हो", isCorrect: false }
    ],
    explanation: "Natural does not mean safe during pregnancy. Several commonly used herbs can stimulate uterine contractions or affect fetal development.",
    explanationNe: "प्राकृतिक हुँदैमा सबै जडीबुटी गर्भवती महिलाका लागि सुरक्षित हुन्छन् भन्ने हुँदैन। कतिपय जडीबुटीले गर्दा रगत बग्ने वा गर्भपतन हुने खतरा हुन सक्छ। त्यसैले स्वास्थ्यकर्मीलाई नसोधीकन यस्ता जडीबुटीका झोल वा ओखती खानु हुँदैन।"
  },
  {
    id: 15,
    title: "What is the main purpose of the first ultrasound (dating scan) at 11–13 weeks?",
    titleNe: "पहिलो पटक (११ देखि १३ हप्तामा) गरिने भिडियो एक्स-रे ले के देखाउँछ?",
    description: "Suna is 12 weeks pregnant and just had her first ultrasound. The report says the baby is the right size for 12 weeks.",
    descriptionNe: "सुना १२ हप्ताकी गर्भवती छिन् र उनले भर्खर भिडियो एक्स-रे (Ultrasound) गराइन्। डाक्टरले बच्चा ठीकसँग हुर्किरहेको छ भनेर बताएका छन्।",
    options: [
      { text: "To find out the baby's gender", textNe: "बच्चा छोरा हो कि छोरी हो भनेर हेर्न", isCorrect: false },
      { text: "To confirm the pregnancy is in the uterus, check for twins, confirm the due date, and screen for chromosomal conditions", textNe: "गर्भ पाठेघरभित्रै बसेको छ कि छैन, बच्चा जुम्ल्याहा हो कि, र सुत्केरी हुने मिति कहिलेको छ भनेर पक्का गर्न", isCorrect: true },
      { text: "Only to take a photo for the family", textNe: "बच्चाको फोटो खिचेर फ्रेममा राख्न मात्र", isCorrect: false }
    ],
    explanation: "The first-trimester ultrasound confirms the pregnancy is inside the uterus, establishes the due date, checks for twins, and screens for chromosomal conditions.",
    explanationNe: "सुरुको भिडियो एक्स-रे ले गर्भ पाठेघरभित्र बसेको छ कि नलीमा बसेको छ भनेर हेर्छ। यसैले बच्चा एउटा छ कि जुम्ल्याहा छ र सुत्केरी हुने मिति एक्ज्याक्ट कुन हो भनेर पनि बताउँछ। यो ज्यादै महत्त्वपूर्ण जाँच हो।"
  },
  {
    id: 16,
    title: "What is the effect of smoking and secondhand smoke during the first trimester?",
    titleNe: "गर्भवती हुँदा चुरोट पिउनु वा अरूले चुरोट खाएको ठाउँमा बस्नुले कस्तो असर गर्छ?",
    description: "Durga is 9 weeks pregnant and still smoking occasionally. Her husband also smokes inside the house.",
    descriptionNe: "दुर्गा ९ हप्ताकी गर्भवती छिन् र उनी अझै पनि बेलाबेला चुरोट पिउँछिन्। उनका श्रीमानले पनि घरभित्रै चुरोट खान्छन्।",
    options: [
      { text: "Smoking is only dangerous after the 6th month", textNe: "चुरोटको धुवाँले ६ महिनापछि मात्र असर गर्छ", isCorrect: false },
      { text: "Both active smoking and secondhand smoke increase the risk of miscarriage, low birth weight, and preterm birth — both Durga and her husband should stop", textNe: "चुरोटको धुवाँले गर्भपतन हुने वा बच्चा सानो/कमजोर जन्मने डर हुन्छ — त्यसैले दुर्गा र उनका श्रीमान दुवैले चुरोट छोड्नुपर्छ", isCorrect: true },
      { text: "Only the father's smoking affects the baby", textNe: "श्रीमानले घरमा खाएको चुरोटले मात्र बच्चालाई असर गर्छ", isCorrect: false }
    ],
    explanation: "Smoking during pregnancy — both active and passive — is harmful at every stage. There is no safe level of smoking during pregnancy.",
    explanationNe: "गर्भवती महिलाले चुरोट खानु वा अरूले खाएको धुवाँ सुँघ्नु दुवै बच्चाको लागि एकदमै खतरनाक हुन्छ। यसले गर्दा बच्चा खेर जाने वा महिना नपुगी जन्मने जोखिम धेरै हुन्छ। घरभित्र कसैले पनि चुरोट पिउनु हुँदैन।"
  },
  {
    id: 17,
    title: "Should iron tablets be taken every day or only when you feel tired?",
    titleNe: "आइरन चक्की कुन बेला खाने: दिनदिनै कि थकाइ लाग्दा मात्र?",
    description: "Anita is 11 weeks pregnant and is thinking about whether she needs to take her iron tablets every day or only when she feels tired.",
    descriptionNe: "अनिता ११ हप्ताकी गर्भवती छिन्। उनी 'आइरन चक्की त थकाइ वा चक्कर लाग्दा मात्र खाए हुँदैन र?' भनेर सोचिरहेकी छिन्।",
    options: [
      { text: "Only when feeling tired or dizzy", textNe: "थकाइ वा रिंगटा लागेको बेला मात्र खाने", isCorrect: false },
      { text: "Every day as prescribed — iron builds up in the body slowly and preventing anaemia is much better than treating it", textNe: "हरेक दिन खानुपर्छ — आइरन चक्कीले रगत बढाउन समय लाग्ने भएकाले सधैं खाएर रगत कम हुन नदिनु नै राम्रो हो", isCorrect: true },
      { text: "Every other day is fine", textNe: "एक दिन बिराएर खाँदा पनि हुन्छ", isCorrect: false }
    ],
    explanation: "Iron supplements must be taken every day as prescribed. By the time symptoms of anaemia appear, the deficiency is already significant.",
    explanationNe: "आइरन चक्की डाक्टरले भने अनुसार दिनदिनै खानुपर्छ। रिंगटा लाग्ने वा थकाइ लाग्ने बेलासम्म त शरीरमा रगत धेरै नै कम भइसकेको हुन्छ। त्यसैले रगतको कमी हुनै नदिन दिनहुँ खानु जरुरी छ।"
  },
  {
    id: 18,
    title: "Why do many cultures advise waiting until after 3 months to announce a pregnancy?",
    titleNe: "गाउँघरमा किन ३ महिना नकाटीकन 'गर्भवती भएकी छु' भन्नु हुँदैन भन्छन्?",
    description: "Rita is 8 weeks pregnant and has been told she should not tell anyone about the pregnancy until after 3 months.",
    descriptionNe: "रीता ८ हप्ताकी गर्भवती छिन्। परिवारका ठूलाबडाले उनलाई '३ महिना पार नहुन्जेल अरूलाई यो कुरा नसुनाउनू' भनेका छन्।",
    options: [
      { text: "It is purely superstition with no basis", textNe: "यो कुनै मतलब नभएको पुरानो अन्धविश्वास मात्र हो", isCorrect: false },
      { text: "The first trimester has the highest risk of miscarriage. Many families wait so they do not have to share difficult news if a loss occurs.", textNe: "सुरुको ३ महिनामा बच्चा खेर जाने डर धेरै हुन्छ। पछि गएर दुःखको कुरा सबैलाई सुनाउनु नपरोस् भनेर मानिसहरू ३ महिना कट्न पर्खिने गर्छन्।", isCorrect: true },
      { text: "The baby is not really a baby until 3 months", textNe: "३ महिना नभएसम्म पेटभित्रको बच्चा साँच्चैको बच्चा बनिसकेकै हुँदैन", isCorrect: false }
    ],
    explanation: "The first trimester has the highest miscarriage rate — about 10–20% of known pregnancies. Many families choose to wait until after 12 weeks when the risk drops sharply.",
    explanationNe: "सुरुको ३ महिना (१२ हप्ता) मा गर्भ खेर जाने जोखिम सबैभन्दा बढी (लगभग १०-२० प्रतिशत) हुन्छ। ३ महिना काटेपछि यो डर एकदमै कम हुन्छ, त्यसैले धेरैजसो परिवारले ३ महिनापछि मात्र खुसीको खबर अरूलाई भन्न रुचाउँछन्।"
  },
  {
    id: 19,
    title: "What is the best sleeping position in the first trimester?",
    titleNe: "सुरुको ३ महिनामा सुत्दा कसरी सुत्नु सबैभन्दा राम्रो हो?",
    description: "Mina is 10 weeks pregnant and has not been sleeping well because she cannot find a comfortable sleeping position.",
    descriptionNe: "मिना १० हप्ताकी गर्भवती छिन्। उनलाई 'उत्तानो सुत्ने कि कोल्टे फेरेर सुत्ने?' भनेर डर लागेर राम्ररी सुत्न सकेकी छैनन्।",
    options: [
      { text: "Only on the back with a pillow under the head", textNe: "टाउकोमा सिरानी राखेर सिधा उत्तानो मात्र सुत्ने", isCorrect: false },
      { text: "Any comfortable position is fine in the first trimester — left side becomes more important from the second trimester onward", textNe: "पहिलो ३ महिनामा आफूलाई जसरी सजिलो लाग्छ त्यसरी नै सुत्न मिल्छ — देब्रे कोल्टे परेर सुत्ने कुरा पेट ठूलो हुन थालेपछि मात्र जरुरी हुन्छ", isCorrect: true },
      { text: "Only on the right side", textNe: "दाहिने कोल्टे फर्केर मात्र सुत्ने", isCorrect: false }
    ],
    explanation: "In the first trimester, the uterus is still small and sleeping in any comfortable position is perfectly fine.",
    explanationNe: "सुरुका महिनाहरूमा पाठेघर धेरै सानो हुने भएकाले बच्चालाई कुनै असर गर्दैन। त्यसैले आफूलाई जसरी सजिलो लाग्छ (उत्तानो वा कोल्टे) त्यसरी नै सुते हुन्छ।"
  },
  {
    id: 20,
    title: "Is mild weight loss in the first trimester due to morning sickness concerning?",
    titleNe: "सुरुको ३ महिनामा वाकवाकीले गर्दा आमाको तौल अलिकति घट्नु डराउनुपर्ने कुरा हो?",
    description: "Sangita is 7 weeks pregnant and her husband is worried because she has lost 1kg of weight due to nausea and reduced eating.",
    descriptionNe: "संगीता ७ हप्ताकी गर्भवती छिन्। खाना नरुच्ने र वाकवाकी लाग्ने भएर उनको तौल १ किलो जति घटेको छ, जुन देखेर श्रीमानलाई पिर परेको छ।",
    options: [
      { text: "Yes — any weight loss is dangerous and she needs hospitalization", textNe: "हो — तौल थोरै घट्ने बित्तिकै आत्तिनुपर्छ र अस्पताल दौडिहाल्नुपर्छ", isCorrect: false },
      { text: "Mild weight loss (1–2kg) due to nausea in the first trimester is common and usually not harmful as long as she stays hydrated and keeps some food down", textNe: "सुरुको महिनाहरूमा वाकवाकीले १-२ किलो तौल घट्नु एकदम सामान्य हो। पानी प्रशस्त पिउने र थोरै थोरै भए पनि खाइराख्ने हो भने बच्चालाई असर गर्दैन।", isCorrect: true },
      { text: "She must force herself to eat large meals three times a day", textNe: "जबरजस्ती भए पनि दिनको ३ छाक टन्न खानैपर्छ", isCorrect: false }
    ],
    explanation: "Losing 1–2kg in the first trimester due to morning sickness is common and generally not harmful if the mother stays hydrated.",
    explanationNe: "पहिलो ३ महिनामा खाना रुची नहुँदा वा वाकवाकी लाग्दा १ देखि २ किलोसम्म तौल घट्नु धेरै महिलालाई हुने कुरा हो। शरीरमा पानीको कमी हुन दिएको छैन र थोरै थोरै भए पनि खाइरहेको छ भने यसले बच्चालाई कुनै नोक्सान पुग्दैन।"
  }
];