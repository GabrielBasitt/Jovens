import React from "react";
import {Text, View ,ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import styles from '../styles/post'
const bolaVerde = require('../../assets/BolaVerdeEsquerda.png')

const cadastroPostagem = () => {
    
    const [foto, setFoto] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descricao, setdescricao] = useState('')

    const handleFotoChange = foto => setFoto(foto)
    const handleDescricaoChange = descricao => setdescricao(descricao)
    const handleTituloChange = titulo => setTitulo(titulo)
    

    const postPost = async () => {  
    if (foto && titulo && descricao != "") {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
            
                body: JSON.stringify({
                    foto: foto,
                    titulo: titulo,
                    descricao: descricao
                })
            }
            await fetch('https://jovens-db.herokuapp.com/pessoa', requestOptions)
           navigation.navigate('home')
           
        }catch( error){
            console.log(error)
            setFoto('')
            setTitulo('')
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
                        onPress={postPost}>
                        <Text style={styles.name}>Postar</Text> 
                        </TouchableOpacity>
                </View>
            </View>
                </ImageBackground>
            </KeyboardAvoidingView>
    )}
export default cadastroPostagem
    