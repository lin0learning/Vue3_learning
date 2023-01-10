<template>
    <div class="home">
        <div>counter: {{$store.state.counter}}</div>
        <button @click="increment">counter++</button>
        <div>name: {{ $store.state.name}}</div>
        <button @click="changename('dekki')">change name</button>
    </div>
</template>

<script>
    // options API
    import { mapMutations } from 'vuex'
    export default {
        methods: {
            ...mapMutations(["increment", "changename"])
        },
    }
</script>

<style scoped>
</style>