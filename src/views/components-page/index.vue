<template>
  <div>
    <component :is="allComponents[type]"></component>
    <button :disabled="true" @click="btn">sdfasdf</button>
    <button class="btn-style" :disabled="disableBtn"  @click="specialPass">
						<div><text class="btn-font-sty">确认</text></div>
					</button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import allComponents from './index';
// import page from './page-desc/page.vue';
// import page1 from './page-desc/page.vue';

const type = ref('page');
const disableBtn=ref(true)
const btn=()=>{
  console.log(1)
}
const specialPass=()=>{
  console.log(1)
}
//  console.log(page)
// const compomemtsData=ref('page')
</script>
<style>
.btn-style {
		height: 88px;
		/* background-color: #366DF0; */
		border-radius: 12rpx;
		width: 580px;
		margin-bottom: 30px;
	}
</style>