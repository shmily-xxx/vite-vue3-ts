<template>
  <div>
    <p ref="p">我是首页</p>
    <el-input ref="input" v-model="inputValue"></el-input>
    <el-input ref="input" v-model="inputValue1"></el-input>
    <el-button type="primary" @click="goLogin">去登录</el-button>
    <HelloWorld :msg="msg"></HelloWorld>
  </div>
</template>
<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { ref, onMounted} from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const p=ref()
const input=ref([])
const inputValue=ref(0)
const inputValue1=ref(1)
console.log(p)
const goLogin = () => {
  router.push({
    name: 'login',
    query: {
      ...route.query,
    },
  });
};
setTimeout(()=>{
  console.log(input.value)
},2000)
const msg=ref('xxx')
onMounted(()=>{
  // console.log(222)
})
</script>