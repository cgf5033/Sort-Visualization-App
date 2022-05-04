import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styled from 'styled-components/native';
import Header from './Components/Header';
import Sort from './Components/Sort';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.sort}>
          <Sort />
        </View>
        <TouchableOpacity
          onPress={() => console.log('Sort')}
          style={styles.button}
        >
          <Text>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Reset')}
          style={styles.button}
        >
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  sort: {},
  button: {
    backgroundColor: 'red',
    width: '60%',
    margin: 5,
    // height: '5%',
    borderRadius: 5,
    padding: 15,
    textAlign: 'center',
  },
});
