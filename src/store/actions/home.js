/* 
  axios 最大的 特别 就是  服务器端和 客户端是一模一样的
*/
import * as types from '../action-types';
import axios from 'axios';

export default {
  getHomeList() {
    // 为 thunk 中间件  增加一个 新的 参数  request
    return function (dispatch, getState, request) {
      /* 
        服务器端 访问4000
        而 客户端 访问3000 接口
      */
      return request.get('/api/users').then(function (result) {
        let list = result.data
        dispatch({
          type: types.SET_HOME_LIST,
          payload: list
        })
      })
    }
  }
};
