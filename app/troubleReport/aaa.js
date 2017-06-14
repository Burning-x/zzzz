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
const {width, height} = Dimensions.get('window');
export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      text: '',
    }
    this._getTextHeight = this._getTextHeight.bind(this);
  }

  _getTextHeight(event) {
    let height = event.nativeEvent.contentSize.height;
    console.log(height + "aaaaaa");
    this.setState({
      text: event.nativeEvent.text,
      height: height,
    })
  }
  onContentSizeChange(params) {
    console.log(params);
    console.log("ccccc");
  }
  render() {
    return (
      <TextInput
        {...this.props}
        multiline={true}
        onChange={this._getTextHeight}
        onContentSizeChange={this.onContentSizeChange}
        style={[styles.textInputStyle,{height:Math.max(35,this.state.height)}]}
        value={this.state.text}
      />
    )
  }
}
const styles = StyleSheet.create({
  textInputStyle: { //文本输入组件样式
    width: 300,
    height: 30,
    fontSize: 20,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: "grey",
  }
});