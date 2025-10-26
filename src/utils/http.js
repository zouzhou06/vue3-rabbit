// axios基础的封装
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import axios from 'axios'

const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    // baseURL:'https://pcapi-xiaotuxian-front-devtest.itheima.net/home/category/head',
    timeout:50000

})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    // 从pinia获取token数据
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))


// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    const userStore = useUserStore()
    // 统一错误提示
    ElMessage({
        type:'warning',
        message:e.response.data.message
    })
    // 404token失效处理
    if(e.response.status === 401) {
        const router = useRouter()
        // 1.清空本地用户数据
        userStore.clearUserInfo()
        // 跳转到登录页
        router.push('/login')


    }

    return Promise.reject(e)
})

export default httpInstance