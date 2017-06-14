/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  Linking,
  AsyncStorage,
  View
} from 'react-native';
//import { StackNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import Login from './app/login/login';
import Main from './app/main/main';
export default class zzzz extends Component {
  constructor() {
    super();
    this.state = {
      loginEd: true,
      user: null,
      accessToken: '',
    }
    this._afterLogin = this._afterLogin.bind(this);
    this.render = this.render.bind(this);
    this._asyncAppStatus = this._asyncAppStatus.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    this._asyncAppStatus();
    setTimeout(function () {
      SplashScreen.hide();
    },1000)
  }

  _afterLogin(user) {
    user = JSON.stringify(user);
    AsyncStorage.setItem("user", user)
      .then(() => {
        this.setState({
          loginEd: true,
          user: user,
        })
      })
    alert(this.state.loginEd + "")
  }
  _asyncAppStatus() {
    let that = this;
    AsyncStorage.getItem('user')
      .then((data) => {
        let user;
        let newState = {};
        if (data) {
          user = JSON.stringify(data);
        }
        if (user) {
          newState.user = user;
          newState.loginEd = true;
        } else {
          newState.LoginEd = false;
        }
        that.setState(newState);
      })
  }
  render() {
    if (this.state.loginEd) {
      return (
        <View style={styles.container}>
          <Main/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Login afterLogin={this._afterLogin}/>
      </View>
    );
  }
}

/*const SimpleApp = StackNavigator({
 Home: { screen: zzzz },
 });*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*justifyContent: 'center',
     alignItems: 'center',*/
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('zzzz', () => zzzz);