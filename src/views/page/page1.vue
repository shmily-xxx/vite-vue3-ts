<template>
  <div id="page1">
    <img src="@/assets/logo.png" />
    <ul>
      <li>{{userInfor.name}}</li>
      <li>{{userInfor.token}}</li>
      <li>{{userInfor.sex}}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { getTest, getTest1 } from '@/apis/test';
import { onMounted, computed, getCurrentInstance } from 'vue';
import { useStore } from 'vuex';
const { state } = useStore();
const { proxy }: any = getCurrentInstance();
let userInfor = computed(() => state.user.userInfo);
// console.log(proxy.$_.includes('sdafsdf', 'a'));
onMounted(() => {
  // getTest({ a: 1 })
  //   .then(() => {
  //     // console.log('getTest scss');
  //   })
  //   .finally(() => {
  //     // console.log('getTest finally');
  //   });
  getTest1({ a: 3 })
    .then(() => {
      // console.log('getTest1 scss');
    })
    .finally(() => {
      //  console.log('getTest1 finally');
    });
});
</script>
<style lang="scss" scoped>
#page1 {
  height: 1000px;
  flex: 1;
  background: lightskyblue;
}
</style>