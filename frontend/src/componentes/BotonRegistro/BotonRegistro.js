import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotonRegistro = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.boton} onPress={onPress}>
      <Text style={styles.textoBoton}>Registrarse</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#81C784',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default BotonRegistro;