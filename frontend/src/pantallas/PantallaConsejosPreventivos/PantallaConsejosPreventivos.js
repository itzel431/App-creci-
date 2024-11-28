import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

const PantallaConsejosPreventivos = () => {
  const consejos = [
    { id: '1', titulo: 'Atragantamiento', descripcion: 'Aprende qué hacer si tu bebé se atraganta.' },
    { id: '2', titulo: 'Caídas', descripcion: 'Cómo evitar caídas y qué hacer en caso de accidente.' },
    { id: '3', titulo: 'Estreñimiento', descripcion: 'Consejos sobre cómo prevenir el estreñimiento en bebés.' },
    { id: '4', titulo: 'Temperatura', descripcion: 'Cómo detectar si tu bebé tiene fiebre y qué hacer al respecto.' },
    { id: '5', titulo: 'Rosaduras', descripcion: 'Consejos sobre cómo prevenir y tratar las rosaduras en el bebé.' },
    { id: '6', titulo: 'Entripada', descripcion: 'Medidas para prevenir y aliviar la congestión en bebés.' },
  ];

  // Función para ver detalles de cada consejo
  const verConsejo = (titulo) => {
    Alert.alert('Consejo', `Detalles sobre ${titulo}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Consejos Preventivos</Text>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {consejos.map((consejo) => (
          <TouchableOpacity
            key={consejo.id}
            style={styles.card}
            onPress={() => verConsejo(consejo.titulo)}
          >
            <Text style={styles.cardTitle}>{consejo.titulo}</Text>
            <Text style={styles.cardDescription}>{consejo.descripcion}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4081',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#FFEBEE',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF4081',
  },
  cardDescription: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
});

export default PantallaConsejosPreventivos;
