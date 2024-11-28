import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const PantallaGuias = () => {

  // Datos de las guías por edades
  const guias = [
    {
      edad: 'Recién Nacido (0-3 meses)',
      contenido: 'En esta etapa es importante la alimentación exclusiva con leche materna, cuidado de la piel, control de temperatura y estímulo para el desarrollo sensorial.',
    },
    {
      edad: 'Infante (3-6 meses)',
      contenido: 'Aquí comienza la introducción de alimentos sólidos y el bebé empieza a tener más control de su cabeza y manos. También es un buen momento para iniciar la rutina de sueño.',
    },
    {
      edad: 'Bebé (6-12 meses)',
      contenido: 'A esta edad el bebé empieza a gatear, se le pueden dar alimentos con más textura, y comienza el proceso de dentición. También es importante iniciar la estimulación temprana.',
    },
    {
      edad: 'Niño Pequeño (1-2 años)',
      contenido: 'En esta etapa, el bebé comienza a caminar, hablar las primeras palabras y tener más interacción social. Se recomienda reforzar hábitos de higiene y dar mucha atención a su desarrollo emocional.',
    },
    {
      edad: 'Niño (2-3 años)',
      contenido: 'A esta edad, el bebé comienza a expresar sus emociones con mayor claridad, mejorar su motricidad fina y gruesa, y establecer rutinas de autocuidado. Es el momento de la socialización con otros niños.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Guías para el Cuidado del Bebé</Text>

      <ScrollView contentContainerStyle={styles.guiaContainer}>
        {guias.map((guia, index) => (
          <View key={index} style={styles.guiaCard}>
            <Text style={styles.edad}>{guia.edad}</Text>
            <Text style={styles.contenido}>{guia.contenido}</Text>
            <TouchableOpacity style={styles.verMasBtn}>
              <Text style={styles.verMasText}>Ver más</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
  guiaContainer: {
    marginBottom: 20,
  },
  guiaCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  edad: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4081',
  },
  contenido: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
  },
  verMasBtn: {
    backgroundColor: '#FF80AB',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  verMasText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PantallaGuias;
