<script setup></script>

<template>
  <h1 class="title has-text-centered">Mobile Apps for Training</h1>
  <hr class="divider"/>
  <h2 class="subtitle">Yellow Book</h2>
  <div class="columns">
    <div class="column is-one-quarter">
      <section class="image">
        <img src='@/assets/icons/yellowbook_icon.png' alt='drawing of the orange letters y and b on a yellow background' />
        <a class="block" href='/videos/yellowBook_demo.mp4' target='_blank'>Watch the demo movie</a>
      </section>
    </div>
    <section id="aboutProduct" class="column">
      <p class="block">Yellow Book provides THE USER IN THE FIELD with a ready "user friendly" consolidated reference to basic data and regulatory criteria. Hazard classification, physical security, marking, transportation and storage data and criteria for selected conventional ammunition and explosive items, guided missiles and rockets, current at the time of publishing, are presented in this listing.</p>
      <p class="block">The data and criteria contained in this app are primarily derived from:</p>
      <div class="content">
      <ul>
        <li>Joint Hazard Classification (JHCS) data base</li>
        <li>Federal Logistics Information System data on Compact Disc (FED LOG)</li>
        <li>Title 49, Code of Federal Regulations (49 CFR)</li>
        <li>Emergency Response Guidebook</li>
      </ul>
  </div>
      <p class="block mb-3">This mobile app is not intended to supersede, contravene, or modify any of these publications or any other DoD or service criteria.</p>
      <section class="appStores">
        <button>
          <a href='http://itunes.apple.com/us/app/yellow-book/id520715004?mt=8' target='_blank'><img src='@/assets/icons/appstore_icon.png' alt='iPhone App Store icon on a black background' /></a>
        </button>
        <button>
          <a href="https://play.google.com/store/apps/details?id=com.serco.yellowbook" target="_blank">
            <img src='@/assets/icons/googleplay_icon.png' alt='Andriod App Store icon on a black background' />
          </a>
        </button>
      </section>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// .title, .subtitle, .table {
//     margin-top: 1rem;
//  }
//  p {
//   margin-bottom: 1rem
//  }
//  p:last-of-type {
//   margin-bottom: 0rem
//  }
 li {
  list-style-type: disc;
  &:last-of-type {
    margin-bottom: 1.125rem
  }
 }
 .appStores button {
    margin-right: 1.125rem
 }
 </style>
