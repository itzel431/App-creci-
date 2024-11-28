import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ServicioConsejos = ({ navigation }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Servicio de Consejos</Text>
      <Text style={styles.descripcion}>
        Consulta los consejos recomendados por especialistas para el cuidado de tu bebé.
      </Text>
      <Button title="Ir a Consejos" onPress={() => navigation.navigate('PantallaConsejos')} />
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
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ServicioConsejos;
