import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
enableScreens();



export default function App() {
  
  const [loaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });
  
  if (!loaded) {
    return (
      <AppLoading
      // onFinish={() => setFontLoaded(true)}
        
      />
    );
  }

  return <MealsNavigator />;
}