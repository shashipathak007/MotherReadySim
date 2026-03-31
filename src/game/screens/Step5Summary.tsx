import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share, ImageBackground } from 'react-native';
import { useGame } from '../context/GameContext';
import { PregnantWoman } from '../components/GameSVGs';
import Animated, { FadeInUp, ZoomIn } from 'react-native-reanimated';
import { BAG_ITEMS } from '../../data/bagItems';
import { DOCUMENTS } from '../../data/documents';
import { CONTACTS } from '../../data/contacts';
import { LinearGradient } from 'expo-linear-gradient';

export default function Step5Summary({ onReplay }: { onReplay: () => void }) {
  const { packedBagItems, collectedDocuments, savedContacts, quizStars, resetGame } = useGame();

  const totalPossibleStars = 5;
  const baggedRatio = packedBagItems.length / BAG_ITEMS.length;
  const docsRatio = collectedDocuments.length / DOCUMENTS.length;
  const contactsRatio = savedContacts.length / CONTACTS.length;
  const quizRatio = quizStars / totalPossibleStars;

  const scorePercentage = (baggedRatio + docsRatio + contactsRatio + quizRatio) / 4;

  let badgeMsg = '';
  let subMsg = '';
  if (scorePercentage >= 1) {
    badgeMsg = 'Fully Prepared';
    subMsg = 'Shabash! तपाईं पूर्ण तयार हुनुहुन्छ — You are completely prepared.';
  } else if (scorePercentage > 0.7) {
    badgeMsg = 'Almost Ready';
    subMsg = 'राम्रो छ! Review the steps you missed and try again.';
  } else {
    badgeMsg = 'Keep Learning';
    subMsg = 'You are getting there! Review the steps you missed and try again.';
  }

  const handleShare = async () => {
    try {
      await Share.share({
        message: `I just completed the Aama Ready journey and I am ${badgeMsg}! Play the game to test your pregnancy preparedness in Nepal.`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleReplay = () => {
    resetGame();
    onReplay();
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/images/aama_ready_main_bg.png')} style={StyleSheet.absoluteFill}>
        <LinearGradient colors={['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.7)']} style={StyleSheet.absoluteFill} />
      </ImageBackground>
      
      <Animated.View entering={ZoomIn.delay(500)} style={styles.characterContainer}>
        <PregnantWoman pose="happy" />
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(100)} style={styles.summaryCardWrapper}>
        <LinearGradient 
          colors={['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.85)']} 
          style={styles.summaryCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Text style={styles.badgeMsg}>{badgeMsg}</Text>
          <Text style={styles.stars}>{'⭐'.repeat(quizStars)}{'★'.repeat(5 - quizStars)}</Text>
          
          <View style={styles.statsContainer}>
            <Text style={styles.statLine}>🎒 {packedBagItems.length} / {BAG_ITEMS.length} Packed</Text>
            <Text style={styles.statLine}>📁 {collectedDocuments.length} / {DOCUMENTS.length} Documents</Text>
            <Text style={styles.statLine}>📞 {savedContacts.length} / {CONTACTS.length} Contacts</Text>
            <Text style={styles.statLine}>⚠️ {quizStars} / 5 Quiz</Text>
          </View>

          <Text style={styles.subMsg}>{subMsg}</Text>

          <View style={styles.btnRow}>
            <TouchableOpacity style={styles.replayBtn} onPress={handleReplay}>
              <Text style={styles.replayBtnText}>Play Again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareBtnWrap} onPress={handleShare}>
              <LinearGradient colors={['#F33A6A', '#B04C8A']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.shareBtn}>
                <Text style={styles.shareBtnText}>Share Score</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9FB' },
  characterContainer: { position: 'absolute', bottom: 350, right: 80, transform: [{scale: 1.5}] },
  summaryCardWrapper: { position: 'absolute', bottom: 30, left: 20, right: 20, borderRadius: 30, shadowColor: '#B04C8A', shadowOpacity: 0.15, shadowRadius: 15, elevation: 15 },
  summaryCard: { borderRadius: 30, padding: 30, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.5)' },
  badgeMsg: { fontSize: 32, fontWeight: '900', color: '#B04C8A', marginBottom: 10, textAlign: 'center' },
  stars: { fontSize: 36, marginBottom: 25, color: '#F33A6A' },
  statsContainer: { width: '100%', marginBottom: 25, backgroundColor: 'rgba(255, 239, 244, 0.6)', padding: 25, borderRadius: 20, borderWidth: 1, borderColor: '#FADDEB' },
  statLine: { fontSize: 16, fontWeight: '800', color: '#111', marginBottom: 12 },
  subMsg: { fontSize: 16, color: '#444', textAlign: 'center', marginBottom: 35, fontStyle: 'italic', lineHeight: 26, paddingHorizontal: 10 },
  btnRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', gap: 15 },
  replayBtn: { flex: 1, paddingVertical: 18, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', borderWidth: 1, borderColor: '#FADDEB', shadowColor: '#FADDEB', shadowOpacity: 0.05, shadowRadius: 5 },
  replayBtnText: { color: '#B04C8A', fontSize: 16, fontWeight: '900' },
  shareBtnWrap: { flex: 1, borderRadius: 15, overflow: 'hidden', shadowColor: '#B04C8A', shadowOpacity: 0.2, shadowRadius: 10, elevation: 5 },
  shareBtn: { height: '100%', paddingVertical: 18, alignItems: 'center', justifyContent: 'center' },
  shareBtnText: { color: '#FFF', fontSize: 16, fontWeight: '900' }
});
