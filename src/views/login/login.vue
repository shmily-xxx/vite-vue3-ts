<template>
  <div class="login-box">
    <div class="noselect title">登录</div>
    <el-form
      :model="ruleForm"
      label-position="left"
      size="default"
      status-icon
      ref="ruleFormRef"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="ruleForm.userName" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code" />
      </el-form-item>
    </el-form>
    <el-button type="primary" size="default" @click="login">登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { LoginStore } from '@/store/modules/login';
// import { fn } from '@/utils/index';
import { useRouter, useRoute } from 'vue-router';
const loginStore = LoginStore();
const router = useRouter();
const route = useRoute();
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  userName: '',
  password: '',
  code: '',
});
const rules = reactive<FormRules>({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur',
    },
  ],
});
// console.log(a.a);
// console.log(fn);
const login = async (data: any) => {
  let obj: any = await setAccont();
  loginStore.$patch({
    loginInfo: {
      name: obj.name,
      age: obj.age,
      phone: obj.phone,
    },
  });
  router.push({
    path: '/page/page1',
    query: {
      ...route.query,
    },
  });
};
const setAccont = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: ruleForm.userName,
        age: ruleForm.password,
        phone: ruleForm.code,
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
.login-box {
  margin: 30vh auto;
  width: 400px;
  // height: 400px;
  .title {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
  }
  .noselect {
    cursor: text;
    -webkit-touch-callout: none; /* iOS Safari */

    -webkit-user-select: none; /* Chrome/Safari/Opera */

    -khtml-user-select: none; /* Konqueror */

    -moz-user-select: none; /* Firefox */

    -ms-user-select: none; /* Internet Explorer/Edge */

    user-select: none; /* Non-prefixed version, currently not supported by any browser */
  }
}
</style>