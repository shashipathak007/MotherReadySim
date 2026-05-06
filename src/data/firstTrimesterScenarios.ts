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
      { text: "Skip breakfast", textNe: "बिहान केही नखाने", isCorrect: false },
      { text: "Eat dry snacks before rising", textNe: "उठ्नुअघि सुक्खा बिस्कुट खाने", isCorrect: true },
      { text: "Take strong anti-nausea medicine", textNe: "कडा औषधि खाइहाल्ने", isCorrect: false }
    ],
    explanation: "Eating small dry snacks before getting up prevents morning sickness. Keeping crackers on the bedside table and eating a few before even sitting up is one of the most effective and safe strategies.",
    explanationNe: "बिहान उठ्नेबित्तिकै पेट खाली हुँदा धेरै वाकवाकी लाग्छ। त्यसैले ओछ्यानको छेउमा बिस्कुट राखेर बिहान उठ्नुअघि नै थोरै खाँदा धेरै राहत मिल्छ। यो एकदम सामान्य समस्या हो र प्रायः ३ महिना (१२-१४ हप्ता) लागेपछि आफैं निको हुन्छ।"
  },
  {
    id: 2,
    title: "Why are folic acid tablets especially important in the first trimester?",
    titleNe: "सुरुको ३ महिनामा फोलिक एसिड चक्की खानु किन यति धेरै जरुरी छ?",
    description: "Puja is 8 weeks pregnant and her doctor prescribed iron and folic acid tablets. She sometimes forgets to take them.",
    descriptionNe: "पूजा ८ हप्ताकी गर्भवती छिन्। डाक्टरले उनलाई आइरन र फोलिक एसिड चक्की खान दिएका छन्, तर उनी कहिलेकाहीं खान बिर्सिन्छिन्।",
    options: [
      { text: "Prevents mother's fatigue", textNe: "आमालाई थकाइबाट बचाउँछ", isCorrect: false },
      { text: "Aids baby's brain & spine growth", textNe: "दिमाग र मेरुदण्डको विकास गर्छ", isCorrect: true },
      { text: "Increases mother's appetite", textNe: "आमाको भोक बढाउँछ", isCorrect: false }
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
      { text: "Ignore it, spotting is normal", textNe: "वास्ता नगर्ने, सामान्य हो", isCorrect: false },
      { text: "Rest and call doctor", textNe: "आराम गर्ने र डाक्टरलाई सोध्ने", isCorrect: true },
      { text: "Go to hospital by ambulance", textNe: "एम्बुलेन्समा अस्पताल गइहाल्ने", isCorrect: false }
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
      { text: "Completely safe", textNe: "जति खाए पनि हुन्छ", isCorrect: false },
      { text: "Limit: 1 coffee or 2 teas/day", textNe: "दिनमा १ कफी वा २ चिया मात्र खाने", isCorrect: true },
      { text: "Stop caffeine immediately", textNe: "पुरै छोड्नुपर्छ", isCorrect: false }
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
      { text: "Yes, double food from day one", textNe: "हो, आजैदेखि खाना दोब्बर गर्ने", isCorrect: false },
      { text: "No, extra calories needed later", textNe: "होइन, पछि मात्र अलिकति थपे पुग्छ", isCorrect: true },
      { text: "Yes, but only protein foods", textNe: "हो, तर प्रोटिन मात्र डबल गर्ने", isCorrect: false }
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
      { text: "No, complete rest for 9 months", textNe: "९ महिनासम्म पूर्ण आराम गर्नुपर्छ", isCorrect: false },
      { text: "Yes, moderate activity is safe", textNe: "हल्का काम गर्न मज्जाले मिल्छ", isCorrect: true },
      { text: "Yes, but only walking allowed", textNe: "बिहान-बेलुका हिँड्ने मात्र", isCorrect: false }
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
      { text: "Ripe papaya", textNe: "पाकेको मेवा", isCorrect: false },
      { text: "Raw/undercooked eggs", textNe: "काँचो वा हाफ-बोयल अण्डा", isCorrect: true },
      { text: "Ripe pineapple", textNe: "पाकेको भुइँकटहर", isCorrect: false }
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
      { text: "Yes, complete rest required", textNe: "घरमै सुतेर आराम गर्नुपर्छ", isCorrect: false },
      { text: "No, teaching is perfectly safe", textNe: "सामान्य काम वा जागिर गर्न मिल्छ", isCorrect: true },
      { text: "Work only 2 hours per day", textNe: "दिनमा २ घण्टा मात्र काम गर्ने", isCorrect: false }
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
      { text: "At 6 months when belly shows", textNe: "५-६ महिनातिर जाने", isCorrect: false },
      { text: "Within the first 12 weeks", textNe: "३ महिना (१२ हप्ता) भित्रै जाने", isCorrect: true },
      { text: "Only if something feels wrong", textNe: "पेट दुख्यो भने मात्र जाने", isCorrect: false }
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
      { text: "She is just being lazy", textNe: "उनी अल्छी भएकी हुन्", isCorrect: false },
      { text: "Body is building the placenta", textNe: "साल (Placenta) बन्दैछ, यो सामान्य हो", isCorrect: true },
      { text: "She needs an iron injection", textNe: "आइरन सुई लगाउनुपर्छ", isCorrect: false }
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
      { text: "No, baby is in distress", textNe: "बच्चा खतरामा छ भन्ने संकेत हो", isCorrect: false },
      { text: "Yes, due to hormonal changes", textNe: "हर्मोनको कारणले, यो सामान्य हो", isCorrect: true },
      { text: "Only if before midnight", textNe: "राती १२ बजे अगाडि मात्र सामान्य", isCorrect: false }
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
      { text: "Serious vitamin deficiency", textNe: "कुपोषण भएको छ, डाक्टरकहाँ जाने", isCorrect: false },
      { text: "Mild gum bleeding is common", textNe: "हर्मोनको कारणले, यो सामान्य हो", isCorrect: true },
      { text: "Stop brushing teeth", textNe: "दाँत माझ्न बन्द गर्ने", isCorrect: false }
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
      { text: "No, ANC is not needed then", textNe: "पर्दैन, स्वास्थ्य चौकी जानु पर्दैन", isCorrect: false },
      { text: "Yes, medical care is essential", textNe: "पर्छ, स्वास्थ्य जाँच गराउनैपर्छ", isCorrect: true },
      { text: "Only if faith healer says so", textNe: "धामीले भने मात्र जाने", isCorrect: false }
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
      { text: "All herbs are completely safe", textNe: "जडीबुटी जति खाए पनि हुन्छ", isCorrect: false },
      { text: "Many herbs are unsafe in pregnancy", textNe: "केही जडीबुटी खतरा हुन्छन्, नसोधी नखाने", isCorrect: true },
      { text: "Better than any medicine", textNe: "औषधिभन्दा जडीबुटी राम्रो हो", isCorrect: false }
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
      { text: "To find baby's gender", textNe: "छोरा वा छोरी हेर्न", isCorrect: false },
      { text: "Confirm dates, location & twins", textNe: "मिति, जुम्ल्याहा र गर्भको अवस्था थाहा पाउन", isCorrect: true },
      { text: "To take a photo", textNe: "फोटो खिच्न मात्र", isCorrect: false }
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
      { text: "Only dangerous after 6th month", textNe: "६ महिना लागेपछि मात्र असर गर्छ", isCorrect: false },
      { text: "Both increase miscarriage risk", textNe: "चुरोटको धुवाँले गर्भ खेर जाने डर हुन्छ", isCorrect: true },
      { text: "Only father's smoking hurts baby", textNe: "श्रीमानले खाएकोले मात्र असर गर्छ", isCorrect: false }
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
      { text: "Only when feeling tired", textNe: "थकाइ लाग्दा मात्र खाने", isCorrect: false },
      { text: "Every day to prevent anaemia", textNe: "रगत कम हुन नदिन दिनहुँ खाने", isCorrect: true },
      { text: "Every other day is fine", textNe: "एक दिन बिराएर खाँदा हुन्छ", isCorrect: false }
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
      { text: "Pure superstition", textNe: "यो पुरानो अन्धविश्वास मात्र हो", isCorrect: false },
      { text: "Highest miscarriage risk in 1st trimester", textNe: "सुरुको ३ महिना बच्चा खेर जाने डर हुन्छ", isCorrect: true },
      { text: "Baby is not real yet", textNe: "बच्चा बनिसकेकै हुँदैन", isCorrect: false }
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
      { text: "Only flat on the back", textNe: "सिधा उत्तानो मात्र सुत्ने", isCorrect: false },
      { text: "Any comfortable position", textNe: "जसरी सजिलो लाग्छ त्यसरी नै सुत्ने", isCorrect: true },
      { text: "Only on the right side", textNe: "दाहिने कोल्टे मात्र सुत्ने", isCorrect: false }
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
      { text: "Dangerous, needs hospital instantly", textNe: "तौल घट्नु खतरा हो, अस्पताल जाने", isCorrect: false },
      { text: "1-2kg loss from nausea is common", textNe: "वाकवाकीले १-२ किलो घट्नु सामान्य हो", isCorrect: true },
      { text: "Must force feed meals", textNe: "जबरजस्ती टन्न खानैपर्छ", isCorrect: false }
    ],
    explanation: "Losing 1–2kg in the first trimester due to morning sickness is common and generally not harmful if the mother stays hydrated.",
    explanationNe: "पहिलो ३ महिनामा खाना रुची नहुँदा वा वाकवाकी लाग्दा १ देखि २ किलोसम्म तौल घट्नु धेरै महिलालाई हुने कुरा हो। शरीरमा पानीको कमी हुन दिएको छैन र थोरै थोरै भए पनि खाइरहेको छ भने यसले बच्चालाई कुनै नोक्सान पुग्दैन।"
  },
  // Add these to your FIRST_TRIMESTER_SCENARIOS array (IDs 21–50)
 
  {
    id: 21,
    title: "Sita is craving clay and soil — is this safe?",
    titleNe: "सीतालाई माटो वा चक खान मन लाग्छ — के यो सुरक्षित छ?",
    description: "Sita is 8 weeks pregnant and has been craving and sometimes eating small amounts of clay from the wall.",
    descriptionNe: "सीता ८ हप्ताकी गर्भवती छिन्। उनलाई पर्खालको माटो वा चक खान असाध्यै मन लाग्छ र कहिलेकाहीँ खान्छिन् पनि।",
    options: [
      { text: "It is a fun craving, totally fine", textNe: "यो रहर मात्र हो, खाँदा केही हुन्न", isCorrect: false },
      { text: "Stop immediately, tell doctor — sign of iron deficiency", textNe: "तुरुन्तै खान बन्द गर्ने र डाक्टरलाई जानकारी दिने — यो आइरनको कमी भएको संकेत हो", isCorrect: true },
      { text: "Eat it, the body knows what it needs", textNe: "शरीरलाई चाहिएर नै मन लागेको हो, खाए हुन्छ", isCorrect: false }
    ],
    explanation: "Craving non-food items like clay, soil, or chalk is called pica and is often a sign of iron or mineral deficiency. It can also introduce harmful parasites. Tell the doctor immediately.",
    explanationNe: "माटो, चक वा खाना बाहेकका अन्य चीज खान मन लाग्नुलाई 'पाइका' (Pica) भनिन्छ। यो प्रायः शरीरमा आइरन वा खनिज पदार्थको कमी भएको संकेत हो। माटो खाँदा शरीरमा हानिकारक परजीवीहरू प्रवेश गर्न सक्छन्। यसबारे तुरुन्तै डाक्टरलाई बताउनुपर्छ।"
  },
  {
    id: 22,
    title: "Frequent urination at 9 weeks — is something wrong?",
    titleNe: "९ हप्तामा बारम्बार पिसाब लाग्नु केही समस्याको संकेत हो?",
    description: "Puja is 9 weeks pregnant and needs to urinate every hour, even at night.",
    descriptionNe: "पूजा ९ हप्ताकी गर्भवती छिन्। उनलाई दिउँसो र राती पनि हरेक एक घण्टामा पिसाब लाग्छ।",
    options: [
      { text: "Kidney disease, go to hospital now", textNe: "यो मिर्गौला रोगको लक्षण हो, तुरुन्तै अस्पताल जाने", isCorrect: false },
      { text: "Normal — uterus presses on bladder", textNe: "यो सामान्य हो — बढ्दै गरेको पाठेघरले मूत्राशयमा दबाब दिन्छ", isCorrect: true },
      { text: "Stop drinking water to reduce trips", textNe: "पिसाब कम लाग्नका लागि पानी पिउन कम गर्ने", isCorrect: false }
    ],
    explanation: "Frequent urination is completely normal in early pregnancy. The growing uterus presses on the bladder. Reducing water intake is harmful — stay well hydrated.",
    explanationNe: "गर्भावस्थाको सुरुवाती समयमा बारम्बार पिसाब लाग्नु पूर्णतया सामान्य हो। बढ्दो पाठेघरले मूत्राशय (Bladder) मा दबाब दिने हुनाले यस्तो हुन्छ। पानी कम पिउनु स्वास्थ्यका लागि हानिकारक हुन्छ, त्यसैले प्रशस्त पानी पिउनुपर्छ।"
  },
  {
    id: 23,
    title: "Can Nirmala travel in a bus or car during the first trimester?",
    titleNe: "पहिलो त्रैमासिक (३ महिना) मा बस वा गाडीमा यात्रा गर्न मिल्छ?",
    description: "Nirmala is 10 weeks pregnant and needs to travel 3 hours by bus to attend a family event.",
    descriptionNe: "निर्मला १० हप्ताकी गर्भवती छिन्। उनले पारिवारिक कार्यक्रमका लागि ३ घण्टाको बस यात्रा गर्नुपर्नेछ।",
    options: [
      { text: "No travel allowed for 9 months", textNe: "९ महिनासम्म यात्रा गर्नै हुँदैन", isCorrect: false },
      { text: "Travel is fine, take breaks to walk", textNe: "यात्रा गर्न मिल्छ, तर बीच-बीचमा हिँडडुल गर्ने", isCorrect: true },
      { text: "Only travel by motorcycle", textNe: "मोटरसाइकलमा मात्र यात्रा गर्ने", isCorrect: false }
    ],
    explanation: "Road travel is generally safe in the first trimester. It helps to stop every 1–2 hours to stretch and walk, wear a seatbelt, and stay hydrated.",
    explanationNe: "पहिलो ३ महिनामा बस वा गाडीमा यात्रा गर्नु सामान्यतया सुरक्षित मानिन्छ। यात्राको क्रममा हरेक १-२ घण्टामा केही समय हिँडडुल गर्ने, सिटबेल्ट बाँध्ने र पर्याप्त पानी पिउनु राम्रो हुन्छ। धेरै उबडखाबड बाटो र मोटरसाइकल यात्राबाट बच्नु उचित हुन्छ।"
  },
  {
    id: 24,
    title: "Sunita's husband uses pesticides on their farm — is this risky?",
    titleNe: "खेतबारीमा प्रयोग गरिने विषादीले गर्भवतीलाई असर गर्छ?",
    description: "Sunita is 8 weeks pregnant. Her husband sprays pesticides on the field and she sometimes helps.",
    descriptionNe: "सुनीता ८ हप्ताकी गर्भवती छिन्। उनका श्रीमान खेतमा कीटनाशक विषादी छर्छन् र उनले पनि कहिलेकाहीँ सघाउँछिन्।",
    options: [
      { text: "Fine as long as she wears a scarf", textNe: "रुमाल वा मास्क लगाएर सघाउँदा केही हुन्न", isCorrect: false },
      { text: "Avoid all pesticide contact during pregnancy", textNe: "गर्भावस्थामा सबै प्रकारका विषादीको सम्पर्कबाट टाढै बस्ने", isCorrect: true },
      { text: "Only avoid in the last trimester", textNe: "अन्तिम ३ महिनामा मात्र सावधानी अपनाए पुग्छ", isCorrect: false }
    ],
    explanation: "Pesticide exposure during pregnancy — especially the first trimester when organs are forming — is linked to birth defects and miscarriage. Sunita should stay away from the field while spraying.",
    explanationNe: "गर्भावस्थामा, विशेष गरी पहिलो ३ महिनामा बच्चाको अंगहरू बन्ने बेला, विषादीको सम्पर्कमा आउँदा गर्भपतन हुने वा जन्मजात अपाङ्गता हुने जोखिम हुन्छ। त्यसैले विषादी छर्ने समयमा खेतबारीबाट टाढै बस्नुपर्छ।"
  },
  {
    id: 25,
    title: "Is it safe to visit someone with chickenpox during the first trimester?",
    titleNe: "गर्भावस्थामा 'चिकनपक्स' (काँक्रा पाटो) भएको बिरामीलाई भेट्न जानु सुरक्षित छ?",
    description: "Maya's neighbour has chickenpox. Maya is 9 weeks pregnant and went to visit her.",
    descriptionNe: "मायाकी छिमेकीलाई चिकनपक्स (Chickenpox) भएको छ। ९ हप्ताकी गर्भवती माया उनलाई भेट्न गइन्।",
    options: [
      { text: "Fine, chickenpox is just a rash", textNe: "ठिकै छ, यो सामान्य खटिरा मात्र हो", isCorrect: false },
      { text: "Avoid exposure — can harm baby", textNe: "सम्पर्कबाट बच्ने — यसले गर्भको बच्चालाई गम्भीर हानि पुर्‍याउन सक्छ", isCorrect: true },
      { text: "Only risky if you touch them", textNe: "बिरामीलाई छोएमा मात्र जोखिम हुन्छ", isCorrect: false }
    ],
    explanation: "Chickenpox (varicella) in pregnancy, especially in the first trimester, can cause serious birth defects. If exposed and unsure of immunity, contact a doctor immediately.",
    explanationNe: "गर्भावस्थामा, विशेष गरी पहिलो ३ महिनामा चिकनपक्स भाइरसको संक्रमण भएमा बच्चामा गम्भीर जन्मजात समस्याहरू हुन सक्छन्। यदि तपाईं संक्रमित व्यक्तिको सम्पर्कमा आउनुभयो भने तुरुन्तै डाक्टरसँग सल्लाह लिनुहोस्।"
  },
  {
    id: 26,
    title: "Kamala feels heartburn after every meal at 11 weeks — what helps?",
    titleNe: "११ हप्तामा खाना खाएपछि छाती पोल्छ — राहतका लागि के गर्ने?",
    description: "Kamala is 11 weeks pregnant and feels a burning sensation in her chest after eating.",
    descriptionNe: "कमला ११ हप्ताकी गर्भवती छिन्। उनलाई खाना खाएपछि छाती पोलेको (Heartburn) महसुस हुन्छ।",
    options: [
      { text: "Take antacids from the shop freely", textNe: "पसलबाट सोधपुछ नगरी ग्यास्ट्रिकको औषधी किनेर खाने", isCorrect: false },
      { text: "Eat small meals, sit upright after eating", textNe: "थोरै-थोरै गरी पटक-पटक खाने र खाएपछि सिधा बस्ने", isCorrect: true },
      { text: "Skip dinner entirely", textNe: "रातीको खाना खाँदै नखाने", isCorrect: false }
    ],
    explanation: "Heartburn is very common in pregnancy due to hormones relaxing the digestive valve. Eating smaller meals, not lying down right after eating, and avoiding spicy/oily food helps significantly.",
    explanationNe: "गर्भावस्थाका हर्मोनहरूले पाचन प्रणालीको भल्भलाई खुकुलो बनाउने हुनाले छाती पोल्ने समस्या धेरैलाई हुन्छ। थोरै-थोरै मात्रामा खाने, खाएपछि तुरुन्तै नसुत्ने र पिरो तथा चिल्लो खाना कम गर्नाले धेरै राहत मिल्छ।"
  },
  {
    id: 27,
    title: "Laxmi wants to colour her hair at 10 weeks — is it safe?",
    titleNe: "१० हप्ताको गर्भावस्थामा कपालमा रंग लगाउन मिल्छ?",
    description: "Laxmi is 10 weeks pregnant and her sister offers to colour her hair for a wedding.",
    descriptionNe: "लक्ष्मी १० हप्ताकी गर्भवती छिन्। उनलाई एउटा विवाहमा जान कपाल रंगाउन मन लागेको छ।",
    options: [
      { text: "Absolutely fine all 9 months", textNe: "९ महिनासम्म कपाल रंगाउनु पूर्णतया सुरक्षित छ", isCorrect: false },
      { text: "Better to wait until after first trimester", textNe: "पहिलो ३ महिना सकेपछि मात्र रंगाउनु राम्रो", isCorrect: true },
      { text: "Never colour hair while pregnant", textNe: "गर्भावस्थामा कपाल कहिल्यै रंगाउनु हुँदैन", isCorrect: false }
    ],
    explanation: "Most hair dyes are considered low-risk, but chemicals in permanent dyes are absorbed through the scalp. Many doctors advise avoiding them in the first trimester when the baby's organs are forming, then it is generally fine.",
    explanationNe: "कपाल रंगाउने डाईमा हुने रसायनहरू छालाबाट थोरै मात्रामा सोसिने गर्छन्। पहिलो ३ महिनामा बच्चाको मुख्य अंगहरू बन्ने भएकाले यो समयमा रंग नलगाउनु नै बुद्धिमानी हुन्छ। दोस्रो त्रैमासिक पछि भने यो सामान्यतया सुरक्षित मानिन्छ।"
  },
  {
    id: 28,
    title: "Should Priya tell her workplace she is pregnant at 7 weeks?",
    titleNe: "के ७ हप्ताको गर्भावस्थामा अफिसमा जानकारी दिनु आवश्यक छ?",
    description: "Priya is 7 weeks pregnant and wonders if she should tell her boss right away.",
    descriptionNe: "प्रिया ७ हप्ताकी गर्भवती छिन्। उनले आफ्नो हाकिमलाई अहिले नै यसबारे भन्नुपर्छ कि पर्दैन भनेर सोचिरहेकी छिन्।",
    options: [
      { text: "Must tell on day one", textNe: "थाहा पाउने बित्तिकै भनिहाल्नु पर्छ", isCorrect: false },
      { text: "Her choice — many wait until 12 weeks", textNe: "यो उनको आफ्नै इच्छा हो — धेरैले १२ हप्ता पछि मात्र बताउँछन्", isCorrect: true },
      { text: "Never tell until delivery day", textNe: "बच्चा नजन्मिएसम्म कसैलाई भन्नु हुँदैन", isCorrect: false }
    ],
    explanation: "There is no medical rule about when to announce pregnancy at work. Many women wait until after 12 weeks when miscarriage risk drops. However if the job involves physical risk (heavy lifting, chemicals), telling sooner protects her.",
    explanationNe: "अफिसमा कहिले जानकारी दिने भन्ने कुनै निश्चित नियम छैन। धेरैजसो महिलाहरू गर्भपतनको जोखिम कम हुने १२ हप्ताको समय पर्खन्छन्। तर काममा गह्रौँ सामान उठाउनुपर्ने वा रसायनहरूसँग काम गर्नुपर्ने भएमा सुरक्षाका लागि छिट्टै भन्नु राम्रो हुन्छ।"
  },
  {
    id: 29,
    title: "Gita's first trimester blood test shows low thyroid — should she worry?",
    titleNe: "रगत जाँचमा थाइरोइड कम देखियो भने के गर्ने?",
    description: "Gita is 10 weeks pregnant and her blood test showed low thyroid levels.",
    descriptionNe: "गीता १० हप्ताकी गर्भवती छिन्। रगत जाँच गर्दा उनको थाइरोइडको स्तर कम पाइएको छ।",
    options: [
      { text: "Ignore it, labs are often wrong", textNe: "वास्ता नगर्ने, ल्याबको रिपोर्ट कहिलेकाहीँ गलत पनि हुन सक्छ", isCorrect: false },
      { text: "Follow doctor's treatment — it affects baby's brain", textNe: "डाक्टरको सल्लाह अनुसार उपचार गर्ने — यसले बच्चाको मस्तिष्क विकासमा असर गर्छ", isCorrect: true },
      { text: "Eat more salt and it will fix itself", textNe: "नुन धेरै खाएमा यो आफैँ ठीक हुन्छ", isCorrect: false }
    ],
    explanation: "Untreated low thyroid (hypothyroidism) in pregnancy is linked to poor brain development in the baby. It is very treatable with safe daily tablets — following doctor's advice is essential.",
    explanationNe: "गर्भावस्थामा थाइरोइड कम (Hypothyroidism) भएमा बच्चाको बौद्धिक विकासमा असर पर्न सक्छ। डाक्टरले सिफारिस गरेका औषधीहरू नियमित सेवन गरेमा यो सजिलै नियन्त्रण हुन्छ र बच्चा सुरक्षित रहन्छ।"
  },
  {
    id: 30,
    title: "Can Sarita use a mosquito repellent spray during her first trimester?",
    titleNe: "गर्भावस्थाको सुरुवाती समयमा लामखुट्टे धपाउने स्प्रे वा कोइल प्रयोग गर्न मिल्छ?",
    description: "Sarita is 9 weeks pregnant and lives in an area with many mosquitoes. She wants to use a repellent spray.",
    descriptionNe: "सरिता ९ हप्ताकी गर्भवती छिन्। उनको क्षेत्रमा धेरै लामखुट्टे छन् र उनी लामखुट्टे धपाउने स्प्रे प्रयोग गर्न चाहन्छिन्।",
    options: [
      { text: "All repellents are completely safe", textNe: "सबै प्रकारका स्प्रेहरू पूर्णतया सुरक्षित हुन्छन्", isCorrect: false },
      { text: "Use a net; check repellent with doctor", textNe: "झुलको प्रयोग गर्ने; स्प्रे प्रयोग गर्नुअघि डाक्टरसँग सोध्ने", isCorrect: true },
      { text: "Mosquito bites are worse, use anything", textNe: "लामखुट्टेको टोकाइ हानिकारक हुन्छ, जे प्रयोग गरे पनि हुन्छ", isCorrect: false }
    ],
    explanation: "Mosquito nets are the safest option. Some repellent chemicals (especially coils and aerosol sprays) can irritate the lungs or have unknown effects in early pregnancy. DEET-based repellents at low concentration are generally accepted, but checking with a doctor first is wise.",
    explanationNe: "झुल लगाएर सुत्नु सबैभन्दा सुरक्षित उपाय हो। लामखुट्टे धपाउने कोइल वा स्प्रेको गन्धले सास फेर्न गाह्रो बनाउन सक्छ र पहिलो ३ महिनामा यसले गर्ने असरबारे स्पष्ट जानकारी छैन। त्यसैले कुनै पनि स्प्रे प्रयोग गर्नुअघि स्वास्थ्यकर्मीको सल्लाह लिनु राम्रो हुन्छ।"
  },
  {
    id: 31,
    title: "Anita keeps forgetting to take iron tablets in the morning — what is a good tip?",
    titleNe: "अनिताले बिहान आइरन चक्की खान बिर्सिन्छिन् — सम्झिनका लागि के गर्न सकिन्छ?",
    description: "Anita is 10 weeks pregnant and keeps forgetting to take her iron tablet each morning.",
    descriptionNe: "अनिता १० हप्ताकी गर्भवती छिन्। उनी हरेक बिहान आइरन चक्की खान बिर्सिन्छिन्।",
    options: [
      { text: "Take a double dose when remembered", textNe: "याद आएपछि एकैपटक दुईवटा चक्की खाने", isCorrect: false },
      { text: "Keep it next to something used daily", textNe: "सधैँ प्रयोग गर्ने सामान (जस्तै ब्रस वा चियाको कप) को छेउमा राख्ने", isCorrect: true },
      { text: "Only take it when feeling weak", textNe: "कमजोरी महसुस हुँदा मात्र खाने", isCorrect: false }
    ],
    explanation: "Linking tablet-taking to a daily habit — like placing it beside the toothbrush or tea cup — greatly improves consistency. Never double dose; just continue from the next day.",
    explanationNe: "आइरन चक्की खाने समयलाई आफ्नो कुनै दैनिक बानीसँग जोड्दा (जस्तै: ब्रस गर्ने ठाउँमा राख्दा) बिर्सिने सम्भावना कम हुन्छ। यदि एक दिन बिर्सिएमा अर्को दिन एकैपटक दुईवटा चक्की नखानुहोस्; केवल भोलिपल्टदेखि नियमित रूपमा खानुहोस्।"
  },
  {
    id: 32,
    title: "Is it okay to eat fish during the first trimester?",
    titleNe: "गर्भावस्थाको पहिलो ३ महिनामा माछा खान मिल्छ?",
    description: "Bindu is 8 weeks pregnant and loves eating fish. She heard fish might not be safe in pregnancy.",
    descriptionNe: "बिन्दु ८ हप्ताकी गर्भवती छिन्। उनलाई माछा खान मन पर्छ तर गर्भावस्थामा माछा खानु सुरक्षित हुन्छ कि हुँदैन भन्ने उनलाई चिन्ता छ।",
    options: [
      { text: "Never eat fish while pregnant", textNe: "गर्भावस्थामा माछा कहिल्यै खानु हुँदैन", isCorrect: false },
      { text: "Small fish are fine; avoid large predator fish", textNe: "साना माछा खान मिल्छ; तर ठूला र शिकारी माछा नखाने", isCorrect: true },
      { text: "Only raw fish (sushi) is safe", textNe: "काँचो माछा मात्र सुरक्षित हुन्छ", isCorrect: false }
    ],
    explanation: "Fish is a great source of protein and omega-3 for baby's brain. Small fish like sardines, rohu, and tilapia are safe. Large predator fish can have high mercury levels — avoid these. Raw fish should also be avoided.",
    explanationNe: "माछा बच्चाको मस्तिष्क विकासका लागि आवश्यक प्रोटिन र ओमेगा-३ को राम्रो स्रोत हो। रोहू, टिलापिया जस्ता साना र स्थानीय माछाहरू सुरक्षित हुन्छन्। तर धेरै ठूला माछाहरूमा 'पारो' (Mercury) बढी हुन सक्ने भएकाले ती नखानुहोस्। साथै, काँचो माछा खानु पनि जोखिमपूर्ण हुन्छ।"
  },
  {
    id: 33,
    title: "Kabita gets very emotional and cries easily at 7 weeks — is she mentally ill?",
    titleNe: "७ हप्ताको गर्भावस्थामा कवितालाई सानो कुरामा पनि रुन आउँछ — के यो मानसिक समस्या हो?",
    description: "Kabita is 7 weeks pregnant. She cries easily, feels moody, and gets irritated over small things.",
    descriptionNe: "कविता ७ हप्ताकी गर्भवती छिन्। उनी सानो कुरामा पनि रुने, झर्किने र मन उदास बनाउने गर्छिन्।",
    options: [
      { text: "Yes, she needs psychiatric treatment", textNe: "हो, उनलाई मानसिक उपचारको खाँचो छ", isCorrect: false },
      { text: "No, hormonal mood swings are normal", textNe: "होइन, हर्मोनको परिवर्तनले गर्दा यस्तो हुनु सामान्य हो", isCorrect: true },
      { text: "She is faking for attention", textNe: "ध्यान तान्नका लागि उनले नाटक गरेकी हुन्", isCorrect: false }
    ],
    explanation: "Mood swings, crying, and irritability are extremely common in the first trimester due to surging pregnancy hormones. They usually improve by the second trimester. Family support and kindness help greatly.",
    explanationNe: "गर्भावस्थामा हुने हर्मोनको उतारचढावले गर्दा मन अस्थिर हुने, रुन आउने र झर्को लाग्ने समस्या पहिलो ३ महिनामा एकदमै सामान्य हो। प्रायः ४ महिना लागेपछि यो आफैँ ठिक हुन्छ। यस्तो बेला परिवारको माया र साथले ठूलो राहत दिन्छ।"
  },
  {
    id: 34,
    title: "Deepa's husband wants to be intimate at 10 weeks — is this safe?",
    titleNe: "गर्भावस्थाको १० हप्तामा यौन सम्पर्क गर्नु सुरक्षित हुन्छ?",
    description: "Deepa is 10 weeks pregnant and her husband wants to be sexually intimate. Deepa is unsure if it is safe.",
    descriptionNe: "दीपा १० हप्ताकी गर्भवती छिन्। उनका श्रीमान उनीसँग यौन सम्बन्ध राख्न चाहन्छन् तर दीपालाई भने यो सुरक्षित छ कि छैन भन्ने डर छ।",
    options: [
      { text: "Completely forbidden for 9 months", textNe: "९ महिनासम्म पूर्ण रूपमा बन्द गर्नुपर्छ", isCorrect: false },
      { text: "Safe in normal pregnancy without complications", textNe: "कुनै जटिलता नभएको सामान्य गर्भावस्थामा यो सुरक्षित हुन्छ", isCorrect: true },
      { text: "Only in the final month", textNe: "अन्तिम महिनामा मात्र गर्न मिल्छ", isCorrect: false }
    ],
    explanation: "Sexual activity is safe during a normal, uncomplicated pregnancy. The baby is well protected by the amniotic sac and uterine muscles. The doctor may advise avoiding it only if there are specific risks like bleeding.",
    explanationNe: "सामान्य र कुनै मेडिकल जटिलता नभएको गर्भावस्थामा यौन सम्पर्क सुरक्षित हुन्छ। बच्चा पाठेघरको मांसपेशी र पानीको थैलीभित्र राम्ररी सुरक्षित हुन्छ। यदि रगत बग्ने वा साल तल बसेको जस्ता जोखिम भएमा मात्र डाक्टरले सम्पर्क नगर्न सल्लाह दिन्छन्।"
  },
  {
    id: 35,
    title: "Should Mina register at the health post even though she feels fine?",
    titleNe: "स्वस्थ महसुस भए पनि मिनाले स्वास्थ्य संस्थामा नाम दर्ता गराउनुपर्छ?",
    description: "Mina is 9 weeks pregnant and feels healthy. Her sister says there is no need to register until something goes wrong.",
    descriptionNe: "मिना ९ हप्ताकी गर्भवती छिन् र उनी आफूलाई स्वस्थ महसुस गर्छिन्। उनकी दिदीले केही समस्या नभएसम्म स्वास्थ्य चौकी जानु पर्दैन भनिरहेकी छिन्।",
    options: [
      { text: "Only register when feeling sick", textNe: "बिरामी भएपछि मात्र स्वास्थ्य चौकी जाने", isCorrect: false },
      { text: "Yes — early registration catches hidden risks", textNe: "हो — सुरुमै जाँच गर्दा लुकेका जोखिमहरू थाहा हुन्छ र सहायता पाइन्छ", isCorrect: true },
      { text: "Registration is just paperwork", textNe: "नाम दर्ता गराउनु कागज मिलाउने काम मात्र हो", isCorrect: false }
    ],
    explanation: "Many pregnancy complications like high blood pressure or anaemia have no symptoms early on. Early registration also qualifies for government incentives under Nepal's Aama Programme.",
    explanationNe: "उच्च रक्तचाप वा रगतको कमी जस्ता समस्याहरूको सुरुमा कुनै लक्षण देखिँदैन, तर नियमित जाँचबाट पत्ता लाग्छ। समयमै दर्ता गराउँदा नेपाल सरकारको 'आमा कार्यक्रम' अन्तर्गत पाइने भत्ता र निःशुल्क सेवा लिन पनि सजिलो हुन्छ।"
  },
  {
    id: 36,
    title: "Sangita heard she must avoid all dairy during the first trimester — true?",
    titleNe: "पहिलो ३ महिनामा दूध र दुग्धजन्य पदार्थ खानु हुँदैन भनिन्छ — के यो साँचो हो?",
    description: "Sangita is 8 weeks pregnant. Her neighbour says she must avoid milk and dairy products.",
    descriptionNe: "सङ्गीता ८ हप्ताकी गर्भवती छिन्। उनलाई छिमेकीले 'गर्भावस्थामा दूध र दही खानु हुँदैन' भनेकी छिन्।",
    options: [
      { text: "True — dairy causes complications", textNe: "साँचो हो — दूधले पेटमा समस्या निम्त्याउँछ", isCorrect: false },
      { text: "False — pasteurised dairy is encouraged", textNe: "गलत हो — उमालेको दूध वा दही खानु धेरै राम्रो हुन्छ", isCorrect: true },
      { text: "Only yoghurt should be avoided", textNe: "दही मात्र खानु हुँदैन", isCorrect: false }
    ],
    explanation: "Dairy products are an important source of calcium and protein. Pasteurised milk, curd, and ghee in moderate amounts are beneficial. Only avoid unpasteurised (raw, unboiled) milk.",
    explanationNe: "गर्भावस्थामा दूध, दही र घिउ क्याल्सियम र प्रोटिनका महत्त्वपूर्ण स्रोत हुन्। उमालेको दूध र दहीको सेवनले हड्डी र बच्चाको विकासमा मद्दत गर्छ। केवल नउमालेको वा काँचो (Raw) दूध मात्र खानु हुँदैन।"
  },
  {
    id: 37,
    title: "Rita noticed her skin getting darker in patches at 10 weeks — what is this?",
    titleNe: "१० हप्ताको गर्भावस्थामा रीताको अनुहारमा कालो दागहरू देखिएका छन् — यो के हो?",
    description: "Rita is 10 weeks pregnant and notices dark patches on her cheeks and forehead.",
    descriptionNe: "रीता १० हप्ताकी गर्भवती छिन् र उनले आफ्नो अनुहारमा कालो दाग (पोतो) आएको याद गरेकी छिन्।",
    options: [
      { text: "Liver disease — go to hospital", textNe: "यो कलेजोको रोगको संकेत हो", isCorrect: false },
      { text: "Normal pregnancy pigmentation (melasma)", textNe: "यो गर्भावस्थाको सामान्य परिवर्तन (पोतो/Melasma) हो", isCorrect: true },
      { text: "Allergy — stop eating eggs", textNe: "यो एलर्जी हो — अण्डा खान बन्द गर्नुपर्छ", isCorrect: false }
    ],
    explanation: "Dark patches on the face (melasma) are caused by increased melanin due to hormones. They are harmless and usually fade after delivery. Using sunscreen or a hat helps prevent them worsening.",
    explanationNe: "गर्भावस्थामा हर्मोनको कारणले अनुहारमा कालो दाग (पोतो) देखिनु सामान्य हो। यो हानिकारक हुँदैन र बच्चा जन्मिएपछि बिस्तारै हराउँछ। घाममा निस्कँदा छाता ओढ्ने वा क्रिम लगाउने गर्दा यो धेरै गाढा हुन पाउँदैन।"
  },
  {
    id: 38,
    title: "Puja's mother insists she should not bathe daily during pregnancy — is this right?",
    titleNe: "पूजाकी आमाले 'गर्भवतीले दिनहुँ नुहाउनु हुँदैन' भन्नुहुन्छ — के यो सही हो?",
    description: "Puja is 7 weeks pregnant. Her mother says bathing daily is cold and risky during pregnancy.",
    descriptionNe: "पूजा ७ हप्ताकी गर्भवती छिन्। उनकी आमाले 'दिनहुँ नुहाउँदा चिसो लाग्छ' भनेर नुहाउन रोक्नुहुन्छ।",
    options: [
      { text: "Correct — bathing weakens the baby", textNe: "सही हो — नुहाउँदा बच्चालाई असर पर्छ", isCorrect: false },
      { text: "Wrong — daily hygiene is important", textNe: "गलत हो — सरसफाइको लागि नियमित नुहाउनु जरुरी छ", isCorrect: true },
      { text: "Bathe only once a week", textNe: "हप्तामा एक पटक मात्र नुहाउनु पर्छ", isCorrect: false }
    ],
    explanation: "Bathing daily during pregnancy is safe and important for hygiene. Lukewarm water is ideal; avoid very hot baths which can raise core body temperature and cause dizziness.",
    explanationNe: "गर्भावस्थामा दिनहुँ नुहाउनु सुरक्षित र सरसफाइका लागि राम्रो छ। नुहाउनका लागि मनतातो पानी प्रयोग गर्नु उत्तम हुन्छ। धेरै तातो पानीले नुहाउँदा शरीरको तापक्रम बढेर चक्कर लाग्न सक्छ, त्यसैले सावधानी अपनाउनुपर्छ।"
  },
  {
    id: 39,
    title: "Nirmala wants to drink alcohol at a wedding at 8 weeks — just a little bit?",
    titleNe: "८ हप्ताकी गर्भवती निर्मलाले विवाहमा थोरै रक्सी पिउँदा हुन्छ?",
    description: "Nirmala is 8 weeks pregnant and is attending a wedding where alcohol is being served.",
    descriptionNe: "निर्मला ८ हप्ताकी गर्भवती छिन्। उनी एउटा विवाहमा गएकी छिन् जहाँ रक्सी खुवाइँदै छ।",
    options: [
      { text: "A small glass is fine", textNe: "एक सानो गिलास पिए केही हुँदैन", isCorrect: false },
      { text: "No alcohol at all during pregnancy", textNe: "गर्भावस्थामा रक्सी अलिकति पनि पिउनु हुँदैन", isCorrect: true },
      { text: "Only beer is safe, not spirits", textNe: "बियर मात्र पिउन मिल्छ, कडा रक्सी हुँदैन", isCorrect: false }
    ],
    explanation: "There is no safe amount of alcohol during pregnancy. Even small amounts can affect the baby's brain development and increase miscarriage risk. Alcohol passes directly through the placenta.",
    explanationNe: "गर्भावस्थामा रक्सीको कुनै पनि मात्रा सुरक्षित हुँदैन। थोरै पिउँदा पनि बच्चाको मस्तिष्क विकासमा असर पर्न सक्छ र गर्भपतनको जोखिम बढ्छ। रक्सी आमाको रगतबाट साल हुँदै सिधै बच्चाको शरीरमा पुग्छ।"
  },
  {
    id: 40,
    title: "Durga has a cold at 9 weeks — can she take any medicine?",
    titleNe: "९ हप्ताकी दुर्गालाई रुघाखोकी लागेको छ — के उनले औषधि खान मिल्छ?",
    description: "Durga is 9 weeks pregnant and has a runny nose and mild fever.",
    descriptionNe: "दुर्गा ९ हप्ताकी गर्भवती छिन्। उनलाई रुघा लागेको छ र हल्का ज्वरो आएको छ।",
    options: [
      { text: "Take any pharmacy medicine freely", textNe: "फार्मेसीबाट जे औषधि किनेर खाए पनि हुन्छ", isCorrect: false },
      { text: "Ask doctor first — most cold meds unsafe", textNe: "पहिले डाक्टरलाई सोध्ने — रुघाखोकीका धेरै औषधि असुरक्षित हुन सक्छन्", isCorrect: true },
      { text: "Take double antibiotics to recover fast", textNe: "छिटो निको हुन दोब्बर एन्टिबायोटिक खाने", isCorrect: false }
    ],
    explanation: "Many common cold medicines and antibiotics are not safe in early pregnancy. Steam inhalation and rest help mild colds. Always consult a health worker before taking any medicine.",
    explanationNe: "रुघाखोकीमा प्रयोग गरिने धेरैजसो साधारण औषधिहरू पहिलो ३ महिनामा सुरक्षित हुँदैनन्। रुघाखोकी लाग्दा तातो पानीको बाफ लिने र आराम गर्ने गर्नुपर्छ। कुनै पनि औषधि खानुअघि अनिवार्य रूपमा स्वास्थ्यकर्मीको सल्लाह लिनुहोस्।"
  },
  {
    id: 41,
    title: "Maya's husband thinks she is using pregnancy as an excuse to rest — how should she respond?",
    titleNe: "श्रीमानले 'गर्भावस्थाको निहुँ पारेर थकाइ लागेको बहाना गर्छेस्' भन्नुहुन्छ भने मायाले के गर्ने?",
    description: "Maya is 8 weeks pregnant and is often very tired. Her husband thinks she is just being lazy.",
    descriptionNe: "माया ८ हप्ताकी गर्भवती छिन् र उनलाई धेरै थकाइ लाग्छ। तर उनका श्रीमानलाई भने मायाले अल्छी गरेकी जस्तो लाग्छ।",
    options: [
      { text: "Push through tiredness to show strength", textNe: "आफू बलियो छु भनेर देखाउन थकाइ लागे पनि जबरजस्ती काम गर्ने", isCorrect: false },
      { text: "Rest is medically needed — explain to husband", textNe: "आराम गर्नु स्वास्थ्यको लागि अनिवार्य छ भनेर श्रीमानलाई बुझाउने", isCorrect: true },
      { text: "Stop all activity for full 9 months", textNe: "९ महिनासम्म कुनै पनि काम नगरी पूर्ण रूपमा थन्किएर बस्ने", isCorrect: false }
    ],
    explanation: "First-trimester fatigue is real and medically recognized — caused by surging hormones and the body building the placenta. Rest is necessary, not laziness. A family member who understands this can better support the mother.",
    explanationNe: "गर्भावस्थाको पहिलो ३ महिनामा हर्मोनको परिवर्तन र साल (Placenta) बन्ने प्रक्रियाले गर्दा शरीर धेरै थाक्छ। यो अल्छीपन नभएर शरीरको प्राकृतिक आवश्यकता हो। परिवारले यो कुरा बुझिदिएमा गर्भवतीलाई ठूलो सहयोग पुग्छ।"
  },
  {
    id: 42,
    title: "Is it safe to use a mobile phone and laptop during the first trimester?",
    titleNe: "गर्भावस्थाको पहिलो ३ महिनामा मोबाइल र ल्यापटप चलाउनु सुरक्षित हुन्छ?",
    description: "Laxmi is 9 weeks pregnant and spends several hours each day on her phone and laptop for work.",
    descriptionNe: "लक्ष्मी ९ हप्ताकी गर्भवती छिन्। उनले कामको सिलसिलामा दैनिक घण्टौंसम्म मोबाइल र ल्यापटप चलाउनुपर्ने हुन्छ।",
    options: [
      { text: "Both are dangerous and must be stopped", textNe: "यी दुवै खतरनाक छन्, त्यसैले चलाउनै हुँदैन", isCorrect: false },
      { text: "Normal use is safe — no strong evidence of harm", textNe: "ठिक्क मात्रामा प्रयोग गर्नु सुरक्षित छ—यसले हानि गर्ने कुनै प्रमाण छैन", isCorrect: true },
      { text: "Only laptops are risky", textNe: "ल्यापटप मात्र खतरनाक हो, मोबाइल होइन", isCorrect: false }
    ],
    explanation: "Current scientific evidence does not show that normal use of mobile phones or laptops harms the developing baby. Screen use is safe. Taking breaks for posture and eye rest is good for the mother herself.",
    explanationNe: "अहिलेसम्मका वैज्ञानिक अनुसन्धान अनुसार मोबाइल वा ल्यापटपको सामान्य प्रयोगले गर्भको बच्चालाई असर गर्दैन। यद्यपि, लामो समयसम्म एकै ठाउँमा बसिरहँदा ढाड दुख्ने र आँखा थाक्ने हुनाले बीच-बीचमा उठेर हिँडडुल गर्नु राम्रो हुन्छ।"
  },
  {
    id: 43,
    title: "Kabita keeps getting leg cramps at night at 11 weeks — what helps?",
    titleNe: "११ हप्ताकी कवितालाई राति खुट्टा बाउँडिने (Cramps) समस्या छ भने के गर्दा ठिक होला?",
    description: "Kabita is 11 weeks pregnant and wakes up at night with painful leg cramps.",
    descriptionNe: "कविता ११ हप्ताकी गर्भवती छिन्। राति सुतेको बेला खुट्टा बाउँडिएर (मासु फर्केर) उनी दुखाइले बिउँझिन्छिन्।",
    options: [
      { text: "Take painkillers every night", textNe: "हरेक राति दुखाइ कम गर्ने औषधि (Painkillers) खाने", isCorrect: false },
      { text: "Stretch calf muscles and drink water", textNe: "खुट्टा तन्काउने र पर्याप्त पानी पिउने", isCorrect: true },
      { text: "It is a sign of labour starting", textNe: "यो सुत्केरी व्यथा लाग्न थालेको संकेत हो", isCorrect: false }
    ],
    explanation: "Leg cramps in pregnancy are often due to low magnesium, dehydration, or reduced circulation. Stretching the calf muscle by flexing the foot upward, staying hydrated, and gentle walking during the day all help. Mention it to the doctor if frequent.",
    explanationNe: "गर्भावस्थामा शरीरमा म्याग्नेसियमको कमी, पानीको मात्रा कम हुनु वा रक्तसञ्चारमा कमी आउनाले खुट्टा बाउँडिने गर्छ। पैतालालाई माथितिर फर्काएर खुट्टा तन्काउने, प्रशस्त पानी पिउने र दिउँसो हल्का हिँडडुल गर्नाले यसमा राहत मिल्छ।"
  },
  {
    id: 44,
    title: "Sunita is having headaches frequently at 10 weeks — is this normal?",
    titleNe: "१० हप्तामा बारम्बार टाउको दुख्नु सामान्य हो?",
    description: "Sunita is 10 weeks pregnant and has been getting frequent mild headaches.",
    descriptionNe: "सुनीता १० हप्ताकी गर्भवती छिन् र उनलाई अचेल बारम्बार हल्का टाउको दुखिरहन्छ।",
    options: [
      { text: "Take ibuprofen or aspirin immediately", textNe: "तुरुन्तै इबुप्रोफेन वा एस्पिरिन जस्ता औषधि खाने", isCorrect: false },
      { text: "Drink water, rest — tell doctor if severe", textNe: "पानी पिउने र आराम गर्ने—धेरै नै दुखेमा डाक्टरलाई देखाउने", isCorrect: true },
      { text: "Sign of brain tumour", textNe: "यो मस्तिष्कमा ट्युमर भएको लक्षण हो", isCorrect: false }
    ],
    explanation: "Mild headaches are common in the first trimester due to hormonal changes, increased blood volume, and sometimes dehydration. Staying hydrated, resting, and using paracetamol (if needed, as directed) helps. Ibuprofen and aspirin should be avoided. Severe headaches with vision changes need urgent medical attention.",
    explanationNe: "गर्भावस्थाको सुरुतिर हर्मोनको उतारचढाव र शरीरमा रगतको मात्रा बढ्ने हुँदा हल्का टाउको दुख्नु सामान्य हो। पानी प्रशस्त पिउने र आराम गर्दा निको हुन्छ। तर इबुप्रोफेन वा एस्पिरिन जस्ता औषधि जथाभावी खानु हुँदैन। टाउको धेरै दुख्ने वा आँखा धमिलो हुने भएमा तुरुन्त अस्पताल जानुपर्छ।"
  },
  {
    id: 45,
    title: "Puja's family says she must not attend a funeral while pregnant — should she follow this?",
    titleNe: "गर्भवती हुँदा मलामी वा अन्तिम संस्कारमा जानु हुँदैन भन्ने सल्लाह पूजाले मान्नुपर्छ?",
    description: "Puja is 9 weeks pregnant and her family advises against attending a funeral.",
    descriptionNe: "पूजा ९ हप्ताकी गर्भवती छिन्। उनको परिवारले 'गर्भवती हुँदा मलामी जानु हुँदैन' भनेर रोकेका छन्।",
    options: [
      { text: "True — it is medically dangerous", textNe: "सही हो—यो स्वास्थ्यका लागि खतरनाक छ", isCorrect: false },
      { text: "No medical basis — but emotional stress should be managed", textNe: "यसको कुनै स्वास्थ्य कारण छैन—तर मानसिक तनावबाट भने जोगिनुपर्छ", isCorrect: true },
      { text: "Only safe to attend if you cover your face", textNe: "मुख छोपेर गएमा मात्र सुरक्षित भइन्छ", isCorrect: false }
    ],
    explanation: "There is no medical evidence that attending a funeral harms a pregnancy. The cultural belief may come from the idea of protecting mothers from emotional stress and grief, which is a caring intention. If Puja feels emotionally ready and the environment is not physically difficult, there is no medical reason to avoid it.",
    explanationNe: "अन्तिम संस्कारमा जाँदा गर्भलाई असर गर्छ भन्ने कुनै स्वास्थ्य प्रमाण छैन। यस्तो सामाजिक मान्यता प्रायः गर्भवतीलाई धेरै शोक र तनावबाट जोगाउन बनाइएको हो। यदि पूजा मानसिक रूपमा तयार छिन् र त्यहाँ जाँदा धेरै सास्ती हुँदैन भने जानमा कुनै रोक छैन।"
  },
  {
    id: 46,
    title: "Sita wants to eat spicy food — will it harm her baby?",
    titleNe: "सीतालाई पिरो खान मन लागेको छ—के यसले बच्चालाई असर गर्छ?",
    description: "Sita is 11 weeks pregnant and craves spicy food. Her mother-in-law warns her it will harm the baby.",
    descriptionNe: "सीता ११ हप्ताकी गर्भवती छिन्। उनलाई पिरो खान असाध्यै मन छ तर सासूले 'पिरो खाँदा बच्चालाई नोक्सान हुन्छ' भनेर तर्साउनुहुन्छ।",
    options: [
      { text: "True — spicy food burns the baby", textNe: "सही हो—पिरोले बच्चालाई पोल्छ", isCorrect: false },
      { text: "Safe for baby, but may worsen heartburn", textNe: "बच्चालाई केही हुँदैन, तर आमाको छाती पोल्ने समस्या बढ्न सक्छ", isCorrect: true },
      { text: "Only avoid chilli, other spices are fine", textNe: "खुर्सानी मात्र नखाने, अरू मसला खाँदा हुन्छ", isCorrect: false }
    ],
    explanation: "Spicy food does not harm the baby directly. Amniotic fluid protects the baby completely. However spicy food can worsen heartburn and nausea in the mother. Eating it in moderation is fine.",
    explanationNe: "पिरो खानाले बच्चालाई सिधा असर गर्दैन किनभने गर्भको पानीले बच्चालाई सुरक्षित राख्छ। तर धेरै पिरो खाँदा आमालाई छाती पोल्ने (Heartburn) र वाकवाकी लाग्ने हुन सक्छ। त्यसैले ठिक्क मात्रामा खानु राम्रो हुन्छ।"
  },
  {
    id: 47,
    title: "Maya has been told to eat papaya leaves boiled in water — should she?",
    titleNe: "मायालाई मेवाको पात उमालेर खान भनिएको छ—के यो सुरक्षित छ?",
    description: "Maya is 8 weeks pregnant. A neighbour suggests she drink boiled papaya leaf water for energy.",
    descriptionNe: "माया ८ हप्ताकी गर्भवती छिन्। छिमेकीले उनलाई 'शक्ति आउँछ, मेवाको पात उमालेर पिऊ' भनेका छन्।",
    options: [
      { text: "Good — natural and healthy", textNe: "राम्रो हो—यो प्राकृतिक र स्वस्थकर छ", isCorrect: false },
      { text: "Avoid — can cause uterine contractions", textNe: "नपिउने—यसले गर्दा पाठेघर खुम्चिएर खतरा हुन सक्छ", isCorrect: true },
      { text: "Only safe after 6 months", textNe: "६ महिना कटेपछि मात्र पिउन सुरक्षित हुन्छ", isCorrect: false }
    ],
    explanation: "Papaya leaves contain compounds (papain, carpine) that can stimulate uterine contractions and are linked to miscarriage, particularly in early pregnancy. Even though it feels natural, it is not safe.",
    explanationNe: "मेवाको पातमा 'पापेन' जस्ता तत्व हुन्छन् जसले पाठेघरलाई खुम्च्याउन सक्छ। यसले गर्दा विशेषगरी सुरुको महिनामा गर्भपतन हुने जोखिम हुन्छ। प्राकृतिक भन्दैमा गर्भावस्थामा यस्तो कुरा खानु सुरक्षित हुँदैन।"
  },
  {
    id: 48,
    title: "Gita notices her hair falling out more at 10 weeks — is the baby taking her nutrition?",
    titleNe: "१० हप्तामा गीताको कपाल धेरै झर्न थाल्यो—के बच्चाले सबै पोषण खाइदिएर यस्तो भएको हो?",
    description: "Gita is 10 weeks pregnant and notices more hair falling out while combing.",
    descriptionNe: "गीता १० हप्ताकी गर्भवती छिन्। कोर्ने बेला अचेल उनको धेरै कपाल झर्न थालेको छ।",
    options: [
      { text: "Yes, eat more protein immediately", textNe: "हो, त्यसैले तुरुन्तै धेरै प्रोटिनयुक्त खानेकुरा खाने", isCorrect: false },
      { text: "Hormonal change — usually improves by 2nd trimester", textNe: "हर्मोनको परिवर्तनले गर्दा हो—दोस्रो त्रैमासिकदेखि आफैं ठिक हुन्छ", isCorrect: true },
      { text: "Sign of serious illness", textNe: "यो कुनै गम्भीर रोगको संकेत हो", isCorrect: false }
    ],
    explanation: "Some hair loss in the first trimester is common due to hormonal shifts affecting the hair growth cycle. It usually stabilises and improves in the second trimester. If hair loss is very severe, a doctor can check for thyroid or iron issues.",
    explanationNe: "गर्भावस्थाको सुरुमा हर्मोनमा आउने परिवर्तनले कपालको वृद्धि प्रक्रियामा असर गर्दा केही कपाल झर्नु सामान्य हो। ४ महिना लागेपछि यो समस्या बिस्तारै कम हुन्छ। तर धेरै नै कपाल झरेमा आइरन वा थाइरोइडको जाँच गराउनुपर्छ।"
  },
  {
    id: 49,
    title: "Rina smells strong odours and feels nauseous — is her sense of smell broken?",
    titleNe: "गन्ध आउनासाथ रिनालाई वाकवाकी लाग्छ—के उनको नाकमा केही समस्या भएको हो?",
    description: "Rina is 7 weeks pregnant. Even the smell of cooking oil or rice makes her nauseous.",
    descriptionNe: "रिना ७ हप्ताकी गर्भवती छिन्। उनलाई तेल तातेको वा भात पाकेको गन्धले पनि असाध्यै वाकवाकी लाग्छ।",
    options: [
      { text: "Her nose needs medical treatment", textNe: "उनको नाकको उपचार गर्नुपर्छ", isCorrect: false },
      { text: "Heightened smell is normal in early pregnancy", textNe: "गर्भावस्थाको सुरुमा गन्ध थाहा पाउने शक्ति बढ्नु सामान्य हो", isCorrect: true },
      { text: "She should stay in a closed room always", textNe: "उनी सधैं झ्याल-ढोका बन्द गरेर कोठाभित्र बस्नुपर्छ", isCorrect: false }
    ],
    explanation: "A heightened sense of smell (hyperosmia) is extremely common in the first trimester and is driven by rising oestrogen levels. It often triggers nausea. Cooking outdoors, opening windows, and avoiding strong-smelling foods help manage it.",
    explanationNe: "गर्भावस्थाको सुरुमा 'इस्ट्रोजेन' हर्मोनको वृद्धिका कारण सुँघ्ने शक्ति निकै संवेदनशील हुन्छ। यसैले गर्दा सामान्य गन्धले पनि वाकवाकी लाग्छ। खाना पकाउँदा झ्यालहरू खुला राख्ने वा धेरै कडा गन्धबाट टाढा बस्दा राहत मिल्छ।"
  },
  {
    id: 50,
    title: "Sarita's husband wants her to fast for a religious festival at 11 weeks — is this safe?",
    titleNe: "११ हप्ताकी सरितालाई श्रीमानले व्रत बस्न भन्नुहुन्छ—के गर्भवतीले व्रत बस्नु सुरक्षित हुन्छ?",
    description: "Sarita is 11 weeks pregnant and her family wants her to fast for an entire day for a religious occasion.",
    descriptionNe: "सरिता ११ हप्ताकी गर्भवती छिन्। परिवारले उनलाई धार्मिक चाडको अवसरमा दिनभरि भोको (व्रत) बस्न भनेका छन्।",
    options: [
      { text: "Religious duty comes first — fast fully", textNe: "धर्म सबैभन्दा ठूलो हो—त्यसैले कडा व्रत बस्ने", isCorrect: false },
      { text: "Avoid long fasting — eat light small meals", textNe: "लामो समय भोको नबस्ने—थोरथोरै फलफूल वा हल्का खानेकुरा खाने", isCorrect: true },
      { text: "Fasting is fine as long as she drinks water", textNe: "पानी मात्र पिएर व्रत बस्दा केही फरक पर्दैन", isCorrect: false }
    ],
    explanation: "Prolonged fasting during pregnancy, especially in the first trimester, can cause low blood sugar and deprive the developing baby of nutrients. Many traditions allow pregnant women to take light food or fruits while still observing the spiritual intention of the fast.",
    explanationNe: "गर्भावस्थामा, विशेष गरी पहिलो ३ महिनामा लामो समय भोको बस्दा रगतमा चिनीको मात्रा घट्न सक्छ र बच्चाले पर्याप्त पोषण पाउँदैन। धार्मिक आस्थालाई जोगाउँदै फलफूल वा हल्का खानेकुरा खाएर पनि व्रतको फल प्राप्त गर्न सकिन्छ।"
  }
]