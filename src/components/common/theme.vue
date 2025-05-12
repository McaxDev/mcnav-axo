<script setup lang="ts">
import { ref } from 'vue'
let iconName = ref('')
</script>

<template>
    <icon>
        <template #component>
            <ion-icon :name="iconName" size="large" color="primary"></ion-icon>
        </template>
    </icon>
</template>


<style>
</style>