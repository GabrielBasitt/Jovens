import React from "react";
import { Text, View, ImageBackground } from 'react-native'
import styles from "../styles/cadastrousuario"

const bolaVerde = require('../../assets/BolaVerdeEsquerda.png')

export default function CadastroUsuarioScreen() { 
    return( 
<View style={styles.container}>
    <ImageBackground
        source = {bolaVerde} style={styles.backGround}  >
        <Text>Gostosin</Text>
    </ImageBackground>
            
</View>    
)}