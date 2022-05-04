import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import Header from './Components/Header';
import Sort from './Components/Sort';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Sort />
      <TouchableOpacity title='Sort' onPress={() => console.log('Pee')}/>
      <TouchableOpacity onPress={() => console.log('Pee')} style={{
        backgroundColor: 'blue',
        width: '50%',
        height: '5%',
        borderRadius: '5px',
        padding: '5px',
      }}><Text>Heyy</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Pee')} style={{
        backgroundColor: 'blue',
        width: '50%',
        height: '5%',
        borderRadius: '5px',
        padding: '5px',
      }}><Text>Heyy</Text></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 28,

  },

});
