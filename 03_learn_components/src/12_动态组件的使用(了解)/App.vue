<template>
    <div class="app">
        <div class="nav">
            <template v-for="(item, index) in titles" :key="item">
                <button @click="clickBtn(item,index)" :class="{ active: item === this.currentPage }">{{ item }}</button>
            </template>
        </div>
    </div>
    <!-- 1.  v-if判断 -->
    <!-- <template v-if="currentIndex  === 0">
        <home-vue></home-vue>
    </template>
    <template v-else-if="currentIndex  === 1">
        <about-vue></about-vue>
    </template>
    <template v-else-if="currentIndex  === 2">
        <category-vue></category-vue>
    </template> -->

    <!-- 2. component动态组件 -->
    <!-- 可以通过此标签发送数据 -->
    <component :is="currentPage" name="liclo" @homeBtn="homeClick"></component>
</template>

<script>
import About from './views/About.vue'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
export default {
    data() {
        return {
            titles: ["Home", "About", "Category"],
            currentPage: "Home",
            currentIndex: 0
        }
    },
    components: {
        About,
        Home,
        Category
    },
    methods: {
        clickBtn(item, index) {
            this.currentPage = item
            this.currentIndex = index
        },
        homeClick(payload) {
            console.log(payload)
        }
    },
}
</script>

<style scoped>
.nav {
    display: flex;
}

.nav button {
    flex: 1;
}

.active {
    color: red;
}
</style>