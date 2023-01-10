<template>
    <div class="header">
        <div class="title">{{ title }}</div>
        <div class="subtitle">{{ subtitle }}</div>
    </div>
</template>

<script setup>
    defineProps({
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        }
    })
</script>

<style scoped lang="less">
.header {
    .title {
        font-size: 20px;
        color: #000;
        font-weight: 700;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 10px;
    }

    .subtitle {
        color: #222;
        font-family: Arial, Helvetica, sans-serif;
    }
}
</style>