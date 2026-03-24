export type DangerTier = 'go_now' | 'call_doctor' | 'wait_home';

export interface DangerSign {
  id: number;
  tier: DangerTier;
  title: string;
  titleNe?: string;
  explanation: string;
  explanationNe?: string;
}

export const TIER_CONFIG: Record<DangerTier, { label: string; labelNe: string; text: string; bg: string; border: string }> = {
  go_now: { label: 'Go NOW', labelNe: 'तुरुन्तै अस्पताल जानुहोस्', text: '#A73C44', bg: '#FCEDED', border: '#DE8E94' },
  call_doctor: { label: 'Call Doctor', labelNe: 'डक्टरलाई फोन गर्नुहोस्', text: '#9A5A17', bg: '#FBF2E1', border: '#D69E58' },
  wait_home: { label: 'Wait at Home', labelNe: 'घरमै आराम गर्नुहोस्', text: '#2B6D45', bg: '#EBF5ED', border: '#6EB88B' },
};

export const DANGER_SIGNS: DangerSign[] = [
  // GO NOW
  { id: 1, tier: 'go_now', 
    title: 'Heavy vaginal bleeding — soaking more than 1 pad per hour', 
    titleNe: 'योनीबाट अत्यधिक रक्तस्राव — एक घण्टामै १ भन्दा बढी प्याड भिज्नु',
    explanation: 'This can indicate placental abruption or placenta previa. Both cut off oxygen to the baby and can cause life-threatening haemorrhage within minutes. Call 102 and go immediately. Do not stop at a clinic.',
    explanationNe: 'यसले साल छुट्टिएको वा साल पाठेघरको मुखमा रहेको (Placenta Previa) संकेत गर्छ। यस्तो बेला बच्चालाई अक्सिजन पुग्दैन र आमाको ज्यान जाने गरी रक्तस्राव हुन सक्छ। तुरुन्तै १०२ मा फोन गरी अस्पताल जानुहोस्। क्लिनिकमा नरोकिनुहोस्।'
  },
  { id: 2, tier: 'go_now', 
    title: 'Baby has stopped moving completely for 4+ hours', 
    titleNe: 'बच्चा चल्न पूर्ण रूपमा रोकियो (४ घण्टाभन्दा बढी समयसम्म)',
    explanation: 'Perform a kick count — you should feel at least 10 movements in 2 hours. Zero movement means oxygen or blood supply may be severely compromised. Every minute matters for the baby\'s brain.',
    explanationNe: 'बच्चाको चाल (लात्ती) गन्नुहोस् — २ घण्टामा कम्तीमा १० पटक चलेको महसुस हुनुपर्छ। चाल शून्य हुनु भनेको अक्सिजन वा रगत आपूर्तिमा गम्भीर अवरोध भएको हुन सक्छ। बच्चाको मस्तिष्क सुरक्षाका लागि प्रत्येक मिनेट महत्त्वपूर्ण हुन्छ।'
  },
  { id: 3, tier: 'go_now', 
    title: 'Water broke with green, brown, or foul-smelling fluid', 
    titleNe: 'हरियो, खैरो वा गन्हाउने पानी बगेमा (पानी फुट्दा)',
    explanation: 'This is meconium in the amniotic fluid — the baby has passed stool inside the womb, a sign of fetal distress. If inhaled during birth, it causes meconium aspiration syndrome — a serious lung condition.',
    explanationNe: 'यसको अर्थ बच्चाले पेटभित्रै दिसा (मेकोनियम) गरेको छ। यो बच्चालाई गाह्रो भएको गम्भीर संकेत हो। जन्मँदा बच्चाले यो दिसा साससँगै फोक्सोमा तानेमा कडा संक्रमण हुन सक्छ। तुरुन्तै अस्पताल जानुहोस्।'
  },
  { id: 4, tier: 'go_now', 
    title: 'Severe headache + blurry vision + sudden swelling of face and hands', 
    titleNe: 'कडा टाउको दुखाइ, धमिलो दृष्टि र अनुहार वा हात अचानक सुन्निनु',
    explanation: 'Classic signs of preeclampsia, which can rapidly progress to eclampsia (seizures) and stroke. One of the leading causes of maternal death in Nepal. Requires IV magnesium sulphate immediately.',
    explanationNe: 'यी प्रिएक्लाम्प्सियाका लक्षण हुन्, जुन चाँडै कडा काम्ने बिरामी (एक्लाम्प्सिया) वा मस्तिष्कघातमा परिणत हुन सक्छ। नेपालमा मातृ मृत्युको यो प्रमुख कारण हो। यसका लागि तुरुन्तै अस्पतालमा सुईद्वारा औषधि (म्याग्नेसियम सल्फेट) दिनुपर्छ।'
  },
  { id: 5, tier: 'go_now', 
    title: 'Seizures or loss of consciousness', 
    titleNe: 'जीउ काम्ने (छारे रोग जस्तो) वा बेहोस हुने',
    explanation: 'This is eclampsia. Call 102 immediately and say: "Pregnant woman having seizures." Needs IV magnesium sulphate within minutes to prevent brain damage or death.',
    explanationNe: 'यो एक्लाम्प्सिया हो। तुरुन्तै १०२ मा फोन गरेर "गर्भवती महिला कामिरहेकी छिन्" भन्नुहोस्। मस्तिष्कमा क्षति हुन नदिन र ज्यान बचाउन केही मिनेटभित्रै नसाबाट औषधि दिनु आवश्यक हुन्छ।'
  },
  { id: 6, tier: 'go_now', 
    title: 'Umbilical cord visible or felt at the vaginal opening', 
    titleNe: 'योनीको मुखमा नाइँटोको नाल (Cord) देखिने वा छामिने',
    explanation: 'Cord prolapse — the cord has slipped ahead of the baby. Every contraction cuts off oxygen. Get on hands and knees to reduce cord pressure. Requires emergency C-section within minutes.',
    explanationNe: 'यो नाइँटोको नाल बच्चाभन्दा अगाडि बाहिर निस्किएको अवस्था हो। हरेक पटक व्यथा लाग्दा नाल थिचिएर बच्चाको अक्सिजन रोकिन्छ। नालमा दबाब कम गर्न हात र घुँडाको भरमा निहुरिएर बस्नुहोस् र तुरुन्तै अस्पताल पुग्नुहोस्। आकस्मिक शल्यक्रिया आवश्यक हुन्छ।'
  },
  { id: 7, tier: 'go_now', 
    title: 'High fever above 38°C with chills and shivering', 
    titleNe: 'कम्पनसहित ३८°C (१००.४°F) भन्दा बढी ज्वरो आउनु',
    explanation: 'Suggests chorioamnionitis (infection of the amniotic sac) or kidney infection. Untreated infection can trigger premature labour or sepsis in both mother and baby.',
    explanationNe: 'यसले पाठेघरभित्रको पानी वा मिर्गौलाको संक्रमण भएको संकेत गर्छ। समयमै उपचार नभएमा यसले रगतमा संक्रमण (सेप्सिस) गराउन सक्छ, जुन आमा र बच्चा दुवैको ज्यान जोखिममा पार्न सक्छ।'
  },
  { id: 8, tier: 'go_now', 
    title: 'Sudden difficulty breathing or chest pain', 
    titleNe: 'अचानक सास फेर्न गाह्रो हुनु वा छाती दुख्नु',
    explanation: 'Can indicate pulmonary embolism — a blood clot in the lungs, which is more common during pregnancy and is immediately life-threatening.',
    explanationNe: 'यसले फोक्सोमा रगत जमेको (पल्मोनरी एम्बोलिज्म) संकेत गर्न सक्छ। यो गर्भावस्था र सुत्केरीपछिको समयमा बढी देखिने ज्यान जोखिममा पार्ने खतरा हो।'
  },

  // CALL DOCTOR FIRST
  { id: 9, tier: 'call_doctor', 
    title: 'Water broke but no contractions yet', 
    titleNe: 'योनीबाट पानी बग्यो तर व्यथा सुरु भएको छैन',
    explanation: 'Membranes have ruptured but labour has not started. Go to hospital within 1 hour. After waters break, infection risk increases every hour. Call your doctor first to alert the labour ward.',
    explanationNe: 'पाठेघरको पानीको थैली फुटेको छ तर व्यथा सुरु भएको छैन। यस्तो अवस्थामा १ घण्टाभित्र अस्पताल पुग्नुपर्छ किनकि पानी बगेपछि संक्रमणको जोखिम बढ्दै जान्छ। अस्पताल जानुअघि आफ्नो डक्टरलाई जानकारी दिनुहोस्।'
  },
  { id: 10, tier: 'call_doctor', 
    title: 'Contractions 5 minutes apart, lasting 50–60 seconds, for 1 hour (first baby)', 
    titleNe: 'व्यथा ५-५ मिनेटको फरकमा आउने, ५०-६० सेकेन्ड रहने र लगातार १ घण्टा भइरहने (पहिलो बच्चाका लागि)',
    explanation: 'This is the 5-1-1 rule for first-time mothers. Contractions at this frequency mean active labour has likely begun. Call your doctor to confirm before leaving home.',
    explanationNe: 'यो पहिलो पटक आमा बन्न लाग्नुभएको महिलाका लागि सुत्केरी व्यथा राम्ररी सुरु भएको संकेत हो। यसलाई "५-१-१" को नियम भनिन्छ। घरबाट निस्कनुअघि डाक्टरलाई फोन गरेर सल्लाह लिनुहोस्।'
  },
  { id: 11, tier: 'call_doctor', 
    title: 'Second or third pregnancy with any regular contractions', 
    titleNe: 'दोस्रो वा तेस्रो पटक गर्भवती भएकोमा नियमित व्यथा लाग्नु',
    explanation: 'Labour moves much faster with each birth. What took 12 hours the first time may take 2–3 hours the second. Call the moment contractions start to pattern.',
    explanationNe: 'अघिल्लो पटकको तुलनामा यसपटक प्रसूति छिटो हुन सक्छ। पहिलो पटक १२ घण्टा लागेको थियो भने दोस्रो/तेस्रो पटक २-३ घण्टामा बच्चा जन्मिन सक्छ। व्यथा नियमित हुनेबित्तिकै डक्टरलाई सम्पर्क गर्नुहोस्।'
  },
  { id: 12, tier: 'call_doctor', 
    title: 'Light spotting — small amount of pink or brown discharge', 
    titleNe: 'हल्का रगत देखा पर्नु (गुलाबी वा खैरो स्राव)',
    explanation: 'May be the "bloody show" — the mucus plug releasing as the cervix dilates. Describe the amount and colour to your doctor so they can advise whether to come in.',
    explanationNe: 'यो पाठेघरको मुख खुल्न थालेको संकेत (Show) हुन सक्छ। रगतको मात्रा र रङ आफ्नो डक्टरलाई बताउनुहोस् र अस्पताल आउनुपर्ने/नपर्ने सल्लाह लिनुहोस्।'
  },
  { id: 13, tier: 'call_doctor', 
    title: 'Baby moving noticeably less than usual (not stopped, just reduced)', 
    titleNe: 'बच्चा पहिलेको तुलनामा कम चलेको महसुस हुनु (चल्न नछोडेको तर घटेको)',
    explanation: 'Early sign of possible baby stress. Doctor will ask you to come in for a non-stress test (NST). Do not wait until the next morning.',
    explanationNe: 'यो बच्चालाई पेटभित्र असजिलो हुन लागेको सुरुवाती संकेत हुन सक्छ। डाक्टरले बच्चाको मुटुको धड्कन जाँच्न (NST) बोलाउन सक्छन्। भोलि बिहानसम्म भनेर नकुर्नुहोस्।'
  },

  // WAIT AT HOME
  { id: 15, tier: 'wait_home', 
    title: 'Irregular contractions more than 20 minutes apart', 
    titleNe: 'अनियमित व्यथा जुन २० मिनेटभन्दा बढीको फरकमा आउँछ',
    explanation: 'Very early or latent labour, or Braxton Hicks. Rest at home, drink water, eat lightly, and keep timing. Going to hospital too early often results in being sent back home, which is exhausting.',
    explanationNe: 'यो सुत्केरी व्यथाको सुरुवाती चरण हुन सक्छ। घरमै आराम गर्नुहोस्, प्रशस्त पानी पिउनुहोस् र समय हेरिरहनुहोस्। धेरै चाँडै अस्पताल जाँदा घर फिर्ता पठाइन सक्छ, जसले गर्दा तपाईंलाई झन् कठिनाई हुन्छ।'
  },
  { id: 16, tier: 'wait_home', 
    title: 'Braxton Hicks — tightening that stops when you move or change position', 
    titleNe: 'नक्कली व्यथा (Braxton Hicks) — पेट कस्सिने जुन हिँड्दा वा बसाइ फेर्दा रोकिन्छ',
    explanation: 'Practice contractions. They feel like tightening but are not regular, do not get stronger, and stop when you walk or change position. True labour contractions get stronger no matter what you do.',
    explanationNe: 'यो शरीरले सुत्केरीका लागि गरेको अभ्यास मात्र हो। यसमा पेट कस्सिन्छ तर यो नियमित हुँदैन। वास्तविक व्यथा तपाईंले जे गरे पनि रोकिँदैन र झन् कडा हुँदै जान्छ। नक्कली व्यथा भने हिँडडुल गर्दा हराउँछ।'
  },
  { id: 17, tier: 'wait_home', 
    title: 'Mild ankle or foot swelling by end of day', 
    titleNe: 'साँझपख गोलीगाँठो वा खुट्टा हल्का सुन्निनु',
    explanation: 'Very common in late pregnancy due to increased blood volume and gravity. Normal as long as it goes away overnight and does not affect the face or hands (which would be preeclampsia).',
    explanationNe: 'गर्भावस्थाको अन्त्यतिर यो सामान्य हुन्छ। रातभर सुतेपछि बिहान यो हराउँछ भने आत्तिनु पर्दैन। तर यदि अनुहार र हात पनि सुन्निएको छ भने तुरुन्तै जँचाउनुपर्छ।'
  },
  { id: 18, tier: 'wait_home', 
    title: 'Nesting instinct — strong urge to clean and prepare the home', 
    titleNe: 'घर सफा गर्ने र तयारी गर्ने तीव्र इच्छा हुनु (Nesting)',
    explanation: 'Completely normal. Rest, finalise your hospital bag, check your contact list, and try to sleep. You will need the energy for real labour.',
    explanationNe: 'सुत्केरी हुने समय नजिकिँदै जाँदा यस्तो हुनु सामान्य हो। यस समयमा धेरै काम गरेर नथाक्नुहोस्, बरु अस्पताल जाने झोला तयार पार्नुहोस् र पर्याप्त सुत्ने प्रयास गर्नुहोस्।'
  },
  { id: 19, tier: 'wait_home', 
    title: 'Mild backache without a regular pattern', 
    titleNe: 'अनिमिता ढाड दुखाइ',
    explanation: "Common in the third trimester due to the baby's weight. Use a pillow between your knees and a warm compress. If it becomes rhythmic and patterned, call your doctor.",
    explanationNe: 'बच्चाको तौलका कारण तेस्रो त्रैमासिकमा ढाड दुख्नु सामान्य हो। सुत्दा घुँडाको बीचमा सिरानी राख्नुहोस्। यदि यो दुखाइ नियमित रूपमा आउने र जाने हुन थाल्यो भने डक्टरलाई खबर गर्नुहोस्।'
  },
];