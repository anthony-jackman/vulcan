<script setup>
import ContactInfo from '@/components/ContactModal.vue';
import { ref, computed, onMounted } from 'vue';

const modalActive = ref(false);
const selectedContactId = ref('');
let skedDatas = ref([]);
let sitePocs = ref([]);

onMounted(async () => {
  const responseSkedData = await fetch('/data/ammo62sched.json');
  skedDatas.value = await responseSkedData.json();

  const responseSitePocs = await fetch('/data/ammo62poc.json');
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
  <h1 class="title has-text-centered mt-3">AMMO-62 Technical Transportation of Hazardous Materials (CERT) (9E-F58/322-F37 (MC))</h1>
  <section id="isap" class="has-background-grey-lighter has-text-grey-dark has-text-centered block">
    <p>You will receive your Individualized Student Assessment Plan (ISAP) information upon arrival to this class.</p>
  </section>
  <section id="description" class="block">
    <h2 class="subtitle is-inline is-bold">Description: </h2>This course satisfies the mandatory training requirement IAW DTR 4500.9-R, 49 CFR, IMDG, IATA, and AFMAN 24-604 to personnel from all services who certify hazardous materials and conduct function-specific training for subordinate personnel as specified in the Defense Transportation Regulation. Course content includes a comprehensive review of regulations governing the transportation of hazardous materials by all modes (land, vessel, and commercial/military air). International regulations covered include the International Maritime Dangerous Goods Code and the International Air Transport Association Dangerous Goods Regulations. United States regulations include the Department of Transportation (DOT) 49 Code of Federal Regulations (CFR) and AFMAN 24-604. Course materials include emphasis on shipping papers, marking, labeling, placarding, packaging, compatibility, and emergency response information. Students successfully completing the course will understand the requirements for shipping hazardous materials by all modes of transportation to include highway, vessel, and commercial/military air.
    <br />
    Certification is good for two (2) years. Refresher training must be completed every two (2) years to maintain certification. This course is considered initial training and may also serve as refresher training. 9E-F66/920-F34 (DL), General Transportation of Hazardous Materials Refresher (also known as AMMO-37-DL), is also offered by DAC via Distance Learning (DL) specifically for personnel who require refresher certification training.
  </section>
  <section id="audience" class="block">
    <h2 class="subtitle is-inline is-bold">Audience: </h2>Individuals assigned, or preparing to be assigned, the functional role of "HAZMAT Certifier" are required to receive certification training as mandated by Public Law and DTR 4500.9-R. Target audience includes DoD military, civilian, and contractor personnel responsible for the certification of HAZMAT shipments by all modes of transportation both domestically and internationally.
  </section>
    <section id="crseLngth" class="block">
    <h2 class="subtitle is-inline is-bold">Length: </h2>2 Weeks.
  </section>
  <section id="collegeCred" class="block">
    <h2 class="subtitle is-inline is-bold">College Credit: </h2>This course has been approved by the American Council on Education (ACE) Military Review Team for college credit. Students who have completed this course may contact Joint Services Transcript (JST) at <a href='https://jst.doded.mil' target='_blank'>https://jst.doded.mil</a>. ACE Credit Recommendation: In the lower-division baccalaureate/associate degree category, 4 semester hours in transportation of hazardous materials. ACE ID # in the Military Guide: AR-0802-0036.
  </section>
  <section id="reqEqp" class="block">
    <h2 class="subtitle is-inline is-bold">Required Equipment: </h2>None.
  </section>
  <section id="prereqs" class="block">
    <h2 class="subtitle is-inline is-bold">Prerequisites: </h2>Although there is no course prerequisite, it is recommended that the student complete 9E-F69/920-F37 (DL), HAZMAT FAMILIARIZATION/SAFETY IN TRANS (CERT), prior to attending the course.
  </section>
  <section id="navyCin" class="block">
    <h2 class="subtitle is-inline is-bold">Navy Course Identification Number (CIN): </h2>A-4E-3008
  </section>
  <section id="navyCdp" class="block">
    <h2 class="subtitle is-inline is-bold">Course Data Processing Code (CDP): </h2>02RR
  </section>
  <section id="secClnc" class="block">
    <h2 class="subtitle is-inline is-bold">Security Clearance: </h2>None required.
  </section>
  <section id="crseTopics" class="block">
    <h2 class="subtitle is-inline is-bold">Course Topics: </h2>
    <div class="content">
      <ul>
      <li>Regulatory Guidance for HAZMAT Shipments</li>
      <li>HAZMAT Classification for Land Shipments</li>
      <li>Packaging Configurations for HAZMAT Land Shipments</li>
      <li>Marking and Labeling for HAZMAT Land Shipments</li>
      <li>Security Measures for HAZMAT Land Shipments</li>
      <li>Segregation and Compatibility for HAZMAT Land Shipments</li>
      <li>Placards for HAZMAT Land Shipments</li>
      <li>Certifying Documentation for HAZMAT Land Shipments</li>
      <li>HAZMAT Classification for Vessel Shipments</li>
      <li>Packaging Configurations for HAZMAT Vessel Shipments</li>
      <li>Marking and Labeling for HAZMAT Vessel Shipments</li>
      <li>Placards for HAZMAT Vessel Shipments</li>
      <li>Segregation and Compatibility for HAZMAT Vessel Shipments</li>
      <li>Certifying Documentation for HAZMAT Vessel Shipments</li>
      <li>Dangerous Goods Classification for Commercial Air Shipments</li>
      <li>Packaging Configurations for Dangerous Goods Commercial Air Shipments</li>
      <li>Marking and Labeling for Dangerous Goods Commercial Air Shipments</li>
      <li>Certifying Documentation for Dangerous Goods Commercial Air Shipments</li>
      <li>Dangerous Goods Classification for Military Air Shipments</li>
      <li>Packaging Configurations for Dangerous Goods Military Air Shipments</li>
      <li>Marking and Labeling for Dangerous Goods Military Air Shipments</li>
      <li>Certifying Documentation for Dangerous Goods Military Air Shipments</li>
    </ul>
    </div>
  </section>
  <section id="availability" class="block">
    <h2 class="subtitle is-inline is-bold">Availability: </h2>If you are affiliated with the Navy or the Marine Corps, request quotas via the <RouterLink :to="{ name: 'navytrng' }">Navy Training page</RouterLink> of this website. For all other students, admission to a course is by nomination from the prospective student's command. If the nominating command has access to ATRRS, the submission must be made via ATRRS.
  </section>
  <section id="iacet" class="block">
    <h2 class="subtitle is-inline is-bold">The IACET Standard: </h2>The IACET Standard: DAC has been approved by the International Association for Continuing Education and Training (IACET) as an Authorized Provider of Continuing Education Units (CEUs). In obtaining this accreditation, the Defense Ammunition Center has demonstrated that it complies with the ANSI/IACET Standard which is recognized internationally as a standard of good practice. The DAC awards 7.5 Continuing Education Units (CEUs) on the course certificate for successful completion of this course.
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
