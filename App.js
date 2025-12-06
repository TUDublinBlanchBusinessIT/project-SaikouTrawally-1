// App.js
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './Screens/HomeScreen';
import FixturesScreen from './Screens/FixturesScreen';
import MatchDetailsScreen from './Screens/MatchDetailsScreen';
import FavouritesScreen from './Screens/FavouritesScreen';
import SettingsScreen from './Screens/SettingsScreen';
import WhatScreen from './Screens/WhatScreen';
import { colors } from './theme';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    primary: colors.primary,
    card: colors.card,
    text: colors.text,
    border: colors.border,
  },
};
function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#0f1218',
          borderTopColor: '#222',
        },

        // global label spacing
        tabBarLabelStyle: {
          marginBottom: 6,   // moves text LOWER
          fontSize: 12,
        },

        tabBarActiveTintColor: '#FFD700',   // yellow active
        tabBarInactiveTintColor: '#888',    // grey inactive
      }}
    >

      <Tabs.Screen 
        name="Home" 
        component={HomeScreen}
      />

      <Tabs.Screen 
        name="Fixtures" 
        component={FixturesScreen}
        options={{
          tabBarActiveTintColor: '#FFFFFF',     // white when selected
          tabBarInactiveTintColor: '#FFFFFF99', // faded white when not selected
        }}
      />

      <Tabs.Screen 
        name="Favourites" 
        component={FavouritesScreen}
      />

      <Tabs.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          tabBarActiveTintColor: '#FFFFFF',     
          tabBarInactiveTintColor: '#FFFFFF99',
        }}
      />

      <Tabs.Screen 
        name="What" 
        component={WhatScreen}
      />

    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MatchDetails"
          component={MatchDetailsScreen}
          options={{
            title: 'Match Details',
            headerStyle: { backgroundColor: colors.card },
            headerTintColor: colors.text,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
