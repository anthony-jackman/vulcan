<script setup></script>

<template>
  <h1 class="title has-text-centered">Navy Training Site Information</h1>
  <hr />
  <p>Click the link below to see points of contact, housing locations, and other site-specific information for each Navy site that offers DAC courses.</p>
  <ul>
    <li><RouterLink :to="{ name: 'sealbeach' }">NWS Seal Beach, CA</RouterLink></li>
    <li><RouterLink :to="{ name: 'mcasMiramar' }">MCAS Miramar, San Diego, CA</RouterLink></li>
    <li><RouterLink :to="{ name: 'mcagc29Palms' }">MCAGCC 29 Palms, CA</RouterLink></li>
    <li><RouterLink :to="{ name: '20srgGulfport' }">20SRG Gulfport, MS</RouterLink></li>
    <li><RouterLink :to="{ name: 'dacMcAlester' }">Defense Ammunition Center, McAlester, OK</RouterLink></li>
    <li><RouterLink :to="{ name: 'ewtglantLittleCreek' }">EWTGLANT NAB Little Creek, VA</RouterLink></li>
    <li><RouterLink :to="{ name: 'mcbhKaneoheBay' }">MCBH - Kaneohe Bay, HI</RouterLink></li>
    <li><RouterLink :to="{ name: 'navairstaJacksonville' }">NAS Jacksonville, FL</RouterLink></li>
    <li><RouterLink :to="{ name: 'nuwcKeyport' }">NUWC Keyport, WA</RouterLink></li>
    <li><RouterLink :to="{ name: 'navmagIndianIsland' }">NAVMAG Indian Island, WA</RouterLink></li>
    <li><RouterLink :to="{ name: 'navstaNorfolk' }">Norfolk, VA</RouterLink></li>
    <li><RouterLink :to="{ name: 'navairstaOceana' }">NAS Oceana, VA</RouterLink></li>
    <li><RouterLink :to="{ name: 'navsupactBahrain' }">NSA Bahrain</RouterLink></li>
    <li><RouterLink :to="{ name: 'navwpnstaCharleston' }">NWS Charleston, SC</RouterLink></li>
    <li><RouterLink :to="{ name: 'okinawa' }">Okinawa, Japan</RouterLink></li>
    <li><RouterLink :to="{ name: 'navstaRota' }">Rota, Spain</RouterLink></li>
    <li><RouterLink :to="{ name: 'navbaseSanDiego' }">San Diego, CA</RouterLink></li>
    <li><RouterLink :to="{ name: 'navsupactNaples' }">NSA Naples, Italy</RouterLink></li>
    <li><RouterLink :to="{ name: 'navairstaSigonella' }">Sigonella, Italy</RouterLink></li>
    <li><a href="/docs/Yokosuka_AMMO_Classes_Notice.pdf" target="_blank">Yokosuka, Japan (pdf)</a></li>
    <li><RouterLink :to="{ name: 'mcasCherryPoint' }">MCAS Cherry Point, NC</RouterLink></li>
    <li><RouterLink :to="{ name: 'navairwpnstaChinaLake' }">Naval Air Weapons Station, China Lake, CA</RouterLink></li>
    <li><RouterLink :to="{ name: 'mcbPendleton' }">MCB, Camp Pendleton, CA</RouterLink></li>
    <li><RouterLink :to="{ name: 'mcasPendleton' }">MCAS, Camp Pendleton, CA</RouterLink></li>
    <li><RouterLink :to="{ name: 'navbaseGuam' }">Guam</RouterLink></li>
    <li><RouterLink :to="{ name: 'navairfacElCentro' }">NAF El Centro</RouterLink></li>
    <li><RouterLink :to="{ name: 'navairstaWhidbeyIs' }">NAS Whidbey Island, WA</RouterLink></li>
  </ul>
</template>

<style lang='scss' scoped>

</style>