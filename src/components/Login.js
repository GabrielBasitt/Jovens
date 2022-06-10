import React from "react";
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/paginainicial';
 

export default function Logar({navigation}){
    return(
        <View style={styles.containerBTN} >
            <TouchableOpacity
            style={styles.btnL}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.name}>Logar</Text> 
            </TouchableOpacity>
            
        </View>
    )

    
}