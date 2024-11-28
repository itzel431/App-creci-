import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

// Componente de pantalla de login
const PantallaLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    if (email && password) {
      Alert.alert('¡Bienvenido!', 'Has iniciado sesión con éxito.');
    } else {
      Alert.alert('Error', 'Por favor ingresa tu correo y contraseña');
    }
  };

  const googleLoginHandler = () => {
    // Aquí iría el proceso de login con Google (implementación futura)
    Alert.alert('Google Login', 'Login con Google pendiente');
  };

  return (
    <View style={styles.container}>
      {/* Logo o nombre de la app */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Bienvenido a Creci</Text>
      </View>

      {/* Campo de correo */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Campo de contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Botón de login */}
      <TouchableOpacity style={styles.button} onPress={loginHandler}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      {/* Botones para login con Google o crear cuenta */}
      <View style={styles.extraContainer}>
        <TouchableOpacity style={styles.googleButton} onPress={googleLoginHandler}>
          <Text style={styles.buttonText}>Iniciar sesión con Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>¿No tienes cuenta? Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef2f2', // Color pastel suave
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8A80', // Color tierno y suave
    fontFamily: 'sans-serif-light',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF4081', // Rosa fuerte
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
  extraContainer: {
    width: '100%',
    alignItems: 'center',
  },
  googleButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4285F4', // Azul Google
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  registerButton: {
    marginTop: 10,
  },
  registerText: {
    fontSize: 16,
    color: '#FF4081',
    fontWeight: 'bold',
  },
});

export default PantallaLogin;
