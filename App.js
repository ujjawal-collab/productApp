import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from "../productApp/MainPage"

export default function App() {
  return (
    <View style={styles.container}>
      <MainPage />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 25
    // justifyContent: 'center',
  },
});
