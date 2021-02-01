// 封装localstorage本地存储的方法
/* eslint-disable */
var storage = {
  set (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get (key) {
    return JSON.parse(localStorage.getItem(key))
  }
}

export default storage
 