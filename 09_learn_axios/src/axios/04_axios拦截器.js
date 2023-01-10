import axios from 'axios'

// 1. 请求的拦截
axios.interceptors.request.use((config) => {
    console.log("1. 请求成功的拦截")
    // 1.1 - 开始loading加载动画
    // 1.2 - 对config进行修改
    //  1.2.1 header
    //  1.2.2 登录认证: token/cookie
    //  1.2.3 xxx
    config.baseURL = "http://http://123.207.32.32:9001"
},(err) => {
    console.log("2. 请求失败的拦截")
    return err
})

// 2. 响应的拦截
axios.interceptors.response.use((res) => {
    console.log("3. 响应成功的拦截")
    // 2.1 结束loading加载动画
    // 2.2 转化数据data
    return res.data
},(err) => {
    console.log("4. 响应失败的拦截")
    return err
})