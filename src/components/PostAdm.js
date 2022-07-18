import React, { useState, useEffect } from 'react';
import {Text, View ,ImageBackground,  TextInput, TouchableOpacity, Image, Platform, KeyboardAvoidingView} from 'react-native'
import styles from '../styles/post'
import * as ImagePicker from "expo-image-picker";

const bolaVerde = require('../../assets/BolaVerdeEsquerda.png')

const Cadastropostagemadm = () => {
    
    const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchData(){
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'grandet') {
      }
    }}
    fetchData()
}, [])

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

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
            await fetch('https://jovens-db.herokuapp.com/postagem', requestOptions)
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
            <View style={styles.container}>
            <ImageBackground 
                source = {bolaVerde} style={styles.backGround}  >
                <KeyboardAvoidingView behavior={Platform.OS =="android" ? "padding": "height"}>
                <Text style={styles.texto}> Novo post Adm </Text>
                <TouchableOpacity onPress={PickImage}>
                <View style={styles.imgContainer}  resizeMode="center">
                {image && <Image source={{uri:image}} style={styles.imagePress}/>}
                </View>
                </TouchableOpacity>
                <View style ={styles.viewInputs}>
                    <TextInput style = {styles.titulo}
                    placeholder="Título"
                    autoCorrect={false}
                    value={titulo}
                    onChangeText={handleTituloChange}
                    />
                    <TextInput style = {styles.titulo}
                    placeholder="Descrição" 
                    autoCorrect={false}
                    value={descricao}
                    onChangeText={handleDescricaoChange}                    
                    />
                    
                     <TouchableOpacity
                        style={styles.btnL}
                        onPress={postPost}>
                        <Text style={styles.name}>Postar</Text> 
                        </TouchableOpacity>
                
                </View>
                </KeyboardAvoidingView>
                </ImageBackground>
                </View>
    )}
export default Cadastropostagemadm