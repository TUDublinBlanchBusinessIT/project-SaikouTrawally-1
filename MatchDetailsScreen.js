// MatchDetailsScreen.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { matches } from './mock';

export default function MatchDetailsScreen({ route }) {
  const { matchId } = route.params;
  const match = matches.find(m => m.id === matchId);

  const [isFav, setIsFav] = useState(false);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: '700' }}>
        {match.home} vs {match.away}
      </Text>

      <Text>Date: {new Date(match.date).toLocaleString()}</Text>

      <Button
        title={isFav ? "Added to Favourites" : "Add to Favourites"}
        onPress={() => setIsFav(true)}
        color={isFav ? "green" : "blue"}
      />
    </View>
  );
}
