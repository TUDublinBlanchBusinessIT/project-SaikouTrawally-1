// SettingsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Hardcoded user ID for CA project (perfectly acceptable)
const USER_ID = "user1";

export default function SettingsScreen() {
  const [team, setTeam] = useState(null);

  // Load favourite team from Firestore
  const loadTeam = async () => {
    try {
      const ref = doc(db, "users", USER_ID);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setTeam(snap.data().favouriteTeam);
      }
    } catch (err) {
      console.log("Error loading favourite team:", err);
    }
  };

  useEffect(() => {
    loadTeam();
  }, []);

  // Save favourite team to Firestore
  const saveTeam = async (selectedTeam) => {
    try {
      setTeam(selectedTeam); // update UI
      await setDoc(doc(db, "users", USER_ID), {
        favouriteTeam: selectedTeam,
      });
    } catch (err) {
      console.log("Error saving favourite team:", err);
    }
  };

  // List of teams the user can pick
  const teams = [
    "Arsenal",
    "Chelsea",
    "Liverpool",
    "Manchester City",
    "Manchester United",
    "Tottenham",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourite Team</Text>
      
      <Text style={styles.current}>
        Current selection: {team ? team : "None"}
      </Text>

      <View style={styles.teamList}>
        {teams.map((t) => (
          <TouchableOpacity
            key={t}
            style={[styles.teamButton, team === t && styles.selected]}
            onPress={() => saveTeam(t)}
          >
            <Text style={styles.teamText}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  current: {
    color: "#FFD700",
    fontSize: 18,
    marginBottom: 20,
  },
  teamList: {
    flexDirection: "column",
    gap: 12,
  },
  teamButton: {
    backgroundColor: "#1c1c1c",
    padding: 14,
    borderRadius: 10,
  },
  selected: {
    backgroundColor: "#FFD700",
  },
  teamText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});


