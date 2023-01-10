# Day10 作业布置

## 一. 完成上课所有的代码练习







## 二. 总结整理创建一个新的项目需要完成哪些操作？

#### 1. 创建Vue项目

**首先，在确定Vue框架作为开发框架时，选择创建项目的脚手架工具：基于Webpack的Vue CLI还是基于Vite的create-vue：**

Webpack：`vue create project_name`

Vite: `npm init vue@latest`

```sh
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

#### 2. 项目配置

**通过脚手架工具快速创建了项目之后，应该对当前项目进行一些项目配置：**

1. 配置项目的favicon图标 - public文件夹下存放
2. 配置项目的网页标题 - `index.html`
3. 配置`jsconfig.json`文件，使得VS Code 对项目进行更好的提示

#### 3. 项目目录结构划分

src文件下依次创建如下文件夹分别存放不同的文件：

- assets - css/font/img等
- components - vue组件
- hooks - 存放 hooks 类文件，一般用use开头，实现类似mixins的功能，提高复用性
- mock - 请求模拟数据
- router - Vue Router文件夹，进行网页的路由切换
- service - 网络请求文件夹（axios、fetch、ajax）
- stores - 状态管理文件（Vuex/Pinia）
- utils - 工具文件
- views - 网页文件

#### 4. CSS样式的重制

- normalize.css
- reset.css

#### 5. 路由配置

#### 6. 状态管理配置











实际开发：
	类型一： 后台管理系统{Element UI（Vue2） / Element Plus（Vue3）}

	类型二：小程序 {原生UI库 / Vant / Uniapp}
	
	类型三：移动端Web页面 {Vant UI}
	
	类型四：网易云/知乎/Bilibili等门户官方网站 {Material UI}
	
	类型五：电商平台

组件库：
React =》 Ant Design  / Ant Design Pro









tabbar

注意：`json`文件中不允许有注释，vs code 对`jsconfig.json`和`tsconfig.json`两个文件进行了单独处理，内部出现了注释不会报错，其他`json`文件则不能存在注释

src路径作变量绑定时，在`webpack`环境下需用`require()`进行包裹，但是在`vite`环境下，没有`require()`方法来包裹动态路径

`new URL(url, import.meta.url)`





css中引入变量

`font-size: var(xxx)`



在vue项目中对来自组件库的组件进行样式重写时，不能直接把在浏览器F12网页结构的类名进行样式的修改，因为在vue  `<style>`中 有 `scoped`属性，存在当前组件的css作用域，与引用组件自己的组件样式作用域不同，设置的样式会重写失败。解决方法：使用Vue的语法（样式穿透到子组件，使子组件的类生效）：

```css
:deep(.van-tabbar-item_icon) {
    font-size: 30px;
}
```

**官方文档：深度选择器**

使用 `scoped` 后，父组件的样式将不会渗透到子组件中。不过，子组件的根节点会同时被父组件的作用域样式和子组件的作用域样式影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

处于 `scoped` 样式中的选择器如果想要做更“深度”的选择，也即：影响到子组件，可以使用 `:deep()` 这个伪类：

```vue
<style scoped>
.a :deep(.b) {
  /* ... */
}
</style>
```



**回顾具名插槽 slots：**

在父组件中使用 `<BaseLayout>` 时，我们需要一种方式将多个插槽内容传入到各自目标插槽的出口。此时就需要用到**具名插槽**了：

要为具名插槽传入内容，我们需要使用一个含 `v-slot` 指令的 `<template>` 元素，并将目标插槽的名字传给该指令：

```html
<BaseLayout>
  <template v-slot:header>
    <!-- header 插槽的内容放这里 -->
  </template>
</BaseLayout>
```

`v-slot` 有对应的简写 `#`，因此 `<template v-slot:header>` 可以简写为 `<template #header>`。其意思就是“将这部分模板片段传入子组件的 header 插槽中”。
