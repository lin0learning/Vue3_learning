<template>
  <div class="container">
    <img src="../assets/dark.jpg" class="c-box">
    <div class="c-para">{{textcontent}}</div>
  </div>
</template>

<script>

  export default {
    data() {
        return {
            textcontent: "The Random Picture"
        }
    },
  }
</script>

<style scoped>
    .container {
        width: 400px;
        height: 100%;
        text-align: center;
        margin: 10px auto;
    }
    .c-box {
        width: 100%;
    }
    .c-para {
        width: 400px;
        height: 30px;
        color: rgb(30, 114, 114);
        font-size: 20px;
        text-align: center;
        border-radius: 5px;
        text-align: center;
        background-color: #efefef;
        margin-top: 10px;
    }
</style>