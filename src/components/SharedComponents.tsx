import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';


if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// ... Checkbox props
interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onToggle }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        onToggle();
      }}
      style={{
        width: 28,
        height: 28,
        borderRadius: 8,
        borderWidth: checked ? 0 : 2,
        borderColor: '#E8637B',
        backgroundColor: checked ? '#E8637B' : '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: checked ? '#E8637B' : 'transparent',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: checked ? 0.3 : 0,
        shadowRadius: 4,
        elevation: checked ? 3 : 0,
      }}
      activeOpacity={0.7}
    >
      {checked && (
        <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '900', marginTop: -1 }}>✓</Text>
      )}
    </TouchableOpacity>
  );
};

// ... ProgressHeaderProps
interface ProgressHeaderProps {
  title: string;
  current: number;
  total: number;
  label?: string;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({
  title,
  current,
  total,
  label,
}) => {
  const pct = total > 0 ? (current / total) * 100 : 0;
  const displayLabel = label || `${current} of ${total} ready`;

  return (
    <View className="bg-themeWhite px-4 pt-4 pb-3 border-b-[0.5px] border-themeBorder">
      <View className="flex-row justify-between items-center mb-2.5">
        <Text className="text-[22px] font-bold text-textPrimary tracking-[-0.3px]">{title}</Text>
        <Text className="text-[12px] text-textSecondary font-medium">{displayLabel}</Text>
      </View>
      <View className="h-2.5 bg-themeBorder rounded-full overflow-hidden">
        <View className="h-2.5 bg-themePrimary rounded-full" style={{ width: `${pct}%` }} />
      </View>
      {pct === 100 && total > 0 && (
        <View className="mt-3 bg-greenBg border-[1px] border-greenBorder py-3 px-4 rounded-xl items-center flex-row justify-center">
          <Text className="text-greenText text-[14px] font-bold">All done! You are ready.</Text>
        </View>
      )}
    </View>
  );
};

// ... CategoryBadgeProps
interface CategoryBadgeProps {
  label: string;
  textColor: string;
  bgColor: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  label,
  textColor,
  bgColor,
}) => {
  return (
    <View className="px-2 py-[3px] rounded-full self-start" style={{ backgroundColor: bgColor }}>
      <Text className="text-[11px] font-semibold" style={{ color: textColor }}>{label}</Text>
    </View>
  );
};

// ... SegmentedControlProps
interface SegmentedControlProps {
  tabs: string[];
  activeIndex: number;
  onTabPress: (index: number) => void;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  tabs,
  activeIndex,
  onTabPress,
}) => {
  return (
    <View className="flex-row bg-[#EAE2E3] rounded-xl p-[3px] mx-4 my-3">
      {tabs.map((tab, index) => {
        const isActive = activeIndex === index;
        return (
          <TouchableOpacity
            key={tab}
            className={`flex-1 py-2.5 items-center rounded-lg ${
              isActive ? 'bg-themeWhite' : ''
            }`}
            style={
              isActive
                ? {
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                    elevation: 2,
                  }
                : {}
            }
            onPress={() => onTabPress(index)}
            activeOpacity={0.7}
          >
            <Text
              className={`text-[14px] font-semibold ${
                isActive ? 'text-textPrimary' : 'text-textMuted'
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// ... ResetButtonProps
interface ResetButtonProps {
  onPress: () => void;
}

export const ResetButton: React.FC<ResetButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="px-3 py-1.5" activeOpacity={0.6}>
      <Text className="text-[12px] text-textMuted font-medium">Reset all</Text>
    </TouchableOpacity>
  );
};

// Phase Reminder Banner
export const PhaseReminderBanner: React.FC = () => {
  return (
    <View style={{ backgroundColor: '#FCEEF1', borderBottomWidth: 1, borderBottomColor: '#E8637B', paddingHorizontal: 16, paddingVertical: 10 }}>
      <Text style={{ fontSize: 12, color: '#B8364C', fontWeight: '700', lineHeight: 18, textAlign: 'center' }}>
         Everything from your Phase 1 hospital bag carries forward.
      </Text>
    </View>
  );
};


// Generic Info Card with Expand/Collapse
interface InfoCardProps {
  title: string;
  detail: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  prefix?: string;
  plain?: boolean; // when true: no dot, neutral left border (for unchecked checklist items)
  checked?: boolean;
  onCheck?: () => void;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  detail,
  borderColor = '#E8637B',
  bgColor = '#FCEEF1',
  textColor = '#1E1517',
  prefix,
  plain = false,
  checked,
  onCheck,
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const isCheckable = onCheck !== undefined;
  const showChecked = isCheckable && checked;
  // If it's a checklist item, default to neutral border unless checked.
  const leftBorderColor = showChecked ? '#3E9E68' : (plain || isCheckable ? '#E2D6D8' : borderColor);

  return (
    <View
      className="bg-themeWhite mx-4 mt-2 rounded-xl border-[0.5px] border-themeBorder border-l-[4px] overflow-hidden"
      style={{ borderLeftColor: leftBorderColor }}
    >
      <View className="flex-row items-center">
        {isCheckable && (
          <View className="pl-3.5 pr-1.5">
            <Checkbox checked={checked!} onToggle={onCheck!} />
          </View>
        )}
        <TouchableOpacity
          className="flex-1 flex-row items-center py-3.5 pr-3.5 pl-2"
          activeOpacity={0.7}
          onPress={toggle}
        >
          {prefix && !isCheckable && (
            <View className="w-5 h-5 rounded-full mr-2.5 items-center justify-center" style={{ backgroundColor: borderColor }}>
              <Text className="text-[10px] font-bold text-themeWhite">{prefix}</Text>
            </View>
          )}
          {!prefix && !plain && !isCheckable && (
            <View className="w-2 h-2 rounded-full mr-2.5" style={{ backgroundColor: borderColor }} />
          )}
          <Text 
            className={`text-[14px] font-semibold flex-1 leading-5 ${showChecked ? 'text-textMuted' : 'text-textPrimary'}`}
          >
            {title}
          </Text>
          <Text className="text-[16px] text-textMuted ml-1">{expanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>
      </View>
      
      {expanded && (
        <View className="px-3.5 pt-3 pb-2.5 border-t-[0.5px] border-t-themeBorder" style={{ backgroundColor: (plain || isCheckable) && !showChecked ? '#FAF5F6' : (showChecked ? '#D9F0E2' : bgColor) }}>
          <View className="flex-row justify-between items-start mb-1">
            <Text className="text-[12px] font-bold uppercase tracking-[0.5px] mb-1.5" style={{ color: showChecked ? '#1D5C38' : (plain || isCheckable ? '#5A5254' : borderColor) }}>Details</Text>
          </View>
          <Text className="text-[14px] leading-[21px] pb-1.5" style={{ color: textColor }}>
            {detail}
          </Text>
        </View>
      )}
    </View>
  );
};
