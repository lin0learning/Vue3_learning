<template>
  <h2>
    Home Page
  </h2>
  <div>{{name}}</div>
  <button @click="homeclick">按钮button</button>
</template>

<script>

  export default {
    props:{
      name: {
        type: String,
        default: ''
      }
    },
    emits: ['homeBtn'],
    methods: {
      homeclick() {
        this.$emit('homeBtn', "home")
      }
    },
  }
</script>

<style scoped>

</style>