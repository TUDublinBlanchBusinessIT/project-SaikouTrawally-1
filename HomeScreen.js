import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { fetchLiveMatches } from "../api/mock";
import MatchCard from "../components/MatchCard";

export default function HomeScreen({ navigation }) {
  const [matches, setMatches] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchLiveMatches();
        setMatches(data);
      } catch (error) {
        console.error("Error loading matches:", error);
        setMatches([]);
      }
      setLoading(false);
    })();
  }, []);

  // 🔵 Improved Loading Screen
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fafafa",
        }}
      >
        <ActivityIndicator size="large" color="#0066FF" />
        <Text style={{ marginTop: 12, color: "#666" }}>Loading matches...</Text>
      </View>
    );
  }

  // 🟡 Improved Empty State
  if (!matches || matches.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fafafa",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#444" }}>
          No Matches Right Now
        </Text>
        <Text style={{ marginTop: 6, fontSize: 14, color: "#666" }}>
          Check back later or explore Fixtures!
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
