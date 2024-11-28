import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ServicioAgenda = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Agenda de Citas Médicas</Text>
      <Text style={styles.descripcion}>Mantén un registro de las citas médicas y recordatorios importantes.</Text>
      <Button title="Añadir Cita" onPress={() => console.log("Abrir calendario de citas")} />
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
    color: '#3F51B5',
    marginBottom: 20,
  },
  descripcion: {
    fontSize: 18,
    color: '#757575',
    marginBottom: 30,
    textAlign: 'center',
  }
});

export default ServicioAgenda;
