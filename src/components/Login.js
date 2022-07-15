import React, {useState} from "react";
import {Text, View ,ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import styles from '../styles/login' 

const bolaVerde = require('../../assets/BolaVerdeEsquerda.png')



export default function Logar({navigation}){
    const [pessoa, setPessoa] = useState([])

    const getPessoa = async () => {
        try{
            const response = await fetch('http://localhost:3000/pessoa')
            const data = response.json()
            data.then(
                (val) => setPessoa(val)
            )
            navigation.navigate("Home")
        }catch(error){
            console.log(error)
        }
   }

    return(


        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground 
        source = {bolaVerde} style={styles.backGround}  >
            <View>

                <View>
                    <Text style= {styles.textlogin}>Login</Text>
                </View>
                <View>
                    <Text  style={styles.frase}>Informe seu usuário e senha!</Text>
                </View>
                <View style ={styles.viewInputs}>
                    <TextInput style = {styles.inpEmail}
                    placeholder="Insira seu Email..."
                    autoCorrect={false}
                    onChange={()=>{}}
                    
                    />

                    <TextInput style = {styles.inpSenha}
                    placeholder="Insira sua senha..." 
                    autoCorrect={false}
                    onChange={()=>{}}
                    
                    />
                     <TouchableOpacity
                        style={styles.btnL}
                        onPress={getPessoa}>
                        <Text style={styles.name}>Entrar</Text> 
                        </TouchableOpacity>

                </View>
                </View>
    </ImageBackground>
</KeyboardAvoidingView>
    );
    }


    
