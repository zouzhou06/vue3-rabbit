import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理

    // state导航列表数据
    const cateGoryList = ref([])
    //获取导航数据的方法
    const getCategory = async ()=>{
    const res = await getCategoryAPI()
    console.log(res);
    cateGoryList.value = res.result

}
return {
    cateGoryList,getCategory
}

  
})





