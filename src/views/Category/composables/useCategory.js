//封装业务数据相关代码
import {getCategoryAPI} from '@/apis/category'
import { useRoute } from 'vue-router'
import { ref,onMounted } from "vue"
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
    const categoryData = ref({})
// 调取路由
    const route = useRoute()
    const getCategory = async(id = route.params.id) => {
      const res = await getCategoryAPI(id)
      categoryData.value = res.result
}

    onMounted(()=>{
  getCategory()
})

//目标：路由参数变化的时候，可以把分类数据的接口重新发送
onBeforeRouteUpdate((to)=>{
  // console.log('路由变化了');
  console.log(to);
  
  getCategory(to.params.id)
  
})

return {
    categoryData
}
}