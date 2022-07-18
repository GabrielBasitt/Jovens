import React, { Component, useEffect} from "react";
import { View} from 'react-native'
import styles from '../styles/perfil'
import {Avatar, Title, Caption, Text,} from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' 
import perfil from "../styles/perfil";

const PerfilUser = () => {
  const [perfil, setPerfil] = useState([])
  
  const getPerfil = async () => {
        try{
            const requestOptions = {
                method: 'GET',
                headers: {'Content-type': 'application/json'}
            }
            const response = await fetch('https://jovens-db.herokuapp.com/perfil', requestOptions)
            if(response.status === 400){
            console.log("usuario nao econtrado");
            }else{
                const data = await response.json()
                setPerfil(data)
                }
        }catch(error){
            console.log(error)
          }
   }
   useEffect(() => {
    getPerfil()
  }, []);
  
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
              <Title style ={styles.title}
             autoCorrect={false}>{perfil.nome_perfil}</Title>
              <Caption style ={styles.caption}
              autoCorrect={false}
              >{perfil.nome_usuario}</Caption> 
      <View style={styles.userInfoTitles}>
        <View style={styles.row}>
          <Icon name="map-marker-radius"  style={{left: 30, zIndex: 90}} color ="#777777" size={25} />
          <Text style={styles.text}
          autoCorrect={false}
          >{perfil.cidade}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" style={{left: 30, zIndex: 90}} color ="#777777" size={25} />
          <Text style={styles.text}
          > https://wa.me/554888520572{perfil.telefone}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="account" style={{left: 30, zIndex: 90}} color ="#777777" size={25} />
          <Text style={styles.text}
          autoCorrect={false}
          >{perfil.idade}</Text>
        </View>
      </View>
      </SafeAreaView>
    )
            }
  export default PerfilUser;