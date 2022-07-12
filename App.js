import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import PaginaInicial from './src/components/PaginaInicial'
import Login from './src/components/Login'
import CadastroUsuarioScreen from './src/components/CadastroUsuario'
import Home from './src/components/Routes.js/Home'
import Cadastros from './src/components/Routes.js/Cadastros'
import CadastroEmpresa from './src/components/CadastroEmpresa';
import  Post from './src/components/Post'

const Stack = createStackNavigator(); 


export default function App() {
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Post'>
        <Stack.Screen name = "Post" component = {Post}  options={{headerShown:false}}/>    
        <Stack.Screen name = "Login" component = {Login} /> 
        <Stack.Screen name = "Cadastro" component = {CadastroUsuarioScreen} />
        <Stack.Screen name = "Home" component = {Home} />
        <Stack.Screen name = "Cadastros" component = {Cadastros} />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  )

  }