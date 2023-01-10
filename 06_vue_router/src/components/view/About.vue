<template>
  <div class="about">
    <div>我喜欢的音乐</div>
    <router-link to="/user/112233">User</router-link>
    <h4>About query: {{$route.query}}</h4>
    <button @click="backClick">返回</button>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter()
  function backClick() {
    router.go(-1)
  }
</script>

<style scoped>
.about {
  font-size: 20px;
  width: 800px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
}
</style>