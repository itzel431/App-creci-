import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ServicioDiario = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Diario del Bebé</Text>
      <Text style={styles.descripcion}>Crea notas para llevar un seguimiento del día a día de tu bebé.</Text>
      <Button title="Añadir Nota" onPress={() => console.log("Abrir editor de notas")} />
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
    color: '#9C27B0',
    marginBottom: 20,
  },
  descripcion: {
    fontSize: 18,
    color: '#757575',
    marginBottom: 30,
    textAlign: 'center',
  }
});

export default ServicioDiario;
