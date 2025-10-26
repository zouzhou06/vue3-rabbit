import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPlaginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'




//引入初始化样式
import '@/styles/common.scss'

// 引入插件
import {lazyPlugin} from '@/directives/index'
// 引入插件
import {componentPlugin} from '@/components/index'


const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
// 注册持久化插件
pinia.use(piniaPlaginPersistedstate)

app.use(router)

app.mount('#app')
app.use(lazyPlugin)
app.use(componentPlugin)
// 定义全局指令
// 定义懒加载插件


 
   

 



