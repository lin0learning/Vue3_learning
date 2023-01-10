# Day03 作业布置

## 一. 完成上课所有的代码练习







## 二. 自己独立完成购物车案例（不用看任何一行我的代码）







## 三. 什么是双向绑定？v-model的本质是什么？

 v-model can only be used on <input>, <textarea> and <select> elements.

#### 1. v-model基本使用-绑定input value

v-model的原理其实是背后两种操作：

1. v-bind绑定value属性的值；
2. v-on绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性中。

```html
<input v-model="searchText" />
```

等价于：

```html
<input :value="searchText" @input="searchText=$event.target.value" />
```

#### 2. v-model绑定textarea

#### 3. v-model绑定CheckBox

单个勾选框：

- v-model即为布尔值；
- 此时input的value属性不影响v-model的值

多个复选框

- 多个复选框时，对应的data中属性是一个数组；
- 当选中某一个时，会将input中的value添加到数组中。

#### 4. v-model绑定radio

首先回顾 html 中表单互斥的经典案例：

```html
<div class="gender">
    <laber for="male">
    	<input id="male" name="gender" type="radio">
    </laber>
    <laber for="female">
    	<input id="female" name="gender" type="radio">
    </laber>
</div>
```

ratio复选框中，为了实现"2选1"的操作，使得两个input不能同时被选中，给类型为radio的input表单添加name值相同的属性（name="gender"）。

回顾 radio：

input 的 type 类型设置为 radio。

value：是要传递给后端的数据，是必填项；如果value没有设置值，则默认将on作为值传递给后端。

1. 如果不设置相同的name，则两个都可以选中；
2. 如果设置相同的name，则只能选中其中一个；
3. 在Vue中，如果使用v-model绑定的是同一个属性的时候，两个input本身是互斥的，所以不必设置两个元素的name属性值相同。

checked：是默认选中选项。

maxlength：是正整数，限制字符最大长度；

disabled：表示禁止选用

#### 5. v-model绑定select

#### 6. v-model的值绑定

#### 7. v-model的修饰符

1. lazy修饰符
   1. 默认情况下，v-model在进行双向绑定时，绑定的是input事件，那么会在每次输入内容后就将最新的值和绑定的属性进行同步；
   2. 如果在v-model后跟上修饰符lazy，会将绑定的事件切换为change事件，只有在提交时才会触发。
2. number修饰符
3. trim修饰符
4. 使用多个修饰符

- 

## 四. 什么是组件化开发？有什么作用？

* 组件化开发

  * 我们将一个完整的页面分成很多个组件；

  * 每个组件都用于实现页面的一个功能块；
  * 而每一个组件又可以进行细分；
  * 而组件本身又可以在多个地方进行复用

* 作用

  * 可复用
  * 方便整个页面的管理和维护



## 五. Vue中注册全局组件和局部组件有什么区别？

注册组件分为两种：

1. 全局组件；
   全局组价需要全局创建的app来注册组价；
   通过component方法传入组件名称、组件对象即可注册一个全局组价；
   之后可以在App组价的template中直接使用这个全局组件。

   ```js
   const app = Vue.createApp(app)
   // 所开发的组件 ↓ 
   // const productItem = {
   //     template: `<div>Hello World!</div>`
   // }
   app.component("product-item", {
       template: `
       <div>Hello World</div>
       `
   })
   ```

   使用所创建的组件：

   ```html
   <product-item></product-item>
   ```

   组件本身可以有自己的代码逻辑，比如data、computed、methods等等。

2. 局部组件。
   目前在开发中，绝大多数情况是注册局部组件。全局组件往往是在应用程序一开始就会全局组件完成，意味着如果某些组件我们并没有使用，也会一起被注册。
   局部组件通过components属性选项来进行注册，该components选项对应的是一个对象，对象中的键值对是 **组件的名称: 组件对象;**



定义组件名的方式有两种：

1. 使用kebab-case（短横线分隔符）
2. 使用PascalCase（驼峰标识符）
   由于html标签不区分大小写，在.html文件里不支持，在.vue文件 -> template是支持的。一般使用第一种（短横线分隔符）方法

## 五. Vue 的开发模式

在真实开发中，我们可以通过一个后缀名为 .vue 的 single-file components（单文件组件）来解决，并且可以使用 webpack 或者 vite 或者rollup 等构建工具来对其进行处理。

.Vue单文件的特点：

1. 代码高亮；
2. ES6、CommonJS的模块化能力；
3. 组件化作用域的CSS；
4. 可以使用预处理器来构建更加丰富的组件，比如TypeScript、Babel、Less、Sass等。

## 六. 什么是Vue CLI，如何使用它创建Vue项目？

Vue的脚手架，搭建项目的工具，就是Vue CLI：

- CLI是Command-Line Interface，翻译为命令行界面；
- 可以通过CLI选择项目的配置和创建出我们的项目；
- Vue CLI内置了webpack相关的配置，我们不需要从零来配置。

Vue Cli的安装和使用：

```bash
# 安装
npm install @vue/cli -g

#升级
npm update @vue/cli -g

#使用
vue create 项目名称
```



- 在terminal中输出 Vue  create "项目名称"开始通过CLI脚手架创建Vue项目



- 在terminal终端启动项目：


```
npm run serve
```



- .Vue 中的结构：

```vue
<template>

</template>

<script>
	export default{
        
    }
</script>

<style>

</style>
```



## 七. 自己整理Vue项目目录结构中各个文件的作用

1. Vue项目目录![image-20220725191013565](C:\Users\oringe\AppData\Roaming\Typora\typora-user-images\image-20220725191013565.png)

2. 各个目录文件的作用

   ```
   node_modules: 安装的所有依赖的node工具包
   
   public: public 目录存放的是一些公用文件
   	---favican.ico	图标
   	---index.html	打包webpack所需要的 HTML 模板
   	
   src: 存放Vue项目的源代码
   	--- assets: 资源文件，存放css、图片等资源
   	---components: 组件文件夹
   	--- App.vue: Vue的根组件
   	--- main.js: 项目的入口文件
   	
   .browserlistrc:	设置目标浏览器，进行浏览器适配
   
   .gitignore:	git的忽略文件
   
   babel.config.js:	babel的配置
   
   jsconfig.js:	给vscode进行读取，vscode在读取到其中的内容时，给我们代码更加友好的提示
   
   package-lock.json:	项目包的锁定文件，npm install 可以通过package-lock文件来检测lock中包的版本是否和package.json中一致，如果一致，会优先查找缓存；如果不一致，就会重新构建依赖关系
   
   package.json:	npm配置文件，记录项目的名称、版本号、项目描述等，也记录项目所依赖的其他库的信息和依赖库的版本号
   
   README.md:	项目说明（文档）
   
   vue.config.js: vue的配置文件
   ```

   





将项目编译成静态页面：

```
npm run build:prod
```

当新开启Vue3项目时，控制台报错 <font color="red" background="#fbd4d0">The template root requires exactly one element.eslint-plugin-vue</font>。

在Vue2中，template中只能有一个根元素，但在Vue3中去掉了这个限制，解决这个错误提示方法如下：

- 方法一
  项目中引用的eslint报错，在项目的.eslintrc.js配置文件的rules中添加：
  
  ```js
  rules: {
  'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  "vue/no-multiple-template-root":'off' 
  }
  ```
  
- 方法二
  在方法一的基础下，任然报错，是vscode插件，带有检查语法的功能-<font color="red">Vetur!</font>
  取消插件 <font color="red">vetur</font> 的配置
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/6f1da3e6d8c4426aa1be9e70efddfb6d.png)

  Vue3，建议用Volar来替换Vetur！

