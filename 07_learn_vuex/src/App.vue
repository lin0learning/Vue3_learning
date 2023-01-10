<template>
  <div id="app">
    <!-- 1.  -->
    <div>VueX 状态管理学习</div>
    <div class="part">Part 1</div>
    <div>{{$store.state.counter}}</div>
    <!-- 2.  -->
    <div class="part">Part 2</div>
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
    components: { Home }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.part {
  border-bottom: 1px solid #efefef;
}
</style>
