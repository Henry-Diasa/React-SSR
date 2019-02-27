import React, { Fragment } from 'react';
import Home from '../container/Home';
import Counter from '../container/Counter';
import Header from '../components/Header';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'
import routes from '../routes';
import { Provider } from 'react-redux';
import { getServerStore } from '../store';

export default (req, res) => {
  let html = renderToString(<Home />)
  let store = getServerStore()
  let counter = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path} >
        <Fragment>
          <Header />
          <div className='container' style={{ marginTop: 70 }}>
            {routes}
          </div>
        </Fragment>
      </StaticRouter >
    </Provider>)
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" />
    <title>SSR</title>
  </head>
  <body>
    <div>你好</div>
    <div>${html}</div>
    <!-- <div>${counter}</div> -->
    <div id="root">${counter}</div>
    <script src=/client.js></script>
  </body>
  </html>
  `)
};
