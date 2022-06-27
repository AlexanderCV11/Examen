import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import MenuScreen from './MenuScreen';
import GuessNumber from './GuessNumber';
import RPC from './RPC';
import GuessYourNumber from './GuessYourNumber';
import GuessMyNumber from './GuessMyNumber';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Tasks" component={MenuScreen} options={{title: "Juegos"}} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="GuessNumber" component={GuessNumber} options={{title: "GuessMyNumber"}} />
        <Stack.Screen name="RPC" component={RPC} options={{title: "Rock Paper Cissors"}} />
        <Stack.Screen name="GuessYourNumber" component={GuessYourNumber} options={{title: "GuessYourNumber"}} />
        <Stack.Screen name="GuessMyNumber" component={GuessMyNumber} options={{title: "GuessMyNumber"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
