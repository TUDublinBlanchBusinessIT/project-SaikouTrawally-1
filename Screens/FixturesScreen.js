// Screens/FixturesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import MatchCard from '../components/MatchCard';

export default function FixturesScreen() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'matches'));
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMatches(data);
      } catch (error) {
        console.log("🔥 Firestore error:", error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#0f1218', padding: 16 }}>
      <Text style={{ color: 'white', fontSize: 24, marginBottom: 10 }}>
        Upcoming Fixtures
      </Text>

      <FlatList
        data={matches}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MatchCard match={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

