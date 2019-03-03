import React, { Fragment } from 'react';
import Home from '../container/Home';
import Counter from '../container/Counter';
import Header from '../components/Header';
import routes from '../routes';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config'
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet'
import { getServerStore } from '../store/indexServer';


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
  // csses 是收集所有的样式.   ?那么 如何收集呢?   

  let context = { csses: [] }
  let matchedRoutes = matchRoutes(routes, req.path)
  let promises = []

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {

      promises.push(new Promise(function (resolve) {
        // 这边调两个resolve 都是 调同一个 resolve  保证 下面的promise.all 可以执行下去.
        return item.route.loadData(store).then(resolve, resolve)
      }))

      // promises.push(item.route.loadData(store))
    }
  });


  /*  
    这边的 promise.all 过于严格, 要求所有的 接口都要成功才能进行服务器端渲染
    为了解决这一问题, 修改上面的额代码
  */
  Promise.all(promises).then(function () {
    let html = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.path} >
          {renderRoutes(routes)}
          {/* 只有同感  renderRoutes 渲染出来的方法才有
            this.props.staticContext 

            其他引入的组件 是没有的,可以通过  pros 进行传递.
          */}
        </StaticRouter >
      </Provider>)
    // 这个 cssStr 还有 位置的讲究.

    // 渲染 即 跳动 renderToString方法之后才有.
    // 为什么呢? 因为 执行了 renderToString才是真正的执行. 组件里面的 componentWillMount  中的代码,
    // 才会 去读 if(this.props.staticContext) 才会往对象里面 push 值/
    
    let cssStr = context.csses.join('\n')
    let helmet = Helmet.renderStatic()
    /* 
      这边的 context 也值得深入研究的
     */
    if (context.action === 'REPLACE') {
      return res.redirect(302, context.url)
      // res.statusCode = 302
      /* 
        上面两行代码 效果相似, 但是作用是不一样的
        上一行是 服务器重定向
        下一行是 浏览器端重定向
      */
    } else if (context.notFound) {
      res.statusCode = 404
    }
    // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" />
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" />
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <style>${cssStr}</style>
    </head>
    <body>
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
