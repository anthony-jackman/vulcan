<template>
  <h2 class="title has-text-centered mt-3">Online Training</h2>
  <hr />
  <div class="courselist">

    <section class="mb-5 has-background-danger-light">
      <h2 class="pt-3 subtitle has-text-centered has-text-danger has-text-weight-semibold">Army Learning Management System (ALMS)</h2>
      <div id='advisory'>
        <div class="advisoryicon">
          <img src="@/assets/icons/warningSymbol.png" :alt="'yellow background triangle with black exclamation point in center'" />
        </div>
        <div class="advisorytext">
          <p class="pl-4 pr-4 pb-4">On or around the 2nd quarter of FY24, the Army Learning Management System (ALMS) will become the Army Training Information System (ATIS-L). A sneak peek is available at <a href='https://www.pdmatis.army.mil/ATIS-Learning-Teaser.mp4' rel='noopener' target='_blank'>https://www.pdmatis.army.mil/ATIS-Learning-Teaser.mp4</a>. Please be prepared for up to two weeks of system downtime once the transition period begins; transition date is currently to be determined. Note DAC is NOT the proponent for ALMS, ATIS-L, or the transition, but we will do our best to provide current information to learners as it becomes available. Training records (and progress) should carry over from ALMS to ATIS-L upon completion of the transition.</p>
        </div>
        <div class="advisoryicon">
          <img src="@/assets/icons/warningSymbol.png" alt="yellow background triangle with black exclamation point in center" />
        </div>
      </div>
    </section>

    <p>Before you register, refer to <a href='/docs/alms_registration_steps_2022dec08.pdf' target='_blank'>ALMS Registration Steps document</a> (PDF format) that will provide step-by-step instructions for registering for online training and accessing your course in the ALMS.</p>
    <p><strong>Helpdesk:</strong> You can receive assistance for online training courses by using this site's useful <RouterLink :to="{ name: 'faq' }">Frequently Asked Questions (FAQ) page</RouterLink> or by contacting the Army Training Help Desk at 1-877-251-0730 or (DSN) 826-4745; 24/7, 365 days per year.</p>
    <table class="table is-fullwidth is-striped is-hoverable">
      <caption>
        <strong>Active (for ATRRS credit) Courses</strong>
      </caption>
      <thead>
        <tr>
          <th>Old Course Number</th>
          <th>TRADOC Course Number</th>
          <th>Long Title</th>
        </tr>
      </thead>
      <tfoot></tfoot>
      <tbody>
        <tr>
          <td><RouterLink :to="{ name: 'ammo10dl' }">AMMO-10-DL</RouterLink></td>
          <td>9E-F62/920-F29 (DL)</td>
          <td>AMMUNITION QUALITY ASSURANCE</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo18dl' }">AMMO-18-DL</RouterLink></td>
          <td>4E-F29/645-F13 (DL)</td>
          <td>BASICS OF NAVAL EXPL HAZARD CONTROL (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo28dl' }">AMMO-28-DL</RouterLink></td>
          <td>4E-F33/645-F17 (DL)</td>
          <td>NAVY ELECTRICAL EXPLOSIVE SAFETY (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo29dl' }">AMMO-29-DL</RouterLink></td>
          <td>4E-F35/645-F19 (DL)</td>
          <td>NAVY ELECTRICAL EXPLOSIVE SAFETY (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo31dl' }">AMMO-31-DL</RouterLink></td>
          <td>9E-F64/920-F32 (DL)</td>
          <td>ENVIRONMENTAL CONSIDERATIONS FOR AMMO PERS</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo36dl' }">AMMO-36-DL</RouterLink></td>
          <td>4E-F51/645-F35 (DL)</td>
          <td>EXPL SAFETY FOR NAVAL FACILITY PLNG (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo37dl' }">AMMO-37-DL</RouterLink></td>
          <td>9E-F66/920-F34 (DL)</td>
          <td>GENERAL TRANS OF HAZ MAT REFRESHER (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo43dl' }">AMMO-43-DL</RouterLink></td>
          <td>8A-F62/551-F54 (DL)</td>
          <td>INTERMODAL DRY CARGO CNTR/CSC REINSPEC (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo45dl' }">AMMO-45-DL</RouterLink></td>
          <td>9E-F67/920-F35 (DL)</td>
          <td>INTRODUCTION TO AMMUNITION (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo47dl' }">AMMO-47-DL</RouterLink></td>
          <td>4E-F38/645-F22 (DL)</td>
          <td>AIR FORCE ELECTRICAL EXPLOSIVE SAFETY (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo49dl' }">AMMO-49-DL</RouterLink></td>
          <td>4E-F39/645-F23 (DL)</td>
          <td>NAVAL EXPL SAFETY MGRS/SUPVRS ORIENTN (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo51mvdl' }">AMMO-51-MV-DL</RouterLink></td>
          <td>4E-F42/645-F26 (DL)</td>
          <td>NAVAL MOTOR VEHICLE INSPECTION (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo51rcdl' }">AMMO-51-RC-DL</RouterLink></td>
          <td>4E-F43/645-F27 (DL)</td>
          <td>NAVAL RAILCAR INSPECTION (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo54dl' }">AMMO-54-DL</RouterLink></td>
          <td>4E-F43/645-F27 (DL)</td>
          <td>RISK MGMT &amp; PREP OF SOP FOR AMMO &amp; EXP (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo63dl' }">AMMO-63-DL</RouterLink></td>
          <td>4E-F44/645-F28 (DL)</td>
          <td>U.S. ARMY EXPL SAFETY FAMILIARIZATION (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo64dl' }">AMMO-64-DL</RouterLink></td>
          <td>4E-F45/645-F29 (DL)</td>
          <td>CLASS V ISSUE &amp; TURN-IN PROC FOR USING UNITS</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo66dl' }">AMMO-66-DL</RouterLink></td>
          <td>4K-F30/494-F35 (DL)</td>
          <td>RADIATION SAFETY</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo67dl' }">AMMO-67-DL</RouterLink></td>
          <td>9E-F69/920-F37 (DL)</td>
          <td>HAZMAT FAMILIARIZATION/SAFETY IN TRANS (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo68dl' }">AMMO-68-DL</RouterLink></td>
          <td>4E-F46/645-F30 (DL)</td>
          <td>MILITARY MUNITIONS RULE (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo75dl' }">AMMO-75-DL</RouterLink></td>
          <td>4E-F49/645-F33 (DL)</td>
          <td>AMMUNITION PHYSICAL SECURITY</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo76dl' }">AMMO-76-DL</RouterLink></td>
          <td>4E-F50/645-F34 (DL)</td>
          <td>IDENTIFICATION OF AMMUNITION</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo78dl' }">AMMO-78-DL</RouterLink></td>
          <td>4E-F62/645-F46 (DL)</td>
          <td>AMMUNITION PUBLICATIONS (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo97dl' }">AMMO-97-DL</RouterLink></td>
          <td>4E-F64/645-F48 (DL)	</td>
          <td>MUNITIONS HISTORY PROGRAM (MHP)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo99dl' }">AMMO-99-DL</RouterLink></td>
          <td>4E-F65/645-F49 (DL)</td>
          <td>APPLICATION OF US ARMY ESQD PRINCIPLES (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo100dl' }">AMMO-100-DL</RouterLink></td>
          <td>4E-F25/431-F9 (DL)</td>
          <td>ARMY EXPLOSIVE SAFETY SITE PLANNING (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo107dl' }">AMMO-107-DL</RouterLink></td>
          <td>4E-F26/431-F10 (DL)</td>
          <td>INTRO TO EXPL SFTY MGMT FOR SFTY PROS (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo108dl' }">AMMO-108-DL</RouterLink></td>
          <td>4E-F27/645-F11 (DL)</td>
          <td>AMMO HANDLERS (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo112dl' }">AMMO-112-DL</RouterLink></td>
          <td>4E-F28/645-F12 (DL)</td>
          <td>AMMUNITION AND EXPLOSIVES STORAGE SAFETY (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'pack1adl' }">PACK-1A-DL</RouterLink></td>
          <td>8A-F63/551-F55 (DL)</td>
          <td>DEFENSE BASIC PRESERVATION AND PACKING (CERT)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
