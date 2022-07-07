import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, ScrollView } from 'react-native';
import styles from '../styles/feed'
import { Divider } from "react-native-elements" ;     


const data = [ 
      {
        "id": 1,
        "title" : 'Você pode me ajudar?',
        "image": "https://i0.wp.com/www.tempojunto.com/wp-content/uploads/2021/08/sem-titulo.jpg?resize=876%2C880&ssl=1",
        "aspectRatio": 0.834,
        "descricao": "Sou mãe solteira e não tenho condiçôes de sustento com fralda, leite e demais cuidados com o bebê, enquanto estou a procura de um emprego gostaria da sua ajuda.",
        "clienteId": 1
      },
      {
        "id": 2,
        "title" : 'Aceito doações',
        "image": "https://agorarn.com.br/files/uploads/2020/11/whatsapp-image-at-1-8-930x524.jpeg",
        "aspectRatio": 0.834,
        "descricao": "Somos uma ONG de cães e estamos aceitando doações, entre em contato via link.",
        "clienteId": 2
      },
      {
        "id": 3,
        "title" : 'Melhore nossa estrutura',
        "image": "https://s01.video.glbimg.com/x240/6411964.jpg",
        "aspectRatio": 0.834,
        "descricao": "Nossa escola está com uma situação desconfortável para os alunos, gostaríamos da sua ajuda!",
        "clienteId": 3
      }
]
export default function Feed(){
   
  
const Item = ({image, descricao, clienteId, title }) => (
<View>
<Text>{clienteId}</Text>
<Text style={styles.title}>{title} </Text>

<Image
style={{ height: 300, width: 300 , alignItems:'center', marginBottom: 40}}
source={{ uri: image }} 
resizeMode="contain"
/>
<Text style={styles.descricao}>{descricao} </Text>
</View>

)

const renderItem = ({item}) => (
  <Item key={item.id} clienteId={item.clienteId} title={item.title} descricao={item.descricao} image={item.image} />
)

const header = () => {
  return (
    <View>
      <Text style={styles.title}> Feed </Text>
      <Divider orientation="vertical" />
    </View>
  );
};

const separator = () => {
  return <Divider orientation="vertical" />;
};

return(
  <View style={styles.container}>
    {data && (
      <FlatList
      ListHeaderComponent={header}
      ItemSeparatorComponent={separator}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id}
      />
    )}
  </View>
)
}