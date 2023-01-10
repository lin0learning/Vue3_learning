<template>
  <div class="order">
    <div>商品订单:</div>
    <ul>
      <li>订单1</li>
      <li>订单2</li>
      <li>订单3</li>
      <li>订单4</li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.order {
  text-align: left;
  width: 800px;
  margin: 10px auto;
  font-size: 18px;
  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  ul {
    padding-left: 80px;
    font-size: 20px;
  }
  li {
    margin-bottom: 10px;
    border-bottom: 1px solid #efefef;
  }
}
</style>