<template>
    <div class="app">
        <div class="nav">
            <template v-for="(item, index) in titles" :key="item">
                <button @click="clickBtn(item,index)" :class="{ active: item === this.currentPage }">{{ item }}</button>
            </template>
        </div>
    </div>
    <keep-alive include="HomePage">
        <component :is="currentPage"></component>
    </keep-alive>
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