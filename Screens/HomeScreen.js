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
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: typography.header,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: typography.body,
    color: colors.muted,
    marginBottom: 24,
    textAlign: 'center',
  },
  buttons: {
    width: '80%',
  },
  buttonWrapper: {
    marginBottom: 12,
  },
});
