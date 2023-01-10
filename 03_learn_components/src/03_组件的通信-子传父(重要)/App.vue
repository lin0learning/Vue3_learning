<template>
    <div>
        当前计数: {{ counter }}
        <appdecre-vue @decre="decrement"></appdecre-vue>
        <appincre-vue @incre="increment"></appincre-vue>
    </div>
</template>

<script>
import AppdecreVue from './Appdecre.vue'
    import AppincreVue from './Appincre.vue'
    export default {
        components: {
            AppdecreVue,
            AppincreVue
        },
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            increment(count) {
                this.counter += count
            },
            decrement(count) {
                this.counter -= count
            }
        },
}
</script>

<style>
</style>