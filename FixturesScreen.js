import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const exampleFixtures = [
  { id: '1', home: 'Team A', away: 'Team B' },
  { id: '2', home: 'Team C', away: 'Team D' },
];

export default function FixturesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>Upcoming Fixtures</Text>

      <FlatList
        data={exampleFixtures}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 15, borderBottomWidth: 1 }}>
            <Text>{item.home} vs {item.away}</Text>
            <Button 
              title="View Details" 
              onPress={() => navigation.navigate("MatchDetails", { fixture: item })} 
            />
          </View>
        )}
      />
    </View>
  );
}
