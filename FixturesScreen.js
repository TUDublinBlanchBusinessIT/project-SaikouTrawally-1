// FixturesScreen.js
import React from 'react';
import { View, FlatList } from 'react-native';
import { matches } from './mock';
import MatchCard from './components/MatchCard';

export default function FixturesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={matches}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <MatchCard
            item={item}
            onPress={() =>
              navigation.navigate("MatchDetails", { matchId: item.id })
            }
          />
        )}
      />
    </View>
  );
}

