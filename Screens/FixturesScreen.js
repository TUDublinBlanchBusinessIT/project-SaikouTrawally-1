// Screens/FixturesScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MatchCard from '../components/MatchCard';

// simple mock data for now
const matches = [
  {
    id: '1',
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    date: '2025-01-10',
    time: '19:45',
    venue: 'Emirates Stadium',
    competition: 'Premier League',
  },
  {
    id: '2',
    homeTeam: 'Liverpool',
    awayTeam: 'Man City',
    date: '2025-01-12',
    time: '16:30',
    venue: 'Anfield',
    competition: 'Premier League',
  },
];

export default function FixturesScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <MatchCard
      match={item}
      onPress={() => navigation.navigate('MatchDetails', { match: item })}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Fixtures</Text>
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  list: {
    paddingBottom: 16,
  },
});



