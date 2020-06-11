import React from 'react';
import Router from './Routes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export default function Main() {
  return (
    <NavigationContainer>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#000"
      />
      <Router />
    </NavigationContainer>
  );
}