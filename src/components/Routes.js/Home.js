import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsAdm from '../PostsAdm'
import Feed from '../Feed'
import PerfilUser from '../Perfil'
import Post from '../Post'
import {MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

 const MyTabs = () => (
    
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
        { <Tab.Screen name="Perfil" component={ProfileStackScreen} options={{ 
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon: ({ focused }) => (
            <Feather name="user" color={focused ? '#09b291' : 'black'} size={26} /> 
            ),
          }} /> }
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
        name="EditarPerfil"
        options={{
          title: 'Edit Profile',
        }}
        component={EditarPerfilScreen}
      />
    </ProfileStack.Navigator>
  );
};

  // options={{headerShown:false}}