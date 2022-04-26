import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { ElLoading ,ElMessage} from 'element-plus'
console.log(import.meta.env.VITE_APP_BASE_URL)
// 创建axios实例
const request = axios.create({
  // 服务接口请求
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  // 超时设置
  timeout: 15000,
  headers:{'Content-Type':'application/json;charset=utf-8'}
})
let loadingInstance:any
request.interceptors.request.use(
  (config:any) => {
    loadingInstance = ElLoading.service({
      fullscreen: true,
      background: 'rgba(0, 0, 0, 0)'
    });
    config.headers['Content-Type'] = 'application/json';
    config.headers['X-XSS-Protection'] = '1';
    config.headers['X-Content-Type-Options'] = 'nosniff';
    config.headers['Content-Security-Policy'] = 'default-src';
    config.headers['pageUrl'] = window.location.href;
    if (config.method === 'get') {
      config.params = {
        t: +new Date(),
        ...config.params
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截器
request.interceptors.response.use((response) => {
  //响应成功
  console.log('响应成功');
  loadingInstance.close();
  return response.data;
}, (error) => {
  //响应错误
  const { response } = error;
  loadingInstance.close();
  let message = ''
  switch (response.status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '未授权，请重新登录(401)'
      break
    case 403:
      message = '拒绝访问(403)'
      break
    case 404:
      message = '请求出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${response.status})!`
  }
  ElMessage({
    message: error.response.data.message || message,
    type: 'error',
    duration: 3 * 1000
  });
  return Promise.reject(error);
});

export default request;