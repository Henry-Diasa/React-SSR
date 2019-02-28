import axios from 'axios'

// 返回实例, 创建一个对个 基础对象
// 这个会做

export default axios.create({
  baseURL: 'http://localhost:4000'
})

