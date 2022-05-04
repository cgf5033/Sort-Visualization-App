import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {

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
          width: 25,
          backgroundColor: 'red',
        }} />
      ))}
    </Text>
  );
}
