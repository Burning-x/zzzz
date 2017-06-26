/**
 * Created by admin on 2017/6/26.
 */
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

const { width, height } = Dimensions.get('window');
import { NavigationActions } from 'react-navigation';
const resetAction = NavigationActions.reset({
  index: 1,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'}),
    NavigationActions.navigate({ routeName: 'OrderProcess'},init={init:'1111111'}),
  ]
});

export default class OrderTraffic extends Component {
  constructor(props) {
    super(props);
    console.log(props.navigation.state.params.data);
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
            source={require('../../images/troubleReport/report_1/返回箭头.png')}/>
        </TouchableOpacity>
        <View style={stylesHeader.title}>
          <Text style={stylesHeader.titleName}>故障上报</Text>
        </View>
        <View style={stylesHeader.empty}>
        </View>
      </View>
    }
  };
  render() {
    let that  = this;
    return (
      <View style={styles.container}>
        <View  style={styles.outerContainer}>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>工单类型</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>设备编号</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>设备名称</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>区域位置</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>保养内容</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>备注信息</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>联系厂家</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>截止日期</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={() => that.props.navigation.dispatch(resetAction)}
            style={styles.startInspection}
          >
            <Text style={styles.startText}>提交</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outerContainer: {
    flex: 7,

  },
  inContainer: {
    flex: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },

  marginLeft: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,

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
