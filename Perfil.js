import React, { Component } from "react";
import { Text, View, TouchableHighlight, Image } from 'react-native'
import styles from '../styles/perfil'

 class PerfilUser extends Component{
    constructor(props) {
        super(props);

        this.state = {
            nome: "meu nome",
            idade: 30,
            avatar_url: "../../assets/todoroki.jpg", 
        };
    }
    render() {
        return(
       <View style={styles.container}>
     <Text>Perfil</Text>
     <Image source={{ uri: this.state.avatar_url}} style={styles.avatar}/>

     <Text style={styles.label}>Nome</Text>
     <Text>{this.state.nome}</Text>       

     <Text style={styles.label}>Idade</Text>
     <Text>{this.state.idade}</Text>

     <TouchableHighlight style={styles.botao}>
          <Text style={styles.textoBotao}>Atualizar</Text>
     </TouchableHighlight>       
</View>
         );
 }}

 

 export default PerfilUser;