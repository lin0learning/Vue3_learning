<template>
  <div>
    <h2>{{state}}</h2>
    <button @click="btnClick">btnClick</button>
  </div>
</template>

<script>
    import { reactive, toRef } from 'vue'
  export default {
    setup() {
        const state = reactive({
            name: "liclo",
            foo: 16
        })
        // toRef 可以用来为源响应式对象上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接。
        const fooRef = toRef(state, 'foo')
        const btnClick = (() =>{
            fooRef.value++
            console.log(fooRef.value);
        })
        return {
            state,
            fooRef,
            btnClick
        }
    }
  }
</script>

<style scoped>

</style>