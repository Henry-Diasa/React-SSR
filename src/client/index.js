import React, { Fragment } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config'
import routes from '../routes';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import { getClientStore } from '../store';

/* 
  renderRoutes
  这边是为了 使用  多级嵌套路由.
*/
hydrate(
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <Fragment>
        <Header />
        <div className='container' style={{ marginTop: 70 }}>
          {/* {routes.map(route => <Route {...route} />)} */}
          {renderRoutes(routes)}
        </div>
      </Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)