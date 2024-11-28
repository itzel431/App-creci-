import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PantallaDiario = () => {
  const [nota, setNota] = useState('');
  const [imagen, setImagen] = useState(null);
  const [entradas, setEntradas] = useState([]);

  // Función para agregar una nueva nota
  const agregarNota = () => {
    if (nota) {
      const nuevaEntrada = {
        id: Date.now(),
        texto: nota,
        imagen: imagen,
      };
      setEntradas([nuevaEntrada, ...entradas]);
      setNota('');
      setImagen(null);
    } else {
      alert('Por favor, ingresa una nota.');
    }
  };

  // Función para abrir el selector de imágenes
  const seleccionarImagen = async () => {
    const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permiso.granted) {
      const resultado = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      if (!resultado.cancelled) {
        setImagen(resultado.uri);
      }
    } else {
      alert('Se necesitan permisos para acceder a las fotos.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Diario del Bebé</Text>

      {/* Campo de texto para la nota */}
      <TextInput
        style={styles.input}
        placeholder="Escribe algo sobre tu bebé..."
        value={nota}
        onChangeText={setNota}
        multiline
      />

      {/* Botón para seleccionar imagen */}
      <TouchableOpacity style={styles.button} onPress={seleccionarImagen}>
        <Text style={styles.buttonText}>Seleccionar Imagen</Text>
      </TouchableOpacity>

      {/* Vista previa de la imagen seleccionada */}
      {imagen && <Image source={{ uri: imagen }} style={styles.imagePreview} />}

      {/* Botón para agregar la nota */}
      <TouchableOpacity style={styles.button} onPress={agregarNota}>
        <Text style={styles.buttonText}>Agregar Nota</Text>
      </TouchableOpacity>

      {/* Mostrar las entradas del diario */}
      <View style={styles.entradasContainer}>
        {entradas.map((entrada) => (
          <View key={entrada.id} style={styles.entradaItem}>
            {entrada.imagen && <Image source={{ uri: entrada.imagen }} style={styles.entradaImage} />}
            <Text style={styles.entradaText}>{entrada.texto}</Text>
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
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FF4081',
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#FF80AB',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  entradasContainer: {
    marginTop: 30,
  },
  entradaItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3.2,
  },
  entradaText: {
    fontSize: 16,
    color: '#333',
  },
  entradaImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default PantallaDiario;
