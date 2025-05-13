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
  }

  const activeTheme = ref('sunny')
  function setActiveTheme(active:string){
    activeTheme.value = active
  }


  const themex = reactive(
    {
      "token": {
        "colorPrimary": "#28abce",
        "colorSuccess": "#52c41a",
        "colorWarning": "#faad14",
        "colorError": "#ff4d4f",
        "colorInfo": "#28abce",
        "borderRadius": 16,
        "borderRadiusXS": 24,
        "borderRadiusSM": 16,
        "borderRadiusLG": 20
      },
      algorithm: isDarkMode.value?theme.darkAlgorithm:theme.defaultAlgorithm,
    }
  )
  function changeTheme(config:object){
    Object.assign(themex, config)
    console.log('改变主题~！',themex)
  }

  const themecss = reactive({})
  function changeThemeCss(css:object){
    Object.assign(themecss, css)
    console.log('改变主题css~！',themecss)
  }
  const locale = ref(zhCN)


  

  return { themex,locale, changeTheme, themecss, changeThemeCss, isDarkMode, setIsDarkMode, activeTheme, setActiveTheme }
})
