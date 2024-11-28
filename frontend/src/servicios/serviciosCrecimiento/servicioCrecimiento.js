import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ServicioCrecimiento = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Registro de Crecimiento</Text>
      <Text style={styles.descripcion}>Monitorea el crecimiento de tu bebé con gráficos y tablas.</Text>
      <Button title="Agregar Registro de Crecimiento" onPress={() => console.log("Registrar crecimiento del bebé")} />
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
    color: '#FF9800',
    marginBottom: 20,
  },
  descripcion: {
    fontSize: 18,
    color: '#757575',
    marginBottom: 30,
    textAlign: 'center',
  }
});

export default ServicioCrecimiento;
