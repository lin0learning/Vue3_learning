<template>
  <div class="home">
    <div>name: {{name}}</div>
    <div>age: {{age}}</div>
    <div>biliname: {{biliName}}</div>
    <button @click="changeState">修改User中State</button>
    <button @click="resetState">重置User中State</button>
  </div>
</template>

<script setup>
  import useUser from '@/stores/user'
  import { storeToRefs } from 'pinia'; 

  const userStore = useUser()
  const { name, age, biliName } = storeToRefs(userStore)

  function changeState() {
    // 1. 一个个修改
    // userStore.name = "antd"
    // userStore.age = 18
    // userStore.biliName = "elm ui"

    // // 2. 一次性修改多个状态
    // userStore.$patch({
    //   name: "antd",
    //   age: 18,
    //   biliName: "elm ui"
    // })

    // 3.替换state为新的对象
    const oldState = userStore.$state
    userStore.$state = {
      name: "curry",
      age: 200
    }
  }
  function resetState() {
    userStore.$reset()
  }
</script>

<style scoped>

</style>