// App.js (after commit 9)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import FixturesScreen from './screens/FixturesScreen';
import MatchDetailsScreen from './screens/MatchDetailsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

// --- Bottom Tabs ---
function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1e90ff',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Fixtures" component={FixturesScreen} />
      <Tabs.Screen name="Favourites" component={FavouritesScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
}

// --- Root App Navigation ---
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Main tabs */}
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />

        {/* Other screens */}
        <Stack.Screen
          name="MatchDetails"
          component={MatchDetailsScreen}
          options={{ title: "Match Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

