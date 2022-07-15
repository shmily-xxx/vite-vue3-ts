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
    <el-button @click="throttle" v-throttle>节流</el-button>
    <el-button v-debounce="{fn:debounce}">防抖</el-button>
    <el-button @click="reduce">-</el-button>
    <span>{{number}}{{infoObj.name}}{{infoObj.age}}</span>
    <el-button @click="add">+</el-button>
    <div style="position:relative">
      <div v-drag style="position:absolute;width: 80px;height: 80px;background-color: red;">拖拽</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { login } from '@/apis/login';
import {
  onMounted,
  computed,
  getCurrentInstance,
  ref,
  Ref,
  reactive,
  toRefs,
  toRef,
} from 'vue';
import { storeToRefs } from 'pinia';
import { LoginStore } from '@/store/modules/login';
import { CommonStore } from '@/store/modules/common';
const { proxy }: any = getCurrentInstance(); //lodash挂载用法

let number: Ref<number> = ref(0);

const infoObj = reactive({
  name: 'Alex',
  age: '22',
});
// toRefs(infoObj)
let { name } = toRefs(infoObj);
let age = toRef(infoObj, 'age');
const reduce = () => {
  number.value--;
  name.value = 'xxx';
  age.value = '111';
};
const add = () => {
  number.value++;
  name.value = 'yyy';
  age.value = '22';
};
const loginStore = LoginStore();
const commonStore = CommonStore();
commonStore.getUserInfo();
const { userType } = storeToRefs(commonStore);
const userInfo = computed(() => commonStore.userInfo);
console.log(userType.value);
let loginInfo = computed(() => loginStore.loginInfo);
const changePinia = () => {
  commonStore.$patch((state) => {
    state.userInfo.age++;
  });
};
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
  commonStore.$reset();
};
// console.log(proxy.$_.includes('sdafsdf', 'a'));

console.log(commonStore.fullName); //getters方法
const throttle = () => {
  console.log(22222222);
};
const debounce = () => {
  console.log(11111111);
};
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