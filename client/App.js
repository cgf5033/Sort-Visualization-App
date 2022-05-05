import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Header from './Components/Header';
import Sort from './Components/Sort';

const randomBars = () => {
  const arr = [];
  for (let i = 0; i < 80; i++) {
    arr.push(Math.random()*500)
  }
  return arr;
}
const delay = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 20)
  })
}
const bubbleSort = async (Array, setArray) => {
  const arr = [...Array];
  const swap = async (index1, index2, a) => {
    var temp = a[index1];
    a[index1] = a[index2];
    a[index2] = temp;
    setArray([...a]);
    await delay();
    return a;
  };

  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var swaps = 0;
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps++;
        await swap(j, j + 1, arr);
      }
    }
    if (!swaps) { break; }
  }
  setArray(arr);
};

//SelectionSort??

export default function App() {
  let a = randomBars();
  const [array, setArray] = useState(a);

  const onResetClick = () => {
    setArray(randomBars());
  }

  const onSortClick = () => {
    bubbleSort(array, setArray);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.sort}>
          <Sort array={array}/>
        </View>
        <TouchableOpacity
          onPress={onSortClick}
          style={styles.button}
          >
          <Text style={styles.buttonText}>Bubble Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Selection Sort')}
          style={styles.button}
          >
          <Text style={styles.buttonText}>Selection Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onResetClick}
          style={styles.button}
          >
          <Text style={styles.buttonText}>Reset</Text>
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
    width: '70%',
    margin: 5,
    display: 'flex',
    // height: '5%',
    borderRadius: 5,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  }
});
