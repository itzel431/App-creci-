import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

const PantallaContactos = () => {
  const [contactos, setContactos] = useState([]);
  const [nuevoContacto, setNuevoContacto] = useState('');

  // Función para agregar un nuevo contacto
  const agregarContacto = () => {
    if (nuevoContacto) {
      setContactos([...contactos, nuevoContacto]);
      setNuevoContacto('');
    } else {
      Alert.alert('Error', 'Por favor ingresa un nombre de contacto');
    }
  };

  // Función para enviar mensaje a un contacto a través de WhatsApp
  const enviarMensaje = (contacto) => {
    Alert.alert('Mensaje', `Enviando mensaje a ${contacto} por WhatsApp`);
    // Aquí integrarías la lógica para enviar mensaje a través de la API de WhatsApp
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mis Contactos</Text>

      {/* Campo para agregar nuevo contacto */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el nombre del contacto"
          value={nuevoContacto}
          onChangeText={setNuevoContacto}
        />
        <Button title="Agregar Contacto" onPress={agregarContacto} color="#FF4081" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {contactos.map((contacto, index) => (
          <TouchableOpacity
            key={index}
            style={styles.contactCard}
            onPress={() => enviarMensaje(contacto)}
          >
            <Text style={styles.contactName}>{contacto}</Text>
            <Text style={styles.contactAction}>Enviar mensaje</Text>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#FF4081',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginRight: 10,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  contactCard: {
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
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF4081',
  },
  contactAction: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
});

export default PantallaContactos;
