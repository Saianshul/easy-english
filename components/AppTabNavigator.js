import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TextToSpeechConverterScreen from '../screens/TextToSpeechConverterScreen';
import PhonicsScreen from '../screens/PhonicsScreen';

export const AppTabNavigator = createBottomTabNavigator({
  TextToSpeechConverter: {
    screen: TextToSpeechConverterScreen,
    navigationOptions: {
      tabBarLabel: 'Text to Speech Converter'
    }
  },
  Phonics: {
    screen: PhonicsScreen,
    navigationOptions: {
      tabBarLabel: 'Phonics'
    }
  }
});