<template>
  <div>
    <h2>{{info}}</h2>
    <button @click="emitBtn">点击发送更改数据请求</button>
  </div>
</template>

<script>


  export default {
    props: {
        info: {
            type: Object,
            default: {}
        }
    },
    emits: ["getInfo"],
    setup(props, content) {
        const emitBtn = (() => {
            content.emit("getInfo", "dekki")
        })
        return {
            emitBtn
        }
    }
  }
</script>

<style scoped>

</style>