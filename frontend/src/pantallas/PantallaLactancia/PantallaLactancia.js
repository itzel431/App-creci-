import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';

const PantallaLactancia = () => {
  // Estado para manejar el cronómetro
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [notes, setNotes] = useState('');
  const [lactationRecords, setLactationRecords] = useState([]);

  // Función para iniciar/detener el cronómetro
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // Incremento del cronómetro
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  // Función para agregar un nuevo registro de lactancia
  const addRecord = () => {
    const newRecord = {
      time: seconds,
      date: new Date().toLocaleString(),
      notes: notes,
    };
    setLactationRecords([newRecord, ...lactationRecords]);
    setSeconds(0);
    setNotes('');
  };

  return (
    <View style={styles.container}>
      {/* Título de la pantalla */}
      <Text style={styles.header}>Registro de Lactancia</Text>

      {/* Cronómetro */}
      <Text style={styles.timer}>
        {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
      </Text>

      {/* Botón para iniciar/detener el cronómetro */}
      <TouchableOpacity style={styles.button} onPress={toggleTimer}>
        <Text style={styles.buttonText}>{isRunning ? 'Detener' : 'Iniciar'} Lactancia</Text>
      </TouchableOpacity>

      {/* Sección de notas */}
      <TextInput
        style={styles.input}
        placeholder="Añade tus observaciones aquí..."
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      {/* Botón para guardar el registro */}
      <TouchableOpacity style={styles.saveButton} onPress={addRecord}>
        <Text style={styles.buttonText}>Guardar Registro</Text>
      </TouchableOpacity>

      {/* Lista de registros de lactancia */}
      <View style={styles.recordsContainer}>
        <Text style={styles.recordsTitle}>Historial de Lactancia</Text>
        {lactationRecords.length > 0 ? (
          lactationRecords.map((record, index) => (
            <View key={index} style={styles.recordItem}>
              <Text style={styles.recordText}>
                {record.date} - {Math.floor(record.time / 60)}:{record.time % 60 < 10 ? `0${record.time % 60}` : record.time % 60} min
              </Text>
              {record.notes ? <Text style={styles.recordNotes}>Notas: {record.notes}</Text> : null}
            </View>
          ))
        ) : (
          <Text style={styles.noRecordsText}>Aún no hay registros.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEBEE', // Fondo suave
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4081', // Rosa meloso
    marginBottom: 30,
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FF4081',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF8A80', // Rosa suave
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FF4081',
  },
  saveButton: {
    backgroundColor: '#FF80AB',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 30,
    elevation: 5,
  },
  recordsContainer: {
    width: '100%',
    marginTop: 30,
  },
  recordsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4081',
    marginBottom: 15,
  },
  recordItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  recordText: {
    fontSize: 16,
    color: '#333',
  },
  recordNotes: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  noRecordsText: {
    fontSize: 16,
    color: '#999',
  },
});

export default PantallaLactancia;
