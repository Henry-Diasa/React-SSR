import React, { Fragment } from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config'
import routes from '../routes';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import { getClientStore } from '../store';
import { history } from '../history';
import { syncHistoryWithStore } from 'react-router-redux';
/* 
  renderRoutes
  这边是为了 使用  多级嵌套路由.

  {routes.map(route => <Route {...route} />)} 
  这中map 的写法只能 处理 单级路由!
*/


let store = getClientStore()
const historyObj = syncHistoryWithStore(history, store)

hydrate(
  <Provider store={store}>
    <Router history={history}>
      {/* <BrowserRouter> */}
      {renderRoutes(routes)}
      {/* </BrowserRouter> */}
    </Router>
  </Provider>,

  document.querySelector('#root')
)