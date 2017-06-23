/**
 * Created by admin on 2017/6/12.
 */
import React, { Component } from 'react';
import {
  Image,
  ListView,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

import request from '../config/request';
import config from '../config/config';
import Mock from 'mockjs';
const {width, height} = Dimensions.get('window');
export default class History extends Component {
  _onChangeText(newText) {
    console.log('input:' + newText)
  }
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  componentDidMount() {
    let that = this;
    let url = config.api.base + config.api.getHistory;
    request.get(url,{accessToken:'hhhhhhh'})
      .then((data) => {
      let s = Mock.mock(data);
      console.log(s.data);
        that.setState({
          dataSource:that.state.dataSource.cloneWithRows(s.data),
        })
      })
  }

  static navigationOptions = ({ navigation }) => {//设置导航栏头部
    const {state, setParams} = navigation;
    return {
      header: <View style={stylesHeader.header}>
        <TouchableOpacity
          style={stylesHeader.back}
          onPress={() => navigation.goBack()}>
          <Image
            style={stylesHeader.backPic}
            source={require('../images/troubleReport/report_1/返回箭头.png')}/>
        </TouchableOpacity>
        <View style={stylesHeader.title}>
          <Text style={stylesHeader.titleName}>历史记录</Text>
        </View>
      </View>
    }
  };
  _getItems(data) {
    return (
      <View style={styles.outer}>
        <View>
          <Image source={require("../images/troubleReport/history/滑块.png")}/>
          <Text style={styles.timestamp}>{data.timestamp}</Text>
        </View>
        <View style={styles.outerContent}>
          <Text>设备编号:  {data.code}</Text>
          <View style={styles.approverName}>
            <Image source={require('../images/troubleReport/history/设备名称.png')}/>
            <Text style={styles.approver}>设备名称：{data.approver}</Text>
            <Image source={require('../images/troubleReport/history/审批人.png')}/>
            <Text style={styles.titlename}>审批人： {data.titlename}</Text>
          </View>

        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.darkline}></View>
        <ListView
          style={styles.historyContainer}
          dataSource={this.state.dataSource}
          renderRow={this._getItems}
        />
      </View>
    )
  }
}
const stylesHeader = StyleSheet.create({
  header: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#5bb7f5'
  },
  back: {
    justifyContent: 'center',
    flex: 2,
  },
  backPic: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 7,
    justifyContent: 'center',
  },
  titleName: {
    textAlign:'center',
    color: '#ffffff',
    fontSize: 17,
  },
  titleRight: {
    flex: 2,
    justifyContent: 'center',
  },
  history: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 12,
    color: '#ffffff',
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    /*justifyContent: 'center',*/
    //alignItems: 'center',
    flexDirection: 'row',
  },
  darkline: {
    marginTop: 21,
    marginLeft: 20,
    height: height,
    width: 3,
    backgroundColor: '#ccc',
  },
  historyContainer: {
    marginLeft: -35,
    marginTop: 20,
    /*borderWidth: 1,
    borderColor: 'red',*/
  },
  outer: {
    flexDirection: 'column',
    marginLeft: 30,
    /*borderWidth: 1,
    borderColor: 'red',*/
  },
  outerContent: {
    borderWidth: 1,
    borderColor: 'yellow',
    marginLeft: 20,
    marginBottom: 20,
  },
  approverName: {
    flexDirection: 'row',
  },
  timestamp: {
    marginLeft: 20,
    fontSize: 18,
  },
  approver: {
    width: 180,
    fontSize: 12,

  },
  titlename: {
    fontSize: 12,
    marginLeft: 10,
  },
});