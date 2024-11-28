import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ServicioGuias = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Guías para el Bebé</Text>
      <Text style={styles.descripcion}>Accede a guías para el cuidado del bebé según su edad.</Text>
      <Button title="Ver Guías" onPress={() => console.log("Acceder a las guías del bebé")} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E91E63',
    marginBottom: 20,
  },
  descripcion: {
    fontSize: 18,
    color: '#757575',
    marginBottom: 30,
    textAlign: 'center',
  }
});

export default ServicioGuias;
