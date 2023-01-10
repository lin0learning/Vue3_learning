<template>
  <div class="home">
    <div>page: {{infoStore.page}}</div>
    <button @click="infoStore.addPage">addPage</button>
    <button @click="infoStore.addPageOn(100)">addPageOn-(num)</button>
    <ul>banners:
      <template v-for="(item,index) in infoStore.banners" :key="index">
        <li>{{ item.title}}</li>
      </template>
    </ul>
    <ul>recommends:
      <template v-for="(item,index) in infoStore.recommends" :key="index">
        <li>{{item.title}}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import useInfo from '@/stores/info'

  const infoStore = useInfo()
  onMounted(() => {
    const infoStore = useInfo()
    infoStore.getInfo().then(() => {
      console.log("通过fetch请求了data")
    })
  })

</script>

<style scoped>

</style>