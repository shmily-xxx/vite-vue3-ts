<template>
  <div id="page1">
    <img src="@/assets/logo.png" />
    <ul>
      <li>{{loginInfo.name}}</li>
      <li>{{loginInfo.age}}</li>
      <li>{{loginInfo.phone}}</li>
    </ul>
    <ul>
      <li>{{userInfo.name}}</li>
      <li>{{userInfo.age}}</li>
      <li>{{userInfo.phone}}</li>
    </ul>
    <el-button @click="changePinia">更改pinia</el-button>
    <el-button @click="commonStore.addAge">更改age</el-button>
    <el-button @click="resetUserInfo">重置</el-button>
  </div>
</template>
<script lang="ts" setup>
import { login } from '@/apis/login';
import { onMounted, computed, getCurrentInstance } from 'vue';
import { storeToRefs } from 'pinia';
import { LoginStore } from '@/store/modules/login';
import { CommonStore } from '@/store/modules/common';
const { proxy }: any = getCurrentInstance(); //lodash挂载用法

const loginStore = LoginStore();
const commonStore = CommonStore();
commonStore.getUserInfo();
const { userType } = storeToRefs(commonStore)
const userInfo = computed(() => commonStore.userInfo);
console.log(userType.value);
let loginInfo = computed(() => loginStore.loginInfo);
const changePinia=()=>{
  commonStore.$patch((state)=>{
    state.userInfo.age++
  })
}
// 全部更换方法
// const changePinia = () => {
//   commonStore.$patch({
//     userInfo: {
//       name: '温言铁语',
//       age: 9,
//       phone: '18603038753',
//     },
//   });
// };
// 重置  数据的方法
const resetUserInfo = () => {
  commonStore.$reset()
}
// console.log(proxy.$_.includes('sdafsdf', 'a'));

console.log(commonStore.fullName)//getters方法
onMounted(() => {
  login({ a: 1 })
    .then(() => {
      // console.log('login scss');
    })
    .finally(() => {
      // console.log('login finally');
    });
});
</script>
<style lang="scss" scoped>
#page1 {
  height: 1000px;
  // flex: 1;
  // background: lightskyblue;
  ul {
    background-color: var(--main-bg-color);
  }
}
</style>