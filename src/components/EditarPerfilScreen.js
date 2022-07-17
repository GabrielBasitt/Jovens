import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, Button, Image, Platform, KeyboardAvoidingView} from 'react-native';
import * as ImagePicker from "expo-image-picker";
import styles from '../styles/editarperfil';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EditarPerfilScreen = () => {

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
    <KeyboardAvoidingView behavior={Platform.OS =="android" ? "padding": "height"} style={styles.container}>
    
      <TouchableOpacity onPress={PickImage}>
      <View style={styles.imgContainer}  resizeMode="center">
      {image && <Image source={{uri:image}} style={styles.imagePress}/>}
      </View>
      </TouchableOpacity>
      <View style={styles.userInfoTitles}>
      <View style={styles.row}>
          <Icon name="account-circle" style={{ left: 30, zIndex: 90 }} color="#777777" size={25} />
          <TextInput style={styles.text} placeholder="Digite um nome"></TextInput>
        </View>
        <View style={styles.row}>
          <Icon name="account-circle" style={{ left: 30, zIndex: 90 }} color="#777777" size={25} />
          <TextInput style={styles.text} placeholder="Digite um nome de usuário"></TextInput>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker-radius" style={{ left: 30, zIndex: 90 }} color="#777777" size={25} />
          <TextInput style={styles.text} placeholder="Digite sua cidade"></TextInput>
        </View>
        <View style={styles.row}>
          <Icon name="phone" style={{ left: 30, zIndex: 90 }} color="#777777" size={25} />
          <TextInput style={styles.text} placeholder="Digite seu número"></TextInput>
        </View>
        <View style={styles.row}>
          <Icon name="account" style={{ left: 30, zIndex: 90 }} color="#777777" size={25} />
          <TextInput style={styles.text} placeholder="Digite sua idade"></TextInput>
          <TouchableOpacity
                            style={styles.btnE}
                            onPress={postPerfil}>
                            <Text style={styles.editar}>Editar</Text>
                        </TouchableOpacity>
        </View>
      </View>
      
    </KeyboardAvoidingView>


  );
};

export default EditarPerfilScreen;