<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import HeroBar from '@/components/HeroBar.vue';
import SiteFooter from '@/components/SiteFooter.vue';
</script>

<template>

  <!-- <div> -->
    <header class="main-header">
      <NavBar class="navbar has-background-black" />
      <HeroBar class="hero is-medium has-background-grey-light" />
    </header>

    <main class="container mb-6">
      <div class="ml-2-mobile">
        <RouterView />
      </div>
    </main>

    <footer class="footer has-background-grey-light">
      <SiteFooter class="content" />
    </footer>

  <!-- </div> -->
</template>

