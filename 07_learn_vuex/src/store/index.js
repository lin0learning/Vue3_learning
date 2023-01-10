import { createStore, storeKey } from 'vuex'
import fetchModule from './modules/fetchBanner'
import userModule from './modules/userCount';

export default createStore({
  state: {
    counter: 100,
    name: "liclo",
    level: 100,
    avator: "http://xxx",
    page: 100,
    bookName: "JavaScript高级程序设计",
    // banner: []
  },
  getters: {
    // 1. 基本使用
    doubleCounter(state) {
      return state.counter * 2;
    },
    // 2. 在该getters属性中,使用其他getters属性
    message(state, getters) {
      return `name: ${state.name} showdbcounter: ${getters.doubleCounter}`
    }
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    changename(state, payload) {
      state.name = payload;
    },
    addPage(state) {
      state.page++
    },
    changeBkName(state, payload) {
      state.bookName = payload
    },
    // getBanners(state, payload) {
    //   state.banner = payload
    // }
  },
  actions: {
    increPageAction(context) {
      context.commit("addPage")
    },
    cgbkNameAction(context, payload) {
      context.commit("changeBkName", payload)
    },
    // 抽成单独的模块
    // fetchAction(context) {
    //   fetch("http://123.207.32.32:8000/home/multidata").then(res => {
    //     res.json().then(data => {
    //       // 修改数据
    //       context.commit("getBanners", data.data.banner.list)
    //     })
    //   })
    // }
  },
  modules: {
    fetch: fetchModule,
    user: userModule
  }
})
