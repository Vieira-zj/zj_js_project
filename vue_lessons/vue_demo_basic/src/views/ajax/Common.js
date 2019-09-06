import axios from 'axios'
import qs from 'qs'

// axios Functions
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

axios.interceptors.response.use((res) => {
  if (!res.data.success) {
    return Promise.resolve(res)
  }
  return res
}, (err) => {
  return Promise.reject(err)
})

function sendGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params })
      .then(response => { resolve(response) }, err => { reject(err) })
      .catch((err) => {
        reject(err)
      })
  })
}

// 模拟请求wait_time, 默认500ms
function sendGetTest (url, params, wait = 500) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params })
      .then(response => {
        setTimeout(function () {
          resolve(response)
        }, wait)
      }, err => {
        reject(err)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

function sendPost (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// Components
const Home = { template: '<h2>Ajax Home</h2>' }

export default {
  sendGet,
  sendGetTest,
  sendPost,
  Home
}