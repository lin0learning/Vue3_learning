<template>
  <div class="home">
    <div>This Page: {{$store.state.page}}</div>
    <button @click="addPage">Add Page</button>
    <div>Book Name: {{ $store.state.bookName }}</div>
    <button @click="changeBookName">Change BookName</button>
  </div>
</template>

<script>
  //options API
  export default {
    methods: {
      addPage() {
        this.$store.dispatch("increPageAction")
      },
      changeBookName() {
        this.$store.dispatch("cgbkNameAction", "你不知道的JavaScript")
      }

    },
  }

</script>
<script setup>
  // composition API
  // import { useStore } from 'vuex';
  // const store = useStore();
  // store.dispatch("increPageAction")
</script>

<style scoped>

</style>