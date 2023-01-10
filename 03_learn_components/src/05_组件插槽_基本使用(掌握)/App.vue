<template>
  <div>
    <!-- 1. 默认无传递内容 -->
    <slot-demo-vue></slot-demo-vue>

    <!-- 2. button -->
    <slot-demo-vue><button>按钮</button></slot-demo-vue>

    <!-- 3. img -->
    <slot-demo-vue><img src="@/assets/logo.png" alt=""></slot-demo-vue>

    <!-- 4. a -->
    <slot-demo-vue><a href="#">search</a></slot-demo-vue>
  </div>
</template>

<script>
import slotDemoVue from './slotDemo.vue'
  export default {
    components: {
        slotDemoVue
    }
  }
</script>

<style>

</style>