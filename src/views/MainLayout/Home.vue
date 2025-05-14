<script setup lang="ts">
import NavCard from '@/components/homeView/NavCard.vue'
</script>

<template>
  <div style="padding: 1rem 1rem 0rem 1rem;height: 100%;">
    home
    <div class="nav-display">
      <NavCard v-for="i in 10"/>
    </div>
    
  </div>
</template>


<style scoped>
.nav-display{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}
</style>