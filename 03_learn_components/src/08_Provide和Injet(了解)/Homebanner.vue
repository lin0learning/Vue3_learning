<template>
  <div>
    <h2>(二层级) {{message.value}}</h2>
    <!--  injected property "message" is a ref and will be auto-unwrapped and no longer needs `.value` in the next minor release. -->
  </div>
</template>

<script>
  export default {
    inject: ["message"]
    
  }
</script>

<style>

</style>