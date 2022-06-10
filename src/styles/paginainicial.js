import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
    tinyLogo:{
      width: 250,
      height: 250,
      margin: 30
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
      marginTop: 60
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
    }
});