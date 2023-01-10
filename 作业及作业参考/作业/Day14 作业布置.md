# Day14 作业布置

## 一. 完成课堂所有的代码(项目代码)







## 二. 如何自定义指令，自定义指令的两种方式和生命周期？







## 三. Vue中如何安装插件，插件的使用过程是什么？







## 四. 继续完成《弘源旅途》的项目代码（自己完成、多写几遍）











## 上课笔记



[Vue Router warn]: <router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>



keep-alive触发事件 可在onActivated生命周期钩子函数中监听

detail页中tab栏 滚动匹配 点击跳转匹配

home主页keepalive，滚动设置元素非window防止跳转其他页仍发送请求

index.html设置视口 maximum-scale、minimum-scale、user-scalable。。。

修改Viewport布局，设置单位px转vw或vh等等，采用postcss-px-to-viewport 插件，配置postcss.config.js配置文件



#### 1. 自定义指令

Vue的模板语法中，Vue官方的指令：v-show、v-for、v-model、v-bind等等。Vue允许使用者自定义自己的指令。

- 在Vue中，代码的复用和抽象主要是通过component组件；
- 在某些情况下，需要对DOM元素进行底层操作，这时会用到自定义指令；

自定义指令两种种类：

- 自定义局部指令：通过directives选项（实际开发，很少自定义局部指令）
- 自定义全局指令：app的directive方法

##### 1.1 自定义局部指令

```js
export default {
    directives: {
        focus: {
            // 生命周期函数
            mounted(el) {
                el?.focus()
            }
        }
    }
}
```

```js
// setup自定义指令（局部指令） Vue3.2 setup语法糖
export default {
    setup() {
        // 创建标识符，以V开头
        const vFocus = {
            mounted(el) {
                el?.focus()
            }
        }
    }
}


// Vue3
const defineDir = {
    focus: {
        mounted(el) {
            el.focus()
        }
    }
}
export default {
    directives: defineDir,
    setup() {}
}
```

##### 1.2 自定义全局指令

```js
// 1. vue2 全局自定义指令
// 在vue2中，全局自定义指令通过 directive 挂载到 Vue 对象上。
Vue.directive("focus", {
    inserted:(el) => {
        el.focus()
    }
})

------------------------------------------

// 2. Vue3全局自定义指令
// 在 vue3 中，vue 实例通过createApp 创建，所以全局自定义指令的挂载方式也改变了， directive 被挂载到 app上。
app.directive("focus", {
    mounted(el) {
        el?.focus()
    }
})
```

##### 1.3 自定义指令的生命周期

- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeUnmount

指令的参数（如 :title），指令的value（如 ="message"），指令的修饰符（如 .lazy）

```vue
<template>
	<div v-lic:title.lazy="message"></div>
</template>
```

```js
const vLic = {
    mounted(el, bindings) {
        console.log(bindings)
    }
}
```





##### 1.4 自定义指令权限管理

暂无



#### 2. Vue内置组件补充

##### 2.1 认识Teleport

- 在组件化开发中，封装一个组件A，在另外一个组件B中使用：

  - <font color="red">组件A中template的元素</font>，会<font color="red">被挂在到组件B中template</font>中的某个位置；

  - 最终我们的应用程序会形成一个DOM树结构。

- 在某些情况下，希望组件不是挂载到所挂载组件的组件数上，而是移动到Vue app中的其他位置

  - 如<font color="red">移动到body元素</font>上，或其他的div#app之外的元素；
  - 这时可<font color="red">通过teleport来完成</font>。

- Teleport

  - Vue提供的内置组件
  
  - 有两个属性：
    - to: 指定移动的目标元素；
    - disabled: 是否禁用teleport功能。
    
  - 多个Teleport共享目标
  
    - ```vue	
      <template>
      <Teleport to="#modals">
        <div>A</div>
      </Teleport>
      <Teleport to="#modals">
        <div>B</div>
      </Teleport>
      </template>
      ```
  
    - 渲染结果为：
  
    - ```html
      <div id="modals">
        <div>A</div>
        <div>B</div>
      </div>
      ```







##### 2.2 异步组件和Suspense

注意：截止到2022-8-27，`<Suspense>` 是一项实验性功能。它不一定会最终成为稳定功能，并且在稳定之前相关 API 也可能会发生变化。





#### 3. Vue插件

app.use()本质上是Vue帮助安装插件，`a plugin must either be a function or an object with an "install" function`，app.use()可以传入两类元素：

1. 传入对象，app.use({});
2. 传入函数，app.use(function() {})

面试考点：app.use()的具体实现：

- app.use()中拿到元素进行判断，判断是对象还是函数：
  - 如果是对象，则取install并作执行：`obj.install(app)`，在执行的同时传入app对象；
  - 如果是函数，则传入的函数直接被执行。

