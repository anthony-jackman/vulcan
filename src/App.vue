<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import HeroBar from '@/components/HeroBar.vue';
import SiteFooter from '@/components/SiteFooter.vue';
</script>

<template>
  <div>
    <header>
      <NavBar />
      <HeroBar />
    </header>

    <main class="container mb-6">
      <RouterView />
    </main>

    <footer class="footer has-background-grey-light">
      <SiteFooter class="content" />
    </footer>

  </div>
</template>

<style lang="scss" scoped>


</style>
