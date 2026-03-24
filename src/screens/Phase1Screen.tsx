import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, LayoutAnimation } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HospitalBagScreen from './HospitalBagScreen';
import DocumentsScreen from './DocumentsScreen';
import DangerSignsScreen from './DangerSignsScreen';
import ContactsScreen from './ContactsScreen';

const TABS = ['Hospital Bag', 'Documents', 'Danger Signs', 'Contacts'];

export default function Phase1Screen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0: return <HospitalBagScreen isEmbedded />;
      case 1: return <DocumentsScreen isEmbedded />;
      case 2: return <DangerSignsScreen isEmbedded />;
      case 3: return <ContactsScreen isEmbedded />;
      default: return null;
    }
  };

  return (
    <View className="flex-1 bg-themeBg">
      <View className="bg-themeWhite pt-12 pb-2 border-b-[0.5px] border-themeBorder px-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mb-3 w-10 h-10 -ml-2 items-center justify-center">
          <Text className="text-[28px] text-textPrimary leading-8">←</Text>
        </TouchableOpacity>
        <Text className="text-[24px] font-bold text-textPrimary tracking-[-0.5px] mb-1">Preparation Phase</Text>
        <Text className="text-[12px] text-textSecondary leading-5">Everything you need ready before labour begins.</Text>
      </View>
      
      <View className="px-1 py-1 bg-themeWhite border-b-[0.5px] border-themeBorder">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 10 }}>
          {TABS.map((tab, idx) => (
            <TouchableOpacity
              key={tab}
              onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                setActiveTab(idx);
              }}
              className={`px-4 py-2 mr-2 rounded-full border-[0.5px] ${activeTab === idx ? 'bg-[#E8637B] border-[#E8637B]' : 'bg-themeWhite border-[#E2D6D8]'}`}
            >
              <Text className={`text-[13px] font-bold ${activeTab === idx ? 'text-themeWhite' : 'text-textSecondary'}`}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <View className="flex-1">
        {renderContent()}
      </View>
    </View>
  );
}
