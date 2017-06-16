/**
 * Created by admin on 2017/6/13.
 */

/*
static navigationOptions = ({ navigation }) => {
  const {state, setParams} = navigation;
  let inits = {
    title: '扫码录入',
  }
  return {
    title: 'hello',
    header: <ReportHeader navigation={navigation} inits={inits}/>
  }
}*/
import ReportHeader from './ReportHeader';
import React, { Component } from 'react';
//import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Image,
  AppRegistry,
  Platform,
  Vibration,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions
} from 'react-native';

const {width, height}  = Dimensions.get('window');

//import {ToastMessage} from '../../utils/toast';
import Camera from 'react-native-camera';
import ViewFinder from './ViewFinder';

/*import backIcon from '../images/troubleReport/report_1/返回箭头.png';//返回按钮
import scanLine from '../images/troubleReport/report_1/扫描线.png';//扫描线*/
import SelfInput from './selfInput';
export default class Scan extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.state = {
      selfInput: false,//手动输入
      title: '扫码录入',//录入方式
      transCode:'',//条码
      openFlash: false,
      active: true,
      flag:true,
      fadeInOpacity: new Animated.Value(0), // 初始值
      isEndAnimation:false,//结束动画标记
    }
    this._goBack = this._goBack.bind(this);
    this._startAnimation = this._startAnimation.bind(this);
    this.barcodeReceived = this.barcodeReceived.bind(this);
    //this._search = this._search.bind(this);
    this._changeFlash = this._changeFlash.bind(this);
    this.changeState = this.changeState.bind(this);
    this._selfInput = this._selfInput.bind(this);
  }
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    {
      console.log(this)
    }
    //let title = this.state.title;
    let inits = {
      title: '扫码录入',
    }
    return {
      title: 'hello',
      header: <ReportHeader navigation={navigation} inits={inits}/>
    }
  }
  componentDidMount() {
    this._startAnimation(false);
    const {params} = this.props.navigation.state;
    console.log(params);
  }
  //开始动画，循环播放
  _startAnimation(isEnd) {
    Animated.timing(this.state.fadeInOpacity, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear
    }).start(
      () => {
        if (isEnd){
          this.setState({
            isEndAnimation:true
          })
          return;
        }
        if (!this.state.isEndAnimation){
          this.state.fadeInOpacity.setValue(0);
          this._startAnimation(false)
        }
      }
    );
    //console.log("开始动画");
  }
  _selfInput() {
    //this.props.navigation('SelfInput');
    let { navigate } = this.props.navigation;
    let init = {
      title: '手动录入',
    }
    return navigate('SelfInput',init={init});
    /*this.setState({
      selfInput: true,
    })*/
    /*console.log(this.props);
     this.props.navigation.navigation.goBack();
     console.log('cccc');*/
  }
  barcodeReceived(e) {
    if (e.data !== this.transCode) {
      Vibration.vibrate([0, 500, 200, 500]);
      this.transCode = e.data; // 放在this上，防止触发多次，setstate有延时
      if(this.state.flag){
        this.changeState(false);
        //console.log(e);
        //通过条码编号获取数据
      }

      //console.log(typeof this.transCode);
      let aaa = parseInt(this.transCode);
      //let ssss = JSON.parse(this.transCode);
      this.props.navigation.navigate('Report',{transCode:aaa});
    }
  }
  //返回按钮点击事件
  _goBack() {
    this.setState({
      isEndAnimation:true,
    });
    this.props.navigator.pop();
  }
  //开灯关灯
  _changeFlash() {
    this.setState({
      openFlash: !this.state.openFlash,
    });
  }
  //改变请求状态
  changeState(status){
    this.setState({
      flag:status
    });
    console.log('status='+status);
  }

  render(){
    const {
      openFlash,
      active,
    } = this.state;
    /*if (this.state.selfInput){
      return (
        <SelfInput/>
      )
    }*/

    return(
      <View style={styles.allContainer}>
        {(() => {
          if (active) {
            return (
              <Camera
                ref={cam => this.camera = cam}
                style={styles.cameraStyle}
                barcodeScannerEnabled={true}
                onBarCodeRead={
                  this.barcodeReceived
                }
                torchMode={openFlash ? 'on' : 'off'}>
                <View style={styles.centerContainer}/>
                  <View style={{flexDirection:'row'}}>
                    <View style={styles.fillView}/>
                    <View style={styles.scan}>
                      <ViewFinder/>
                      <Animated.View style={[styles.scanLine, {
                        opacity: 1,
                        transform:[{
                          translateY:this.state.fadeInOpacity.interpolate({
                            inputRange:[0,1],
                            outputRange:[0,240]
                          })
                        }]
                      }]}>
                        <Image source={require('../images/troubleReport/report_1/扫描线.png')}/>
                      </Animated.View>
                    </View>
                    <View style={styles.fillView}/>
                  </View>
                <View style={styles.bottomContainer}>
                  {/*<Text
                    style={[
                      styles.text,
                      {
                        textAlign: 'center',
                        width: 260,
                        marginTop: active ? 25 : 285,
                      },
                    ]}
                    numberOfLines={2}
                  >
                    将运单上的条码放入框内即可自动扫描。
                  </Text>*/}
                  <TouchableOpacity onPress={this._selfInput}>
                    <View style={styles.flash}>
                      <Text style={styles.icon}>&#xe61a;</Text>
                      <Text style={styles.text}>
                        手动录入
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.flasha}></View>
                  <TouchableOpacity onPress={this._changeFlash}>
                    <View style={styles.flash}>
                      <Text style={styles.icon}>&#xe61a;</Text>
                      <Text style={styles.text}>
                        开灯/关灯
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </Camera>
            );
          }
        })()}
      </View>
    )
  }
}

const styles =StyleSheet.create({
  allContainer:{
    flex:1,
  },
  container: {
    ...Platform.select({
      ios: {
        height: 64,
      },
      android: {
        height: 50
      }
    }),
    backgroundColor:'black',
    opacity:0.5
  },
  titleContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 15,
      },
      android: {
        paddingTop: 0,
      }
    }),
    flexDirection: 'row',
  },
  leftContainer: {
    flex:0,
    justifyContent: 'center',
  },
  backImg: {
    marginLeft: 10,
  },
  cameraStyle: {
    alignSelf: 'center',
    width: width,
    height: height,
  },
  flash: {
    marginTop: 40,
    flexDirection: 'row',

  },
  flasha: {
    width:40,
  },
  flashIcon: {
    fontSize: 1,
    color: 'white',
  },
  text: {
    fontSize: 14,
    color: 'white',
    marginTop:5
  },
  icon:{
    color:'white',
    fontSize:20,
    fontFamily:'iconfont'
  },
  scanLine:{
    alignSelf:'center',
  },
  centerContainer:{
    ...Platform.select({
      ios: {
        height: 80,
      },
      android: {
        height: (height - 285) / 2,
      }
    }),
    width:width,
    backgroundColor:'black',
    opacity:0.5
  },
  bottomContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    //alignItems:'center',
    backgroundColor:'black',
    //alignSelf:'center',
    opacity:0.5,
    flex:1,
    width:width
  },
  fillView:{
    width:(width-220)/2,
    height:220,
    backgroundColor:'black',
    opacity:0.5
  },
  scan:{
    width:220,
    height:220,
    alignSelf:'center'
  }

})
