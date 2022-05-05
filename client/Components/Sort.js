import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Sort(props) {

  return (
    <View>
      <Text>
        {props.array.map(val => (
          <View key={Math.random()} style={{
            height: val,
            width: 2,
            backgroundColor: 'red',
            padding: 2,
            border: 2,
            borderRadius: 2,
          }} />
        ))}
      </Text>
    </View>
  );
}
