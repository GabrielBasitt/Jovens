import React, { Component } from "react";
import { View} from 'react-native'
import styles from '../styles/perfil'
import {Avatar, Title, Caption, Text, TouchableRipple,} from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' 

const PerfilUser = () => {
  return(
    <SafeAreaView>
    <View style={styles.container}>
      <View style ={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
          source={{
            uri: 'https://ichigoinu.com/assets/img/ichigo_hero.png' ,}} size={80}/>

        </View>
        <View style={{marginLeft:20}}>
        <Title style ={[styles.title, {marginTop:15, marginBottom: 5}]}>Coe manin</Title>
        <Caption style ={styles.caption}>@Coe_zé</Caption>
        </View>
      </View>
    </View>

    <View style={styles.userInfoSection}>
      <View style={styles.row}>
        <Icon name="map-marker-radius"  color ="#777777" size={20} />
        <Text style={{color:"#777777", marginLeft: 20}}>Rio Verde</Text>
      </View>
      <View style={styles.row}>
        <Icon name="phone"  color ="#777777" size={20} />
        <Text style={{color:"#777777", marginLeft: 20}}> (48) 98483-2311</Text>
      </View>
      <View style={styles.row}>
        <Icon name="phone"  color ="#777777" size={20} />
        <Text style={{color:"#777777", marginLeft: 20}}> 25 anos</Text>
      </View>
    </View>
    </SafeAreaView>
  )
}
export default PerfilUser;