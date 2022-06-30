import React from "react";
import { Text, TextInput, View, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import styles from "../styles/cadastrousuario"

const bolaVerde = require('../../assets/BolaVerdeEsquerda.png')

export default function CadastroUsuarioScreen({navigation}) { 
    return( 
<View style={styles.container}>
    <KeyboardAvoidingView style={styles.container}>
    
        <ImageBackground 
            source = {bolaVerde} style={styles.backGround}  >
    
                <View style ={styles.viewInputs}>
                    
                    <TextInput style = {styles.inpName}
                    placeholder="Insira seu nome..."
                    autoCorrect={false}
                    onChange={()=>{}} />
                    
                    <TextInput style = {styles.inpCPF}
                    placeholder="Insira seu CPF.."
                    autoCorrect={false} 
                    onChange={()=>{}}/>
                    
                    <TextInput style = {styles.inpData}
                    placeholder="Insira sua data de nascimento..."
                    autoCorrect={false}
                    onChange={()=>{}} />

                    <TextInput style = {styles.inpEmail}
                    placeholder="Insira seu e-mail..."
                    autoCorrect={false}
                    onChange={()=>{}} />

                    <TextInput style = {styles.inpSenha}
                    placeholder="Insira sua senha..."
                    autoCorrect={false}
                    onChange={()=>{}} />
                    
                    <TouchableOpacity
                        style={styles.btnC}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.cadastrar}>Cadastrar</Text> 
                    </TouchableOpacity>
                        
                </View>
        </ImageBackground>
        </KeyboardAvoidingView>
            
</View>    
)}