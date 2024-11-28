// src/componentes/Tarjeta/Tarjeta.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tarjeta({ contenido }) {
  return (
    <View style={styles.card}>
      <Text>{contenido}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});
