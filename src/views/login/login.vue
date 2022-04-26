<template>
  <span class="noselect">登录页</span>
  <el-input v-model="name" @change="inputChange"></el-input>
  <el-input v-model="age" @change="inputChange"></el-input>
  <el-input v-model="sex" @change="inputChange"></el-input>
  <div ref="textRef">{{text}}</div>
  <ul>
    <li v-for="item in list" :key="item">{{item}}</li>
  </ul>
  <el-button>sss</el-button>
  <el-button type="primary" @click="login">登录</el-button>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { my } from '@/utils/class';
// import { fn } from '@/utils/index';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex'; //1.从vuex中引入useStore
const router = useRouter();
const route = useRoute();
const name = ref();
const age = ref();
const sex = ref();
const list = ref([]);
const text = ref('xxx');
const {commit } = useStore();
const a = new my(4, 2);
// console.log(a.a);
// console.log(fn);
const login = async (data: any) => {
let obj = await httpLogin();
 commit("user/SET_USER", obj)
  router.push({
    path: '/page/page1',
    query: {
      ...route.query,
    },
  });
};
const httpLogin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: name,
        token: age,
        sex:sex,
      });
    }, 300);
  });
};
const inputChange = (val: any) => {
  console.log(val);
};
const textRef = ref(null);
onMounted(() => {
  // console.log('登录页', textRef);
});
</script>

<style lang="scss">
.noselect {
  cursor: text;
  -webkit-touch-callout: none; /* iOS Safari */

  -webkit-user-select: none; /* Chrome/Safari/Opera */

  -khtml-user-select: none; /* Konqueror */

  -moz-user-select: none; /* Firefox */

  -ms-user-select: none; /* Internet Explorer/Edge */

  user-select: none; /* Non-prefixed version, currently not supported by any browser */
}
</style>