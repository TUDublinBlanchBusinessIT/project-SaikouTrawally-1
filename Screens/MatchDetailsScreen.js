// Screens/MatchDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MatchDetailsScreen({ route }) {
  const { match } = route.params || {};

  if (!match) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No match selected</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {match.homeTeam} vs {match.awayTeam}
      </Text>
      <Text style={styles.info}>Date: {match.date}</Text>
      <Text style={styles.info}>Time: {match.time}</Text>
      <Text style={styles.info}>Venue: {match.venue}</Text>
      <Text style={styles.info}>Competition: {match.competition}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  info: {
    fontSize: 16,
    marginBottom: 6,
  },
});
