<template>
    <div class="app">
        <h2 ref="hRef">H2 标签</h2>
        <button ref="btnRef">button 标签</button>
        <demo ref="compRef"></demo>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import demo from './demo.vue'
export default {
    components: {
        demo
    },
    setup() {
        const hRef = ref()
        const btnRef = ref()
        const compRef = ref()
        onMounted(() => {
            console.log(hRef.value);
            console.log(btnRef.value);
            console.log(compRef.value);
        })

        return {
            hRef,
            btnRef,
            compRef
        }
    }
}
</script>

<style scoped>
</style>