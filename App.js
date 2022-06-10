import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';


import PaginaInicial from './src/components/PaginaInicial'
import Login from './src/components/Login'
import CadastroUsuarioScreen from './src/components/CadastroUsuario'
import routes from './src/components/Routes.js/routes'

const Stack = createStackNavigator();

export default function App() {
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PaginaInicial'>
        <Stack.Screen name = "PaginaInicial" component = {PaginaInicial} />    
        <Stack.Screen name = "Login" component = {Login} /> 
        <Stack.Screen name = "Cadastro" component = {CadastroUsuarioScreen} />
        <Stack.Screen name = "routes" component = {routes} />
      </Stack.Navigator>
      
    </NavigationContainer>
  )

  }
