<template>
    <div class="app">
        <h2 class="header">This is the main Vue page.</h2>
        <div class="banner">
            <router-link to="/home">发现音乐</router-link>
            <router-link to="/about">我的音乐</router-link>
            <router-link to="/order">订单</router-link>
            <router-link to="/login">登陆</router-link>
        </div>
        <router-view></router-view>

        <!-- 跳转 -->
        <span @click="returnHome" class="homeTips tips">首页</span>
        <span @click="returnAbout" class="aboutTips tips">关于</span>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter()

    function returnHome() {
        router.push({
            path: "/home"
        })
    }
    function returnAbout() {
        router.push({
            path: "/about",
            query:{
                name: "liclo",
                age: 20
            }
        })
    }
</script>

<style scoped>
.app {
    /* text-align: center; */
    font-family: Arial, Helvetica, sans-serif;
}

.router-link-active {
    color: red;
}

.header {
    width: 400px;
    margin: 10px auto;
    text-align: center;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: #000;
    margin-right: 30px;
}

a:hover {
    background-color: beige;
}

.banner {
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    background-color: #efefef;
    text-align: center;
}
.tips {
    position: fixed;
    width: 50px;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    background-color: skyblue;
    color: #fff;
    border-radius: 5px;
    text-align: center;
}
.homeTips {
    left: 0px;
    top: 200px;
}
.aboutTips {
    left: 0px;
    top: 250px;
}
</style>