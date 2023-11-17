<script setup>
// import { RouterLink } from 'vue-router';

</script>

<template>

  <div class="courselist">
    <h2 class="title has-text-centered mt-3">Classroom Training</h2>
    <hr class="divider" />
    <p>DAC offers a variety of classroom training courses at our local site (McAlester, OK) and at our Regional Training Sites. If the course is open for registration, you will see an availability link with a Point of Contact after clicking on the course number below.</p>
    <p>To attend a DAC classroom training course you must be nominated by your command. If your command has access to the Army Training Requirements &amp; Resources System (ATRRS), you must reserve a slot for the course in ATRRS.</p>
    <p><strong>Reporting Instructions:</strong> Refer to <a href='/docs/DAC_Student_Reporting_Instructions.pdf' target='_blank'>Reporting Instructions (PDF Format)</a> for specific information about preparing for and reporting to classes conducted at McAlester, OK.  If you do not receive reporting instructions for a specific course via email two weeks prior to the scheduled class start date, please contact 918-420-8707 or 918-420-8489, DSN 956.  Students scheduled for resident training at McAlester, OK, must acquire their own personal transportation and lodging accommodations; on-base lodging is not available. A non-availability statement is available upon request.</p>
    <p>Class schedules are subject to change. Please verify class dates prior to preparing travel orders.</p>
    <table class="table is-fullwidth is-striped is-hoverable">
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
          <td><RouterLink :to="{ name: 'ammo01' }">AMMO-01</RouterLink></td>
          <td>9E-F62/920-F30</td>
          <td>Conventional Ammunition Orientation</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo04' }">AMMO-04</RouterLink></td>
          <td>9E-F63/920-F31</td>
          <td>Ammunition Demilitarization</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo12' }">AMMO-12</RouterLink></td>
          <td>4E-F22/645-F9 (MC)</td>
          <td>Ammunition Storage</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo14' }">AMMO-14</RouterLink></td>
          <td>4E-F31/645-F15</td>
          <td>Ammunition Surveillance</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo28' }">AMMO-28</RouterLink></td>
          <td>4E-F32/645-F16 (MC)</td>
          <td>Army Electrical Explosives Safety (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo29' }">AMMO-29</RouterLink></td>
          <td>4E-F34/645-F18 (MC)</td>
          <td>Navy Electrical Explosives Safety (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo33' }">AMMO-33</RouterLink></td>
          <td>9E-F65/920-F33 (MC)</td>
          <td>Explosives Safety and Environmental Risk Management (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo36' }">AMMO-36</RouterLink></td>
          <td>4E-F36/645-F20 (MC)</td>
          <td>Explosives Safety for Naval Facility Planning (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo38' }">AMMO-38</RouterLink></td>
          <td>4E-F66/645-F50</td>
          <td>Guided Missiles and Large Rockets</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo43' }">AMMO-43</RouterLink></td>
          <td>8A-F60/551-F52 (MC)</td>
          <td>Intermodal Dry Cargo Container/CSC Reinspection (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo47' }">AMMO-47</RouterLink></td>
          <td>4E-F37/645-F21 (MC)</td>
          <td>Air Force Electrical Explosive Safety (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo51mvrc' }">AMMO-51-MV/RC</RouterLink></td>
          <td>4E-F40/645-F24 (MC)</td>
          <td>Naval Motor Vehicle and Railcar Inspection (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo51mv' }">AMMO-51-MV</RouterLink></td>
          <td>4E-F41/645-F25 (MC)</td>
          <td>Naval Motor Vehicle Inspection (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo54' }">AMMO-54</RouterLink></td>
          <td>9E-F60/950-F39</td>
          <td>Risk Management and Preparation of SOPs for Ammunition and Explosive Operations (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo60' }">AMMO-60</RouterLink></td>
          <td>4E-F23/645-F10 (MC)</td>
          <td>Technical Ammunition</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo62' }">AMMO-62</RouterLink></td>
          <td>9E-F58/322-F37 (MC)</td>
          <td>Technical Transportation of Hazardous Materials (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo74' }">AMMO-74</RouterLink></td>
          <td>4E-F48/645-F32 (MC)</td>
          <td>Explosives Safety Officer Orientation Course (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'ammo82' }">AMMO-82</RouterLink></td>
          <td>4E-F24/431-F8</td>
          <td>U.S. Army Explosives Safety Quantity Distance and Site Planning (CERT)</td>
        </tr>
        <tr>
          <td><RouterLink :to="{ name: 'pack1b' }">PACK-1B</RouterLink></td>
          <td>8A-F61/551-F53</td>
          <td>Military Preservation and Packaging for Storage and Shipment (Phase 2) ( CERT)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
