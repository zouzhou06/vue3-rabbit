<script setup>
import { useScroll } from '@vueuse/core'
const { y } = useScroll(window)



</script>

<template>
  <div class="app-header-sticky " :class="{ show: y > 78 }">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->

      <ul class="app-header-nav">
        <li class="home">
            <router-link to="/">首页</router-link>
        </li>
        <li>
            <router-link to="/">居家</router-link>
        </li>
        <li>
            <router-link to="/">美食</router-link>
        </li>
        <li>
            <router-link to="/">服饰</router-link>
        </li>
        <li>
            <router-link to="/">母婴</router-link>
        </li>
        <li>
            <router-link to="/">个护</router-link>
        </li>
        <li>
            <router-link to="/">严选</router-link>
        </li>
        <li>
            <router-link to="/">数码</router-link>
        </li>
        <li>
            <router-link to="/">运动</router-link>
        </li>
        <li>
            <router-link to="/">杂项</router-link>
        </li>
      </ul>

      
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>

.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
}

.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}
.app-header-nav li {
    margin: 20px;
}
</style>