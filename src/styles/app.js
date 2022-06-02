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
      height: 250
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
    btnLC:{
      height: 30,
      width:300,
      borderRadius: 5,
      backgroundColor:'#000000',
      alignItems: 'center',
      marginBottom:5,
      justifyContent:'center'
    },
    name:{
      color:'#fff'
    }
});