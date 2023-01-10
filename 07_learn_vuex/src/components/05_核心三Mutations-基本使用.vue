<template>
    <div class="home">
        <div>counter: {{$store.state.counter}}</div>
        <button @click="cincrement">counter++</button>
        <div>name: {{ $store.state.name}}</div>
        <button @click="cname">change name</button>
    </div>
</template>

<script>
    // options API
    export default {
        methods: {
            cincrement() {
                this.$store.commit("increment")
            },
            cname() {
                this.$store.commit("changename", "dekki")
            }
        },
    }
</script>

<style scoped>
</style>