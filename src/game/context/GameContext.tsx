import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@aamaready_game_state';

export type GameStep = 1 | 2 | 3 | 4;
export type TrimesterKey = '1st' | '2nd' | '3rd';

interface GameState {
  currentStep: GameStep;
  packedBagItems: number[];
  savedContacts: number[];
  quizStars: number;
  // Quiz resume state
  selectedTrimester: TrimesterKey | null;
  quizIndex: number;
  shuffledScenarioIds: number[];   // persisted order of scenario ids
}

interface GameContextType extends GameState {
  setStep: (step: GameStep) => void;
  packItem: (id: number) => void;
  saveContact: (id: number) => void;
  addQuizStar: () => void;
  resetGame: () => void;
  resetCurrentStep: () => void;
  resetStepData: (step: GameStep) => void;
  isReady: boolean;
  feedback: { message: string, detail?: string, type: 'success' | 'error' | 'info' } | null;
  showFeedback: (message: string, detail: string, type: 'success' | 'error' | 'info') => void;
  clearFeedback: () => void;
  currentWave: string;
  setCurrentWave: (wave: string) => void;
  quizProgress: { current: number; total: number };
  setQuizProgress: (current: number, total: number) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  // Quiz resume helpers
  setQuizState: (trimester: TrimesterKey | null, index: number, scenarioIds: number[]) => void;
  clearQuizState: () => void;
}

const defaultState: GameState = {
  currentStep: 1,
  packedBagItems: [],
  savedContacts: [],
  quizStars: 0,
  selectedTrimester: null,
  quizIndex: 0,
  shuffledScenarioIds: [],
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GameState>(defaultState);
  const [isReady, setIsReady] = useState(false);
  const [feedback, setFeedback] = useState<{ message: string, detail?: string, type: 'success' | 'error' | 'info' } | null>(null);
  const [currentWave, setCurrentWave] = useState('');
  const [quizProgress, setQuizProgressState] = useState({ current: 0, total: 0 });
  const [soundEnabled, setSoundEnabled] = useState(true);
  const toggleSound = () => setSoundEnabled(prev => !prev);

  // Track whether initial load is done so we don't save the default state back
  const hasLoaded = useRef(false);

  // ── Load persisted state on mount ──
  useEffect(() => {
    (async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) {
          const saved = JSON.parse(json) as Partial<GameState>;
          setState((prev) => ({
            ...prev,
            currentStep: saved.currentStep ?? prev.currentStep,
            packedBagItems: saved.packedBagItems ?? prev.packedBagItems,
            savedContacts: saved.savedContacts ?? prev.savedContacts,
            quizStars: saved.quizStars ?? prev.quizStars,
            selectedTrimester: saved.selectedTrimester ?? prev.selectedTrimester,
            quizIndex: saved.quizIndex ?? prev.quizIndex,
            shuffledScenarioIds: saved.shuffledScenarioIds ?? prev.shuffledScenarioIds,
          }));
        }
      } catch (e) {
        console.warn('Failed to load game state:', e);
      } finally {
        hasLoaded.current = true;
        setIsReady(true);
      }
    })();
  }, []);

  // ── Persist state whenever it changes (after initial load) ──
  useEffect(() => {
    if (!hasLoaded.current) return;
    const persist = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {
        console.warn('Failed to save game state:', e);
      }
    };
    persist();
  }, [state]);
  
  const updateState = (updates: Partial<GameState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const setStep = (currentStep: GameStep) => updateState({ currentStep });
  
  const packItem = (id: number) => {
    setState(prev => ({
      ...prev,
      packedBagItems: [...new Set([...prev.packedBagItems, id])]
    }));
  };

  const saveContact = (id: number) => {
    setState(prev => ({
      ...prev,
      savedContacts: [...new Set([...prev.savedContacts, id])]
    }));
  };

  const addQuizStar = () => {
    setState(prev => ({
      ...prev,
      quizStars: Math.min(20, prev.quizStars + 1),
    }));
  };
  
  const setQuizState = (trimester: TrimesterKey | null, index: number, scenarioIds: number[]) => {
    setState(prev => ({
      ...prev,
      selectedTrimester: trimester,
      quizIndex: index,
      shuffledScenarioIds: scenarioIds,
    }));
  };

  const clearQuizState = () => {
    setState(prev => ({
      ...prev,
      selectedTrimester: null,
      quizIndex: 0,
      shuffledScenarioIds: [],
    }));
  };

  const resetGame = async () => {
    setState(defaultState);
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to clear saved game state:', e);
    }
  };

  const resetCurrentStep = () => {
    setState((prev) => {
      let updates = {};
      if (prev.currentStep === 1) updates = { packedBagItems: [] };
      if (prev.currentStep === 2) updates = { savedContacts: [] };
      if (prev.currentStep === 3) updates = { quizStars: 0, selectedTrimester: null, quizIndex: 0, shuffledScenarioIds: [] };
      
      return { ...prev, ...updates };
    });
    if (state.currentStep === 3) {
      setQuizProgressState({ current: 0, total: quizProgress.total });
    }
  };

  const resetStepData = (step: GameStep) => {
    setState((prev) => {
      if (step === 1) return { ...prev, packedBagItems: [] };
      if (step === 2) return { ...prev, savedContacts: [] };
      if (step === 3) return { ...prev, quizStars: 0, selectedTrimester: null, quizIndex: 0, shuffledScenarioIds: [] };
      return prev;
    });
    if (step === 3) {
      setQuizProgressState({ current: 0, total: quizProgress.total });
    }
  };

  const showFeedback = (message: string, detail: string, type: 'success' | 'error' | 'info') => {
    setFeedback({ message, detail, type });
  };

  const clearFeedback = () => setFeedback(null);

  const setQuizProgress = (current: number, total: number) => {
    setQuizProgressState({ current, total });
  };

  return (
    <GameContext.Provider value={{ ...state, setStep, packItem, saveContact, addQuizStar, resetGame, resetCurrentStep, resetStepData, isReady, feedback, showFeedback, clearFeedback, currentWave, setCurrentWave, quizProgress, setQuizProgress, soundEnabled, toggleSound, setQuizState, clearQuizState }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within GameProvider');
  return context;
};
