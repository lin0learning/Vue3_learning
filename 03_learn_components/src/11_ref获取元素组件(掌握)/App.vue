<template>
  <div>
    <div ref="div1">content 1</div>
    <button ref="btn" @click="logref">click This btn</button>
  </div>
  <demo-vue ref="component"></demo-vue>
</template>

<script>
import demoVue from './demo.vue'
  export default {
    components: {
        demoVue
    }
    ,methods: {
        logref() {
            // div
            console.log(this.$refs.div1)
            // button
            console.log(this.$refs.btn);
            // Proxy
            console.log(this.$refs.component);
        }
    },
  }
</script>

<style>

</style>