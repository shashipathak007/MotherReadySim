import { useRef, useEffect, useCallback } from 'react';
import { Audio } from 'expo-av';
import { useGame } from '../context/GameContext';

const correctSound = require('../../../assets/Soundeffects/Correct.mp3');
const incorrectSound = require('../../../assets/Soundeffects/Incorrect.mp3');

export function useGameAudio() {
  const { soundEnabled } = useGame();
  const correctRef = useRef<Audio.Sound | null>(null);
  const incorrectRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const { sound: cs } = await Audio.Sound.createAsync(correctSound);
        const { sound: is } = await Audio.Sound.createAsync(incorrectSound);
        if (mounted) {
          correctRef.current = cs;
          incorrectRef.current = is;
        } else {
          cs.unloadAsync();
          is.unloadAsync();
        }
      } catch (e) {
        console.warn('Failed to load game sounds:', e);
      }
    };

    load();

    return () => {
      mounted = false;
      correctRef.current?.unloadAsync();
      incorrectRef.current?.unloadAsync();
    };
  }, []);

  const playCorrect = useCallback(async () => {
    if (!soundEnabled || !correctRef.current) return;
    try {
      await correctRef.current.setPositionAsync(0);
      await correctRef.current.playAsync();
    } catch (e) {
      console.warn('Error playing correct sound:', e);
    }
  }, [soundEnabled]);

  const playIncorrect = useCallback(async () => {
    if (!soundEnabled || !incorrectRef.current) return;
    try {
      await incorrectRef.current.setPositionAsync(0);
      await incorrectRef.current.playAsync();
    } catch (e) {
      console.warn('Error playing incorrect sound:', e);
    }
  }, [soundEnabled]);

  return { playCorrect, playIncorrect };
}
