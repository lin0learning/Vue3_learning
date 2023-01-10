# Day02 作业布置

## 一. 完成上课所有的代码练习







## 二. Vue事件绑定如何传递参数？如何传递event参数？







## 三. v-if和v-show有什么区别？

v-if





## 四. v-for中的key有什么作用？什么是虚拟DOM？

diff算法，提升性能





## 五. 什么是计算属性？和method有什么区别？







## 六. 如何在Vue中侦听一个数据的改变？







## 七. 整理总结今日Vue的知识点内容

v-on支持修饰符，

- `.stop` - 调用 `event.stopPropagation()`。
- `.prevent` - 调用 `event.preventDefault()`。
- `.capture` - 添加事件侦听器时使用 capture 模式。
- `.self` - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
- `.{keyAlias}` - 仅当事件是从特定键触发时才触发回调。
- `.once` - 只触发一次回调。
- `.left` - 只当点击鼠标左键时触发。
- `.right` - 只当点击鼠标右键时触发。
- `.middle` - 只当点击鼠标中键时触发。
- `.passive` - `{ passive: true }` 模式添加侦听器



Vue 提供了以下指令来进行条件判断：

- v-if
- v-else
- v-else-if
- v-show

**template元素**：<template></template> 它仅仅是一个不可见的包装元素，不会在页面中做任何渲染，只接受控制属性。在 template 元素上使用 v-if 条件渲染分组。

类似于微信小程序中的block；

因为 v-if 是一个指令，所以必须将它添加到一个元素上。如果要切换多个元素（包裹多个元素来做 v-if的分割），此时可以把一个元素当做不可见的包裹元素（template）而非使用类似 div 这种会渲染进页面的元素，并在上面使用 v-if 。最终的渲染结果将不包含元素。

```vue
<template v-if="ok">
	<h1>Title</h1>
	<p>Paragraph 1</p>
	<p>Paragraph 2</p>
</template>
```

**注意：**

- v-show 不支持template；
- v-show不可以和v-else一起使用。

**v-show与v-if的区别：**

1. 当 v-show="false" 时，通过`display:none`的方式使其不可见，而 v-if="false" 使内容在DOM树上不可见



**v-for**支持遍历对象，包含共三个参数：

1. 一个参数：value in object
2. 两个参数：(value, key) in object
3. 三个参数：(value, key, index) in object



**数组更新检测**

Vue 将被侦听的数组的变更方法进行了包裹，会触发视图更新，这些方法包括：

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()



**key属性：**

在使用v-for进行列表渲染时，通常会给元素或者组件绑定一个key属性。

官方解释：

- key属性主要用在Vue的虚拟DOM算法，在新旧nodes对比时辨识VNodes；
- 如果不使用key，Vue会使用一种最大限度减少动态元素并且尽可能的尝试这修改/复用相同类型元素的算法；
- 使用key时，它会基于key的变化重新排列元素顺序，并且会移除/销毁key不存在的元素；
- 



**虚拟DOM**

"如果我们不只是一个简单的div，而是有一大堆的元素，那么它们应该会形成一个VNode Tree"







侦听器watch使用方式二：

使用 $watch 的API，在created的生命周期，使用 this.$watch 来侦听；

1. 第一个参数是要侦听的源；
2. 第二个参数是侦听的回调函数callback；
3. 第三个参数是额外的其它选项，比如deep、immediate。

```js
created() {
	this.$watch('message', (val, oldVal) => {
	console.log(val, oldVal);
}, {deep: true, immediate: true})
}
```

宏任务和微任务。



时间循环：JS是单线程语言，--

常见的环境：浏览器和Node环境

闭包：原理和优点，弊端是会造成内存泄露

标记清除法、引用计数

跨域：同源策略，请求实际是发送了，服务器请求也会响应（拒绝）。跨域的解决方式：1. JSONP（原理）；2. 后端开CORS（响应头配置Access-Control-Allow-Origin:   *)

北上广深杭
