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
      { text: "Prevents mother's fatigue", textNe: "आमालाई थकाइबाट बचाउँछ", isCorrect: false },
      { text: "Aids baby's brain & spine growth", textNe: "दिमाग र मेरुदण्ड बिकास गर्छ", isCorrect: true },
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
      { text: "No, ANC is not needed then", textNe: "पर्दैन, डाक्टरकहाँ जानु पर्दैन", isCorrect: false },
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
      { text: "Many herbs are unsafe in pregnancy", textNe: "केही जडीबुटी खतरा हुन्छन्, नसोध्ने नखाने", isCorrect: true },
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
      { text: "Confirm dates, location & twins", textNe: "मिति, जुम्ल्याहा र गर्भको अवस्था हेर्न", isCorrect: true },
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
      { text: "Only dangerous after 6th month", textNe: "६ महिनापछि मात्र असर गर्छ", isCorrect: false },
      { text: "Both increase miscarriage risk", textNe: "चुरोटको धुवाँले गर्भपतनको डर हुन्छ", isCorrect: true },
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
      { text: "Pure superstition", textNe: "पुरानो अन्धविश्वास मात्र हो", isCorrect: false },
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
      { text: "1-2kg loss from nausea is common", textNe: "१-२ किलो घट्नु एकदम सामान्य हो", isCorrect: true },
      { text: "Must force feed meals", textNe: "जबरजस्ती टन्न खानैपर्छ", isCorrect: false }
    ],
    explanation: "Losing 1–2kg in the first trimester due to morning sickness is common and generally not harmful if the mother stays hydrated.",
    explanationNe: "पहिलो ३ महिनामा खाना रुची नहुँदा वा वाकवाकी लाग्दा १ देखि २ किलोसम्म तौल घट्नु धेरै महिलालाई हुने कुरा हो। शरीरमा पानीको कमी हुन दिएको छैन र थोरै थोरै भए पनि खाइरहेको छ भने यसले बच्चालाई कुनै नोक्सान पुग्दैन।"
  }
];import { Scenario } from './firstTrimesterScenarios';

export const SECOND_TRIMESTER_SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "What does a haemoglobin of 9.5 mean for a pregnant woman?",
    titleNe: "गर्भवती हुँदा हेमोग्लोबिन ९.५ हुनुको अर्थ के हो?",
    description: "Sima is 16 weeks pregnant and was told her haemoglobin is 9.5 g/dL at her ANC checkup.",
    descriptionNe: "सिमा १६ हप्ताकी गर्भवती छिन् र जाँच गराउँदा उनको हेमोग्लोबिन ९.५ g/dL देखियो।",
    options: [
      { text: "Perfectly normal for pregnancy", textNe: "गर्भवती हुँदा सामान्य हो", isCorrect: false },
      { text: "Mild anaemia, needs iron tablets", textNe: "रगतको कमी छ, आइरन खाने", isCorrect: true },
      { text: "Needs immediate blood transfusion", textNe: "तुरुन्तै रगत चढाउनुपर्छ", isCorrect: false }
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
      { text: "Gas or indigestion", textNe: "ग्यास वा अपचले हो", isCorrect: false },
      { text: "First baby movements (quickening)", textNe: "बच्चा चल्न थालेको संकेत", isCorrect: true },
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
      { text: "Usually moves up as uterus grows", textNe: "पाठेघर बढ्दा आफैं माथि सर्छ", isCorrect: true },
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
      { text: "Ghee makes skin fair & delivery easy", textNe: "बच्चा गोरो र सुत्केरी सजिलो हुन्छ", isCorrect: false },
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
      { text: "Overreacting, needs to be strong", textNe: "झर्को मानेकी हुन्, बलियो हुनुपर्छ", isCorrect: false },
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
      { text: "Check if mother is overweight", textNe: "आमाको तौल धेरै छ कि भनेर", isCorrect: false },
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
      { text: "Only oil paints are dangerous", textNe: "तेल मिसाएको पेन्ट मात्र खतरनाक", isCorrect: false }
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
      { text: "Exercising too much, needs rest", textNe: "धेरै काम गरेर हो, आराम गर्ने", isCorrect: false },
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
      { text: "Check if mother likes sweet food", textNe: "गुलियो पच्छ कि पच्दैन हेर्न", isCorrect: false },
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
      { text: "Never leave house in trimester 2", textNe: "दोस्रो महिनामा घर बाहिर नजाने", isCorrect: false }
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
      { text: "Needs C-section scheduled instantly", textNe: "तुरुन्तै अप्रेसनको तयारी गर्ने", isCorrect: false },
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
      { text: "Improves elasticity, started later", textNe: "लचिलो बनाउँछ, तर पछि मात्र गर्ने", isCorrect: true },
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
      { text: "Only important in 3rd trimester", textNe: "अन्तिम महिनामा मात्र चाहिन्छ", isCorrect: false },
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
      { text: "Too much salt, stop salt", textNe: "नुन धेरै खाएर हो, नुन खान छोड्ने", isCorrect: false },
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
      { text: "Heavy weight training only", textNe: "गह्रौँ तौल उचाल्ने काम मात्र गर्ने", isCorrect: false }
    ],
    explanation: "The second trimester is an ideal time to establish a gentle exercise routine. Walking, swimming, prenatal yoga, and Kegel exercises are all recommended and safe in a normal pregnancy.",
    explanationNe: "गर्भावस्थाको १६ हप्ता पछि बिस्तारै हल्का व्यायाम सुरु गर्नु राम्रो हो। बिहान-बेलुका आधा घन्टा जति हिँड्ने (वाक गर्ने), सजिलो खाले योग गर्ने र पेल्भिक व्यायाम गर्दा सुत्केरी हुन सजिलो हुन्छ भने ढाड दुख्ने समस्या पनि कम हुन्छ।"
  }
];



