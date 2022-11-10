import '@/utils/env'
import axios from 'axios'
// import router from '@/router'

import pinia from '@/stores'
import { useUserStore } from '@/stores/user'
const user = useUserStore(pinia)

const instance = axios.create({
  baseURL: window.BASE_URL,
  timeout: 5000
})

/* 请求拦截器 */
instance.interceptors.request.use(
  config => {
    /* 以下为demo代码，可根据自己的需求删除 */
    const { userInfo } = user // 从 pinia 获取用户信息
    if (userInfo.token) {   // 判断是否拥有token
      if (config && config?.headers) {  // 让请求携带token
        console.log(`测试：token: ${userInfo.token}`)
        config.headers.Authorization = `Bearer ${userInfo.token}`
      }
    }
    return config
  },
  err => {
    // 错误时候的处理
    return Promise.reject(err)
  }
)

/* 响应拦截器 */
instance.interceptors.response.use(
  res => res.data,  // 剥离 axios 的无用数据
  err => {
    /* 以下为demo代码，可根据自己的需求删除 */
    if (err.response && err.response.status === 401) {
      /* 清空无效用户信息 */
      // user.emptyUserInfo()
      /* 跳转到登录页面 */
      // const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)  // 获取跳转前的地址，方便用户登录后跳转回来
      // router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)
  }
)

/* 请求工具 */
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
