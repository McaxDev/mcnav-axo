<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { useAppConfigStore } from '@/stores/appStore'
const appConfig = useAppConfigStore()

// 定义 props
const props = defineProps({
  modelValue: {
    type: [String], // 支持字符串或数字类型
    required: true, // v-model 通常需要一个值
  },
  options: {
    type: Array,
    required: true, // 选项数组
    validator: (options:Array<String>) => options.length > 0, // 确保选项不为空
  },
  vertical: {
    type: Boolean,
    default: false, // 默认水平布局
  }
})

const emit = defineEmits(['update:modelValue'])

function getSegmentdContainerCss(item:String){
  return {
    background: item === props.modelValue ? appConfig.themecss.colorPrimary : '',
    color: item === props.modelValue ? '#fff' : '',
    '--hover-bg': props.modelValue ? appConfig.themecss.colorBgTextHover : '',
    '--active-bg': props.modelValue ? appConfig.themecss.colorBgTextActive : '',
    borderRadius: `${appConfig.themecss.borderRadius}px`,
  }
}

function changeActive(item:String){
  emit('update:modelValue', item)
}

// :style="{ background: appConfig.themecss.colorTextBase }"
</script>

<template>
  <div class="segmentd" :style="{ flexDirection: vertical ? 'column' : 'row' }">
    <div class="segmentd-container" v-for="item in options" :key:String="item" :style="getSegmentdContainerCss(item)" @click="changeActive(item)">
        {{ item }}
    </div>
  </div>
</template>


<style scoped>
.segmentd{
  display: flex;
  gap: 0.5rem;
  width: 100%;
}
.segmentd-container{
  padding: 0.5rem 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  &:hover{
    cursor: pointer;
    background-color: var(--hover-bg);
  }
  &:active{
    background-color: var(--active-bg);
  }
}
</style>