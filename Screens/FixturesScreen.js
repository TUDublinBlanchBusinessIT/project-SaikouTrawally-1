import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import fixtures from '../mockFixtures';

export default function FixturesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Fixtures</Text>

      <FlatList
        data={fixtures}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.teams}>{item.home} vs {item.away}</Text>
            <Text style={styles.details}>{item.league}</Text>
            <Text style={styles.details}>{item.stadium}</Text>
            <Text style={styles.datetime}>
              {item.date} • {item.time}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  teams: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  details: {
    color: '#ccc',
    fontSize: 14,
  },
  datetime: {
    color: '#1e90ff',
    marginTop: 8,
    fontWeight: '500',
  },
});


