// src/navegacion/Navegador.js

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PantallaPrincipal from '../pantallas/PantallaPrincipal';
import PantallaLogin from '../pantallas/PantallaLogin';

const AppNavigator = createStackNavigator(
  {
    Home: PantallaPrincipal,
    Login: PantallaLogin,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
