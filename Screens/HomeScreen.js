// Screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Whatscore</Text>
      <Text style={styles.subtitle}>Check fixtures, favourites and more.</Text>

      <View style={styles.buttons}>
        <Button
          title="View Fixtures"
          onPress={() => navigation.navigate('Fixtures')}
        />
        <View style={{ height: 12 }} />
        <Button
          title="Go to Favourites"
          onPress={() => navigation.navigate('Favourites')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
    textAlign: 'center',
  },
  buttons: {
    width: '80%',
  },
});
