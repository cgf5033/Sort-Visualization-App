import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Sort from './Components/Sort';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Algo Sort</Text>
      <Sort />
      <Button title='Sort' onClick={() => console.log('Hello!!')}/>
      <Button title='Reset' onClick={() => console.log('Hello!!')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
