# Day04 作业布置

## 一. 完成上课所有的代码练习







## 二. 说说Vue的runtime和runtime+compile的版本区别（自己理解）



在根组件App.vue键入<template></template>标签中，会通过Vue进行createVNode的虚拟DOM操作最终在响应端生成真实的DOM树信息，在const App {} 代码段中，如果template 中键入HTML的模板，如果是Vue的runtime版本，则不会进行正确的解析，需要runtime+compile的版本进行编译来createVNode、根据VNode来创建虚拟DOM从而渲染成真实的DOM



## 三. 父子组件在开发中如何进行通信，并且自己写出案例



- 父组件传递给子组件：通过props属性
- 子组件传递给父组件：通过$emit触发事件

#### 1. 什么是Props

- Props是可以在组件上注册一些自定义的attribute；
- 父组件给这些attribute赋值，子组件通过attribute的名称获取到对应的值；

##### 1. Props 数组语法：

```
props: [“”， “”]
```

弊端：1. 不能对类型进行验证； 2. 没有默认值。

##### 2. Props 对象语法（真实开发使用）：

```
Props:{
	name: {
		type: String,
		default: "默认值"
	}
}
```

#### 2. Type的类型汇总：

- String
- Number
- Boolean
- Array
- Object
- Date
- Function
- Symbol

注意：

如果Props中，对象属性的类型是Object的话，其default值必须是一个函数，例：

```
Props: {
	friend: {
	type: Object,
	default: () => ({name: "james"})
	}
}
```

#### 3. Prop的大小写命名（camelCase vs kebab-case)

- HTML 中的 attribute 名是 <font color="red">大小写不敏感</font> 的，所以浏览器会把所有大写字符解释为小写字符；
- 这意味着当你使用 DOM 中的模板时，camelCase（驼峰命名法）的 prop 名需要使用其等价的 kebab-case（短横线分割命名）命名。



#### 4. 非Prop的Attribute

- 当传递给一个组件某个属性，但是该属性并没有对应的props或者emits时，就称之为 <font color="red">非 Prop的Attribute</font>，其常见的包括class、style、id属性等，**会传递给根元素上。**

- 当组件有单个根节点时，非Prop的Attribute将自动添加到根节点的Attribute中。
  如果不希望传递到根节点中，在子组件设置属性：

  ```vue
  inheritAttrs:false
  ```

- 我们可以通过 $attrs 来访问所有的 非 Props的attribute；



#### 5。 自定义事件的参数和验证

emits状态选项声明由组件触发的自定义事件。

- 详细信息

  可以以两种形式声明触发的事件：

  - 使用字符串数组的简易形式。
  - 使用对象的完整形式。该对象的每个 property 键是事件的名称，值是 `null` 或一个验证函数。

  验证函数将接受传递给组件的 `$emit` 调用的额外参数。例如，如果 `this.$emit('foo', 1)` 被调用，`foo` 相应的验证函数将接受参数 `1`。验证函数应返回布尔值，以表明事件参数是否有效。

  注意，`emits` 选项决定了被触发组件的事件监听器是组件监听器，还是原生 DOM 事件监听器。声明的事件监听器不会被添加到组件的根元素中，且将从组件的 `$attrs` 对象中移除。详见[透传 Attribute](https://staging-cn.vuejs.org/guide/components/attrs.html)。

1. 数组语法：

```js
export default {
	emits: ['check'],
	created() {
		this.$emit('check')
	}
}

```

2.  对象语法：

```js
export default {
	emits: {
        // 没有验证函数
        click: null,
        
        // 具有验证函数
        submit: (payload) => {
            if (payload.eamil && payload.password) {
                return true
            } else {
                console.log(`Invalid submit event payload!`)
                return false
            }
        }
    }
}
```



## 四. 自己写出TabControl的案例（不看我的代码）







## 五. 说说Vue插槽的作用和平时开发中的应用

Vue组件化-插槽Slot/非父子通信

为了让组件具备更强的通用性，不能将组件中的内容限制为固定的div、span等元素。应该让使用者可以决定某一块区域到底存放什么内容和元素；

将共同的元素、内容在组件内进行封装，同时将不同的元素使用slot作为占位，让外部决定到底显示怎样的元素。

**如何使用Slot：**

- Vue中将 <slot>元素作为承载分发内容的出口；
- 在封装组件中，使用特殊的元素<slot> 可以为封装组件开启一个插槽；
- 该插槽插入什么内容取决于父组件如何使用；
- `v-slot`可缩写成`#`

**插槽的默认内容：**

​	会在没有提供插入的内容时显示，在子组件插槽<slot>元素中放置默认标签元素：

​	

```vue
<slot>
	<p>
        默认内容
    </p>
</slot>
```



**具名插槽：**

当子组件存在多个slot插槽的时候，父组件要在要在特定的slot插槽放入内容时，应该在调用组件时对其添加v-slot属性并附带插槽的name值，子组件应该预先设置每个slot的name值：

```vue
<template v-slot:name>
	<button></button>
</template>
```

具名插槽使用时也有缩写，即把参数之前的所有内容（v-slot:）替换为字符 # ;

## 六. 理解作用域插槽以及在什么场景下使用（选做）

- 核心：将子组件中的数据传递到父组件的slot来使用

- 绑定在`<slot>`元素上的 attribute 被称为**插槽prop。**现在，在父级作用域中，我们可以使用带值的`v-slot`来定义我们提供的插槽prop的名字：

  ```vue
  <template v-slot:default="slotProps"></template>
  ```

  

#### 1. 在Vue中有渲染作用域的概念：

- 父级模板里的所有内容都是在父级作用域中编译的；
- 子模板里的所有内容都是在子作用域中编译的；



#### 2. 独占默认插槽的缩写

如果当前的slot是默认 插槽 default，那么在使用的时候 `v-slot:default=“slotProps"` 可以简写为 `v-slot="slotProps"`

如果插槽只有默认插槽时，组件的标签可以被当做插槽的模板来使用，可以将v-slot直接用在组件上，官方文档对此的描述："当被提供的内种只有默认插槽时，组件的标签才可以被当作插槽的模板来使用，这样我们就可以把`v-slot`直接用在组件而不是`<template></template>`模板上：
```vue	
<todo-list v-slot:default="slotpProps">
	Content
</todo-list>
```

更简写的形式：

```vue
<todo-list v-slot="slotpProps">
	Content
</todo-list>
```





#### 3. 具名插槽

```vue
<template>
	<slot name="TabCon"></slot>
</template>
```

```vue
<nav-bar>
	<template v-slot:TabCon></template>
</nav-bar>
```

跟`v-on`和`v-bind`一样，`v-slot`也有缩写，即把参数之前的所有内容（`v-slot`）替换为字符`#`。

例如`v-slot:header`可以被重写为`#header`。





#### 4. 默认插槽和具名插槽混合

如果同时有默认插槽和具名插槽，则按照使用完整的基于`<template>`的语法。







1. jsconfig.json
   使vscode更友好的提示

2. 引入的vue的版本
3. 单文件vue是有自己的作用域
4. vite创建一个Vue项目









组件中css设置作用域防止样式污染： 在<style>标签中添加 scoped 属性



vue create  项目名 	    -- 基于 webpack 打包

npm init vue@latest	  -- 基于 Vite 打包

























