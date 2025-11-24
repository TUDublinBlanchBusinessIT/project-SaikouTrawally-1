import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { fetchLiveMatches } from "../api/mock";
import MatchCard from "../components/MatchCard";

export default function HomeScreen({ navigation }) {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchLiveMatches();
      setMatches(data);
    })();
  }, []);

  // Loading state
  if (matches === null) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: "center" }}
      />
    );
  }

  // Empty state
  if (matches.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No live matches right now.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 18, backgroundColor: "#fafafa" }}>
      <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 10 }}>
        Live Matches
      </Text>

      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MatchCard
            item={item}
            onPress={() =>
              navigation.navigate("MatchDetails", { matchId: item.id })
            }
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}