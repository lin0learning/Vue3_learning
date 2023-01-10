import { createApp } from 'vue'
import App from './App.vue'
import Lic from './axios/05_index'


createApp(App).mount('#app')

Lic.requeset({
    url: "/lyric?id=500665346"
}).then(res => {
    console.log(res)
})

Lic.get({
    url: "/lyric",
    params: {
        id: 500665346
    }
}).then(res => {
    console.log(res)
})