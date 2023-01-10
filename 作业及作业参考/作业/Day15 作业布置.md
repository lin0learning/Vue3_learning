# Day15 作业布置

## 一. 完成课堂所有的代码







## 二. 什么是render函数、jsx语法是什么？(面试)







## 三. Vue中实现动画的组件有哪些？实现动画的本质是什么？







## 四. 实现响应式原理代码，Vue2和Vue3响应式原理有什么区别？







## 五. 完成项目的部署（云服务器选做）







## 六. 继续完成《弘源旅途》的项目代码（自己完成、多写几遍）















## 笔记



Vue推荐在绝大情况下来创建HTML。然而在一些特殊的场景，需要**JavaScript的完全编程能力**，这个时候可以使用 **渲染函数**，它比模板更接近编辑器；



<font color="red">VNode</font>和<font color="red">VDOM</font>的概念：



h() 函数是一个用于创建 VNode的一个函数，即createVNode() 函数。h()或者render函数使用麻烦，JSX语法随之替代。





关于JSX的babel配置：

| teamplate | vue-loader 进行转化 |
| --------- | ------------------- |
| render    | 不需要转化          |
| jsx       | babel转化           |

安装Babel支持Vue的jsx插件：

```bash
// Vue CLI环境
npm install @vue/babel-plugin-jsx -D

// Vite环境 vite.config.js 中导入并配置
npm install @vitejs/plugin-vue-jsx -D
```

并在babel.config.js配置文件中配置插件：

```js
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins:[
        "@vue/babel-plugin-jsx"
    ]
}
```

并在`<script></script>`中添加`lang="jsx"`：

```jsx
<script lang="jsx">
	
</script>
```











Vue3 - 实现过渡动画

`<transition>`内置组件









Vue2-Vue3响应式原理

1 什么是响应式？

- m有一个初始化的值，有一段代码该值；如果m的值发生改变。则该段代码能自动重新执行；

2 响应式函数设计

- 执行的代码不止一行，将这些代码放入一个函数中，当数据发生变化，自动去执行某个函数；

3 响应式依赖收集

- 设置一个专门执行响应式函数的一个函数；


4 监听改变并自动执行

- 监听对象属性被修改

  1. `Object.defineProperty()`        --- > Vue2
  2. `new Proxy()`                             --- > Vue3

  劫持数据变化，并自动执行依赖该值的代码

5 自动收集依赖

​	obj对象的name属性的依赖：

```js
const dep = objMap.get(obj).get(name)
dep.notify()
```









前端工程化

1 持续集成和持续交付

伴随着DevOps出现，

- CI是ContinuousIntegration（持续集成）；
- CD是Continuous delivery（持续交付）或Continuous Deployment（持续部署）。



Github项目自动化部署：Github Actions 前端 CI / CD 工作



linux centos7 yum

linux centos8 dnf
