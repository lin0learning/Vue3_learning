<template>
  <div class="demo3">
    <div v-lic.abc.cba.nba="message">示例文本</div>

    <div v-unit="unit">{{ 111 }}</div>
  </div>
</template>

<script setup>
const message = "示例字符串"

// const unit = "$"
const unit = ""

const vLic = {
  mounted(el, bindings) {
    console.log(bindings)
    el.textContent = bindings.value
  }
}
</script>

<style scoped lang="less">

</style>