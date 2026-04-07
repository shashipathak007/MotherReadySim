import { Scenario } from './firstTrimesterScenarios';

export const SECOND_TRIMESTER_SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "Scenario 1: What does a haemoglobin of 9.5 mean for a pregnant woman?",
    titleNe: "दृश्य १: गर्भवती महिलाको लागि हेमोग्लोबिन ९.५ को अर्थ के हो?",
    description: "Sima is 16 weeks pregnant and was told her haemoglobin is 9.5 g/dL at her ANC checkup.",
    descriptionNe: "सिमा १६ हप्ताकी गर्भवती छिन् र ANC जाँचमा उनको हेमोग्लोबिन ९.५ g/dL भेटियो।",
    options: [
      { text: "It is perfectly normal for pregnancy", textNe: "गर्भावस्थामा यो सामान्य हो", isCorrect: false },
      { text: "It means she has mild anaemia and needs to increase iron-rich foods and take iron tablets regularly", textNe: "उनलाई हल्का रक्तअल्पता छ र फलामयुक्त खाना र आइरन चक्की नियमित खानुपर्छ", isCorrect: true },
      { text: "It means she needs a blood transfusion immediately", textNe: "उनलाई तुरुन्तै रगत चढाउनुपर्छ", isCorrect: false }
    ],
    explanation: "Normal haemoglobin for a pregnant woman is above 11 g/dL. A reading of 9.5 means mild to moderate anaemia. Sima should take iron tablets daily, eat iron-rich foods, and add vitamin C to improve absorption.",
    explanationNe: "गर्भवती महिलाको सामान्य हेमोग्लोबिन ११ g/dL भन्दा माथि हुनुपर्छ। ९.५ को अर्थ हल्का देखि मध्यम रक्तअल्पता हो। आइरन चक्की दैनिक खाने, फलामयुक्त खाना खाने, र भिटामिन C ले अवशोषण बढाउँछ।"
  },
  {
    id: 2,
    title: "Scenario 2: What is this fluttering sensation Kamala is feeling?",
    titleNe: "दृश्य २: कमलाले महसुस गरिरहेको यो फरफराहट के हो?",
    description: "Kamala is 18 weeks pregnant and feels something like a butterfly flutter in her belly.",
    descriptionNe: "कमला १८ हप्ताकी गर्भवती छिन् र उनको पेटमा पुतली फरफराउने जस्तो महसुस भइरहेको छ।",
    options: [
      { text: "Gas or indigestion — not the baby", textNe: "ग्यास वा अपच — बच्चा होइन", isCorrect: false },
      { text: "This is likely quickening — the first baby movements. Completely normal at 16–20 weeks.", textNe: "यो क्विकनिङ हो — बच्चाको पहिलो चलन। १६–२० हप्तामा सामान्य हो।", isCorrect: true },
      { text: "A sign she needs more calcium", textNe: "उनलाई थप क्याल्सियम चाहिन्छ भन्ने संकेत", isCorrect: false }
    ],
    explanation: "Quickening — the first time a mother feels her baby move — typically happens between weeks 16–22 for first-time mothers. It often feels like gentle flutters, bubbles, or tapping.",
    explanationNe: "क्विकनिङ — आमाले पहिलो पटक बच्चाको चलन महसुस गर्ने — पहिलो पटक गर्भवती हुनेहरूमा १६–२२ हप्तामा हुन्छ। यो हल्का फरफर, बुलबुला, वा थपथपी जस्तो लाग्छ।"
  },
  {
    id: 3,
    title: "Scenario 3: What does a low-lying placenta at 20 weeks mean?",
    titleNe: "दृश्य ३: २० हप्तामा तल्लो प्लेसेन्टाको अर्थ के हो?",
    description: "Priya is 20 weeks pregnant and her anomaly scan shows the placenta is positioned low but the doctor said to recheck at 32 weeks.",
    descriptionNe: "प्रिया २० हप्ताकी गर्भवती छिन् र अल्ट्रासाउन्डमा प्लेसेन्टा तल देखियो तर डाक्टरले ३२ हप्तामा फेरि जाँच गर्न भन्नुभयो।",
    options: [
      { text: "She must have a C-section immediately", textNe: "उनलाई तुरुन्तै सिजेरियन गर्नुपर्छ", isCorrect: false },
      { text: "In 90% of cases it moves upward as the uterus grows. It's noted but not necessarily a problem.", textNe: "९०% मा पाठेघर बढ्दा माथि सर्छ। यो नोट गरिन्छ तर समस्या नहुन सक्छ।", isCorrect: true },
      { text: "The baby is in danger and she must be hospitalised", textNe: "बच्चा खतरामा छ र उनलाई अस्पताल भर्ना हुनुपर्छ", isCorrect: false }
    ],
    explanation: "Low-lying placenta at 20 weeks is found in about 1 in 20 pregnancies, but in 90% of cases the placenta moves up as the uterus grows. It only becomes a concern if it remains low at 32–36 weeks.",
    explanationNe: "२० हप्तामा तल्लो प्लेसेन्टा लगभग २० मा १ गर्भमा देखिन्छ, तर ९०% मा पाठेघर बढ्दा माथि सर्छ। ३२–३६ हप्तामा पनि तल रह्यो भने मात्र चिन्ताको विषय हुन्छ।"
  },
  {
    id: 4,
    title: "Scenario 4: Why is lower back pain common in the second trimester and what helps?",
    titleNe: "दृश्य ४: दोस्रो त्रैमासिकमा कम्मर दुखाइ किन सामान्य छ र के ले मद्दत गर्छ?",
    description: "Sunita is 22 weeks pregnant and has lower back pain after standing for long periods at her market stall.",
    descriptionNe: "सुनिता २२ हप्ताकी गर्भवती छिन् र बजारमा लामो समय उभिएपछि उनको कम्मर दुख्छ।",
    options: [
      { text: "Something is wrong with her spine and she needs an X-ray", textNe: "उनको ढाडमा समस्या छ र एक्स-रे चाहिन्छ", isCorrect: false },
      { text: "The growing uterus shifts the body's centre of gravity. Gentle stretching, supportive footwear, and seated breaks help.", textNe: "बढ्दो पाठेघरले शरीरको गुरुत्व केन्द्र सार्छ। हल्का स्ट्रेचिङ, राम्रो जुत्ता, र बसेर आराम गर्दा मद्दत हुन्छ।", isCorrect: true },
      { text: "She must stop working immediately", textNe: "उनले तुरुन्तै काम बन्द गर्नुपर्छ", isCorrect: false }
    ],
    explanation: "Lower back pain affects around 50–70% of pregnant women from the second trimester. As the uterus grows, the centre of gravity shifts forward. Gentle stretching, supportive footwear, and seated breaks help.",
    explanationNe: "दोस्रो त्रैमासिकदेखि ५०–७०% गर्भवती महिलामा कम्मर दुख्छ। पाठेघर बढ्दा शरीरको तौल अगाडि सर्छ। हल्का व्यायाम, राम्रो जुत्ता, र बसेर आराम गर्दा मद्दत हुन्छ।"
  },
  {
    id: 5,
    title: "Scenario 5: Does eating extra ghee make the baby's skin fairer or delivery easier?",
    titleNe: "दृश्य ५: के धेरै घिउ खाँदा बच्चाको छाला गोरो वा प्रसूति सजिलो हुन्छ?",
    description: "Nisha is 24 weeks pregnant. Her mother-in-law advises her to eat a lot of ghee to make the baby's skin fair and delivery easier.",
    descriptionNe: "निशा २४ हप्ताकी गर्भवती छिन्। उनकी सासूले बच्चाको छाला गोरो र प्रसूति सजिलो बनाउन धेरै घिउ खान सल्लाह दिनुभयो।",
    options: [
      { text: "Yes, ghee lightens skin and lubricates the birth canal", textNe: "हो, घिउले छाला गोरो बनाउँछ र जन्ममार्ग चिल्लो बनाउँछ", isCorrect: false },
      { text: "No — skin colour is determined by genetics. Moderate ghee is fine but large amounts add excess calories.", textNe: "होइन — छालाको रङ अनुवंशिक हो। मध्यम घिउ ठीक छ तर धेरैले अनावश्यक क्यालोरी थप्छ।", isCorrect: true },
      { text: "Yes, but only if combined with milk", textNe: "हो, तर दूधसँग मिसाउनुपर्छ", isCorrect: false }
    ],
    explanation: "Skin colour is determined entirely by genetics — no food can change it. Ghee in moderate amounts is fine nutritionally but large amounts add excess saturated fat without benefit.",
    explanationNe: "छालाको रङ पूर्ण रूपमा अनुवंशिक हो — कुनै खानाले परिवर्तन गर्न सक्दैन। मध्यम मात्रामा घिउ ठीक छ तर धेरैले अनावश्यक बोसो मात्र बढाउँछ।"
  },
  {
    id: 6,
    title: "Scenario 6: Why is blood group compatibility important during pregnancy?",
    titleNe: "दृश्य ६: गर्भावस्थामा रक्त समूह अनुकूलता किन महत्त्वपूर्ण छ?",
    description: "Mina is 19 weeks pregnant and her husband asks why they need to know the blood group of both parents.",
    descriptionNe: "मिना १९ हप्ताकी गर्भवती छिन् र उनका श्रीमानले दुबैको रक्त समूह किन चाहिन्छ भनेर सोध्नुभयो।",
    options: [
      { text: "It is only needed if the mother needs surgery", textNe: "आमालाई शल्यक्रिया चाहिएमा मात्र आवश्यक", isCorrect: false },
      { text: "If the mother is Rh-negative and father is Rh-positive, Rh incompatibility can occur — treatable with an injection if caught early", textNe: "आमा Rh-नेगेटिभ र बुबा Rh-पोजेटिभ भए Rh असंगतता हुन सक्छ — चाँडो थाहा भए सुई लगाएर उपचार हुन्छ", isCorrect: true },
      { text: "Blood groups are only relevant for transfusions", textNe: "रक्त समूह रगत चढाउँदा मात्र सान्दर्भिक छ", isCorrect: false }
    ],
    explanation: "Rh incompatibility occurs when an Rh-negative mother carries an Rh-positive baby. It is completely preventable with an Rh immunoglobulin injection given at 28 weeks and after delivery.",
    explanationNe: "Rh-नेगेटिभ आमाले Rh-पोजेटिभ बच्चा बोकेमा Rh असंगतता हुन्छ। यो २८ हप्तामा र प्रसूतिपछि Rh इम्युनोग्लोबुलिन सुई लगाएर पूर्ण रूपमा रोक्न सकिन्छ।"
  },
  {
    id: 7,
    title: "Scenario 7: Why do pregnant women feel more emotionally sensitive?",
    titleNe: "दृश्य ७: गर्भवती महिलाहरू भावनात्मक रूपमा किन बढी संवेदनशील हुन्छन्?",
    description: "Anita is 21 weeks pregnant and feels more emotional than usual — crying at small things.",
    descriptionNe: "अनिता २१ हप्ताकी गर्भवती छिन् र सानातिना कुरामा रुन्छिन् — सामान्यभन्दा बढी भावुक छिन्।",
    options: [
      { text: "She is overreacting and needs to be stronger", textNe: "उनी अतिरञ्जित गर्दैछिन् र बलियो हुनुपर्छ", isCorrect: false },
      { text: "Hormonal changes — particularly rising oestrogen and progesterone — directly affect brain chemistry and mood. Emotional sensitivity is normal.", textNe: "हर्मोनल परिवर्तन — विशेषगरी बढ्दो इस्ट्रोजन र प्रोजेस्टेरोन — ले मस्तिष्कको रसायन र मनोदशामा असर गर्छ। भावनात्मक संवेदनशीलता सामान्य हो।", isCorrect: true },
      { text: "She has depression and needs medication immediately", textNe: "उनलाई अवसाद छ र तुरुन्तै औषधि चाहिन्छ", isCorrect: false }
    ],
    explanation: "Oestrogen and progesterone affect the same brain chemistry that regulates mood. Mild emotional sensitivity is completely normal. Persistent low mood may indicate prenatal depression, which is treatable.",
    explanationNe: "इस्ट्रोजन र प्रोजेस्टेरोनले मनोदशा नियन्त्रण गर्ने मस्तिष्क रसायनमा असर गर्छ। हल्का भावनात्मक संवेदनशीलता सामान्य हो। लगातार उदास मनोदशा भने प्रसवपूर्व अवसादको संकेत हुन सक्छ।"
  },
  {
    id: 8,
    title: "Scenario 8: What does fundal height measurement tell the health worker?",
    titleNe: "दृश्य ८: गर्भाशयको उचाइ मापनले स्वास्थ्यकर्मीलाई के बताउँछ?",
    description: "Parbati is 23 weeks pregnant and the nurse measures her fundal height at 23 cm.",
    descriptionNe: "पार्बती २३ हप्ताकी गर्भवती छिन् र नर्सले उनको गर्भाशयको उचाइ २३ से.मि. नाप्नुभयो।",
    options: [
      { text: "Whether the mother is overweight", textNe: "आमाको तौल बढी छ कि भनेर", isCorrect: false },
      { text: "It roughly estimates the baby's growth — fundal height in cm approximately matches weeks of pregnancy", textNe: "बच्चाको वृद्धिको अनुमान — गर्भाशयको उचाइ से.मि. मा गर्भावस्थाको हप्तासँग मिल्छ", isCorrect: true },
      { text: "Whether the baby's gender is male or female", textNe: "बच्चा केटा कि केटी भनेर", isCorrect: false }
    ],
    explanation: "Fundal height in centimetres roughly equals gestational age in weeks (±2 cm). It is a simple, free, and effective way to monitor fetal growth at every ANC visit.",
    explanationNe: "गर्भाशयको उचाइ से.मि. मा गर्भावस्थाको हप्तासँग लगभग बराबर हुन्छ (±२ से.मि.)। यो हरेक ANC भ्रमणमा बच्चाको वृद्धि निगरानी गर्ने सरल र प्रभावकारी तरिका हो।"
  },
  {
    id: 9,
    title: "Scenario 9: Is painting a room safe during the second trimester?",
    titleNe: "दृश्य ९: के दोस्रो त्रैमासिकमा कोठा रंग्न सुरक्षित छ?",
    description: "Devi is 25 weeks pregnant and wants to paint the baby's room. She asks if painting is safe.",
    descriptionNe: "देवी २५ हप्ताकी गर्भवती छिन् र बच्चाको कोठा रंग्न चाहन्छिन्। उनले सोध्छिन् कि रंग लगाउन सुरक्षित छ कि छैन।",
    options: [
      { text: "Yes, all paints are safe in pregnancy", textNe: "हो, सबै रंग गर्भावस्थामा सुरक्षित छन्", isCorrect: false },
      { text: "Best to minimise exposure — some paints contain VOCs. Use low-VOC paint, keep windows open, and have someone else paint.", textNe: "सम्पर्क कम गर्नु राम्रो — केही रंगमा VOC हुन्छ। कम-VOC रंग प्रयोग गर्ने, झ्याल खोल्ने, र अरूलाई रंग लगाउन लगाउने।", isCorrect: true },
      { text: "Only oil-based paints are dangerous", textNe: "तेल-आधारित रंग मात्र खतरनाक छन्", isCorrect: false }
    ],
    explanation: "Many paints contain volatile organic compounds that release harmful fumes. The safest approach is to have someone else paint, use low-VOC paint, keep ventilation, and avoid the room for 24–48 hours.",
    explanationNe: "धेरै रंगमा हानिकारक धुवाँ निस्कने VOC हुन्छ। सबैभन्दा सुरक्षित तरिका: अरूलाई रंग लगाउन लगाउने, कम-VOC रंग प्रयोग गर्ने, हावा आउन दिने, र २४–४८ घण्टा कोठाबाट टाढा रहने।"
  },
  {
    id: 10,
    title: "Scenario 10: What commonly causes leg cramps during pregnancy?",
    titleNe: "दृश्य १०: गर्भावस्थामा खुट्टा कमाउनुको सामान्य कारण के हो?",
    description: "Bindu is 17 weeks pregnant and has been getting leg cramps at night.",
    descriptionNe: "बिन्दु १७ हप्ताकी गर्भवती छिन् र रातमा उनको खुट्टा कमाउँछ।",
    options: [
      { text: "She is exercising too much and needs to rest completely", textNe: "उनी धेरै व्यायाम गर्दैछिन् र पूर्ण आराम चाहिन्छ", isCorrect: false },
      { text: "Often linked to low calcium and magnesium, or reduced circulation. Calf stretching before bed, hydration, and calcium-rich foods help.", textNe: "प्रायः कम क्याल्सियम र म्याग्नेसियम, वा कम रक्तसञ्चारसँग सम्बन्धित। सुत्नुअघि पिण्डली तन्काउने, पानी पिउने, र क्याल्सियमयुक्त खाना खाने।", isCorrect: true },
      { text: "Leg cramps mean the baby is kicking the muscles", textNe: "खुट्टा कमाउनु भनेको बच्चाले मांसपेशीमा लात हान्दैछ", isCorrect: false }
    ],
    explanation: "Nocturnal leg cramps are common from the second trimester. They are linked to reduced circulation, low calcium or magnesium, and dehydration. Stretching before bed and eating calcium-rich foods helps.",
    explanationNe: "दोस्रो त्रैमासिकदेखि रातको खुट्टा कमाउने समस्या सामान्य हो। कम रक्तसञ्चार, कम क्याल्सियम वा म्याग्नेसियम, र पानीको कमीसँग सम्बन्धित हुन्छ। सुत्नुअघि स्ट्रेच गर्ने र क्याल्सियमयुक्त खाना खाने।"
  },
  {
    id: 11,
    title: "Scenario 11: What is the glucose screening test checking for?",
    titleNe: "दृश्य ११: ग्लुकोज स्क्रिनिङ परीक्षणले के जाँच गर्छ?",
    description: "Gita is 20 weeks pregnant and told she needs a glucose screening test at 24–28 weeks.",
    descriptionNe: "गीता २० हप्ताकी गर्भवती छिन् र उनलाई २४–२८ हप्तामा ग्लुकोज स्क्रिनिङ टेस्ट गर्नुपर्छ भनिएको छ।",
    options: [
      { text: "Whether the mother likes sweet food", textNe: "आमालाई गुलियो खाना मनपर्छ कि भनेर", isCorrect: false },
      { text: "Gestational diabetes — high blood sugar that develops during pregnancy. Very common and manageable if detected early.", textNe: "गर्भकालीन मधुमेह — गर्भावस्थामा बढ्ने रक्त चिनी। सामान्य छ र चाँडो थाहा भएमा व्यवस्थापन हुन्छ।", isCorrect: true },
      { text: "Whether the baby will be born with diabetes", textNe: "बच्चा मधुमेहसँग जन्मिन्छ कि भनेर", isCorrect: false }
    ],
    explanation: "Gestational diabetes affects about 5–10% of pregnancies. Pregnancy hormones block insulin from working normally. If detected, it can be managed through diet, exercise, and sometimes medication.",
    explanationNe: "गर्भकालीन मधुमेह लगभग ५–१०% गर्भावस्थामा हुन्छ। गर्भ हर्मोनले इन्सुलिनलाई सामान्य रूपमा काम गर्नबाट रोक्छ। थाहा भएमा आहार, व्यायाम, र कहिलेकाहीं औषधिबाट व्यवस्थापन हुन्छ।"
  },
  {
    id: 12,
    title: "Scenario 12: Is there any medical concern about a pregnant woman attending a funeral?",
    titleNe: "दृश्य १२: गर्भवती महिलाले अन्त्येष्टिमा जानु चिकित्सकीय रूपमा चिन्ताजनक छ?",
    description: "Rita is 22 weeks pregnant and her family says she should not attend funerals during pregnancy.",
    descriptionNe: "रिता २२ हप्ताकी गर्भवती छिन् र उनको परिवारले गर्भावस्थामा अन्त्येष्टिमा नजान भन्छ।",
    options: [
      { text: "Yes, the stress of a funeral can directly harm the baby", textNe: "हो, अन्त्येष्टिको तनावले बच्चालाई सिधै हानि गर्छ", isCorrect: false },
      { text: "No direct medical concern — grief is natural. Be mindful of practical things: long standing, crowds, and heat.", textNe: "प्रत्यक्ष चिकित्सकीय चिन्ता छैन — शोक स्वाभाविक हो। व्यावहारिक कुराहरूमा ध्यान दिने: लामो उभिने, भीड, र गर्मी।", isCorrect: true },
      { text: "She should never leave the house in the second trimester", textNe: "दोस्रो त्रैमासिकमा उनले घर छोड्नु हुँदैन", isCorrect: false }
    ],
    explanation: "There is no medical contraindication. Grief is natural and important. Be mindful of practical things: long standing, crowds, heat, and exhaustion. Sit when possible and stay hydrated.",
    explanationNe: "कुनै चिकित्सकीय निषेध छैन। शोक स्वाभाविक र महत्त्वपूर्ण छ। व्यावहारिक कुराहरूमा ध्यान दिनुपर्छ: लामो उभिने, भीड, गर्मी। सकेसम्म बस्ने र पानी पिइरहने।"
  },
  {
    id: 13,
    title: "Scenario 13: Should Laxmi be worried about breech position at 26 weeks?",
    titleNe: "दृश्य १३: के लक्ष्मीले २६ हप्तामा ब्रीच अवस्थाबारे चिन्ता लिनुपर्छ?",
    description: "Laxmi is 26 weeks pregnant and is told the baby is in a breech position.",
    descriptionNe: "लक्ष्मी २६ हप्ताकी गर्भवती छिन् र बच्चा ब्रीच (उल्टो) अवस्थामा छ भनिएको छ।",
    options: [
      { text: "Yes — she needs a C-section scheduled immediately", textNe: "हो — उनलाई तुरुन्तै सिजेरियन मिलाउनुपर्छ", isCorrect: false },
      { text: "No — most babies are breech at 26 weeks. 75–80% turn head-down by 36 weeks on their own.", textNe: "होइन — धेरैजसो बच्चा २६ हप्तामा ब्रीचमा हुन्छन्। ७५–८०% ले ३६ हप्तासम्म आफैं तल फर्किन्छन्।", isCorrect: true },
      { text: "She needs to do special exercises every hour to turn the baby", textNe: "बच्चा फर्काउन हरेक घण्टा विशेष व्यायाम गर्नुपर्छ", isCorrect: false }
    ],
    explanation: "At 26 weeks, breech presentation is actually normal. Babies have plenty of room to move and about 75–80% spontaneously turn head-down by 36 weeks. It only becomes a concern at 36+ weeks.",
    explanationNe: "२६ हप्तामा ब्रीच अवस्था वास्तवमा सामान्य हो। बच्चाहरूसँग हल्ने ठाउँ छ र ७५–८०% ले ३६ हप्तासम्म आफैं तल फर्किन्छन्। ३६ हप्तापछि मात्र चिन्ताको विषय हुन्छ।"
  },
  {
    id: 14,
    title: "Scenario 14: What is the dark line on the belly and is it normal?",
    titleNe: "दृश्य १४: पेटमा देखिएको कालो रेखा के हो र यो सामान्य हो?",
    description: "Sarita is 18 weeks pregnant and notices a dark vertical line appearing on her belly.",
    descriptionNe: "सरिता १८ हप्ताकी गर्भवती छिन् र उनको पेटमा ठाडो कालो रेखा देखिन थालेको छ।",
    options: [
      { text: "A stretch mark — she needs to apply cream immediately", textNe: "स्ट्रेच मार्क — उनले तुरुन्तै क्रिम लगाउनुपर्छ", isCorrect: false },
      { text: "This is linea nigra — completely normal pigmentation caused by hormonal changes. It fades after delivery.", textNe: "यो लिनिया निग्रा हो — हर्मोनल परिवर्तनले गर्दा सामान्य रंग परिवर्तन। प्रसूतिपछि हराउँछ।", isCorrect: true },
      { text: "A sign of a skin infection", textNe: "छालाको संक्रमणको संकेत", isCorrect: false }
    ],
    explanation: "Linea nigra appears in about 75% of pregnant women. It is caused by increased melanocyte-stimulating hormones. It typically fades in the months after delivery. No treatment is needed.",
    explanationNe: "लिनिया निग्रा लगभग ७५% गर्भवती महिलामा देखिन्छ। बढेको मेलानोसाइट-उत्तेजक हर्मोनले गर्दा हुन्छ। प्रसूतिपछि केही महिनामा हराउँछ। कुनै उपचार आवश्यक छैन।"
  },
  {
    id: 15,
    title: "Scenario 15: What is perineal massage and when is it recommended?",
    titleNe: "दृश्य १५: पेरिनियल मसाज के हो र कहिले सिफारिस गरिन्छ?",
    description: "Deepa is 24 weeks pregnant and has been told to start doing perineal massage to prepare for delivery.",
    descriptionNe: "दीपा २४ हप्ताकी गर्भवती छिन् र प्रसूतिको तयारीका लागि पेरिनियल मसाज सुरु गर्न भनिएको छ।",
    options: [
      { text: "A full body massage done at the hospital", textNe: "अस्पतालमा गरिने पूर्ण शरीर मालिश", isCorrect: false },
      { text: "Gentle massage of the perineum to improve elasticity — recommended from 34–36 weeks, not 24 weeks", textNe: "लचिलोपन सुधार गर्न पेरिनियमको कोमल मालिश — ३४–३६ हप्तादेखि सिफारिस गरिन्छ, २४ हप्ता होइन", isCorrect: true },
      { text: "A massage to help the baby turn head-down", textNe: "बच्चा तल फर्काउन मद्दत गर्ने मालिश", isCorrect: false }
    ],
    explanation: "Perineal massage reduces the risk of severe tearing during delivery, particularly for first-time mothers. It is recommended from 34–36 weeks — not from 24 weeks, which is too early.",
    explanationNe: "पेरिनियल मसाजले प्रसूतिमा गम्भीर च्यातिने जोखिम कम गर्छ, विशेषगरी पहिलो पटक आमा हुनेहरूलाई। ३४–३६ हप्तादेखि सिफारिस गरिन्छ — २४ हप्ता चाँडो हो।"
  },
  {
    id: 16,
    title: "Scenario 16: How important is calcium during the second trimester?",
    titleNe: "दृश्य १६: दोस्रो त्रैमासिकमा क्याल्सियम कत्तिको महत्त्वपूर्ण छ?",
    description: "Kabita is 19 weeks pregnant and her neighbour says she should drink a lot of milk to ensure the baby has strong bones.",
    descriptionNe: "कबिता १९ हप्ताकी गर्भवती छिन् र छिमेकीले बच्चाको हड्डी बलियो बनाउन धेरै दूध पिउन भन्छिन्।",
    options: [
      { text: "Calcium is only important in the third trimester", textNe: "क्याल्सियम तेस्रो त्रैमासिकमा मात्र महत्त्वपूर्ण छ", isCorrect: false },
      { text: "Very important throughout pregnancy — dairy, sesame seeds, ragi, leafy greens, and supplements all contribute", textNe: "गर्भावस्थाभर धेरै महत्त्वपूर्ण — दुग्ध, तिल, कोदो, हरियो सागपात, र पूरकहरू सबैले मद्दत गर्छ", isCorrect: true },
      { text: "Only milk counts — other foods do not provide calcium", textNe: "दूध मात्र — अरू खानाले क्याल्सियम दिँदैन", isCorrect: false }
    ],
    explanation: "Calcium is critical throughout pregnancy for the baby's skeleton, teeth, heart, muscles, and nerves. If the mother does not get enough, the body takes calcium from her own bones. Many food sources provide calcium beyond just milk.",
    explanationNe: "बच्चाको हड्डी, दाँत, मुटु, मांसपेशी, र नसाका लागि क्याल्सियम गर्भभर महत्त्वपूर्ण छ। आमाले पर्याप्त नपाए शरीरले उनकै हड्डीबाट लिन्छ। दूधबाहेक पनि धेरै खानाबाट क्याल्सियम पाइन्छ।"
  },
  {
    id: 17,
    title: "Scenario 17: Is long-distance vehicle travel safe at 23 weeks?",
    titleNe: "दृश्य १७: के २३ हप्तामा लामो दूरीको सवारी यात्रा सुरक्षित छ?",
    description: "Hira is 23 weeks pregnant and asks if she can travel in a vehicle for 3 hours to visit her mother.",
    descriptionNe: "हिरा २३ हप्ताकी गर्भवती छिन् र आमालाई भेट्न ३ घण्टा सवारीमा यात्रा गर्न सक्छिन् कि भनेर सोध्छिन्।",
    options: [
      { text: "No travel is allowed after 12 weeks", textNe: "१२ हप्तापछि कुनै यात्रा अनुमति छैन", isCorrect: false },
      { text: "Short to medium trips are generally safe. Wear seatbelt below belly, take breaks every hour, and stay hydrated.", textNe: "छोटो-मध्यम यात्रा सामान्यतया सुरक्षित छ। सिटबेल्ट पेटमुनि लगाउने, हरेक घण्टा ब्रेक लिने, र पानी पिइरहने।", isCorrect: true },
      { text: "Only if travelling by ambulance", textNe: "एम्बुलेन्समा मात्र यात्रा गर्ने", isCorrect: false }
    ],
    explanation: "The second trimester is often called the safe window for travel. A 3-hour journey is generally fine with seatbelt positioned below the belly, hourly breaks to walk, and staying hydrated.",
    explanationNe: "दोस्रो त्रैमासिक यात्राको सुरक्षित समय मानिन्छ। सिटबेल्ट पेटमुनि, हरेक घण्टा हिँड्ने ब्रेक, र पानी पिइरहने गरेमा ३ घण्टाको यात्रा सामान्यतया ठीक छ।"
  },
  {
    id: 18,
    title: "Scenario 18: Is sexual intercourse safe during a normal second-trimester pregnancy?",
    titleNe: "दृश्य १८: सामान्य दोस्रो त्रैमासिकमा शारीरिक सम्बन्ध सुरक्षित छ?",
    description: "Puja is 25 weeks pregnant and her partner wants to know if it is safe to continue having intimate relations during pregnancy.",
    descriptionNe: "पूजा २५ हप्ताकी गर्भवती छिन् र उनका साथीले गर्भावस्थामा शारीरिक सम्बन्ध सुरक्षित छ कि भनेर जान्न चाहनुहुन्छ।",
    options: [
      { text: "No — it is dangerous for the baby at any stage", textNe: "होइन — कुनै पनि चरणमा बच्चाको लागि खतरनाक", isCorrect: false },
      { text: "Yes — in a normal pregnancy without complications, it is safe. The baby is protected by the amniotic sac and cervical mucus plug.", textNe: "हो — जटिलता नभएको सामान्य गर्भावस्थामा सुरक्षित छ। बच्चा एम्नियोटिक थैली र सर्भाइकल म्यूकस प्लगले सुरक्षित हुन्छ।", isCorrect: true },
      { text: "Only in the first trimester", textNe: "पहिलो त्रैमासिकमा मात्र", isCorrect: false }
    ],
    explanation: "In a normal pregnancy without complications, intimate relations are safe throughout. The baby is completely protected by the amniotic sac and fluid. Doctors advise avoidance only in specific high-risk situations.",
    explanationNe: "जटिलता नभएको सामान्य गर्भावस्थामा शारीरिक सम्बन्ध गर्भभर सुरक्षित छ। बच्चा एम्नियोटिक थैली र तरल पदार्थले पूर्ण सुरक्षित हुन्छ। विशेष उच्च-जोखिम अवस्थामा मात्र टार्न भनिन्छ।"
  },
  {
    id: 19,
    title: "Scenario 19: Why do hands and feet swell during the second trimester?",
    titleNe: "दृश्य १९: दोस्रो त्रैमासिकमा हात र खुट्टा किन सुन्निन्छ?",
    description: "Maya is 21 weeks pregnant. She noticed her shoes no longer fit and her rings are tight.",
    descriptionNe: "माया २१ हप्ताकी गर्भवती छिन्। उनको जुत्ता अब लाग्दैन र औंठी कसिलो भएको छ।",
    options: [
      { text: "She is eating too much salt and should go on a low-salt diet immediately", textNe: "उनी धेरै नुन खाइरहेकी छिन् र तुरुन्तै कम-नुन आहारमा जानुपर्छ", isCorrect: false },
      { text: "Mild swelling is normal — blood volume increases by 50% and fluid accumulates in extremities, especially toward end of day", textNe: "हल्का सुन्निने सामान्य हो — रक्त मात्रा ५०% बढ्छ र हातगोडामा तरल जम्मा हुन्छ, विशेषगरी दिनको अन्तमा", isCorrect: true },
      { text: "Her kidneys are failing", textNe: "उनको मिर्गौला फेल भइरहेको छ", isCorrect: false }
    ],
    explanation: "Mild swelling is very common and normal during pregnancy. Blood volume increases by approximately 50% and extra fluid is retained. Watch for sudden facial swelling with headache — that is a warning sign of preeclampsia.",
    explanationNe: "गर्भावस्थामा हल्का सुन्निने धेरै सामान्य छ। रक्त मात्रा लगभग ५०% बढ्छ र अतिरिक्त तरल जम्मा हुन्छ। अचानक अनुहार सुन्निने र टाउको दुख्ने भने प्रिक्ल्याम्पसियाको चेतावनी हो।"
  },
  {
    id: 20,
    title: "Scenario 20: What type of exercise is most beneficial in the second trimester?",
    titleNe: "दृश्य २०: दोस्रो त्रैमासिकमा कुन प्रकारको व्यायाम सबैभन्दा फाइदाजनक छ?",
    description: "Suna is 16 weeks pregnant and asks if she should start doing special exercises to prepare for delivery.",
    descriptionNe: "सुना १६ हप्ताकी गर्भवती छिन् र प्रसूतिको तयारीका लागि विशेष व्यायाम सुरु गर्नुपर्छ कि भनेर सोध्छिन्।",
    options: [
      { text: "No exercise should be done during pregnancy", textNe: "गर्भावस्थामा कुनै व्यायाम गर्नु हुँदैन", isCorrect: false },
      { text: "Walking, swimming, prenatal yoga, and pelvic floor (Kegel) exercises are all beneficial and safe", textNe: "हिँड्ने, पौडी खेल्ने, प्रसवपूर्व योग, र पेल्भिक फ्लोर (किगल) व्यायाम सबै फाइदाजनक र सुरक्षित छन्", isCorrect: true },
      { text: "Only heavy weight training", textNe: "भारी तौल तालिम मात्र", isCorrect: false }
    ],
    explanation: "The second trimester is an ideal time to establish a gentle exercise routine. Walking, swimming, prenatal yoga, and Kegel exercises are all recommended and safe in a normal pregnancy.",
    explanationNe: "दोस्रो त्रैमासिक कोमल व्यायाम दिनचर्या सुरु गर्ने उत्तम समय हो। हिँड्ने, पौडी, प्रसवपूर्व योग, र किगल व्यायाम सामान्य गर्भावस्थामा सिफारिस गरिन्छ र सुरक्षित छन्।"
  }
];
