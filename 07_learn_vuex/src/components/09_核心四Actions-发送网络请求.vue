<template>
  <div class="home">
    <ul>
      <template v-for="(item,index) in $store.state.banner" :key="index">
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