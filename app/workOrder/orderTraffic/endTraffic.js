/**
 * Created by admin on 2017/6/26.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
   TextInput,
   Modal,
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
class ReportInput extends Component {//问题描述组件
	 constructor(props) {
			super(props);
			this.state = {
				 height: 0,
				 text: '',
			}
			this._onChange = this._onChange.bind(this);
	 }
	 _onChange(event) {//根据上传的图片动态调整宽高
			let height = event.nativeEvent.contentSize.height;
			let text = event.nativeEvent.text;
			this.setState({
				 height: height,
				 text: text,
			})
	 }
	 
	 render() {
			return <TextInput
				{...this.props}
        placeholderTextColor="#9e9e9e"
        multiline={true}
        underlineColorAndroid='transparent'
        onChange={this._onChange}
        placeholder='请输入处理方式（必填）'
        onContentSizeChange={(text) => console.log(text)}
        style={[styles.textInputStyle, {height: Math.max(35,this.state.height)}]}
      />
	 }
}

export default class OrderTraffic extends Component {
  constructor(props) {
    super(props);
		 this.state = {
				data: props.navigation.state.params.data,
				modalVisible:false,
		 }
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
            source={require('../../images/troubleReport/report_1/back.png')}/>
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
    let that = this;
    let data = this.state.data;
    return (
      <View style={styles.container}>
        <View  style={styles.outerContainer}>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>工单类型</Text>
              <Text style={styles.rightText}>故障单</Text>
            </View>
          </View>
          <View style={styles.inContainereq}>
            <Text style={styles.descriptQue}>处理方式</Text>
            <View style={styles.inputText}>
      
              <ReportInput
                onChangeText={this._onChangeText}
                style={styles.textInputStyle}/>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>设备编号</Text>
              <Text style={styles.rightText}>{data.deviceId}</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>设备名称</Text>
              <Text style={styles.rightText}>{data.deviceName}</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>区域位置</Text>
              <Text style={styles.rightText}>{data.location}</Text>
            </View>
          </View>
          {/*<View style={styles.inContainerInput}>
            <View style={styles.marginLeftInput}>
              <Text>处理内容</Text>
              <ReportInput/>
            </View>
          </View>*/}
          
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>联系厂家</Text>
              <Text style={styles.rightText}>{data.factory}</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text>截止日期</Text>
              <Text style={styles.rightText}>{data.lastdate}</Text>
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
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#ffffff'
  },
  outerContainer: {
    flex: 7,
    flexDirection: 'column',
    //justifyContent: 'center',
  },
  inContainer: {
    minHeight:45,
    justifyContent: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    /*borderWidth: 1,
    borderColor:'red',*/
  },
	 inContainereq:{
			minHeight:90,
      flexDirection:"row",
			borderBottomColor: '#ccc',
			borderBottomWidth: 1,
			/*borderWidth: 1,
			borderColor:'red',*/
   },
	 
	 descriptQue: {
			//textAlign: 'left',
			marginTop:15,
			marginLeft: 10,
			width: 80,
	 },
  marginLeft: {
    flexDirection: 'row',
    
     paddingRight:10,
    justifyContent: 'space-between',
    //flex: 1,
    marginLeft: 10,

  },
	 marginLeftInput:{
			flexDirection: 'row',
			/*borderWidth: 1,
			borderColor:'red',*/
			justifyContent: 'space-between',
   },
  leftText: {
    width: 100,
    /*borderWidth: 1,
    borderColor:'red',*/
  },
  bottomContainer: {
    minHeight:180,
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
	 inputText:{
    marginTop:5,
   },
	 textInputStyle: { //文本输入组件样式
			width: width - 95,
			height: 50,
			fontSize: 14,
			paddingTop: 0,
			paddingBottom: 0,
			color: '#9e9e9e'
			
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
