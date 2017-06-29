/**
 * Created by admin on 2017/6/20.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ListView,
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import Complete from './complete';
import { NavigationActions } from 'react-navigation';
import config from '../config/config';
import request from '../config/request';
import Mock from 'mockjs';

export default class UnderWay extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['a1','b2']),
    };
    this._getList = this._getList.bind(this);

  }
  componentDidMount() {
    let that = this;
    let url = config.api.base + config.api.getTrcList;
    request.get(url,{
      accessToken: 'aaaa',
    })
        .then((data) => {
          let mockData = Mock.mock(data);
          that.setState({
            dataSource: that.state.dataSource.cloneWithRows(mockData.data),
          });
        })

  }

  static navigationOptions = ({ navigation }) => {//设置导航栏头部
    const {state, setParams} = navigation;
    return {
      header: <View style={stylesHeader.header}>
        <TouchableOpacity
          style={stylesHeader.back}
          onPress={() => navigation.dispatch(resetAction)}>
          <Image
            style={stylesHeader.backPic}
            source={require('../images/troubleReport/report_1/返回箭头.png')}/>
        </TouchableOpacity>
        <View style={stylesHeader.title}>
          <Text style={stylesHeader.titleName}>工单处理</Text>
        </View>
      </View>,
      tabBarLabel: '进行中',
    }
  };
  _getList(data) {
    let { navigate } = this.props.navigation;
    const orderArr = {'t3': '保养单','t2': '故障单','t1': '巡检单'};
    const orderPage = {'t1': 'StartInspection','t2': 'OrderTraffic','t3': 'OrderMaintain'};
    let type = "";
    if (data.orderType < 10) {
      type = 't1';
    } else if (10 <= data.orderType < 20) {
      type = 't2';
    } else {
      type = 't3';
    }

    return (
        <View
            onPress={() => navigate(orderPage[type], data={data})}
            style={styles.outerContent}>
          <View style={styles.orderContent}>
            <View style={styles.allTitle}>
              <Text style={styles.titleText}>{data.title}</Text>
              <Text style={styles.ordered}>{data.ordered ? '完成' : '未完成'}</Text>
            </View>
            <View style={styles.timestamp}>
              <Text style={styles.orderColor}>工单类型：{orderArr[type]}</Text>
              <Text style={styles.orderColor}>截止日期：{data.lastdate}</Text>
            </View>
          </View>
        </View>
    )
  }
  render() {
    return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this._getList}
        />
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
    flex: 1,
  },
  backPic: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 6,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  titleName: {
    textAlign:'center',
    color: '#ffffff',
    fontSize: 17,
  },
});
const styles = StyleSheet.create({
  outerContent: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  orderContent: {
    margin: 15,
  },
  allTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    /*borderColor: 'red',
     borderWidth: 1,*/
  },
  titleName: {
    fontSize: 18,
  },
  titleText: {
    fontSize: 15,
  },
  ordered: {
    color: 'red',
    fontSize: 12,
  },
  timestamp: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderColor: {
    fontSize: 12,
    color: '#ccc',
  }

});