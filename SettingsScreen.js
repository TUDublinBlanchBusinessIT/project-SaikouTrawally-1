import React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22 }}>Settings</Text>
      <Text style={{ marginTop: 10 }}>Adjust your preferences here.</Text>
    </View>
  );
}
