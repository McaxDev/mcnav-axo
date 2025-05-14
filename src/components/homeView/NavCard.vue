<script setup lang="ts">
import { useAppConfigStore } from '@/stores/appStore'
const appConfig = useAppConfigStore()
console.log(appConfig.themecss)




function getStyle() {
  return {
    borderRadius: `${appConfig.themecss.borderRadius}px`,
    'background': appConfig.themecss.colorBgBase,
    'padding': '0.6rem 0.8rem',
    // boxShadow:appConfig.themecss.boxShadow,
    '--hover-shadow': appConfig.themecss.boxShadowSecondary,
    '--active-bg': appConfig.themecss.colorBgTextHover,
  }
}
</script>

<template>
  <div class="navtab" :style="getStyle()">1231</div>
</template>


<style scoped>
.navtab{
    cursor: pointer;
    &:hover{
        box-shadow: var(--hover-shadow) !important;
        transform: scale(1.04);
    }
    &:active{
        background: var(--active-bg) !important;
    }
}
</style>