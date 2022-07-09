import {useState} from "react";
import { Text, TextInput, View, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import styles from "../styles/cadastrousuario"
import React from "react";


const bolaVerde = require('../../assets/BolaVerdeEsquerda.png')

const cadastroUsuario = (props) => {
    const [nome_completo, setNome_completo] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [data_nascimento, setData_nascimento] = useState('')
    const [email, setEmail] = useState('')
    const [senha, SetSenha] = useState('')

    const handleNome_CompletoChange = nome_completo => setNome_completo(nome_completo)
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

                        <TextInput style={styles.inpName}
                        //    value={nome_completo}
                           placeholde={'Escreva um nome'}
                            //  onChaanngeText={hdleNome_CompletoChange}
                        onChangeText={(nome_completo) => { setNome_completo(nome_completo.target.value)} }
                           />
                        <TextInput style={styles.inpCPF}
                            // placeholder="Insira seu CPF..."
                            // autoCorrect={false}
                            // onChange={(cpf) => {setCpf(cpf.target.value)} 
                            value={nome_completo}
                            placeholde={'Escreva um nome'}
                              onChangeText={handleNome_CompletoChange}
                            //}
                            />

                        <TextInput style={styles.inpData}
                            // placeholder="Insira sua data de nascimento..."
                            // autoCorrect={false}
                            // onChange={(data_nascimento) => { setData_nascimento(data_nascimento.target.value)} 
                            value={nome_completo}
                            placeholde={'Escreva um nome'}
                              onChangeText={handleNome_CompletoChange}
                            //}
                            />

                        <TextInput style={styles.inpTelefone}
                            // placeholder="Insira seu telefone..."
                            // autoCorrect={false}
                            // onChange={(telefone) => { setTelefone(telefone.target.value)} 
                            value={nome_completo}
                            placeholde={'Escreva um nome'}
                              onChangeText={handleNome_CompletoChange}
                            //}
                            />

                        <TextInput style={styles.inpEmail}
                            // placeholder="Insira seu E-mail..."
                            // autoCorrect={false}
                            // onChange={(email) => { setEmail(email.target.value)} 
                           // }
                           value={nome_completo}
                           placeholde={'Escreva um nome'}
                             onChangeText={handleNome_CompletoChange}
                            />

                        <TextInput style={styles.inpSenha}
                            // placeholder="Insira uma senha..."
                            // autoCorrect={false}
                            // onChange={ (senha) => { SetSenha(senha.target.value)}}

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