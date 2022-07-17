import React, { Component } from "react";
import { View} from 'react-native'
import styles from '../styles/perfil'
import {Avatar, Title, Caption, Text,} from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' 

const PerfilUser = () => {
  return(
    <SafeAreaView style={{justifyContent: "center", alignItems: "center"}}>
    <View style={styles.container}>
      <View style ={styles.userInfoSection}>
        <View style={{flexDirection: 'column'}}>
          <Avatar.Image
          source={{
            uri: 'https://free4kwallpapers.com/uploads/originals/2015/12/09/raiden-metal-gear-rising-revengeance-wallpaper.jpg',}} size={140}/>
        </View>
      </View>
    </View>
            <Title style ={styles.title}>Coe manin</Title>
            <Caption style ={styles.caption}>@Coe_zé</Caption> 
    <View style={styles.userInfoTitles}>
      <View style={styles.row}>
        <Icon name="map-marker-radius"  style={{left: 30, zIndex: 90}} color ="#777777" size={25} />
        <Text style={styles.text}>Florianópolis</Text>
      </View>
      <View style={styles.row}>
        <Icon name="phone" style={{left: 30, zIndex: 90}} color ="#777777" size={25} />
        <Text style={styles.text}> https://wa.me/554888520572</Text>

      </View>
      <View style={styles.row}>
        <Icon name="account" style={{left: 30, zIndex: 90}} color ="#777777" size={25} />
        <Text style={styles.text}> 25 anos</Text>
      </View>
    </View>
    </SafeAreaView>
  )
}
export default PerfilUser;
