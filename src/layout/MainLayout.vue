<script setup lang="ts">
import theme from '@/components/common/theme.vue'
</script>

<template>
  <div>
    <div class="main-layout">
      <!-- 上部分 -->
      <div class="layout-top">
        <div>
          logos
        </div>
        <theme></theme>
      </div>
      <!-- 下部分 -->
      <div class="layout-bottom">
        <div class="bottom-left">left</div>
        <div class="bottom-right">
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
      background: red;
      flex: 1;
      border-top-left-radius: 12px;
    }
  }
}
</style>