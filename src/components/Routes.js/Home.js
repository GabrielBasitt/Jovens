import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedAdm from "../FeedAdm"
import Feed from '../Feed'
import PerfilUser from '../Perfil'
import Post from '../Post'
import Logins from "../Routes.js/Logins"
import {MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'react-native-paper';
import EditarPerfilScreen from "../EditarPerfilScreen";
import {View} from "react-native"
import FeedAdmStack from "./NavigateAdm"
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

 const MyTabs = () => (
    
      <Tab.Navigator initialRouteName='Feed' screenOptions={{
        tabBarStyle:{
            backgroundColor: '#fff'
          }
      }}
      >
        <Tab.Screen name="FeedAdmNavigation" component={FeedAdmStack} options={{ 
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon: ({ focused}) => (
            <MaterialCommunityIcons name="account-group" color={focused ? '#09b291' : 'black'} size={26} /> 
            ),
          }}
        />
        <Tab.Screen name="Feed" component={Feed} options={{ 
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
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="plus" color={focused ? '#09b291' : 'black'} size={26} /> 
            ),
          }}
        />
         <Tab.Screen name="PerfilNavigation" component={ProfileStackScreen} options={{ 
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon: ({ focused }) => (
            <Feather name="user" color={focused ? '#09b291' : 'black'} size={26} /> 
            ),
          }} /> 
      </Tab.Navigator> 
 )
export default MyTabs;  

const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}>
      <ProfileStack.Screen
        name="Perfil"
        component={PerfilUser}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
             <Icon.Button
                name="account-arrow-left"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('Logins')}
              />
            </View>
          ),
          headerRight: () => (
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('EditarPerfil')}
              />
          ),
        }}
      />
      <ProfileStack.Screen
        name="Logar"
        options={{
          title: 'Login',
        }}
        component={Logins}
      />
      <ProfileStack.Screen
        name="EditarPerfil"
        options={{
          title: 'Editar Perfil',
        }}
        component={EditarPerfilScreen}
      />
    </ProfileStack.Navigator>
  );
};

  // options={{headerShown:false}}