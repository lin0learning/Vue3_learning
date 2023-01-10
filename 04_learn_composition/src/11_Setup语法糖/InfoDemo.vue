<template>
  <div>
    <div>name: {{name}} - age: {{age}}</div>
    <button @click="changeAge">button-age</button>
  </div>
</template>

<script setup>
  // 1. defineProps
  const props = defineProps({
    name: {
      type: String,
      default: ''
    },
    age: {
      type: Number,
      default: 0
    }
  })

  // 2. defineEmits
  const emit = defineEmits(["btnClick"])
  function changeAge() {
    emit("btnClick", 24)
  }

  // 3. defineExpose
  function foo() {
    console.log("foo function");
  }
  defineExpose({
    foo
  })
</script> 

<style scoped>

</style>