import request from '@/utils/request';
export function getTest(data:any) {
  return request({
    url: `${import.meta.env.VITE_APP_BASE_API}/api/getUsers`,
    method: 'post',
    data
  });
}
export function getTest1(params:any) {
  return request({
    url: `${import.meta.env.VITE_APP_BASE_API}/api/getUsers`,
    method: 'get',
    params
  });
}
