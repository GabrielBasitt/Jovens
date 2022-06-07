import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';


import PaginaInicial from './src/componentes/PaginaInicial'
import Login from './src/componentes/Login'
import Cadastro from './src/componentes/Cadastro';



const Stack = createStackNavigator();

export default function App() {
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PaginaInicial'>
        <Stack.Screen name = "PaginaInicial" component = {PaginaInicial} />    
        <Stack.Screen name = "Login" component = {Login} /> 
        <Stack.Screen name = "Cadastro" component = {Cadastro} />
      </Stack.Navigator>

    </NavigationContainer>
  )

  }