import React from 'react';

import { Platform, Text, Linking } from 'react-native';
import firebase from 'react-native-firebase';
class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return <Text>Hello from Home!</Text>;
  }
}

export default Home;