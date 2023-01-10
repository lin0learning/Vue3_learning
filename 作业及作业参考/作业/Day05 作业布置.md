# Day05 作业布置

## 一. 完成上课所有的代码练习







## 二. 如何进行非父子组件的通信？（整理除了Vuex/Pinia其他方式）

Provide/Inject





## 三. 什么是生命周期函数？说说你对它回调的理解

组件的创建、挂载、更新、卸载等一系列过程，为组件的生命周期。Vue提供了组件的生命周期函数，以知道目前组件正在经历哪一个过程。

created: 组件被创建是创建的回调函数

mounted: 

unmounted: 组件被卸载、销毁时创建的回调函数



## 四. 说说你对动态组件和keep-alive的作用理解

#### 1. component动态组件

 **`<component is="currentTab"></componnet>` 以及动态组件的传值与监听**

在动态组件执行组件间的切换时，会涉及频繁的销毁与注册组件，此时性能不高（缓存被清空），原来组件所保持的一些状态也被销毁，再次加载是也需要重新向服务器获取。

#### 2. keep-alive

**此时希望组件`keep-alive`来保持存活，**使用`<keep-alive></keep-alive>`来包裹动态组件：

```vue
<keep-alive>
	<component is="currentTab"></component>
</keep-alive>
```

`include`属性对名称匹配的组件来保存缓存：

```vue	
<keep-alive include="comp1,comp2...">
	<component is="currentTab"></component>
</keep-alive>
```

**注意：1. 在include属性中，组件名之间用`,`分割（且不能有空格）、正则表达式或一个数组**

​			**2. 组件的名称来自于组件定义时的name选项。**

```vue
<script>
	export default {
        name: "comp1",
    }
</script>
```

`exclude`属性对任何名称匹配的组件都不会被缓存，实际用处：当多个组件需要被缓存而少数几个组件不需要被缓存，则在不需要被缓存的组件添加include属性，其他的组件都会被缓存。

#### 3. 缓存组件的生命周期

对于缓存的组件来说，再次进入时，该组件是不会执行`created`或者`mounted`等生命周期函数的：

但是对**监听何时重新进入组件、何时离开组件有需求**；这个时候可以使用`activated`和`deactivated`这两个生命周期钩子函数来监听；









## 五. 对组件使用v-model的本质是什么？

通常v-model用于input等表单标签当中，

```html
<input v-model="searchText" />
```

等价于：

```html
<input :value="searchText" @input="searchText" = $event.target.value" />
```

当在组件上使用时，`v-model`则会是这样的形式：

```html
<custom-input 
              :model-value="searchText" 
              @update:model-value="searchText = $event"
></custom-input>
```





对组件使用v-model ，`v-model="appCounter"`等同于 

1. `:modelValue=:appCounter"`;
2. `v-on:updata:modelValue="appCounter = $event"`

- `v-bind:value`的数据绑定和`@input`的事件监听

```vue
<counter v-model="appCounter"></counter>
// 等同于
<counter v-bind:modelValue="appCounter" v-on:updata:modelValue="appCounter = $event"></counter>
```

`modelValue`名可以自定义，此外`v-bind`可缩写为`:`，`v-on`可缩写为`@`



#### mixin API：

Mixin对象中的选项和组件对象中的选项发生了冲突，Vue的操作：

1. 如果是data函数的返回值对象
   - 返回值对象默认情况下会<font color="red">进行合并</font>
   - 如果data返回值对象的属性发生了冲突。那么会<font color="red">保留组件自身的数据</font>；
2. 生命周期钩子函数
   - 生命周期的钩子函数会<font color="red">被合并到数组</font>中，都会被调用；
3. 值为对象的选项，例如methods、components和directives，将会被合并成同一个对象。



- 在组件中通过 `mixins: []`
- 全局混入：`app.mixin({})`



## 六. 什么是Composition API？和之前的options API有什么区别？（面试）

组合API

```vue
<script>
	export default {
        // options API
    }
</script>
```





## 七. 如何使用setup函数，并且让数据是响应式的？

在`setup`函数中要使用`props`，那么不可以通过`this`去获取。因为props有直接作为参数传递到`setup`函数中，可以直接通过参数来使用即可。

template中的ref对象会自动解包



## 八. 整理之前学习过的Options API, 并且说出每一个作用

















## 上课自笔记

#### 1. Provide和Inject

组件之间的父子组件通信，引申出非父子组件之间的通信。Provide和Inject用于非父子组件之间共享数据。

inject API 一般是一个数组 `[]`。

![Provide/inject scheme](https://v3.cn.vuejs.org/images/components_provide.png)

如果Provide中提供的一些数据时来自data，那么可能会想要通过this来获取：

```vue
<script>
	export default {
        data() {
            return {
                names: ["11"]
            }
	}
        provide:{
            length: this.names.length
        }
    }
</script>
```

由于这里的this指代的是export default对象中的 this，会报错。应该将provide写成函数的形式，使其形成作用域：

```vue	
<script>
	export default {
        data() {
            return {
                names: ["11"]
            }
	}
        provide() {
            return {
                length: this.names.length
            }
        }
    }
</script>
```

注意：如果修改了data() 中的数据的值之后，在provide中<font color="red">引入的 `this.names.length`本身不是响应式</font>的；可以使用响应式的一些API来包裹provide引入的数据来实现响应式，比如computed函数。

note：<font color="red">computed返回的是一个ref对象</font>



#### 2. 全局事件总线mitt库

Vue3从实例中移除了$on、$off和$once方法，如果希望继续使用全局事件总线，要通过第三方的库。进行事件监听。

课程使用`hy-event-store`库

提及知识回顾：import与export

创建一个模块实例并且导出时:

```
// 导出
export default name
// 导入
import name from 'src'

// 导出时没有default 
export {
	name
}
//导入
import { name } from 'src'
```







$refs：Vue开发中不推荐使用原生JS来操作DOM，应该给元素或者组件绑定一个ref的attribute属性。





对项目的src文件源码进行**打包**：

`npm run build`



**异步组件：**

在Vue中实现异步组件，

```vue	
<script>
    import { defineAsyncComponent } from 'vue'
    
	const AsyncCategory = defineAsyncComponent() => import("./Category.vue")
</script>
```





`setup`中禁用 this



