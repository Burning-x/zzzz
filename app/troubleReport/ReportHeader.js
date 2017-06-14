/**
 * Created by admin on 2017/6/12.
 */
import React, { Component } from 'react';
import {
  Alert,
  Image,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReportHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
    }
    this.render = this.render.bind(this);
  }

  render() {
    const { navigate } = this.props.navigation;
    const navigation = this.state.navigation;
    let title = this.props.inits.title;
    let his = '';
    if (this.props.inits.history) {
      his = his + this.props.inits.history;
    }
    return (
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.backPic}
            source={require('../images/troubleReport/report_1/返回箭头.png')}/>
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.titleName}>{title}</Text>
        </View>
        <TouchableOpacity
          style={styles.titleRight}
          onPress={() => navigate('History')}>
          <Text style={styles.history}>{his}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = {
  header: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#5bb7f5'
  },
  back: {
    justifyContent: 'center',
    flex: 1,
  },
  backPic: {
    alignSelf: 'center',
    justifyContent: 'center',
    /*borderColor: 'blue',
     borderWidth: 1,*/
  },
  title: {
    flex: 5,
    justifyContent: 'center',
    //alignSelf: 'center',
  },
  titleName: {
    textAlign:'center',
    color: '#ffffff',
    fontSize: 18,
    //marginLeft: 90,
  },
  titleRight: {
    flex: 2,
    justifyContent: 'center',
  },
  history: {
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffffff',
  }
}
