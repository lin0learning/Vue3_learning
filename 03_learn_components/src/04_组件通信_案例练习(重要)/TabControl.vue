<template>
    <div class="container">
        <template v-for="(item,index) in titles" :key="item">
            <div 
              class="box" 
              @click="changeIndex(index)" 
              :class="{active: this.currentIndex === index}"
            >
                <p>{{item}}</p>
            </div>
        </template>
    </div>
</template>

<script>

  export default {
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        changeIndex(index) {
            // console.log(index);
            this.currentIndex = index
            // 1. 向父组件发送index参数
            this.$emit("cgIndex",index)
        }
    },
    props: {
        titles: {
            type: Array,
            default: () => ['demo']
        }
    }
  }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .container {
        display: flex;
    }
    .box {
        flex: 1;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    .active {
        color: red;
        font-weight: 700;
        border-bottom: 1px solid red;
    }
</style>