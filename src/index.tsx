import React from 'react';
import Router from './Routes';
import { NavigationContainer } from '@react-navigation/native'
export default function Main() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}