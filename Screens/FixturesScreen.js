// Screens/FixturesScreen.js
import React, { useState } from 'react';
import { View, FlatList, Button, Alert, TextInput, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import MatchCard from './MatchCard';
import matches from '../mock';  // adjust if named differently

export default function FixturesScreen() {
  const [prediction, setPrediction] = useState('');

  const handleFavourite = async (match) => {
    try {
      if (!prediction) {
        Alert.alert('Enter a prediction first', 'Example: 2-1');
        return;
      }

      await addDoc(collection(db, 'favourites'), {
        homeTeam: match.homeTeam,
        awayTeam: match.awayTeam,
        date: match.date,
        competition: match.competition || '',
        prediction: prediction,
        createdAt: new Date().toISOString()
      });

      Alert.alert('Saved!', 'Match added to favourites with prediction.');
      setPrediction('');
    } catch (error) {
      console.log('Error saving favourite:', error);
      Alert.alert('Error', 'Could not save favourite.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <MatchCard match={item} />

      <TextInput
        style={styles.input}
        placeholder="Enter prediction e.g. 2-1"
        value={prediction}
        onChangeText={setPrediction}
      />

      <Button title="Save to Favourites" onPress={() => handleFavourite(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={matches}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginVertical: 8
  }
});



