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
//import Mock from 'mockjs';
const {width, height} = Dimensions.get('window');
export default class History extends Component {
  _onChangeText(newText) {
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
    let url = config.local.base + config.local.getHistory;
    request.get(url,{accessToken:'hhhhhhh'})
      .then((data) => {
      //let s = Mock.mock(data);//关闭mock数据
        that.setState({
          dataSource:that.state.dataSource.cloneWithRows(data),
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
            source={require('../images/troubleReport/report_1/back.png')}/>
        </TouchableOpacity>
        <View style={stylesHeader.title}>
          <Text style={stylesHeader.titleName}>历史记录</Text>
        </View>
        <View style={stylesHeader.empty}></View>
      </View>
    }
  };
  _getItems(data) {
    return (
      <View style={styles.outer}>
        <View style={styles.darkline}></View>
        <Image
          style={styles.smart}
          source={require("../images/troubleReport/history/slipper.png")}/>
        <View style={styles.outerContent}>
          <Text style={styles.timestamp}>{data.timestamp}</Text>
          <Text style={styles.deviceCode}>设备编号:  {data.code}</Text>
          <View style={styles.approverName}>
            <Image
              style={styles.imageMargin}
              source={require('../images/troubleReport/history/equname.png')}/>
            <Text style={styles.approver}>设备名称：{data.approver}</Text>
            <Image
              style={styles.imageMargin}
              source={require('../images/troubleReport/history/approval.png')}/>
            <Text
              numberOfLines={1}
              style={styles.titlename}>审批人： {data.titlename}</Text>
          </View>

        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
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
  empty: {
    flex: 2,
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  imageMargin: {
    marginTop: 3,
    marginRight: 2,
  },
  darkline: {
    height: 82,
    marginLeft: 2,
    width: 3,
    backgroundColor: '#ccc',
  },
  smart: {
    marginLeft: -5,
  },
  historyContainer: {
    //marginLeft: -35,
    paddingTop: 20,
    marginBottom: 20,
    //marginTop: 20,
  },
  outer: {
    flexDirection: 'row',
    marginLeft: 30,
  },
  outerContent: {
    marginLeft: 20,
    marginBottom: 20,
  },
  deviceCode: {
    fontSize: 12,
  },
  approverName: {
    marginTop: 5,
    flexDirection: 'row',
  },
  timestamp: {
    fontSize: 18,
  },
  approver: {
    width: 180,
    fontSize: 12,

  },
  titlename: {
    fontSize: 12,
    //marginLeft: 10,
  },
});