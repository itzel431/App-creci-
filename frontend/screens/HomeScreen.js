import React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import tailwind from 'tailwind-rn';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={tailwind('flex-1 justify-center items-center bg-gradient-to-br from-blue-500 to-pink-500')}>
      <Image 
        source={{ uri: 'https://www.example.com/logo.png' }} 
        style={tailwind('w-40 h-40 mb-6')}
      />
      <Text style={tailwind('text-white text-4xl font-bold mb-6')}>
        ¡Bienvenida a Creci!
      </Text>
      <Text style={tailwind('text-white text-lg mb-4')}>
        Tu app para el seguimiento del desarrollo de tu bebé.
      </Text>

      <TouchableOpacity 
        style={tailwind('bg-white p-4 rounded-full')}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={tailwind('text-blue-500 text-lg font-semibold')}>Ir al Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
