import React from "react";
import { Text, View, ImageBackground } from 'react-native'
import styles from "../styles/cadastroempresa"

const bolaVerde = require('../../assets/BolaVerdeDireita.png')

export default function CadastroEmpresaScreen() { 
    return( 
<View style={styles.container}>
    <ImageBackground
        source = {bolaVerde} style={styles.backGround}  >
        <Text>Gostosin</Text>
    </ImageBackground>
            
</View>
)}  