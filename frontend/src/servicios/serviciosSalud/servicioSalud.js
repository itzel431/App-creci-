import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ServicioSalud = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Registro de Salud</Text>
      <Text style={styles.descripcion}>Registra información importante de salud del bebé (peso, vacunas, alergias).</Text>
      <Button title="Registrar Salud" onPress={() => console.log("Registrar datos de salud")} />
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
    color: '#4CAF50',
    marginBottom: 20,
  },
  descripcion: {
    fontSize: 18,
    color: '#757575',
    marginBottom: 30,
    textAlign: 'center',
  }
});

export default ServicioSalud;
