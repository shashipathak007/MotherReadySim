export type BagCategory = 'Clothing' | 'Hygiene' | 'Comfort' | 'Baby' | 'LegalDocs' | 'HealthDocs' | 'ClinicalDocs';

export interface BagItem {
  id: number;
  category: BagCategory;
  name: string;
  nameNe: string;
  why: string;
  whyNe: string;
  emoji?: string;
}

export const CATEGORY_COLORS: Record<BagCategory, { text: string; bg: string }> = {
  Clothing: { text: '#2B6D45', bg: '#EBF5ED' },
  Hygiene: { text: '#1C6B9E', bg: '#EAF3FA' },
  Comfort: { text: '#6B5DD3', bg: '#FDF2F4' },
  Baby: { text: '#9A5A17', bg: '#FBF2E1' },
  LegalDocs: { text: '#127163', bg: '#E1F5F2' },
  HealthDocs: { text: '#127163', bg: '#E1F5F2' },
  ClinicalDocs: { text: '#127163', bg: '#E1F5F2' },
};

export const CATEGORY_NAMES_NE: Record<BagCategory, string> = {
  Clothing: 'लत्ताकपडा',
  Hygiene: 'सरसफाइ',
  Comfort: 'सुविधा र आराम',
  Baby: 'शिशुका सामग्री',
  LegalDocs: 'कानुनी कागजातहरू',
  HealthDocs: 'स्वास्थ्य कार्डहरू',
  ClinicalDocs: 'जाँच रिपोर्टहरू'
};

export const BAG_ITEMS: BagItem[] = [
  // CLOTHING
  {
    id: 1,
    category: 'Clothing',
    name: 'Loose cotton nightgown or front-open kurta (2–3 pcs)',
    nameNe: 'सुतीको खुकुलो मेक्सी वा अगाडिबाट खुल्ने कुर्ता (२-३ सेट)',
    why: 'Easy to open for breastfeeding, doctor examinations, and IV lines. Tight clothing is impossible to manage after delivery.',
    whyNe: 'बच्चालाई दूध खुवाउन, डाक्टरले जाँच गर्न र स्लाइन चढाउन सजिलो हुन्छ। सुत्केरी भएपछि कसिलो लुगा लगाउन र फुकाल्न एकदमै गाह्रो हुन्छ।',
    emoji: '👘'
  },
  {
    id: 2,
    category: 'Clothing',
    name: 'High-waisted soft underwear (3–4 pcs)',
    nameNe: 'कम्मरसम्म आउने नरम भित्री लुगा (पेन्टी) (३-४ वटा)',
    why: 'Supports the postpartum belly and sits comfortably above stitches from normal delivery or C-section.',
    whyNe: 'यसले सुत्केरीपछिको पेटलाई धकेलेर राख्न मद्दत गर्छ र नर्मल डेलिभरी वा अप्रेसनको घाउमा बिझाउँदैन।',
    emoji: '🩲'
  },
  {
    id: 3,
    category: 'Clothing',
    name: 'Warm shawl or light sweater',
    nameNe: 'न्यानो सल वा हल्का स्विटर',
    why: 'Labour rooms and recovery wards are kept cold. You will need warmth especially during long labour at night.',
    whyNe: 'लेबर रुम र वार्डहरू अलि चिसो हुन्छन्। विशेषगरी राति लामो समयसम्म व्यथा लाग्दा आमालाई चिसोबाट बचाउन न्यानो लुगा चाहिन्छ।',
    emoji: '🧣'
  },
  {
    id: 4,
    category: 'Clothing',
    name: 'Rubber slippers or flat sandals',
    nameNe: 'चिप्लिने डर नहुने रबरका चप्पल',
    why: 'Non-slip and easy to slide on when bending down is painful after delivery. Hospital floors are often wet.',
    whyNe: 'अस्पतालमा भुइँ भिजेको हुन सक्छ। अगाडि-पछाडि बन्द भएका जुत्ता लगाउन सुत्केरी भइसकेपछि निहुरिन गाह्रो हुने भएकाले सिधै छिराउन मिल्ने चप्पल सजिलो हुन्छ।',
    emoji: '🩴'
  },
  {
    id: 5,
    category: 'Clothing',
    name: 'Warm socks (2 pairs)',
    nameNe: 'न्यानो मोजा (१-२ जोडी)',
    why: 'Feet get very cold during long labour, especially when an IV drip is running.',
    whyNe: 'व्यथा लागेको बेला र स्लाइन चढाउँदा खुट्टा एकदमै चिसो हुन्छ, त्यसैले मोजा लगाइराख्नुपर्छ।',
    emoji: '🧦'
  },
  // HYGIENE
  {
    id: 6,
    category: 'Hygiene',
    name: 'Maternity overnight pads (2 packs, heavy-flow)',
    nameNe: 'सुत्केरीको लागि विशेष म्याटरनिटी प्याड (२ प्याकेट)',
    why: 'Postpartum bleeding (lochia) is much heavier than a normal period and lasts 4–6 weeks. Regular thin pads will not absorb enough.',
    whyNe: 'सुत्केरी भइसकेपछि महिनावारीको बेलाभन्दा धेरै रगत बग्छ र यो करिब एक महिनासम्म चल्छ। साधारण पातलो प्याडले रगत थाम्न सक्दैन।',
    emoji: '🩹'
  },
  {
    id: 7,
    category: 'Hygiene',
    name: 'Perineal rinse bottle (peri bottle)',
    nameNe: 'शौचालय जाँदा पानी खन्याउने सानो बोतल',
    why: 'For gently rinsing the stitched area after using the toilet. Wiping causes pain and infection risk — rinsing with warm water is much safer.',
    whyNe: 'पिसाब गरेपछि टाँका लगाएको ठाउँ पखाल्न। कपडा वा टिस्युले पुछ्दा दुख्ने र घाउ पाक्ने डर हुन्छ, त्यसैले मनतातो पानीले बिस्तारै पखाल्नु राम्रो हो।',
    emoji: '🚿'
  },
  {
    id: 8,
    category: 'Hygiene',
    name: 'Nursing bra, 2 pcs, front-clip style',
    nameNe: 'दूध खुवाउन सजिलो हुने अगाडिबाट खुल्ने ब्रा (२ वटा)',
    why: 'Milk comes in on day 2–3 and breasts become very full and tender. A front-clip nursing bra allows easy breastfeeding.',
    whyNe: 'बच्चा जन्माएको २-३ दिनपछि दूध आउन थाल्दा स्तन निकै भारी र दुख्ने हुन्छ। यस्तो बेला अगाडिबाट हुक भएको ब्रा ले दूध खुवाउन सजिलो हुन्छ।',
    emoji: '👙'
  },
  {
    id: 9,
    category: 'Hygiene',
    name: 'Breast pads (disposable or washable)',
    nameNe: 'ब्रेस्ट प्याड (दूध चुहिनबाट जोगाउने प्याड)',
    why: 'Milk leaks without warning, especially when the baby cries. Breast pads prevent wet patches.',
    whyNe: 'कहिलेकाहीँ बच्चा रुँदा वा आफैं पनि दूध चुहिएर लुगा भिज्न सक्छ। ब्रेस्ट प्याड राखेपछि लुगा फोहोर हुँदैन।',
    emoji: '🤱'
  },
  {
    id: 10,
    category: 'Hygiene',
    name: 'Toothbrush, toothpaste, mild soap, small towel',
    nameNe: 'ब्रश, मञ्जन, साबुन र सानो तौलिया',
    why: 'Basic hygiene is essential for the mother\'s recovery during a 2–5 day hospital stay.',
    whyNe: 'अस्पतालमा २ देखि ५ दिनसम्म बस्नुपर्ने हुन सक्छ। यस्तो बेला आफ्नो शरीर सफा राख्न यी कुराहरू नभई हुँदैन।',
    emoji: '🪥'
  },
  {
    id: 11,
    category: 'Hygiene',
    name: 'Hair ties or clips',
    nameNe: 'कपाल बाँध्ने रबर, पोनीटेल वा क्लिप',
    why: 'Hair gets in the way during pushing and recovery.',
    whyNe: 'व्यथा लागेर बल गर्ने बेला र सुत्केरीपछि पनि छरिएको कपालले एकदमै डिस्टर्ब गर्छ।',
    emoji: '🎀'
  },
  {
    id: 12,
    category: 'Hygiene',
    name: 'Lip balm',
    nameNe: 'लिप बाम (ओठ फुट्न नदिने क्रिम)',
    why: 'Breathing exercises, oxygen masks, and dry hospital air cause lips to crack very fast during labour.',
    whyNe: 'व्यथा लाग्दा सास तान्ने-फाल्ने गर्दा र अस्पतालको हावाले गर्दा ओठ सुक्खा भएर फुट्न सक्छ।',
    emoji: '💄'
  },
  {
    id: 13,
    category: 'Hygiene',
    name: 'Coconut or mustard oil (small bottle)',
    nameNe: 'नरिवल वा तोरीको तेल (सानो सिसी)',
    why: 'Used for perineal massage, body care after delivery, and dryness relief. Trusted in Nepali postpartum tradition.',
    whyNe: 'सुत्केरी भएपछि शरीर मालिस गर्न र छाला फुस्रो हुन नदिन तेलले धेरै सहयोग गर्छ। यो हाम्रो नेपाली चलन पनि हो।',
    emoji: '🥥'
  },

  // COMFORT
  {
    id: 14,
    category: 'Comfort',
    name: 'Pillow from home (1–2)',
    nameNe: 'आफ्नै घरको सिरानी (१-२ वटा)',
    why: 'Hospital pillows are thin and flat. A familiar pillow reduces anxiety and helps with positioning during labour and breastfeeding.',
    whyNe: 'अस्पतालको सिरानी अलि चेप्टो र असजिलो हुन सक्छ। घरकै सिरानी लग्दा व्यथा लागेको बेला र दूध खुवाउँदा सजिलो हुन्छ र घरकै झल्को दिन्छ।',
    emoji: '🛌'
  },
  {
    id: 15,
    category: 'Comfort',
    name: 'Massage oil or back roller',
    nameNe: 'मालिस गर्ने तेल र ब्याक रोलर',
    why: 'Back pressure during contractions is very painful. The partner can use oil or a roller to relieve lower back pain.',
    whyNe: 'व्यथा लाग्दा कम्मर र पछाडिको भाग एकदम दुख्छ। सँगै बस्ने मान्छेले तेल वा रोलरले बिस्तारै मालिस गरिदिँदा दुखाइ धेरै कम हुन्छ।',
    emoji: '💆‍♀️'
  },
  {
    id: 16,
    category: 'Comfort',
    name: 'Thermos flask',
    nameNe: 'थर्मस',
    why: 'For warm water or soup. Hospital water is often cold and Nepali postpartum tradition avoids cold fluids after delivery.',
    whyNe: 'सुत्केरी भएपछि चिसो पानी पिउनुहुँदैन। मनतातो पानी वा सुप सधैं तातो राख्नको लागि थर्मस एकदमै जरुरी छ।',
    emoji: '🫖'
  },
  {
    id: 17,
    category: 'Comfort',
    name: 'Tiffin box and snacks for family',
    nameNe: 'टिफिन बक्स र कुरुवाको लागि खाजा',
    why: 'Many government hospitals in Nepal do not provide meals. Family members waiting 10–20 hours need food from home.',
    whyNe: 'धेरै अस्पतालमा कुरुवाको लागि खान दिइँदैन। बाहिर कुरेर बस्ने मान्छे भोकभोकै हुनाले घरबाटै खाजा लिएर जानुपर्छ।',
    emoji: '🍱'
  },
  {
    id: 18,
    category: 'Comfort',
    name: 'Phone charger and power bank',
    nameNe: 'फोन चार्जर र पावर बैंक',
    why: 'Phones die fast when the family is calling continuously with updates.',
    whyNe: 'सुत्केरी भएपछि आफन्तहरूलाई खबर गर्नुपर्ने र फोन आउने भएकाले मोबाइलको ब्याट्री छिट्टै सकिन्छ।',
    emoji: '🔋'
  },
  {
    id: 19,
    category: 'Comfort',
    name: 'Earphones with calming playlist',
    nameNe: 'इयरफोन र मोबाइलमा सुमधुर गीत',
    why: 'Music or guided breathing audio significantly helps manage pain during early labour contractions.',
    whyNe: 'सुरुसुरुमा व्यथा लाग्दा आँखा चिम्लिएर राम्रो गीत वा भजन सुन्दा दुखाइ र डर धेरै कम हुन्छ।',
    emoji: '🎧'
  },
  {
    id: 20,
    category: 'Comfort',
    name: 'Notebook and pen',
    nameNe: 'एउटा सानो कापी र कलम',
    why: 'Write down everything the doctor says. Stress causes people to forget instructions immediately. Record medication names, doses, and follow-up dates.',
    whyNe: 'हतार र डरको बेलामा डाक्टरले भनेको कुरा बिर्सिन सकिन्छ। त्यसैले दबाइ खुवाउने समय र डाक्टरको सल्लाह लेखेर राख्नुपर्छ।',
    emoji: '📓'
  },
  // BABY
  {
    id: 21,
    category: 'Baby',
    name: 'Soft muslin cloth squares (4–5 pcs)',
    nameNe: 'सफा र नरम तोलिया वा मलमलको कपडा (४-५ वटा)',
    why: 'Used as swaddle, nappy liner, burp cloth, and skin-to-skin cover. The most versatile item in the baby bag.',
    whyNe: 'बच्चालाई बेरेर राख्न, दूध खुवाउँदा पुछ्न र छातीमा टाँसेर राख्न यो एकदमै काम लाग्छ।',
    emoji: '🧻'
  },
  {
    id: 22,
    category: 'Baby',
    name: 'Newborn onesies or side-tie suits (2–3 pcs)',
    nameNe: 'नवजात शिशुको लागि भोटो वा अगाडिबाट खुल्ने लुगा (२-३ सेट)',
    why: 'Side-tie or front-snap designs are easiest when the baby is very small and needs to be dressed quickly.',
    whyNe: 'भर्खर जन्मेको सानो बच्चालाई टाउकोबाट छिराउने लुगा लगाउन गाह्रो हुन्छ। त्यसैले तुना बाँध्ने वा अगाडिबाट खुल्ने लुगा सजिलो हुन्छ।',
    emoji: '👕'
  },
  {
    id: 23,
    category: 'Baby',
    name: 'Baby cap, woolen or cotton',
    nameNe: 'बच्चाको टोपी (सुती वा ऊनको)',
    why: 'Newborns lose heat rapidly through their heads. A cap must be worn immediately after birth.',
    whyNe: 'भर्खर जन्मेको बच्चाको टाउकोबाट धेरै तापक्रम बाहिर जाने हुनाले जन्मेको बित्तिकै टोपी लगाइदिनुपर्छ।',
    emoji: '🧢'
  },
  {
    id: 24,
    category: 'Baby',
    name: 'Mittens and socks for newborn',
    nameNe: 'बच्चाको लागि पन्जा र मोजा',
    why: 'Prevents the baby from scratching their own face and keeps tiny feet warm.',
    whyNe: 'बच्चाले नङले आफ्नै अनुहार कोर्न सक्छ र उसको हातखुट्टा एकदमै चिसो हुने भएकाले पन्जा र मोजा चाहिन्छ।',
    emoji: '🧤'
  },
  {
    id: 25,
    category: 'Baby',
    name: 'Soft baby blanket or swaddle wrap (2 pcs)',
    nameNe: 'नरम ब्ल्याङ्केट वा बेर्ने कपडा (२ वटा)',
    why: 'Swaddling mimics the womb and helps newborns feel secure and sleep better.',
    whyNe: 'कपडाले प्याक्क बेरेर राख्दा बच्चालाई आमाको पेटभित्रै भएको जस्तो महसुस हुन्छ र नडराईकन राम्रोसँग सुत्छ।',
    emoji: '🛏️'
  },
  {
    id: 26,
    category: 'Baby',
    name: 'Newborn diapers (1 small pack)',
    nameNe: 'नवजात शिशुको डाइपर (१ सानो प्याकेट)',
    why: 'Newborns urinate and pass meconium frequently in the first hours — diapers are needed immediately.',
    whyNe: 'सुरुका केही घण्टामा बच्चाले कालो दिसा (मेकोनियम) र धेरै पिसाब गर्ने हुनाले जन्मेको केही समयपछि नै डाइपर चाहिन्छ।',
    emoji: '👶'
  },
  {
    id: 27,
    category: 'Baby',
    name: 'Unscented baby wipes',
    nameNe: 'बास्ना नआउने बेबी वाइप्स',
    why: 'For gentle cleaning before proper bathing begins. Must be unscented as newborn skin is extremely sensitive.',
    whyNe: 'सुरुमा बच्चालाई ननुहाईकन पुछेर मात्र सफा गरिन्छ। त्यसको लागि बास्ना नआउने खालको नरम वाइप्स चाहिन्छ।',
    emoji: '🧻'
  },
  {
    id: 28,
    category: 'Baby',
    name: 'Cotton balls',
    nameNe: 'कपास (कटन) का डल्लाहरू',
    why: 'For cleaning the umbilical cord stump, eyes, and other delicate areas. Softer and safer than cloth.',
    whyNe: 'बच्चाको नाइँटो, आँखा र पुछ्नका लागि सफा पानीमा भिजाएको कपास सबैभन्दा सुरक्षित हुन्छ।',
    emoji: '🫧'
  },

  // LEGAL DOCUMENTS
  {
    id: 101,
    category: 'LegalDocs',
    name: "Mother's citizenship card (Nagarikta)",
    nameNe: 'आमाको नागरिकता',
    why: 'Required for hospital registration. Without it, admission is delayed and you cannot access the Aama Programme free delivery scheme.',
    whyNe: 'अस्पताल भर्ना हुन यो अनिवार्य कागजात हो। नागरिकता नभएमा सरकारले दिने \'आमा कार्यक्रम\' को सुत्केरी भत्ता र यातायात खर्च पाइँदैन।',
    emoji: '🪪'
  },
  {
    id: 102,
    category: 'LegalDocs',
    name: "Husband's citizenship card",
    nameNe: 'श्रीमानको नागरिकता',
    why: "Required for the baby's birth certificate registration. Some hospitals also require it for the mother's admission file.",
    whyNe: 'हस्पिटलमा बच्चाको रिपोर्ट बनाउन र पछि वडामा जन्मदर्ता गराउन श्रीमानको नागरिकता चाहिन्छ।',
    emoji: '🪪'
  },
  {
    id: 103,
    category: 'LegalDocs',
    name: 'Ward or Palika recommendation letter',
    nameNe: 'वडा वा पालिकाको सिफारिस पत्र',
    why: 'Required by most government hospitals to verify local residency for the Aama Programme.',
    whyNe: 'सरकारी अस्पतालबाट सुत्केरी खर्च र भत्ता पाउनको लागि \'यो हाम्रो पालिकाको मान्छे हो\' भन्ने प्रमाण चाहिन्छ।',
    emoji: '✉️'
  },
  {
    id: 104,
    category: 'LegalDocs',
    name: 'Marriage registration certificate',
    nameNe: 'विवाह दर्ता',
    why: "Needed when applying for the baby's birth certificate at the municipality or ward office after discharge.",
    whyNe: 'अस्पतालबाट घर गएपछि बच्चाको जन्मदर्ता गराउन विवाह दर्ता वा श्रीमान-श्रीमतीको नाता प्रमाणित कागज चाहिन्छ।',
    emoji: '📝'
  },
  {
    id: 108,
    category: 'LegalDocs',
    name: "Bank account details (mother's or husband's)",
    nameNe: 'बैंकको चेक वा खाता नम्बर (आमाको)',
    why: 'The Aama cash incentive is transferred directly to a bank account in most districts.',
    whyNe: 'अचेल सरकारले दिने सुत्केरी भत्ता नगदै नदिएर आमाको बैंक खातामा पठाइदिने भएकाले बैंकको विवरण (चेक बुक) चाहिन्छ।',
    emoji: '🏦'
  },

  // HEALTH CARDS & REFERRALS
  {
    id: 105,
    category: 'HealthDocs',
    name: 'Antenatal card from health post (ANC card)',
    nameNe: 'गर्भ जाँच कार्ड (ANC Card / ममता कार्ड)',
    why: 'The single most important document. Doctors use it immediately to understand your history, risk factors, and blood type.',
    whyNe: 'यो सबैभन्दा महत्त्वपूर्ण कार्ड हो। यसमा आमाको रगत, प्रेसर र बच्चाको अवस्थाबारे लेखिएको हुनाले डाक्टरलाई सजिलो हुन्छ।',
    emoji: '🏥'
  },
  {
    id: 106,
    category: 'HealthDocs',
    name: 'Minimum 8 ANC checkup stamps',
    nameNe: 'कम्तीमा ८ पटक गर्भ जाँच गराएको प्रमाण',
    why: 'Required to be eligible for the full cash incentive of NPR 1,000–3,000.',
    whyNe: 'सरकारले दिने प्रोत्साहन र यातायात खर्च (१००० देखि ३००० रुपैयाँसम्म) पाउन कम्तीमा ८ पटक जाँच गरेको छाप अनिवार्य हुनुपर्छ।',
    emoji: '❂'
  },
  {
    id: 107,
    category: 'HealthDocs',
    name: 'Referral letter from health post or PHC',
    nameNe: 'स्वास्थ्य चौकीको रिफर लेटर (सिफारिस)',
    why: 'If being transferred from a smaller facility, this letter is required for admission at district or zonal hospitals.',
    whyNe: 'गाउँको स्वास्थ्य चौकीमा सुत्केरी हुन नसकेर ठूलो अस्पताल धाउनुपर्यो भने, त्यो रिफर गरेको कागज भएमा मात्र अस्पतालले भर्ना लिन्छ।',
    emoji: '✉️'
  },

  // CLINICAL REPORTS
  {
    id: 110,
    category: 'ClinicalDocs',
    name: 'All ultrasound reports, especially latest scan',
    nameNe: 'सबै भिडियो एक्स-रे (Ultrasound) का रिपोर्टहरू',
    why: "The latest ultrasound shows baby's position, weight, placenta location, and fluid. Doctors need this to decide the delivery plan.",
    whyNe: 'बच्चा उल्टो छ कि सुल्टो, साल कता छ र पानी कति छ भनेर हेर्न डाक्टरलाई अन्तिम तिरको भिडियो एक्स-रे रिपोर्ट चाहिन्छ।',
    emoji: '🩻'
  },
  {
    id: 111,
    category: 'ClinicalDocs',
    name: 'Blood group card',
    nameNe: 'ब्लड ग्रुप लेखिएको रिपोर्ट',
    why: 'Critical if emergency transfusion is needed. Knowing the blood group in advance saves precious minutes.',
    whyNe: 'सुत्केरी हुँदा धेरै रगत बगेर एक्कासी रगत चढाउनुपर्यो भने पहिले नै ब्लड ग्रुप थाहा भएमा समय बच्छ र ज्यान जोगिन्छ।',
    emoji: '📄'
  },
  {
    id: 112,
    category: 'ClinicalDocs',
    name: 'CBC and haemoglobin report',
    nameNe: 'रगतको कमी (हेमोग्लोबिन) जाँचेको रिपोर्ट',
    why: 'Anaemia is very common and significantly affects delivery planning and blood loss risk management.',
    whyNe: 'महिलाहरूमा रगतको कमी धेरै हुने भएकाले सुत्केरी हुँदा रगतको प्रबन्ध गर्नुपर्छ कि पर्दैन भनेर डाक्टरले यो रिपोर्ट हेर्छन्।',
    emoji: '📊'
  },
  {
    id: 113,
    category: 'ClinicalDocs',
    name: 'HIV and Hepatitis B test result',
    nameNe: 'एचआईभी (HIV) र हेपाटाइटिस \'बी\' को रिपोर्ट',
    why: 'Mandatory before delivery at all government hospitals. Without it, delivery may be delayed.',
    whyNe: 'सुत्केरी गराउने डाक्टर-नर्सको सुरक्षा र स्वास्थ्यको लागि सबै अस्पतालमा यो रिपोर्ट नभई भर्ना नै लिँदैनन्।',
    emoji: '🛡️'
  },
  {
    id: 114,
    category: 'ClinicalDocs',
    name: 'Urine routine and culture report',
    nameNe: 'पिसाब जाँचेको रिपोर्ट',
    why: 'UTIs are common in late pregnancy and must be treated before delivery.',
    whyNe: 'यदि पिसाबमा इन्फेक्सन (UTI) छ भने बच्चालाई असर नपरोस् भनेर डाक्टरले सुत्केरी हुनुअघि नै औषधि चलाउन सक्छन्।',
    emoji: '📝'
  },
  {
    id: 115,
    category: 'ClinicalDocs',
    name: 'Previous C-section or surgery records',
    nameNe: 'पहिले अपरेसन भएको भए पुरानो रेकर्ड',
    why: 'If you have had a previous C-section, the doctor must know the incision type to decide if VBAC is safe.',
    whyNe: 'यदि पहिले अपरेसन (सिजेरियन) गरेर बच्चा जन्माएको हो भने, कुन तरिकाले काटेको थियो भनेर हेर्न र फेरि अपरेसन गर्ने कि नर्मल गराउने भनेर निर्णय गर्न पुरानो रेकर्ड चाहिन्छ।',
    emoji: '📑'
  },
  {
    id: 116,
    category: 'ClinicalDocs',
    name: 'Current medication list',
    nameNe: 'अहिले खाइरहेको औषधिको नामहरू',
    why: 'Iron tablets, calcium, thyroid medication, or any allergy history must be known to avoid dangerous drug interactions.',
    whyNe: 'आइरन, क्याल्सियमबाहेक थाइरोइड वा प्रेसरको औषधि खाइरहनु भएको छ वा केही औषधिको एलर्जी छ भने डाक्टरलाई थाहा हुनुपर्छ।',
    emoji: '💊'
  },
];

export interface DoNotPackItem {
  id: number;
  name: string;
  nameNe: string;
  whyNot: string;
  whyNotNe: string;
  emoji?: string;
}

export const DO_NOT_PACK_ITEMS: DoNotPackItem[] = [
  {
    id: 1,
    name: 'Strong perfume or scented products',
    nameNe: 'कडा बास्ना आउने पर्फ्युम वा साबुन',
    whyNot: 'Newborn airways are extremely sensitive. Strong scents can irritate their developing lungs and cause respiratory distress in the first hours of life.',
    whyNotNe: 'भर्खर जन्मेको बच्चाको फोक्सो असर गर्नसक्ने खालको हुन्छ। आमाले कडा पर्फ्युम लगाउँदा बच्चालाई सास फेर्न गाह्रो हुन्छ र एलर्जी हुन सक्छ।',
    emoji: '⚱'
  },
  {
    id: 2,
    name: 'Underwired bra',
    nameNe: 'अप्ठ्यारो र तार (Underwire) भएको ब्रा',
    whyNot: 'When milk comes in on day 2–3, breasts become very engorged. Underwires press on milk ducts causing blockages (mastitis) and extreme pain.',
    whyNotNe: 'सुत्केरी भएपछि दूध भरिएर आउँदा यस्तो ब्रा ले दूधको नसाहरू च्यापेर साह्रै दुख्ने र पाक्ने (Mastitis) खतरा हुन्छ।',
    emoji: '👙'
  },
  {
    id: 3,
    name: 'Regular thin sanitary pads',
    nameNe: 'साधारण पातलो प्याड',
    whyNot: 'Postpartum bleeding is far heavier than a normal period. Regular pads soak through in minutes. Only thick maternity-specific pads are safe.',
    whyNotNe: 'सुत्केरी भएपछि धेरै रगत बग्ने भएकाले साधारण प्याडले एकैछिन पनि थाम्न सक्दैन र लुगा बिग्रिन्छ। त्यसैले बाक्लो सुत्केरी प्याड नै चाहिन्छ।',
    emoji: '🩹'
  },
  {
    id: 4,
    name: 'Tight jeans or fitted trousers',
    nameNe: 'कसिलो जिन्स वा टाइट पाइन्ट',
    whyNot: 'After a C-section incision or perineal stitches, any tight clothing on the lower body is impossible to wear and causes severe pain.',
    whyNotNe: 'नर्मल डेलिभरीमा टाँका लगाएको होस् वा अपरेसन गरेको होस्, टाइट जिन्स लगाउनै सकिँदैन र घाउमा च्यापेर साह्रै दुख्छ।',
    emoji: '👖'
  },
  {
    id: 5,
    name: 'Baby powder (talcum powder)',
    nameNe: 'बेबी पाउडर वा जुनसुकै पाउडर',
    whyNot: 'Fine talc particles are inhaled into the baby\'s developing lungs, increasing risk of respiratory problems. Not recommended by doctors for newborns.',
    whyNotNe: 'पाउडर उडेर बच्चाको नाक हुँदै फोक्सोमा पुग्छ र दम जस्ता स्वाश हुने समस्या ल्याउँछ। त्यसैले आजभोलि डाक्टरहरू बच्चालाई पाउडर लगाउन दिँदैनन्।',
    emoji: '💨'
  },
  {
    id: 6,
    name: 'Kajal or kohl for baby\'s eyes',
    nameNe: 'आँखामा लगाउने गाजल',
    whyNot: 'A common traditional practice, but kajal contains lead compounds which are absorbed through delicate newborn skin around the eyes, causing lead poisoning.',
    whyNotNe: 'हाम्रो चलन भए पनि गाजलमा हुने सिसा (Lead) जस्ता केमिकलले बच्चाको आँखा वरपर इन्फेक्सन गराउने र दिमागलाई नै असर गर्ने खतरा हुन्छ।',
    emoji: '👁️'
  },
  {
    id: 7,
    name: 'Honey or ghee to feed newborn orally',
    nameNe: 'बच्चालाई सुरुमै चाटाउने मह वा घिउ',
    whyNot: 'Honey can contain Clostridium botulinum spores causing infant botulism — potentially fatal in babies under 1 year. Ghee fed before breastfeeding is established causes choking and aspiration.',
    whyNotNe: 'महमा हुने किटाणुले सानो बच्चालाई गम्भीर बिरामी बनाउन सक्छ, र सुरुमै घिउ खुवाउँदा सर्केर फोक्सोमा गई ज्यान जान सक्छ। सुरुमा आमाको बिगौती दूध मात्र खुवाउनुपर्छ।',
    emoji: '🍯'
  },
  {
    id: 8,
    name: 'High heels or closed formal shoes',
    nameNe: 'हाइ हिल वा कसिलो जुत्ता',
    whyNot: 'Hospital floors are wet and slippery. Falls after delivery are dangerous when the body is weakened. Feet also swell after delivery making closed shoes impossible.',
    whyNotNe: 'अस्पतालमा भुइँ चिप्लो हुने भएकाले लड्ने डर हुन्छ। साथै खुट्टा पनि सुन्निएको हुने भएकाले जुत्ता कहिल्यै नलगाउनुहोस्।',
    emoji: '👠'
  },
  // Document-related wrong items (reusing IDs from Step2Documents)
  {
    id: 91,
    name: 'Old expired ID',
    nameNe: 'म्याद सकिएको पुरानो परिचयपत्र',
    whyNot: 'This is expired — bring your current Nagarikta',
    whyNotNe: 'यो कागजको म्याद सकिइसकेको छ — अहिलेको नयाँ नागरिकता लिएर जानुहोस्।',
    emoji: '🆔'
  },
  {
    id: 92,
    name: "Child's report card",
    nameNe: 'स्कुलको बिल वा रिपोर्ट कार्ड',
    whyNot: 'This is not needed at the hospital',
    whyNotNe: 'यस्ता कागजहरू अस्पतालमा कुनै काम लाग्दैनन्।',
    emoji: '📄'
  },
  {
    id: 93,
    name: 'A random receipt',
    nameNe: 'घरको अरू सामान्य कागज वा बिल',
    whyNot: 'Leave household papers at home',
    whyNotNe: 'यस्ता अनावश्यक बिलहरूले झोलामा ठाउँ मात्र ओगट्छन्।',
    emoji: '🧾'
  },
];
