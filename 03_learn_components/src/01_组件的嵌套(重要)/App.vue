<template>
    <div>
        <!-- 1. nav -->
        <div class="nav">
            <div class="title">This is the top container</div>
            <div class="search">
                <input type="text" placeholder="search">
                <button>搜索</button>
            </div>
        </div>
        <!-- 2.  swiper-->
        <swiper-vue></swiper-vue>
    </div>
</template>

<script>
import swiperVue from './swiper.vue'
export default {
    components:{
        swiperVue,
    }
}
</script>

<style scoped>
    .title {
        background-color: #efefef;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        text-align: center;
    }
    
</style>