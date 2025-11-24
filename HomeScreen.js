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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fafafa",
        }}
      >
        <Text style={{ fontSize: 16, color: "#666" }}>
          No live matches right now.
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 25, backgroundColor: "#fafafa" }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          marginBottom: 16,
          color: "#111",
        }}
      >
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
