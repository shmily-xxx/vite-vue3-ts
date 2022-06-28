import { defineStore } from "pinia";

export const LoginStore = defineStore("login", {
  // 必须用箭头函数
  state: () => ({
    loginInfo:{
        name:'温言铁语',
        age: '71',
        phone:"18603038753",
    }
  }),
  actions:{

  },
  getters:{
    
  }
});
