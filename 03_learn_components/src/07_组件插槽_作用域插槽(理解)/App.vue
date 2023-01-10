<template>
    <div class="app">
        <tab-control-vue :titles="['One', 'Two', 'Three']" @cgIndex="getIndex"></tab-control-vue>
    </div>
    <h1>{{ contentInfo[currentIndex] }}</h1>

    <!-- v-slot button -->
    <tab-control-vue :titles="['One', 'Two', 'Three']" @cgIndex="getIndex">
        <template v-slot:default="props">
            <button>{{ props.item }}</button>
        </template>
    </tab-control-vue>

    <!-- v-slot a -->
    <tab-control-vue :titles="['One', 'Two', 'Three']" @cgIndex="getIndex">
        <template #default="props">
            <a href="#">{{ props.item }}</a>
        </template>
    </tab-control-vue>

    <!-- 组件的标签当作插槽的模板使用 -->
    <tab-control-vue :titles="['One', 'Two', 'Three']" @cgIndex="getIndex" #default="props">
        <a href="#">{{ props.item }}</a>
    </tab-control-vue>
</template>

<script>
import TabControlVue from './TabControl.vue'
export default {
    components: {
        TabControlVue
    },
    data() {
        return {
            contentInfo: ['Content 1', "Content 2", "Content 3"],
            currentIndex: 0
        }
    },
    methods: {
        getIndex(index) {
            this.currentIndex = index
        }
    },
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #000;
    }
</style>