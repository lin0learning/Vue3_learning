const baseURL= "http://123.207.32.32:8000"
// 1. 公共基础配置
axios.defaults.baseURL = baseURL
axios.defaults.timeout = 6000
axios.defaults.headers = {}

// axios.get("/home/multidata").then(res => {
//     console.log(res.data)
// })

// 2. axios.all 同时发起多个请求
axios.all([
    axios.get("/home/multidata"),
    axios.get("http://123.207.32.32:9001/lyric?id=500665346")
]).then(res => {
    console.log(res)
})