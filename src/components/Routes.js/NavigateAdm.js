import React from 'react'
import {createDrawerNavigator} from "react-navigator/drawer"
import PostAdmScreen from "../PostAdm"
import FeedAdmScreen from "../FeedAdm"

const Drawer = createDrawerNavigator()

const FeedAdmStack = () => {
    return(
        <Drawer.Navigator screenOptions= {{headerShow:false}}>
            <Drawer.Screen name="PostAdm" component={PostAdmScreen}/>
            <Drawer.Screen name="FeedAdm" component={FeedAdmScreen}/>
        </Drawer.Navigator>
    )
}

export default FeedAdmStack