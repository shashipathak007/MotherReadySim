import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  Alert,
  Linking,
} from 'react-native';
import { CONTACTS, URGENCY_COLORS } from '../data/contacts';
import { Checkbox, ResetButton } from '../components/SharedComponents';
import { useChecklist } from '../hooks/useChecklist';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function ContactsScreen({ isEmbedded }: { isEmbedded?: boolean }) {
  const [checked, toggle, resetAll] = useChecklist('contacts_checked');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const checkedCount = CONTACTS.filter((c) => checked.has(c.id)).length;
  const totalContacts = CONTACTS.length;
  const pct = totalContacts > 0 ? Math.round((checkedCount / totalContacts) * 100) : 0;

  const handleReset = useCallback(() => {
    Alert.alert(
      'Reset all contacts?',
      'This will uncheck all saved contacts.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            resetAll();
          },
        },
      ]
    );
  }, [resetAll]);

  const toggleExpand = useCallback((id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  const handleCall = useCallback((phone: string) => {
    Linking.openURL(`tel:${phone}`);
  }, []);

  return (
    <View className="flex-1 bg-themeBg">
      <View className="bg-themeWhite border-b-[0.5px] border-themeBorder pt-2 pb-[14px]">
        {!isEmbedded && (
          <View className="flex-row justify-between items-center px-4 mb-2 mt-12">
            <Text className="text-[22px] font-bold text-textPrimary tracking-[-0.3px]">Contacts</Text>
            <ResetButton onPress={handleReset} />
          </View>
        )}
        {isEmbedded && (
          <View className="flex-row justify-end px-4 mb-2 mt-2">
            <ResetButton onPress={handleReset} />
          </View>
        )}
        <View className="px-4">
          <View className="flex-row justify-between items-center mb-1.5">
            <Text className="text-[12px] text-textSecondary font-medium">
              {checkedCount} of {totalContacts} contacts saved
            </Text>
            <Text className="text-[12px] text-themePrimary font-bold">{pct}%</Text>
          </View>
          <View className="h-2.5 bg-themeBorder rounded-full overflow-hidden">
            <View className="h-2.5 bg-themePrimary rounded-full" style={{ width: `${pct}%` }} />
          </View>
          {checkedCount === totalContacts && totalContacts > 0 && (
            <View className="mt-3 bg-greenBg border-[1px] border-greenBorder py-3 px-4 rounded-xl items-center">
              <Text className="text-[14px] text-greenText font-bold">✓ All contacts saved!</Text>
            </View>
          )}
        </View>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingTop: 8, paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
        {CONTACTS.map((contact) => {
          const isChecked = checked.has(contact.id);
          const isExpanded = expandedId === contact.id;
          const urgencyColors = URGENCY_COLORS[contact.urgency];

          return (
            <View
              key={contact.id}
              className={`bg-themeWhite mx-4 mt-2 rounded-xl border-[0.5px] border-themeBorder overflow-hidden ${
                isChecked ? 'border-l-[4px] border-l-greenBorder' : ''
              }`}
            >
              <TouchableOpacity
                className="flex-row items-start p-3.5"
                activeOpacity={0.6}
                onPress={() => toggleExpand(contact.id)}
              >
                {/* Avatar */}
                <View
                  className="w-11 h-11 rounded-full items-center justify-center"
                  style={{ backgroundColor: urgencyColors.bg }}
                >
                  <Text className="text-[14px] font-extrabold" style={{ color: urgencyColors.text }}>
                    {contact.initials}
                  </Text>
                </View>

                {/* Content */}
                <View className="flex-1 ml-3 mr-2">
                  <View className="flex-row items-start justify-between mb-1">
                    <Text className="text-[14px] font-semibold text-textPrimary flex-1 leading-5 mr-2" numberOfLines={2}>
                      {contact.name}
                    </Text>
                    <View className="px-1.5 py-0.5 rounded-md" style={{ backgroundColor: urgencyColors.bg }}>
                      <Text className="text-[9px] font-bold tracking-[0.5px]" style={{ color: urgencyColors.text }}>
                        {contact.urgency}
                      </Text>
                    </View>
                  </View>
                  <Text className="text-[12px] text-textMuted leading-[18px] mb-1.5">
                    {contact.shortDesc}
                  </Text>
                  {contact.phone ? (
                    <TouchableOpacity
                      className="flex-row items-center bg-blueBg px-2.5 py-1.5 rounded-lg self-start"
                      onPress={() => handleCall(contact.phone)}
                      activeOpacity={0.7}
                    >
                      <Text className="text-[12px] mr-1">📞</Text>
                      <Text className="text-[12px] font-semibold text-blueText">Call {contact.phone}</Text>
                    </TouchableOpacity>
                  ) : null}
                </View>

                {/* Checkbox */}
                <View className="pt-0.5">
                  <Checkbox checked={isChecked} onToggle={() => toggle(contact.id)} />
                </View>
              </TouchableOpacity>

              {isExpanded && (
                <View className="bg-themePrimaryLight px-3.5 py-3 border-t-[0.5px] border-t-themeBorder">
                  <Text className="text-[14px] text-textSecondary leading-[21px]">
                    {contact.fullDetail}x2
                  </Text>
                </View>
              )}
            </View>
          );
        })}
        <View className="h-10" />
      </ScrollView>
    </View>
  );
}
