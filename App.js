import React from 'react';
import { View, Image, Text, Button, TouchableOpacity, Alert } from 'react-native';
import styles from './src/styles/app'

const App = () => { 

  return(
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/LOGO.png')}
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
    

    <View >
    <TouchableOpacity
    style={styles.btnLC}
    onPress={() => Alert.alert('site ruim')}>
    <Text style={styles.name}>Login</Text> 
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.btnLC}
    onPress={() => Alert.alert('ste mto ruim')}>
    <Text style={styles.name}>Cadastro</Text> 
     </TouchableOpacity>
    </View>
    </View>
  )};
export default App