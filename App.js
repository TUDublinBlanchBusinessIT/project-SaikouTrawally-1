import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import FixturesScreen from './FixturesScreen';
import MatchDetailsScreen from './MatchDetailsScreen';
import FavouritesScreen from './FavouritesScreen';
import SettingsScreen from './SettingsScreen';
import WhatScreen from './WhatScreen'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fixtures" component={FixturesScreen} />
        <Stack.Screen name="MatchDetails" component={MatchDetailsScreen} />
        <Stack.Screen name="Favourites" component={FavouritesScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="What" component={WhatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
