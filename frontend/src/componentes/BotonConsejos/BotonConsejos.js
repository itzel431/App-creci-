import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotonConsejos = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.boton} onPress={onPress}>
      <Text style={styles.textoBoton}>Consejos</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#FFEB3B',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  textoBoton: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default BotonConsejos;
