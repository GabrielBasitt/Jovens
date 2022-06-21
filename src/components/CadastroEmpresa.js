import React from "react";
import { Text, View, ImageBackground } from 'react-native'

const bolaVerde = require('../../assets/BolaVerde.png')

export default function CadastroEmpresaScreen() { 
    return( 
<View>
    <ImageBackground
        source = {bolaVerde} style={{ height: "100%", width: "100%"}}  >
        <Text>Gostosin</Text>
    </ImageBackground>
            
</View>
)}  