import React, {useEffect, useState } from 'react';
import { View, FlatList, Text, StatusBar, Image, ActivityIndicator } from 'react-native';
import styles from '../styles/feedadm'
import { Divider } from "react-native-elements" ;     


const data = [ 
      {
        "id": 1,
        "icon": "https://www.emporiotambo.com.br/wp/wp-content/uploads/2019/10/23-M%C3%A3os-colocando-fertilizante-em-plantinha.jpg",
        "nome": "PaH",
        "title" : 'Doe um pouco do seu calor!',
        "image": "https://img.r7.com/images/ndtv-lanca-23-edicao-da-campanha-do-agasalho-28052020090828056",
        "aspectRatio": 0.839,
        "descricao": "Estamos arrecadando agasalhos, está dispodto a deixar mais corações quentinhos?",
        "clienteId": 1
      },
      {
        "id": 2,
        "icon": "https://www.emporiotambo.com.br/wp/wp-content/uploads/2019/10/23-M%C3%A3os-colocando-fertilizante-em-plantinha.jpg",
        "nome": "PaH",
        "title" : "Faça o bem.",
        "image": "https://campanhadobem.com.br/images/logo.png",
        "aspectRatio": 0.834,
        "descricao": "Doe algo e vire um anjo para as pessoas. Faça a diferença.",
        "clienteId": 1
      },
      {
        "id": 3,
        "icon": "https://www.emporiotambo.com.br/wp/wp-content/uploads/2019/10/23-M%C3%A3os-colocando-fertilizante-em-plantinha.jpg", 
        "nome": "PaH",
        "title" : 'Arrecadação do bem.',
        "image": "http://f.i.uol.com.br/fotografia/2015/04/21/504695-970x600-1.jpeg",
        "aspectRatio": 0.834,
        "descricao": "Cidades atingidas pelo ciclone precisa de sua ajuda, ajude com alimentos, roupas, materiais de construção e financeiramente essas familias.",
        "clienteId": 1
      },
      {
        "id": 4,
        "icon": "https://www.emporiotambo.com.br/wp/wp-content/uploads/2019/10/23-M%C3%A3os-colocando-fertilizante-em-plantinha.jpg", 
        "nome": "PaH",
        "title" : 'Adote seu Pet e ganhe um amigo.',
        "image": "https://static.wixstatic.com/media/74c609_e0740fb4a5fe4df69a2af39f90ce51c1~mv2.png/v1/fit/w_518%2Ch_382%2Cal_c/file.png",
        "aspectRatio": 0.834,
        "descricao": "Feira virtual de adoção de cães e gatos, eles precisam de você!",
        "clienteId": 1
      },
      {
        "id": 5,
        "icon": "https://www.emporiotambo.com.br/wp/wp-content/uploads/2019/10/23-M%C3%A3os-colocando-fertilizante-em-plantinha.jpg", 
        "nome": "PaH",
        "title" : 'Ganhe um sorriso!',
        "image": "https://i.pinimg.com/736x/d3/b1/04/d3b1043d5e11b0faed4d8c8382c7a111.jpg",
        "aspectRatio": 0.834,
        "descricao": "Ganhe um sorriso e dê uma família e um lar para uma criança, preencha o formulário.",
        "clienteId": 1
      },
    
     
]
export default function Feed(){
   
  
const Item = ({image, descricao,  title, icon, nome }) => (
<View>
<View style={styles.perfil}>
<Image
style={styles.icon}
source={{ uri: icon }} 
resizeMode="cover"
/>
< Text style={styles.nome}>{nome}</Text>
</View>
<Text style={styles.title}>{title} </Text>

<View style={styles.imageContainer}>
<Image
style={styles.image}
source={{ uri: image }} 
resizeMode='cover'
/>
</View>
<Text style={styles.descricao}>{descricao} </Text>
</View>

)

const renderItem = ({item}) => (
  <Item key={item.id} clienteId={item.clienteId} icon={item.icon} nome={item.nome} title={item.title} descricao={item.descricao} image={item.image} />
)



const separator = () => {
  return <Divider orientation="vertical" />;
};

return(
  <View style={styles.container}>
    {data && (
      <FlatList
      ItemSeparatorComponent={separator}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id}
      />
    )}
  </View>
)
}