import {StyleSheet} from 'react-native'

export default StyleSheet.create({ 
  container:{
    width: '100%',
    alignItems:'center',
    justifyContent:'center'
  },
  perfil:{

    flexDirection:"row"
  },
  icon:{
      height: 60,
      width: 60,
      marginTop:30,
      borderRadius:400,
      borderWidth:0,
      borderColor:"#000",
      flexDirection:'row',
},
  nome:{

    fontSize: 17,
    flex:1,
    marginTop:50,
    margin:10,
    fontWeight:'bold',

},
  title:{

        fontSize: 20,
        textAlign: 'center',
        margin:10,
        fontWeight:'bold',

  },
  imageContainer:{
    height: 300, 
    width: 300 ,
    flex:1,
    borderRadius:10,
  },
  image:{
     height: 300, 
     width: 300 ,
     marginLeft:50,
     marginBottom: 40,
     borderRadius:10,
     flex:2
    },
descricao:{

  fontSize: 20,
  textAlign: 'center',
  margin:10, 
},

})

