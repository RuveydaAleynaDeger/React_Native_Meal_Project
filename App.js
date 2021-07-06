import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import {combineReducers, createStore,} from 'redux';
import mealsReducer from './store/reducers/meals';
import {Provider} from 'react-redux';
enableScreens();

const rootReducer = combineReducers({
  meals:mealsReducer
});

const store = createStore(rootReducer);

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

  return (<Provider store={store}><MealsNavigator /></Provider>); 
}