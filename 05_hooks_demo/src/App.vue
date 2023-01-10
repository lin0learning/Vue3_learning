<template>
  <div class="app">
    <div class="roominfo">
      <Container :area-data="HotView"></Container>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
// 获取数据
// import HotView from './data/high_score.json'
import Container from './components/Container.vue'

// 模拟网络请求
const HotView = ref({})
setTimeout(() => {
  import('./data/high_score.json').then(res => {
    HotView.value = res.default
  }, 1000)
})
</script>

<style lang="less" scoped>
.roominfo {
  width: 1032px;
  margin: 0 auto;
}
</style>