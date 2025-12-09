// WhatScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function WhatScreen() {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');

  // Load tweets from Firestore
  const loadTweets = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'tweets'));
      const loaded = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // ⭐ Sort newest → oldest
      setTweets(loaded.sort((a, b) => b.timestamp - a.timestamp));

    } catch (error) {
      console.log('Error loading tweets:', error);
    }
  };

  useEffect(() => {
    loadTweets();
  }, []);

  // Save a new tweet
  const submitTweet = async () => {
    if (!user.trim() || !comment.trim()) {
      alert('Please enter your name and a comment.');
      return;
    }

    try {
      await addDoc(collection(db, 'tweets'), {
        user: user.trim(),
        comment: comment.trim(),
        timestamp: Date.now(),   // ⭐ Add timestamp for sorting
      });

      setUser('');
      setComment('');
      loadTweets();
    } catch (error) {
      console.log('Error adding tweet:', error);
    }
  };

  const renderTweet = ({ item }) => (
    <View style={styles.tweetCard}>
      <Text style={styles.tweetUser}>{item.user}:</Text>
      <Text style={styles.tweetText}>{item.comment}</Text>

      {/* ⭐ Show the actual timestamp */}
      {item.timestamp && (
        <Text style={styles.timeText}>
          {new Date(item.timestamp).toLocaleString()}
        </Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fan Zone</Text>

      {/* Input fields */}
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#888"
        value={user}
        onChangeText={setUser}
      />

      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Your Comment"
        placeholderTextColor="#888"
        multiline
        value={comment}
        onChangeText={setComment}
      />

      <TouchableOpacity style={styles.button} onPress={submitTweet}>
        <Text style={styles.buttonText}>Post Tweet</Text>
      </TouchableOpacity>

      {/* Display tweets */}
      <Text style={styles.subTitle}>Recent Fan Tweets</Text>

      <FlatList
        data={tweets}
        renderItem={renderTweet}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  subTitle: {
    color: 'white',
    fontSize: 20,
    marginTop: 25,
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 12,
    color: 'white',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tweetCard: {
    backgroundColor: '#1c1c1c',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  tweetUser: {
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 5,
  },
  tweetText: {
    color: 'white',
    marginBottom: 5,
  },
  timeText: {
    color: '#888',
    fontSize: 12,
  },
});
