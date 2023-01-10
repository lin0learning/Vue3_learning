<template>
  <div class="home">
    <div>pinia count: {{counterStore.count}}</div>
    <button @click="addCount">add Count</button>
  </div>
</template>

<script setup>
    import useCounter from '@/stores/couter';

    const counterStore = useCounter()
    function addCount() {
      counterStore.count++
    }
</script>

<style scoped>

</style>