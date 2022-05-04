import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Sort() {

  const randomBars = () => {
    const arr = [];
    for (let i = 0; i < 12; i++) {
      arr.push(Math.random())
    }
    return arr;
  }

  const [array, setArray] = useState(randomBars());

  // useEffect(() => {
  //   setArray(randomBars());
  // })


  return (
    <Text>
      {array.map(val => (
        <View key={Math.random()} style={{
          height: 500*val,
          width: 5,
          backgroundColor: 'red',
          padding: 2,
          border: 5,
          borderColor: '#fff',
        }} />
      ))}
    </Text>
  );
}
