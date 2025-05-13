<script setup lang="ts">
import theme from '@/components/common/theme.vue'
import { ref, reactive } from 'vue'
import { useAppConfigStore } from '@/stores/appStore'
const appConfig = useAppConfigStore()



const options = reactive(['全部', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'])
const value = ref(options[0])

const optionsNav = reactive(['主页', '服务器', '关于'])
const valueNav = ref(optionsNav[0])


import segmented from '@/components/homeView/segmented.vue'
</script>

<template>
  <div>
    <div class="main-layout">
      <!-- 上部分 -->
      <div class="layout-top">
        <div style="display: flex;flex-direction: row;gap: 1.2rem;align-items: center;">
          <div style="font-weight: bold;letter-spacing: 1px;width: calc(160px - 16px - 1.2rem);font-size: 1.2rem;">
            Axo | MCnav
          </div>
          <div>
            <segmented v-model="valueNav" :options="optionsNav"/>
          </div>
        </div>
        <theme></theme>
      </div>
      <!-- 下部分 -->
      <div class="layout-bottom">
        <div class="bottom-left">
          <div style="display: flex;justify-content: end;flex-direction: column;height: calc(100% - 10px);align-items: center;padding: 0px 10px;">
            <segmented v-model="value" :options="options" vertical/>
          </div>
        </div>
        <div class="bottom-right" :style="{ background : appConfig.themecss.colorBgContainerDisabled, borderTopLeftRadius: `${appConfig.themecss.borderRadius}px` }">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.main-layout{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  .layout-top{
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }
  .layout-bottom{
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    .bottom-left{
      width: 160px;
    }
    .bottom-right{
      flex: 1;
    }
  }
}
</style>