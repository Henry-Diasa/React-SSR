import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Counter from './container/Counter';
import Home from './container/Home';


/*
 为了路由做匹配,
 需要把  组件式的路由 改写为对象式的路由.
*/

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

/* 
  提取出来只为了复用.
 */
/* export default (
  <Fragment>
    <Route path='/' exact component={Home} />
    <Route path='/counter' component={Counter} />

  </Fragment>
)  */