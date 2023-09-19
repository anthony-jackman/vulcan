<script setup>
import ContactInfo from '@/components/ContactModal.vue';
import { ref, computed } from 'vue';

const modalActive = ref(false);
const selectedContactId = ref('');
const skedDatas = [
  {
    "classId": "00001",
    "startDate": "08/07/2023",
    "stopDate": "08/18/2023",
    "location": "McAlester, OK",
    "classNumb": "008",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00002",
    "startDate": "11/27/2023",
    "stopDate": "12/08/2023",
    "location": "McAlester, OK",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00003",
    "startDate": "01/22/2024",
    "stopDate": "02/02/2024",
    "location": "McAlester, OK",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00004",
    "startDate": "03/04/2024",
    "stopDate": "03/15/2024",
    "location": "McAlester, OK",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00005",
    "startDate": "04/22/2024",
    "stopDate": "05/03/2024",
    "location": "McAlester, OK",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00006",
    "startDate": "06/03/2024",
    "stopDate": "06/14/2024",
    "location": "McAlester, OK",
    "classNumb": "005",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00007",
    "startDate": "08/05/2024",
    "stopDate": "08/16/2024",
    "location": "McAlester, OK",
    "classNumb": "006",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00007",
    "startDate": "07/08/2024",
    "stopDate": "07/19/2024",
    "location": "McAlester, OK",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00007",
    "startDate": "09/09/2024",
    "stopDate": "09/20/2024",
    "location": "McAlester, OK",
    "classNumb": "008",
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
  <h1 class="title has-text-centered mt-3">PACK-1B Military Preservation and Packaging for Storage and Shipment (CERT) (Phase 2) (8A-F61/551-F53)</h1>
  <section id="isap" class="has-background-grey-lighter has-text-grey-dark has-text-centered block">
    <p>You will receive your Individualized Student Assessment Plan (ISAP) information upon arrival to this class.</p>
  </section>
  <section id="description" class="block">
    <h2 class="subtitle is-inline is-bold">Description: </h2>This course satisfies mandatory training requirements for the certification of personnel responsible for supporting military preservation, packaging, unitization, and ISO containerization activities as prescribed by DoDI 5160.68, AR 700-15, and AR 700-37 and DA Interns enrolled in Quality Assurance Specialist, Ammunition Surveillance (QASAS) Career Program (CP)-20 or Ammunition Management CP-33 as prescribed by AR 690-950. This course provides technical hands-on training in applying unit and intermediate military packaging and preservation methods, outer packing procedures, cleaning and drying processes, containerization load planning, load blocking and bracing, palletized and unitized loads, preservative materials, cushioning, marking, and labeling in accordance with military packaging policy criteria and packaging specifications and standards. Students will receive hands-on training in conducting military preservation and packaging activities in a packaging workshop.
  </section>
  <section id="audience" class="block">
    <h2 class="subtitle is-inline is-bold">Audience: </h2>Personnel responsible for supporting military preservation, packaging, unitization, and ISO containerization activities as prescribed by DoDI 5160.68, AR 700-15, and AR 700-37 and DA Interns enrolled in Quality Assurance Specialist, Ammunition Surveillance (QASAS) Career Program (CP)-20 or Ammunition Management CP-33 as prescribed by AR 690-50.
  </section>
    <section id="crseLngth" class="block">
    <h2 class="subtitle is-inline is-bold">Length: </h2>80 Hours.
  </section>
  <section id="reqEqp" class="block">
    <h2 class="subtitle is-inline is-bold">Required Equipment: </h2>None.
  </section>
  <section id="prereqs" class="block">
    <h2 class="subtitle is-inline is-bold">Prerequisites: </h2>Successful Completion of course No. 8A-F63/551-F55-DL, DEFENSE BASIC PRESERVATION AND PACKING (CERT), offered by the Defense Ammunition Center (DAC) via distance learning (DL).v
  </section>
  <section id="secClnc" class="block">
    <h2 class="subtitle is-inline is-bold">Security Clearance: </h2>None required.
  </section>
  <section id="crseTopics" class="block">
    <h2 class="subtitle is-inline is-bold">Course Topics: </h2>
    <div class="content">
      <ul>
      <li>Introduction to Preservation and Packaging</li>
      <li>FEDLOG/FLIS</li>
      <li>Methods of Preservation and ESD</li>
      <li>Cleaning, Drying, and Preservation</li>
      <li>Barrier Materials and Heat Sealing</li>
      <li>Marking and Labeling</li>
      <li>Fiberboard Boxes</li>
      <li>ABM/Stitchers</li>
      <li>Heat Sealing Equipment</li>
      <li>SPIs, Contracts, and ASTMs</li>
      <li>Cushioning, Blocking, and Bracing</li>
      <li>Outer Packaging</li>
      <li>Wood Boxes</li>
      <li>Crates</li>
      <li>Cargo Unitization</li>
      <li>Blocking and Bracing</li>
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
