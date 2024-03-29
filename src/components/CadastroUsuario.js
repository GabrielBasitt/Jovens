import {useState} from "react";
import { Text, TextInput, View, ImageBackground, KeyboardAvoidingView, TouchableOpacity, Platform, Alert } from 'react-native'
import styles from "../styles/cadastrousuario"
import React from "react"
const bolaVerde = require('../../assets/BolaVerdeEsquerda.png')

const Cadastrousuario = ({navigation}) => {

    const [nome_completo, setNome_completo] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [data_nascimento, setData_nascimento] = useState('')
    const [email, setEmail] = useState('')
    const [senha, SetSenha] = useState('')

    const handleNome_completoChange = nome_completo => setNome_completo(nome_completo)
    const handleCpfChange = cpf => setCpf(cpf)
    const handleTelefoneChange = telefone => setTelefone(telefone)
    const handledata_nascimentoChange = data_nascimento => setData_nascimento(data_nascimento)
    const handleEmailChange = email => setEmail(email)
    const handleSenhaChange = senha => SetSenha(senha)

    const postUser = async () => {  

    if (nome_completo && cpf && telefone && data_nascimento && email && senha != "") {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    nome_completo: nome_completo,
                    cpf: cpf,
                    telefone: telefone,
                    data_nascimento: data_nascimento,
                    email: email,
                    senha: senha
                })
            }
            await fetch('https://jovens-db.herokuapp.com/pessoa', requestOptions)
            navigation.navigate('Logins')
           
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
        Alert.alert("Erro!","Não foi possivel efetuar o cadastro!");

        }
    }

    return (
        <View  style={styles.container}>
            <View style={styles.container}>
                <ImageBackground
                    source={bolaVerde} style={styles.backGround}  >
                    <KeyboardAvoidingView behavior={Platform.OS =="android" ? "position": "height" } style={styles.viewInputs}>
                        <TextInput style={styles.inpName} 
                        value={nome_completo}
                        placeholder="Digite seu nome"
                        onChangeText={handleNome_completoChange}
                        autoCorrect={false}
                           />
                        <TextInput style={styles.inpCPF}
                            value={cpf}
                            placeholder="Digite seu Cpf"
                            onChangeText={handleCpfChange}
                            autoCorrect={false}
                            />
                        <TextInput style={styles.inpData}
                            value={data_nascimento}
                            placeholder="Digite sua data de nascimento"
                             onChangeText={handledata_nascimentoChange}
                             autoCorrect={false}
                            />
                        <TextInput style={styles.inpTelefone}
                            value={telefone}
                            placeholder="Digite seu telefone"
                              onChangeText={handleTelefoneChange}
                              autoCorrect={false}
                            />
                        <TextInput style={styles.inpEmail}
                            value={email}
                            placeholder="Digite seu e-mail"
                             onChangeText={handleEmailChange}
                             autoCorrect={false}
                            />
                        <TextInput style={styles.inpSenha}
                                value={senha}
                                placeholder="Digite uma senha"
                                onChangeText={handleSenhaChange}
                                  autoCorrect={false}
                            />
                        <TouchableOpacity
                            style={styles.btnC}
                            onPress={postUser}>
                            <Text style={styles.cadastrar}>Cadastrar</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </View>
    )}
export default Cadastrousuario