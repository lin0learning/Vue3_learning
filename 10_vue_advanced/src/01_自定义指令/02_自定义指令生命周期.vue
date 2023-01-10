<template>
  <div class="demo2">
    <input type="text" v-display v-if="show" /><br>
    <button @click="changeStatus">{{show?'隐藏':'显示'}}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true)
const changeStatus = () => {
    show.value = !show.value
}
const vDisplay = {
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted(el) {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeUnmount() {
        console.log("beforeUnmount");
    },
    unmounted() {
        console.log("unmounted");
    }
}
</script>

<style scoped>

</style>