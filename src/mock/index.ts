import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: `/gateway/user/api/login`,
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        status: 'success',
        data: {
          name: '',
          age: '',
          phone: '',
        },
      };
    },
  },
  {
    url: `/gateway/user/api/getUserInfo`,
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        status: 'success',
        data: {
          name: '温言铁语',
          age: 2,
          phone: '18603038753',
        },
      };
    },
  },
] as MockMethod[];
