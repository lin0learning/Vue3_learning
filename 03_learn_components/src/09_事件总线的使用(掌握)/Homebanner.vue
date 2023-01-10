<template>
  <div>
    <h2>(二层) {{message}}</h2>
    <button @click="bannerClick">按钮</button>
  </div>
</template>

<script>
  import eventBus from './script/event-bus'
  export default {
    data() {
      return {
        message: "Homenbanner"
      }
    },
    methods: {
      // 点击该二层组件会发送一个名为"whyEvent"的监听事件
      bannerClick() {
        eventBus.emit("whyEvent", "why", 18, 1.88)
      }
    },
  }
</script>

<style>

</style>