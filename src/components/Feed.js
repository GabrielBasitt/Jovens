import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import styles from '../styles/feed'
import { Divider } from "react-native-elements" ;     


const data = [ 
      {
        "id": 1,
        "title" : 'Alguma coisa',
        "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/1.jpeg",
        "aspectRatio": 0.834,
        "descricao": "Working hard at Rocketseat!",
        "clienteId": 1
      },
      {
        "id": 2,
        "title" : 'Alguma coisa',
        "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/2.jpeg",
        "aspectRatio": 0.834,
        "descricao": "Code, code and more code!",
        "clienteId": 2
      },
      {
        "id": 3,
        "title" : 'Alguma coisa',
        "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/3.jpeg",
        "aspectRatio": 0.834,
        "descricao": "Rocketships fly away!",
        "clienteId": 3
      }
]
export default function Feed(){
    
const Item = ({image, descricao, clienteId, title }) => (
<View>
<Text>{clienteId}</Text>
<Text style={styles.title}>{title} </Text>
<Text style={styles.descricao}>{descricao} </Text>
<Image
style={{ height: 300, width: 300 , alignItems:'center', marginBottom: 40}}
source={{ uri: image }} 
resizeMode="contain"
/>
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