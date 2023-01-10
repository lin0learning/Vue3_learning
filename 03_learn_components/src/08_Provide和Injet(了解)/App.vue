<template>
  <div>
    <home-vue></home-vue>
  </div>

</template>

<script>
import HomeVue from './Home.vue'
import { computed } from 'vue'
export default {
  data() {
    return {
      message: "Homebanner"
    }
  },
  components: {
    HomeVue,
  },
  provide() {
        return {
            message: computed(() => this.message)
        }
    }
}
</script>

<style>
</style>