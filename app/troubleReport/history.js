/**
 * Created by admin on 2017/6/12.
 */
import React, { Component } from 'react';
import {
  Alert,
  Image,
  ListView,
  Navigator,
  TouchableHighlight,
  TextInput,
  Dimensions,
  TouchableOpacity,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
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
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
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
    //alignSelf: 'center',
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInputStyle: { //文本输入组件样式
    width: 300,
    height: 50,
    fontSize: 20,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: "grey"
  }
});