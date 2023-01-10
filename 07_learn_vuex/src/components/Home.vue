<template>
  <div class="home">
    <!-- 1. 使用module中的state时，需要state.moduleName.xxx -->
    <div>User模块中的userCount: {{$store.state.user.userCount}}</div>
    <!-- 2. 使用module中的getters时，直接getters.xxx -->
    <!-- <div>User模块中的calcCount: {{$store.getters.calcCount}}</div> -->
    <!-- 若添加了namespaced:true属性 -->
    <div>User模块中的calcCount: {{$store.getters["user/calcCount"]}}</div>
    <button @click="incrementUser">addUserCount</button>
  </div>
</template>

<script>

  export default {
    methods: {
      incrementUser() {
        // 因为添加了namespaced:true属性，需要更改对象名称
        this.$store.dispatch("user/calcAction")
      }
    },
  }
</script>

<style scoped>

</style>