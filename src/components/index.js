// components中所有组件都进行全局化注册
// 通过插件的方式
import ImageView from "@/components/ImageView/index.vue"
import Sku from '@/components/XtxSku/index.vue'
import { install } from "element-plus"
export const componentPlugin = {
    install(app) {
        app.component('XtrImageView',ImageView)
        app.component('XtrSku',Sku)
    }
    
}