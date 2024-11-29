import React from 'react';
import { StatusBar } from 'react-native'; // Se agrega StatusBar para controlar la barra de estado en dispositivos Android
import { NavigationContainer } from '@react-navigation/native';  // React Navigation
import { createStackNavigator } from '@react-navigation/stack';  // Stack Navigator
import PantallaLogin from './pantallas/PantallaLogin';  // Importa la pantalla de Login
import PantallaRegistro from './pantallas/PantallaRegistro';  // Importa la pantalla de Registro
import PantallaPrincipal from './pantallas/PantallaPrincipal'; // Importa la pantalla principal

// Crea el Stack Navigator
const Stack = createStackNavigator();

export default function Appp() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={PantallaLogin} />
        <Stack.Screen name="Registro" component={PantallaRegistro} />
        <Stack.Screen name="Principal" component={PantallaPrincipal} />
        {/* Agrega aquí más pantallas conforme las vayas creando */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
