/**
 * Created by admin on 2017/6/16.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  WebView,
  StyleSheet,
} from 'react-native';
//import MapIndex from './map/mapIndex.html';
export default class Location extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: '',
    }
    this._getLocation = this._getLocation.bind(this);
  }

  _getLocation(data) {

    let str = data.nativeEvent.data
    let sss = JSON.parse(str);
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          onMessage={this._getLocation}
          source={require('./map/mapIndex.html')}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    /*borderWidth: 1,
    borderColor: 'red',*/
    flex: 1,
  }
})


