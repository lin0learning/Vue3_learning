<template>
  <div class="home">
    <div>This Page: {{$store.state.page}}</div>
    <button @click="increPageAction">Add Page</button>
    <div>Book Name: {{ $store.state.bookName }}</div>
    <button @click="cgbkNameAction('你不知道的JavaScript')">Change BookName</button>
  </div>
</template>

<script>
  //options API
import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions(["increPageAction", "cgbkNameAction"])
    },
  }

</script>

<style scoped>

</style>