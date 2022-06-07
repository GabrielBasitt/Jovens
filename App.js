import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'

import PaginaInicial from './src/componentes/PaginaInicial'



const Stack = createStackNavigator();

export default function App() {
  
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "PaginaInicial" component = {PaginaInicial} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}
