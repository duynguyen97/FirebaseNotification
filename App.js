/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *

 */

import React, {Component} from 'react';
import { createAppContainer } from "react-navigation";
import FriendsNavigator from "./navigators/FriendsNavigator";
import firebase from 'react-native-firebase'
const AppContainer = createAppContainer(FriendsNavigator);

export default class App extends Component {
  constructor(){
    super();
    firebase.links()
        .getInitialLink()
        .then((url) => {
            if (url) {
                // alert(url)
                Linking.openURL(url)
            } else {
               // app NOT opened from a url
            }
        });

  }
  render() {
    return (
      <AppContainer />
    );
  }
}