/**
 * Created by admin on 2017/6/8.
 */
module.exports = {
  header: {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  },
  //http://rapapi.org/mockjs/19098/%EF%BC%8Fapi/comments?creation=123a
  api: {
    //base: 'http://192.168.2.190:8080/',
    base:'http://rapapi.org/mockjs/19098/',
    queryUser: 'weyland/queryUser',
    getCode: 'weyland/getCode',
    getHistory: 'weyland/history',
    getTrcList: 'weyland/trclist',
  },
    local:{
        base:"http://192.168.199.127:3000/",
        getHistory:'search/get_history',
        getTrcList:'search/get_history',
        getTrf:'trf',
       getCode:'search/get_code',
       queryUser:'search/get_user',
       ontheway:'way',
       upload_picture:'manage/insert_image',
       complete:'complete',
    }
}