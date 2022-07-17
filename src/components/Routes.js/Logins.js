import React from 'react'
import LoginEmpresaScreen from '../LoginEmpresa'
import LoginUsuarioScreen from '../LoginUsuario'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Login Usuario' >
        <Tab.Screen name="Login Usuario" component={LoginUsuarioScreen} />
        <Tab.Screen name="Login Empresa" component={LoginEmpresaScreen}  />
    </Tab.Navigator>
  );
}