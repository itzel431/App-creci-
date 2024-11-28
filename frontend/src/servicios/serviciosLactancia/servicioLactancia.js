import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ServicioLactancia = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Servicio de Lactancia</Text>
      <Text style={styles.descripcion}>Aquí puedes registrar y gestionar el tiempo de lactancia de tu bebé.</Text>
      <Button title="Iniciar Cronómetro" onPress={() => console.log("Iniciar cronómetro de lactancia")} />
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
    color: '#2196F3',
    marginBottom: 20,
  },
  descripcion: {
    fontSize: 18,
    color: '#757575',
    marginBottom: 30,
    textAlign: 'center',
  }
});

export default ServicioLactancia;
