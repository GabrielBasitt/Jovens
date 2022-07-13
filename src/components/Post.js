import React from "react";
import {Text, View ,ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import styles from '../styles/post'
const bolaVerde = require('../../assets/BolaVerdeEsquerda.png')

const cadastroPostagem = () => {
    
    const [foto, setFoto] = useState('')
    const [data_postagem, setData_postagem] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descricao, setdescricao] = useState('')

    const handleFotoChange = foto => setFoto(foto)
    const handleDescricaoChange = descricao => setdescricao(descricao)
    const handleData_postagemcaoChange = data_postagem => setData_postagem(data_postagem)
    const handleTituloChange = titulo => setTitulo(titulo)
    

    const postEmpresa = async (props) => {  
    if (foto && titulo  && data_postagem && descricao != "") {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                mode: 'no-cors',
                body: JSON.stringify({
                    foto: foto,
                    titulo: titulo,
                    data_postagem: data_postagem,
                    descricao: descricao
                })
            }
            await fetch('https://jovens-db.herokuapp.com/pessoa', requestOptions)
            // props.addEmpresa()

            //navigation.navigate('Login')
           
        }catch( error){
            console.log(error)
            setFoto('')
            setTitulo('')
            setData_postagem('')
            setdescricao('')
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
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground 
        source = {bolaVerde} style={styles.backGround}  >
            <View>

                < Text style={styles.texto}> Novo post </Text>
                <View style ={styles.viewInputs}>
                    <TextInput style = {styles.titulo}
                    placeholder="Título"
                    autoCorrect={false}
                    value={titulo}
                    onChangeText={handleTituloChange}
                    />
                    <TextInput style = {styles.desc}
                    placeholder="Descrição..." 
                    autoCorrect={false}
                    value={descricao}
                    onChangeText={handleDescricaoChange}                    
                    />

                    <TextInput style = {styles.link}
                    placeholder="Endereço da imagem..." 
                    autoCorrect={false}
                    value={foto}
                    onChangeText={handleFotoChange}
                    />
                     <TouchableOpacity
                        style={styles.btnL}
                        onPress={postEmpresa}>
                        <Text style={styles.name}>Postar</Text> 
                        </TouchableOpacity>
                </View>
            </View>
                </ImageBackground>
            </KeyboardAvoidingView>

        
    )

    }
export default cadastroPostagem
    