import React, { Fragment } from 'react';
import Home from '../container/Home';
import Counter from '../container/Counter';
import Header from '../components/Header';
import routes from '../routes';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config'
import { Provider } from 'react-redux';
import { getServerStore } from '../store';

export default (req, res) => {
  /* 通过这样 一步 一步的 传  只是为了把  req 带到  axios的里面 去调一个 req.get('cookie') */
  let store = getServerStore(req)
  //这个方法可以处理嵌套路由
  /* 这边的 matchRoutes 也不是一步到位的. */
  // let matchRoutes = matchRoutes(routes, req.path)
  /* 这种 filter 的书写也只能处理一层的单级路由, 因为 filter 只遍历了一次 */
  /*   let matchRoutes = routes.filter(route => (
    matchPath(req.path, route)
  )) */

  let matchedRoutes = matchRoutes(routes, req.path)
  let promises = []

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      // promises.push(new Promise(function (resolve) {
      //   // 这边调两个resolve 都是 调同一个 resolve
      //   return item.route.loadData(store).then(resolve, resolve)
      // }))
      promises.push(item.route.loadData(store))
    }
  });

  Promise.all(promises).then(function () {
    let html = renderToString(
      <Provider store={store}>
        <StaticRouter context={{}} location={req.path} >
          {renderRoutes(routes)}
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
