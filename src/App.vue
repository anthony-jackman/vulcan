<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue';
  // import NavBar from '@/components/NavBar.vue';
import SiteFooter from '@/components/SiteFooter.vue';
</script>

<template>

  <header>
    <SiteHeader />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <SiteFooter />
  </footer>

</template>

<style scoped>

</style>
