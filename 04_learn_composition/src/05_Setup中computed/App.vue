<template>
  <div class="app">
    <button>{{scoreLevel}}</button>
  </div>
</template>

<script>
    import { computed, ref } from 'vue'
  export default {
    setup() {
        const score = ref(89)
        const scoreLevel = computed(() => {
            return score.value >=60?"及格" : "不及格"
        })
        return {
            score,
            scoreLevel
        }
    }
  }
</script>

<style scoped>
    .app {
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>