<template>
  <div class="home">
    <ul>
      <!-- 需要从fetch模块中获取数据 state.moduleName.xxx -->
      <template v-for="(item,index) in $store.state.fetch.banner" :key="index">
        <li>fetch: {{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch("fetchAction")
    },
  }
</script>

<style scoped>

</style>