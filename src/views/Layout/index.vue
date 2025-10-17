<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'

// 触发获取导航列表的action
import {useCategoryStore} from '@/stores/catgory'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(()=>{
    categoryStore.getCategory()
})
</script>

<template>
    <LayoutFixed/>
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />

   
</template>