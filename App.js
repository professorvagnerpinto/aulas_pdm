import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Estudantes from './src/screens/Estudates';
import Empresas from './src/screens/Empresas';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Estudantes" component={Estudantes} />
        <Stack.Screen name="Empresas" component={Empresas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
