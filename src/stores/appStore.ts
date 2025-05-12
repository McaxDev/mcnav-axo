import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { theme } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

export const useAppConfigStore = defineStore('appConfig', () => {
  const themex = reactive(
    {
      token: {
        colorPrimary: '#427be6',
        borderRadius: 16,
      },
      algorithm: theme.defaultAlgorithm,
    }
  )
  function changeTheme(config:object){
    Object.assign(themex, config)
  }
  const locale = ref(zhCN)

  return { themex,locale }
})
