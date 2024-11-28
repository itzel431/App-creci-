import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

const PantallaAgenda = () => {
  const [evento, setEvento] = useState('');
  const [fecha, setFecha] = useState('');
  const [eventos, setEventos] = useState([]);

  // Función para agregar evento
  const agregarEvento = () => {
    if (!evento || !fecha) {
      Alert.alert('Error', 'Por favor, ingresa todos los datos.');
      return;
    }

    const nuevoEvento = {
      id: Date.now(),
      evento: evento,
      fecha: fecha,
    };

    setEventos([...eventos, nuevoEvento]);
    setEvento('');
    setFecha('');
  };

  // Función para seleccionar una fecha
  const seleccionarFecha = (dia) => {
    setFecha(dia.dateString);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Agenda del Bebé</Text>

      {/* Calendario interactivo */}
      <Calendar
        onDayPress={seleccionarFecha}
        markedDates={{
          [fecha]: {
            selected: true,
            selectedColor: '#FF80AB',
            selectedTextColor: 'white',
          },
        }}
        theme={{
          selectedDayBackgroundColor: '#FF80AB',
          todayTextColor: '#FF80AB',
        }}
      />

      {/* Campo para ingresar evento */}
      <TextInput
        style={styles.input}
        placeholder="Ingresa evento o cita"
        value={evento}
        onChangeText={setEvento}
      />

      {/* Botón para agregar evento */}
      <TouchableOpacity style={styles.button} onPress={agregarEvento}>
        <Text style={styles.buttonText}>Agregar Evento</Text>
      </TouchableOpacity>

      {/* Lista de eventos */}
      <FlatList
        data={eventos}
        renderItem={({ item }) => (
          <View style={styles.eventoItem}>
            <Text style={styles.eventoTexto}>{item.evento}</Text>
            <Text style={styles.eventoFecha}>{item.fecha}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.eventosContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4081',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FF4081',
  },
  button: {
    backgroundColor: '#FF80AB',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  eventoItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3.2,
  },
  eventoTexto: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  eventoFecha: {
    fontSize: 14,
    color: '#777',
  },
  eventosContainer: {
    marginTop: 20,
  },
});

export default PantallaAgenda;
