import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { 
  FadeInDown, 
  FadeInUp,
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withSequence, 
  withTiming,
  Easing
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

const COLORS = {
  primary: '#F33A6A',
  secondary: '#B04C8A',
  glass: 'rgba(255,255,255,0.9)',
  cardGlass: 'rgba(255,255,255,0.35)',
  borderSoft: 'rgba(243,58,106,0.25)',
  textDark: '#2D2D2D',
};

export default function WelcomeScreen({ navigation }: any) {
  const { i18n } = useTranslation();
  const isNepali = i18n.language === 'ne';

  const toggleLanguage = () => {
    i18n.changeLanguage(isNepali ? 'en' : 'ne');
  };

  const pulseScale = useSharedValue(1);
  const logoY = useSharedValue(0);

  useEffect(() => {
    pulseScale.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 1200, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 1200, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );

    logoY.value = withRepeat(
      withSequence(
        withTiming(-10, { duration: 2500, easing: Easing.inOut(Easing.ease) }),
        withTiming(0, { duration: 2500, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );
  }, []);

  const buttonPulse = useAnimatedStyle(() => ({
    transform: [{ scale: pulseScale.value }],
  }));

  const logoFloat = useAnimatedStyle(() => ({
    transform: [{ translateY: logoY.value }],
  }));

  const stepItems = isNepali ? [
    { label: 'अस्पतालको झोला', step: 1, desc: 'चरण १ मा जानुहोस्' },
    { label: 'आपतकालीन सम्पर्क', step: 2, desc: 'चरण २ मा जानुहोस्' },
    { label: 'गर्भावस्था परिदृश्यहरू', step: 3, desc: 'चरण ३ मा जानुहोस्' },
  ] : [
    { label: 'Bag Checklist', step: 1, desc: 'Jump to Step 1' },
    { label: 'Emergency Contacts', step: 2, desc: 'Jump to Step 2' },
    { label: 'Pregnancy Scenarios', step: 3, desc: 'Jump to Step 3' },
  ];

  const navigateToStep = (step: number) => {
    navigation.navigate('Game', { initialStep: step });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0A1628' }}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={require('../../assets/images/aama_ready_main_bg.png')}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        {/* 🔥 Improved Gradient */}
        <LinearGradient 
          colors={[
            'rgba(255,255,255,0.85)',
            'rgba(243,58,106,0.08)',
            'rgba(176,76,138,0.12)',
          ]}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />

        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', paddingVertical: 40 }}>
          
          {/* Language Toggle */}
          <TouchableOpacity 
            onPress={toggleLanguage} 
            style={{
              position: 'absolute',
              top: 55,
              right: 20,
              zIndex: 100,
              backgroundColor: 'rgba(176,76,138,0.9)',
              borderRadius: 20,
              paddingHorizontal: 14,
              paddingVertical: 8,
              shadowColor: '#000',
              shadowOpacity: 0.15,
              shadowRadius: 6,
              elevation: 5,
            }}
          >
            <Text style={{ color: '#FFF', fontSize: 13, fontWeight: '900' }}>
              {isNepali ? 'English' : 'नेपाली'}
            </Text>
          </TouchableOpacity>

          {/* Logo */}
          <Animated.View entering={FadeInDown.delay(200).duration(1000)} style={{ alignItems: 'center' }}>
            <Animated.View style={[logoFloat]}>
              <View style={{ 
                width: 130,
                height: 130,
                borderRadius: 70,
                overflow: 'hidden',
                borderWidth: 5,
                borderColor: COLORS.primary,
                shadowColor: COLORS.primary,
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.4,
                shadowRadius: 18,
                elevation: 15,
                marginBottom: 18,
                backgroundColor: '#FFF'
              }}>
                <Image 
                  source={require('../../assets/images/aama_ready_logo.png')} 
                  style={{ width: 120, height: 120 }} 
                  resizeMode="contain" 
                />
              </View>
            </Animated.View>

            <Text style={{ fontSize: 42, fontWeight: '900', color: COLORS.secondary }}>
              Aama<Text style={{ color: COLORS.primary }}>Ready</Text>
            </Text>

            <View style={{ height: 2, width: 70, backgroundColor: COLORS.primary, marginTop: 6 }} />

            <Text style={{ 
              fontSize: 12,
              fontWeight: '800',
              color: '#888',
              opacity: 0.7,
              letterSpacing: 6,
              marginTop: 10,
            }}>
              Simulator
            </Text>
          </Animated.View>

          {/* Middle Card */}
          <Animated.View entering={FadeInDown.delay(600).duration(800)} style={{ paddingHorizontal: 24, marginTop: 130 }}>
            <View style={{
              backgroundColor: COLORS.cardGlass,
              borderRadius: 28,
              padding: 16,
              borderWidth: 1.5,
              borderColor: 'rgba(255,255,255,0.6)',
            }}>
              
              <Text style={{ 
                fontSize: 12,
                fontWeight: '900',
                color: COLORS.secondary,
                textAlign: 'center',
                letterSpacing: 2,
                marginBottom: 16,
              }}>
                {isNepali ? 'चरण छान्नुहोस्' : 'Pick a Step to Practice'}
              </Text>

              <View style={{ gap: 12 }}>
                {stepItems.map((item, i) => (
                  <TouchableOpacity 
                    key={i}
                    onPress={() => navigateToStep(item.step)}
                    activeOpacity={0.8}
                    style={{ 
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: COLORS.glass,
                      borderRadius: 16,
                      paddingVertical: 12,
                      paddingHorizontal: 14,
                      borderWidth: 1,
                      borderColor: COLORS.borderSoft,
                      shadowColor: '#000',
                      shadowOpacity: 0.08,
                      shadowRadius: 10,
                      elevation: 3,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: COLORS.textDark, fontWeight: '800', fontSize: 15 }}>
                        {item.label}
                      </Text>
                      <Text style={{ color: COLORS.secondary, fontSize: 11, marginTop: 2, opacity: 0.7 }}>
                        {item.desc}
                      </Text>
                    </View>

                    <Text style={{ fontSize: 20, color: COLORS.primary, fontWeight: '900' }}>
                      →
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Animated.View>

          {/* Button */}
          <Animated.View entering={FadeInUp.delay(1000).duration(1000)} style={{ paddingHorizontal: 32 }}>
            <Animated.View style={[buttonPulse]}>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Game', { initialStep: 1 })}
                activeOpacity={0.9}
              >
                <LinearGradient
                  colors={['#F33A6A', '#B04C8A']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    borderRadius: 24,
                    paddingVertical: 20,
                    alignItems: 'center',
                    shadowColor: '#F33A6A',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.35,
                    shadowRadius: 16,
                    elevation: 12,
                  }}
                >
                  <Text style={{ color: '#FFF', fontSize: 20, fontWeight: '900', letterSpacing: 2 }}>
                    {isNepali ? 'सुरुदेखि सुरु गर्नुहोस्' : 'START FROM BEGINNING'}
                  </Text>

                  <Text style={{ color: '#FFF', fontSize: 11, marginTop: 4, opacity: 0.8 }}>
                    {isNepali ? 'सबै चरणहरू क्रमैसँग' : 'ALL STEPS IN ORDER'}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>

        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}