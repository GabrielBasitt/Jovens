import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/paginainicial';





export default  function PaginaInicial({ navigation}) { 

  return(
    <View style={styles.container}>
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
    </View>
  )};
  
 