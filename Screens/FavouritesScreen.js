// Screens/FavouritesScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourites</Text>
      <Text style={styles.text}>Your favourite matches and teams will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
});
