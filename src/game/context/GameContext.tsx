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
  tutorialCompleted: boolean;      // persisted flag — true once tutorial has been fully played
  quizResults: { id: number, isCorrect: boolean }[]; // persisted results for review screen
  quizStreak: number;              // persisted current streak
  quizHighestStreak: number;       // persisted highest streak
}

interface GameContextType extends GameState {
  setStep: (step: GameStep) => void;
  packItem: (id: number) => void;
  saveContact: (id: number) => void;
  addQuizStar: () => void;
  resetGame: () => void;
  resetCurrentStep: () => void;
  isReady: boolean;
  feedback: { message: string, detail?: string, type: 'success' | 'error' | 'info' | 'question' } | null;
  showFeedback: (message: string, detail: string, type: 'success' | 'error' | 'info' | 'question') => void;
  clearFeedback: () => void;
  currentWave: string;
  setCurrentWave: (wave: string) => void;
  quizProgress: { current: number; total: number };
  setQuizProgress: (current: number, total: number) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  tutorialStep: number;
  setTutorialStep: (step: number) => void;
  showTutorial: boolean;
  setShowTutorial: (show: boolean) => void;
  completeTutorial: () => void;
  // Quiz resume helpers
  setQuizState: (trimester: TrimesterKey | null, index: number, scenarioIds: number[], results: { id: number, isCorrect: boolean }[], streak: number, highestStreak: number) => void;
  clearQuizState: () => void;
  // Step 3: timed reveal of global character
  step3CharacterVisible: boolean;
  setStep3CharacterVisible: (visible: boolean) => void;
}

const defaultState: GameState = {
  currentStep: 1,
  packedBagItems: [],
  savedContacts: [],
  quizStars: 0,
  selectedTrimester: null,
  quizIndex: 0,
  shuffledScenarioIds: [],
  tutorialCompleted: false,
  quizResults: [],
  quizStreak: 0,
  quizHighestStreak: 0,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GameState>(defaultState);
  const [isReady, setIsReady] = useState(false);
  const [feedback, setFeedback] = useState<{ message: string, detail?: string, type: 'success' | 'error' | 'info' | 'question' } | null>(null);
  const [currentWave, setCurrentWave] = useState('');
  const [quizProgress, setQuizProgressState] = useState({ current: 0, total: 0 });
  const [soundEnabled, setSoundEnabled] = useState(true);
  const toggleSound = () => setSoundEnabled(prev => !prev);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [step3CharacterVisible, setStep3CharacterVisible] = useState(true);
  // showTutorial starts false; we set it to true only after loading persisted state
  // and confirming the tutorial hasn't been completed yet
  const [showTutorial, setShowTutorialRaw] = useState(false);

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
            tutorialCompleted: saved.tutorialCompleted ?? prev.tutorialCompleted,
            quizResults: saved.quizResults ?? prev.quizResults,
            quizStreak: saved.quizStreak ?? prev.quizStreak,
            quizHighestStreak: saved.quizHighestStreak ?? prev.quizHighestStreak,
          }));
          // Only show tutorial if it hasn't been completed before
          if (!saved.tutorialCompleted) {
            setShowTutorialRaw(true);
          }
        } else {
          // No saved state means first ever launch — show tutorial
          setShowTutorialRaw(true);
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

  const setStep = (currentStep: GameStep) => {
    // Step 3: hide the big right-side character immediately on entry.
    // Step3 screen will reveal it on its own timer.
    if (currentStep === 3) setStep3CharacterVisible(false);
    else setStep3CharacterVisible(true);
    updateState({ currentStep });
  };

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

  const setQuizState = (trimester: TrimesterKey | null, index: number, scenarioIds: number[], results: { id: number, isCorrect: boolean }[], streak: number, highestStreak: number) => {
    setState(prev => ({
      ...prev,
      selectedTrimester: trimester,
      quizIndex: index,
      shuffledScenarioIds: scenarioIds,
      quizResults: results,
      quizStreak: streak,
      quizHighestStreak: highestStreak,
    }));
  };

  const clearQuizState = () => {
    setState(prev => ({
      ...prev,
      selectedTrimester: null,
      quizIndex: 0,
      shuffledScenarioIds: [],
      quizResults: [],
      quizStreak: 0,
      quizHighestStreak: 0,
    }));
  };

  // Wrapper that also marks tutorial as completed when hiding it after completion
  const setShowTutorial = (show: boolean) => {
    setShowTutorialRaw(show);
  };

  // Mark tutorial as completed and persist it
  const completeTutorial = () => {
    setShowTutorialRaw(false);
    setState(prev => ({ ...prev, tutorialCompleted: true }));
  };

  const resetGame = async () => {
    setState(defaultState);
    setTutorialStep(0);
    setShowTutorialRaw(true);
    setStep3CharacterVisible(true);
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
      if (prev.currentStep === 3) updates = { quizStars: 0, selectedTrimester: null, quizIndex: 0, shuffledScenarioIds: [], quizResults: [], quizStreak: 0, quizHighestStreak: 0 };

      // Reset quiz progress counter when on the quiz step
      if (prev.currentStep === 3) {
        setQuizProgressState({ current: 0, total: 0 });
      }

      return { ...prev, ...updates };
    });
  };

  const showFeedback = (message: string, detail: string, type: 'success' | 'error' | 'info' | 'question') => {
    setFeedback({ message, detail, type });
  };

  const clearFeedback = () => setFeedback(null);

  const setQuizProgress = (current: number, total: number) => {
    setQuizProgressState({ current, total });
  };

  return (
    <GameContext.Provider value={{ ...state, setStep, packItem, saveContact, addQuizStar, resetGame, resetCurrentStep, isReady, feedback, showFeedback, clearFeedback, currentWave, setCurrentWave, quizProgress, setQuizProgress, soundEnabled, toggleSound, tutorialStep, setTutorialStep, showTutorial, setShowTutorial, completeTutorial, setQuizState, clearQuizState, step3CharacterVisible, setStep3CharacterVisible }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within GameProvider');
  return context;
};
