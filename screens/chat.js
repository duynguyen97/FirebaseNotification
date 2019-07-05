import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
export default class Chat extends React.Component{
    render(){
        const {user}= this.props.navigation.state.params
        return(
            <View>
                <Text>Chat Screen with {user} </Text>
                {/* <TouchableOpacity 
                    onPress={()=> this.props.navigation.navigate('Overview')}
                    style={{backgroundColor:'#DDDDDD'}}
                >
                    <Text>Overview</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}