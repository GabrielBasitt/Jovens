import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#fff',
    width:"100%",
    height:"100%"
  },
  tudoNosso:{
    zIndex:99,
    justifyContent: 'center',
    alignItems:'center'
  },
    tinyLogo:{
      width: 250,
      height: 250,
      alignItems:'center',
      justifyContent:'center'
      
    },
    titulo:{
      fontSize:35,
      textAlign: 'center',
      margin:10,
      marginBottom:40
      //fontFamily tem que ver
      // fontWeight

    },
    frase:{
      fontSize:22,
      textAlign: 'center',
      margin:1,
      //fontFamily tem que ver
      // fontWeight

    },
    frase2:{
      fontSize:22,
      textAlign: 'center',
      padding:20,
      marginBottom:110
      //fontFamily tem que ver
      // fontWeight
    },
    btnL:{
      height: 40,
      width:170,
      borderRadius: 20,
      backgroundColor:'#000000',
      alignItems: 'center',
      marginBottom:10,
      justifyContent:'center',
      marginTop: 40,
      
    },
    btnC:{
      height: 40,
      width:170,
      borderRadius: 20,
      backgroundColor:'#000000',
      alignItems: 'center',
      marginBottom:10,
      justifyContent:'center',
    
     
    },
    name:{
      color:'#fff'
    },
    backGround:{
      height:"100%",
      width:"100%",
      position:"absolute",
      zIndex:1
      
    }
});