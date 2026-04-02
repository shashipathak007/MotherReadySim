import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, Dimensions, StatusBar } from 'react-native';
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
              {isNepali ? '🇬🇧 English' : '🇳🇵 नेपाली'}
            </Text>
          </TouchableOpacity>

          {/* TOP — Logo & Title */}
          <Animated.View entering={FadeInDown.delay(200).duration(1000)} style={{ alignItems: 'center' }}>
            <Animated.View style={[logoFloat]}>
              <View style={{ 
                width: 140, height: 140, borderRadius: 80, 
                overflow: 'hidden',
                borderWidth: 7, borderColor: '#F33A6A',
                shadowColor: '#F33A6A', shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.6, shadowRadius: 20, elevation: 20,
                marginBottom: 25,
                backgroundColor: '#FFF'
              }}>
                <Image 
                  source={require('../../assets/images/aama_ready_logo.png')} 
                  style={{ width: 130, height: 130 }} 
                  resizeMode="contain" 
                />
              </View>
            </Animated.View>
            
            <Text style={{ 
              fontSize: 48, fontWeight: '900', color: '#B04C8A' , 
              letterSpacing: -1,
            }}>
              Aama<Text style={{ color: '#F33A6A' }}>Ready</Text>
            </Text>
            <View style={{ height: 2, width: 80, backgroundColor: '#F33A6A', marginTop: 8, borderRadius: 1 }} />
            <Text style={{ 
              fontSize: 14, fontWeight: '800', color: '#444', 
              letterSpacing: 6, textTransform: 'uppercase', marginTop: 12,
              opacity: 0.9
            }}>
              Simulator
            </Text>
          </Animated.View>

          {/* MIDDLE — Key Features */}
          <Animated.View entering={FadeInDown.delay(600).duration(800)} style={{ paddingHorizontal: 32 }}>
            <View style={{
              backgroundColor: 'rgba(255,255,255,0.6)',
              borderRadius: 30, padding: 25,
              borderWidth: 1, borderColor: 'rgba(255,255,255,1)'
            }}>
              <Text style={{ 
                fontSize: 13, fontWeight: '900', color: '#B04C8A', 
                textAlign: 'center', letterSpacing: 4, textTransform: 'uppercase',
                marginBottom: 20, opacity: 0.8
              }}>
                {isNepali ? 'मातृत्व तयारी' : 'Maternal Readiness'}
              </Text>
              
              <View style={{ gap: 14 }}>
               {(isNepali ? [
                  { label: 'अस्पतालको झोला', emoji: '🎒' },
                  { label: 'कागजात गाइड', emoji: '📁' },
                  { label: 'आपतकालीन सम्पर्क', emoji: '📞' },
                  { label: 'खतराका संकेत', emoji: '⚠️' },
                ] : [
                  { label: 'Bag Checklist', emoji: '🎒' },
                  { label: 'Document Guide', emoji: '📁' },
                  { label: 'Emergency Contacts', emoji: '📞' },
                  { label: 'Danger Sign Quiz', emoji: '⚠️' },
                ]).map((item, i) => (
                  <View key={i} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: 'rgba(255,255,255,0.8)', alignItems: 'center', justifyContent: 'center', marginRight: 15, borderWidth: 1, borderColor: '#FADDEB' }}>
                       <Text style={{ fontSize: 18 }}>{item.emoji}</Text>
                    </View>
                    <Text style={{ color: '#333', fontWeight: '800', fontSize: 17 }}>{item.label}</Text>
                  </View>
                ))}
              </View>
            </View>
          </Animated.View>

          {/* BOTTOM — Action Button */}
          <Animated.View entering={FadeInUp.delay(1000).duration(1000)} style={{ paddingHorizontal: 32 }}>
            <Animated.View style={[buttonPulse]}>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Game')}
                activeOpacity={0.9}
                style={{
                  backgroundColor: '#F33A6A',
                  borderRadius: 24,
                  paddingVertical: 22,
                  alignItems: 'center',
                  shadowColor: '#F33A6A',
                  shadowOffset: { width: 0, height: 12 },
                  shadowOpacity: 0.5,
                  shadowRadius: 20,
                  elevation: 15,
                }}
              >
                <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: '900', letterSpacing: 2 }}>
                  {isNepali ? 'सुरु गर्नुहोस्' : 'START SIMULATION'}
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: '700', letterSpacing: 1, marginTop: 4, opacity: 0.8 }}>
                  {isNepali ? 'यात्राको तयारी गर्नुहोस्' : 'PREPARE FOR THE JOURNEY'}
                </Text>
              </TouchableOpacity>
            </Animated.View>

            <View style={{ alignItems: 'center', marginTop: 25 }}>
              {/* <Text style={{ color: 'rgba(0,0,0,0.4)', fontSize: 11, fontWeight: '800', letterSpacing: 2, textTransform: 'uppercase' }}>
                {isNepali ? 'आपतकालीन शिक्षा' : 'Education for Emergencies'}
              </Text> */}
            </View>
          </Animated.View>

        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
