<template>
  <div id="app">
    <tab-control-vue :titles="['One', 'Two', 'Three']" @cgIndex="getIndex"></tab-control-vue>
  </div>
  <h1>{{contentInfo[currentIndex]}}</h1>
</template>

<script>
import TabControlVue from './TabControl.vue'
  export default {
    data() {
        return {
            contentInfo:['Content 1', "Content 2", "Content 3"],
            currentIndex: 0
        }
    },
    methods: {
        // 2. 父组件接收来自cgIndex中的index参数
        getIndex(index) {
            this.currentIndex = index
        }
    },
    components: {
        TabControlVue
    }
  }
</script>

<style scoped>

</style>