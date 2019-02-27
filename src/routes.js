import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Counter from './container/Counter';
import Home from './container/Home';

/* 
  提取出来只为了复用.
 */

export default (
  <Fragment>
    <Route path='/' exact component={Home} />
    <Route path='/counter' component={Counter} />

  </Fragment>
) 