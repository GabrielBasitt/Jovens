import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, Image, Platform, KeyboardAvoidingView, Text } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import styles from '../styles/editarperfil';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EditarPerfilScreen = () => {
    const [nome_perfil, setNome_perfil] = useState('')
    const [cidade, setCidade] = useState('')
    const [telefone, setTelefone] = useState('')
    const [nome_usuario, setNome_usuario] = useState('')
    const [idade, setIdade] = useState('')

    const handleNome_perfilChange = nome_perfil => setNome_perfil(nome_perfil)
    const handleCidadeChange = cidade => setCidade(cidade)
    const handleTelefoneChange = telefone => setTelefone(telefone)
    const handleNome_usuarioChange = nome_usuario => setNome_usuario(nome_usuario)
    const handleIdadeChange = idade => setIdade(idade)

    const postPerfil = async () => {  
      if (nome_perfil && cidade && telefone && nome_usuario && idade != "") {
          try {
              const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-type': 'application/json' },
                  body: JSON.stringify({
                      nome_perfil: nome_perfil,
                      cidade: cidade,
                      telefone: telefone,
                      nome_usuario: nome_usuario,
                      idade: idade,
                  })
              }
              await fetch('https://jovens-db.herokuapp.com/perfil', requestOptions)
              navigation.navigate('perfil')
             
          }catch( error){
              console.log(error)
              setNome_perfil('')
              setCidade('')
              setTelefone('')
              setNome_usuario('')
              setIdade('')
          }
      }else{
              return(
              <View>
                  <Text>Preencha o campo em branco</Text>
              </View>
              )
          }
      }
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchData(){
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'grandet') {
      }
    }
    fetchData()}
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
  return (
    <KeyboardAvoidingView behavior={Platform.OS ==="android" ? "padding": "height"} style={styles.container}>
    
      <TouchableOpacity onPress={PickImage}>
      <View style={styles.imgContainer}  resizeMode="center">
      {image && <Image source={{uri:image}} style={styles.imagePress}/>}
      </View>
      </TouchableOpacity>
      <View style={styles.userInfoTitles}>
      <View style={styles.row}>
          <Icon name="account-circle" style={{ left: 30, zIndex: 90 }} color="#777777" size={25} />
          <TextInput style={styles.text} 
          value={nome_perfil}
          placeholder="Digite um nome"
          onChangeText={handleNome_perfilChange}
          autoCorrect={false}
         >
        </TextInput>
        </View>
        <View style={styles.row}>
          <Icon name="account-circle" style={{ left: 30, zIndex: 90 }} color="#777777" size={25} />
          <TextInput style={styles.text} 
          value={nome_usuario}
          placeholder="Digite um nome de usuário"
          onChangeText={handleNome_usuarioChange}
          autoCorrect={false}
          ></TextInput>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker-radius" style={{ left: 30, zIndex: 90 }} color="#777777" size={25} />
          <TextInput style={styles.text} 
           value={cidade}
          placeholder="Digite sua cidade"
          onChangeText={handleCidadeChange}
          autoCorrect={false}>
          </TextInput>
        </View>
        <View style={styles.row}>
          <Icon name="phone" style={{ left: 30, zIndex: 90 }} color="#777777" size={25} />
          <TextInput style={styles.text} 
            value={telefone}
          placeholder="Digite seu número"
          onChangeText={handleTelefoneChange}
          autoCorrect={false}>
          </TextInput>
        </View>
        <View style={styles.row}>
          <Icon name="account" style={{ left: 30, zIndex: 90 }} color="#777777" size={25} />
          <TextInput style={styles.text} 
          value={idade}
          placeholder="Digite sua idade"
          onChangeText={handleIdadeChange}
          autoCorrect={false}>
          </TextInput>
        </View>
          <TouchableOpacity
            style={styles.btnE}
            onPress={postPerfil}>
            <Text style={styles.editar}>Editar</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default EditarPerfilScreen;