import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PantallaMomentos = () => {
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const [moments, setMoments] = useState([]);

  // Función para seleccionar una foto
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  // Función para tomar una foto
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  // Función para agregar una foto y descripción al álbum
  const addMoment = () => {
    if (photo && description) {
      const newMoment = {
        id: Date.now(),
        photo,
        description,
        date: new Date().toLocaleDateString(),
      };
      setMoments([newMoment, ...moments]);
      setPhoto(null);
      setDescription('');
    } else {
      alert('Por favor, agrega una foto y una descripción');
    }
  };

  return (
    <View style={styles.container}>
      {/* Título de la pantalla */}
      <Text style={styles.header}>Momentos Especiales</Text>

      {/* Botones para elegir o tomar foto */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Elegir Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Text style={styles.buttonText}>Tomar Foto</Text>
        </TouchableOpacity>
      </View>

      {/* Mostrar la foto seleccionada */}
      {photo && <Image source={{ uri: photo }} style={styles.imagePreview} />}

      {/* Campo para descripción */}
      <TextInput
        style={styles.input}
        placeholder="Añadir descripción..."
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Botón para guardar el momento */}
      <TouchableOpacity style={styles.saveButton} onPress={addMoment}>
        <Text style={styles.buttonText}>Guardar Momento</Text>
      </TouchableOpacity>

      {/* Lista de momentos */}
      <FlatList
        data={moments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.momentItem}>
            <Image source={{ uri: item.photo }} style={styles.momentImage} />
            <View style={styles.momentDetails}>
              <Text style={styles.momentDate}>{item.date}</Text>
              <Text style={styles.momentDescription}>{item.description}</Text>
            </View>
          </View>
        )}
        style={styles.momentsList}
      />
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
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF80AB',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 80,
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
  momentsList: {
    width: '100%',
    marginTop: 20,
  },
  momentItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  momentImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  momentDetails: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  momentDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF4081',
  },
  momentDescription: {
    fontSize: 16,
    color: '#333',
  },
});

export default PantallaMomentos;
