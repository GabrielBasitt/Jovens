import React from 'react'
import CadastroEmpresaScreen from '../CadastroEmpresa'
import CadastroUsuarioScreen from '../CadastroUsuario'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='CadastroUsuario'>
        <Tab.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} />
        <Tab.Screen name="CadastroEmpresa" component={CadastroEmpresaScreen} />
    </Tab.Navigator>
  )
}
