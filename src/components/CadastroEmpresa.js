import React from "react";
import { TextInput  , View, ImageBackground, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native'
import styles from "../styles/cadastroempresa"
import {useState} from "react";

const bolaVerde = require('../../assets/BolaVerdeDireita.png')
const cadastroEmpresa = () => {
    const [nome_empresa, setNome_empresa] = useState('')
    const [cnjp, setCnpj] = useState('')
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

    const postEmpresa = async (props) => {  
    if (nome_empresa && cnjp && telefone && data_fundacao && email && senha != "") {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                mode: 'no-cors',
                body: JSON.stringify({
                    nome_empresa: nome_empresa,
                    cnjp: cnjp,
                    telefone: telefone,
                    data_fundacao: data_fundacao,
                    email: email,
                    senha: senha
                })
            }
            await fetch('https://jovens-db.herokuapp.com/pessoa', requestOptions),
            props.addEmpresa()

            //navigation.navigate('Login')
           
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
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>

                <ImageBackground
                    source={bolaVerde} style={styles.backGround}  >

                    <View style={styles.viewInputs}>
                    
                        <TextInput style={styles.inpName} 
                        value={nome_empresa}
                        placeholder="Escreva o nome da empresa"
                        onChangeText={handleNome_empresaChange}
                        
                           />
                        <TextInput style={styles.inpCPF}
                             value={cnpj}
                            placeholder="Escreva o CNPJ da empresa"
                            onChangeText={handleCnpjChange}
                            />
                        <TextInput style={styles.inpData}
                            value={data_fundacao}
                            placeholder="Escreva a data de fundação da empresa"
                             onChangeText={handledata_fundacaoChange}
                            />
                        <TextInput style={styles.inpTelefone}
                            value={telefone}
                            placeholder="Escreva o telefone da empresa"
                              onChangeText={handleTelefoneChange}
                            />
                        <TextInput style={styles.inpEmail}
                            value={email}
                            placeholder="Escreva o email da empresa"
                             onChangeText={handleEmailChange}
                            />
                        <TextInput style={styles.inpSenha}
                                value={senha}
                                placeholder="escreva uma senha"
                                onChangeText={handleSenhaChange}
                            />
                        <TouchableOpacity
                            style={styles.btnC}
                            onPress={postEmpresa}>
                            <Text style={styles.cadastrar}>Cadastrar</Text>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>

        </View>
    )

    }
export default cadastroEmpresa