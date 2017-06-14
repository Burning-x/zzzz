/**
 * Created by admin on 2017/6/9.
 */
import React, { Component } from 'react';
//import Icon from 'react-native-vector-icons/Ionicons'
import {
  Alert,
  Image,
  Navigator,
  TouchableHighlight,
  TextInput,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class Report extends Component {
  static navigationOptions = {
    title: 'aaaa',
    headerTintColor: 'black',
    headerRight: <Button title="hhhh"/>,
  }
  render(){
    return (
      <View>
        <Text>hhhhhhhh</Text>
      </View>
    )
  }
}