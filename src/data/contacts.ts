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
];