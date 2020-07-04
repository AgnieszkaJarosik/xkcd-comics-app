import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import ComicsList from './components/ComicsList';

const App = () => {
  return (
      <>
        <StatusBar backgroundColor="white" />
        <View style={styles.container}>
            <ComicsList />
        </View>
      </>
  );
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 0,
        padding: 0,
        width: "100%"
    }
});
