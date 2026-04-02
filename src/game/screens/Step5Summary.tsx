import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { useGame } from '../context/GameContext';
import Animated, { FadeInUp, ZoomIn, FadeInDown } from 'react-native-reanimated';
import { BAG_ITEMS } from '../../data/bagItems';
import { DOCUMENTS } from '../../data/documents';
import { CONTACTS } from '../../data/contacts';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window');

export default function Step5Summary({ onReplay }: { onReplay: () => void }) {
  const { packedBagItems, collectedDocuments, savedContacts, quizStars, resetGame } = useGame();
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  const totalPossibleStars = 5;
  const baggedRatio = packedBagItems.length / BAG_ITEMS.length;
  const docsRatio = collectedDocuments.length / DOCUMENTS.length;
  const contactsRatio = savedContacts.length / CONTACTS.length;
  const quizRatio = quizStars / totalPossibleStars;

  const scorePercentage = (baggedRatio + docsRatio + contactsRatio + quizRatio) / 4;

  let badgeMsg = '';
  let badgeEmoji = '';
  let subMsg = '';
  if (scorePercentage >= 1) {
    badgeMsg = isNe ? 'पूर्ण तयार' : 'Fully Prepared';
    badgeEmoji = '🏆';
    subMsg = isNe ? 'शाबास! तपाईं पूर्ण तयार हुनुहुन्छ!' : 'Shabash! You are completely prepared.';
  } else if (scorePercentage > 0.7) {
    badgeMsg = isNe ? 'लगभग तयार' : 'Almost Ready';
    badgeEmoji = '💪';
    subMsg = isNe ? 'राम्रो छ! छुटेका चरणहरू समीक्षा गर्नुहोस्।' : 'Great job! Review the steps you missed and try again.';
  } else {
    badgeMsg = isNe ? 'सिक्दै जानुहोस्' : 'Keep Learning';
    badgeEmoji = '📖';
    subMsg = isNe ? 'तपाईं सिक्दै हुनुहुन्छ! छुटेका चरणहरू समीक्षा गरेर फेरि प्रयास गर्नुहोस्।' : 'You are getting there! Review the steps you missed and try again.';
  }

  const handleShare = async () => {
    try {
      await Share.share({
        message: isNe 
          ? `म Aama Ready खेलमा ${badgeMsg} भएँ! तपाईं पनि खेल्नुहोस्।`
          : `I just completed the Aama Ready journey and I am ${badgeMsg}! Play the game to test your pregnancy preparedness in Nepal.`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleReplay = () => {
    resetGame();
    onReplay();
  };

  const getProgressColor = (ratio: number) => {
    if (ratio >= 1) return '#10B981';
    if (ratio >= 0.6) return '#F59E0B';
    return '#EF4444';
  };

  const ProgressBar = ({ ratio, label, icon, count, total }: { ratio: number, label: string, icon: string, count: number, total: number }) => (
    <View style={styles.progressItem}>
      <View style={styles.progressLabelRow}>
        <Text style={styles.progressIcon}>{icon}</Text>
        <Text style={styles.progressLabel}>{label}</Text>
        <Text style={styles.progressCount}>{count}/{total}</Text>
      </View>
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${Math.max(ratio * 100, 3)}%`, backgroundColor: getProgressColor(ratio) }]} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Background */}
      <ImageBackground source={require('../../../assets/images/aama_ready_main_bg.png')} style={StyleSheet.absoluteFill} resizeMode="cover">
        <LinearGradient colors={['rgba(255,240,248,0.5)', 'rgba(255,255,255,0.75)']} style={StyleSheet.absoluteFill} />
      </ImageBackground>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Badge */}
        <Animated.View entering={ZoomIn.delay(200)} style={styles.badgeContainer}>
          <Text style={styles.badgeEmoji}>{badgeEmoji}</Text>
          <Text style={styles.badgeMsg}>{badgeMsg}</Text>
          <Text style={styles.stars}>{'⭐'.repeat(quizStars)}{'☆'.repeat(5 - quizStars)}</Text>
        </Animated.View>

        {/* Stats Card */}
        <Animated.View entering={FadeInUp.delay(400)} style={styles.statsCard}>
          <Text style={styles.statsTitle}>{isNe ? 'तपाईंको नतिजा' : 'Your Results'}</Text>
          
          <ProgressBar icon="🎒" label={isNe ? 'अस्पतालको झोला' : 'Hospital Bag'} ratio={baggedRatio} count={packedBagItems.length} total={BAG_ITEMS.length} />
          <ProgressBar icon="📁" label={isNe ? 'कागजातहरू' : 'Documents'} ratio={docsRatio} count={collectedDocuments.length} total={DOCUMENTS.length} />
          <ProgressBar icon="📞" label={isNe ? 'सम्पर्कहरू' : 'Contacts'} ratio={contactsRatio} count={savedContacts.length} total={CONTACTS.length} />
          <ProgressBar icon="⚠️" label={isNe ? 'खतरा प्रश्नोत्तरी' : 'Danger Quiz'} ratio={quizRatio} count={quizStars} total={totalPossibleStars} />

          <View style={styles.scoreSummary}>
            <Text style={styles.scoreLabel}>{isNe ? 'कुल स्कोर' : 'Overall Score'}</Text>
            <Text style={[styles.scoreValue, { color: getProgressColor(scorePercentage) }]}>
              {Math.round(scorePercentage * 100)}%
            </Text>
          </View>
        </Animated.View>

        {/* Message */}
        <Animated.View entering={FadeInUp.delay(600)}>
          <Text style={styles.subMsg}>{subMsg}</Text>
        </Animated.View>

        {/* Action Buttons */}
        <Animated.View entering={FadeInDown.delay(800)} style={styles.btnRow}>
          <TouchableOpacity style={styles.replayBtn} onPress={handleReplay}>
            <Text style={styles.replayBtnText}>{isNe ? '🔄 फेरि खेल्नुहोस्' : '🔄 Play Again'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareBtnWrap} onPress={handleShare}>
            <LinearGradient 
              colors={['#B04C8A', '#E84393']} 
              start={{ x: 0, y: 0 }} 
              end={{ x: 1, y: 1 }} 
              style={styles.shareBtn}
            >
              <Text style={styles.shareBtnText}>{isNe ? '📤 शेयर गर्नुहोस्' : '📤 Share Score'}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9FB' },
  scrollContent: { 
    paddingTop: 80, paddingBottom: 50, paddingHorizontal: 24, 
    alignItems: 'center',
  },
  badgeContainer: { 
    alignItems: 'center', marginBottom: 28,
  },
  badgeEmoji: { fontSize: 64, marginBottom: 8 },
  badgeMsg: { 
    fontSize: 30, fontWeight: '900', color: '#B04C8A', textAlign: 'center', marginBottom: 8,
  },
  stars: { fontSize: 28, color: '#F59E0B' },

  statsCard: { 
    width: '100%', backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 24, padding: 24, 
    marginBottom: 24,
    shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 16, elevation: 8,
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.9)',
  },
  statsTitle: { 
    fontSize: 18, fontWeight: '900', color: '#333', marginBottom: 20, textAlign: 'center',
  },
  progressItem: { marginBottom: 16 },
  progressLabelRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  progressIcon: { fontSize: 16, marginRight: 8 },
  progressLabel: { fontSize: 14, fontWeight: '700', color: '#444', flex: 1 },
  progressCount: { fontSize: 14, fontWeight: '900', color: '#B04C8A' },
  progressBarBg: { 
    height: 10, backgroundColor: '#F3F4F6', borderRadius: 5, overflow: 'hidden',
  },
  progressBarFill: { 
    height: 10, borderRadius: 5,
  },
  scoreSummary: { 
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginTop: 20, paddingTop: 16, borderTopWidth: 1, borderTopColor: '#F0E0E8',
  },
  scoreLabel: { fontSize: 18, fontWeight: '900', color: '#333' },
  scoreValue: { fontSize: 32, fontWeight: '900' },

  subMsg: { 
    fontSize: 15, color: '#555', textAlign: 'center', marginBottom: 28, 
    fontStyle: 'italic', lineHeight: 24, paddingHorizontal: 8,
  },

  btnRow: { flexDirection: 'row', gap: 14, width: '100%' },
  replayBtn: { 
    flex: 1, paddingVertical: 16, borderRadius: 14, alignItems: 'center', justifyContent: 'center', 
    backgroundColor: '#FFF', borderWidth: 1.5, borderColor: '#F0D0E0',
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, elevation: 3,
  },
  replayBtnText: { color: '#B04C8A', fontSize: 15, fontWeight: '900' },
  shareBtnWrap: { 
    flex: 1, borderRadius: 14, overflow: 'hidden', 
    shadowColor: '#B04C8A', shadowOpacity: 0.25, shadowRadius: 12, elevation: 6,
  },
  shareBtn: { paddingVertical: 16, alignItems: 'center', justifyContent: 'center' },
  shareBtnText: { color: '#FFF', fontSize: 15, fontWeight: '900' },
});
