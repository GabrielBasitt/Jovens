import React from "react";
import { TextInput  , View, ImageBackground, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native'
import styles from "../styles/cadastroempresa"

const bolaVerde = require('../../assets/BolaVerdeDireita.png')

export default function CadastroEmpresaScreen({navigation}) { 
    return( 
    <KeyboardAvoidingView style={styles.container}>
    
    <ImageBackground 
        source = {bolaVerde} style={styles.backGround}  >
    
                <View style ={styles.viewInputs}>
                    
                    <TextInput style = {styles.inpName}
                    placeholder="Insira o nome da sua empresa..."
                    autoCorrect={false}
                    onChange={()=>{}} />
                    
                    <TextInput style = {styles.inpCnpj}
                    placeholder="Insira o CNPJ da sua empresa..."
                    autoCorrect={false} 
                    onChange={()=>{}}/>
                    
                    <TextInput style = {styles.inpData}
                    placeholder="Insira a data de fundação de sua empresa..."
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
    
)}  