/**
 * Created by admin on 2017/5/24.
 */
import React, { Component } from 'react';
import {
  Image,
  TouchableHighlight,
  TextInput,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class Login extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Image

          source={require('../images/main/组-1.png')}>
          <Text style={styles.text}>hahahahh</Text>
        </Image>
      </View>
    )
  }
}
const styles = {
  text: {
    opacity:0.5,
    backgroundColor:'rgb(0,0,0,0.1)'

  }
}