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
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Fixtures') iconName = 'calendar-outline';
          else if (route.name === 'Favourites') iconName = 'star-outline';
          else if (route.name === 'Settings') iconName = 'settings-outline';
          else iconName = 'help-circle-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Fixtures" component={FixturesScreen} />
      <Tabs.Screen name="Favourites" component={FavouritesScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
      <Tabs.Screen name="What" component={WhatScreen} />
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
