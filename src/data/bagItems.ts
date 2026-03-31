export type BagCategory = 'Clothing' | 'Hygiene' | 'Comfort' | 'Baby';

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
};

export const CATEGORY_NAMES_NE: Record<BagCategory, string> = {
  Clothing: 'लत्ताकपडा',
  Hygiene: 'सरसफाइ',
  Comfort: 'सुविधा र आराम',
  Baby: 'शिशुका सामग्री'
};

export const BAG_ITEMS: BagItem[] = [
  // CLOTHING
  { 
    id: 1, 
    category: 'Clothing', 
    name: 'Loose cotton nightgown or front-open kurta (2–3 pcs)', 
    nameNe: 'सुतीको खुकुलो नाइटगाउन वा अगाडिबाट खुल्ने कुर्ता (२-३ सेट)', 
    why: 'Easy to open for breastfeeding, doctor examinations, and IV lines. Tight clothing is impossible to manage after delivery.', 
    whyNe: 'स्तनपान गराउन, स्वास्थ्य जाँच गर्न र सलाइन पानी चढाउन सजिलो हुन्छ। सुत्केरीपछि कसिलो कपडा लगाउन र व्यवस्थापन गर्न निकै कठिन हुन्छ।',
    emoji: '👘'
  },
  { 
    id: 2, 
    category: 'Clothing', 
    name: 'High-waisted soft underwear (3–4 pcs)', 
    nameNe: 'नरम र कम्मरसम्म आउने भित्री वस्त्र (३-४ वटा)', 
    why: 'Supports the postpartum belly and sits comfortably above stitches from normal delivery or C-section.', 
    whyNe: 'यसले सुत्केरीपछिको पेटलाई सहारा दिन्छ र साधारण प्रसूति वा शल्यक्रियाको टाँकामा नबिझाउने गरी लगाउन सकिन्छ।',
    emoji: '🩲'
  },
  { 
    id: 3, 
    category: 'Clothing', 
    name: 'Warm shawl or light sweater', 
    nameNe: 'न्यानो सल वा हल्का स्विटर', 
    why: 'Labour rooms and recovery wards are kept cold. You will need warmth especially during long labour at night.', 
    whyNe: 'प्रसूति कक्ष र वार्डहरू प्रायः चिसो हुने गर्छन्। विशेष गरी राति लामो समयसम्म व्यथा लाग्दा शरीरलाई न्यानो राख्न आवश्यक हुन्छ।',
    emoji: '🧣'
  },
  { 
    id: 4, 
    category: 'Clothing', 
    name: 'Rubber slippers or flat sandals', 
    nameNe: 'रबरका चप्पल वा समतल जुत्ता/चप्पल', 
    why: 'Non-slip and easy to slide on when bending down is painful after delivery. Hospital floors are often wet.', 
    whyNe: 'चिप्लिने डर हुँदैन र सुत्केरीपछि निहुरिन गाह्रो हुँदा सजिलै लगाउन सकिन्छ। अस्पतालका भुइँहरू प्रायः भिजिरहेका हुन्छन्।',
    emoji: '🩴'
  },
  { 
    id: 5, 
    category: 'Clothing', 
    name: 'Warm socks (2 pairs)', 
    nameNe: 'न्यानो मोजा (२ जोडी)', 
    why: 'Feet get very cold during long labour, especially when an IV drip is running.', 
    whyNe: 'व्यथा लागेको बेला र सलाइन पानी दिइरहेको अवस्थामा खुट्टा धेरै चिसो हुने भएकाले मोजा आवश्यक हुन्छ।',
    emoji: '🧦'
  },
  // HYGIENE
  { 
    id: 6, 
    category: 'Hygiene', 
    name: 'Maternity overnight pads (2 packs, heavy-flow)', 
    nameNe: 'सुत्केरीका लागि विशेष म्याटरनिटी प्याड (२ प्याकेट)', 
    why: 'Postpartum bleeding (lochia) is much heavier than a normal period and lasts 4–6 weeks. Regular thin pads will not absorb enough.', 
    whyNe: 'सुत्केरीपछिको रक्तस्राव सामान्य महिनावारीको तुलनामा धेरै हुने र ४–६ हप्तासम्म रहने हुनाले साधारण पातलो प्याडले सोस्न सक्दैन।',
    emoji: '🩸'
  },
  { 
    id: 7, 
    category: 'Hygiene', 
    name: 'Perineal rinse bottle (peri bottle)', 
    nameNe: 'सफाइका लागि सानो पानीको बोतल (पेरी बोटल)', 
    why: 'For gently rinsing the stitched area after using the toilet. Wiping causes pain and infection risk — rinsing with warm water is much safer.', 
    whyNe: 'शौचालय प्रयोग गरेपछि टाँका लगाइएको भागलाई सफा गर्न। कपडाले पुछ्दा दुख्ने र संक्रमणको जोखिम हुने भएकाले मनतातो पानीले पखाल्नु सुरक्षित हुन्छ।',
    emoji: '🧴'
  },
  { 
    id: 8, 
    category: 'Hygiene', 
    name: 'Nursing bra, 2 pcs, front-clip style', 
    nameNe: 'स्तनपान गराउन सजिलो हुने ब्रा (२ वटा)', 
    why: 'Milk comes in on day 2–3 and breasts become very full and tender. A front-clip nursing bra allows easy breastfeeding.', 
    whyNe: '२–३ दिनपछि दूध आउन थाल्दा स्तन भारी र संवेदनशील हुन्छ। अगाडिबाट खुल्ने ब्राले स्तनपान गराउन सजिलो बनाउँछ।',
    emoji: '👙'
  },
  { 
    id: 9, 
    category: 'Hygiene', 
    name: 'Breast pads (disposable or washable)', 
    nameNe: 'ब्रेस्ट प्याड (डिस्पोजेबल वा धुन मिल्ने)', 
    why: 'Milk leaks without warning, especially when the baby cries. Breast pads prevent wet patches.', 
    whyNe: 'विशेष गरी बच्चा रुँदा दूध अचानक चुहिन सक्छ। ब्रेस्ट प्याडले लुगा भिज्नबाट जोगाउँछ।',
    emoji: '🤱'
  },
  { 
    id: 10, 
    category: 'Hygiene', 
    name: 'Toothbrush, toothpaste, mild soap, small towel', 
    nameNe: 'ब्रश, मञ्जन, साबुन र सानो तौलिया', 
    why: 'Basic hygiene is essential for the mother\'s recovery during a 2–5 day hospital stay.', 
    whyNe: 'अस्पताल बसाईका क्रममा संक्रमणबाट बच्न र छिटो निको हुन आधारभूत सरसफाइका सामग्रीहरू आवश्यक हुन्छन्।',
    emoji: '🪥'
  },
  { 
    id: 11, 
    category: 'Hygiene', 
    name: 'Hair ties or clips', 
    nameNe: 'कपाल बाँध्ने रबर वा क्लिप', 
    why: 'Hair gets in the way during pushing and recovery.', 
    whyNe: 'व्यथा लागेको बेला र सुत्केरीपछिको समयमा कपालले बाधा पुर्याउन सक्छ।',
    emoji: '🎀'
  },
  { 
    id: 12, 
    category: 'Hygiene', 
    name: 'Lip balm', 
    nameNe: 'लिप बाम वा ओठ फुट्न नदिने मलम', 
    why: 'Breathing exercises, oxygen masks, and dry hospital air cause lips to crack very fast during labour.', 
    whyNe: 'व्यथाका बेला सास फेर्ने अभ्यास, अक्सिजन मास्क र अस्पतालको सुक्खा हावाका कारण ओठ फुट्न सक्छ।',
    emoji: '💄'
  },
  { 
    id: 13, 
    category: 'Hygiene', 
    name: 'Coconut or mustard oil (small bottle)', 
    nameNe: 'नरिवल वा तोरीको तेल (सानो सिसी)', 
    why: 'Used for perineal massage, body care after delivery, and dryness relief. Trusted in Nepali postpartum tradition.', 
    whyNe: 'सुत्केरीपछि शरीरको मालिस गर्न र छालाको सुख्खापन हटाउन प्रयोग गरिन्छ। यो नेपाली परम्परामा निकै प्रचलित छ।',
    emoji: '🛢️'
  },

  // COMFORT
  { 
    id: 14, 
    category: 'Comfort', 
    name: 'Pillow from home (1–2)', 
    nameNe: 'घरकै सिरानी (१–२ वटा)', 
    why: 'Hospital pillows are thin and flat. A familiar pillow reduces anxiety and helps with positioning during labour and breastfeeding.', 
    whyNe: 'अस्पतालका सिरानीहरू प्रायः पातलो र अप्ठ्यारो हुन्छन्। आफ्नै सिरानीले तनाव कम गर्न र स्तनपान गराउँदा सजिलो बनाउन मद्दत गर्छ।',
    emoji: '🛌'
  },
  { 
    id: 15, 
    category: 'Comfort', 
    name: 'Massage oil or back roller', 
    nameNe: 'मालिस गर्ने तेल वा ब्याक रोलर', 
    why: 'Back pressure during contractions is very painful. The partner can use oil or a roller to relieve lower back pain.', 
    whyNe: 'व्यथा लाग्दा कम्मरमा धेरै दबाब र दुखाइ हुन्छ। सहयोगीले तेल वा रोलरले मालिस गरिदिँदा दुखाइ कम गर्न मद्दत पुग्छ।',
    emoji: '💆‍♀️'
  },
  { 
    id: 16, 
    category: 'Comfort', 
    name: 'Thermos flask', 
    nameNe: 'थर्मस', 
    why: 'For warm water or soup. Hospital water is often cold and Nepali postpartum tradition avoids cold fluids after delivery.', 
    whyNe: 'मनतातो पानी वा सुप राख्नका लागि। अस्पतालमा चिसो पानी हुन सक्ने र सुत्केरीलाई चिसो कुरा बार्नुपर्ने भएकाले थर्मस आवश्यक हुन्छ।',
    emoji: '🫖'
  },
  { 
    id: 17, 
    category: 'Comfort', 
    name: 'Tiffin box and snacks for family', 
    nameNe: 'टिफिन बक्स र परिवारका लागि खाजा', 
    why: 'Many government hospitals in Nepal do not provide meals. Family members waiting 10–20 hours need food from home.', 
    whyNe: 'धेरै सरकारी अस्पतालहरूमा खानाको व्यवस्था नहुने हुँदा लामो समय कुर्नुपर्ने परिवारका सदस्य (कुरुवा) का लागि खाजा आवश्यक हुन्छ।',
    emoji: '🍱'
  },
  { 
    id: 18, 
    category: 'Comfort', 
    name: 'Phone charger and power bank', 
    nameNe: 'फोन चार्जर र पावर बैंक', 
    why: 'Phones die fast when the family is calling continuously with updates.', 
    whyNe: 'परिवार र आफन्तको निरन्तर फोन आउने भएकाले ब्याट्री छिट्टै सकिन सक्छ।',
    emoji: '🔋'
  },
  { 
    id: 19, 
    category: 'Comfort', 
    name: 'Earphones with calming playlist', 
    nameNe: 'इयरफोन र शान्त संगीत', 
    why: 'Music or guided breathing audio significantly helps manage pain during early labour contractions.', 
    whyNe: 'व्यथाको सुरुवाती समयमा संगीत वा सास फेर्ने अभ्यास सुन्नाले दुखाइ कम महसुस गर्न मद्दत गर्छ।',
    emoji: '🎧'
  },
  { 
    id: 20, 
    category: 'Comfort', 
    name: 'Notebook and pen', 
    nameNe: 'कापी र कलम', 
    why: 'Write down everything the doctor says. Stress causes people to forget instructions immediately. Record medication names, doses, and follow-up dates.', 
    whyNe: 'डक्टरको निर्देशन, औषधिको नाम र समय तथा अर्को पटक आउनुपर्ने मिति लेखेर राख्न सजिलो हुन्छ।',
    emoji: '📓'
  },
  // BABY
  { 
    id: 21, 
    category: 'Baby', 
    name: 'Soft muslin cloth squares (4–5 pcs)', 
    nameNe: 'नरम मलमलको कपडा (४–५ वटा)', 
    why: 'Used as swaddle, nappy liner, burp cloth, and skin-to-skin cover. The most versatile item in the baby bag.', 
    whyNe: 'बच्चालाई बेर्न, काखमा राख्दा र सफा गर्न यो बहुउपयोगी कपडा हो।',
    emoji: '🧻'
  },
  { 
    id: 22, 
    category: 'Baby', 
    name: 'Newborn onesies or side-tie suits (2–3 pcs)', 
    nameNe: 'नवजात शिशुका लागि भोटो वा लुगा (२–३ सेट)', 
    why: 'Side-tie or front-snap designs are easiest when the baby is very small and needs to be dressed quickly.', 
    whyNe: 'तुना भएको वा अगाडिबाट खुल्ने भोटोहरू सानो बच्चालाई लगाइदिन सजिलो र सुरक्षित हुन्छ।',
    emoji: '👕'
  },
  { 
    id: 23, 
    category: 'Baby', 
    name: 'Baby cap, woolen or cotton', 
    nameNe: 'बच्चाको टोपी (सुती वा उन)', 
    why: 'Newborns lose heat rapidly through their heads. A cap must be worn immediately after birth.', 
    whyNe: 'नवजात शिशुको टाउकोबाट तापक्रम छिटो घट्न सक्ने भएकाले जन्मिएलगत्तै टोपी लगाइदिनु पर्छ।',
    emoji: '🧢'
  },
  { 
    id: 24, 
    category: 'Baby', 
    name: 'Mittens and socks for newborn', 
    nameNe: 'नवजात शिशुका पन्जा र मोजा', 
    why: 'Prevents the baby from scratching their own face and keeps tiny feet warm.', 
    whyNe: 'यसले बच्चालाई आफ्नै अनुहार कोर्नबाट जोगाउँछ र हातखुट्टालाई न्यानो राख्छ।',
    emoji: '🧤'
  },
  { 
    id: 25, 
    category: 'Baby', 
    name: 'Soft baby blanket or swaddle wrap (2 pcs)', 
    nameNe: 'नरम ब्ल्याङ्केट वा बेर्ने कपडा (२ वटा)', 
    why: 'Swaddling mimics the womb and helps newborns feel secure and sleep better.', 
    whyNe: 'बच्चालाई कपडामा बेर्दा उसले सुरक्षित महसुस गर्छ र राम्रोसँग निदाउन सहयोग हुन्छ।',
    emoji: '🧸'
  },
  { 
    id: 26, 
    category: 'Baby', 
    name: 'Newborn diapers (1 small pack)', 
    nameNe: 'नवजात शिशुका लागि डाइपर (१ सानो प्याकेट)', 
    why: 'Newborns urinate and pass meconium frequently in the first hours — diapers are needed immediately.', 
    whyNe: 'जन्मिएका सुरुका घण्टाहरूमा बच्चाले बारम्बार पिसाब र दिसा गर्ने भएकाले डाइपर तुरुन्तै आवश्यक हुन्छ।',
    emoji: '🧷'
  },
  { 
    id: 27, 
    category: 'Baby', 
    name: 'Unscented baby wipes', 
    nameNe: 'बास्ना नभएको बेबी वाइप्स', 
    why: 'For gentle cleaning before proper bathing begins. Must be unscented as newborn skin is extremely sensitive.', 
    whyNe: 'बच्चालाई नुहाउनु अघि विस्तारै सफा गर्न। नवजात शिशुको छाला संवेदनशील हुने भएकाले बास्ना नभएको वाइप्स प्रयोग गर्नुपर्छ।',
    emoji: '🧻'
  },
  { 
    id: 28, 
    category: 'Baby', 
    name: 'Cotton balls', 
    nameNe: 'कपासका डल्लाहरू', 
    why: 'For cleaning the umbilical cord stump, eyes, and other delicate areas. Softer and safer than cloth.', 
    whyNe: 'नाइँटो, आँखा र अन्य संवेदनशील भागहरू सफा गर्न यो कपडाभन्दा नरम र सुरक्षित हुन्छ।',
    emoji: '☁️'
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
    nameNe: 'कडा अत्तर वा बास्नादार सामग्रीहरू', 
    whyNot: 'Newborn airways are extremely sensitive. Strong scents can irritate their developing lungs and cause respiratory distress in the first hours of life.', 
    whyNotNe: 'नवजात शिशुको श्वासप्रश्वास प्रणाली संवेदनशील हुन्छ। कडा बास्नाले उनीहरूको फोक्सोमा असर पुर्याउन सक्छ।',
    emoji: '🧴'
  },
  { 
    id: 2, 
    name: 'Underwired bra', 
    nameNe: 'तार (Underwire) भएको ब्रा', 
    whyNot: 'When milk comes in on day 2–3, breasts become very engorged. Underwires press on milk ducts causing blockages (mastitis) and extreme pain.', 
    whyNotNe: 'दूध आउन थालेपछि स्तन भारी हुन्छन्। तार भएको ब्राले दूधका नलीमा दबाब दिई दुखाइ र संक्रमण (Mastitis) गराउन सक्छ।',
    emoji: '👙'
  },
  { 
    id: 3, 
    name: 'Regular thin sanitary pads', 
    nameNe: 'साधारण पातलो स्यानिटरी प्याड', 
    whyNot: 'Postpartum bleeding is far heavier than a normal period. Regular pads soak through in minutes. Only thick maternity-specific pads are safe.', 
    whyNotNe: 'सुत्केरीपछिको रक्तस्राव धेरै हुने भएकाले साधारण प्याड तुरुन्तै भिज्छ। बाक्लो म्याटरनिटी प्याड मात्र प्रयोग गर्नुहोस्।',
    emoji: '🩸'
  },
  { 
    id: 4, 
    name: 'Tight jeans or fitted trousers', 
    nameNe: 'कसिलो जिन्स वा पाइन्ट', 
    whyNot: 'After a C-section incision or perineal stitches, any tight clothing on the lower body is impossible to wear and causes severe pain.', 
    whyNotNe: 'शल्यक्रिया वा टाँका लगाएको ठाउँमा कसिलो कपडाले दबाब दिने र धेरै दुखाइ हुने भएकाले खुकुलो कपडा मात्र लगाउनुहोस्।',
    emoji: '👖'
  },
  { 
    id: 5, 
    name: 'Baby powder (talcum powder)', 
    nameNe: 'बेबी पाउडर (टेलकम पाउडर)', 
    whyNot: 'Fine talc particles are inhaled into the baby\'s developing lungs, increasing risk of respiratory problems. Not recommended by doctors for newborns.', 
    whyNotNe: 'पाउडरका मसिना कणहरू बच्चाको फोक्सोमा पुगेर श्वासप्रश्वासमा समस्या ल्याउन सक्छन्। त्यसैले डाक्टरहरू यसको प्रयोग नगर्न सल्लाह दिन्छन्।',
    emoji: '💨'
  },
  { 
    id: 6, 
    name: 'Kajal or kohl for baby\'s eyes', 
    nameNe: 'बच्चाको आँखामा लगाइने गाजल', 
    whyNot: 'A common traditional practice, but kajal contains lead compounds which are absorbed through delicate newborn skin around the eyes, causing lead poisoning.', 
    whyNotNe: 'गाजलमा हानिकारक धातु (Lead) हुन सक्छ, जसले बच्चाको कोमल आँखा र स्वास्थ्यमा गम्भीर असर पुर्याउन सक्छ।',
    emoji: '👁️'
  },
  { 
    id: 7, 
    name: 'Honey or ghee to feed newborn orally', 
    nameNe: 'मह वा घिउ खुवाउने (चाटाउने)', 
    whyNot: 'Honey can contain Clostridium botulinum spores causing infant botulism — potentially fatal in babies under 1 year. Ghee fed before breastfeeding is established causes choking and aspiration.', 
    whyNotNe: 'महमा हुने जीवाणुले नवजात शिशुलाई बिरामी बनाउन सक्छ। स्तनपान अघि घिउ वा मह खुवाउँदा बच्चाको सास रोकिने खतरा हुन्छ।',
    emoji: '🍯'
  },
  { 
    id: 8, 
    name: 'High heels or closed formal shoes', 
    nameNe: 'हाइ हिल्स वा कसिलो जुत्ता', 
    whyNot: 'Hospital floors are wet and slippery. Falls after delivery are dangerous when the body is weakened. Feet also swell after delivery making closed shoes impossible.', 
    whyNotNe: 'अस्पतालमा चिप्लिने डर हुने र सुत्केरीपछि खुट्टा सुन्निने भएकाले यस्ता जुत्ता लगाउनु असुरक्षित र कष्टकर हुन्छ।',
    emoji: '👠'
  },
];