import {useState} from "react";
import { Text, TextInput, View, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import styles from "../styles/cadastrousuario"
import React from "react";



const bolaVerde = require('../../assets/BolaVerdeEsquerda.png')

const cadastroUsuario = () => {
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

    const postUser = async (props) => {  
    if (nome_completo && cpf && telefone && data_nascimento && email && senha != "") {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                mode: 'no-cors',
                body: JSON.stringify({
                    nome_completo: nome_completo,
                    cpf: cpf,
                    telefone: telefone,
                    data_nascimento: data_nascimento,
                    email: email,
                    senha: senha
                })
            }
            await fetch('https://jovens-db.herokuapp.com/pessoa', requestOptions),
            props.addUser()

            //navigation.navigate('Login')
           
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
                    
                        <TextInput style={styles.inpName} value={nome_completo}
                        placeholder="Escreva um nome"
                        onChangeText={handleNome_completoChange}
                        
                           />
                        <TextInput style={styles.inpCPF}
                            placeholder="Escreva um cpf"
                            onChangeText={handleCpfChange}
                            />
                        <TextInput style={styles.inpData}
                            placeholder="Escreva sua data de nascimento"
                             onChangeText={handledata_nascimentoChange}
                            />
                        <TextInput style={styles.inpTelefone}
    
                            placeholder="Escreva seu telefone"
                              onChangeText={handleTelefoneChange}
                            />
                        <TextInput style={styles.inpEmail}
                           placeholder="Escreva um email"
                             onChangeText={handleEmailChange}
                            />
                        <TextInput style={styles.inpSenha}
                                placeholder="escreva sua senha"
                                onChangeText={handleSenhaChange}
                            />
                        <TouchableOpacity
                            style={styles.btnC}
                            onPress={postUser}>
                            <Text style={styles.cadastrar}>Cadastrar</Text>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>

        </View>
    )

    }
export default cadastroUsuario 