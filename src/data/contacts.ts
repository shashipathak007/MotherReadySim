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
  CRITICAL: { text: '#A73C44', bg: '#FCEDED', labelNe: 'अत्यन्त जरुरी' },
  IMPORTANT: { text: '#9A5A17', bg: '#FBF2E1', labelNe: 'महत्त्वपूर्ण' },
  INFO: { text: '#1C6B9E', bg: '#EAF3FA', labelNe: 'सामान्य जानकारी' },
};

export const CONTACTS: ContactItem[] = [
  {
    id: 1,
    initials: 'DR',
    name: 'Primary OB/GYN doctor or ANM nurse',
    nameNe: 'आफ्नो प्रसूति विशेषज्ञ डाक्टर वा ए.एन.एम. (ANM) नर्स',
    urgency: 'CRITICAL',
    phone: '',
    shortDesc: 'The doctor who did your ANC checkups',
    shortDescNe: 'तपाईंको गर्भजाँच (ANC) गर्ने मुख्य स्वास्थ्यकर्मी',
    fullDetail: 'Call them first the moment labour begins. They know your entire pregnancy history and can guide you immediately. Save their personal mobile number from your last ANC visit.',
    fullDetailNe: 'व्यथा लाग्नासाथ सबैभन्दा पहिले उहाँहरूलाई फोन गर्नुहोस्। उहाँहरूलाई तपाईंको स्वास्थ्य अवस्थाबारे पूर्ण जानकारी हुने भएकाले तुरुन्तै सही सल्लाह दिन सक्नुहुन्छ। अन्तिम जाँचको समयमा उहाँहरूको व्यक्तिगत मोबाइल नम्बर मागेर सुरक्षित राख्नुहोस्।'
  },
  {
    id: 2,
    initials: 'AM',
    name: 'Ambulance — 102 (free government)',
    nameNe: 'एम्बुलेन्स — १०२ (सरकारी निःशुल्क सेवा)',
    urgency: 'CRITICAL',
    phone: '102',
    shortDesc: 'Free nationwide ambulance',
    shortDescNe: 'देशभर उपलब्ध निःशुल्क एम्बुलेन्स सेवा',
    fullDetail: '102 is the free government ambulance available nationwide. Response time varies. Keep this number saved even if you plan to travel by private vehicle — you may need it in an emergency.',
    fullDetailNe: '१०२ देशभर उपलब्ध हुने सरकारी निःशुल्क एम्बुलेन्स सेवा हो। ठाउँ अनुसार आइपुग्ने समय फरक हुन सक्छ। निजी सवारीसाधनको व्यवस्था भए तापनि आकस्मिक अवस्थाका लागि यो नम्बर सुरक्षित राख्नुहोस्।'
  },
  {
    id: 3,
    initials: 'HP',
    name: 'Hospital or health post admission desk',
    nameNe: 'अस्पताल वा स्वास्थ्य चौकीको भर्ना कक्ष (रिसेप्सन)',
    urgency: 'CRITICAL',
    phone: '',
    shortDesc: 'Call ahead before arriving',
    shortDescNe: 'अस्पताल पुग्नुअघि अग्रिम जानकारी दिनुहोस्',
    fullDetail: 'Call ahead so they can prepare a bed, ward, and staff. Reduces waiting time significantly. Ask for the direct number of the maternity or labour ward specifically.',
    fullDetailNe: 'अस्पताल जानुअघि फोन गर्नाले सैया/खाट , वार्ड र स्वास्थ्यकर्मीको पूर्व-तयारी गर्न सजिलो हुन्छ। यसले अस्पतालमा कुर्नुपर्ने समय घटाउँछ। सम्भव भएसम्म प्रसूति वा लेबर वार्डको सिधा फोन नम्बर माग्नुहोस्।'
  },
  {
    id: 4,
    initials: 'FC',
    name: 'FCHV — Female Community Health Volunteer',
    nameNe: 'महिला सामुदायिक स्वास्थ्य स्वयंसेविका (FCHV)',
    urgency: 'CRITICAL',
    phone: '',
    shortDesc: 'Your local health volunteer',
    shortDescNe: 'तपाईंको वडाको स्थानीय स्वास्थ्य स्वयंसेविका',
    fullDetail: 'Present in every ward across Nepal. Knows the local referral system, can arrange transport, and is available at all hours. She is often the fastest first contact, especially when the hospital is far.',
    fullDetailNe: 'नेपालको हरेक वडामा स्वास्थ्य स्वयंसेविकाहरू हुनुहुन्छ। उहाँहरूलाई स्थानीय स्वास्थ्य प्रणालीबारे जानकारी हुने र यातायातको व्यवस्था मिलाउन सक्ने हुनाले, अस्पताल टाढा भएको अवस्थामा उहाँहरू सबैभन्दा छिटो सहयोग गर्ने व्यक्ति हुनुहुन्छ।'
  },
  {
    id: 5,
    initials: 'P1',
    name: 'Husband or primary support person',
    nameNe: 'श्रीमान वा मुख्य सहयोगी व्यक्ति',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'Must be reachable 24 hours a day',
    shortDescNe: '२४सै घण्टा सम्पर्कमा रहनुपर्ने व्यक्ति',
    fullDetail: 'Must be reachable 24 hours in the last 4 weeks of pregnancy. Responsible for transport, carrying the hospital bag, staying with the mother, and informing the family.',
    fullDetailNe: 'गर्भावस्थाको अन्तिम ४ हप्तामा यी व्यक्ति २४ सै घण्टा सम्पर्कमा रहनुपर्छ। सवारीसाधनको व्यवस्था गर्ने, अस्पतालको झोला बोक्ने र परिवारलाई खबर गर्ने मुख्य जिम्मेवारी उहाँकै हुन्छ।'
  },
  {
    id: 6,
    initials: 'P2',
    name: 'Backup support person',
    nameNe: 'वैकल्पिक सहयोगी व्यक्ति (ब्याकअप)',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'Family member or trusted neighbour',
    shortDescNe: 'सहयोग गर्न सक्ने परिवारका सदस्य वा छिमेकी',
    fullDetail: 'A trusted family member or neighbour who can step in if the primary support person is unavailable. Labour can start any time — always have a backup plan.',
    fullDetailNe: 'मुख्य सहयोगी उपलब्ध नभएको खण्डमा मद्दत गर्न सक्ने भरपर्दो परिवारका सदस्य वा छिमेकी। व्यथा जुनसुकै बेला लाग्न सक्ने हुनाले सधैँ वैकल्पिक योजना तयार राख्नुहोस्।'
  },
  {
    id: 7,
    initials: 'RB',
    name: 'Blood donor — same blood group',
    nameNe: 'रक्तदाता — आफ्नै समूहको रगत मिल्ने व्यक्ति',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'Pre-identify a donor before due date',
    shortDescNe: 'सुत्केरी हुने मिति अगाडि नै रक्तदाता खोज्नुहोस्',
    fullDetail: 'Nepal faces frequent blood shortages, especially for rare groups (B-, O-). Identify a willing donor with your blood group before your due date. Nepal Red Cross Kathmandu: 01-4228094.',
    fullDetailNe: 'नेपालमा रगतको अभाव भइरहने हुनाले, विशेषगरी दुर्लभ समूह (जस्तै B-, O-) भएमा पहिले नै रक्तदाता पहिचान गरिराख्नुहोस्। आवश्यक परेमा नेपाल रेडक्रस (काठमाडौँ): ०१-४२२८०९४ मा सम्पर्क गर्नुहोस्।'
  },
  {
    id: 8,
    initials: '1166',
    name: 'Health helpline — Ministry of Health',
    nameNe: 'स्वास्थ्य हेल्पलाइन — स्वास्थ्य मन्त्रालय',
    urgency: 'INFO',
    phone: '1166',
    shortDesc: 'Government health helpline',
    shortDescNe: 'निःशुल्क सरकारी स्वास्थ्य परामर्श सेवा',
    fullDetail: 'The government health helpline for pregnancy-related queries, referrals, and information. Available during working hours. Free to call.',
    fullDetailNe: 'गर्भावस्थासँग सम्बन्धित जिज्ञासा, सल्लाह र जानकारीका लागि यो स्वास्थ्य मन्त्रालयको निःशुल्क हेल्पलाइन हो। यो कार्यालय समयमा उपलब्ध हुन्छ र कल गर्न निःशुल्क छ।'
  },
];