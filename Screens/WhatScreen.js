// Screens/WhatScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WhatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WhatScreen</Text>
      <Text style={styles.text}>This is just a placeholder screen.</Text>
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
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#1604b9ff',
    textAlign: 'center',
  },
});
