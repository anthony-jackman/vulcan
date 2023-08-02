<script setup>
  import MenuCard from '@/components/MenuCard.vue';
</script>

<template>
    <section>
      <h1>Welcome to DAC Training</h1>

      <p>
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

    <section>
      <h2>ATRRS</h2>
      <p>
        Army Training Requirements and Resource System (ATRRS) has changed the
        way students login and register for courses/exams. You must be connected
        to the military domain (.mil) to access ATRRS.
      </p>
    </section>

    <section>
      <article>
        <MenuCard image-filename="classroom.png" cardTitle="Classroom Training" />
      </article>
      <article>
        <MenuCard image-filename="online.png" cardTitle="Online Training" />
      </article>
      <article>
        <MenuCard image-filename="mobile-apps.png" cardTitle="Mobile Learning Apps" />
      </article>
      <article>
        <MenuCard image-filename="navy.png" cardTitle="Navy Training" />
      </article>
      <article>
        <MenuCard image-filename="faq.png" cardTitle="Frequently Asked Questions (FAQ)" />
      </article>
    </section>
</template>

<style lang="scss" scoped>

</style>
