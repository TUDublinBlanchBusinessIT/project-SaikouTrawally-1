import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, typography } from '../theme';

export default function MatchCard({ match, onPress }) {
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
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.competition}>{match.competition}</Text>
      <Text style={styles.teams}>
        {match.homeTeam} vs {match.awayTeam}
      </Text>
      <Text style={styles.info}>{match.date} • {match.time}</Text>
      <Text style={styles.info}>{match.venue}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  competition: {
    fontSize: typography.small,
    color: colors.muted,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  teams: {
    fontSize: typography.body,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  info: {
    fontSize: typography.small,
    color: colors.muted,
  },
});
