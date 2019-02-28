const express = require('express');
const app = express()

const users = [
  { id: 1, name: '陆德靖' },
  { id: 2, name: '陆宗廷' },
]

app.get('/api/users', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(users)
})

app.listen(4000, () => { console.log('监听4000成功') })