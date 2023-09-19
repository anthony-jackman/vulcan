<script setup>
  import { RouterLink } from 'vue-router';
  import MenuCard from '@/components/MenuCard.vue';

</script>

<template>
  <section>
    <h1 class="title has-text-centered">Welcome to DAC Training</h1>
    <p class="whoarewe">
      The Defense Ammunition Center and US Army Technical Center for
      explosives Safety (DACTCES) provides worldwide support with technical
      expertise and training for munitions, explosives safety, and hazardous
      materials. DACTCES is the Center for Excellence for Munitions and
      Explosives Safety. The Directorate for Training provides
      ammunition-related training for Department of Defense (DOD) military and
      civilian personnel through mobile training teams, regional training
      sites, and distance learning.
    </p>
  </section>

  <section class="mb-5 has-background-danger-light">
    <h2 class="subtitle has-text-centered has-text-danger has-text-weight-semibold">ATRRS</h2>
    <p class="pl-3 pb-4">
      Army Training Requirements and Resource System (ATRRS) has changed the
      way students login and register for courses/exams. You must be connected
      to the military domain (.mil) to access ATRRS.
    </p>
  </section>

  <section class="container">
    <div class="level">
      <RouterLink :to="{ name: 'classroom' }">
        <MenuCard class='bigbutton' image-filename="icon_classroom_1.svg" cardTitle="Classroom Training" />
      </RouterLink>
      <RouterLink :to="{ name: 'online' }">
        <MenuCard class='bigbutton' image-filename="icon_computer_1.svg" cardTitle="Online Training" />
      </RouterLink>
      <RouterLink :to="{ name: 'mobileapps' }">
        <MenuCard class='bigbutton' image-filename="icon_phone_1.svg" cardTitle="Mobile Learning Apps" />
      </RouterLink>
      <RouterLink :to="{ name: 'navytrng' }">
        <MenuCard class='bigbutton' image-filename="icon_anchor_1.svg" cardTitle="Navy Training" />
      </RouterLink>
      <RouterLink :to="{ name: 'faq' }">
        <MenuCard class='bigbutton' image-filename="icon_questionmark_1.svg" cardTitle="Frequently Asked Questions (FAQ)" />
      </RouterLink>
    </div>
  </section>

</template>

<style lang="scss" scoped>
.whoarewe {
  font-size: 1.125rem;
}
 .title, .subtitle {
    margin-top: 1rem;
 }
.bigbutton {
  height: 200px;
  width: 200px;
}

</style>
