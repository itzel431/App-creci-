import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Componente de pantalla principal
const PantallaPrincipal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Encabezado con el nombre de la app y el perfil */}
      <View style={styles.header}>
        <Text style={styles.title}>Bienvenido a Creci</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PantallaPerfil')}>
          <Image
            source={require('../assets/profile-icon.png')} // Ícono de perfil
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Sección de botones principales */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PantallaLactancia')}>
          <Text style={styles.buttonText}>Lactancia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PantallaMomentos')}>
          <Text style={styles.buttonText}>Momentos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PantallaSalud')}>
          <Text style={styles.buttonText}>Salud</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PantallaCrecimiento')}>
          <Text style={styles.buttonText}>Crecimiento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PantallaDiario')}>
          <Text style={styles.buttonText}>Diario</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PantallaAgenda')}>
          <Text style={styles.buttonText}>Agenda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PantallaGuias')}>
          <Text style={styles.buttonText}>Guías</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PantallaConsejos')}>
          <Text style={styles.buttonText}>Consejos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PantallaCalendario')}>
          <Text style={styles.buttonText}>Calendario</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PantallaContactos')}>
          <Text style={styles.buttonText}>Contactos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PantallaConsejosPreventivos')}>
          <Text style={styles.buttonText}>Consejos Preventivos</Text>
        </TouchableOpacity>
      </View>

      {/* Pie de pantalla con un toque meloso */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>¡Que disfrutes la experiencia Creci!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef2f2', // Fondo pastel suave
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF4081', // Rosa tierno
    fontFamily: 'sans-serif-light',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF4081', // Borde rosa para el icono de perfil
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 30,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF8A80', // Rosa suave
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#FF4081',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default PantallaPrincipal;
