import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin:10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    botao:{
        borderWidth: 1,
        borderColor: 'blue',
        padding: 12,
        backgroundColor: "grey"
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',

    },
    label: {
        fontWeight: 'bold',
    },
    avatar: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderRadius: 50,
    }

  
})