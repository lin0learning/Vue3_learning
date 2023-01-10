<template>
  <div class="demo1">
    <input v-focus type="text">
  </div>
</template>

<!-- 1. options API写法 局部指令 -->
<!-- <script>

export default {
directives: {
    focus: {
        mounted(el) {
            el?.focus()
        }
    }
}
}
</script> -->

<!-- 2.1. Vue3 Composition API写法 局部指令 -->
<!-- <script>

const defineDir = {
    focus: {
        mounted(el){
            el.focus()
        }
    }
}
export default {
    directives:defineDir,
    setup() {}
}

</script> -->
<!-- 2.2 Vue3.2 setup 语法糖 -->
<script setup>
    // const vFocus = {
    //     mounted(el) {
    //         el.focus()
    //     }
    // }
</script>

<style scoped>

</style>