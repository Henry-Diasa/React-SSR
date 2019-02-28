import React, { Fragment } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import routes from '../routes';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import { getClientStore } from '../store';

hydrate(
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <Fragment>
        <Header />
        <div className='container' style={{ marginTop: 70 }}>
          {routes.map(route => <Route {...route} />)}
        </div>
      </Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)