import React, { useState } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { matches } from './mock';
import MatchCard from './components/MatchCard';

export default function FixturesScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1200);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={matches}
        keyExtractor={i => i.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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


