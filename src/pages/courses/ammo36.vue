<script setup>
import ContactInfo from '@/components/ContactModal.vue';
import { ref, computed, onMounted } from 'vue';

const modalActive = ref(false);
const selectedContactId = ref('');
let skedDatas = ref([]);
let sitePocs = ref([]);

onMounted(async () => {
  const responseSkedData = await fetch('/data/ammo36sched.json');
  skedDatas.value = await responseSkedData.json();

  const responseSitePocs = await fetch('/data/ammo36poc.json');
  sitePocs.value = await responseSitePocs.json();
});

const filteredContact = computed(() => {
  if (selectedContactId.value) {
    console.log(selectedContactId)
    return sitePocs.value.filter((poc) => poc.contactId === selectedContactId.value);
    
  } else {
    return [];
  }
});
function toggleModal() {
  // console.log('I was clicked');
  modalActive.value = true;
  //console.log(btnPressed());
}

function closeModal() {
  modalActive.value = false;
};
</script>

<template>
  <h1 class="title has-text-centered mt-3">AMMO-36 Explosives Safety for Naval Facility Planning (CERT) (4E-F36/645-F20 (MC))</h1>
  <section id="isap" class="has-background-grey-lighter has-text-grey-dark has-text-centered block">
    <p>You will receive your Individualized Student Assessment Plan (ISAP) information upon arrival to this class.</p>
  </section>
  <section id="description" class="block">
    <h2 class="subtitle is-inline is-bold">Description: </h2>This course satisfies mandatory training requirements for the certification of Navy/Marine Corps facility planners responsible for overseeing explosives facilities at shore installations, safety department personnel responsible for conducting facility site plan reviews, and personnel within the review chain of a typical Navy/Marine Corps explosives facility site plan as prescribed by DoDI 5160.68 and NAVSEA OP 5, Volume 1. This course provides a comprehensive review of regulations governing Department of Defense (DoD) and Department of Navy (DoN) explosives safety quantity distance (ESQD) standards and the application of these standards, as well as technical training in the preparation and review of DoN site plans submitted for various explosives facilities. Students will receive hands-on training during a Facility Design Problems Workshop using ESQD calculations, scenarios, maps, waivers, and current regulatory guidance.
  </section>
  <section id="audience" class="block">
    <h2 class="subtitle is-inline is-bold">Audience: </h2>Navy/Marine Corps facility planners responsible for overseeing explosives facilities at shore installations, safety department personnel responsible for conducting facility site plan reviews, and personnel within the review chain of a typical Navy/Marine Corps explosives facility site plan as prescribed by DoDI 5160.68 and NAVSEA OP 5, Volume 1. <span class="has-text-weight-bold has-text-danger">NOTE:</span> This course is rated FD3 and not available to International Military Students.
  </section>
  <section id="crseLngth" class="block">
    <h2 class="subtitle is-inline is-bold">Length: </h2>5 Days.
  </section>
  <section id="specInfo" class="block">
    <h2 class="subtitle is-inline is-bold">Special Information: </h2>This course is considered certification training for Navy/Marine Corps facility planners responsible for overseeing explosives facilities at shore installations, safety department personnel responsible for conducting facility site plan reviews, and personnel within the review chain of a typical Navy/Marine Corps explosives facility site plan as prescribed by DoDI 5160.68 and NAVSEA OP 5, Volume 1. This course additionally satisfies the requirements of 8023.24B for the QUAL/CERT Program. Each CO/OIC shall ensure that at least one individual within his command has successfully completed this course and is assigned the responsibility for appropriate review and commentary on all site approvals prepared by or for the activity prior to release to NOSSA in accordance with NAVSEA OP 5, Volume 1, Appendix D.
  </section>
  <section id="reqEqp" class="block">
    <h2 class="subtitle is-inline is-bold">Required Equipment: </h2>None.
  </section>
  <section id="prereqs" class="block">
    <h2 class="subtitle is-inline is-bold">Prerequisites: </h2>Completion of Course No. 4E-F34/645-F18 (MC), NAVY ELECTRICAL EXPLOSIVE SAFETY (CERT), offered by the Defense Ammunition Center (DAC) via instructor-led training and 4E-F39/645-F23 (DL), NAVAL EXPL SAFETY MGRS/SUPVRS ORIENTN (CERT), offered by DAC via distance learning (DL) are highly recommended.
  </section>
  <section id="navyCin" class="block">
    <h2 class="subtitle is-inline is-bold">Navy Course Identification Number (CIN): </h2>A-4E-3003
  </section>
  <section id="navyCdp" class="block">
    <h2 class="subtitle is-inline is-bold">Course Data Processing Code (CDP): </h2>02RK
  </section>
  <section id="secClnc" class="block">
    <h2 class="subtitle is-inline is-bold">Security Clearance: </h2>None required.
  </section>
  <section id="crseTopics" class="block">
    <h2 class="subtitle is-inline is-bold">Course Topics: </h2>
    <div class="content">
      <ul>
      <li>Explosives Hazard Class/Divisions (HC/D)</li>
      <li>Storage Compatibility</li>
      <li>Hazards of Fragments and Blast Wave</li>
      <li>ESQD Separation Distances and NEW Limits</li>
      <li>ESQD for HC/D 1</li>
      <li>ESQD for Mixed Storage of Hazard Class 1</li>
      <li>ESQD for Piers and Wharves</li>
      <li>ESQD for Airfields</li>
      <li>Blast Overpressure Effects</li>
      <li>Electrical Explosives Hazards</li>
      <li>Facility Planning Methodology</li>
      <li>Deviations</li>
    </ul>
    </div>
  </section>
  <section id="availability" class="block">
    <h2 class="subtitle is-inline is-bold">Availability: </h2>If you are affiliated with the Navy or the Marine Corps, request quotas via the Navy Training page of this website. For all other students, admission to a course is by nomination from the prospective student's command. If the nominating command has access to ATRRS, the submission must be made via ATRRS.
  </section>
  <section id="iacet" class="block">
    <h2 class="subtitle is-inline is-bold">The IACET Standard: </h2>DAC has been approved by the International Association for Continuing Education and Training (IACET) as an Authorized Provider of Continuing Education Units (CEUs).  In obtaining this accreditation, the Defense Ammunition Center has demonstrated that it complies with the ANSI/IACET Standard which is recognized internationally as a standard of good practice. The DAC awards 3.8 Continuing Education Units (CEUs) on the course certificate for successful completion of this course.
  </section>
  <section id="sched" class="block">
    <table class="table is-fullwidth is-striped is-hoverable">
      <thead>
        <tr>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Location</th>
          <th>Class #</th>
          <th>Status</th>
          <th>Registration Availability</th>
        </tr>
      </thead>
      <tfoot></tfoot>
      <tbody>
        <tr v-if="skedDatas.length === 0">
          <td colspan="6" class="has-text-centered">No classes scheduled at this time</td>
        </tr>
        <tr v-else v-for="(skedData, index) in skedDatas" :key="index">
          <td>{{ skedData.startDate }}</td>
          <td>{{ skedData.stopDate }}</td>
          <td>{{ skedData.location }}</td>
          <td>{{ skedData.classNumb }}</td>
          <td>{{ skedData.status }}</td>
          <td><button @click="selectedContactId = skedData.contactId, toggleModal($event)" :data-id="skedData.contactId">{{ skedData.contact }}</button></td>
        </tr>
      </tbody>
    </table>
  </section>
  <Teleport to='#modal'>
    <ContactInfo class='contactInfo' @close="closeModal" :modalActive="modalActive" v-for="(contact, index) in filteredContact" :key="index">
      <h2 class="title has-text-centered is-size-3">{{ contact.pocTitle }}</h2>
      <p class="">Please contact the following individual(s):</p>
      <ul>
        <li><span class="has-text-weight-bold">Name:</span> {{ contact.pocName }} </li>
        <li><span class="has-text-weight-bold">Email:</span> {{ contact.pocEmail }} </li>
        <li><span class="has-text-weight-bold">Commercial Phone 1:</span> {{ contact.pocPhone1 }}</li>
        <li><span class="has-text-weight-bold">Commercial Phone 2:</span> {{ contact.pocPhone2 }} </li>
        <li><span class="has-text-weight-bold">DSN:</span> {{ contact.pocdsnPhone }} </li>
      </ul>
      <!-- <div v-if={{ contact.altpocName }}>
        <p>Or their alternate:</p>
        <ul>
          <li><span class="has-text-weight-bold">Name:</span> </li>
          <li><span class="has-text-weight-bold">Email:</span> </li>
          <li><span class="has-text-weight-bold">Commercial Phone 1:</span> </li>
          <li><span class="has-text-weight-bold">Commercial Phone 2:</span> </li>
          <li><span class="has-text-weight-bold">DSN:</span> </li>
        </ul>
      </div> -->
      
    </ContactInfo>
  </Teleport>
</template>
