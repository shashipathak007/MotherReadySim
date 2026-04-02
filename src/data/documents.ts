export type DocCategory = 'Identity' | 'Aama Programme' | 'Medical' | 'Payment';

export interface DocumentItem {
  id: number;
  category: DocCategory;
  name: string;
  nameNe?: string;
  emoji: string;
  whyNeeded: string;
  whyNeededNe?: string;
}

export const DOC_CATEGORY_COLORS: Record<DocCategory, { text: string; bg: string; nameNe: string }> = {
  Identity: { text: '#1C6B9E', bg: '#EAF3FA', nameNe: 'परिचय पत्र' },
  'Aama Programme': { text: '#127163', bg: '#E1F5F2', nameNe: 'आमा सुरक्षा कार्यक्रम' },
  Medical: { text: '#6B5DD3', bg: '#FDF2F4', nameNe: 'स्वास्थ्य रिपोर्ट' },
  Payment: { text: '#9A5A17', bg: '#FBF2E1', nameNe: 'भुक्तानी विवरण' },
};

export const DOCUMENTS: DocumentItem[] = [
  // IDENTITY
  { id: 1, category: 'Identity', 
    name: "Mother's citizenship card (Nagarikta)", 
    nameNe: 'आमाको नागरिकताको प्रमाणपत्र',
    emoji: '🪪',
    whyNeeded: 'Required for hospital registration without exception. Without it, admission is delayed and you cannot access the Aama Programme free delivery scheme.',
    whyNeededNe: 'अस्पतालमा भर्ना हुन यो अनिवार्य कागजात हो। यो बिना भर्ना प्रक्रियामा ढिलाइ हुनुका साथै "आमा सुरक्षा कार्यक्रम" अन्तर्गत पाइने निःशुल्क सेवा र भत्ताबाट वञ्चित भइन्छ'
  },
  { id: 2, category: 'Identity', 
    name: "Husband's citizenship card", 
    nameNe: 'श्रीमानको नागरिकताको प्रमाणपत्र',
    emoji: '🧔',
    whyNeeded: "Required for the baby's birth certificate registration. Some hospitals also require it for the mother's admission file.",
    whyNeededNe: 'बच्चाको जन्मदर्ता प्रक्रियाका लागि यो आवश्यक पर्छ। कतिपय अस्पतालहरूले आमाको भर्ना फाइल तयार पार्न पनि श्रीमानको नागरिकता माग गर्ने गर्छन्।'
  },
  { id: 3, category: 'Identity', 
    name: 'Ward or Palika recommendation letter', 
    nameNe: 'वडा वा पालिकाको सिफारिस पत्र',
    emoji: '🏛️',
    whyNeeded: 'Required by most government hospitals to verify local residency for the Aama Programme. Get this from your local ward office before your due date.',
    whyNeededNe: 'धेरैजसो सरकारी अस्पतालले "आमा कार्यक्रम" को सुविधा दिन स्थानीय बासिन्दा प्रमाणित गर्ने पत्र माग्छन्। सुत्केरी हुनुअघि नै आफ्नो वडा कार्यालयबाट यो पत्र बनाएर राख्नुहोस्।'
  },
  { id: 4, category: 'Identity', 
    name: 'Marriage registration certificate', 
    nameNe: 'विवाह दर्ता प्रमाणपत्र',
    emoji: '💍',
    whyNeeded: "Needed when applying for the baby's birth certificate at the municipality or ward office after discharge.",
    whyNeededNe: 'अस्पतालबाट डिस्चार्ज भएपछि वडा कार्यालयमा बच्चाको जन्मदर्ता गराउन यो प्रमाणपत्र अनिवार्य हुन्छ।'
  },

  // AAMA PROGRAMME
  { id: 5, category: 'Aama Programme', 
    name: 'Antenatal card from health post (ANC card)', 
    nameNe: 'गर्भवती जाँच कार्ड (ANC Card/ममता कार्ड)',
    emoji: '🤰',
    whyNeeded: 'The single most important document. All pregnancy checkup visits are recorded here. Doctors use it immediately to understand your history, risk factors, and blood type.',
    whyNeededNe: 'यो सबैभन्दा महत्त्वपूर्ण कागजात हो। यसमा गर्भावस्थाका सबै जाँचहरूको विवरण हुन्छ। डाक्टरहरूले तपाईंको स्वास्थ्य अवस्था, जोखिम र रक्तसमूह बुझ्न तुरुन्तै यो कार्ड हेर्नेछन्।'
  },
  { id: 6, category: 'Aama Programme', 
    name: 'Minimum 8 ANC checkup stamps', 
    nameNe: 'कम्तीमा ८ पटकको जाँच र सरकारी छाप',
    emoji: '💮',
    whyNeeded: 'The Aama Programme requires at least 8 ANC visits to be eligible for the full cash incentive of NPR 1,000–3,000. Missing stamps means reduced or no payment.',
    whyNeededNe: 'सरकारले तोकेअनुसार कम्तीमा ८ पटक गर्भजाँच गराएको प्रमाण (छाप) भएमा मात्र रु. १,००० देखि ३,००० सम्मको यातायात खर्च र प्रोत्साहन भत्ता पूर्ण रूपमा पाइन्छ।'
  },
  { id: 7, category: 'Aama Programme', 
    name: 'Referral letter from health post or PHC', 
    nameNe: 'स्वास्थ्य चौकी वा प्राथमिक स्वास्थ्य केन्द्रको सिफारिस पत्र',
    emoji: '✉️',
    whyNeeded: 'If being transferred from a smaller facility, this letter is required for admission at district or zonal hospitals and for Aama Programme claims.',
    whyNeededNe: 'यदि सानो स्वास्थ्य संस्थाबाट ठूलो अस्पतालमा जानुपरेको हो भने, भर्ना हुन र सरकारी सुविधा दाबी गर्न यो सिफारिस पत्र (Referral Letter) अनिवार्य चाहिन्छ।'
  },
  { id: 8, category: 'Aama Programme', 
    name: "Bank account details (mother's or husband's)", 
    nameNe: 'बैंक खाताको विवरण (आमा वा श्रीमानको)',
    emoji: '🏦',
    whyNeeded: 'The Aama cash incentive is transferred directly to a bank account in most districts. Without this, you may have to claim the money later in person.',
    whyNeededNe: 'धेरैजसो जिल्लामा सरकारले दिने प्रोत्साहन भत्ता सीधै बैंक खातामा पठाइन्छ। खाता नभएमा पैसा लिन झन्झट हुन सक्छ र पछि कार्यालयमै धाउनुपर्ने हुन सक्छ।'
  },

  // MEDICAL
  { id: 9, category: 'Medical', 
    name: 'All ultrasound reports, especially latest scan', 
    nameNe: 'सबै भिडियो एक्स-रे (Ultrasound) रिपोर्टहरू',
    emoji: '🤰',
    whyNeeded: "The latest ultrasound (32–36 weeks) shows baby's position, weight, placenta location, and fluid. Doctors need this to decide the delivery plan.",
    whyNeededNe: 'विशेषगरी अन्तिम पटकको रिपोर्टले बच्चाको अवस्था, तौल, सालको स्थान र पानीको मात्रा देखाउँछ। सुरक्षित प्रसूति गराउन डक्टरलाई यो जानकारी चाहिन्छ।'
  },
  { id: 10, category: 'Medical', 
    name: 'Blood group card', 
    nameNe: 'रक्त समूह (Blood Group) कार्ड',
    emoji: '❤️',
    whyNeeded: 'Critical if emergency transfusion is needed. Rare blood groups (B-, O-) are very hard to source quickly. Knowing the blood group in advance saves precious minutes.',
    whyNeededNe: 'आकस्मिक रगत दिनुपर्ने अवस्थामा यो कार्ड जीवनरक्षक हुन सक्छ। दुर्लभ रगत समूह भएमा रगत व्यवस्थापन गर्न समय लाग्ने हुँदा यो रिपोर्ट पहिले नै तयार हुनुपर्छ।'
  },
  { id: 11, category: 'Medical', 
    name: 'CBC and haemoglobin report', 
    nameNe: 'रगत जाँच (CBC/Haemoglobin) रिपोर्ट',
    emoji: '📊',
    whyNeeded: 'Anaemia is very common in pregnant women in Nepal and significantly affects delivery planning and blood loss risk management.',
    whyNeededNe: 'नेपालमा गर्भवती महिलामा रक्तअल्पता (एनिमिया) बढी देखिने भएकाले, रगत बग्ने जोखिम कम गर्न र सुत्केरीको पूर्व-तयारी गर्न यो रिपोर्ट आवश्यक पर्छ।'
  },
  { id: 12, category: 'Medical', 
    name: 'HIV and Hepatitis B test result', 
    nameNe: 'एचआईभी (HIV) र हेपाटाइटिस बी परीक्षण रिपोर्ट',
    emoji: '🛡️',
    whyNeeded: 'Mandatory before delivery at all government hospitals under the PMTCT programme. Without it, delivery may be delayed.',
    whyNeededNe: 'सरकारी नियमअनुसार सुत्केरी हुनुअघि यी परीक्षण अनिवार्य छन्। यो रिपोर्ट नभएमा अस्पतालमा सुत्केरी गराउने प्रक्रियामा ढिलाइ हुन सक्छ।'
  },
  { id: 13, category: 'Medical', 
    name: 'Urine routine and culture report', 
    nameNe: 'पिसाब परीक्षण (Urine Routine/Culture) रिपोर्ट',
    emoji: '📝',
    whyNeeded: 'UTIs are common in late pregnancy and must be treated before delivery to avoid complications for mother and baby.',
    whyNeededNe: 'गर्भावस्थामा पिसाबको संक्रमणले आमा र बच्चा दुवैलाई असर गर्ने भएकाले, सुत्केरी हुनुअघि नै यसको उपचार भए/नभएको थाहा पाउन यो रिपोर्ट चाहिन्छ।'
  },
  { id: 14, category: 'Medical', 
    name: 'Previous C-section or surgery records', 
    nameNe: 'पहिलेको शल्यक्रिया वा अपरेसनको रेकर्ड',
    emoji: '📂',
    whyNeeded: 'If you have had a previous C-section, this completely changes the delivery plan. The doctor must know the incision type to decide if VBAC is safe.',
    whyNeededNe: 'यदि पहिले शल्यक्रिया (सिजरियन) भएको थियो भने, डाक्टरले पुरानो घाउको अवस्था हेरेर मात्र यस पटकको प्रसूति योजना बनाउनुहुन्छ। त्यसैले पुराना रेकर्डहरू साथै राख्नुपर्छ।'
  },
  { id: 15, category: 'Medical', 
    name: 'Current medication list', 
    nameNe: 'हाल सेवन गरिरहेका औषधिहरूको सूची',
    emoji: '💊',
    whyNeeded: 'Iron tablets, calcium, thyroid medication, blood pressure medicines, or any allergy history must be known by the delivery team to avoid dangerous drug interactions.',
    whyNeededNe: 'आइरन, क्याल्सियम, थाइरोइड वा रक्तचापको औषधि र कुनै एलर्जी भएमा प्रसूति टोलीलाई जानकारी दिनुपर्छ। यसले गलत औषधिको असर (Interaction) बाट बचाउँछ।'
  },
];