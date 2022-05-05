import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Sort(props) {
  // const [array, setArray] = useState(props.array);
  // useEffect(() => {
  //   setArray(randomBars());
  // })



  return (
    <View>
      <Text>
        {props.array.map(val => (
          <View key={Math.random()} style={{
            height: val,
            width: 25,
            backgroundColor: 'red',
            padding: 3,
            border: 5,
            borderColor: 'black',
            borderRadius: 2,
          }} />
        ))}
      </Text>
    </View>
  );
}
