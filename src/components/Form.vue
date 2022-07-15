<template>
  <el-form :model="formData" :rules="rules" ref="formRef" label-width="120px">
    <el-form-item label="名称" prop="name">
      <el-input v-model="formData.name" />
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model="formData.age" @change="change" />
    </el-form-item>
    <el-form-item label="电话" prop="phone">
      <el-input v-model="formData.phone" />
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
interface Form {
  name: string;
  age: string;
  phone: string;
}
interface Props {
  form: Form;
}
const rules = reactive<FormRules>({
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
  phone: [{ required: true, message: '请输入电话', trigger: 'blur' }],
});
const props = withDefaults(defineProps<Props>(), {
  form: () => {
    return { name: '', age: '', phone: '' };
  },
});
const formData = computed(() => {
  return props.form;
});
const change = (e: string) => {
  console.log(e);
};
const formRef = ref<FormInstance>();
const emits = defineEmits(['submitForm', 'good']);
const submitForm = async (formEl: FormInstance | undefined) => {
  console.log(formEl);
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      emits('submitForm', formData);
    } else {
      console.log('error submit!', fields);
    }
  });
};
defineExpose({
  submitForm,
});
</script>