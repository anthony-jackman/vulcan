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
    <div id="dacLogo">
      <a href='https://defenseammunitioncenter.army.mil'>
        <img alt="DAC logo" src="@/assets/icons/DAC_high_FX.png" />
      </a>
    </div>
    <div id="footer-middle">
      <p>This is an Offical U.S. Army Website</p>
      <p>Date Last Updated: 24 November 2023</p>
      <p>Defense Ammunition Center</p>
      <p>1C Tree Road | McAlester, OK | 74501</p>
      <ul id='moreLinks'>
        <li>
          <RouterLink :to="{ name: 'accessibility' }">Accessibility</RouterLink>
        </li>
        <li>
          <a class="list-item" href='https://www.army.mil/info/a-z' target='_blank'>Army Info A-Z</a>
        </li>
        <li>
          <a class="list-item" href='mailto:usarmy.mcalester.tradoc.mbx.dac-webmaster@army.mil' target='_blank'>Contact Us</a>
        </li>
        <!-- <li class="has-background-grey-light"><a class="list-item" href='mailto:amy.r.cate.civ@army.mil' target='_blank'>Contact Us</a></li> -->
        <!-- <li class="has-background-grey-light"><a href='mailto:DAC_WEBMASTER@us.army.mil?subject=Feedback from website'>Webmaster</a></li> -->
        <li>
          <a href='https://www.rmda.army.mil/foia/RMDA-FOIA-Contact.html' target='_blank'>FOIA</a>
        </li>
        <li>
          <a href='https://www.inscom.army.mil/isalute/' target='_blank'>iSalute</a>
        </li>
        <li>
          <RouterLink :to="{ name: 'privacy-security' }">Privacy &amp; Security</RouterLink>
        </li>
      </ul>
    </div>
    <div id="armyLogo">
      <a href='https://www.army.mil' target="_blank">
        <img src='@/assets/icons/army_logo1_pos_rgb_300ppi.png' alt="something here." />
      </a>
    </div>
</template>
