<script setup>
import ContactInfo from '@/components/ContactModal.vue';
import { ref, computed } from 'vue';

const modalActive = ref(false);
const selectedContactId = ref('');
const skedDatas = [
  {
    "classId": "00001",
    "startDate": "08/08/2023",
    "stopDate": "08/17/2023",
    "location": "Norfolk, VA",
    "classNumb": "702",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000002"
  },
  {
    "classId": "00002",
    "startDate": "09/12/2023",
    "stopDate": "09/21/2023",
    "location": "McAlester, OK",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00003",
    "startDate": "09/17/2024",
    "stopDate": "09/26/2023",
    "location": "McAlester, OK",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00004",
    "startDate": "02/06/2024",
    "stopDate": "02/06/2024",
    "location": "San Diego, CA",
    "classNumb": "701",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000003"
  },
  {
    "classId": "00005",
    "startDate": "06/03/2024",
    "stopDate": "06/03/2024",
    "location": "Norfolk, VA",
    "classNumb": "702",
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
    "pocTitle": 'For Registration Availability for this course at Norfolk NB, VA',
    "pocName": 'Mr. Nikiha Miller',
    "pocEmail": 'nikiha.miller@navy.mil',
    "pocPhone1": '757-462-1710',
    "pocPhone2": 'ext 3016',
    "pocdsnPhone": '',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''
  },
  {
    "contactId": '000003',
    "pocTitle": 'For Registration Availability for this course at San Diego, CA',
    "pocName": 'Larry Darnell',
    "pocEmail": '',
    "pocPhone1": '301-744-6089',
    "pocPhone2": '',
    "pocdsnPhone": '',
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
  <h1 class="title has-text-centered mt-3">AMMO-74 Explosives Safety Officer Orientation Course (CERT) (4E-F48/645-F32 (MC))</h1>
  <section id="isap" class="has-background-grey-lighter has-text-grey-dark has-text-centered block">
    <p>You will receive your Individualized Student Assessment Plan (ISAP) information upon arrival to this class.</p>
  </section>
  <section id="description" class="block">
    <h2 class="subtitle is-inline is-bold">Description: </h2>This course satisfies mandatory training requirements for the certification of Explosives Safety Officers (ESOs) assigned to Navy or Marine Corps activities as prescribed by DoDI 5160.68, NAVSEA OP 5, Volume 1, and MCO 5100.29C Vol 8. This course provides a comprehensive review of Navy and Marine Corps guidance governing the Explosives Safety and Qualification/Certification (QUAL/CERT) programs and ESO responsibilities for command administration and management, as well as technical training in applying requirements for standard operating procedures (SOPs), magazine area and range operations, operating buildings and production lines, waterfront and airfield explosives operations, environmental compliance, Program 05 special considerations, lightning protection, grounding, emissions control, motor vehicle and railroad transportation, ordnance/materiel/weight handling equipment (OHE/MHE/WHE), physical security, and inventory management.
    <br />
    Enrollees should have a working knowledge of NAVSEA OP 5, Volume 1, MCO 5100.29C Vol 8, NOSSA M-8020.1, and NOSSAINST 8020.14 regulations.
  </section>
  <section id="audience" class="block">
    <h2 class="subtitle is-inline is-bold">Audience: </h2>Explosives Safety Officers (ESOs) assigned to Navy or Marine Corps activities as prescribed by DoDI 5160.68, NAVSEA OP 5, Volume 1, and MCO 5100.29C Vol 8. <span class="has-text-weight-bold has-text-danger">NOTE:</span> This course is rated FD3 and not available to International Military Students.
  </section>
    <section id="crseLngth" class="block">
    <h2 class="subtitle is-inline is-bold">Length: </h2>1 Week, 2.5 Days.
  </section>
  <section id="reqEqp" class="block">
    <h2 class="subtitle is-inline is-bold">Required Equipment: </h2>None.
  </section>
  <section id="prereqs" class="block">
    <h2 class="subtitle is-inline is-bold">Prerequisites: </h2>Completion of 4E-F39/645-F23-DL, NAVAL EXPL SAFETY MGRS/SUPVRS ORIENTN (CERT), 4E-F34/645-F18 (MC), NAVY ELECTRICAL EXPLOSIVES SAFETY (CERT), 4E-F36/645-F20 (MC), EXPL SAFETY FOR NAVAL FACILITY PLNG (CERT), and 4E-F40/645-F24 (MC), NAVAL MOTOR VEH AND RAILCAR INSPECTION (CERT) offered by the Defense Ammunition Center (DAC) via distance learning (DL) is highly recommended.
  </section>
  <section id="navyCin" class="block">
    <h2 class="subtitle is-inline is-bold">Navy Course Identification Number (CIN): </h2>A-4E-3009
  </section>
  <section id="navyCdp" class="block">
    <h2 class="subtitle is-inline is-bold">Course Data Processing Code (CDP): </h2>02RS
  </section>
  <section id="secClnc" class="block">
    <h2 class="subtitle is-inline is-bold">Security Clearance: </h2>None required.
  </section>
  <section id="crseTopics" class="block">
    <h2 class="subtitle is-inline is-bold">Course Topics: </h2>
    <div class="content">
      <ul>
      <li>Explosives Safety Officer Orientation</li>
      <li>Command Administration Management</li>
      <li>Qualification and Certification</li>
      <li>Standard Operating Procedures</li>
      <li>Ammunition Storage and Magazines</li>
      <li>Operating Buildings and Production Lines</li>
      <li>Lightning Protection, Grounding, and Electrical Hazard Classification</li>
      <li>Munitions Rule</li>
      <li>Arms, Ammunition and Explosives, Physical Security Program</li>
      <li>Ranges and Explosives Ordnance Disposal (EOD)</li>
      <li>Motor Vehicle Transportation</li>
      <li>Railroad Transportation</li>
      <li>Piers, Wharves and Barges</li>
      <li>Airfield Explosives Operations</li>
      <li>Ammunition and Explosives Associated Equipment</li>
      <li>Inventory Management</li>
      <li>Magazine and Magazine Area Inspection</li>
    </ul>
    </div>
  </section>
  <section id="availability" class="block">
    <h2 class="subtitle is-inline is-bold">Availability: </h2> If you are affiliated with the Navy or the Marine Corps, request quotas via the <a href='###'>Navy Training page</a> of this website. For all other students, admission to a course is by nomination from the prospective student's command. If the nominating command has access to ATRRS, the submission must be made via ATRRS.
  </section>
  <section id="iacet" class="block">
    <h2 class="subtitle is-inline is-bold">The IACET Standard: </h2>DAC has been approved by the International Association for Continuing Education and Training (IACET) as an Authorized Provider of Continuing Education Units (CEUs).  In obtaining this accreditation, the Defense Ammunition Center has demonstrated that it complies with the ANSI/IACET Standard which is recognized internationally as a standard of good practice. The DAC awards 5.6 Continuing Education Units (CEUs) on the course certificate for successful completion of this course.
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
