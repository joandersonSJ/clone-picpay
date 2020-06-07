import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import Home from './screens/Home/index';
import Wallet from './screens/Wallet/index';
import Pay from './screens/Pay/index';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import PayButton from "./components/PayButton";

const Tabs = createBottomTabNavigator()


const icons: any = {
  Home:{
    lib: AntDesign,
    name:'home'
  },
  Wallet:{
    lib: AntDesign,
    name:'creditcard'
  },
  Notifications:{
    lib: Ionicons,
    name:'ios-notifications-outline'
  },
  Settings:{
    lib: AntDesign,
    name:'setting'
  },
}

export default function Routes(){
  return (
        <Tabs.Navigator
          tabBarOptions={{
            style:{
              backgroundColor: "#131418",
              borderTopColor: 'rgba(255,255,255,0.2)'
            },
            activeTintColor: '#fff',
            inactiveTintColor: '#92929c'
          }}
          screenOptions={({ route, navigation }) => ({
             tabBarIcon: ({ color, size, focused }) =>{
              if(route.name === 'Pay'){
                return (
                  <PayButton 
                    onPress={() => navigation.navigate('Pay')}
                    focused={focused}
                  />
                )
              }
              const { lib: Icon, name } = icons[route.name] 
                return <Icon name={name} size={size} color={color}/>
             }
             })}>
          <Tabs.Screen
            name="Home"
            component={Home} 
            options={{title: 'Inicio'}}
          />
          <Tabs.Screen 
            name="Wallet"
            component={Wallet}
            options={{title: 'Carteira'}}
          />
          <Tabs.Screen
            name="Pay"
            component={Pay}
            options={{title: ''}}
            />
          <Tabs.Screen
            name="Notifications"
            component={Home}
            options={{title: 'Notificações'}}
          />
          <Tabs.Screen
            name="Settings"
            component={Home}
            options={{title: 'Ajustes'}}
          />
        </Tabs.Navigator>
  )
}