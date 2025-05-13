<script setup lang="ts">
import { watch, onMounted, onUnmounted, ref } from 'vue'
/**
 * 全局配置 ant-design
 * 
 * 
 * 
 */
import { useAppConfigStore } from '@/stores/appStore'
const appConfig = useAppConfigStore()
const themex = appConfig.themex
const locale = appConfig.locale

import { theme } from 'ant-design-vue'
const { useToken } = theme
const { token } = useToken()
watch(
  () => appConfig.themex, // 如果 themex 是 reactive，监听整个对象
  (newVal, oldVal) => {
    appConfig.changeThemeCss(token.value)
  },
  { deep: true } // 深度监听对象内部属性
)
// 全局配置完成=======================================


// 配置路由↓↓↓========================================↓
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
// 配置路由↑↑↑========================================↑

// 监听系统主题变化
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
const handleThemeChange = (e:any) => {
  if(appConfig.activeTheme === 'contrast') {
    console.log('当前主题为自动')
    appConfig.setIsDarkMode(e.matches)
    console.log(appConfig.isDarkMode,appConfig.isDarkMode?'dark':'light')
    appConfig.changeTheme({algorithm: e.matches?theme.defaultAlgorithm:theme.darkAlgorithm})
  }
}

const isLoading = ref(true)

onMounted(() => {
  console.log('页面渲染完成，DOM 已挂载')
  setInterval(() => {
    isLoading.value = false
  }, 1000)
  // 监听系统主题变化
  appConfig.changeThemeCss(token.value)
  mediaQuery.addEventListener('change', handleThemeChange)
})

onUnmounted(() => {
  mediaQuery.removeEventListener('change', handleThemeChange)
})




// 组件
import Load from '@/components/loadingPage.vue'
</script>

<template>
  <transition name="fade">
    <div v-if="isLoading" :style="{background:appConfig.themecss.colorBgBase}" style="width: 100%;height: 100vh;display: flex;align-items: center;justify-content: center;position: fixed;z-index: 2000;">
      <Load/>
    </div>
  </transition>
  
  
  <a-config-provider v-show="!isLoading" :theme="themex" :locale="locale" mode="out-in">
    <router-view v-slot="{ Component }">
      <transition name="fade" :style="{color:appConfig.themecss.colorTextBase,background:appConfig.themecss.colorBgBase,fontSize:`${appConfig.themecss.fontSize}px`}">
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
