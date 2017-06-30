/**
 * Created by admin on 2017/6/15.
 */
import React, { Component } from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View
} from 'react-native';
import ReportHeader from './ReportHeader';
import { NavigationActions } from 'react-navigation'
const { width, height } = Dimensions.get('window');
const resetAction = NavigationActions.reset({
  index: 1,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'}),
    NavigationActions.navigate({ routeName: 'Report'},init={init:'1111111'}),
  ]
});
const backAction = NavigationActions.back({
  key: 'Report'
})
const navigateAction = NavigationActions.navigate({

  routeName: 'Report',

  params: {},

  action: NavigationActions.navigate({ routeName: 'SelfInput'})
})

export default class SelfInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this._getCode = this._getCode.bind(this);
    this._changeText = this._changeText.bind(this);
  }
  _changeText(text) {
    this.setState({
      text: text,
    })
  }
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    {
      console.log(state.params.init);
    }
    //let title = this.state.title;
    let inits = {
      title: '扫码录入',
    }
    return {
      title: 'hello',
      header: <ReportHeader navigation={navigation} inits={state.params.init}/>
    }
  };

  _getCode() {
    this.props.navigation.navigate('Report',{transCode:this.state.text});
    //return navigate('Report');
  }
  render() {
    return (
      <View style={styles.container}>
        <View >
          <View>
            <TextInput
              autoCapitalize="characters"
              style={styles.textInput}
              maxLength={8}
              //autoFocus={true}
              keyboardType="numeric"
              placeholderTextColor="#9e9e9e"
              underlineColorAndroid="transparent"
              placeholder="请输入设备编号"
              onChangeText={this._changeText}
            />
          </View>
          <View style={styles.darkLine}>
          </View>

        </View>

        <TouchableOpacity
          style={styles.submit}
          onPress={this._getCode}>
          <View style={styles.submitBtn}>
            <Text style={styles.submitText}>提     交</Text>
          </View>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff',
  },

  textInput: {
    height: 40,
    marginTop: height / 8,
    //width:40,
    /*borderColor: 'red',
    borderWidth: 1,*/
  },
  darkLine: {
    marginTop: -5,
    height: 1,
    backgroundColor:'#5bb7f5',
  },
  submit: {
    //justifyContent: 'center',
    marginTop: height / 3,
    /*borderWidth: 1,
     borderColor: 'red',*/
  },
  submitBtn: {
    justifyContent: 'center',
    height: 50,
    borderRadius: 6,
    backgroundColor: '#5bb7f5'
  },

  submitText: {
    textAlign: 'center',
    fontSize: 17,
    color: '#ffffff',
  },
});