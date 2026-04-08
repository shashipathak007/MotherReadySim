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

export default function WelcomeScreen({ navigation }: any) {
  const { i18n } = useTranslation();
  const isNepali = i18n.language === 'ne';
  const toggleLanguage = () => {
    i18n.changeLanguage(isNepali ? 'en' : 'ne');
  };

  const pulseScale = useSharedValue(1);
  const logoY = useSharedValue(0);

  useEffect(() => {
    // Pulse animation for the button
    pulseScale.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 1200, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 1200, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );

    // Floating animation for the logo
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

  // Step items with navigation targets
  const stepItems = isNepali ? [
    { label: 'अस्पतालको झोला',  step: 1, desc: 'चरण १ मा जानुहोस्' },
    { label: 'आपतकालीन सम्पर्क',  step: 2, desc: 'चरण २ मा जानुहोस्' },
    { label: 'गर्भावस्था परिदृश्यहरू',  step: 3, desc: 'चरण ३ मा जानुहोस्' },
  ] : [
    { label: 'Bag Checklist',  step: 1, desc: 'Jump to Step 1' },
    { label: 'Emergency Contacts',  step: 2, desc: 'Jump to Step 2' },
    { label: 'Pregnancy Scenarios',  step: 3, desc: 'Jump to Step 3' },
  ];

  const navigateToStep = (step: number) => {
    navigation.navigate('Game', { initialStep: step });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0A1628' }}>
      <StatusBar barStyle="light-content" />
      
      <ImageBackground
        source={require('../../assets/images/aama_ready_main_bg.png')}
        style={{ flex: 1, width: '100%', height: '100%' }}
        resizeMode="cover"
      >
        <LinearGradient 
          colors={['rgba(255,255,255,0.7)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.85)']}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />

        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', paddingVertical: 40 }}>
          
          {/* Language Toggle — top right */}
          <TouchableOpacity 
            onPress={toggleLanguage} 
            style={{
              position: 'absolute', top: 55, right: 20, zIndex: 100,
              backgroundColor: '#B04C8A', borderRadius: 20,
              paddingHorizontal: 14, paddingVertical: 8,
              shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 6, elevation: 5,
            }}
          >
            <Text style={{ color: '#FFF', fontSize: 13, fontWeight: '900' }}>
              {isNepali ? 'English' : 'नेपाली'}
            </Text>
          </TouchableOpacity>

          {/* TOP — Logo & Title */}
          <Animated.View entering={FadeInDown.delay(200).duration(1000)} style={{ alignItems: 'center' }}>
            <Animated.View style={[logoFloat]}>
              <View style={{ 
                width: 130, height: 130, borderRadius: 70, 
                overflow: 'hidden',
                borderWidth: 6, borderColor: '#F33A6A',
                shadowColor: '#F33A6A', shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.6, shadowRadius: 20, elevation: 20,
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
            
            <Text style={{ 
              fontSize: 42, fontWeight: '900', color: '#B04C8A', 
              letterSpacing: -1,
            }}>
              Aama<Text style={{ color: '#F33A6A' }}>Ready</Text>
            </Text>
            <View style={{ height: 2, width: 70, backgroundColor: '#F33A6A', marginTop: 6, borderRadius: 1 }} />
            <Text style={{ 
              fontSize: 12, fontWeight: '800', color: '#444', 
              letterSpacing: 6, textTransform: 'uppercase', marginTop: 10,
              opacity: 0.9
            }}>
              Simulator
            </Text>
          </Animated.View>

          {/* MIDDLE — Quick Navigation Cards */}
          <Animated.View entering={FadeInDown.delay(600).duration(800)} style={{ paddingHorizontal: 24, marginTop: 130 }}>
            <View style={{
              backgroundColor: 'rgba(243, 58, 110, 0.9)', //  light pink
              borderRadius: 28, padding: 10, paddingBottom: 14,
              borderWidth: 2, borderColor: '#90EE90' // green border
            }}>
              <Text style={{ 
                fontSize: 12, fontWeight: '900', color: 'white', 
                textAlign: 'center', letterSpacing: 3, textTransform: 'uppercase',
                marginBottom: 16, opacity: 0.85
              }}>
                {isNepali ? 'चरण छान्नुहोस्' : 'Pick a Step to Practice'}
              </Text>
              
              <View style={{ gap: 10 }}>
                {stepItems.map((item, i) => (
                  <TouchableOpacity 
                    key={i} 
                    onPress={() => navigateToStep(item.step)}
                    activeOpacity={0.7}
                    style={{ 
                      flexDirection: 'row', alignItems: 'center',
                      backgroundColor: 'rgba(255,255,255,0.85)',
                      borderRadius: 16, paddingVertical: 12, paddingHorizontal: 14,
                      borderWidth: 1.5, borderColor: '#90EE90', // green border for buttons
                      shadowColor: '#B04C8A', shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.08, shadowRadius: 6, elevation: 3,
                    }}
                  >
                    
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: '#333', fontWeight: '800', fontSize: 15 }}>{item.label}</Text>
                      <Text style={{ color: '#B04C8A', fontWeight: '600', fontSize: 11, marginTop: 2, opacity: 0.75 }}>{item.desc}</Text>
                    </View>
                    <Text style={{ fontSize: 16, color: '#C06898', marginLeft: 8 }}>›</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Animated.View>

          {/* BOTTOM — Action Button */}
          <Animated.View entering={FadeInUp.delay(1000).duration(1000)} style={{ paddingHorizontal: 32 }}>
            <Animated.View style={[buttonPulse]}>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Game', { initialStep: 1 })}
                activeOpacity={0.9}
                style={{
                  backgroundColor: '#F33A6A',
                  borderRadius: 24,
                  paddingVertical: 20,
                  alignItems: 'center',
                  shadowColor: '#F33A6A',
                  shadowOffset: { width: 0, height: 12 },
                  shadowOpacity: 0.5,
                  shadowRadius: 20,
                  elevation: 15,
                }}
              >
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: '900', letterSpacing: 2 }}>
                  {isNepali ? 'सुरुदेखि सुरु गर्नुहोस्' : 'START FROM BEGINNING'}
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 11, fontWeight: '700', letterSpacing: 1, marginTop: 4, opacity: 0.8 }}>
                  {isNepali ? 'सबै चरणहरू क्रमैसँग' : 'ALL STEPS IN ORDER'}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>

        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
