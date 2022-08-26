import React, {useState} from "react";
import {Alert,Text, View ,ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity, PanResponder, Platform} from 'react-native'
import styles from '../styles/login' 

const bolaVerde = require('../../assets/BolaVerdeEsquerda.png')

export default function LogarUsuario({navigation}){
//     const [pessoa, setPessoa] = useState([])
//     const [email, setEmail] = useState('')
//     const [senha, setSenha] = useState('')
//     const handleEmailChange = email => setEmail(email)
//     const handleSenhaChange = senha => setSenha(senha)
//     const getPessoa = async () => {
//         if (email && senha != "") {
//         try{
//             const requestOptions = {
//                 method: 'POST',
//                 headers: { 'Content-type': 'application/json' },
//                 body: JSON.stringify({
//                     email: email,
//                     senha: senha
//                 })
//             }
//             const response = await fetch('https://jovens-db.herokuapp.com/login/pessoa', requestOptions)
//             if(response.status === 400){
//             Alert.alert("Erro!","Usuário não encontrado");
//             }else{
//                 const data = await response.json()
//                 setPessoa(data)
//                 navigation.navigate("HomeNavigation")
//                 }
//         }catch(error){
//             console.log(error)
//                 }
//    }}
    
    return(
              
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == "android" ? "padding": "height"}>
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
                    // value={email}
                    placeholder="Digite o seu email"
                    //  onChangeText={handleEmailChange}
                     autoCorrect={false}
                    />
                    <TextInput style = {styles.inpSenha}
                    // value={senha}
                    placeholder="Digite sua senha"
                    // onChangeText={handleSenhaChange}
                    autoCorrect={false}
                    />
                     <TouchableOpacity
                        style={styles.btnL}
                        onPress={() =>navigation.navigate('HomeNavigation')}>
                        <Text style={styles.name}>Entrar</Text> 
                        </TouchableOpacity>
                </View>
                </View>
    </ImageBackground>
</KeyboardAvoidingView>


    )}