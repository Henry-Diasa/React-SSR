const express = require('express');
const path = require('path');
const app = express()

import render from './render';
app.use(express.static(path.resolve('public')))

app.get('*', (req, res) => {
  render(req, res)
})

app.listen(3000)