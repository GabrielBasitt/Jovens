import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsAdm from '../PostsAdm'
import Feed from '../Feed'
import Perfil from '../Perfil'

const Tab = createBottomTabNavigator();
export default function MyTabs() {
    return (
      <Tab.Navigator initialRouteName='Feed'>
        <Tab.Screen name="PostsAdm" component={PostsAdm} />
        <Tab.Screen name="Feed" component={Feed}  />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator> 
    );
  }

  // options={{headerShown:false}}