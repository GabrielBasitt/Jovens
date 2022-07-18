import React from 'react'
import {createDrawerNavigator} from "@react-navigation/drawer"
import PostAdmScreen from "../PostAdm"
import FeedAdmScreen from "../FeedAdm"

const Drawer = createDrawerNavigator()

const FeedAdmStack = () => {
    return(
        <Drawer.Navigator initialRouteName='Feed Adm' screenOptions= {{headerShow:false}}>
            <Drawer.Screen name="Post Adm" component={PostAdmScreen}/>
            <Drawer.Screen name="Feed Adm" component={FeedAdmScreen}/>
        </Drawer.Navigator>
    )
}
export default FeedAdmStack