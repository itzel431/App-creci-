import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Creci</Text>
      <Text style={styles.subtitle}>Acompañándote en el arte de ser mamá</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4b9cd3',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
  },
});
