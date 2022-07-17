import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import PaginaInicial from './src/components/PaginaInicial'
import LoginUsuarioScreen from './src/components/LoginUsuario'
import Logins from "./src/components/Routes.js/Logins"
import CadastroUsuarioScreen from './src/components/CadastroUsuario'
import Home from './src/components/Routes.js/Home'
import Cadastros from './src/components/Routes.js/Cadastros'




const Stack = createStackNavigator(); 


export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PaginaInicial'>
        <Stack.Screen name = "PaginaInicial" component = {PaginaInicial}  options={{headerShown:false}}/>    
        <Stack.Screen name = "Logins" component = {Logins} /> 
        <Stack.Screen name = "Login" component = {LoginUsuarioScreen} /> 
        <Stack.Screen name = "Cadastro" component = {CadastroUsuarioScreen} />
        <Stack.Screen name = "Home" component = {Home}  options={{headerShown:false,tabBarShowLabel:false }}/>
        <Stack.Screen name = "Cadastros" component = {Cadastros} />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  )}