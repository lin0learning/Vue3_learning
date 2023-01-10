<template>
  <div class="container">
    <h2>App.vue 根组件</h2>
  </div>
  <dark-demo></dark-demo>
</template>

<script>
import darkDemo from './components/seaDemo.vue'
  export default {
    components: {
      darkDemo,
    }
  }
</script>

<style scoped>
  .container {
    text-align: center;
  }
</style>