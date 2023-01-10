<template>
    <h2>{{ title }}</h2>
    <div class="box">
        <div class="counter-info">当前计数：{{ counter }}</div>
        <div class="clickbtn">
            <button @click="decrement">-1</button>
            <button @click="increment">+1</button>
        </div>
    </div>
    <div class="dividing-line">-------------------局部组件 TryMac--------------------</div>
    <try-mac></try-mac>
</template>

<script>
import TryMacVue from './TryMac.vue'
export default {
    data() {
        return {
            title: "Hello Vue/CLI",
            counter: 0
        }
    },
    methods: {
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        }
    },
    // 注册 TryMac 局部组件
    components: {
        "try-mac": TryMacVue,
    },
}
</script>

<style>
button {
    border: none;
    cursor: pointer;
    outline: none;
}
.box {
    width: 800px;
    height: 100px;
    text-align: center;
    margin: 20px auto;
}
.counter-info {
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 10px;
}
.clickbtn button {
    width: 30px;
    height: 30px;
    background: #2babb4e7;
    line-height: 30px;
    border-radius: 10px;
    font-size: 16px;
    color: aliceblue;
}
.clickbtn button:nth-child(1) {
    margin-right: 10px;
}
.dividing-line {
    width: 400px;
    margin: 0 auto;
}
</style>