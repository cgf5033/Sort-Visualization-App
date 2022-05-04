import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Algo Sort</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    // padding: 10,
    backgroundColor: 'red',
    marginBottom: '5%',
    alignItems: 'stretch',

  },

  text: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  }
});
