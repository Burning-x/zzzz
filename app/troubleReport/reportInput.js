/**
 * Created by admin on 2017/6/12.
 */
import React, { Component } from 'react';
import {
  View,
  TextInput,
} from 'react-native'

export default class InputSelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      text: '',
    }
    this._onChange = this._onChange.bind(this);
  }
  _onChange(event) {
    console.log(event.nativeEvent)
    console.log("ccccaaa");
    let height = event.nativeEvent.contentSize.height;
    let text = event.nativeEvent.text;
    this.setState({
      height: height,
      text: text,
    })
  }

  render() {
    return <TextInput
      {...this.props}
      multiline={true}
      underlineColorAndroid='transparent'
      onChange={this._onChange}
      placeholder='请输入问题描述...'
      onContentSizeChange={(text) => console.log(text)}
      style={[styles.textInputStyle, {height: Math.max(35,this.state.height)}]}
    />
  }
}
const styles = {
  textInputStyle: {
    height: 30,
    fontSize: 14,
    paddingTop: 0,
    paddingBottom: 0,
    color:'#666666',
  //backgroundColor: "grey",
}
}