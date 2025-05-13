<script setup lang="ts">
import { ref } from 'vue'
const icons = [
    'sunny',
    'moon',
    // 'contrast'
]
// 主题图标

// 获取主题颜色

import { useAppConfigStore } from '@/stores/appStore'
const appConfig = useAppConfigStore()
import { theme } from 'ant-design-vue'


function changeThemeMode(icon: string) {
    console.log(appConfig.activeTheme,icon)
    // switch (icon) {
    //     case 'sunny':
    //         console.log('变dark')
    //         appConfig.setActiveTheme('moon')
    //         appConfig.changeTheme({algorithm: theme.defaultAlgorithm})
    //         break
    //     case 'moon':
    //         console.log('变auto')
    //         console.log(appConfig.isDarkMode)
    //         appConfig.setActiveTheme('contrast')
    //         appConfig.changeTheme({algorithm: appConfig.isDarkMode?theme.defaultAlgorithm:theme.darkAlgorithm})
    //         break
    //     case 'contrast':
    //         console.log('变light')
    //         appConfig.setActiveTheme('sunny')
    //         appConfig.changeTheme({algorithm: theme.darkAlgorithm})
    //         break
    //     default:
    //         console.log('contrast')
    // }

    switch (icon) {
        case 'sunny':
            console.log('变dark')
            appConfig.setActiveTheme('moon')
            appConfig.changeTheme({algorithm: theme.defaultAlgorithm})
            break
        case 'moon':
            console.log('变auto')
            // console.log(appConfig.isDarkMode)
            appConfig.setActiveTheme('sunny')
            appConfig.changeTheme({algorithm: theme.darkAlgorithm})
            break
        default:
            console.log('contrast')
    }
}


console.log(appConfig.themecss)
</script>

<template>
    <div class="icon-display">
        <!-- <a-popover trigger="hover" placement="bottomRight">
            <template #content>
                <div>123123</div>
            </template>
            <div>
                <ion-icon :style="{color:appConfig.themecss.colorTextBase}" :name="activeTheme" @click="changeThemeMode(activeTheme)"></ion-icon>
            </div>
        </a-popover> -->
        <ion-icon :style="{color:appConfig.themecss.colorTextBase}" :name="appConfig.activeTheme" @click="changeThemeMode(appConfig.activeTheme)"></ion-icon>
    </div>
</template>


<style scoped>
ion-icon {
    font-size: 1.5rem;
}
.icon-display{
    width: 24px;
    height: 24px;
    &:hover{
        cursor: pointer;
    }
}
</style>