/**
 * Created by admin on 2017/5/24.
 */
import React, { Component } from 'react';
import Main from '../main/main'
import {
  Alert,
  Image,
  Navigator,
  TouchableHighlight,
  TextInput,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//import { StackNavigator } from 'react-navigation';

import request from '../config/request';
import config from '../config/config';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:'',
      passWord: null,
    }
    this._changePwd = this._changePwd.bind(this);
    this._changeUname = this._changeUname.bind(this);
    this._login = this._login.bind(this);
  }
  _login(){
    let that = this;
    console.log(this.state);
    let url = config.api.base + config.api.queryUser;
    let body = this.state;
    request.post(url, body)
      .then((data) => {
      if (data && data.success) {
        that.props.afterLogin(data);
      } else {
        Alert.alert('用户名或者密码错误');
      }

      })
  }
  _changePwd(text) {

    this.setState({
      passWord : text,
    })
  }
  _changeUname(text) {

    this.setState({
      userName : text,
    })
  }
  render()
  {
    let that = this;
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require('../images/login/LOGO.png')}/>
          <Text style={styles.appName}>智慧管廊·运维管理</Text>
        </View>
        <View style={styles.outStyle}>
          <Image source={require('../images/login/按钮-拷贝.png')}>
            <View style={styles.loginin}>
              <View style={styles.loginflex}>
                <View style={styles.loginNoSelect}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../images/login/账号未选中.png')}
                  />
                </View>
                <TextInput
                  placeholder='请输入密码'
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  keyboardType={'number-pad'}
                  style={styles.noStyle}
                  onChangeText={(text) => {
                    this._changeUname(text);
                  }}/>
              </View>
              {/*<View style={styles.darkline}>
                <Image
                  source={require('../images/login/灰色线.png')}/></View>*/}
              <View style={styles.loginflex}>
                <View style={styles.loginNoSelect}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../images/login/密码未选中.png')}
                  />
                </View>
                <TextInput
                  placeholder='请输入密码'
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  keyboardType={'number-pad'}
                  style={styles.noStyle}
                  onChangeText={(text) => {
                    this._changePwd(text);
                  }}/>
              </View>
            </View>
          </Image>
        </View>

        <View style={styles.loginBtnOut}>
          <Image
            source={require('../images/login/按钮.png')}>
            <TouchableHighlight
              style={styles.touchH}
              onPress={this._login}
              >
              <Text style={styles.loginBtn}>登 录</Text>
            </TouchableHighlight>
          </Image>
        </View>
      </View>
    )
  }
}
/*const ModalStack = StackNavigator({
  Home: {
    screen: Login,
  },
  Main: {
    screen: Main,
  },
});*/
//module.exports = Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#5bb7F5',
  },
  image: {
    alignSelf: 'center',
    marginTop: 75,
  },
  appName: {
    color: '#FFFFFF',
    marginBottom: 55,
    marginTop: 19.5,
    fontSize: 20,
    fontWeight:'800'
  },
  loginNoSelect: {
    width:35,
    justifyContent: 'center',
  },
  loginin: {
    paddingLeft:5,
    flex:1,
    flexDirection: 'column',
  },
  loginflex: {
    flex:1,
    flexDirection:'row'
  },
  noStyle: {
    width:240,

  },
  darkline: {
    height:2,
    left:35
  },
  iconStyle: {
    alignSelf:'center'
  },
  loginBtn: {
    //marginTop:55,
    color: '#5bb7f5',
    fontWeight:'600',
    fontSize:20,
    alignSelf: 'center',
  },
  loginBtnOut: {
    marginTop:55,
  },
  touchH: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

});