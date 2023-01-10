<template>
  <div class="home">
    <div class="sub-banner">
      <router-link to="recommend">推荐</router-link>
      <router-link to="ranking">排行榜</router-link>
    </div>
    <div class="contaniner">
      <router-view></router-view>
    </div>
    <div class="logout"><button @click="clickLogout">退出登录</button></div>
  </div>
</template>

<script setup>
  function clickLogout() {
    localStorage.removeItem("token")
  }
</script>

<style scoped lang="less">
.router-link-active {
  color: skyblue;
}

a {
  text-decoration: none;
  color: #000;
}

.home {
  font-size: 20px;
  width: 800px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  .sub-banner {
      height: 30px;
      font-size: 20px;
      line-height: 30px;
      background-color: #efefef;
      text-align: left;
      a {
        margin-right: 30px;
      }
  }
  .logout {
    margin-top: 100px;
  }
}
</style>