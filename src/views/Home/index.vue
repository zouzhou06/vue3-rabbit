<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeHot from '@/views/Home/components/HomeHot.vue'
import HomeProduct from '@/views/Home/components/HomeProduct.vue'

import HomePanner from './components/HomePanner.vue'

</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />

  <!-- 测试面板组件 -->
  <HomePanner title="新鲜好物" subTitle="新鲜好物，好多商品" >
    <div>
      我是新鲜好物的插槽
    </div>
  </HomePanner>
    <div>
      我是人气推荐的插槽
    </div>
  <HomePanner title="人气推荐" subTitle="人气推荐，好多商品">

  </HomePanner>
</template>