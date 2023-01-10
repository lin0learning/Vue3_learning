# Day08 作业布置

## 一. 如何动态的添加路由对象以及这样做的意义是什么？







## 二. 什么是路由守卫？路由守卫有什么作用？







## 三. 什么是状态管理？如何理解“状态管理”？

Vuex与Pinia。 源于redux？

状态管理：开发的应用程序需要处理各种各样的数据，这些数据需要保存在我们应用程序中的某一个位置，对于这些数据的管理我们称之为是  <font color="red">状态管理</font>。

Vuex官方：“修改`Stage`唯一的方式是提交`Mutation`”



## 四. Vuex的基本使用步骤是什么？

#### 1. 安装Vuex

```bash
npm install vuex
```

#### 2. 路径文件夹src -> 创建store

- store本质上是一个容器，它包含着你的应用中大部分的状态（**state**）

```js
import {createStore} from 'vuex'
const store = createStore({
    state: () => ({
	counter:0
    })
})
export default store
```

 在`main.js`文件中：

```js
import store from './store'
createApp(app).use(store).mount('#app)
```

在`template`中获取：

```vue
<template>
	<div>{{$store.state.counter}}</div>
</template>
```

#### 3. Vuex的单纯的全局对象的区别

1. Vuex的存储状态是响应式的
2. 不能直接改变store中的状态，改变store中的状态的唯一途径是显示**提交（commit）mutation**；
3. 组件中使用store的三种方式：
   1. 在template模板中使用：$store.state.name
   2. 在options API中使用，如computed：this.$store.state.name
   3. 在setup中使用。

#### 4. Vue官方对状态管理的使用推荐

- Vue2/Potions API   => **Vuex**
- Vue3/Composition API => **Pinia**

## 五. 什么是单一状态树？Vuex如何通过单一状态树管理诸多状态的？(modules)

Vuex使用单一状态树：

- 用<font color="red">一个对象</font>就包含了<font color="red">全部的应用层级的状态</font>；
- 采用SSOT，Single Source of Truth；



当有多个状态都需要获取的话，可以在Options API-computed中使用mapState的辅助函数：

- mapState方式一：对象类型；
- mapState方式二：数组类型；
- 也可以使用展开运算符和原有的computed混合在一起；

```js
import {mapState} from 'vuex'
...mapState(["name","level", "avatorURL",...])
// 1. 
```

在setup中使用vuex中的store：

- 方法一（很难用，我甚至没懂）：

```js
import { computed } from 'vue'
import {mapState, useStore} from 'vuex'

const { name, level } = mapState(["name", "level"])

const store = useStore()
const cName = computed(name.bind({ $store: store }))
const cLevel = computed(level.bind({ $store: store }))
```

- 方法二：直接对store.state进行解构：

```js
import { usestore, toRefs } from 'vuex'

const store = useStore()
// 非响应式
// const { name. level, ...} = store.state
// const { name, level, ... } = toRefs(store.state)
const { name: sName, level, ... } = toRefs(store.state)
```





## 六. Vuex有哪些核心概念，整理这些核心概念分别的作用是什么？

store、getters、

- getters基本使用

- 在该getters属性中，获取其他的getters：`${getters.othergetters}`
- getters 返回函数





1. `store`
   基本使用与映射使用
   - options API
   - composition API



2. `getters`基本使用与映射：`mapGetters`

```js
const store = useStore()
// 1. 使用mapGetters
const { message: messageFn } = mapGetters(["message"])
const message = computed(messageFn.bind({ $store:store} ))

// 2. 直接解构，并且包裹成ref
const { message } = toRefs(store.getters)

// 3. 针对某一个getters属性使用computed
const message = computed(() => store.getters.message)
```

3. `Mutation`基本使用
   - 更改`Vuex`的`store`中的状态的唯一方式是提交` mutation`（ this.$store.commit("someFunc")，这样做的好处是Vue可以对状态管理进行跟踪，使用者可以在mutation中可以查看提交的结果记录 )
   - `mutation`重要原则：mutation 必须是 **同步函数**，不要执行异步操作
     - devtool工具会记录mutation的日记；
     - 每一条mutation被记录，devtools都需要捕捉到前一状态和后一状态的快照；
     - 在mutation中执行异步操作，就无法追踪到数据的变化。
4. `action`的基本使用





js计算属性标识符：[ ]



## 七. Vuex是否可以用来管理组件的普通状态和代码逻辑？(思考)









# 笔记

后台管理系统各账号权限的问题引出：动态的加载和管理路由，根据不同的账号，生成不同的菜单。

——动态管理路由（路由导航守卫）（掌握）



1. 动态添加路由
   ```js
   router.addRoute("home", {
       path: "vip",
       component: () => import("../views/homeVip.vue")
   })
   ```

2. 删除路由（了解）

   - 方式一：添加一个name相同的路由；
   - 方式二：通过removeRoute方法，传入路由的名称；
   - 方式三：通过addRoute方法的返回值回调

3. 路由其他方法补充：

   - router.hasRoute()，检查路由是否存在；
   - router.getRoute()，获取包含所有路由记录的数组。





——路由导航守卫

vue-router 提供的导航守卫主要用来通过<font color="red">跳转或取消的方式守卫导航</font>

```js
router.beforeEach(() => {
    // 当路由发生跳转会触发回调函数log出 “test”
    console.log("test")
})
```

全局的前置守卫beforeEach是在导航触发时被回调，有两个参数：to、from

```js
router.boforeEach((to, from) => {
    if (to.path !== "/login")
    return "/login"
})
```

实际开发，判断用于是否登录（isLogin作Boolean判断  => 在localStorage中保存token）

```js
router.boforeEach((to, from) => {
    const token = localStorage.getItem("token")
    if (to.path === "/order" && !token) {
        return "/login"
    }
})
```

跳转到登录界面，向服务器发送请求 => 服务器返回token，本地localStorage保存token: `localStorage.setItem("token", "一段加密text")`





























