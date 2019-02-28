import axios from 'axios'

// 返回实例, 创建一个对个 基础对象
// 这个会做

export default (req) => axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    cookie: req.get('cookie') || ''
  }
})

/* 
  为了能让 在cookie 里面调用 cookie 的方法
  现在需要把  

  export defalut 
  返回一个 函数.
*/

