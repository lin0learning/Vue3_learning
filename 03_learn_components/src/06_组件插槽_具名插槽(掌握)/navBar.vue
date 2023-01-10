<template>
  <div class="nav">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="center">
        <slot name="center"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

  export default {
    
  }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .nav {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    .left {
        width: 80px;
        background-color: rgb(94, 190, 126);
    }
    .center {
        flex: 1;
        background-color: rgb(32, 116, 165);
    }
    .right {
        width: 80px;
        background-color: rgb(100, 175, 150);
    } 
</style>