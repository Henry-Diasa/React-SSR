import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import clientRequest from '../client/request';
import serverRequest from '../server/request';

/* 
  为了让 服务器端 和 客户端都用到这个仓库
  但 其实本质上, 他们不是同一个仓库  (所以这边返回 的是一个 获取 仓库的方法)
*/

export function getServerStore() {
  return createStore(reducers, applyMiddleware(thunk.withExtraArgument(serverRequest), logger))
}

export function getClientStore() {
  let initState = window.context.state
  console.dir(initState);

  // createSotre 中间穿的值.
  return createStore(reducers, initState, applyMiddleware(thunk.withExtraArgument(clientRequest), logger))
}