// src/componentes/Cabecera/Cabecera.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cabecera({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    backgroundColor: '#4CAF50',
    padding: 20,
    width: '100%',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
  },
});
