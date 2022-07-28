import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Estudantes from './src/screens/Estudates';
import Empresas from './src/screens/Empresas';
import SignIn from './src/screens/SignIn';
import Preload from './src/screens/Preload';
import {COLORS} from './src/assets/colors';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <StatusBar backgroundColor={COLORS.primaryDark} />
    <Stack.Navigator initialRouteName="Preload">
      <Stack.Screen name="Preload" component={Preload} options={preloadStyle} />
      <Stack.Screen name="SignIn" component={SignIn} options={signInStyle} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Estudantes" component={Estudantes} />
      <Stack.Screen name="Empresas" component={Empresas} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

const preloadStyle = {
  headerShown: false,
};

const signInStyle = {
  title: 'Bem vindo',
  headerStyle: {backgroundColor: COLORS.primary},
  headerTitleStyle: {color: COLORS.white},
};
