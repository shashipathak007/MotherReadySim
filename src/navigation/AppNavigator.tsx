import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameContainer from '../game/GameContainer';
import { GameProvider } from '../game/context/GameContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GameProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Game" component={GameContainer} />
          </Stack.Navigator>
        </NavigationContainer>
      </GameProvider>
    </GestureHandlerRootView>
  );
}
