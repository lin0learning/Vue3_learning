<template>
  <div>
    <custom-input v-model="searchText"></custom-input>
  </div>
</template>

<script>
import customInput from './custom-input.vue'
  export default {
    components: {
        customInput
    },
    data() {
        return {
            searchText: 'custom text'
        }
    },
  }
</script>

<style scoped>

</style>