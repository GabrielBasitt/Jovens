import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
   userInfoSection: {
    marginTop:10,
    
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
    marginTop:30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:150
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
   }

  
})