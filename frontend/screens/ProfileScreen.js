import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={tailwind('flex-1 justify-center items-center bg-white')}>
      <Text style={tailwind('text-2xl font-bold mb-6')}>Perfil del Bebé</Text>
      <Text style={tailwind('text-lg mb-4')}>
        Aquí puedes agregar los datos del bebé, como peso, altura, citas médicas, etc.
      </Text>

      <TouchableOpacity 
        style={tailwind('bg-blue-500 p-4 rounded-full')}
        onPress={() => navigation.goBack()} // Para regresar a la pantalla principal
      >
        <Text style={tailwind('text-white text-lg font-semibold')}>Volver a Inicio</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
