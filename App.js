// App.js
import React from 'react';
import { Text } from 'react-native';
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

        tabBarStyle: {
          backgroundColor: '#0f1218',
          borderTopColor: '#222',
        },

        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#888',

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
        },

        tabBarIcon: ({ color }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Fixtures':
              iconName = 'calendar-outline';
              break;
            case 'Favourites':
              iconName = 'star-outline';
              break;
            case 'Settings':
              iconName = 'settings-outline';
              break;
            case 'What':
              iconName = 'help-circle-outline';
              break;
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >

      {/* HOME */}
      <Tabs.Screen 
        name="Home" 
        component={HomeScreen}
      />

      {/* FIXTURES — WHITE LABEL */}
      <Tabs.Screen 
        name="Fixtures" 
        component={FixturesScreen}
        options={{
          tabBarLabel: () => (
            <Text style={{ 
              color: '#FFFFFF',     // WHITE
              fontSize: 12,
              marginBottom: 4 
            }}>
              Fixtures
            </Text>
          )
        }}
      />

      {/* FAVOURITES */}
      <Tabs.Screen 
        name="Favourites" 
        component={FavouritesScreen}
      />

      {/* SETTINGS — WHITE LABEL */}
      <Tabs.Screen 
        name="Favourites" 
        component={SettingsScreen}
        options={{
          tabBarLabel: () => (
            <Text style={{ 
              color: '#FFFFFF',     // WHITE
              fontSize: 12,
              marginBottom: 4 
            }}>
              Settings
            </Text>
          )
        }}
      />

      {/* WHAT — WHITE LABEL */}
      <Tabs.Screen 
        name="What" 
        component={WhatScreen}
        options={{
          tabBarLabel: () => (
            <Text style={{ 
              color: '#FFFFFF',     // WHITE
              fontSize: 12,
              marginBottom: 4 
            }}>
              What
            </Text>
          )
        }}
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
