import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

const app = createApp(App)

//引入初始化样式
import '@/styles/common.scss'

// 引入插件
import {lazyPlugin} from '@/directives/index'
// 引入插件
import {componentPlugin} from '@/components/index'




app.use(createPinia())
app.use(router)

app.mount('#app')
app.use(lazyPlugin)
app.use(componentPlugin)
// 定义全局指令
// 定义懒加载插件


 
   

 



