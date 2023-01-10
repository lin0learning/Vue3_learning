<template>
  <div class="container">
    展示的信息：
    <slot>slot插槽默认值</slot>
  </div>
</template>

<script>

  export default {
    
  }
</script>

<style scoped>
    .container {
        width: 600px;
        margin: 0 auto;
        border: 1px solid #666;
        text-align: center;
    }
</style>