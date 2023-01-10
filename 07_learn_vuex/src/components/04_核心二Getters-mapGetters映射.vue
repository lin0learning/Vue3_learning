<template>
    <div class="home">
        <!-- <h2>doubleCounter: {{ doubleCounter }}</h2> -->
        <h2>message: {{  message }}</h2>
    </div>
</template>

<script>
    // options API
    import { mapGetters } from 'vuex';
    export default {
        // computed: {
        //     ...mapGetters(["doubleCounter", "message"])
        // }
    }
</script>

<script setup>
    // composition API
    import { computed, toRefs } from 'vue';
    import { mapGetters, useStore } from 'vuex';
    const store = useStore()

    // 1. 使用mapGetters
    // const { message : messageFn } = mapGetters(["message"])
    // const message = computed(messageFn.bind({ $store:store }))

    // 2. 解构，并使用ref包裹
    // const { message, doubleCounter } = toRefs(store.getters)
    // 3. 针对某一个getters属性使用computed
    const message = computed(() => store.getters.message)
</script>

<style scoped>
</style>