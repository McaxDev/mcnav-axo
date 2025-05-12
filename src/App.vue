<script setup lang="ts">
/**
 * 全局配置 ant-design
 * 
 * 
 * 
 */
import { useAppConfigStore } from '@/stores/appStore'
const appConfig = useAppConfigStore()
const theme = appConfig.themex
const locale = appConfig.locale
// 全局配置完成=======================================


// 配置路由↓↓↓========================================↓
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
// 配置路由↑↑↑========================================↑

// 页面加载效果↓↓↓========================================↓
import { onMounted } from 'vue'

onMounted(() => {
  console.log('页面渲染完成，DOM 已挂载')
})
// 页面加载效果↑↑↑========================================↑

</script>

<template>
  <a-config-provider :theme="themex" :locale="locale" mode="out-in">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </a-config-provider>
</template>

<style>
body *{
  transition: 0.2s;
}
body{
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
  position: absolute;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  position: absolute;
}
</style>
