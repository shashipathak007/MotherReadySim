export type ContactUrgency = 'CRITICAL' | 'IMPORTANT' | 'INFO';

export interface ContactItem {
  id: number;
  initials: string;
  name: string;
  nameNe?: string;
  urgency: ContactUrgency;
  phone: string;
  shortDesc: string;
  shortDescNe?: string;
  fullDetail: string;
  fullDetailNe?: string;
}

export const URGENCY_COLORS: Record<ContactUrgency, { text: string; bg: string; labelNe: string }> = {
  CRITICAL: { text: '#A73C44', bg: '#FCEDED', labelNe: 'एकदम जरुरी' },
  IMPORTANT: { text: '#9A5A17', bg: '#FBF2E1', labelNe: 'जरुरी' },
  INFO: { text: '#1C6B9E', bg: '#EAF3FA', labelNe: 'जानकारी' },
};

export const CONTACTS: ContactItem[] = [
  {
    id: 1,
    initials: 'DR',
    name: 'Primary OB/GYN doctor or ANM nurse',
    nameNe: 'आफ्नो डाक्टर वा ए.एन.एम. (ANM) नर्स',
    urgency: 'CRITICAL',
    phone: '',
    shortDesc: 'The doctor who did your ANC checkups',
    shortDescNe: 'गर्भ जाँच गर्ने मुख्य डाक्टर वा नर्स',
    fullDetail: 'Call them first the moment labour begins. They know your entire pregnancy history and can guide you immediately. Save their personal mobile number from your last ANC visit.',
    fullDetailNe: 'सुत्केरी व्यथा लाग्ने बित्तिकै सबैभन्दा पहिले उहाँहरूलाई फोन गर्नुपर्छ। तपाईंको सुरुदेखिको अवस्था थाहा हुने भएकाले उहाँहरूले सही सल्लाह दिनुहुन्छ। अन्तिम जाँचमा उहाँहरूको मोबाइल नम्बर मागेर सेभ गरिराख्नुहोस्।'
  },
  {
    id: 2,
    initials: 'AM',
    name: 'Ambulance — 102 (free government)',
    nameNe: 'एम्बुलेन्स — १०२ (निःशुल्क सरकारी सेवा)',
    urgency: 'CRITICAL',
    phone: '102',
    shortDesc: 'Free nationwide ambulance',
    shortDescNe: 'देशभर पाइने निःशुल्क एम्बुलेन्स',
    fullDetail: '102 is the free government ambulance available nationwide. Response time varies. Keep this number saved even if you plan to travel by private vehicle — you may need it in an emergency.',
    fullDetailNe: '१०२ नम्बरमा फोन गर्दा पैसा लाग्दैन र यो देशभरि पाइन्छ। ठाउँ अनुसार एम्बुलेन्स आइपुग्न समय लाग्न सक्छ। आफ्नै गाडी वा बाइक भए पनि आपतकालीन अवस्थाको लागि यो नम्बर सेभ गरेर राख्नुहोला।'
  },
  {
    id: 3,
    initials: 'HP',
    name: 'Hospital or health post admission desk',
    nameNe: 'अस्पताल वा स्वास्थ्य चौकीको रिसेप्सन',
    urgency: 'CRITICAL',
    phone: '',
    shortDesc: 'Call ahead before arriving',
    shortDescNe: 'अस्पताल पुग्नुअघि खबर गर्न',
    fullDetail: 'Call ahead so they can prepare a bed, ward, and staff. Reduces waiting time significantly. Ask for the direct number of the maternity or labour ward specifically.',
    fullDetailNe: 'अस्पताल हिँड्नुअघि फोन गरेर \'हामी आउँदैछौं\' भन्दा उहाँहरूलाई बेड र डाक्टर तयार पार्न सजिलो हुन्छ। यसले गर्दा अस्पताल पुग्ने बित्तिकै कुर्नु पर्दैन। सकेसम्म डेलिभरी वार्डकै सिधा नम्बर मागेर राख्नुहोला।'
  },
  {
    id: 4,
    initials: 'FC',
    name: 'FCHV — Female Community Health Volunteer',
    nameNe: 'महिला स्वास्थ्य स्वयंसेविका (FCHV दिदी)',
    urgency: 'CRITICAL',
    phone: '',
    shortDesc: 'Your local health volunteer',
    shortDescNe: 'आफ्नो वडाको स्वास्थ्य स्वयंसेविका दिदी',
    fullDetail: 'Present in every ward across Nepal. Knows the local referral system, can arrange transport, and is available at all hours. She is often the fastest first contact, especially when the hospital is far.',
    fullDetailNe: 'गाउँघरमा जतिबेला पनि सहयोग गर्न स्वयंसेविका दिदीहरू तयार हुनुहुन्छ। उहाँहरूलाई अस्पतालको बारेमा सबै थाहा हुने र एम्बुलेन्स पनि मिलाइदिन सक्ने भएकाले, विशेषगरी अस्पताल टाढा छ भने उहाँहरूबाट धेरै छिटो मदत पाइन्छ।'
  },
  {
    id: 5,
    initials: 'P1',
    name: 'Husband or primary support person',
    nameNe: 'श्रीमान वा मुख्य सहयोग गर्ने मान्छे',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'Must be reachable 24 hours a day',
    shortDescNe: '२४ सै घण्टा फोन लाग्ने मान्छे',
    fullDetail: 'Must be reachable 24 hours in the last 4 weeks of pregnancy. Responsible for transport, carrying the hospital bag, staying with the mother, and informing the family.',
    fullDetailNe: 'अन्तिमको १ महिनामा यो मान्छेलाई जतिबेला फोन गर्दा पनि लाग्ने हुनुपर्छ। गाडी वा एम्बुलेन्स खोज्ने, अस्पतालको झोला बोक्ने र अरू आफन्तलाई खबर गर्ने जिम्मा उहाँकै हुन्छ।'
  },
  {
    id: 6,
    initials: 'P2',
    name: 'Backup support person',
    nameNe: 'सहयोग गर्ने दोस्रो मान्छे (ब्याकअप)',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'Family member or trusted neighbour',
    shortDescNe: 'सहयोग गर्न सक्ने आफन्त वा छिमेकी',
    fullDetail: 'A trusted family member or neighbour who can step in if the primary support person is unavailable. Labour can start any time — always have a backup plan.',
    fullDetailNe: 'मुख्य मान्छे (जस्तै श्रीमान) नभएको बेला वा फोन नलागेको बेला सघाउन सक्ने भरपर्दो आफन्त वा छिमेकी। व्यथा जतिबेला पनि लाग्न सक्ने भएकाले सधैं दोस्रो मान्छे पनि तयार राखिराख्नुपर्छ।'
  },
  {
    id: 7,
    initials: 'RB',
    name: 'Blood donor — same blood group',
    nameNe: 'रगत दिने मान्छे (रक्तदाता)',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'Pre-identify a donor before due date',
    shortDescNe: 'सुत्केरी हुनुअघि नै रगत मिल्ने मान्छे खोजेर राख्ने',
    fullDetail: 'Nepal faces frequent blood shortages, especially for rare groups (B-, O-). Identify a willing donor with your blood group before your due date. Nepal Red Cross Kathmandu: 01-4228094.',
    fullDetailNe: 'नेपालमा बेलाबेला रगत पाउन गाह्रो हुन्छ, झन् नेगेटिभ (O-, B-) ब्लड ग्रुप छ भने त झन् गाह्रो हुन्छ। त्यसैले अस्पताल जानुभन्दा पहिले नै आफ्नो ब्लड ग्रुप मिल्ने मान्छे खोजेर फोन नम्बर राखिराख्नुपर्छ। साह्रै गाह्रो परेमा रेडक्रसमा (०१-४२२८०९४) फोन गर्न सकिन्छ।'
  },
  {
    id: 8,
    initials: '1166',
    name: 'Health helpline — Ministry of Health',
    nameNe: 'स्वास्थ्य मन्त्रालयको हेल्पलाइन (११६६)',
    urgency: 'INFO',
    phone: '1166',
    shortDesc: 'Government health helpline',
    shortDescNe: 'पैसा नलाग्ने सरकारी सल्लाह केन्द्र',
    fullDetail: 'The government health helpline for pregnancy-related queries, referrals, and information. Available during working hours. Free to call.',
    fullDetailNe: 'गर्भवती अवस्थाको बारेमा केही सोध्नुपरेमा वा सल्लाह लिनुपरेमा फोन गर्न मिल्ने यो सरकारको निःशुल्क नम्बर हो। यसमा अफिस खुलेको बेला फोन गर्दा पैसा लाग्दैन र डाक्टरसँग कुरा गर्न पाइन्छ।'
  },
  {
    id: 9,
    initials: 'PS',
    name: 'Local Police Station',
    nameNe: 'नजिकैको प्रहरी चौकी',
    urgency: 'CRITICAL',
    phone: '100',
    shortDesc: 'For emergency safety or transport help',
    shortDescNe: 'आकस्मिक सुरक्षा वा यातायातमा सहयोगका लागि',
    fullDetail: 'If you are in a remote area or having trouble finding transport at night, the local police can sometimes assist or provide security. Keep the 100 emergency number or your specific ward\'s police post number.',
    fullDetailNe: 'यदि तपाईं दुर्गम ठाउँमा हुनुहुन्छ वा रातिको समयमा गाडी पाउन गाह्रो भएको छ भने प्रहरीले कहिलेकाहीं सहयोग गर्न सक्छन्। १०० नम्बर वा आफ्नो वडाको प्रहरी चौकीको नम्बर सेभ गरिराख्नुहोस्।'
  },
  {
    id: 10,
    initials: 'PV',
    name: 'Private Ambulance or Taxi Service',
    nameNe: 'निजी एम्बुलेन्स वा ट्याक्सी सेवा',
    urgency: 'CRITICAL',
    phone: '',
    shortDesc: 'Reliable private transport backup',
    shortDescNe: 'भरपर्दो निजी यातायातको विकल्प',
    fullDetail: 'Sometimes government ambulances (102) are busy or far. Having a number for a private ambulance or a local taxi driver who is willing to travel at night is a critical safety net.',
    fullDetailNe: 'कहिलेकाहीं सरकारी एम्बुलेन्स (१०२) व्यस्त हुन सक्छ। यस्तो बेलाको लागि निजी एम्बुलेन्स वा राति पनि हिँड्ने ट्याक्सी ड्राइभरको नम्बर राख्नु सुरक्षित हुन्छ।'
  },
  {
    id: 11,
    initials: 'TX',
    name: 'Local Taxi/Jeep Driver',
    nameNe: 'स्थानीय ट्याक्सी वा जीप चालक',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'Pre-arranged transport driver',
    shortDescNe: 'पहिले नै सल्लाह गरिएको चालक',
    fullDetail: 'Identify 1-2 local drivers who live nearby and are willing to be called at any hour. Confirm their availability around your due date.',
    fullDetailNe: 'आफ्नो घर नजिकै बस्ने १-२ जना ड्राइभरहरूसँग पहिले नै कुरा गरेर राख्नुहोस्। सुत्केरी हुने मिति वरिपरि उहाँहरू उपलब्ध हुन सक्ने कुरा पक्का गर्नुहोस्।'
  },
  {
    id: 12,
    initials: 'FR',
    name: 'Female Relative (Aunt, Sister, or Mother)',
    nameNe: 'नजिकैको महिला आफन्त (दिदीबहिनी वा आमा)',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'Experienced support for mother & baby',
    shortDescNe: 'आमा र बच्चाको हेरचाहमा अनुभवी व्यक्ति',
    fullDetail: 'An experienced female relative who can help with the newborn, guide you with breastfeeding, and support you emotionally during the first few days.',
    fullDetailNe: 'बच्चा जन्मिएपछि उसको हेरचाह गर्न, स्तनपान सिकाउन र तपाईंलाई हौसला दिन अनुभवी महिला आफन्तको साथ निकै जरुरी हुन्छ।'
  },
  {
    id: 13,
    initials: 'WO',
    name: 'Ward Office / Local Palika',
    nameNe: 'वडा कार्यालय वा पालिका',
    urgency: 'INFO',
    phone: '',
    shortDesc: 'For birth registration information',
    shortDescNe: 'जन्म दर्ता सम्बन्धी जानकारीका लागि',
    fullDetail: 'Contact your ward office to understand the process for birth registration and to learn about any local government birth allowances (Aama Surakshya Program) you may be eligible for.',
    fullDetailNe: 'बच्चा जन्मिएपछि जन्म दर्ता कसरी गर्ने र सरकारले दिने सुत्केरी भत्ता (आमा सुरक्षा कार्यक्रम) को बारेमा बुझ्न वडा कार्यालयमा सम्पर्क गर्नुपर्छ।'
  },
  {
    id: 14,
    initials: 'VC',
    name: 'Local Health Post (Vaccination Info)',
    nameNe: 'स्थानीय स्वास्थ्य चौकी (खोप सम्बन्धी जानकारी)',
    urgency: 'INFO',
    phone: '',
    shortDesc: 'To plan baby\'s first vaccinations',
    shortDescNe: 'बच्चाको पहिलो खोपको तालिका बुझ्न',
    fullDetail: 'The local health post provides the national immunization schedule. Contact them to know which vaccines the baby needs in the first few months and the clinic dates.',
    fullDetailNe: 'बच्चा जन्मिएपछि लगाउनुपर्ने खोपहरुको बारेमा बुझ्न स्वास्थ्य चौकीमा सम्पर्क गर्नुहोस्। कुन खोप कहिले लगाउने र खोप लगाउने दिन कहिले हो भनेर थाहा पाउनु जरुरी छ।'
  },
  {
    id: 15,
    initials: 'BB',
    name: 'Local Blood Bank',
    nameNe: 'स्थानीय रक्तसंचार केन्द्र (ब्लड बैंक)',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'For emergency blood supply',
    shortDescNe: 'आपतकालीन रगतको लागि',
    fullDetail: 'Keep the number of the local Red Cross or blood bank handy in case your arranged donor is unavailable.',
    fullDetailNe: 'तपाईंले खोजेको मान्छेले रगत दिन नसकेको खण्डमा तुरुन्त सम्पर्क गर्न रेडक्रस वा ब्लड बैंकको नम्बर राख्नुहोस्।'
  },
  {
    id: 16,
    initials: 'PH',
    name: '24-Hour Pharmacy',
    nameNe: '२४ घण्टा खुल्ने फार्मेसी',
    urgency: 'INFO',
    phone: '',
    shortDesc: 'For late-night medicines',
    shortDescNe: 'राति औषधि चाहिने अवस्थाको लागि',
    fullDetail: 'A nearby pharmacy that is open 24/7 is crucial if you need urgent medicines or maternity supplies at night.',
    fullDetailNe: 'राति एक्कासी औषधि वा अन्य सुत्केरी सामान चाहिएमा २४ घण्टा खुल्ने नजिकैको फार्मेसीको नम्बर काम लाग्छ।'
  },
  {
    id: 17,
    initials: 'AS',
    name: 'Aama Surakshya Info',
    nameNe: 'आमा सुरक्षा जानकारी शाखा',
    urgency: 'INFO',
    phone: '',
    shortDesc: 'Govt maternity allowance info',
    shortDescNe: 'सरकारी सुत्केरी भत्ताको जानकारी',
    fullDetail: 'Contact for details on the Aama Surakshya allowance and transport incentives provided by the government.',
    fullDetailNe: 'सरकारले दिने सुत्केरी भत्ता र यातायात खर्चको बारेमा बुझ्न यो नम्बरमा सम्पर्क गर्न सक्नुहुन्छ।'
  }
];