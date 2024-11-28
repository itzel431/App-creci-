import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PantallaLogin from './src/pantallas/PantallaLogin';
import PantallaRegistro from './src/pantallas/PantallaRegistro';
import PantallaPrincipal from './src/pantallas/PantallaPrincipal';
import PantallaLactancia from './src/pantallas/PantallaLactancia';
import PantallaMomentos from './src/pantallas/PantallaMomentos';
import PantallaSalud from './src/pantallas/PantallaSalud';
import PantallaCrecimiento from './src/pantallas/PantallaCrecimiento';
import PantallaDiario from './src/pantallas/PantallaDiario';
import PantallaAgenda from './src/pantallas/PantallaAgenda';
import PantallaGuias from './src/pantallas/PantallaGuias';
import PantallaConsejos from './src/pantallas/PantallaConsejos';
import PantallaCalendario from './src/pantallas/PantallaCalendario';
import PantallaContactos from './src/pantallas/PantallaContactos';
import PantallaConsejosPreventivos from './src/pantallas/PantallaConsejosPreventivos';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PantallaLogin">
        <Stack.Screen name="PantallaLogin" component={PantallaLogin} />
        <Stack.Screen name="PantallaRegistro" component={PantallaRegistro} />
        <Stack.Screen name="PantallaPrincipal" component={PantallaPrincipal} />
        <Stack.Screen name="PantallaLactancia" component={PantallaLactancia} />
        <Stack.Screen name="PantallaMomentos" component={PantallaMomentos} />
        <Stack.Screen name="PantallaSalud" component={PantallaSalud} />
        <Stack.Screen name="PantallaCrecimiento" component={PantallaCrecimiento} />
        <Stack.Screen name="PantallaDiario" component={PantallaDiario} />
        <Stack.Screen name="PantallaAgenda" component={PantallaAgenda} />
        <Stack.Screen name="PantallaGuias" component={PantallaGuias} />
        <Stack.Screen name="PantallaConsejos" component={PantallaConsejos} />
        <Stack.Screen name="PantallaCalendario" component={PantallaCalendario} />
        <Stack.Screen name="PantallaContactos" component={PantallaContactos} />
        <Stack.Screen name="PantallaConsejosPreventivos" component={PantallaConsejosPreventivos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
