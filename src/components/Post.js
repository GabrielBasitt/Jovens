import React from "react";
import {Text, View ,ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import styles from '../styles/post'
const bolaVerde = require('../../assets/BolaVerdeEsquerda.png')

export default function Logar({navigation}){
    return(


        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground 
        source = {bolaVerde} style={styles.backGround}  >
            <View>

                < Text style={styles.texto}> Novo post </Text>
                <View style ={styles.viewInputs}>
                    <TextInput style = {styles.titulo}
                    placeholder="Título"
                    autoCorrect={false}
                    onChange={()=>{}}
                    
                    />

                    <TextInput style = {styles.desc}
                    placeholder="Descrição..." 
                    autoCorrect={false}
                    onChange={()=>{}}
                    
                    />

                    <TextInput style = {styles.link}
                    placeholder="Endereço da imagem..." 
                    autoCorrect={false}
                    onChange={()=>{}}
                    
                    />
                     <TouchableOpacity
                        style={styles.btnL}
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.name}>Postar</Text> 
                        </TouchableOpacity>

                </View>
            </View>
    </ImageBackground>
</KeyboardAvoidingView>
    );
    }


    