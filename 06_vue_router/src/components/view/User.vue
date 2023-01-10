<template>
  <div>
    <div>{{$route.params.id}}</div>
  </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute()
    console.log(route.params.id)
</script>

<style scoped>

</style>