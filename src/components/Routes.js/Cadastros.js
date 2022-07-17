import React from 'react'
import CadastroEmpresaScreen from '../CadastroEmpresa'
import CadastroUsuarioScreen from '../CadastroUsuario'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Cadastro Usuario' >
        <Tab.Screen name="Cadastro Usuario" component={CadastroUsuarioScreen} />
        <Tab.Screen name="Cadastro Empresa" component={CadastroEmpresaScreen}  />
    </Tab.Navigator>
  );
}
