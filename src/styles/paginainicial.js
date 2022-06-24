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
      margin: 30,
      marginLeft:50
      
    },
    titulo:{
      fontSize:30,
      textAlign: 'center',
      margin:10,
      //fontFamily tem que ver
      // fontWeight

    },
    frase:{
      fontSize:18,
      textAlign: 'center',
      margin:3,
      //fontFamily tem que ver
      // fontWeight

    },
    btnL:{
      height: 40,
      width:150,
      borderRadius: 20,
      backgroundColor:'#000000',
      alignItems: 'center',
      marginBottom:10,
      justifyContent:'center',
      marginTop: 40,
      
    },
    btnC:{
      height: 40,
      width:150,
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