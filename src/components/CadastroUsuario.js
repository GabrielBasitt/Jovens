import {useState} from "react";
import { Text, TextInput, View, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import styles from "../styles/cadastrousuario"
import React from "react";

const bolaVerde = require('../../assets/BolaVerdeEsquerda.png')

export default function CadastroUsuarioScreen({ navigation }) {

    const [nome_completo, setNome_completo] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [data_nascimento, setData_nascimento] = useState('')
    const [email, setEmail] = useState('')
    const [senha, SetSenha] = useState('')

    const postUser = async () => {
        
    if (nome_completo  && cpf && telefone && data_nascimento && email != "" && senha != "") {
        try {
            const requestOptons = {
                method: 'post',
                Headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    nome_completo: nome_completo,
                    cpf: cpf,
                    telefone: telefone,
                    data_nascimento,
                    email: email,
                    senha: senha
                })
            }
            await fetch('https://jovens-server.herokuapp.com/pessoa', requestOptons)
            navigation.navigate('Login')

           
        }catch( error){
            console.log(error)
            setNome_completo('')
            setCpf('')
            setTelefone('')
            setData_nascimento('')
            setEmail('')
            SetSenha('')
        }
    }else{
            return(
            <View>
                <Text>Preencha o campo em branco</Text>
            </View>
            )
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>

                <ImageBackground
                    source={bolaVerde} style={styles.backGround}  >

                    <View style={styles.viewInputs}>

                        <TextInput style={styles.inpName}
                            placeholder="Insira seu nome completo..."
                            autoCorrect={false}
                            onChange={(text) => { setNome_completo(text)}} 
                            value={nome_completo}/>

                        <TextInput style={styles.inpCPF}
                            placeholder="Insira seu CPF..."
                            autoCorrect={false}
                            onChange={(text) => { setCpf(text)}} 
                            value={cpf}/>

                        <TextInput style={styles.inpData}
                            placeholder="Insira sua data de nascimento..."
                            autoCorrect={false}
                            onChange={(text) => { setTelefone(text)}} 
                            value={telefone}/>

                        <TextInput style={styles.inpTelefone}
                            placeholder="Insira seu telefone..."
                            autoCorrect={false}
                            onChange={(text) => { setData_nascimento(text)}} 
                            value={data_nascimento}/>

                        <TextInput style={styles.inpEmail}
                            placeholder="Insira seu E-mail..."
                            autoCorrect={false}
                            onChange={(text) => { setEmail(text)}} 
                            value={email}/>

                        <TextInput style={styles.inpSenha}
                            placeholder="Insira uma senha..."
                            autoCorrect={false}
                            onChange={(text) => { SetSenha(text)}} 
                            value={senha}/>

                        <TouchableOpacity
                            style={styles.btnC}
                            onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.cadastrar}>Cadastrar</Text>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>

        </View>
    )

    }

