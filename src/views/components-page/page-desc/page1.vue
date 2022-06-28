<template>
  <div>
    垃圾
    <TablePage :table-data="tableData" :table-columns="tableColumns"></TablePage>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TablePage from '@/components/TablePage.vue';
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
const tableColumns = [
  {
    prop: 'name',
    label: '名称',
    cusColumn: false,
  },
  {
    prop: 'date',
    label: '时间',
    cusColumn: false,
  },
  {
    prop: 'address',
    label: '地址',
    cusColumn: false,
  },
];
</script>