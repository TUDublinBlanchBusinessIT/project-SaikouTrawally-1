// Screens/FavouritesScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography } from '../theme';

export default function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favourites</Text>
      <Text style={styles.text}>
        Matches you save will appear here. Tap the star icon on a match to add it.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // FIXED
    padding: 16,
  },
  title: {
    fontSize: typography.subheader,
    fontWeight: 'bold',
    color: colors.text,   // FIXED
    marginBottom: 8,
  },
  text: {
    fontSize: typography.body,
    color: colors.muted,  // FIXED
  },
});

