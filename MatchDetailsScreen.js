import React from 'react';
import { View, Text } from 'react-native';

export default function MatchDetailsScreen({ route }) {
  const { fixture } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Match Details</Text>

      <Text style={{ marginTop: 15, fontSize: 18 }}>
        {fixture.home} vs {fixture.away}
      </Text>

      <Text style={{ marginTop: 10 }}>
        Kickoff: 17:30  
        Stadium: Example Arena  
      </Text>
    </View>
  );
}
