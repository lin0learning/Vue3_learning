const app = createApp({
    data() {
      return { a: 1 }
    },
    computed: {
      // 仅读取
      aDouble() {
        return this.a * 2
      },
      // 读取和设置
      aPlus: {
        get() {
          return this.a + 1
        },
        set(v) {
          this.a = v - 1
        }
      }
    }
  })
  
  const vm = app.mount('#app')
  console.log(vm.aPlus) // => 2
  vm.aPlus = 3
  console.log(vm.a) // => 2
  console.log(vm.aDouble) // => 4