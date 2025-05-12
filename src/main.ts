import { createApp } from 'vue'
import { createPinia } from 'pinia'


import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
// import 'animate.css'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)


import { defineCustomElements } from '@ionic/core/loader'
// 引入 Ionicons 的 CSS
import '@ionic/core/css/ionic.bundle.css'
// 注册 Ionicons Web 组件
defineCustomElements(window)

app.mount('#app')