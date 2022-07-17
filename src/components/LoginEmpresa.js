import React, {useState} from "react";
import {Text, View ,ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import styles from '../styles/login'
const bolaVerde = require('../../assets/BolaVerdeEsquerda.png')

export default function LogarEmpresa({navigation}){
    const [empresa, setEmpresa] = useState([])
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const handleEmailChange = email => setEmail(email)
    const handleSenhaChange = senha => setSenha(senha)
    const getEmpresa = async () => {
        if (email && senha != "") {
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    senha: senha
                })
            }
            const response = await fetch('http://localhost:3000/login/empresa', requestOptions)
            if(response.status === 400){
            console.log("usuario nao econtrado");
            }else{
                const data = await response.json()
                setEmpresa(data)
                navigation.navigate("Home")
                }
        }catch(error){
            console.log(error)
                }}}
    return(
        <View style={styles.container}>
            <ImageBackground 
        source = {bolaVerde} style={styles.backGround}  >
            <KeyboardAvoidingView behavior="padding">

                <View>
                    <Text style= {styles.textlogin}>Login</Text>
                </View>
                <View>
                    <Text  style={styles.frase}>Informe seu usuário e senha!</Text>
                </View>
                <View style ={styles.viewInputs}>
                    <TextInput style = {styles.inpEmail}
                    value={email}
                    placeholder="Digite seu email "
                     onChangeText={handleEmailChange}
                     autoCorrect={false}
                    />
                    <TextInput style = {styles.inpSenha}
                    value={senha}
                    placeholder="Digite sua senha"
                    onChangeText={handleSenhaChange}
                    autoCorrect={false}
                    />
                     <TouchableOpacity
                        style={styles.btnL}
                        onPress={getEmpresa}>
                        <Text style={styles.name}>Entrar</Text> 
                        </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
    </ImageBackground>
</View>
    );
    }