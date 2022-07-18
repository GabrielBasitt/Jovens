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
        width: "100%",
        alignItems:"center",
        zIndex: 1
      },
      texto:{
        fontSize:50,
        textAlign:'center',
        marginTop:90,
        marginBottom:50
      },
      imgContainer:{
        justifyContent:'center',
        alignItems:'center',
        height: 220,
        width: 220,
        borderRadius:360,
        borderWidth:1,
        marginLeft:135,
        marginBottom:50,
        borderColor:"#000"
       },
       imagePress:{
        height: 220,
        width: 220,
        borderRadius:360,
        justifyContent:'center',
        alignItems:'center'
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
            backgroundColor:"#fff",
            borderColor: '#000',
            borderWidth: 2,
            zIndex: 2,
            textAlign:'center',
            margin: 10
        },
        descricao:{
          height: 40,
          width:350,
          borderRadius: 20,
          backgroundColor:"#fff",
          borderColor: '#000',
          borderWidth: 2,
          zIndex: 2,
          textAlign:'center',
          margin: 10
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
            margin: 10,
            marginBottom:30
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
        },
        name:{
          color:'#fff'
        }
    });