import React from 'react'
import CadastroEmpresaScreen from '../CadastroEmpresa'
import CadastroUsuarioScreen from '../CadastroUsuario'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='CadastroUsuario' screenOptions={{tabBarStyle:{ marginBottom: 10}}}>
        <Tab.Screen name="CadastroUsuario" component={CadastroUsuarioScreen}/>
        <Tab.Screen name="CadastroEmpresa" component={CadastroEmpresaScreen} />
    </Tab.Navigator>
  );
}