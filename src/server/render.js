import React, { Fragment } from 'react';
import Home from '../container/Home';
import Counter from '../container/Counter';
import Header from '../components/Header';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import routes from '../routes';
import { Provider } from 'react-redux';
import { getServerStore } from '../store';

export default (req, res) => {
  let store = getServerStore()


  //这个方法可以处理嵌套路由
  /* 
    这边的 matchRoutes 也不是一步到位的.
  */
  // let matchRoutes = matchRoutes(routes, req.path)
  let matchRoutes = routes.filter(route => (
    matchPath(req.path, route)
  ))

  let promises = []

  matchRoutes.forEach(route => {
    if (route.loadData) {
      // promises.push(new Promise(function (resolve) {
      //   // 这边调两个resolve 都是 调同一个 resolve
      //   return item.route.loadData(store).then(resolve, resolve)
      // }))

      promises.push(route.loadData(store))
    }
  });
  // matchRoutes.
  Promise.all(promises).then(function () {
    let html = renderToString(
      <Provider store={store}>
        <StaticRouter context={{}} location={req.path} >
          <Fragment>
            <Header />
            <div className='container' style={{ marginTop: 70 }}>
              {routes.map(route => <Route {...route} />)}
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
        <div id="root">${html}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src=/client.js></script>
      </body>
      </html>
    `)
  })

};
