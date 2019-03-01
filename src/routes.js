import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Counter from './container/Counter';
import Home from './container/Home';
import App from './container/App';
import Login from './container/Login';
import Logout from './container/Logout';
import Profile from './container/Profile';
import NotFound from './container/NotFound';


/* 很深的 无限嵌套的 递归结构 */
export default [
  {
    path: '/',
    component: App,
    loadData:App.loadData,
    //子路由
    key: '/app',
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        key: '/',
        loadData: Home.loadData //加载数据，如果此配置项有了这个属性，那么则意味着需要加载异步数据
      },
      {
        path: '/counter',
        component: Counter,
        key: '/counter'
      },
      {
        path: '/login',
        component: Login,
        key: '/login'
      },
      {
        path: '/logout',
        component: Logout,
        key: '/logout'
      },
      {
        path: '/profile',
        component: Profile,
        key: '/profile'
      },
      {
        component: NotFound,
        key: '/notfound'
      },
    ]
  }
]
/*
 为了路由做匹配,
 需要把  组件式的路由 改写为对象式的路由.

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    key: '/',
    loadData: Home.loadData   // 这个值的 是一个函数,  如果 有这个属性, 表明需要加载异步数据
  },
  {
    path: '/counter',
    component: Counter,
    key: '/counter',
  },
]
*/


/* 
  提取出来只为了复用.
 */
/* export default (
  <Fragment>
    <Route path='/' exact component={Home} />
    <Route path='/counter' component={Counter} />

  </Fragment>
)  */