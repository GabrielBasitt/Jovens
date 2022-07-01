import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsAdm from '../PostsAdm'
import Feed from '../Feed'
import PerfilUser from '../Perfil'


const Tab = createBottomTabNavigator();
export default function MyTabs() {
    return (
      <Tab.Navigator initialRouteName='Feed'>
        <Tab.Screen name="PostsAdm" component={PostsAdm} />
        <Tab.Screen name="Home" component={Feed}  />
        <Tab.Screen name="Perfil" component={PerfilUser} />
      </Tab.Navigator> 
    );
  }

  // options={{headerShown:false}}