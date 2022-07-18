import React, {useEffect, useState } from 'react';
import { View, FlatList, Text, StatusBar, Image, ActivityIndicator } from 'react-native';
import styles from '../styles/feed'
import { Divider } from "react-native-elements" ;     


const data = [ 
      {
        "id": 1,
        "icon": "https://images.squarespace-cdn.com/content/v1/52c0b141e4b0b87925bacd01/1518909708847-EQGOOFA29YBBYUJF61M7/dicas+como+fotografar+pessoas+viagem?format=1000w",
        "nome": "Paula",
        "title" : 'Você pode me ajudar?',
        "image": "https://thumbs.dreamstime.com/b/fam%C3%ADlia-pobre-49624691.jpg",
        "aspectRatio": 0.839,
        "descricao": "Precisamos de ajuda com alimentação.",
        "clienteId": 1
      },
      {
        "id": 2,
        "icon": "https://imagens.brasil.elpais.com/resizer/7VCe6-_4L0eijpMH_82F4gWxu_8=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/BNCOV7OYLBAABD2XQDJOBTYL2Q.jpg",
        "nome": "Rosita",
        "title" : 'Aceito doações',
        "image": "https://i.pinimg.com/736x/bd/f3/8f/bdf38f720259190fc7c780a9d19e4745.jpg",
        "aspectRatio": 0.834,
        "descricao": "Somos uma ONG de cães e estamos aceitando doações, entre em contato via link.",
        "clienteId": 2
      },
      {
        "id": 3,
        "icon": "https://hypescience.com/wp-content/uploads/2010/03/feliz.jpg", 
        "nome": "Alice",
        "title" : 'Melhore nossa estrutura',
        "image": "http://revistaepoca.globo.com/Revista/Epoca/foto/0,,40291797,00.jpg",
        "aspectRatio": 0.834,
        "descricao": "Nossa escola está com uma situação desconfortável para os alunos, gostaríamos da sua ajuda!",
        "clienteId": 3
      },
      {
        "id": 4,
        "icon": "https://meapaixonei.com.br/wp-content/uploads/2019/02/10-razoes-pelas-quais-voce-continua-atraindo-parceiros-toxicos-para-sua-vida.jpg", 
        "nome": "Carol",
        "title" : 'Ajude uma mãe!',
        "image": "https://ichef.bbci.co.uk/news/640/cpsprodpb/15937/production/_124057388_cfb4068a-4d9d-4f1f-aa69-8e1dd4f67cea.jpg",
        "aspectRatio": 0.834,
        "descricao": "Estou desempregada e preciso de fraldas para meu filho, me ajude!",
        "clienteId": 4
      },
      {
        "id": 5,
        "icon": "https://www.wefashiontrends.com/wp-content/uploads/2020/11/relacionamento-toxico-abusivo.jpg", 
        "nome": "Julia",
        "title" : 'Faça uma boa ação',
        "image": "https://i.em.com.br/85IwcRDnILUjIHhxznoOilmySl8=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/04/01/1357079/remedios_1_16310.jpg",
        "aspectRatio": 0.834,
        "descricao": "Temos uma cliente que não tem condições de comprar seus remédios, estamos fazendo uma vaquinha online para ajudar.",
        "clienteId": 5
      },
      {
        "id": 6,
        "icon": "https://s.yimg.com/uu/api/res/1.2/VCcR3M_C5z6X_ni0qvlLeA--~B/Zmk9ZmlsbDtweW9mZj0wO3c9NjQwO2g9MzYwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2020-10/e922d570-1560-11eb-b9e7-c5c42493a372", 
        "nome": "Thiago",
        "title" : 'Preciso de reabilitação',
        "image": "https://www.telavita.com.br/blog/wp-content/uploads/2017/08/ajudar-alguem-com-vicio.jpg",
        "aspectRatio": 0.834,
        "descricao": "Aceito ajuda financeira para oagar minha reabilitação e vencero vicio.",
        "clienteId": 6
      },
      {
        "id": 7,
        "icon": "https://s2.glbimg.com/jKUPjJiq_kdd1_K6Xe2jzsAUITs=/0x0:607x607/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/a/L/XnI6sFTHaJkD2yZfqwOA/2018-09-10-40583625-2174789582806096-3224071413721496986-n.jpg", 
        "nome": "Maria",
        "title" : 'Seja um voluntário',
        "image": "https://clinicaportal.com.br/wp-content/uploads/2021/09/Por-que-e-errado-chamar-uma-clinica-de-repouso-para-idosos-de-asilo.jpg",
        "aspectRatio": 0.834,
        "descricao": "Precisamos de voluntários, entre em contato",
        "clienteId": 7
      },
      {
        "id": 8,
        "icon": "https://img.ibxk.com.br/2019/02/17/17124052466014.jpg", 
        "nome": "Paulo",
        "title" : 'Arrecadação de alimentos',
        "image": "https://i.em.com.br/_HBmJq59CSLaT810VdBHn1plDv8=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/06/08/1371929/duas-criancas-seguram-prato-sem-comida-imagem-indica-fome-_1_78063.jpg",
        "aspectRatio": 0.834,
        "descricao": "Estamos arrecadando alimentos para doação",
        "clienteId": 8
      },
      {
        "id": 9,
        "icon": "https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia-360-2.png", 
        "nome": "Douglas",
        "title" : 'Ajude esse cãozinho',
        "image": "https://www.altoastral.com.br/media/_versions/legacy/2018/01/cao-doente-com-olhar-triste_widexl.jpg",
        "aspectRatio": 0.834,
        "descricao": "Eu o encontrei na rua e preciso de ajuda para cuidá-lo",
        "clienteId": 9
      },
      {
        "id": 10,
        "icon": "https://itabaiana.se.gov.br/img/imagem/sandrinha_4a3c46d91df1a336080ed6d671.jpg", 
        "nome": "Maju",
        "title" : 'Doe',
        "image": "https://www.tendaatacado.com.br/dicas/wp-content/uploads/2021/08/doacao-de-roupa.jpg",
        "aspectRatio": 0.834,
        "descricao": "Preciso de doação de roupas",
        "clienteId": 10
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