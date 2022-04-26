<template>
  <div>
    <p>我是首页</p>
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

const goLogin = () => {
  router.push({
    name: 'login',
    query: {
      ...route.query,
    },
  });
};
const msg=ref('xxx')
onMounted(()=>{
  console.log(222)
})
</script>