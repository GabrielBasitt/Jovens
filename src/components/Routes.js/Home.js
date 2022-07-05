import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsAdm from '../PostsAdm'
import Feed from '../Feed'
import PerfilUser from '../Perfil'
import {MaterialCommunityIcons, Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function MyTabs() {
    return (
      <Tab.Navigator initialRouteName='Home' screenOptions={{
          tabBarStyle:{
            backgroundColor: '#09b291'
          }
      }}
      >
        <Tab.Screen name="PostsAdm" component={PostsAdm} options={{ 
          tabBarLabel: 'PostsAdm',
          tabBarColor:'#09b291',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={26} /> 
            ),
          }}
        />
        <Tab.Screen name="Home" component={Feed} options={{ 
          tabBarLabel: 'Home',
          tabBarColor:'#09b291',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} /> 
            ),
          }}
        />
        <Tab.Screen name="Perfil" component={PerfilUser} options={{ 
          tabBarLabel: 'Perfil',
          tabBarColor:'#09b291',
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={26} /> 
            ),
          }} />
      </Tab.Navigator> 
    );
  }

  // options={{headerShown:false}}