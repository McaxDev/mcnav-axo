import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { theme } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

export const useAppConfigStore = defineStore('appConfig', () => {
  // 判断系统颜色模式
  const isDarkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)
  function setIsDarkMode(isdark:boolean){
    console.log(isdark)
    isDarkMode.value = isdark
    console.log(isDarkMode.value)
  }

  const activeTheme = ref('contrast')
  function setActiveTheme(active:string){
    activeTheme.value = active
  }


  const themex = reactive(
    {
      token: {
        colorPrimary: '#28abce',
        borderRadius: 10,
      },
      algorithm: isDarkMode.value?theme.darkAlgorithm:theme.defaultAlgorithm,
    }
  )
  function changeTheme(config:object){
    console.log('改变主题~！')
    Object.assign(themex, config)
  }

  const themecss = reactive({})
  function changeThemeCss(css:object){
    Object.assign(themecss, css)
  }
  const locale = ref(zhCN)


  

  return { themex,locale, changeTheme, themecss, changeThemeCss, isDarkMode, setIsDarkMode, activeTheme, setActiveTheme }
})
