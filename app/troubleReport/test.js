/**
 * Created by admin on 2017/6/12.
 */
import React, { Component } from 'react';
import {
  Alert,
  Image,
  Navigator,
  TouchableHighlight,
  TextInput,
  Dimensions,
  TouchableOpacity,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ReportNum from './reportNum'
import ReportHeader from './ReportHeader';
import Aaa from './aaa';
const {width, height} = Dimensions.get('window');
export default class History extends Component {
  _onChangeText(newText) {
    console.log('input:' + newText)
  }
  render() {
    return (
      <View style={styles.container}>
        <Aaa
          onChangeText={this._onChangeText}
          style={styles.textInputStyle}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInputStyle: { //文本输入组件样式
    width: 300,
    height: 50,
    fontSize: 20,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: "grey"
  }
});