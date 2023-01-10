# Day09 作业布置

## 一. 完成课堂所有的代码







## 二. Vuex中如何发送异步请求，以及组件如何知道异步请求的结果？







## 三. Vuex如何划分模块？什么是命名空间？







## 四. 什么是Pinia？和Vuex有什么区别？







## 五. Pinia中有哪些核心概念，如何使用这些核心概念？







## 六. Vue中如何实现自定义指令？







## 七. Vue中如何安装插件，使用方法有哪些？



























## 笔记

#### 1. Vuex中`actions`的基本使用

action类似于mutation，不同在于：

- action提交的是mutation，而不是直接变更状态；
- action可以包含任意异步操作。

公司项目中大量的网络请求都是放在action中

使用store上的dispatch函数，进行action的分发：
```js
// options API
add() {
    this.$store.dispatch("increment")
}
```

```js
// composition API
import { useStore } from 'vuex'

const store = useStore()

store.dispatch("xxx")
```



#### 2. 在fetch（ajax）请求中：

1. 返回`Promise`，给`Promise`设置`.then`；
   ```js	
   fetchAction() {
       fetch("http://xxxxx").then(res => {
           res.json().then(data => {
               console.log(data)
           })
       })
   }
   ```

   

2. Promise链式调用；
   ```js
   fetchAction() {
   	fetch("http://xxx").then(res => {
           return res.json()
       }).then(data => {
           console.log(data)
       })
   }
   ```

   

3. async/await
   ```js
   async fetchAction() {
       const res = await fetch("http://xxx")
       const data = await res.json()
       console.log(data)
   }
   ```

   异步函数一定会返回Promise：
   ```js
   async function foo() {
       
   }
   foo()
   // foo():Promise<void>
   ```

   

  



#### 3. Vuex中 module 的基本使用：

什么是module？

- 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象，当应用变得非常复杂时，store对象也会变得非常臃肿
- 解决以上问题，Vuex运行我们将 store 对象分割成模块（module）；
- 每一个模块有自己的 state、getters、mutations、action，或者是嵌套的子模块 modules



注意事项：

- `<template>`中使用state时，需要state.moduleName.xxx
- `<script>`中store.dispatch派发事件时，默认不需要跟模块名称
- 对于模块内部的`mutation`和`getter`，接收的第一个参数(`state`)是模块的局部状态对象



#### 4. module的命名空间

- 默认情况下，模块内部的的action和mutation任然是注册在**全局的命名空间**中的：

  - 模块中的action或者mutation中的对象名称存在命名冲突

  - 使得多个模块能够对同一个 action 或 mutation 作出响应

- 如果希望模块具有更高的封装度和复用性，可以添加`namespaced:true`的方式使其成为带命名空间的模块：

  - 当模块被注册后，该模块所有的getter、action及mutation都会自动根据模块注册的路径调整命名
  - 在使用模块中的对象时，应改为：
    -  `<template>`   =>  `$store.getters["moduleName/moduleObject"]`
    - `<script>`   =>    `store.dispatch("moduleName/moduleObject")`





## Pinia

- Pinia和Vuex的对比（开发中到底是用Pinia还是用Vuex、之间的区别）
- 创建Pinia的Store
- Pinia核心概念-State
- Pinia核心概念-Getters
- Pinia核心概念-Actions

#### 1. Pinia和Vuex的区别

1. mutations和modules不再存在；
2. 更友好的`TypeScript`支持
3. 不再有modules的嵌套结构
   灵活使用每一个store，通过扁平化的方式互相使用
4. 不再有命名空间的概念

#### 2. Pinia的使用

##### 1. 安装Pinia

```bash
npm install pinia
```

##### 2. src目录创建stores文件夹并创建index.js文件

```js
import { createStore } from 'pinia'

const pinia = createStore()

export default pinia
```

##### 3. main.js文件中导入并使用

```js
import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'

createApp(App).use(pinia).mount(#app)
```

##### 4. 创建stores文件

```js
import { defineStore } = from 'pinia'

const useXXX = defineStore("XXX", {
    state: () => {
        return {
            xxx
        }
    }
})

export default useXXX
```

#### 2. 操作和写入state：

##### 2.1 

默认情况下，可以通过 store 实例访问状态来直接读取和写入状态；

```js
useStore.age++
```

##### 2.2

重置`State`，通过调用`store`上的 `$reset()` 方法将状态 重置到其初始值

```js
useStore.$reset()
```

##### 2.3

调用`$patch方法`，对部分state对象同时应用多个更改：

```js
useStore.$patch({
	name: "liclo",
    age:30
})
```

#### 3. Getters

getters相当于store的计算属性，能够通过<font color="red">this</font>来访问整个store实例

##### 1. 基本使用

##### 2. 一个getter引入另一个getter

##### 3. getters返回一个函数

```js	
getUserById(state) {
    return userId => {
        return state.users.find(item.id === userId)
    }
}
// template中调用
{{ useStore.getUserById(userId) }}
```



##### 4. 当前store引入其他store中的数据

#### 5. Actions-认识和定义

 和getters一样，action可以通过<font color="red">this</font>来访问整个store实例







## axios库-网络请求库

js原生网络请求-XMLHttpRequest()， 浏览器提供的API-fetch。node环境中无法运行浏览器提供的fetch API。



### 1. 认识axios

#### 1. 功能特点：

- 在浏览器环境中中发送XMLHttpRequest 请求
- 在node.js 环境中发送 http请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求和响应数据
- etc

#### 2. 发送request请求

```js
import axios from 'axios'

axios.request({
    url: "http://xxx",
    method: "get"
}).then(res => {
    console.log("res: ", res.data)
})
```



```js	
import axios from 'axios'

// 写法1
axios.get("http://xxx?id=xxx").then(res => { console.log(res.data)})

// 写法2
axios.get("http://xxx",{
    params:{
        id: xxx
    }
}).then(res => { console.log(res.data)})
```

#### 3. axios.defaults 公共配置

地址?的部分为baseURL，比如`"http://127.0.0.1:8000/get"`中的baseURL为：`"http://127.0.0.1:8000"`，

```js
// axios中设置baseURL中，在发送请求时不需要填写baseURL地址
axios.defaults.baseURL = baseURL

axios.get("/xxx/xxx").then(res => {
    'xxx'
})
```

defaults.baseURL、defaults.timeout、defaults.headers.....

#### 4. axios发送多个请求

`axios.all([])`

#### 5. axios创建实例

```js
import axios from 'axios'

const instance1 = axios.create({
    baseURL: "xxx",
    timeout: 6000,
    headers: {}
})
```

通过创建多个axios实例，针对不同的baseURL和网络配置进行使用，传入属于该实例的配置信息。

#### 6. 对实例配置拦截器

```js
import axios from 'axios'
// 1.请求的拦截
axios.interceptors.requset.use((config) => {
    console.log("请求成功的拦截")
    // 1.1-开始loading加载动画
    // 1.2-对config进行修改
    //	1.2.1 header
    //	1.2.2 登录认证: token/cookie
    //	1.2.x xxx
    return config
},(err) => {
    console.log("请求失败的拦截")
    return err
})

// 2. 响应的拦截
axios.interceptors.response.use((res) => {
    console.log("响应成功的拦截")
    // 2.1-结束loading加载动画
    // 2.2-转化数据data
    return res.data
},(err) => {
    console.log("响应失败的拦截")
    return err
})

```

#### 7. 对axios进行二次封装

```js
class LCRequest {
    //...
}
```

