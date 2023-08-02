<script setup>
  import { RouterLink } from 'vue-router';

  document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
</script>

<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a> -->

    <a role="button" class="navbar-burger" aria-label="site menu" aria-expanded="false" data-target="dacCCmenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="dacCCmenu" class="navbar-menu">
    <div class="navbar-start">
      <!-- <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div> -->
    </div>

    <div class="navbar-end">
      <RouterLink :to="{ name: 'home' }" class='navbar-item'>Home</RouterLink>
      <RouterLink :to="{ name: 'classroom' }" class='navbar-item'>Classroom Trianing</RouterLink>
      <RouterLink :to="{ name: 'online' }" class='navbar-item'>Online Training</RouterLink>
      <RouterLink :to="{ name: 'mobileapps' }" class='navbar-item'>Mobile Apps</RouterLink>
      <RouterLink :to="{ name: 'navytrng' }" class='navbar-item'>Navy Training</RouterLink>
      <RouterLink :to="{ name: 'faq' }" class='navbar-item'>Frequently Asked Questions</RouterLink>
      <RouterLink :to="{ name: 'about' }" class='navbar-item'>About</RouterLink>
      </div>
  </div>
</nav>


</template>

<style lang='scss' scoped>
// .navbar {
//   transition: transform 200ms ease-out;
// }
</style>