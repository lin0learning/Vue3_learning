<template>
    <div>
        <home-vue></home-vue>
    </div>
</template>

<script>
import HomeVue from './Home.vue'
import eventBus from './script/event-bus'
export default {
    components: {
        HomeVue
    },
    created() {
        // 事件监听 接收并监听名为"whyEvent"的事件
        eventBus.on("whyEvent", (name, age, height) => {
        console.log("whyEvent事件在app中监听: ", name, age, height)
        this.message = `name:${name}, age:${age}, height:${height}`
      })
    }
}
</script>

<style>
</style>