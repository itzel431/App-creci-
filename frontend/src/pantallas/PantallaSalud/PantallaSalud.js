import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const PantallaSalud = () => {
  const [peso, setPeso] = useState('');
  const [alergias, setAlergias] = useState('');
  const [vacunas, setVacunas] = useState('');
  const [leche, setLeche] = useState('');
  const [panales, setPanales] = useState('');
  const [historico, setHistorico] = useState([]);

  // Función para agregar un nuevo registro de salud
  const agregarRegistro = () => {
    if (peso && alergias && vacunas && leche && panales) {
      const nuevoRegistro = {
        id: Date.now(),
        peso,
        alergias,
        vacunas,
        leche,
        panales,
        fecha: new Date().toLocaleDateString(),
      };
      setHistorico([nuevoRegistro, ...historico]);
      setPeso('');
      setAlergias('');
      setVacunas('');
      setLeche('');
      setPanales('');
    } else {
      alert('Por favor, llena todos los campos');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Salud del Bebé</Text>

      {/* Formulario para registrar datos */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Peso"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
        <TextInput
          style={styles.input}
          placeholder="Alergias"
          value={alergias}
          onChangeText={setAlergias}
        />
        <TextInput
          style={styles.input}
          placeholder="Vacunas"
          value={vacunas}
          onChangeText={setVacunas}
        />
        <TextInput
          style={styles.input}
          placeholder="Leche que usa"
          value={leche}
          onChangeText={setLeche}
        />
        <TextInput
          style={styles.input}
          placeholder="Pañales que usa"
          value={panales}
          onChangeText={setPanales}
        />

        {/* Botón para agregar el registro */}
        <TouchableOpacity style={styles.button} onPress={agregarRegistro}>
          <Text style={styles.buttonText}>Agregar Registro</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de registros */}
      <View style={styles.historico}>
        {historico.length > 0 ? (
          historico.map((item) => (
            <View key={item.id} style={styles.registro}>
              <Text style={styles.registroText}>Fecha: {item.fecha}</Text>
              <Text style={styles.registroText}>Peso: {item.peso} kg</Text>
              <Text style={styles.registroText}>Alergias: {item.alergias}</Text>
              <Text style={styles.registroText}>Vacunas: {item.vacunas}</Text>
              <Text style={styles.registroText}>Leche: {item.leche}</Text>
              <Text style={styles.registroText}>Pañales: {item.panales}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noDataText}>No hay registros de salud aún.</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEBEE',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4081', 
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
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
    elevation: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  historico: {
    marginTop: 30,
  },
  registro: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  registroText: {
    fontSize: 16,
    color: '#333',
  },
  noDataText: {
    fontSize: 18,
    color: '#FF4081',
    textAlign: 'center',
  },
});

export default PantallaSalud;
