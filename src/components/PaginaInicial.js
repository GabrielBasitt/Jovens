import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../styles/paginainicial';
import LOGO from "../../assets/logo.png"

const bolaVerde = require('../../assets/Bola_Verde.png')

export default  function PaginaInicial({ navigation}) { 

  return(
    
    <View style={styles.container} >
      <ImageBackground
        source = {bolaVerde} style={styles.backGround}  >
      <Image
        style={styles.tinyLogo}
        source={LOGO}
      />
    <View>
      <Text style={styles.titulo}>
      PaH
      </Text>
      <Text style={styles.frase}>
        Pessoas são a esperança
      </Text>
      <Text style={styles.frase} >Seja Bem-vindo(a)</Text>
    </View>

     
    <View style={styles.containerBTN} >
   
    <TouchableOpacity
    style={styles.btnL}
    onPress={() => navigation.navigate('Login')}>
    <Text style={styles.name}>Login</Text> 
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.btnC}
    onPress={() =>navigation.navigate('Cadastros')}>
    <Text style={styles.name}>Cadastro</Text> 
     </TouchableOpacity>
     
    </View>
    </ImageBackground>
    </View>
  )};
  
 