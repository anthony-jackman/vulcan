<script setup>

function toggleModal() {
  // console.log('I was clicked');
  modalActive.value = true;
  //console.log(btnPressed());
};
function closeModal() {
  modalActive.value = false;
};
</script>

<template>
  <div class="level">
    <div id="dacLogo" class="level-left">
      <div class="level-item">
        <a href='https://defenseammunitioncenter.army.mil'>
          <img alt="DAC logo" src="@/assets/icons/DAC_high_FX.png" />
        </a>
      </div>
    </div>
    <div id="footer-middle">
      <div class="has-text-centered">
        <p>This is an Offical U.S. Army Website</p>
      </div>
      <div class="has-text-centered">
        <p>Date Last Updated: 23 October 2023</p>
      </div>
      <div class="has-text-centered">
        <p>Defense Ammunition Center | 1C Tree Road | McAlester, OK | 74501</p>
      </div>
      <div id='moreLinks' class='columns'>
        <div class="column">
          <ul class="block-list is-small">
            <li class="has-background-grey-light">
              <RouterLink :to="{ name: 'accessibility' }">Accessibility</RouterLink>
            </li>
            <li class="has-background-grey-light"><a class="list-item" href='https://www.army.mil/info/a-z' target='_blank'>Army Info A-Z</a></li>
            <li class="has-background-grey-light"><a class="list-item" href='mailto:amy.r.cate.civ@army.mil' target='_blank'>Contact Us</a></li>
            <!-- <li class="has-background-grey-light"><a class="list-item" href='mailto:amy.r.cate.civ@army.mil' target='_blank'>Contact Us</a></li> -->
          </ul>
        </div>
        <div class="column">
          <ul class="block-list is-small is-right">
            <!-- <li class="has-background-grey-light"><a href='mailto:DAC_WEBMASTER@us.army.mil?subject=Feedback from website'>Webmaster</a></li> -->
            <li class="has-background-grey-light"><a href='https://www.rmda.army.mil/foia/RMDA-FOIA-Contact.html' target='_blank'>FOIA</a></li>
            <li class="has-background-grey-light"><a href='https://www.inscom.army.mil/isalute/' target='_blank'>iSalute</a></li>
            <li class="has-background-grey-light"><RouterLink :to="{ name: 'privacy-security' }">Privacy &amp; Security</RouterLink></li>
          </ul>
        </div>
        <!-- <div class="column">
          <ul class="block-list is-small">
            <li class="has-background-grey-light"><a href='https://defenseammunitioncenter.army.mil' target='_blank'>Sitemap</a></li>
          </ul>
        </div> -->
      </div>
    </div>
    <div id="armyLogo" class="level-right">
      <div class="level-item">
        <a href='https://www.army.mil' target="_blank">
          <img src='@/assets/icons/army_logo1_pos_rgb_300ppi.png' alt="something here." />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
#dacLogo img {
  width: 125px;
  height: 125px;
}
#armyLogo img {
  width: 261px;
  height: 59px;
  // width: 4217px;
  // height: 996px;
}

</style>
