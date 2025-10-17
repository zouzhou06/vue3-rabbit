import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

//测试接口函数
import {getCategory} from '@/apis/testAPI'
getCategory().then(res=>{
    console.log(res);
    
})

app.use(createPinia())
app.use(router)

app.mount('#app')
