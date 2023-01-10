<template>
  <div>
    <h2> {{ message }}</h2>
    <button @click="changeMessage">Change 1</button>
    <div>------------------------</div>
    <h2>{{account.name}} - {{account.password}}</h2>
    <button @click="changeAccount">Change 2</button>
    <div>------------------------</div>
    <h2>{{counter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
  export default {
    setup() {
        // 1. 定义普通数据(String), 可以使用，但非响应性
        let message = "Hello Vue"
        const changeMessage = (()=> {
            message = "Hello World",
            console.log(message);
        })

        // 2. 定义响应性数据
        //    2.1 reactive函数
        let account = reactive({
            name: "liclo",
            password: "123456"
        })
        const changeAccount = (()=> {
            account.name = "dekki"
        })
        //    2.2 ref函数
        let counter = ref(0)
        const increment = (()=> {
            counter.value++
            // note: ref 是浅层解包
        })
        return {
            message,
            changeMessage,
            account,
            changeAccount,
            counter,
            increment
        }
    }
  }
</script>

<style scoped>

</style>