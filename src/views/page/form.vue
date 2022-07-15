<template>
  <Form ref="formRef"></Form>
  <el-button @click="submit">提交</el-button>
  <Test @childEvent="_childEvent"></Test>
  
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Form from '@/components/Form.vue';
import Test from '@/components/test.vue';
const formRef = ref();
const _childEvent = (val: any) => {
  console.log(val);
};
console.log(formRef);
// const from=
const submit = () => {
   console.log(formRef.value.submitForm());
  // formRef.value.fn()
};
</script>