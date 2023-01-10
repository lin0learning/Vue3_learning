<template>
  <div class="app">
    当前计数: {{counter}}
  </div>
  <button @click="decrement">-1</button>
  <button @click="increment">+1</button>
</template>

<script>
  import { ref } from 'vue'
  import useCounter from './hooks/useCounter'
  export default {
    setup() {
      // let counter = ref(100)
      // const decrement = () => {
      //   counter.value--
      // }
      // const increment = () => {
      //   counter.value++
      // }
      // 返回对象 方法1
      // return { counter, decrement, increment} 
      
      // 返回对象 方法2 
      // const { counter, increment, decrement } = useCounter()
      // return {
      //   counter,
      //   increment,
      //   decrement
      // }
      // 扩展运算符 `...`
      return { ...useCounter() }
    }
  }
</script>

<style scoped>

</style>