import React from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/paginainicial'
import LOGO from '../../assets/LOGO.png'

const PaginaInicial = () => { 

  return(
    <View style={styles.container}>
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
    onPress={() => Alert.alert('site ruim')}>
    <Text style={styles.name}>Login</Text> 
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.btnC}
    onPress={() => Alert.alert('ste mto ruim')}>
    <Text style={styles.name}>Cadastro</Text> 
     </TouchableOpacity>
    </View>
    </View>
  )};
  export default PaginaInicial 