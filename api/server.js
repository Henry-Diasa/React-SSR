const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')

/* 用来处理get请求的 */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'ldj'
}))
const users = [
  { id: 1, name: '陆德靖' },
  { id: 2, name: '陆宗廷' },
]

app.get('/api/users', (req, res) => {
  res.json(users)
})

app.post('/api/login', (req, res) => {
  let user = req.body
  console.dir(user);
  req.session.user = user

  res.json({
    code: 0,
    data: {
      user,
      success: '登录成功',
    }
  })
})

app.get('/api/logout', (req, res) => {
  req.session.user = null
  res.json({
    code: 0,
    data: {
      success: '退出成功',
    }
  })
})
// 返回当前用户信息
app.get('/api/user', (req, res) => {
  let user = req.session.user

  if (user) {
    res.json({
      code: 0,
      data: {
        user,
        success: '获取用户信息成功!',
      }
    })
  } else {
    res.json({
      code: 0,
      data: {
        success: '用户未登录',
      }
    })
  }

})

app.listen(4000, () => { console.log('监听4000成功') })