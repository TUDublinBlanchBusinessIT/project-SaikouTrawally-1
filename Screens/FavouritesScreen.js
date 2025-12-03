// Screens/FavouritesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

export default function FavouritesScreen() {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'favourites'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const favs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setFavourites(favs);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text>Loading favourites…</Text>
      </View>
    );
  }

  if (favourites.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No favourites saved yet.</Text>
        <Text>Add one from the Fixtures tab!</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>
        {item.homeTeam} vs {item.awayTeam}
      </Text>
      <Text>{item.date}</Text>
      <Text>Prediction: {item.prediction}</Text>

      <Text style={styles.result}>
        Result Meaning: {getResultMeaning(item.prediction)}
      </Text>
    </View>
  );

  // Convert "2-1" → "Home Win", "1-1" → "Draw"
  const getResultMeaning = (prediction) => {
    const [home, away] = prediction.split('-').map(Number);
    if (home > away) return "Home Win";
    if (away > home) return "Away Win";
    return "Draw";
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favourites}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
  },
  result: {
    marginTop: 6,
    fontStyle: 'italic',
  },
});
