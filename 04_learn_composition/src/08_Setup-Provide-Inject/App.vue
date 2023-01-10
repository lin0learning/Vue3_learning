<template>
  <div class="app">
    <div>{{name}}</div>
    <button @click="clickbtn">btn</button>
  </div>
  <demo-vue></demo-vue>
</template>

<script>
import demoVue from './demo.vue'
import { provide, ref } from 'vue'
  export default {
    components: {
        demoVue
    },
    setup() {
        const name = ref("liclo")
        provide("name", name)
        provide("age", 18)
        const clickbtn = (() => {
            name.value = "Dream"
        })
        return {
            name,
            clickbtn
        }
    }
  }
</script>

<style scoped>

</style>