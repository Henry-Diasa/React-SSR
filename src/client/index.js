import React, { Fragment } from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config'
import routes from '../routes';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import { getClientStore } from '../store';

/* 
  renderRoutes
  这边是为了 使用  多级嵌套路由.

  {routes.map(route => <Route {...route} />)} 
  这中map 的写法只能 处理 单级路由!
*/

hydrate(
  <Provider store={getClientStore()}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,

  document.querySelector('#root')
)