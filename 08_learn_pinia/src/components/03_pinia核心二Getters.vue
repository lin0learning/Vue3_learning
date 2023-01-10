<template>
  <div class="home">
    <div>getter1-dbCount: {{counterStore.doubleCount}}</div>
    <div>getter2-dbCtAddOne: {{counterStore.dbCountAddOne}}</div>
    <div>getter3-refData: {{counterStore.refData}}</div>
    <div>getter4-getFriend: {{counterStore.getFriendById(111)}}</div>
    <div>getter5-getFriend: {{counterStore.getFriendById(112)}}</div>
  </div>
</template>

<script setup>
  import useCounter from '@/stores/couter';
  const counterStore = useCounter()


  
</script>

<style scoped>

</style>