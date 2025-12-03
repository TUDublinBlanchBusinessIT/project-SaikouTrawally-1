// components/MatchCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MatchCard({ match }) {
  // Fallback in case match is undefined
  if (!match) {
    match = {
      homeTeam: 'Team A',
      awayTeam: 'Team B',
      date: '2025-01-01',
      time: '19:45',
      venue: 'Stadium',
      competition: 'League',
    };
  }

  return (
    <View style={styles.card}>
      <Text style={styles.teams}>
        {match.homeTeam} vs {match.awayTeam}
      </Text>
      <Text style={styles.info}>{match.date} • {match.time}</Text>
      <Text style={styles.info}>{match.venue}</Text>
      <Text style={styles.info}>{match.competition}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
  },
  teams: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  info: {
    fontSize: 13,
    color: '#555',
  },
});

