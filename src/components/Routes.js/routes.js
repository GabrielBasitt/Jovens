import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CadastroEmpresaScreen from '../CadastroEmpresa'
import CadastroUsuarioScreen from '../CadastroUsuario'

const Tab = createBottomTabNavigator();
export default function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} />
        <Tab.Screen name="CadastroEmpresa" component={CadastroEmpresaScreen} />
      </Tab.Navigator>
    );
  }
