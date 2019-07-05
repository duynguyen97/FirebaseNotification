import React from "react";
import { Text, } from "react-native";
import { createStackNavigator,createAppContainer } from "react-navigation";
import FriendsScreen from '../screens/Friends'
import ChatNavigator from './ChatNavigator'
import ChatScreen from "../screens/chat";
import Overview from '../screens/Overview'

ChatNavigator.navigationOptions={
    title: 'Chat'
}
const FriendsStack = createStackNavigator({
    Friends: {
        screen:FriendsScreen,
    },
    Chat: {
        screen:ChatNavigator,
        path:'friends'
    }
},
{
    initialRouteName:'Friends'
})

export default FriendsStack;
