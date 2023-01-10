import { defineStore } from "pinia"

const useInfo = defineStore("info", {
    state: () => ({
        page: 100,
        recommends: [],
        banners: []
    }),
    actions: {
        addPage() {
            this.page++
        },
        addPageOn(num) {
            this.page += num
        },
        async getInfo() {
            const res = await fetch("http://123.207.32.32:8000/home/multidata")
            const data = await res.json()

            this.recommends = data.data.recommend.list
            this.banners = data.data.banner.list
        }
    }
})

export default useInfo