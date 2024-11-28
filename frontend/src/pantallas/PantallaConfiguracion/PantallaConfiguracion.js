import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';

const PantallaConfiguracion = () => {
  const [notificaciones, setNotificaciones] = useState(true);
  const [idioma, setIdioma] = useState('Español');

  const toggleNotificaciones = () => setNotificaciones(previousState => !previousState);
  const toggleIdioma = () => setIdioma(idioma === 'Español' ? 'Inglés' : 'Español');

  const cerrarSesion = () => {
    Alert.alert('Cerrar sesión', '¿Estás seguro que deseas cerrar sesión?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Cerrar sesión', onPress: () => console.log('Cerrando sesión...') },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Configuración</Text>

      <View style={styles.settingContainer}>
        <Text style={styles.settingTitle}>Notificaciones</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificaciones ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleNotificaciones}
          value={notificaciones}
        />
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.settingTitle}>Idioma</Text>
        <TouchableOpacity style={styles.button} onPress={toggleIdioma}>
          <Text style={styles.buttonText}>{idioma}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={cerrarSesion}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF4081',
    textAlign: 'center',
    marginBottom: 20,
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    padding: 10,
    backgroundColor: '#FF4081',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#FF7043',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  logoutText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default PantallaConfiguracion;
