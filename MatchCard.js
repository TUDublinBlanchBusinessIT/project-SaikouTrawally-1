import { View, Text, TouchableOpacity } from "react-native";

export default function MatchCard({ item, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ padding: 14, borderBottomWidth: 1, borderColor: "#ddd" }}
    >
      <Text style={{ fontSize: 16, fontWeight: "600" }}>
        {item.home} {item.homeScore} - {item.awayScore} {item.away}
      </Text>
      <Text style={{ color: "#555" }}>Minute: {item.minute}'</Text>
    </TouchableOpacity>
  );
}