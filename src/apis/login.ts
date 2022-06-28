import request from '@/utils/request';
export function login(data:any) {
  return request({
    url: `${import.meta.env.VITE_APP_BASE_API}/api/login`,
    method: 'post',
    data
  });
}
export function getUserInfo(params:any) {
  return request({
    url: `${import.meta.env.VITE_APP_BASE_API}/api/getUserInfo`,
    method: 'get',
    params
  });
}
