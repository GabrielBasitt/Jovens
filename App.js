import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import PaginaInicial from './src/components/PaginaInicial'
import Login from './src/components/Login'
import CadastroUsuarioScreen from './src/components/CadastroUsuario'
import Home from './src/components/Routes.js/Home'
import Cadastros from './src/components/Routes.js/Cadastros'
<<<<<<< HEAD
// import CadastroEmpresa from './src/components/CadastroEmpresa';
// import { getPessoa } from '../jovens-server/src/queries';
// import { Keyboard } from 'react-native';

=======
import CadastroEmpresa from './src/components/CadastroEmpresa';
<<<<<<< HEAD
import  Post from './src/components/Post'
=======
>>>>>>> d47d5e8c9ea19ef2b6f4ece004c0e30c3ea648bf
>>>>>>> 710a542d859eaead008ea07e8e25e7e87e9b4687

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