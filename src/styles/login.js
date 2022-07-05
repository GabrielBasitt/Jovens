import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#fff',
        width: "100%",
        height: "100%"
      },
      backGround:{
        height: "100%",
        width: "100%",
        alignItems:"center",
        zIndex: 1
      },
      textlogin:{
        fontSize:50,
        paddingLeft : 70,
        marginTop:110
      },
      frase:{
        fontSize:22,
        textAlign: 'center',
        margin:3,
        marginTop:22,
        marginBottom:160
        //fontFamily tem que ver
        // fontWeight
      },  
        viewInputs:{
            justifyContent: "center",
            alignItems: "center",
        },
        inpEmail:{ 
            height: 30,
            width: 250,
            borderRadius: 20,
            backgroundColor: 'transparent',
            borderColor: '#000',
            borderWidth: 2,
            paddingLeft : 70,
            margin: 15,
            zIndex: 2,
            marginTop: 80,

        },
        inpSenha:{ 
            height: 30,
            width: 250,
            borderRadius: 20,
            backgroundColor: 'transparent',
            borderColor: '#000',
            borderWidth: 2,
            paddingLeft : 70,
            zIndex: 2
        },
        btnL:{
            height: 40,
            width:120,
            borderRadius: 20,
            backgroundColor:'#000000',
            alignItems: 'center',
            justifyContent:'center',
            zIndex: 2,
            marginTop: 20
        },
        name:{
          color:'#fff'
        }
    });