// src/componentes/Boton/Boton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Boton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#008CBA',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
