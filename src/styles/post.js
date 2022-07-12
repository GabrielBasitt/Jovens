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
      texto:{
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
            margin: 60,
            flex: 1
        },
        titulo:{ 
            height: 40,
            width:350,
            borderRadius: 20,
            borderColor: '#000',
            backgroundColor:"#fff",
            borderWidth: 2,
            zIndex: 2,
            textAlign:'center',
            margin: 30
        },
        desc:{ 
            height: 40,
            width: 350,
            backgroundColor:"#fff",
            borderRadius: 20,
            borderColor: '#000',
            borderWidth: 2,
            zIndex: 2,
            textAlign:'center'
        },
        link:{ 
            height: 40,
            width: 350,
            backgroundColor:"#fff",
            borderRadius: 20,
            borderColor: '#000',
            borderWidth: 2,
            zIndex: 2,
            textAlign:'center',
            margin: 30
        },
        btnL:{
            height: 40,
            width:200,
            borderRadius: 20,
            backgroundColor:'#000000',
            alignItems: 'center',
            justifyContent:'center',
            zIndex: 2,
            marginTop: 15,
            marginBottom:10
        },
        name:{
          color:'#fff'
        }
    });