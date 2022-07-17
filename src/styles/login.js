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
        height:"100%",
        width: "100%",
        alignItems:"center",
        zIndex: 1
        
        
      },
      textlogin:{
        fontSize:50,
        textAlign:'center',
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
            height: 40,
            width:350,
            borderRadius: 20,
            borderColor: '#000',
            backgroundColor:"#fff",
            borderWidth: 2,
            margin: 15,
            zIndex: 2,
            marginTop: 80,
            textAlign:'center'

        },
        inpSenha:{ 
            height: 40,
            width: 350,
            backgroundColor:"#fff",
            borderRadius: 20,
            borderColor: '#000',
            borderWidth: 2,
            zIndex: 2,
            textAlign:'center'
        },
        btnL:{
            height: 40,
            width:200,
            borderRadius: 20,
            backgroundColor:'#000000',
            alignItems: 'center',
            justifyContent:'center',
            zIndex: 2,
            marginTop: 40,
            marginBottom:10
        },
        name:{
          color:'#fff'
        }
    });