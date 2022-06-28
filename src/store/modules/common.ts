import { defineStore } from 'pinia';
import { getUserInfo } from '@/apis/login';
export const CommonStore = defineStore('common', {
  // 必须用箭头函数
  state: () => ({
    userInfo: {
      name: 'ok',
      age: 0,
      phone: '1',
    },
    userType:1
  }),
  persist: {//数据持久化
    enabled: true,// 开启缓存  默认会存储在本地localstorage
    strategies: [
      {
        key: 'userInfo',
        storage: localStorage,//数据默认存在 sessionStorage 里，并且会以 store 的 id 作为 key。
        paths: ['userInfo']//指定要持久化的字段
      }
    ]
  },
  actions: {
    async getUserInfo(params?: any) {
      const data = await getUserInfo(params);
      this.setUserInfo(data.data);
      return data.data;
    },
    setUserInfo(data: any) {
      this.userInfo = data;
    },
    addAge(){
      this.userInfo.age++
    }
  },
  getters: {
    fullName: (state) => {
      return state.userInfo.name + '丰'
    }
  },
});
