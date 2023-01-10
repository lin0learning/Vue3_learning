# Day07 作业布置

## 一. 完成上课所有的代码练习







## 二. 完成阶段案例实战练习，并且理解代码抽取、封装思想







## 三. 什么是前端路由？前端路由的发展历程是怎么样的？



改变URL，页面不进行整体的刷新。

目前前端三大框架，都有自己的路由实现：

- Angular的ngRouter
- React的ReactRouter
- Vue的vue-router

路由用于设定访问路径，将路径和组件映射起来；

在vue-router的单页面应用（SPA）中，页面的路径的改变就是组件的切换；

## 四. 前端路由切换的本质是什么？hash和history有什么区别？

URL的hash：

- URL的hash也就是锚点（#），本质是改变`window.location`的`herf`属性；
- 可以通过直接赋值`location.hash`来改变`href`，但是页面不发生刷新；





## 五. 路由的使用步骤是什么？总结整理一下

1. 创建路由所需要映射的组件（components）

2. 通过createRouter创建路由对象，并且传入routes和history模式；

   - 配置路由映射：组件和路径映射关系的routes数组；
   - 创建基于hash或者history的模式。

   ```js
   import {createRouter, createWebHasHistory, createWebHistory} from 'vue-router'
   const router = createRouter({
       history: createWebHashHistory()
       routes: {
       // redirect 表示默认值
       	{path: "/", redirect: "/home"}
           {path: "/home", component: Home组件},
       	{path: "/about", component: About组件}
       }
   })
   export default router
   ```

3. 使用app注册路由对象（use方法）
   ```js
   import {createApp} from 'vue'
   import router from './router'
   import App from './App.vue'
   
   const app = createApp(App)
   app.use(router)
   app.mount('#app')
   ```

4. 路由使用： 通过<router-link>和<router-view>

`<router-link>`标签有几个属性：

1. replace
   当前属性设置路由跳转不会记录到浏览器历史记录当中，当BOM回退时，会回到浏览器最开始的页面
2. to
3. active-class
   给点击的`<active-view>`内容默认添加`router-link-active`类名，可自定义类名；
4. exact-active-calss属性：
   链接精准激活时，应用于 渲染的`<a>`的class，默认是`router-link-exact-active`；



**路由的分包处理（路由的懒加载）：**

修改路由组件的导入方式为

```js
const Home = () => import("../Views/Home.vue")
```

在对项目进行打包的时候，给子组件打包可以使用webpack的魔法注释给打包的文件设置自定义名称：

```js
const Home = () => import(/* webpackChunkName: 'home' */"../Views/Home.vue")
```

#### 路由懒加载

- 当打包构建应用时，`JavaScript`包会变得非常大，影响页面加载：
  - 如果把不同路由对应的组件分割成不同的代码块，然后当路由被访问时才加载对应组件，会更高效；
  - 也能提高首屏渲染效率
- `webpack`的分包知识，而Vue Router默认支持动态导入组件
  - 因为`component`可以传入一个组件，也可以接收一个函数，该函数需要放回一个`Promise`函数；
  - `import`函数就是返回一个`Promise`
  - `webpack`从3.x开始支持对分包进行命名(chunk name) ：`/* webpackChunkName: 'home-chunk' */`







## 六、如何给路由跳转的组件传递数据

* 动态路由:
  ```js
  {
  	path: "/user/:id",
      component: () => {import("../Views/User.vue")}
  }
  ```

  - 在template模板中获取id：
    ```
    {{ $route.params.id }}
    ```

  - options API中获取id：

    ```
    this.$route.params.id
    ```

  - composition API：

    ```vue
    <script setup>
    	import {useRoute} from 'vue-router'
        const route = useRoute()
        console.log(route.params.id)
    </script>
    ```

* query:



#### NotFound

对于没有匹配到路由，通常会匹配到固定的某个页面：

```js
{
    path: '/:pathMatch(.*)*',
        component: () => import('../pages/NotFound.vue')
}
```

可以通过`$route.params`获取到传入的参数

## 七. 如何实现路由的嵌套？

使用嵌套路由，在Home中也是用`router-view`来占位。

#### 1. 路由的嵌套配置

```js
{
    path: 'home'
    component: () => import(/*webpackChunkName: "home-chunk" */'../Views/Home.vue'),
        children:[
            {
                path:'',
                redirect: '/home/Topic'
            },
            {
                path: 'Topic',
                component: () => import('../Views/HomeTopic.vue')
            },
            {
                path: 'Toplist',
                component: () => import('../Views/HomeToplist.vue')
            },
        ]
}
```



#### 2. 代码的页面跳转





Vue全家桶： 1. Vue Core； 2. 插件：Vue-Router（前端页面切换）； 3. 插件： Vuex/Pinia（状态管理）







































