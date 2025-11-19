import React from 'react';
import { View, Text } from 'react-native';

export default function FavouritesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22 }}>Favourite Teams & Matches</Text>
      <Text style={{ marginTop: 10 }}>No favourites added yet.</Text>
    </View>
  );
}
