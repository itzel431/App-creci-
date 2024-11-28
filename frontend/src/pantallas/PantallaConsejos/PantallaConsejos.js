import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

// Dummy Data: puedes remplazar esto con datos reales o desde una API
const consejos = [
  {
    title: 'Cómo Bañar a tu Bebé',
    description: 'Aprende los pasos básicos para bañar a tu bebé de forma segura y divertida.',
    image: require('../assets/images/bano.png'),
  },
  {
    title: 'Alimentación del Bebé',
    description: 'Guía sobre qué alimentos introducir a tu bebé según su edad y necesidades.',
    image: require('../assets/images/alimentacion.png'),
  },
  {
    title: 'Cuidado de la Piel',
    description: 'Consejos para evitar la irritación y cuidar la delicada piel de tu bebé.',
    image: require('../assets/images/skin-care.png'),
  },
  {
    title: 'Tiempo de Juego',
    description: 'Ideas divertidas para estimular el desarrollo de tu bebé a través del juego.',
    image: require('../assets/images/juego.png'),
  },
];

const PantallaConsejos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consejos para el Cuidado de tu Bebé</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {consejos.map((consejo, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate('PantallaDetalleConsejo', { consejo })}>
            <Image source={consejo.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{consejo.title}</Text>
              <Text style={styles.cardDescription}>{consejo.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4081',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

export default PantallaConsejos;
