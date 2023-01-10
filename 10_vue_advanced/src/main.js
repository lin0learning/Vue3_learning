import { createApp } from 'vue'

// import App from './01_自定义指令/App.vue'
// import App from './02_内置组件补充/App.vue'
// import App from './04_Render函数/App.vue'
import App from './05_JSX语法基础/App.vue'

import directives from './01_自定义指令/directives/index'

createApp(App).use(directives).mount('#app')

