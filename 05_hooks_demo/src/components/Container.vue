<template>
  <!-- 1. header -->
  <room-header :title="areaData.title" :subtitle="areaData.subtitle"></room-header>

  <!-- 2. Info -->
  <div class="container">
    <template v-for="item in areaData.list" :key="item.id">
        <room-info :item-data="item"></room-info>
    </template>
  </div>
</template>

<script setup>
import roomHeader from './roomHeader.vue'
import roomInfo from './roomInfo.vue'
defineProps({
  areaData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>