<template>
  <div @click="someEvent">2222</div>
</template>
<script lang="ts" setup>
const emits = defineEmits(['childEvent'])
const someEvent = function(){
    //触发事件
    emits('childEvent',333333)
}
</script>