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
  }
}