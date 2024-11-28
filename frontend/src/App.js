import React from 'react';
import { View, Text, Image } from 'react-native';
import tailwind from 'tailwind-rn';  // Si estás usando Tailwind CSS

const App = () => {
  return (
    <View style={tailwind('flex-1 justify-center items-center bg-gray-100')}>
      <Image
        source={require('./assets/n.jpg')}  // Verifica que esta ruta sea correcta
        style={tailwind('w-64 h-64 mb-8 rounded-full')}
      />
      <Text style={tailwind('text-2xl font-bold text-blue-600')}>
        Bienvenida a Creci
      </Text>
    </View>
  );
};

export default App;
