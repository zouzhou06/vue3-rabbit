import { defineStore } from "pinia";
import { ref } from "vue";
import {loginAPI} from '@/apis/user'
export const useUserStore = defineStore('user',()=>{
    // 1.定义管理用户数据的data
    const userInfo = ref({})
    const getUserInfo = async({account,password})=>{
        const res = await loginAPI({account,password})
    }
    return {
        userInfo,
        getUserInfo

    }
}
)