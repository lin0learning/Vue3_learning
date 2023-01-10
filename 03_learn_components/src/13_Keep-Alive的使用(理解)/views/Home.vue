<template>
  <h2> Home Page</h2>
  <button @click="counter++">点击增加：</button>
  <p>{{counter}}</p>
</template>

<script>

  export default {
    data() {
      return {
        counter: 0
      }
    },
    name: "HomePage"
  }
</script>

<style scoped>

</style>