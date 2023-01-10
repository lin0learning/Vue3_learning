# Day09 作业布置

## 一. 完成课堂所有的代码



## 二. Vuex中如何发送异步请求，以及组件如何知道异步请求的结果？

在vuex中不能在mutation函数中发送异步请求，因为如果在mutation函数中发送异步请求，devtools无法进行数据追踪，所以需要在action函数中发送异步请求，请求到数据后再提交mutation，提交mutation的同时把请求到的数据一同传递过去。mutation函数接收到action提交的数据后，可以直接修改state，修改完state数据就会被保存在state中

假如组件派发了一个action函数，要想知道action函数在何时结束了异步请求，需要返回一个Promise对象，在这个Promise内部发送网络请求，当发送完网络请求，并把数据提交给mutation函数后，我们可以在Promise内部主动调用resolve，当我们调用resolve后，我们在组件中进行派发action函数的动作就会返回一个Promise对象，我们只需要调用then函数即可拿到resolve的结果，当这个then中有结果或者被调用时，就表明异步请求结束了

组件想要知道异步请求的结果，一是可以通过上面说的resolve，把结果放到resolve中，但是不推荐这样做，没有意义

最好是直接在state中取$store.state.banners



## 三. Vuex如何划分模块？什么是命名空间？

vuex划分模块需要用到modules选项，假如我们有两个模块，分别是home模块和about模块，这两个模块分别管理自己的状态，每个模块都可以有state、getters、mutations、actions、modules，我们把这些东西组织成一个对象再导出给根模块，然后在根模块的modules中进行注册即可

当我们划分模块后，在组件中使用模块中的内容时需要注意，是否划分了命名空间，默认是没有划分的

如果没有划分命名空间，需要注意，模块中定义的名称不要和根模块进行重复，在使用getters时需要这么写

$store.getters.xxx

在提交mutation或者action函数时需要这么写

const store = useStore()

store.commit("xxx")

store.dispatch("xxx")



如果划分了模块名，就是在模块中多加一个namespace选项，值为true

在使用getters时需要这么写：$store.getters["模块名/xxx"]

在提交mutation或者action函数时需要这么写：

store.commit("模块名/xxx")

store.dispatch("模块名/xxx")



但是无论你是否划分了模块名，想要获取state中的值，都需要这么写：$store.state.模块名.xxx



## 四. 什么是Pinia？和Vuex有什么区别？

- pinia是一个用于对状态进行管理的库，跨组件跨页面对状态进行共享
  - 与vuex和redux在作用上并无区别
- 区别
  - pinia没有mutations选项，因为mutations的出现解决的问题是让devtools进行状态追踪
    - 但是随着技术的发展，pinia已经解决的这个没有mutation依然可以跟踪状态的问题
  - 我们可以在任意组件中拿到store然后直接修改state中的任意值
  - 不再需要modules这样的嵌套结构，取而代之的是可以创建一个个store
    - 想要用时直接拿到store：const homeStore = useHome()，然后直接使用即可
    - 想要拿到别的store，也是直接拿：const aboutStore = useAbout()，然后用就行
    - 你可以在一个组件中拿任意数量的store
    - 除此之外你还可以在某个store中拿另外的store，然后使用store中的任何东西
    - 比如你想在某个store的某个getter函数中使用其他store的某个getter函数，在当前getter函数中可以这么写：
      - const aboutStore = useAbout();
      - aboutStore.某个about中getter函数
  - 使用上的区别
    - 我们在vuex中使用某个state时，需要$store.state.xxx
      - 在pinia中直接拿到store之后store.xxx即可
    - 我们在vuex中使用某个getter函数时，需要$store.getters.xxx
      - 在pinia中拿到store后，store.xxx即可
    - 在vuex中进行异步请求需要派发action函数
      - 在pinia中拿到store后，直接调用action函数即可
    - 在getter函数中，第一个参数是state，可以通过这个参数拿state
      - 除了这个还可以通过this拿到当前的整个store，使用里面state、getter函数或者action函数
    - 在action函数中，没有固定的参数，如果有参数，也是在调用action函数时传递过来的参数
      - 只能通过this拿到当前的store，再拿state进行赋值



## 五. Pinia中有哪些核心概念，如何使用这些核心概念？

- state
  - state是一个选项，这个选项的值需要是一个函数，函数返回一个对象，对象中存储数据
  - 在组件中拿到当前的store直接使用即可，store.xxx
- getters
  - getters也是一个选项，这个选项的值是一个对象，对象中存储着一个个函数，每个函数可以有一个参数state，通过state可以获取到当前store的state
  - 除此之外每个函数还可以拿到一个this，这个this就是当前的整个store实例
  - 通过这个this，可以想用谁就用谁
  - 在组件中使用也是拿到store直接store.xxx即可
- actions
  - 在actions中，主要存放一个个函数，每个函数最主要的工作发送异步请求，获取到数据后直接修改state
  - 每个action函数并不像getter函数一样，第一个参数是state，它可以没有参数
  - 需要通过this拿到state然后再修改state中的值
  - 在组件中拿到store后直接调用即可，store.xxx()
    - 如果你在此时传递参数，那么就可以在action中拿到参数
- 没有模块的概念
  - 在vuex中会有modules的概念
  - 但是在pinia中没有，想要有相同的概念，只需要多创建结构store即可
  - store与store之前没有什么必然的联系
  - 如果你想在某个store中使用另一个store中的内容，只需要拿到那个store使用里面的内容即可，灵活



## 六. 自己对axios进行简单封装

```js
import axios from "axios"

class YTRequest {
  constructor(baseURL, timeout = 5000, headers = {}) {
    this.instance = axios.create({
      baseURL,
      timeout,
      headers
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => resolve(res)).catch(err => reject(err))
    })
  }

  get(config) {
    return this.request({...config, method: "GET"})
  }

  post(config) {
    return this.request({...config, method: "post"})
  }
}

export default (baseURL, timeout, headers) => new YTRequest(baseURL, timeout, headers)
```

```js
import useAxios from "./service/axios"

const axios = useAxios("http://123.207.32.32:9001", 6000, {})

axios.request({
  url: "/lyric",
  params: {
    id: 500665346
  }
}).then(res => console.log(res.data))

axios.request({
  url: "http://123.207.32.32:1888/02_param/postjson",  // 这样写可以覆盖掉之前设置的baseURL
  method: "POST"
  data: {
    name: "yt",
    age: 22,
  }
}).then(res => console.log(res.data))

axios.post({
  url: "http://123.207.32.32:1888/02_param/postjson",
  data: {
    name: "yt",
    age: 22,
  }
}).then(res => console.log(res.data))

// 创建新的axios实例
const axios2 = useAxios("http://123.207.32.32:1888", 4000, {})

axios2.post({
  url: "/02_param/postjson",
  data: {
    name: "yt",
    age: 22,
  }
}).then(res => console.log(res.data))
```



















































