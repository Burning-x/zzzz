/**
 * Created by admin on 2017/6/23.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

import config from '../../config/config';
import request from '../../config/request';

const { width, height } = Dimensions.get('window');

export default class OrderTraffic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.navigation.state.params.data,
    }
  }
  static navigationOptions = ({ navigation }) => {//设置导航栏头部
    return {
      header: <View style={stylesHeader.header}>
        <TouchableOpacity
          style={stylesHeader.back}
          onPress={() => navigation.goBack()}>
          <Image
            style={stylesHeader.backPic}
            source={require('../../images/troubleReport/report_1/返回箭头.png')}/>
        </TouchableOpacity>
        <View style={stylesHeader.title}>
          <Text style={stylesHeader.titleName}>故障处理</Text>
        </View>
        <View style={stylesHeader.empty}>
        </View>
      </View>
    }
  };

  render() {
    let { navigate } = this.props.navigation;
    let data = this.state.data;
    return (
      <View style={styles.container}>
        <View  style={styles.outerContainer}>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text style={styles.leftText}>工单类型</Text>
              <Text style={styles.leftText}>故障单</Text>
            </View>
          </View>


          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text style={styles.leftText}>设备编号</Text>
              <Text style={styles.leftText}>{data.deviceId}</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text style={styles.leftText}>设备名称</Text>
              <Text style={styles.leftText}>{data.deviceName}</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text style={styles.leftText}>区域位置</Text>
              <Text style={styles.leftText}>{data.location}</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text style={styles.leftText}>故障描述</Text>
              <Text style={styles.leftText}>{data.content}</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>备注信息</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text style={styles.leftText}>联系厂家</Text>
              <Text style={styles.leftText}>{data.factory}</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text style={styles.leftText}>截止日期</Text>
              <Text style={styles.leftText}>{data.lastdate}</Text>
            </View>
          </View>

          <View style={styles.inContainer}>
            <Text>图片</Text>
            <Image
                source={{uri:data.image}}
                style={styles.images}>
            </Image>
          </View>

        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={() => navigate('EndTraffic')}
            style={styles.startInspection}
          >
            <Text style={styles.startText}>开始保养</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  outerContainer: {
    flex: 7,
    flexDirection: 'column',
    //justifyContent: 'center',
  },
  inContainer: {
    flex: 1,
    justifyContent: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    /*borderWidth: 1,
    borderColor:'red',*/
  },

  marginLeft: {
    flexDirection: 'row',
    /*borderWidth: 1,
    borderColor:'red',*/
    justifyContent: 'space-between',
    //flex: 1,
    marginLeft: 10,

  },
  leftText: {
    width: 100,
    /*borderWidth: 1,
    borderColor:'red',*/
  },
  bottomContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startInspection: {
    borderRadius: 5,
    backgroundColor: '#5bb7f5',
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
    width: width * 0.93,
  },
  startText: {
    fontSize: 16,
    color: '#ffffff',
  },
  images: {
    height: 20,
    width: 20,
  }
});
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
    flex: 5,
    justifyContent: 'center',
    //alignSelf: 'center',
  },
  empty: {
    flex: 2,
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
});
