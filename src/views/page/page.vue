<template>
  <div>
    <TablePage
      :table-data="tableData"
      :table-columns="tableColumns"
      :isShow-checkbox="true"
      @selection-change="handleSelectionChange"
    ></TablePage>
    <el-button @click="left">{{'<'}}</el-button>{{timer}}<el-button @click="right">{{'>'}}</el-button>
    <div data="wwwwwwwww"  data-rl="xxxx" id="box" @click="btn">2ddd</div>
  </div>
</template>

<script lang="ts" setup>
import { ref ,getCurrentInstance ,onMounted} from 'vue';
import TablePage from '@/components/TablePage.vue';
const { proxy }: any = getCurrentInstance();
let timer = ref(proxy.$moment().format('MM-DD'))
console.log(proxy.$moment().format('MM-DD'))
let year=proxy.$moment().get('year')
const left=()=>{
  if(timer.value.split('-')[0]==='01'){
    year-=1
  }
 timer.value=proxy.$moment(proxy.$moment(year+'-'+timer.value)).subtract(1, 'months').format('MM-DD')
  console.log(year)
}
const right=()=>{
  if(timer.value.split('-')[0]==='12'){
     year+=1
  }
  timer.value=proxy.$moment(proxy.$moment(year+'-'+timer.value)).add(1, 'months').format('MM-DD')
  console.log(year)
}
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
    label: '名称'
  },
  {
    prop: 'date',
    label: '时间'
  },
  {
    prop: 'address',
    label: '地址'
  },
];
interface User {
  date: string
  name: string
  address: string
}
const handleSelectionChange = (val: User[]) => {
  console.log(val);
};
onMounted(()=>{
  let cityList = [
    {id: 4,parentId: 1,name: '苏州市'},
    {id: 2,parentId: 0,name: '广东省'},
    {id: 5,parentId: 1,name: '无锡市'},
    {id: 6,parentId: 1,name: '南通市'},
    {id: 7,parentId: 2,name: '广州市'},
    {id: 8,parentId: 2,name: '深圳市'},
    {id: 9,parentId: 3,name: '长沙市'},
    {id: 1, parentId: 0,name: '江苏省'},
    {id: 10,parentId: 4,name: '工业园区'},
    {id: 11,parentId: 4,name: '吴中区'},
    {id: 3,parentId: 0,name: '湖南省'},
    {id: 12,parentId: 4,name: '姑苏区'}
];
function listToTree() {
    let array:any = []
    cityList.forEach((item:any) => { // 遍历对象数组
        item.children = cityList.filter(info => info.parentId === item.id) // 找到每个对象的子节点 
        if (item.parentId === 0) {
            array.push(item) // 将一层节点放入新数组中
        }
    })
    return array //循环结束，返回结果
}
console.log(listToTree())


})
const btn=()=>{
  console.log(document.getElementById('box')?.value)
}
</script>