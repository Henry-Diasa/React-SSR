const express = require('express');
const path = require('path');
const app = express()

import render from './render';
import proxy from 'express-http-proxy'

app.use(express.static(path.resolve('public')))

app.use('/api', proxy('http://127.0.0.1:4000', {
  // 代理路径的 处理函数
  proxyReqPathResolver(req) {
    return `/api${req.url}`;
  }
}));

app.get('*', (req, res) => {
  render(req, res)
})

app.listen(3000)