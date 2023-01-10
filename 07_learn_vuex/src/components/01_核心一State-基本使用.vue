<template>
    <div class="home">
        <h2>Home当前计数: {{ $store.state.counter }}</h2>
        <h2>Options当前计数: {{ getStoreCounter }}</h2>
        <h2>Composition当前计数: {{ counter }}</h2>
        <button @click="increment">counter+1</button>
    </div>
</template>

<script>
    // options API
    export default {
        computed: {
            getStoreCounter() {
                return this.$store.state.counter;
            }
        }
    }
</script>

<script setup>
    // composition API
    import { toRefs } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore()
    // 进行解构
    const { counter } = toRefs(store.state)

    // 对store中counter状态改变通过提交mutation
    function increment() {
        store.commit("increment")
    }
</script>

<style scoped>
</style>