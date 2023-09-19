<script setup>
import ContactInfo from '@/components/ContactModal.vue';
import { ref, computed } from 'vue';

const modalActive = ref(false);
const selectedContactId = ref('');
const skedDatas = [
  {
    "classId": "00001",
    "startDate": "07/10/2023",
    "stopDate": "07/21/2023",
    "location": "McAlester, OK",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  }
];
const sitePocs = ref([
  {
    "contactId": '000001',
    "pocTitle": 'For Registration Availability for this course at McAlester, OK',
    "pocName": 'DAC ATRRS Desk',
    "pocEmail": 'usarmy.mcalester.usamc.mbx.dac-atrrs-registrar@army.mil',
    "pocPhone1": '918-420-8707',
    "pocPhone2": '918-420-8489',
    "pocdsnPhone": '956-8707',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''

  },
  {
    "contactId": '000002',
    "pocTitle": 'craziness',
    "pocName": 'mars operator',
    "pocEmail": 'usarmy.mcalester.usamc.mbx.dac-atrrs-registrar@army.mil',
    "pocPhone1": '918-420-8707',
    "pocPhone2": '918-420-8489',
    "pocdsnPhone": '956-8707',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''
  }
]);

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
  <h1 class="title has-text-centered mt-3">AMMO-54 Risk Management and Preparation of SOPs for Ammunition and Explosive Operations (CERT) (9E-F60/950-F39)</h1>
  <section id="isap" class="has-background-grey-lighter has-text-grey-dark has-text-centered block">
    <p>You will receive your Individualized Student Assessment Plan (ISAP) information upon arrival to this class.</p>
  </section>
  <section id="description" class="block">
    <h2 class="subtitle is-inline is-bold">Description: </h2>This course satisfies mandatory training requirements for the certification of personnel engaged in Ammunition & Explosives (A&E) operations, specifically personnel responsible for the preparation or review of SOPs, as prescribed by DoDI 5160.68, AR 385-10, and DA PAM 385-64, as well as DA Interns enrolled in Quality Assurance Specialist, Ammunition Surveillance (QASAS) Career Program (CP)-20 or Ammunition Management CP-33 as prescribed by AR 690-950. This course provides a comprehensive review of regulations governing the risk management process, as well as technical training in applying risk management principles, conducting hazard analyses, and developing SOPs for A&E operations. Students will receive hands-on training in developing an SOP for an actual A&E operation using drawings, scenarios, and current DoD, DA, and local guidance.
  </section>
  <section id="audience" class="block">
    <h2 class="subtitle is-inline is-bold">Audience: </h2>Personnel engaged in A&E operations, specifically personnel responsible for the preparation or review of SOPs, as prescribed by DoDI 5160.68, AR 385-10, and DA PAM 385-64, as well as DA Interns enrolled in Quality Assurance Specialist, Ammunition Surveillance (QASAS) Career Program (CP)-20 or Ammunition Management CP-33 as prescribed by AR 690-950.
  </section>
    <section id="crseLngth" class="block">
    <h2 class="subtitle is-inline is-bold">Length: </h2>2 Weeks.
  </section>
  <section id="reqEqp" class="block">
    <h2 class="subtitle is-inline is-bold">Required Equipment: </h2>Students are required to bring safety shoes and clothing suitable for participating in a one-day A&E facility review.
  </section>
  <section id="prereqs" class="block">
    <h2 class="subtitle is-inline is-bold">Prerequisites: </h2>None.
  </section>
  <section id="secClnc" class="block">
    <h2 class="subtitle is-inline is-bold">Security Clearance: </h2>None required.
  </section>
  <section id="crseTopics" class="block">
    <h2 class="subtitle is-inline is-bold">Course Topics: </h2>
    <div class="content">
      <ul>
      <li>Risk Management Guidance</li>
      <li>Risk Management Process</li>
      <li>Hazard Analysis for A&E Operations</li>
      <li>Standing Operating Procedures (SOPs)</li>
      <li>Developing SOPs for A&E Operations</li>
    </ul>
    </div>
  </section>
  <section id="iacet" class="block">
    <h2 class="subtitle is-inline is-bold">The IACET Standard: </h2>DAC has been approved by the International Association for Continuing Education and Training (IACET) as an Authorized Provider of Continuing Education Units (CEUs).  In obtaining this accreditation, the Defense Ammunition Center has demonstrated that it complies with the ANSI/IACET Standard which is recognized internationally as a standard of good practice. The DAC awards 7.5 Continuing Education Units (CEUs) on the course certificate for successful completion of this course.
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

<style lang="scss" scoped>
// #crseTopics ul {
//   list-style: disc;
// }
</style>
