/**
 * Created by admin on 2017/5/27.
 */
import React, { Component } from 'react';
import Main from '../main/main'
import {
  Image,
  Navigator,
  TouchableHighlight,
  TextInput,
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
const {width, height} = Dimensions.get('window');
let Before = React.createClass({
  getInitialState() {
    return {
      aa:'',
    }
  },
  componentDidMount() {
    setTimeout()
  },
  render(){
    return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../images/before/图层-2.png')}/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.more}>
          更快，更好，更简单
        </Text>
      </View>
    </View>

    );
  }
})

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#5bb7F5',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 8,
    marginTop: 50,
  },
  footer: {
    flex:3,
    alignItems: 'center',
    /*borderColor: 'red',
    borderWidth: 1,*/
  },
  more: {
    marginTop: 30,
    color: '#ffffff',
    fontSize:22,
    /*borderColor: 'red',
    borderWidth: 1,*/
  }
}

module.exports = Before;
