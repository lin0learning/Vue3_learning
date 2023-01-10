export default {
    state: {
        banner: []
    },
    mutations: {
        getBanners(state, payload) {
            state.banner = payload
        }
    },
    actions: {
        fetchAction(context) {
            fetch("http://123.207.32.32:8000/home/multidata").then(res => {
                res.json().then(data => {
                    // 修改数据
                    context.commit("getBanners", data.data.banner.list)
                })
            })
        }
    }
}