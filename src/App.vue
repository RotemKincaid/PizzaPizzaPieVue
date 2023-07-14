<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<template>
    <Header />
    <RouterView />
    <div class="footer"></div>
</template>

<style scoped>
  .footer {
    background-color: rgb(1, 95, 1);
    width: 100vw;
    height: 100px;
    border-top: 3px solid #ffffff;
  }
</style>
