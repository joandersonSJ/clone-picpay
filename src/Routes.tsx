import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home/index';
import Wallet from './screens/Wallet/index';
import Pay from './screens/Pay/index';

const Tabs = createBottomTabNavigator()

export default function Routes(){
  return (
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={Home} />
          <Tabs.Screen name="Wallet" component={Wallet} />
          <Tabs.Screen name="Pay" component={Pay} />
        </Tabs.Navigator>
  )
}