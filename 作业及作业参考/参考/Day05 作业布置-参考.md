# Day05 作业布置

## 一. 完成上课所有的代码练习







## 二. 如何进行非父子组件的通信？（整理除了Vuex/Pinia其他方式）

* 全局事件总线

  * 先安装库   `npm install hy-event-store`

  * 封装一个工具eventbus.js

  * 在组件A中 通过eventBus.on监听事件

  * 在组件B中通过eventBus.emit发射事件

    

* Provide/Inject用于非父子组件之间共享数据

  *  父组件有一个 provide 选项来提供数据

  * 子组件有一个 inject 选项来开始使用这些数据(注入)

  * ```
    注意点:
    1)provide选项一般写成函数
    2) 处理响应式数据:通过computed函数,computed返回的是一个ref对象，需要取出其中的value来使用
    ```

    
    

    



## 三. 什么是生命周期函数？说说你对它回调的理解

* 生命周期函数是一些钩子函数（回调函数），在某个时间会被Vue源码内部进行回调
* 通过对生命周期函数的回调，我们可以知道目前组件正在经历什么阶段

* Vue的生命周期函数

  * beforeCreate :组件实例在创建之前

  * created: 组件被创建完成

    * 可以发送网络请求

    * 可以事件监听

    * this.$watch()

      

  * beforeMount : 组件template准备被挂载

  * mounted :组件template已经被挂载

    * 可以获取DOM,可以使用DOM

     

  * beforeUpdate:  准备更新DOM
  * updated: 更新DOM,根据最新数据生成新的VNode,生成新的虚拟DOM,转换为真实的DOM

  

  * beforeUnmount:  卸载之前

  * unmounted: DOM 元素被卸载完成

    * 回收操作(取消事件监听)

    

```js
export default {
    // 1.组件被创建之前
    beforeCreate() {
      console.log("beforeCreate")
    },
    // 2.组件被创建完成
    created() {
      console.log("created")
      console.log("1.发送网络请求, 请求数据")
      console.log("2.监听eventbus事件")
      console.log("3.监听watch数据")
    },
    // 3.组件template准备被挂载
    beforeMount() {
      console.log("beforeMount")
    },
    // 4.组件template被挂载: 虚拟DOM -> 真实DOM
    mounted() {
      console.log("mounted")
      console.log("1.获取DOM")
      console.log("2.使用DOM")
    },
    // 5.数据发生改变
    // 5.1. 准备更新DOM
    beforeUpdate() {
      console.log("beforeUpdate")
    },
    // 5.2. 更新DOM
    updated() {
      console.log("updated")
    },

    // 6.卸载VNode -> DOM元素
    // 6.1.卸载之前
    beforeUnmount() {
      console.log("beforeUnmount")
    },
    // 6.2.DOM元素被卸载完成
    unmounted() {
      console.log("unmounted")
    }
  }
```



## 四. 说说你对动态组件和keep-alive的作用理解

* 动态组件 `＜component>` 用来动态地挂载不同的组件, 使用 `is` 属性来选择要挂载的组件
  * 根据 v-bind:is="组件名" 中的组件名去自动匹配组件，如果匹配不到则不显示
* keep-alive:让组件缓存起来, 存活下来
  * 属性:include, exclude,max 
  * 注意:include 和exclude 使用时,要求匹配 的组件需要有**name 选项**





## 五. 对组件使用v-model的本质是什么？

```
<Counter v-model="appCounter"/>
<!-- 相当于-->
<Counter v-bind:modelValue="appCounter" @update:modelValue="appCounter = $event"/>
    
```

这个组件Counter 内的 input 

* 将其 value attribute 绑定到一个名叫 modelValue 的 prop 上； 
* 在其 input 事件被触发时，将新的值通过自定义的 update:modelValue 事件抛出(发出)；



## 六. 什么是Composition API？和之前的options API有什么区别？（面试）

* Composition API:   组件根据逻辑功能来组织的，一个功能所定义的所有 API 会放在一起（更加的高内聚，低耦合）

* Options API: 在对应的属性中编写对应的功能模块,  比如data定义数据、methods中定义方法、computed中定义计算属性、watch中监听属性改变，也包括生命周期钩子
  * 弊端:  当我们实现某一个功能时，这个功能对应的代码逻辑会被拆分到各个属性中,当组件变得复杂，导致对应属性的列表也会增长，这可能会导致组件难以阅读和理解
* 两者区别

```
1)在逻辑组织和逻辑复用方面，Composition API是优于Options API
2) 因为Composition API几乎是函数，会有更好的类型推断。
3) Composition API对 tree-shaking 友好，代码也更容易压缩
4) Composition API中见不到this的使用，减少了this指向不明的情况
```



## 七. 如何使用setup函数，并且让数据是响应式的？

* setup函数的参数，它主要有两个参数： 
  * 第一个参数：props ,  父组件传递过来的属性会被放到props对象中
  * 第二个参数：context,   它里面包含三个属性
    * attrs：所有的非prop的attribute； 
    * slots：父组件传递过来的插槽）； 
    *  emit：当我们组件内部需要发出事件时会用到emit（因为我们不能访问this，所以不可以通过 this.$emit发出事件）
* 可以通过setup的返回值来替代data选项,让数据是响应式





## 八. 整理之前学习过的Options API, 并且说出每一个作用

* **data **    `定义数据`
  * data必须是一个函数, 函数会返回一个对象( 在Vue3.x的时候)
  * data返回的对象, 会被Vue进行劫持(放到响应式系统中), 所以data的数据发生改变时, 界面会重新渲染

* **methods **      `定义方法`
  * methods属性是一个对象 -> 定义很多方法--->这些方法可以绑定到模板上

  * 在该方法中，我们可以使用**this关键字**来直接访问到**data中返回的对象的属性**

  * 里面函数不能是箭头函数:

    * 如果是箭头函数,因为箭头函数不绑定this,所以它会在上层作用域中查找this, 查找到this-->window

* **computed **       `计算属性`
  * 对于任何包含响应式数据的**复杂逻辑**，你都应该使用**计算属性**
  * 可以通过this访问数据
  * 计算属性会基于它们的依赖关系进行**缓存**
    * 在数据不发生变化时，计算属性是不需要重新计算的
    * 如果依赖的数据发生变化，在使用时，计算属性依然会重新进行计算

* **watch **     `侦听器`
  * 用来监听某个数据的变化
  * deep  深度监听
  * immediate   第一次渲染直接执行一次监听器
* **components**
  * 注册局部组件
  * 该components选项对应的是一个对象，对象中的键值对是 组件的名称: 组件对象
* **props**   `完成父子组件之间通信`
  *  Props是你可以在组件上注册一些自定义的attribute
  * 父组件给这些attribute赋值，子组件通过attribute的名称获取到对应的值
* emits   
  * 记录发射了哪些自定义事件
  * emits 可以是数组或对象，从组件触发自定义事件，emits 可以是简单的数组，也可以是对象，后者允许配置事件验证

* **provide**   `用于非父子组件之间共享数据`

  * 父组件有一个 provide 选项来提供数据

* **inject**   `用于非父子组件之间共享数据`

  * 子组件有一个 inject 选项来开始使用提供provide的数据

    

* 生命周期函数

  * beforeCreate :组件实例在创建之前

  * created: 组件被创建完成

    * 可以发送网络请求

    * 可以事件监听

    * this.$watch()

      

  * beforeMount : 组件template准备被挂载

  * mounted :组件template已经被挂载

    * 可以获取DOM,可以使用DOM

     

  * beforeUpdate:  准备更新DOM
  * updated: 更新DOM,根据最新数据生成新的VNode,生成新的虚拟DOM,转换为真实的DOM

  

  * beforeUnmount:  卸载之前
  * unmounted: DOM 元素被卸载完成
    * 回收操作(取消事件监听)

  

  











































