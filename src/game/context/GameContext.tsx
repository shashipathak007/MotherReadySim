import React, { createContext, useContext, useState } from 'react';

export type GameStep = 1 | 2 | 3 | 4 | 5;

interface GameState {
  currentStep: GameStep;
  packedBagItems: number[];
  collectedDocuments: number[];
  savedContacts: number[];
  quizStars: number;
}

interface GameContextType extends GameState {
  setStep: (step: GameStep) => void;
  packItem: (id: number) => void;
  collectDocument: (id: number) => void;
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
}

const defaultState: GameState = {
  currentStep: 1,
  packedBagItems: [],
  collectedDocuments: [],
  savedContacts: [],
  quizStars: 0,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GameState>(defaultState);
  const [isReady] = useState(true);
  const [feedback, setFeedback] = useState<{ message: string, detail?: string, type: 'success' | 'error' | 'info' } | null>(null);
  const [currentWave, setCurrentWave] = useState('');
  const [quizProgress, setQuizProgressState] = useState({ current: 0, total: 0 });
  const [soundEnabled, setSoundEnabled] = useState(true);
  const toggleSound = () => setSoundEnabled(prev => !prev);

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

  const collectDocument = (id: number) => {
    setState(prev => ({
      ...prev,
      collectedDocuments: [...new Set([...prev.collectedDocuments, id])]
    }));
  };

  const saveContact = (id: number) => {
    setState(prev => ({
      ...prev,
      savedContacts: [...new Set([...prev.savedContacts, id])]
    }));
  };

  const addQuizStar = () => updateState({ quizStars: Math.min(20, state.quizStars + 1) });
  
  const resetGame = () => {
    setState(defaultState);
  };

  const resetCurrentStep = () => {
    setState((prev) => {
      let updates = {};
      if (prev.currentStep === 1) updates = { packedBagItems: [] };
      if (prev.currentStep === 2) updates = { collectedDocuments: [] };
      if (prev.currentStep === 3) updates = { savedContacts: [] };
      if (prev.currentStep === 4) updates = { quizStars: 0 };
      
      return { ...prev, ...updates };
    });
    if (state.currentStep === 4) {
      setQuizProgressState({ current: 0, total: quizProgress.total });
    }
  };

  const resetStepData = (step: GameStep) => {
    setState((prev) => {
      if (step === 1) return { ...prev, packedBagItems: [] };
      if (step === 2) return { ...prev, collectedDocuments: [] };
      if (step === 3) return { ...prev, savedContacts: [] };
      if (step === 4) return { ...prev, quizStars: 0 };
      return prev;
    });
    if (step === 4) {
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
    <GameContext.Provider value={{ ...state, setStep, packItem, collectDocument, saveContact, addQuizStar, resetGame, resetCurrentStep, resetStepData, isReady, feedback, showFeedback, clearFeedback, currentWave, setCurrentWave, quizProgress, setQuizProgress, soundEnabled, toggleSound }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within GameProvider');
  return context;
};
