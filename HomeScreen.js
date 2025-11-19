import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Whatscore</Text>

      <Button title="View Fixtures" onPress={() => navigation.navigate("Fixtures")} />
      <Button title="Favourites" onPress={() => navigation.navigate("Favourites")} />
      <Button title="Settings" onPress={() => navigation.navigate("Settings")} />
    </View>
  );
}
