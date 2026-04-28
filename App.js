import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import AnimaisScreen from './screens/AnimaisScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home"}} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: "Perguntas"}} />
        <Stack.Screen name="Animal" component={AnimaisScreen} options={{ title: "Animais do Centro-Oeste"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
