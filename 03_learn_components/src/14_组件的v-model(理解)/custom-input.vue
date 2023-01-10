<template>
  <div>
    <input :value="modelValue" @input="$emit('updata:modelValue', $event.target.value)">
  </div>
</template>

<script>

  export default {
    props:['modelValue'],
    emits:['update:modelValue']
  }
</script>

<style scoped>

</style>