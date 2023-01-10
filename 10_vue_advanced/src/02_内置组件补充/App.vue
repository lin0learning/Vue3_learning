<template>
  <div class="app">
    <div class="hello">
        <p class="content">
            <teleport to="body">
                <hello-world />
            </teleport>
        </p>
        <Teleport to="#modals">
            <div>A</div>
        </Teleport>
        <Teleport to="#modals">
            <div>B</div>
        </Teleport>
    </div>
  </div>
</template>

<script setup>
import HelloWorld from './HelloWorld.vue';
</script>

<style scoped lang="less">

</style>