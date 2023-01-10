<template>
  <div class="app">

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

onMounted(() => {
  const scrollY = ref(0)
  document.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => { }) // 离开当前组件时移除事件监听
})
watch(scrollY, (newVal) => {
  console.log(newVal)
}, { immediate: true })
</script>

<style scoped>
.app {
  height: 1800px;
}
</style>