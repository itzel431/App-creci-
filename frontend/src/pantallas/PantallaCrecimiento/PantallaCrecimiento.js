import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const PantallaCrecimiento = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [hito, setHito] = useState('');
  const [registros, setRegistros] = useState([]);

  // Función para agregar un nuevo registro de crecimiento
  const agregarRegistro = () => {
    if (peso && altura && hito) {
      const nuevoRegistro = { id: Date.now(), peso, altura, hito };
      setRegistros([nuevoRegistro, ...registros]);
      setPeso('');
      setAltura('');
      setHito('');
    } else {
      alert('Por favor, ingresa todos los datos del crecimiento.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Registro de Crecimiento del Bebé</Text>

      {/* Registro de peso */}
      <TextInput
        style={styles.input}
        placeholder="Peso del bebé"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />

      {/* Registro de altura */}
      <TextInput
        style={styles.input}
        placeholder="Altura del bebé"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
      />

      {/* Registro de hito del crecimiento */}
      <TextInput
        style={styles.input}
        placeholder="Hito del crecimiento"
        value={hito}
        onChangeText={setHito}
      />

      {/* Botón para agregar un registro */}
      <TouchableOpacity style={styles.button} onPress={agregarRegistro}>
        <Text style={styles.buttonText}>Agregar Registro</Text>
      </TouchableOpacity>

      {/* Mostrar los registros de crecimiento */}
      <View style={styles.registrosContainer}>
        {registros.map((registro) => (
          <View key={registro.id} style={styles.registroItem}>
            <Text style={styles.registroText}>Peso: {registro.peso}</Text>
            <Text style={styles.registroText}>Altura: {registro.altura}</Text>
            <Text style={styles.registroText}>Hito: {registro.hito}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4081',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FF4081',
  },
  button: {
    backgroundColor: '#FF80AB',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  registrosContainer: {
    marginTop: 30,
  },
  registroItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3.2,
  },
  registroText: {
    fontSize: 16,
    color: '#333',
  },
});

export default PantallaCrecimiento;
