<script setup>
import ContactInfo from '@/components/ContactModal.vue';
import { ref, computed, onMounted } from 'vue';

const modalActive = ref(false);
const selectedContactId = ref('');
let skedDatas = ref([]);
let sitePocs = ref([]);

onMounted(async () => {
  const responseSkedData = await fetch('/data/ammo51mvsched.json');
  skedDatas.value = await responseSkedData.json();

  const responseSitePocs = await fetch('/data/ammo51mvpoc.json');
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
  <h1 class="title has-text-centered mt-3">AMMO-51-MV Naval Motor Vehicle Inspection (CERT) (4E-F41/645-F25 (MC))</h1>
  <section id="isap" class="has-background-grey-lighter has-text-grey-dark has-text-centered block">
    <p>You will receive your Individualized Student Assessment Plan (ISAP) information upon arrival to this class.</p>
  </section>
  <section id="description" class="block">
    <h2 class="subtitle is-inline is-bold">Description: </h2>This course satisfies mandatory training requirements for the certification of Navy and Marine Corps personnel responsible for inspecting DoD, DoT, and Navy motor vehicles as prescribed by DoDI 5160.68, NAVSEA OP 5, Volume 1, and NAVSEA SW020-AF-HBK-010. This course provides a comprehensive review of DoD, DoT, and Navy guidance, techniques, and procedures for inspecting motor vehicles used for on-/off-station shipments of ammunition and explosives (A&E) and other related hazardous materials, as well as technical training in the application of compatibility, placarding, transportation safety, physical security, and blocking and bracing for ISO intermodal containers and tactical/non-tactical vehicles. Students will receive hands-on training in performing motor vehicle inspection procedures using DD Form 626 (Motor Vehicle Inspection &dash; Transporting Hazardous Material).
  </section>
  <section id="audience" class="block">
    <h2 class="subtitle is-inline is-bold">Audience: </h2>Navy and Marine Corps personnel responsible for the inspection of DoT, DoD, and Navy motor vehicles as prescribed by DoDI 5160.68, NAVSEA OP 5, Volume 1, and NAVSEA SW020-AF-HBK-010. <span class="has-text-weight-bold has-text-danger">NOTE:</span> This course is rated FD3 and not available to International Military Students.
  </section>
    <section id="crseLngth" class="block">
    <h2 class="subtitle is-inline is-bold">Length: </h2>2.5 Days.
  </section>
  <section id="specInfo" class="block">
    <h2 class="subtitle is-inline is-bold">Special Information: </h2>This course is considered initial certification training for Navy and Marine Corps personnel responsible for inspecting DoT, DoD, and Navy motor vehicles as prescribed by DoDI 5160.68, NAVSEA OP 5, Volume 1, and NAVSEA SW020-AFHBK-010. Refresher training must be completed every two (2) years to maintain certification. This course, or Course No. 4E-F42/645-F26 (DL), NAVAL MOTOR VEHICLE INSPECTION (CERT), offered by DAC via Distance Learning (DL), may be completed to maintain the certification. Students are required to bring safety shoes and clothing suitable for participating in a motor vehicle inspection field exercise during one (1) of the course days.
  </section>
  <section id="reqEqp" class="block">
    <h2 class="subtitle is-inline is-bold">Required Equipment: </h2>None.
  </section>
  <section id="prereqs" class="block">
    <h2 class="subtitle is-inline is-bold">Prerequisites: </h2>Completion of Course No. 4E-F29/645-F13 (DL), BASICS OF NAVAL EXPL HAZARD CONTROL (CERT), or 4E-F39/645-F23 (DL), NAVAL EXPL SAFETY MGRS/SUPVRS ORIENTN (CERT), offered by the Defense Ammunition Center (DAC) via distance learning (DL) is highly recommended.
  </section>
  <section id="navyCin" class="block">
    <h2 class="subtitle is-inline is-bold">Navy Course Identification Number (CIN): </h2>A-4E-3007
  </section>
  <section id="navyCdp" class="block">
    <h2 class="subtitle is-inline is-bold">Course Data Processing Code (CDP): </h2>02RP
  </section>
  <section id="secClnc" class="block">
    <h2 class="subtitle is-inline is-bold">Security Clearance: </h2>None required.
  </section>
  <section id="crseTopics" class="block">
    <h2 class="subtitle is-inline is-bold">Course Topics: </h2>
    <div class="content">
      <ul>
      <li>Regulatory Guidance for Naval Motor Vehicles</li>
      <li>Compatibility for Naval Motor Vehicle Shipments</li>
      <li>Placarding for Naval Motor Vehicle Shipments</li>
      <li>Security for Naval Motor Vehicles Shipments</li>
      <li>Blocking and Bracing Drawings for Naval Motor Vehicle Shipments</li>
      <li>Truckload Drawings for Naval Motor Vehicle Shipments</li>
      <li>DD Form 626, Motor Vehicle Inspection</li>
    </ul>
    </div>
  </section>
  <section id="availability" class="block">
    <h2 class="subtitle is-inline is-bold">Availability: </h2> If you are affiliated with the Navy or the Marine Corps, request quotas via the <a href='###'>Navy Training page</a> of this website. For all other students, admission to a course is by nomination from the prospective student's command. If the nominating command has access to ATRRS, the submission must be made via ATRRS.
  </section>
  <section id="iacet" class="block">
    <h2 class="subtitle is-inline is-bold">The IACET Standard: </h2>DAC has been approved by the International Association for Continuing Education and Training (IACET) as an Authorized Provider of Continuing Education Units (CEUs).  In obtaining this accreditation, the Defense Ammunition Center has demonstrated that it complies with the ANSI/IACET Standard which is recognized internationally as a standard of good practice. The DAC awards 1.9 Continuing Education Units (CEUs) on the course certificate for successful completion of this course.
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
