// FavouritesScreen.js  (formerly SettingsScreen.js)

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function FavouritesScreen() {
  const [selectedTeam, setSelectedTeam] = useState("");
  const teams = ["Arsenal", "Chelsea", "Liverpool", "Manchester City", "Manchester United", "Tottenham"];
  const userId = "testUser"; // fake user for now

  useEffect(() => {
    const loadTeam = async () => {
      const ref = doc(db, "users", userId);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setSelectedTeam(snap.data().favouriteTeam);
      }
    };

    loadTeam();
  }, []);

  const saveTeam = async (team) => {
    setSelectedTeam(team);
    await setDoc(doc(db, "users", userId), { favouriteTeam: team }, { merge: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favourite Team</Text>
      <Text style={styles.current}>Current selection: {selectedTeam || "None"}</Text>

      {teams.map((team) => (
        <TouchableOpacity
          key={team}
          style={[styles.button, selectedTeam === team && styles.selected]}
          onPress={() => saveTeam(team)}
        >
          <Text style={[styles.buttonText, selectedTeam === team && styles.selectedText]}>
            {team}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  header: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  current: {
    color: "gold",
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#222",
    paddingVertical: 18,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  selected: {
    backgroundColor: "gold",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  selectedText: {
    color: "#000",
    fontWeight: "bold",
  },
});


