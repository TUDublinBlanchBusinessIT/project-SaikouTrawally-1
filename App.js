import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screens (exact folder name: Screens)
import HomeScreen from './Screens/HomeScreen';
import FixturesScreen from './Screens/FixturesScreen';
import MatchDetailsScreen from './Screens/MatchDetailsScreen';
import FavouritesScreen from './Screens/FavouritesScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Fixtures" component={FixturesScreen} />
        <Tab.Screen name="MatchDetails" component={MatchDetailsScreen} />
        <Tab.Screen name="Favourites" component={FavouritesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

