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
    titleNe: "६ हप्तामा बिहानको वाकवाकी — सीताले के गर्नु राम्रो हुन्छ?",
    description: "Sita is 6 weeks pregnant. Every morning she wakes up feeling very nauseous and sometimes vomits before breakfast.",
    descriptionNe: "सीता ६ हप्ताकी गर्भवती छिन्। उनी हरेक बिहान उठ्दा धेरै वाकवाकी महसुस गर्छिन् र कहिलेकाहीं नाश्ता भन्दा पहिले बान्ता गर्छिन्।",
    options: [
      { text: "Skip breakfast to avoid vomiting", textNe: "बान्ता रोक्न बिहानको खाजा नखाने", isCorrect: false },
      { text: "Eat small dry snacks like crackers or dry toast before getting out of bed", textNe: "ओछ्यानबाट उठ्नुअघि बिस्कुट वा सुक्खा टोस्ट जस्ता साना सुक्खा खाजाहरू खाने", isCorrect: true },
      { text: "Take a strong anti-nausea tablet immediately", textNe: "तुरुन्तै कडा वाकवाकी रोक्ने औषधि खाने", isCorrect: false }
    ],
    explanation: "Eating small dry snacks before getting up prevents an empty stomach, which is the main trigger for morning sickness. Keeping crackers on the bedside table and eating a few before even sitting up is one of the most effective and safe strategies. Morning sickness is very common and usually resolves by week 12–14.",
    explanationNe: "उठ्नुअघि सुक्खा खाजा खानाले पेट खाली हुन पाउँदैन, जुन वाकवाकी लाग्नुको मुख्य कारण हो। ओछ्यानको छेउमा बिस्कुट राख्ने र उठ्नुअघि केही खाने गर्नाले यसमा धेरै मद्दत पुग्छ। यो समस्या सामान्य हो र प्रायः १२ देखि १४ हप्तासम्ममा हराउँछ।"
  },
  {
    id: 2,
    title: "Why are folic acid tablets especially important in the first trimester?",
    titleNe: "पहिलो त्रैमासिकमा फोलिक एसिड चक्कीहरू किन विशेष महत्त्वपूर्ण छन्?",
    description: "Puja is 8 weeks pregnant and her doctor prescribed iron and folic acid tablets. She sometimes forgets to take them.",
    descriptionNe: "पूजा ८ हप्ताकी गर्भवती छिन् र डाक्टरले उनलाई आइरन र फोलिक एसिड चक्कीहरू सिफारिस गरेका छन्। उनी कहिलेकाहीं ती खान बिर्सिन्छिन्।",
    options: [
      { text: "They prevent the mother from feeling tired", textNe: "यसले आमालाई थकित महसुस हुनबाट जोगाउँछ", isCorrect: false },
      { text: "They help the baby's neural tube (brain and spine) develop correctly in the first 12 weeks", textNe: "यसले पहिलो १२ हप्तामा बच्चाको स्नायु प्रणाली (मस्तिष्क र मेरुदण्ड) को सही विकासमा मद्दत गर्दछ", isCorrect: true },
      { text: "They increase the mother's appetite", textNe: "यसले आमाको भोक बढाउँछ", isCorrect: false }
    ],
    explanation: "Folic acid is critical in the first 12 weeks because the baby's neural tube — which becomes the brain and spinal cord — forms during this period. A deficiency increases the risk of neural tube defects like spina bifida.",
    explanationNe: "पहिलो १२ हप्तामा फोलिक एसिड धेरै महत्त्वपूर्ण हुन्छ किनभने यसले बच्चाको मस्तिष्क र मेरुदण्डको विकासमा मद्दत गर्छ। यसको कमीले बच्चामा जन्मजात अपाङ्गताको जोखिम बढाउन सक्छ।"
  },
  {
    id: 3,
    title: "Light spotting without pain at 10 weeks — what should Kamala do?",
    titleNe: "१० हप्तामा दुखाइ बिना हल्का रगत देखिनु — कमलाले के गर्नुपर्छ?",
    description: "Kamala is 10 weeks pregnant. She noticed some very light pink spotting in her underwear after a long walk. She has no pain.",
    descriptionNe: "कमला १० हप्ताकी गर्भवती छिन्। लामो पैदल यात्रा पछि उनले आफ्नो भित्री लुगामा हल्का गुलाबी रगतको थोपा देखिन्। उनलाई कुनै दुखाइ छैन।",
    options: [
      { text: "Ignore it, spotting is always normal in pregnancy", textNe: "यसलाई बेवास्ता गर्ने, गर्भावस्थामा रगत देखिनु सधैं सामान्य हो", isCorrect: false },
      { text: "Rest, reduce activity, and call her doctor to describe it", textNe: "आराम गर्ने, हिँडडुल कम गर्ने र आफ्नो डाक्टरलाई फोन गरेर जानकारी दिने", isCorrect: true },
      { text: "Go to hospital immediately by ambulance", textNe: "एम्बुलेन्स बोलाएर तुरुन्तै अस्पताल जाने", isCorrect: false }
    ],
    explanation: "Light spotting without pain is common in the first trimester and can happen after physical activity. However, any spotting should be reported to the doctor. Do not ignore it, but no need to panic without pain or heavy bleeding.",
    explanationNe: "पहिलो त्रैमासिकमा दुखाइ बिना हल्का रगत देखिनु सामान्य हुन सक्छ, तर यसलाई बेवास्ता गर्नु हुँदैन। आराम गर्ने र आफ्नो स्वास्थ्यकर्मीलाई यसबारे जानकारी दिनु बुद्धिमानी हुन्छ।"
  },
  {
    id: 4,
    title: "What is the recommendation about caffeine during pregnancy?",
    titleNe: "गर्भावस्थामा क्याफिन (चिया/कफी) को बारेमा के सल्लाह दिइन्छ?",
    description: "Sunita is 7 weeks pregnant and still drinking 2 cups of tea and 1 cup of coffee every day.",
    descriptionNe: "सुनीता ७ हप्ताकी गर्भवती छिन् र अझै पनि दिनहुँ २ कप चिया र १ कप कफी पिउँछिन्।",
    options: [
      { text: "Caffeine is completely safe in any amount during pregnancy", textNe: "गर्भावस्थामा जुनसुकै मात्रामा क्याफिन खानु पूर्णतया सुरक्षित छ", isCorrect: false },
      { text: "Limit caffeine to under 200mg per day — about 1 small cup of coffee or 2 cups of tea", textNe: "दिनमा २०० मिलिग्राम भन्दा कम क्याफिन खानुहोस् — लगभग १ सानो कप कफी वा २ कप चिया", isCorrect: true },
      { text: "Stop all caffeine immediately or the baby will be harmed", textNe: "तुरुन्तै सबै क्याफिन बन्द गर्नुहोस् अन्यथा बच्चालाई हानि हुनेछ", isCorrect: false }
    ],
    explanation: "High caffeine intake is linked to low birth weight and miscarriage. The recommendation is under 200mg per day — roughly one small coffee or two cups of tea.",
    explanationNe: "धेरै क्याफिनले बच्चाको तौल कम हुने वा गर्भपतनको जोखिम बढाउन सक्छ। दिनमा १ सानो कप कफी वा २ कप चियाभन्दा बढी खानु हुँदैन।"
  },
  {
    id: 5,
    title: "Is it true that a pregnant woman needs to eat for two in the first trimester?",
    titleNe: "के पहिलो त्रैमासिकमा गर्भवती महिलाले दुई जनाको लागि खानुपर्छ?",
    description: "Maya is 9 weeks pregnant. Her husband suggests she should eat for two since she is now pregnant.",
    descriptionNe: "माया ९ हप्ताकी गर्भवती छिन्। उनका श्रीमानले उनलाई अब दुई जनाको लागि खानुपर्छ भन्छन्।",
    options: [
      { text: "Yes, she should double her food intake from day one", textNe: "हो, उनले पहिलो दिनदेखि नै आफ्नो खाना दोब्बर बनाउनुपर्छ", isCorrect: false },
      { text: "No — extra calories are only needed from the second trimester, and only about 300 extra calories per day", textNe: "होइन — थप क्यालोरी दोस्रो त्रैमासिकदेखि मात्र चाहिन्छ, र दिनको करिब ३०० थप क्यालोरी मात्र पर्याप्त हुन्छ", isCorrect: true },
      { text: "Yes, but only for protein foods", textNe: "हो, तर प्रोटिन युक्त खानेकुरा मात्र", isCorrect: false }
    ],
    explanation: "The idea of eating for two is a myth. In the first trimester, no significant extra calories are needed. From the second trimester onward, only about 300 extra calories per day are needed.",
    explanationNe: "दुई जनाको लागि खानुपर्छ भन्ने कुरा भ्रम मात्र हो। पहिलो तीन महिनामा थप खानाको खासै आवश्यकता पर्दैन। चौथो महिनादेखि थोरै थप पोषिलो खाना खाए पुग्छ।"
  },
  {
    id: 6,
    title: "Is physical activity safe during a normal first-trimester pregnancy?",
    titleNe: "के पहिलो त्रैमासिकमा शारीरिक क्रियाकलाप गर्नु सुरक्षित छ?",
    description: "Gita is 11 weeks pregnant. She is a farmer and continues doing her usual field work — walking, bending, and carrying light loads.",
    descriptionNe: "गीता ११ हप्ताकी गर्भवती छिन्। उनी किसान हुन् र आफ्नो खेतबारीको सामान्य काम जस्तै हिँड्ने, झुक्ने र हल्का भारी बोक्ने काम जारी राख्छिन्।",
    options: [
      { text: "No, she should rest completely for all 9 months", textNe: "होइन, उनले ९ महिनासम्म पूर्ण रूपमा आराम गर्नुपर्छ", isCorrect: false },
      { text: "Yes, moderate activity is safe and even beneficial — she should avoid heavy lifting but normal daily activity is fine", textNe: "हो, मध्यम क्रियाकलाप सुरक्षित र लाभदायक हुन्छ — धेरै भारी बोक्न हुँदैन तर सामान्य काम गर्न मिल्छ", isCorrect: true },
      { text: "Yes, but only walking is allowed", textNe: "हो, तर हिँड्न मात्र अनुमति छ", isCorrect: false }
    ],
    explanation: "Moderate physical activity is safe and beneficial during a normal pregnancy. Complete bed rest is not recommended unless the doctor specifically advises it.",
    explanationNe: "सामान्य गर्भावस्थामा हल्का काम र हिँडडुल गर्नु आमा र बच्चा दुवैका लागि राम्रो हुन्छ। डाक्टरले आराम गर्नैपर्छ नभनेसम्म सामान्य काम जारी राख्न सकिन्छ।"
  },
  {
    id: 7,
    title: "Which of these foods is genuinely unsafe during early pregnancy?",
    titleNe: "यी मध्ये कुन खानेकुरा गर्भावस्थाको सुरुमा असुरक्षित हुन्छ?",
    description: "Rina is 6 weeks pregnant and her sister advises her to stop eating papaya, pineapple, and raw eggs.",
    descriptionNe: "रिना ६ हप्ताकी गर्भवती छिन् र उनकी दिदीले उनलाई मेवा, भुइँकटहर र काँचो अण्डा खान छोड्न सल्लाह दिन्छिन्।",
    options: [
      { text: "Ripe papaya in small amounts", textNe: "थोरै मात्रामा पाकेको मेवा", isCorrect: false },
      { text: "Raw or undercooked eggs — risk of Salmonella infection", textNe: "काँचो वा राम्ररी नपाकेको अण्डा — साल्मोनेला संक्रमणको जोखिम", isCorrect: true },
      { text: "Ripe pineapple in small amounts", textNe: "थोरै मात्रामा पाकेको भुइँकटहर", isCorrect: false }
    ],
    explanation: "Raw or undercooked eggs can carry Salmonella bacteria. Ripe papaya and ripe pineapple in normal amounts are safe. Unripe green papaya should be avoided.",
    explanationNe: "काँचो वा नपाकेको अण्डाबाट संक्रमण हुन सक्ने भएकोले यसलाई राम्ररी पकाएर मात्र खानुपर्छ। पाकेको मेवा र भुइँकटहर ठिक्क मात्रामा खानु सुरक्षित हुन्छ।"
  },
  {
    id: 8,
    title: "Should a healthy pregnant woman stop working in the first trimester?",
    titleNe: "के स्वस्थ गर्भवती महिलाले पहिलो त्रैमासिकमा काम गर्न छोड्नुपर्छ?",
    description: "Sarita is 8 weeks pregnant and still going to her job as a teacher every day. Her mother-in-law says she should stop working.",
    descriptionNe: "सरिता ८ हप्ताकी गर्भवती छिन् र अझै पनि हरेक दिन शिक्षिकाको रूपमा काममा जान्छिन्। उनकी सासूले उनलाई काम छोड्न भन्छिन्।",
    options: [
      { text: "Yes, complete rest is required for the first 3 months", textNe: "हो, पहिलो ३ महिना पूर्ण आराम आवश्यक छ", isCorrect: false },
      { text: "No — working in a normal job is safe. She should avoid heavy physical strain but teaching is fine.", textNe: "होइन — सामान्य जागिर खानु सुरक्षित छ। उनले धेरै शारीरिक तनावबाट बच्नुपर्छ तर पढाउन मिल्छ।", isCorrect: true },
      { text: "She should work only 2 hours per day", textNe: "उनले दिनको २ घण्टा मात्र काम गर्नुपर्छ", isCorrect: false }
    ],
    explanation: "Working during pregnancy is safe for most women in most jobs. Teaching is a low-risk job.",
    explanationNe: "धेरैजसो महिलाका लागि गर्भावस्थामा काम गर्न सुरक्षित हुन्छ। धेरै गाह्रो काम बाहेक अन्य सामान्य पेशा जारी राख्न सकिन्छ।"
  },
  {
    id: 9,
    title: "When should the first ANC checkup ideally happen?",
    titleNe: "पहिलो गर्भ जाँच (ANC) आदर्श रूपमा कहिले हुनुपर्छ?",
    description: "Priya is 10 weeks pregnant and has not had her first ANC checkup yet.",
    descriptionNe: "प्रिया १० हप्ताकी गर्भवती छिन् र उनले अझैसम्म आफ्नो पहिलो गर्भ जाँच गराएकी छैनन्।",
    options: [
      { text: "Only at 6 months when the belly is showing", textNe: "पेट देखिन थालेपछि ६ महिनामा मात्र", isCorrect: false },
      { text: "As early as possible — ideally within the first 12 weeks", textNe: "सक्दो चाँडो — आदर्श रूपमा पहिलो १२ हप्ता भित्र", isCorrect: true },
      { text: "Only when she feels something is wrong", textNe: "केही गडबड भएको महसुस भएमा मात्र", isCorrect: false }
    ],
    explanation: "The first ANC checkup should happen before 12 weeks. Nepal's Aama Programme requires a minimum of 4 ANC visits for the full cash incentive.",
    explanationNe: "पहिलो गर्भ जाँच १२ हप्ता भित्रै गरिसक्नुपर्छ। नेपाल सरकारको आमा कार्यक्रम अनुसार पूर्ण प्रोत्साहन पाउन कम्तीमा ४ पटक जाँच गराउनुपर्छ।"
  },
  {
    id: 10,
    title: "Why is extreme fatigue so common in the first trimester?",
    titleNe: "पहिलो त्रैमासिकमा धेरै थकान महसुस हुनु किन सामान्य हो?",
    description: "Laxmi is 7 weeks pregnant and feeling very tired all the time, even without doing much work.",
    descriptionNe: "लक्ष्मी ७ हप्ताकी गर्भवती छिन् र धेरै काम नगर्दा पनि सधैं धेरै थकित महसुस गर्छिन्।",
    options: [
      { text: "She is being lazy and needs to push through it", textNe: "उनी अल्छी भइरहेकी छिन् र उनले यसलाई बेवास्ता गर्नुपर्छ", isCorrect: false },
      { text: "Her body is producing high levels of progesterone, which causes sleepiness, and is building the placenta — both require huge energy", textNe: "उनको शरीरले प्रोजेस्टेरोन हर्मोन बढी उत्पादन गरिरहेको छ र साल (placenta) बनिरहेको छ — दुवैमा धेरै ऊर्जा खर्च हुन्छ", isCorrect: true },
      { text: "She must be anaemic — she needs an iron injection immediately", textNe: "उनलाई रगतको कमी भएको हुनुपर्छ — उनलाई तुरुन्तै आइरन सुई चाहिन्छ", isCorrect: false }
    ],
    explanation: "First-trimester fatigue is caused by high progesterone and the body building the placenta. Rest is genuinely needed. Fatigue typically improves by week 12–14.",
    explanationNe: "गर्भावस्थाको सुरुमा हर्मोनको परिवर्तन र बच्चाको लागि साल बन्ने प्रक्रियामा शरीरको धेरै ऊर्जा खर्च हुन्छ। यो समयमा आराम गर्नु आवश्यक हुन्छ।"
  },
  {
    id: 11,
    title: "Are vivid dreams during pregnancy normal?",
    titleNe: "के गर्भावस्थामा अनौठा र स्पष्ट सपनाहरू देख्नु सामान्य हो?",
    description: "Nirmala is 9 weeks pregnant. She has been having vivid and sometimes strange dreams every night.",
    descriptionNe: "निर्मला ९ हप्ताकी गर्भवती छिन्। उनले हरेक रात स्पष्ट र कहिलेकाहीं अनौठा सपनाहरू देखिरहेकी छिन्।",
    options: [
      { text: "No — vivid dreams mean the baby is in distress", textNe: "होइन — यस्ता सपनाको अर्थ बच्चालाई कष्ट भइरहेको छ भन्ने हुन्छ", isCorrect: false },
      { text: "Yes — hormonal changes and increased REM sleep make vivid dreams very common in all three trimesters", textNe: "हो — हर्मोनमा आउने परिवर्तनले गर्दा गर्भावस्थामा यस्ता सपना देख्नु सामान्य कुरा हो", isCorrect: true },
      { text: "Only if they happen before midnight", textNe: "मध्यरातभन्दा अगाडि देखिएमा मात्र", isCorrect: false }
    ],
    explanation: "Vivid, intense, and sometimes strange dreams are completely normal throughout pregnancy due to hormonal changes affecting sleep architecture.",
    explanationNe: "गर्भावस्थामा हर्मोनको प्रभावले गर्दा निद्राको प्रकृति परिवर्तन हुन्छ र स्पष्ट वा अनौठा सपना देखिन सक्छ। यो सामान्य हो र डराउनुपर्दैन।"
  },
  {
    id: 12,
    title: "Is bleeding gums during pregnancy normal or a cause for concern?",
    titleNe: "के गर्भावस्थामा गिजाबाट रगत बग्नु सामान्य हो कि चिन्ताको विषय हो?",
    description: "Bindu is 11 weeks pregnant and her gums have been bleeding slightly when she brushes her teeth.",
    descriptionNe: "बिन्दु ११ हप्ताकी गर्भवती छिन् र दाँत माझ्दा उनको गिजाबाट थोरै रगत बगिरहेको छ।",
    options: [
      { text: "She has a serious vitamin deficiency and must see a specialist", textNe: "उनलाई भिटामिनको गम्भीर कमी छ र विशेषज्ञलाई देखाउनुपर्छ", isCorrect: false },
      { text: "Mild gum bleeding (pregnancy gingivitis) is very common due to hormonal changes — maintain good dental hygiene", textNe: "गिजाबाट हल्का रगत आउनु (pregnancy gingivitis) हर्मोन परिवर्तनले गर्दा हुने सामान्य कुरा हो — दाँतको सरसफाइमा ध्यान दिनुहोस्", isCorrect: true },
      { text: "She must stop brushing her teeth immediately", textNe: "उनले तुरुन्तै दाँत माझ्न छोड्नुपर्छ", isCorrect: false }
    ],
    explanation: "Pregnancy gingivitis affects up to 75% of pregnant women due to increased progesterone causing more blood flow to gum tissue.",
    explanationNe: "गर्भावस्थामा हर्मोनका कारण गिजामा रगतको प्रवाह बढ्छ, जसले गर्दा रगत आउन सक्छ। नियमित ब्रस गर्ने र मुख सफा राख्नुपर्छ।"
  },
  {
    id: 13,
    title: "Should Kabita continue ANC checkups if she follows traditional rituals?",
    titleNe: "के कबिताले परम्परागत रीतिरिवाज पछ्याउँदै गर्दा पनि गर्भ जाँच (ANC) गराउनुपर्छ?",
    description: "Kabita is 8 weeks pregnant and her family is advising her to visit a local faith healer and follow specific rituals.",
    descriptionNe: "कबिता ८ हप्ताकी गर्भवती छिन् र उनको परिवारले उनलाई स्थानीय धामीझाँक्रीकहाँ जान र विशेष अनुष्ठानहरू गर्न सल्लाह दिइरहेका छन्।",
    options: [
      { text: "No — if she follows traditional rituals, ANC is not needed", textNe: "पर्दैन — यदि उनले परम्परागत रीतिरिवाज पछ्याउँछिन् भने गर्भ जाँच आवश्यक छैन", isCorrect: false },
      { text: "Yes — traditional rituals and ANC checkups are not mutually exclusive. Medical care during pregnancy is essential regardless of cultural practices.", textNe: "पर्छ — परम्परागत रीतिरिवाज र गर्भ जाँच सँगसँगै लैजान सकिन्छ। सांस्कृतिक अभ्यास जे भए पनि स्वास्थ्य जाँच अनिवार्य छ।", isCorrect: true },
      { text: "Only if the faith healer says so", textNe: "धामीझाँक्रीले भनेमा मात्र", isCorrect: false }
    ],
    explanation: "Traditional practices should be respected but they do not replace the critical medical monitoring that ANC checkups provide.",
    explanationNe: "आफ्नो संस्कृति र विश्वास मान्नु राम्रो हो, तर यसले डाक्टरले गर्ने स्वास्थ्य जाँचको ठाउँ लिन सक्दैन। गर्भ जाँच नियमित गराउनुपर्छ।"
  },
  {
    id: 14,
    title: "Are herbal teas and traditional mixtures safe during the first trimester?",
    titleNe: "के पहिलो त्रैमासिकमा जडीबुटीका चिया र परम्परागत मिश्रणहरू सुरक्षित छन्?",
    description: "Deepa is 10 weeks pregnant and has been told by her mother to drink special herbal mixtures from the village.",
    descriptionNe: "दीपा १० हप्ताकी गर्भवती छिन् र उनकी आमाले उनलाई गाउँको विशेष जडीबुटीको मिश्रण पिउन भन्नुभएको छ।",
    options: [
      { text: "All herbs are natural so they are always safe", textNe: "सबै जडीबुटी प्राकृतिक हुने भएकोले ती सधैं सुरक्षित हुन्छन्", isCorrect: false },
      { text: "Many herbal mixtures have not been tested in pregnancy and some can cause uterine contractions — always check with a doctor or ANM before taking any herb", textNe: "धेरै जडीबुटीहरूको परीक्षण गरिएको हुँदैन र केहीले गर्भपतन गराउन सक्छन् — कुनै पनि जडीबुटी खानुअघि स्वास्थ्यकर्मीसँग सोध्नुहोस्", isCorrect: true },
      { text: "Herbal drinks are better than any medicine", textNe: "जडीबुटीका पेय पदार्थहरू कुनै पनि औषधिभन्दा राम्रा हुन्छन्", isCorrect: false }
    ],
    explanation: "Natural does not mean safe during pregnancy. Several commonly used herbs can stimulate uterine contractions or affect fetal development.",
    explanationNe: "प्राकृतिक हुँदैमा सबै जडीबुटी सुरक्षित हुँदैनन्। केही जडीबुटीले पाठेघर खुम्च्याउने र बच्चालाई हानि गर्ने जोखिम हुन सक्छ।"
  },
  {
    id: 15,
    title: "What is the main purpose of the first ultrasound (dating scan) at 11–13 weeks?",
    titleNe: "११–१३ हप्तामा गरिने पहिलो भिडियो एक्सरे (Ultrasound) को मुख्य उद्देश्य के हो?",
    description: "Suna is 12 weeks pregnant and just had her first ultrasound. The report says the baby is the right size for 12 weeks.",
    descriptionNe: "सुना १२ हप्ताकी गर्भवती छिन् र उनले भर्खरै पहिलो भिडियो एक्सरे गराएकी छिन्। रिपोर्टले बच्चा १२ हप्ताको लागि सही आकारको रहेको देखाउँछ।",
    options: [
      { text: "To find out the baby's gender", textNe: "बच्चा छोरा कि छोरी भनेर पत्ता लगाउन", isCorrect: false },
      { text: "To confirm the pregnancy is in the uterus, check for twins, confirm the due date, and screen for chromosomal conditions", textNe: "गर्भ पाठेघरमै छ कि छैन, जुम्ल्याहा बच्चा छन् कि, सुत्केरी हुने मिति र बच्चाको अवस्था जाँच गर्न", isCorrect: true },
      { text: "Only to take a photo for the family", textNe: "परिवारका लागि फोटो खिच्न मात्र", isCorrect: false }
    ],
    explanation: "The first-trimester ultrasound confirms the pregnancy is inside the uterus, establishes the due date, checks for twins, and screens for chromosomal conditions.",
    explanationNe: "पहिलो भिडियो एक्सरेले बच्चाको विकास, संख्या र सुत्केरी हुने सही मिति थाहा पाउन मद्दत गर्छ। यो धेरै महत्त्वपूर्ण जाँच हो।"
  },
  {
    id: 16,
    title: "What is the effect of smoking and secondhand smoke during the first trimester?",
    titleNe: "पहिलो त्रैमासिकमा धुम्रपान र अरूले गरेको धुवाँ (secondhand smoke) को के असर हुन्छ?",
    description: "Durga is 9 weeks pregnant and still smoking occasionally. Her husband also smokes inside the house.",
    descriptionNe: "दुर्गा ९ हप्ताकी गर्भवती छिन् र अझै पनि कहिलेकाहीं धुम्रपान गर्छिन्। उनका श्रीमान पनि घर भित्रै चुरोट पिउँछन्।",
    options: [
      { text: "Smoking is only dangerous after the 6th month", textNe: "धुम्रपान ६ औं महिना पछि मात्र खतरनाक हुन्छ", isCorrect: false },
      { text: "Both active smoking and secondhand smoke increase the risk of miscarriage, low birth weight, and preterm birth — both Durga and her husband should stop", textNe: "धुम्रपान र चुरोटको धुवाँले गर्भपतन र कम तौल भएको बच्चा जन्मने जोखिम बढाउँछ — दुर्गा र उनका श्रीमान दुवैले धुम्रपान छोड्नुपर्छ", isCorrect: true },
      { text: "Only the father's smoking affects the baby", textNe: "बुबाले गरेको धुम्रपानले मात्र बच्चालाई असर गर्छ", isCorrect: false }
    ],
    explanation: "Smoking during pregnancy — both active and passive — is harmful at every stage. There is no safe level of smoking during pregnancy.",
    explanationNe: "गर्भावस्थामा चुरोट पिउनु वा अरूले पिएको धुवाँ सुँघ्नु दुवै हानिकारक हुन्छ। यसले बच्चाको तौल कम हुने वा समय अगावै जन्मने जोखिम निम्त्याउँछ।"
  },
  {
    id: 17,
    title: "Should iron tablets be taken every day or only when you feel tired?",
    titleNe: "आइरन चक्कीहरू हरेक दिन खानुपर्छ कि थकित महसुस हुँदा मात्र?",
    description: "Anita is 11 weeks pregnant and is thinking about whether she needs to take her iron tablets every day or only when she feels tired.",
    descriptionNe: "अनिता ११ हप्ताकी गर्भवती छिन् र उनले आइरन चक्की हरेक दिन खानुपर्छ कि थकित महसुस हुँदा मात्र भनेर सोच्दै छिन्।",
    options: [
      { text: "Only when feeling tired or dizzy", textNe: "थकान वा रिंगटा लाग्दा मात्र", isCorrect: false },
      { text: "Every day as prescribed — iron builds up in the body slowly and preventing anaemia is much better than treating it", textNe: "निर्धारित गरिए अनुसार हरेक दिन — आइरनले शरीरमा बिस्तारै रगत बनाउँछ र रगतको कमी हुन नदिनु नै उत्तम हो", isCorrect: true },
      { text: "Every other day is fine", textNe: "एक दिन बिराएर खाँदा हुन्छ", isCorrect: false }
    ],
    explanation: "Iron supplements must be taken every day as prescribed. By the time symptoms of anaemia appear, the deficiency is already significant.",
    explanationNe: "आइरन चक्की नियमित खानुपर्छ। रगतको कमी भएर लक्षणहरू देखिनु अगावै यसले शरीरलाई बलियो बनाउन मद्दत गर्छ।"
  },
  {
    id: 18,
    title: "Why do many cultures advise waiting until after 3 months to announce a pregnancy?",
    titleNe: "धेरै संस्कृतिहरूमा किन ३ महिना पछि मात्र गर्भवती भएको कुरा सुनाउन सल्लाह दिइन्छ?",
    description: "Rita is 8 weeks pregnant and has been told she should not tell anyone about the pregnancy until after 3 months.",
    descriptionNe: "रीता ८ हप्ताकी गर्भवती छिन् र उनलाई ३ महिना नपुग्दासम्म कसैलाई पनि यसबारे नभन्न भनिएको छ।",
    options: [
      { text: "It is purely superstition with no basis", textNe: "यो कुनै आधार नभएको अन्धविश्वास मात्र हो", isCorrect: false },
      { text: "The first trimester has the highest risk of miscarriage. Many families wait so they do not have to share difficult news if a loss occurs.", textNe: "पहिलो ३ महिनामा गर्भपतनको जोखिम बढी हुन्छ। त्यसैले धेरै परिवारहरू केही तलमाथि भएमा दुखद खबर सुनाउनु नपरोस् भनेर पर्खन्छन्।", isCorrect: true },
      { text: "The baby is not really a baby until 3 months", textNe: "३ महिना नभएसम्म बच्चा साँच्चैको बच्चा हुँदैन", isCorrect: false }
    ],
    explanation: "The first trimester has the highest miscarriage rate — about 10–20% of known pregnancies. Many families choose to wait until after 12 weeks when the risk drops sharply.",
    explanationNe: "गर्भावस्थाको सुरुको ३ महिनामा गर्भपतन हुने सम्भावना बढी हुन्छ। यो समय पार भएपछि जोखिम धेरै कम हुने भएकाले मानिसहरू पछि मात्र खबर सुनाउन रुचाउँछन्।"
  },
  {
    id: 19,
    title: "What is the best sleeping position in the first trimester?",
    titleNe: "पहिलो त्रैमासिकमा सुत्ने उत्तम तरिका कुन हो?",
    description: "Mina is 10 weeks pregnant and has not been sleeping well because she cannot find a comfortable sleeping position.",
    descriptionNe: "मिना १० हप्ताकी गर्भवती छिन् र उनले सुत्ने सजिलो तरिका नपाएर राम्ररी सुत्न सकिरहेकी छैनन्।",
    options: [
      { text: "Only on the back with a pillow under the head", textNe: "टाउको मुनि सिरानी राखेर उत्तानो मात्र", isCorrect: false },
      { text: "Any comfortable position is fine in the first trimester — left side becomes more important from the second trimester onward", textNe: "पहिलो तीन महिनामा आफूलाई सजिलो लाग्ने गरी सुत्न सकिन्छ — देब्रे कोल्टे परेर सुत्नु दोस्रो त्रैमासिकबाट बढी महत्त्वपूर्ण हुन्छ", isCorrect: true },
      { text: "Only on the right side", textNe: "दाहिने कोल्टे मात्र", isCorrect: false }
    ],
    explanation: "In the first trimester, the uterus is still small and sleeping in any comfortable position is perfectly fine.",
    explanationNe: "गर्भावस्थाको सुरुमा बच्चा सानो हुने भएकाले आफूलाई जुन तरिकाले सजिलो हुन्छ, त्यसरी नै सुत्न सकिन्छ। पछि भने कोल्टे फेरेर सुत्नु राम्रो हुन्छ।"
  },
  {
    id: 20,
    title: "Is mild weight loss in the first trimester due to morning sickness concerning?",
    titleNe: "के बिहानको वाकवाकीका कारण सुरुमा थोरै तौल घट्नु चिन्ताको विषय हो?",
    description: "Sangita is 7 weeks pregnant and her husband is worried because she has lost 1kg of weight due to nausea and reduced eating.",
    descriptionNe: "संगीता ७ हप्ताकी गर्भवती छिन्। वाकवाकी र कम खानपानका कारण उनकी १ किलो तौल घटेकोले उनका श्रीमान चिन्तित हुनुहुन्छ।",
    options: [
      { text: "Yes — any weight loss is dangerous and she needs hospitalization", textNe: "हो — तौल घट्नु खतरनाक हो र उनलाई अस्पताल भर्ना गर्नुपर्छ", isCorrect: false },
      { text: "Mild weight loss (1–2kg) due to nausea in the first trimester is common and usually not harmful as long as she stays hydrated and keeps some food down", textNe: "सुरुको ३ महिनामा वाकवाकीले गर्दा १-२ किलो तौल घट्नु सामान्य हो, जबसम्म उनले झोलिलो पदार्थ पिउँछिन् र थोरै भए पनि खाना खान्छिन्", isCorrect: true },
      { text: "She must force herself to eat large meals three times a day", textNe: "उनले दिनमा तीन पटक धेरै खाना खानैपर्छ", isCorrect: false }
    ],
    explanation: "Losing 1–2kg in the first trimester due to morning sickness is common and generally not harmful if the mother stays hydrated.",
    explanationNe: "सुरुको समयमा वाकवाकीले गर्दा थोरै तौल घट्नु सामान्य हो। प्रशस्त पानी पिउने र थोरै थोरै खाइरहने गर्नाले बच्चालाई खासै असर पर्दैन।"
  }
];