<template>
  <div>
    <ul>
        <li>姓名：{{name}}</li>
        <li>年龄：{{age}}</li>
        <li>身高：{{height}}</li>
        <li>{{showMessage}}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    props:{
        name: {
            type: String,
            default: "uname"
        },
        age: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        },
        friend: {
          type: Object,
          default: () => ({name: "james"})
        },
        hobbies: {
          type: Array,
          default: () => ["唱","跳", "rap"]
        },
        showMessage: {
          type: String,
          default: "show message"
        }
    }
  }
</script>

<style>

</style>