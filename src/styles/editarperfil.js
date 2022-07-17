import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
      marginTop: 160,
      fontSize: 24, 
      fontWeight:'bold'
     },
     caption: {
      fontSize: 16,
      lineHeight:16,
      fontWeight:'500'
     },
     row: {
      flexDirection: 'row',
      marginBottom:10,
      justifyContent: "center",
      alignItems: "center"
     },
     userInfoTitles: {
      width: "100%",
      marginTop:10,
      justifyContent: "center",
      alignItems: "center"
     },
     text:{
      width: "100%",
      height: 40,
      fontSize: 20,
      lineHeight:20,
      color:'#777777',
      backgroundColor: "#fff",
      borderWidth: 1,
      borderLeftColor:"#fff",
      borderTopColor:"#fff",
      borderRightColor:"#fff",
      borderBottomColor: "#808080",
      paddingLeft: 40,
      paddingTop: 12,
      zIndex: 1,
      right: 5
     },
     imgContainer:{
      justifyContent:'center',
      alignItems:'center',
      height: 220,
      width: 220,
      marginBottom:50,
      borderRadius:500,
      borderWidth:1,
      borderColor:"#000"
     },
     imagePress:{
      height: 220,
      width: 220,
      borderRadius:500,
      
     },
     btnE:{
        height: 40,
        width:200,
        borderRadius: 20,
        backgroundColor:'#000000',
        alignItems: 'center',
        justifyContent:'center',
        zIndex: 2,
        marginBottom:10,
        margin:30,
        alignSelf:"center"
    },
    editar:{
        color:'#fff'
      }
    
    });