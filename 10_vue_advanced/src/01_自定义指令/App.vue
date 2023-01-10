<template>
  <div class="app">
    <h2>app page</h2>
    <!-- <demo-first /> -->
    <!-- <demo-second /> -->
    <!-- <demo-third /> -->
    <h2 v-ftime>{{ 1231355453 }}</h2>
    <h2 v-ftime="`YYYY-MM-DD`">{{ 1231355453 }}</h2>
  </div>
</template>

<script setup>
import demoFirst from './01_自定义指令基本使用.vue'
import demoSecond from './02_自定义指令生命周期.vue'
import demoThird from './03_自定义指令参数修饰符值.vue'

</script>

<style scoped lang="less">

</style>