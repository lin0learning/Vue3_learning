<template>
  <div>
    <div>{{message}}</div>
    <button @click="message = 'Hello Vue'">btnClick1</button>
  </div>
  <div>
    <demo-vue v-if="isShowHome"></demo-vue>
    <button @click="isShowHome = !isShowHome">btnclick2</button>
  </div>
</template>

<script>
    import demoVue from './demo.vue'
  export default {
    data() {
        return {
            message: "Hello World",
            isShowHome: true
        }
    },
    components: {
        demoVue
    },
    // 1. 组件被创建之前
    beforeCreate() {
        console.log("beforeCreate")
    },
    // 2. 组件被创建完成
    created() {
        console.log("created")
    },
    // 3. 组件template准备被挂载
    beforeMount() {
        console.log("beforeMount");
    },
    // 4. 组件template被挂载
    mounted() {
        console.log("mounted")
    },
    // 5. 数据发生改变
    //  5.1 准备更新DOM
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    //  5.2 更新DOM
    updated() {
        console.log("updated")
    },
  }
</script>

<style>

</style>