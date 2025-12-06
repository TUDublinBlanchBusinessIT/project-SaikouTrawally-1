// Screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { colors, typography } from '../theme';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/whatscore.png')} style={styles.logo} />

      <Text style={styles.title}>Whatscore</Text>
      <Text style={styles.subtitle}>
        Track fixtures, favourites and match details in one place.
      </Text>

      <View style={styles.buttons}>
        <View style={styles.buttonWrapper}>
          <Button
            title="View Fixtures"
            color={colors.primary}
            onPress={() => navigation.navigate('Fixtures')}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="View Favourites"
            color={colors.accent}
            onPress={() => navigation.navigate('Favourites')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    marginBottom: 22,
  },
  title: {
    fontSize: typography.header,
    fontWeight: 'bold',
    color: colors.text,   // FIXED
    marginBottom: 10,
  },
  subtitle: {
    fontSize: typography.body,
    color: colors.muted,  // FIXED
    marginBottom: 26,
    textAlign: 'center',
  },
  buttons: {
    width: '80%',
  },
  buttonWrapper: {
    marginBottom: 14,
  },
});
