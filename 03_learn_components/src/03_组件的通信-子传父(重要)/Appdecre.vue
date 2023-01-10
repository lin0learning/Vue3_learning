<template>
  <div>
    <button @click="decre(1)">-1</button>
    <button @click="decre(5)">-5</button>
    <button @click="decre(10)">-10</button>
  </div>
</template>

<script>

  export default {
    emits: ['decre'],
    methods: {
        decre(count) {
            this.$emit('decre', count)
        }
    },
  }
</script>

<style>

</style>