import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsAdm from '../PostsAdm'
import Feed from '../Feed'
import PerfilUser from '../Perfil'
import Post from '../Post'
import {MaterialCommunityIcons, Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function MyTabs() {
    return (
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        tabBarStyle:{
            backgroundColor: '#fff'
          }
      }}
      >
        <Tab.Screen name="PostsAdm" component={PostsAdm} options={{ 
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon: ({ focused}) => (
            <MaterialCommunityIcons name="account-group" color={focused ? '#09b291' : 'black'} size={26} /> 
            ),
          }}
        />
        <Tab.Screen name="Home" component={Feed} options={{ 
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home" color={focused ? '#09b291' : 'black'} size={26} /> 
            ),
          }}
        />
        <Tab.Screen name="Post" component={Post} options={{ 
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon: ({ focused}) => (
            <MaterialCommunityIcons name="plus" color={focused ? '#09b291' : 'black'} size={26} /> 

            ),
          }}
        />
        { <Tab.Screen name="Perfil" component={PerfilUser} options={{ 
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon: ({ focused }) => (
            <Feather name="user" color={focused ? '#09b291' : 'black'} size={26} /> 
            ),
          }} /> }
      </Tab.Navigator> 
    );
  }

  // options={{headerShown:false}}