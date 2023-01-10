// 1. request 请求
// axios.request({
//     url: "http://123.207.32.32:8000/home/multidata",
//     method: "get"
// }).then(res => {
//     console.log(res.data)
// })

// 2. get 请求
// axios.get("http://123.207.32.32:9001/lyric?id=500665346").then(res => {
//     console.log(res.data.lrc)
// })
// axios.get("http://123.207.32.32:9001/lyric", {
//     params: {
//         id: 500665346
//     }
// }).then(res => {
//     console.log(res.data.lrc)
// })

// 3. post 请求
axios.post("http://123.207.32.32:1888/02_param/postjson", {
    data: {
        name: "coderwhy",
        password: 123456
    }
}).then(res => {
    console.log(res.data)
})