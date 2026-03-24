export const PHASE2_ITEMS = [
  {
    id: 101,
    name: 'Clean plastic sheet or folded shower curtain',
    nameNe: 'सफा प्लास्टिकको सिट वा ठूलो प्लास्टिक',
    why: 'In case delivery happens in the vehicle before reaching hospital. Lay it under the mother immediately. Keep folded inside the bottom of the hospital bag from week 36.',
    whyNe: 'अस्पताल पुग्नुअघि गाडीमै सुत्केरी हुने अवस्था आएमा सिट जोगाउन र सरसफाइका लागि। ३६ औं हप्तादेखि नै यसलाई अस्पतालको झोलाको मुनि पट्याएर राख्नुहोस्।'
  },
  {
    id: 102,
    name: 'Clean thick towel or cloth for emergency delivery',
    nameNe: 'आकस्मिक सुत्केरीका लागि सफा बाक्लो तौलिया वा सुतीको कपडा',
    why: 'If the baby arrives before reaching hospital, someone needs something clean to receive the baby. Keep one folded under the hospital bag at all times from week 36.',
    whyNe: 'अस्पताल पुग्नुअघि नै बच्चा जन्मिएमा, बच्चालाई सुरक्षित रूपमा छोप्न र पुछ्न सफा कपडा चाहिन्छ। ३६ औं हप्तादेखि यो सधैं झोलाको साथमा राख्नुहोस्।'
  },
  {
    id: 103,
    name: 'Cord tie or clean string (get from FCHV at week 36 visit)',
    nameNe: 'नाइटो बाँध्ने धागो (महिला स्वास्थ्य स्वयंसेविकाबाट ३६ औं हप्तामा लिनुहोस्)',
    why: 'For tying the umbilical cord if emergency delivery happens at home or in a vehicle. Do NOT cut the cord — just tie it and rush to hospital. Ask your FCHV to give you one at your 36-week visit.',
    whyNe: 'गाडी वा घरमा आकस्मिक सुत्केरी भएमा नाइटो बाँध्न प्रयोग गरिन्छ। नाइटोलाई कदापि नकाट्नुहोस् - केवल धागोले बाँधेर तुरुन्तै अस्पताल लैजानुहोस्।'
  },
];

export const DECISION_TREE = {
  Q1: {
    question: 'How did labour start?',
    questionNe: 'व्यथा कसरी सुरु भयो वा के भइरहेको छ?',
    options: [
      { text: 'Contractions only, no bleeding, no fluid', textNe: 'व्यथा मात्र लागेको छ, रगत वा पानी बगेको छैन', next: 'Q2', type: 'normal' },
      { text: 'Water broke — clear fluid', textNe: 'योनीबाट सफा पानी बग्यो (पानी फुट्यो)', next: 'Q3', type: 'normal' },
      { text: 'Water broke — green, brown, or foul-smelling fluid', textNe: 'हरियो, खैरो वा गन्हाउने पानी बग्यो', result: 'GO_NOW', type: 'urgent' },
      { text: 'Heavy bleeding', textNe: 'अत्यधिक रगत बग्यो', result: 'CALL_102', type: 'urgent' },
    ],
  },
  Q2: {
    question: 'How far apart are contractions?',
    questionNe: 'व्यथा कति-कति समयको फरकमा आइरहेको छ?',
    options: [
      { text: 'More than 20 minutes apart, irregular', textNe: '२० मिनेटभन्दा बढीको फरकमा र अनियमित छ', result: 'REST_HOME', type: 'normal' },
      { text: '5–10 minutes apart, lasting 45–60 seconds, for 1 hour (first baby)', textNe: '५-१० मिनेटको फरकमा, १ मिनेटजति रहने (लगातार १ घण्टादेखि)', result: 'CALL_DOCTOR', type: 'uncertain' },
      { text: 'Less than 5 minutes apart', textNe: '५ मिनेटभन्दा कमको फरकमा र निकै कडा छ', result: 'GO_HOSPITAL', type: 'urgent' },
      { text: 'Second or third baby, any regular contractions', textNe: 'यो दोस्रो/तेस्रो बच्चा हो र व्यथा नियमित छ', result: 'GO_FAST', type: 'urgent' },
    ],
  },
  Q3: {
    question: 'How long ago did water break?',
    questionNe: 'पानी बगेको (फुटेको) कति समय भयो?',
    options: [
      { text: 'Less than 1 hour ago, no contractions', textNe: '१ घण्टाभन्दा कम भयो, व्यथा सुरु भएको छैन', result: 'CALL_DOCTOR', type: 'uncertain' },
      { text: 'More than 1 hour ago, no contractions', textNe: '१ घण्टाभन्दा बढी भयो, व्यथा लागेको छैन', result: 'GO_HOSPITAL', type: 'urgent' },
      { text: 'Contractions have also started', textNe: 'पानी बगेसँगै व्यथा पनि सुरु भयो', result: 'GO_HOSPITAL', type: 'urgent' },
    ],
  },
};

export const RESULTS = {
  GO_NOW: {
    title: 'GO NOW',
    titleNe: 'तुरुन्तै अस्पताल जानुहोस्',
    type: 'red',
    points: [
      'Grab the hospital bag — it should already be packed',
      'Call your doctor while someone else calls the ambulance',
      'Do not drive yourself',
      'Call the hospital admission desk to say you are coming',
    ],
    pointsNe: [
      'तयार पारेको अस्पतालको झोला तुरुन्तै लिनुहोस्',
      'सहयोगीलाई एम्बुलेन्स बोलाउन लगाउनुहोस् र डाक्टरलाई खबर गर्नुहोस्',
      'आफैं गाडी नचलाउनुहोस्, कसैको सहयोग लिनुहोस्',
      'अस्पतालको भर्ना कक्षमा फोन गरेर आफू आकस्मिक अवस्थामा आउँदै गरेको बताउनुहोस्',
    ],
    script: 'We are coming for delivery. Patient name [X], under Dr. [Y]. Arriving in approximately [Z] minutes. Please prepare the maternity ward.',
    scriptNe: 'हामी सुत्केरी गराउन आउँदैछौं। बिरामीको नाम [X], डाक्टर [Y] को बिरामी। हामी करिब [Z] मिनेटमा आइपुग्छौं। कृपया आकस्मिक कक्ष तयार राख्नुहोला।',
  },
  CALL_102: {
    title: 'CALL 102 NOW',
    titleNe: 'तुरुन्तै १०२ मा फोन गर्नुहोस्',
    type: 'red',
    points: [
      'Call 102 immediately — do not wait',
      'Lie down on your left side',
      'Do not try to drive',
      'Someone else should grab the bag while you call',
    ],
    pointsNe: [
      'नपर्खी तुरुन्तै १०२ मा फोन गरेर एम्बुलेन्स मगाउनुहोस्',
      'देब्रे कोल्टे परेर सुत्नुहोस्',
      'रक्तस्राव भएको बेला हिँड्ने वा गाडी चलाउने प्रयास नगर्नुहोस्',
      'तपाईं फोन गर्दै गर्दा अरुलाई झोला र कागजात तयार पार्न लगाउनुहोस्',
    ],
    script: 'Pregnant woman with heavy bleeding. Address is [location]. Nearest landmark is [X]. Please send ambulance immediately.',
    scriptNe: 'गर्भवती महिलालाई धेरै रगत बगिरहेको छ। हाम्रो ठेगाना [स्थान] हो। नजिकैको चिनिने ठाउँ [X] हो। कृपया छिटो एम्बुलेन्स पठाइदिनुहोस्।',
  },
  GO_HOSPITAL: {
    title: 'GO TO HOSPITAL NOW',
    titleNe: 'अहिले नै अस्पताल जानुहोस्',
    type: 'red',
    points: [
      'Grab the hospital bag — it should already be packed',
      'Call your doctor while someone else arranges transport',
      'Do not drive yourself',
      'Call the hospital admission desk to say you are coming',
    ],
    pointsNe: [
      'अस्पतालको झोला र रिपोर्टहरू लिनुहोस्',
      'गाडीको व्यवस्था गर्नुहोस् र बाटोमै डक्टरलाई फोन गर्नुहोस्',
      'सुरक्षित रूपमा अस्पताल पुग्ने व्यवस्था मिलाउनुहोस्',
      'अस्पताल पुग्नुअघि भर्ना कक्षमा फोन गरेर जानकारी दिनुहोस्',
    ],
    script: 'We are coming for delivery. Patient name [X], under Dr. [Y]. Arriving in approximately [Z] minutes.',
    scriptNe: 'हामी सुत्केरी गराउन आउँदैछौं। बिरामीको नाम [X], डाक्टर [Y] को निगरानीमा। करिब [Z] मिनेटमा आइपुग्छौं।',
  },
  GO_FAST: {
    title: 'GO NOW (Fast Labour)',
    titleNe: 'तुरुन्तै निस्कनुहोस् (छिटो प्रसूति हुने सम्भावना)',
    type: 'red',
    points: [
      'Second/third labours move much faster',
      'Grab the hospital bag and go immediately',
      'Call the doctor on the way',
    ],
    pointsNe: [
      'दोस्रो वा तेस्रो पटकको सुत्केरी व्यथा धेरै छिटो हुन्छ, ढिला नगर्नुहोस्',
      'झोला लिएर तुरुन्तै अस्पतालका लागि निस्कनुहोस्',
      'बाटोबाटै डक्टर वा अस्पताललाई खबर गर्नुहोस्',
    ],
    script: 'Second pregnancy, regular contractions have started. We are on the way to the hospital.',
    scriptNe: 'यो दोस्रो सुत्केरी हो, व्यथा नियमित सुरु भयो। हामी अस्पताल आउँदैछौं।',
  },
  CALL_DOCTOR: {
    title: 'CALL DOCTOR FIRST',
    titleNe: 'पहिले डक्टरलाई फोन गर्नुहोस्',
    type: 'amber',
    points: [
      'Call your OB/GYN or ANM now',
      'Keep the phone on and stay near your hospital bag',
      'Make sure your support person is with you or on their way',
      'Head to hospital when doctor advises or if things change fast',
    ],
    pointsNe: [
      'अहिले नै आफ्नो डक्टर वा नर्सलाई फोन गरी अवस्था बताउनुहोस्',
      'फोन आफूसँगै राख्नुहोस् र झोला तयार राख्नुहोस्',
      'आफ्नो सहयोगी वा श्रीमानलाई साथमै रहन भन्नुहोस्',
      'डाक्टरले बोलाएमा वा व्यथा कडा भएमा तुरुन्तै अस्पताल जानुहोस्',
    ],
    script: 'Labour has started. Contractions are [X] minutes apart, lasting about [X] seconds. My water has [broken / not broken]. What should I do?',
    scriptNe: 'व्यथा सुरु भयो। हरेक [X] मिनेटमा [X] सेकेन्ड जति दुख्छ। पानी [बगेको छ / बगेको छैन]। अब के गरौं डाक्टर साब?',
  },
  REST_HOME: {
    title: 'REST AT HOME',
    titleNe: 'घरमै आराम र निगरानी गर्नुहोस्',
    type: 'green',
    points: [
      'Time contractions — note start time, end time, gap between each',
      'Drink water and eat a light meal if possible',
      'Take a warm shower to ease early discomfort',
      'Call your doctor if contractions become regular at 10 min apart',
    ],
    pointsNe: [
      'व्यथा कति-कति समयमा आउँछ, घडी हेरेर टिपोट गर्नुहोस्',
      'पानी पिउनुहोस् र केही हल्का खानेकुरा खानुहोस्',
      'दुखाइ कम गर्न मनतातो पानीले नुहाउनुहोस्',
      'यदि व्यथा नियमित भई हरेक १० मिनेटमा आउन थाल्यो भने डाक्टरलाई फोन गर्नुहोस्',
    ],
    script: 'Contractions have started but are still far apart. I will monitor and call when they are 5 minutes apart.',
    scriptNe: 'व्यथा सुरु भएको छ तर अझै निकै समयको फरकमा छ। म निगरानी गर्छु र ५ मिनेटको फरकमा आउन थालेपछि खबर गर्छु।',
  },
};

export const RIDE_GUIDE = [
  { step: 1, title: 'Confirm labour is real', titleNe: 'व्यथा वास्तविक हो भन्ने पक्का गर्नुहोस्', who: 'Partner', whoNe: 'श्रीमान/सहयोगी', desc: 'Time at least 3 contractions. If they are regular and getting stronger, it is real. Stop timing and start moving.', descNe: 'कम्तीमा ३ पटकसम्म व्यथाको समय हेर्नुहोस्। यदि यो नियमित छ र दुखाइ बढ्दै गएको छ भने, यो वास्तविक व्यथा हो। अब ढिला नगरी अस्पताल जाने तयारी गर्नुहोस्।' },
  { step: 2, title: 'Call the doctor', titleNe: 'डाक्टरलाई फोन गर्नुहोस्', who: 'Partner', whoNe: 'श्रीमान/सहयोगी', desc: 'While the mother breathes through contractions, the partner calls the OB/GYN. Say: "Labour has started. Contractions are [X] minutes apart. We are heading to [hospital name]. Please alert the ward."', descNe: 'आमाले सास फेर्ने अभ्यास गर्दा, सहयोगीले डाक्टरलाई फोन गर्नुपर्छ। भन्नुहोस्: "व्यथा सुरु भयो, हामी अस्पताल आउँदैछौं। कृपया वार्डमा जानकारी दिनुहोला।"' },
  { step: 3, title: 'Grab the bag and documents', titleNe: 'झोला र रिपोर्टहरू लिनुहोस्', who: 'Partner', whoNe: 'श्रीमान/सहयोगी', desc: 'The hospital bag should already be packed. Grab it, grab the documents folder, and grab cash. Do not repack. Do not look for missing items — go.', descNe: 'तयार पारेको झोला, सबै मेडिकल रिपोर्ट र केही नगद पैसा लिनुहोस्। सामान फेरि मिलाउन नथाल्नुहोस्, जे छ त्यही लिएर तुरुन्त निस्कनुहोस्।' },
  { step: 4, title: 'Call the hospital', titleNe: 'अस्पतालमा फोन गर्नुहोस्', who: 'Partner', whoNe: 'श्रीमान/सहयोगी', desc: 'Call the admission desk number you saved. Say: "We are coming for delivery. Patient name [X], arriving in [Z] minutes." This gets a bed and staff ready before you arrive.', descNe: 'अस्पतालको भर्ना कक्षमा फोन गर्नुहोस्। यसले तपाईं पुग्नुअघि नै बेड र नर्सहरूलाई तयार रहन मद्दत पुग्छ।' },
  { step: 5, title: 'Inform family', titleNe: 'परिवारलाई खबर गर्नुहोस्', who: 'Partner', whoNe: 'श्रीमान/सहयोगी', desc: 'One call or message to the immediate family. Keep it short. More updates later. The mother does not need to make any calls right now.', descNe: 'परिवारका सदस्यलाई एउटा छोटो सन्देश पठाउनुहोस्। धेरै फोन गरेर नबस्नुहोस्। आमालाई अहिले शान्त रहन दिनुहोस्।' },
  { step: 6, title: 'Support during the ride', titleNe: 'यात्रामा सहयोग गर्नुहोस्', who: 'Partner', whoNe: 'श्रीमान/सहयोगी', desc: 'Sit beside the mother in the back. Apply back pressure between contractions using your fist or the massage roller. Remind her to breathe slowly. Do not speed dangerously — steady is safer.', descNe: 'आमाको छेउमा बसेर ढाड सुम्सुम्याइदिनुहोस् वा हल्का मसाज गरिदिनुहोस्। उनलाई बिस्तारै सास फेर्न सम्झाउनुहोस्। गाडी धेरै तीव्र गतिमा नचलाउनुहोस्, सुरक्षित यात्रा महत्त्वपूर्ण छ।' },
  { step: 7, title: 'Arrive at hospital', titleNe: 'अस्पताल पुगेपछि', who: 'Both', whoNe: 'दुवै', desc: 'Go directly to the maternity emergency entrance, not the main reception. Say the patient name and doctor name at the desk. Hand over the ANC card and blood group card first — these are the two things they ask for immediately.', descNe: 'सिधै "मयाटरनिटी इमरजेन्सी" (प्रसूति आकस्मिक कक्ष) मा जानुहोस्। अस्पतालमा सबैभन्दा पहिले गर्भवती जाँच कार्ड (ANC Card) र रगत समूहको रिपोर्ट देखाउनुहोस्।' },
];

export const BREATHING_GUIDE = [
  {
    id: 1,
    title: 'Slow breathing',
    titleNe: 'बिस्तारै सास फेर्ने',
    when: 'Early labour, contractions 10–20 min apart',
    whenNe: 'प्रारम्भिक व्यथा (१०-२० मिनेटको फरकमा)',
    inhale: 4,
    hold: 0,
    exhale: 6,
    cue: 'Breathe in slowly through your nose... breathe out like you are fogging a mirror.',
    cueNe: 'नाकबाट बिस्तारै सास तान्नुहोस्... र ऐनामा बाफ निकालेजस्तै मुखबाट बिस्तारै छोड्नुहोस्।',
  },
  {
    id: 2,
    title: 'Light breathing',
    titleNe: 'हल्का सास फेर्ने',
    when: 'Active labour, contractions 5 min apart',
    whenNe: 'सक्रिय व्यथा (५ मिनेटको फरकमा)',
    inhale: 2,
    hold: 0,
    exhale: 2,
    cue: 'Light, quick breaths. In and out through the mouth. Do not hold your breath.',
    cueNe: 'छोटो र हल्का सास फेर्नुहोस्। मुखबाटै लिने र छोड्ने गर्नुहोस्। सास नरोक्नुहोस्।',
  },
  {
    id: 3,
    title: 'Pushing breath',
    titleNe: 'बल गर्दा सास फेर्ने',
    when: 'During pushing stage',
    whenNe: 'बच्चा जन्माउन बल गर्ने बेला',
    inhale: 3,
    hold: 6,
    exhale: 3,
    cue: 'Big breath in, hold, push down like you are trying to open a tight jar — then release slowly.',
    cueNe: 'लामो सास भित्र तान्नुहोस्, रोक्नुहोस् र दिसा गर्दा जस्तै तलतिर बल लगाउनुहोस्, त्यसपछि बिस्तारै सास छोड्नुहोस्।',
  },
];