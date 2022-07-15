<template>
  <el-table :data="tableData" style="width: 100%" v-bind="$attrs">
    <el-table-column v-if="isShowCheckbox" type="selection" :width="defaultCheckWidth"></el-table-column>
    <el-table-column v-for="(item,index) in tableColumns" :key="index" v-bind="item">
      <template v-slot="scope">
        <template
          v-if="!item.cusColumn"
        >{{ !isHandleNull ? scope.row[item.prop] : (scope.row[item.prop] || '--') }}</template>
        <template v-else>
          <slot :name="item.prop" :row="scope.row" :$index="scope.$index"></slot>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
interface TableColumns {
  cusColumn?: boolean;
  prop: string;
}
interface Props {
  tableData: any[];
  tableColumns: TableColumns[];
  isShowCheckbox?: boolean;
  defaultCheckWidth?: string;
  isHandleNull?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  tableData: () => [],
  isShowCheckbox: false,
  isHandleNull: false,
  defaultCheckWidth: '40px',
});
</script>