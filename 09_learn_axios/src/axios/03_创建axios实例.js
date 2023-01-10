// 创建axios实例对象并进行自定义配置
const instance1 = axios.create({
    baseURL: "http://123.207.32.32:9001",
    timeout: 6000,
    headers: {}
})
instance1.get("/lyric", {
    params: {
        id: 500665346
    }
}).then(res => {
    console.log(res.data.lrc)
})

const instance2 = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 10000,
    headers: {}
})

instance2.get("/home/multidata").then(res => {
    console.log(res.data)
})