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
	 Alert,
	 Modal,
} from 'react-native';

import config from '../../config/config';
import request from '../../config/request';

const { width, height } = Dimensions.get('window');

export default class OrderTraffic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.navigation.state.params.data,
			 modalVisible:false,
    }
    this._setModalVisable = this._setModalVisable.bind(this);
  }
  static navigationOptions = ({ navigation }) => {//设置导航栏头部
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
          <Text style={stylesHeader.titleName}>故障详情</Text>
        </View>
        <View style={stylesHeader.empty}>
        </View>
      </View>
    }
  };
  
  componentDidMount
  _setModalVisable(){
  	 let flag = this.state.modalVisible;
  	 console.log(flag === true);
  	 if (flag === true) {
				this.setState({
					 modalVisible:false,
				})
		 } else {
				this.setState({
					 modalVisible:true,
				})
  	 }
	}

  render() {
    let { navigate } = this.props.navigation;
    let data = this.state.data;
    return (
      <View style={styles.container}>
				 <Modal
					 style={styles.modal}
					 animationType={"slide"}
					 transparent={false}
					 visible={this.state.modalVisible}
					 onRequestClose={() => {Alert("Modal has been closed.")}}>
						<TouchableOpacity
							style={styles.modalContent}
							onPress={() => this._setModalVisable()}>
							 {/*<Text style={styles.aaaa}>aaaa</Text>*/}
							 <Image
								 style={styles.aaaa}
								 source={require("../../images/aaa.png")}/>
						</TouchableOpacity>
				 </Modal>
        <View  style={styles.outerContainer}>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text style={styles.leftText}>工单类型</Text>
              <Text style={styles.rightText}>故障单</Text>
            </View>
          </View>


          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text style={styles.leftText}>设备编号</Text>
              <Text style={styles.rightText}>{data.deviceId}</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text style={styles.leftText}>设备名称</Text>
              <Text style={styles.rightText}>{data.deviceName}</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text style={styles.leftText}>区域位置</Text>
              <Text style={styles.rightText}>{data.location}</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text style={styles.leftText}>故障描述</Text>
              <Text style={styles.rightText}>{data.content}</Text>
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
              <Text style={styles.rightText}>{data.factory}</Text>
            </View>
          </View>
          <View style={styles.inContainer}>
            <View style={styles.marginLeft}>
              <Text style={styles.leftText}>截止日期</Text>
              <Text style={styles.rightText}>{data.lastdate}</Text>
            </View>
          </View>

          <View style={styles.picContainer}>
						 <View style={styles.picWarp}>
								<Text>故障图片</Text>
								<TouchableOpacity
									style={styles.trifPic}
									onPress={() => this._setModalVisable()}>
									 <Image
										 source={require('../../images/aaa.png')}
										 style={styles.images}>
									 </Image>
								</TouchableOpacity>
						 </View>
          
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={() => navigate('EndTraffic',data={data})}
            style={styles.startInspection}
          >
            <Text style={styles.startText}>开始处理</Text>
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
    backgroundColor: '#ffffff'
  },
	 modalContent:{
  	 flex:1,
  	 justifyContent:'center',
  	 backgroundColor:'black',
  	 //width:480,
  	 /*width:width,
			height:height,*/
			//justifyContent:'center',
			//alignItems:'center'
	 },
	 aaaa:{
  	 width:370,
			height:250,
			
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
    flexDirection: 'column',
    /*borderWidth: 1,
    borderColor:'red',*/
  },
	picContainer:{
  	 flex:2,
     borderBottomWidth:1,
		 borderColor:'#ccc',
    },
	 picWarp:{
  	 marginTop:10,
  	 marginLeft:10,
			flexDirection:'row',
	 },
	 trifPic:{
  	 marginLeft:10,
			marginTop:5,
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
  rightText: {
    marginRight: 10,
  },
  bottomContainer: {
    flex: 2,
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
    height: 50,
    width: 75,
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
