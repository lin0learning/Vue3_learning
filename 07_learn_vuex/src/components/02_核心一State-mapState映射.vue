<template>
    <div class="home">
        <!-- 1. 在模板中使用多个State -->
        <div>counter: {{$store.state.counter}}</div>
        <div>name: {{$store.state.name}}</div>
        <div>level: {{$store.state.level}}</div>
        <!-- 2. Options API 使用mapState映射多个state状态 -->
        <hr>
        <!-- <div>name: {{ name }}</div>
        <div>level: {{ level }}</div>
        <div>avator: {{ avator }}</div> -->
        <!-- 对象写法 -->
        <!-- <div>name: {{ sName }}</div> -->

        <!-- 3. Composition API -->
        <div>name: {{ name }}</div>
        <div>level: {{ level }}</div>
    </div>
</template>

<script>
    // options API
    import { mapState } from 'vuex';
    export default {
        computed:{
            // 数组写法
            ...mapState(["name", "level", "avator"]),
            // 对象写法
            ...mapState({
                sName: state => state.name,
                sLevel: state => state.level
            })
        }
    }
</script>

<script setup>
    // composition API
    import { toRefs,computed } from 'vue';
    import { useStore, mapState } from 'vuex';

    // 1.一步步完成
    // const { name, level } = mapState(["name", "level"])
    // const store = useStore()
    // const cName = computed(name.bind({ $store: store }))
    // const cLevel = computed(level.bind({ $store: store }))

    // 2. 直接对store.state进行解构(推荐)
    const store = useStore()
    const { name, level } = toRefs(store.state)
</script>

<style scoped>
</style>