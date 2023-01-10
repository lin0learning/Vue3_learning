<template>
  <div>
    <nav-bar-vue>
        <template v-slot:left>
            <div>返回</div>
        </template>
        <template v-slot:center>
            <div>Search Bar</div>
        </template>
        <template v-slot:right>
            <div>登录</div>
        </template>
    </nav-bar-vue>

    <!-- 插槽使用参数 -->
    <nav-bar-vue>
        <template v-slot:[position]>
            <a>Position</a>
        </template>
    </nav-bar-vue>
    <button @click="position = 'left'">left</button>
    <button @click="position = 'center'">center</button>
    <button @click="position = 'right'">right</button>
  </div>
</template>

<script>
import navBarVue from './navBar.vue'
  export default {
    data() {
        return {
            position: 'left',

        }
    },
    components: {
        navBarVue
    }
  }
</script>

<style>

</style>