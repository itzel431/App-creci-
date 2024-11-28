import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PantallaError = ({ message, onRetry }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/error-icon.png')}  // Asegúrate de tener un ícono de error
        style={styles.icon}
      />
      <Text style={styles.errorMessage}>{message}</Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryText}>Reintentar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  errorMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F44336',  // Color rojo para indicar error
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FF4081',
    borderRadius: 5,
  },
  retryText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default PantallaError;