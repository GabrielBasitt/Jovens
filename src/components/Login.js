import React from "react";
import {Text, View , KeyboardAvoidingView, Image, TextInput, TouchableOpacity} from 'react-native'

import styles from '../styles/login'
import Fundo from  '../../assets/Fundo.png'

export default function Logar({navigation}){
    return(


        <KeyboardAvoidingView style={styles.container}>
            <View>

                <View>
                    <Text style= {styles.textlogin}>Login</Text>
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
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.name}>Entrar</Text> 
                        </TouchableOpacity>

                </View>
                </View>
   
</KeyboardAvoidingView>
    );
    }


    