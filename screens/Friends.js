import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  FlatList
} from "react-native";
import firebase from 'react-native-firebase'
const URLS = [
//  "mychat://chat/Duy", 
  "mychat://friends/chat/Huong",
//  "http://chat/DuyNguyen",
//  "http://friends/chat/Hoa"
];
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Friends"
  };
  render() {
    return (
      <View>
        <FlatList
          data={URLS}
          keyExtractor = {(item,index)=> index}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => Linking.openURL(item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
