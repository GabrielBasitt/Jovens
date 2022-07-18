import React from "react";
import { TextInput  , View, ImageBackground, KeyboardAvoidingView, TouchableOpacity, Text, Platform } from 'react-native'
import styles from "../styles/cadastroempresa"
import {useState} from "react";
const bolaVerde = require('../../assets/BolaVerdeDireita.png')

const cadastroEmpresa = () => {

    const [nome_empresa, setNome_empresa] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [telefone, setTelefone] = useState('')
    const [data_fundacao, setData_fundacao] = useState('')
    const [email, setEmail] = useState('')
    const [senha, SetSenha] = useState('')

    const handleNome_empresaChange = nome_empresa => setNome_empresa(nome_empresa)
    const handleCnpjChange = cnpj => setCnpj(cnpj)
    const handleTelefoneChange = telefone => setTelefone(telefone)
    const handledata_fundacaoChange = data_fundacao => setData_fundacao(data_fundacao)
    const handleEmailChange = email => setEmail(email)
    const handleSenhaChange = senha => SetSenha(senha)

    const postEmpresa = async () => {  
    if (nome_empresa && cnpj && telefone && data_fundacao && email && senha != "") {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    nome_empresa: nome_empresa,
                    cnpj: cnpj,
                    telefone: telefone,
                    data_fundacao: data_fundacao,
                    email: email,
                    senha: senha
                })
            }
            await fetch('https://jovens-db.herokuapp.com/empresa', requestOptions)
            navigation.navigate('Login')
           
        }catch( error){
            console.log(error)
            setNome_empresa('')
            setCnpj('')
            setTelefone('')
            setData_fundacao('')
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
        <View  style={styles.container}>
            <View style={styles.container}>
                <ImageBackground
                    source={bolaVerde} style={styles.backGround}  >
                    <KeyboardAvoidingView behavior={Platform.OS =="android" ? "position": "height" } style={styles.viewInputs}>
                        <TextInput style={styles.inpName} 
                        value={nome_empresa}
                        placeholder="Digite o nome da empresa"
                        onChangeText={handleNome_empresaChange}
                        autoCorrect={false}
                           />
                        <TextInput style={styles.inpCnpj}
                            value={cnpj}
                            placeholder="Digite o CNPJ da empresa"
                            onChangeText={handleCnpjChange}
                            autoCorrect={false}
                            />
                        <TextInput style={styles.inpData}
                            value={data_fundacao}
                            placeholder="Digite a data de fundação da empresa"
                             onChangeText={handledata_fundacaoChange}
                             autoCorrect={false}
                            />
                        <TextInput style={styles.inpTelefone}
                            value={telefone}
                            placeholder="Digite o telefone da empresa"
                              onChangeText={handleTelefoneChange}
                              autoCorrect={false}
                            />
                        <TextInput style={styles.inpEmail}
                            value={email}
                            placeholder="Digite o email da empresa"
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
                            onPress={postEmpresa}>
                            <Text style={styles.cadastrar}>Cadastrar</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </View>
    )}
export default cadastroEmpresa