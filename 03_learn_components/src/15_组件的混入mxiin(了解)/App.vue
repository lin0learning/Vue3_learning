<template>
  <div>
    <home></home>
    <about></about>
    <category></category>
  </div>
</template>

<script>
import About from './views/About.vue'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
  export default {
    components: {
        About,
        Home,
        Category
    },
  }
</script>

<style scoped>

</style>