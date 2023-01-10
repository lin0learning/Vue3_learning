<template>
  <div class="swiper">
    <div class="imgs">
        <img :src="url" v-for="(url,index) in imgs" :key="index">
    </div>
    <div class="ratios">
        <input type="radio" name="imgs">
        <input type="radio" name="imgs">
        <input type="radio" name="imgs">
    </div>
  </div>
</template>

<script>

  export default {
    data() {
        return {
            count: -1,
            imgs: [
                require("../../assets/1.png"),
                require("../../assets/2.png"),
                require("../../assets/3.png"),
            ]
        }
    },
  }
</script>

<style scoped>
    .swiper {
        width: 720px;
        height: 405px;
        margin: 10px auto;
        position: relative;
    }
    .imgs img {
        width: 100%;
        position: absolute;
    }
    .ratios {
        width: 80px;
        position: absolute;
        z-index: 10;
        margin-left: 46%;
    }
    .active {
        display: none;
    }
</style>