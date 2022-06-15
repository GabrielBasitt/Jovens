import React from "react";
import { Text, View, ImageBackground } from 'react-native'


const bolaVerde = require('../../assets/Bola_Verde.png')
export default function CadastroUsuarioScreen() { 
    return( 
<View>
    <ImageBackground
        source = {bolaVerde} style={{ height: "100%", width: "100%"}}  >
        <Text style={{}}>Gostosin</Text>
    </ImageBackground>
            
</View>    
)}