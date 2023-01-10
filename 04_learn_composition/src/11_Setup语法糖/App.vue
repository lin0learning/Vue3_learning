<template>
    <div class="app">
        <div>Message: {{ message }}</div>
        <button @click="changeMessage">changeMessage</button>
        <info-demo 
            name="liclo" 
            :age="20" 
            @btn-click="getClick" 
            ref="funExpose">
        </info-demo>
    </div>
</template>

<script setup>
    import { ref,onMounted } from 'vue';
    import infoDemo from './InfoDemo.vue'
    // 1. 定义响应式数据
    const message = ref("Hello World")
    // console.log(message);

    // 2. 定义函数
    function changeMessage() {
        message.value = "Hello Vue"
    }
    function getClick(payload) {
        console.log(payload);
    }
    // 4. 获取组件实例
    const funExpose = ref()
    onMounted(() => {
        // console.log(funExpose)
        funExpose.value.foo()
    })
</script>

<style scoped>
</style>