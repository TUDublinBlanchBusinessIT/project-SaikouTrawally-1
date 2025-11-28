
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MatchCard({ match, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.teams}>{match.home} vs {match.away}</Text>
      </View>

      <Text style={styles.date}>
        {new Date(match.date).toLocaleString()}
      </Text>

      <Text style={styles.comp}>{match.competition}</Text>

      <View style={styles.scoreBox}>
        <Text style={styles.score}>
          {match.score ? `${match.score.home} - ${match.score.away}` : "TBD"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  teams: {
    fontSize: 18,
    fontWeight: "700",
  },
  date: {
    marginTop: 4,
    color: "#444",
  },
  comp: {
    marginTop: 2,
    fontSize: 13,
    color: "#666",
  },
  scoreBox: {
    marginTop: 10,
    alignItems: "center",
  },
  score: {
    fontSize: 20,
    fontWeight: "800",
  },
});
