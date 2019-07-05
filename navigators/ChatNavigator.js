import { createAppContainer, createStackNavigator } from "react-navigation";
import FriendsScreen from "../screens/Friends";
import ChatScreen from "../screens/chat";
import React from "react";
import Overview from '../screens/Overview'
const ChatNavigator = createStackNavigator(
  {
    Overview:{screen: Overview},
    Chat: {
      screen: ChatScreen,
      path: "chat/:user"
    }
  }
);
export default ChatNavigator;
