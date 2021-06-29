import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, StatusBar } from 'react-native';
import firebase from './services/firebaseConnection'
import Routes from './routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <Routes />
    </NavigationContainer>
  );
}
