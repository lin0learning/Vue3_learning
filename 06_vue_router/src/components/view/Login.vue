<template>
  <div class="login">
    <h2>登陆界面</h2>
    <button class="loginbtn" @click="loginBtn">点击登陆</button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter()
  function loginBtn() {
    // 实际登录向服务器发送POST请求，服务器返回token
    localStorage.setItem("token", "liclo")
    
    // 跳转到order页面
    router.push("/order")
  }
</script>

<style scoped lang="less">
.login {
    text-align: left;
    width: 800px;
    margin: 10px auto;
    .loginbtn {
        border: none;
        background-color: #efefef;
        color: #333;
        border-radius: 5px;
        padding: 5px 10px;
        font-size: 18px;
        cursor: pointer;
    }
}
</style>