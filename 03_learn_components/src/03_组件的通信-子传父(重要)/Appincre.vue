<template>
  <div class="decrement">
    <button @click="incre(1)">+1</button>
    <button @click="incre(5)">+5</button>
    <button @click="incre(10)">+10</button>
  </div>
</template>

<script>

  export default {
    emits:['incre'],
    methods: {
        incre(count) {
            this.$emit('incre', count)
        }
    },
  }
</script>

<style>

</style>