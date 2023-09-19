<script setup>
import ContactInfo from '@/components/ContactModal.vue';
import { ref, computed } from 'vue';

const modalActive = ref(false);
const selectedContactId = ref('');
const skedDatas = [
  {
    "classId": "00001",
    "startDate": "09/25/2023",
    "stopDate": "09/27/2023",
    "location": "McAlester, OK",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00002",
    "startDate": "08/13/2024",
    "stopDate": "08/15/2024",
    "location": "McAlester, OK",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00003",
    "startDate": "03/05/2024",
    "stopDate": "03/07/2024",
    "location": "McAlester, OK",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00004",
    "startDate": "04/16/2024",
    "stopDate": "04/18/2024",
    "location": "Gulfport, MS",
    "classNumb": "701",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000002"
  },
  {
    "classId": "00005",
    "startDate": "06/04/2024",
    "stopDate": "06/06/2024",
    "location": "Gulfport, MS",
    "classNumb": "703",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000002"
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
    "pocTitle": 'For Registration Availability for this course at McAlester, OK',
    "pocName": 'William Loveall',
    "pocEmail": 'william.loveall@navy.mil',
    "pocPhone1": '228-871-2667',
    "pocPhone2": '',
    "pocdsnPhone": '868-2667',
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
  <h1 class="title has-text-centered mt-3">AMMO-43 Intermodal Dry Cargo Container/ CSC Reinspection (CERT) (8A-F60/551-F52 (MC))</h1>
  <section id="isap" class="has-background-grey-lighter has-text-grey-dark has-text-centered block">
    <p>You will receive your Individualized Student Assessment Plan (ISAP) information upon arrival to this class.</p>
  </section>
  <section id="description" class="block">
    <h2 class="subtitle is-inline is-bold">Description: </h2>This course satisfies mandatory training requirements for the certification of Ammunition Surveillance Inspectors, Dry Cargo Container Inspectors, and other personnel responsible for certifying intermodal dry cargo containers in accordance with United States Federal Law, the International Organization for Standardization (ISO), and the International Convention for Safe Containers (CSC) as prescribed by DoDI 5160.68, 49 CFR, and NAVSEA OP 5, Volume 1. This course provides a comprehensive review of guidance, techniques, and procedures for reinspecting intermodal dry cargo containers, as well as technical training in applying CSC container types and structural/non-structural components, reporting and administrative requirements, decal specifications, tools and equipment, and reinspection standards and criteria as directed in US Public Law and Joint Service regulations. Students will receive hands-on training in performing intermodal dry cargo certification/reinspection procedures using MIL-STD-3037. Certification is good for four (4) years; this course or Course No. 8A-F62/551-F54-DL, INTERMODAL DRY CARGO CNTR/CSC REINSPEC (CERT), offered by DAC via Distance Learning (DL) may be completed every four (4) years to maintain certification.
  </section>
  <section id="audience" class="block">
    <h2 class="subtitle is-inline is-bold">Audience: </h2>Ammunition Surveillance Inspectors, Dry Cargo Container Inspectors, and other personnel responsible for certifying intermodal dry cargo containers in accordance with United States Federal Law, the International Organization for Standardization (ISO), and the International Convention for Safe Containers (CSC) as prescribed by DoDI 5160.68, 49 CFR, and NAVSEA OP 5, Volume 1.
  </section>
    <section id="crseLngth" class="block">
    <h2 class="subtitle is-inline is-bold">Length: </h2>3 Days.
  </section>
  <section id="specInfo" class="block">
    <h2 class="subtitle is-inline is-bold">Special Information: </h2>This course is considered certification training for Navy and Marine Corps Engineers, Technicians, and Safety personnel involved in the design, installation, test, maintenance, and inspection of electrical services and lightning/grounding systems for Naval explosives facilities as prescribed by DoDI 5160.68 and NAVSEA OP 5, Volume 1.  Students are required to bring safety shoes and clothing suitable for participating in a one-day LPS inspection field training exercise.
  </section>
  <section id="reqEqp" class="block">
    <h2 class="subtitle is-inline is-bold">Required Equipment: </h2>Students are required to bring safety shoes and clothing suitable for participating in an intermodal dry cargo container reinspection field exercise during one (1) of the course days.
  </section>
  <section id="prereqs" class="block">
    <h2 class="subtitle is-inline is-bold">Prerequisites: </h2>None.
  </section>
  <section id="navyCin" class="block">
    <h2 class="subtitle is-inline is-bold">Navy Course Identification Number (CIN): </h2>A-4E-3005
  </section>
  <section id="navyCdp" class="block">
    <h2 class="subtitle is-inline is-bold">Course Data Processing Code (CDP): </h2>02RM
  </section>
  <section id="secClnc" class="block">
    <h2 class="subtitle is-inline is-bold">Security Clearance: </h2>None required.
  </section>
  <section id="crseTopics" class="block">
    <h2 class="subtitle is-inline is-bold">Course Topics: </h2>
    <div class="content">
      <ul>
      <li>Regulatory Guidance for Containers</li>
      <li>Container Types</li>
      <li>Anatomy of a Container</li>
      <li>Container Tools and Equipment</li>
      <li>Container Inspection Checklists and Forms</li>
      <li>Container Inspection Procedures</li>
    </ul>
    </div>
  </section>
  <section id="availability" class="block">
    <h2 class="subtitle is-inline is-bold">Availability: </h2>If you are affiliated with the Navy or the Marine Corps, request quotas via the Navy Training page of this website. For all other students, admission to a course is by nomination from the prospective student's command. If the nominating command has access to ATRRS, the submission must be made via ATRRS.
  </section>
  <section id="iacet" class="block">
    <h2 class="subtitle is-inline is-bold">The IACET Standard: </h2>DAC has been approved by the International Association for Continuing Education and Training (IACET) as an Authorized Provider of Continuing Education Units (CEUs).  In obtaining this accreditation, the Defense Ammunition Center has demonstrated that it complies with the ANSI/IACET Standard which is recognized internationally as a standard of good practice. The DAC awards 2.3 Continuing Education Units (CEUs) on the course certificate for successful completion of this course.
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
