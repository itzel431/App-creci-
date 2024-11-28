import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ServicioMomentos = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Álbum de Momentos</Text>
      <Text style={styles.descripcion}>Crea un álbum de fotos con recuerdos importantes del bebé.</Text>
      <Button title="Agregar Foto" onPress={() => console.log("Abrir cámara o galería")} />
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
    color: '#FF4081',
    marginBottom: 20,
  },
  descripcion: {
    fontSize: 18,
    color: '#757575',
    marginBottom: 30,
    textAlign: 'center',
  }
});

export default ServicioMomentos;
