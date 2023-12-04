<script setup>
import ContactInfo from '@/components/ContactModal.vue';
import { ref, computed, onMounted } from 'vue';

const modalActive = ref(false);
const selectedContactId = ref('');
let skedDatas = ref([]);
let sitePocs = ref([]);

onMounted(async () => {
  const responseSkedData = await fetch('/data/ammo28sched.json');
  skedDatas.value = await responseSkedData.json();

  const responseSitePocs = await fetch('/data/ammo28poc.json');
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
  <h1 class="title has-text-centered mt-3">AMMO-28 Army Electrical Explosives Safety (CERT) (4E-F32/645-F16 (MC))</h1>
  <section id="isap" class="has-background-grey-lighter has-text-grey-dark has-text-centered block">
    <p>You will receive your Individualized Student Assessment Plan (ISAP) information upon arrival to this class.</p>
  </section>
  <section id="description" class="block">
    <h2 class="subtitle is-inline is-bold">Description: </h2>This course satisfies mandatory training requirements for the certification of personnel involved in the design, installation, test, maintenance, and inspection of electrical equipment, static dissipation systems, lightning protection systems, and bonding for Army explosives facilities as prescribed by DoDI 5160.68, AR 385-10, and DA PAM 385-64. This course provides a comprehensive review of Army guidance and National Fire Protection Association (NFPA) standards governing electrical explosives safety, as well as technical training in the application of explosives safety concepts to include zones of protection, grounding, bonding, static electricity, electrical equipment in hazardous (classified) locations, Hazards of Electromagnetic Radiation to Ordnance (HERO), Fuel (HERF), and Personnel (HERP), and lightning protection system (LPS) inspection and testing standards and criteria. Students will receive hands-on training in operating LPS test equipment to conduct the inspection of an Army explosives storage/operating facility.
  </section>
  <section id="audience" class="block">
    <h2 class="subtitle is-inline is-bold">Audience: </h2>Personnel involved in the design, installation, test, maintenance, and inspection of electrical equipment, static dissipation systems, lightning protection systems, and bonding for Army explosives facilities as prescribed by DoDI 5160.68, AR 385-10, and DA PAM 385-64; and DA Fellows enrolled in Quality Assurance Specialist (Ammunition Surveillance) - QASAS Functional Community 20 or Ammunition Management Functional Community 33 as prescribed by AR 690-950.
  </section>
    <section id="crseLngth" class="block">
    <h2 class="subtitle is-inline is-bold">Length: </h2>3.5 Days.
  </section>
    <section id="reqEqp" class="block">
    <h2 class="subtitle is-inline is-bold">Required Equipment: </h2>Students should bring appropriate attire, footwear, and safety glasses for testing lightning protection systems in a field environment. Field conditions only apply to one day during the course.
  </section>
  <section id="prereqs" class="block">
    <h2 class="subtitle is-inline is-bold">Prerequisites: </h2>None.
  </section>
  <section id="secClnc" class="block">
    <h2 class="subtitle is-inline is-bold">Security Clearance: </h2>None required.
  </section>
  <section id="crseTopics" class="block">
    <h2 class="subtitle is-inline is-bold">Course Topics:</h2>
    <div class="content">
      <ul>
      <li>Hazardous Effects of Lightning</li>
      <li>Lightning Protection Systems Regulatory Guidance</li>
      <li>Lightning Protection Systems</li>
      <li>Zone of Protection</li>
      <li>Strike Termination Devices</li>
      <li>Lightning Conductors</li>
      <li>Bonding</li>
      <li>Grounding Systems</li>
      <li>Inspection, Testing, and Recordkeeping</li>
      <li>LPS Inspection Field Exercise</li>
      <li>Hazardous Classified Locations</li>
      <li>Hazards to Electromagnetic Radiation Ordinance (HERO)</li>
    </ul>
    </div>
  </section>
  <section id="iacet" class="block">
    <h2 class="subtitle is-inline is-bold">The IACET Standard: </h2>DAC has been approved by the International Association for Continuing Education and Training (IACET) as an Authorized Provider of Continuing Education Units (CEUs).  In obtaining this accreditation, the Defense Ammunition Center has demonstrated that it complies with the ANSI/IACET Standard which is recognized internationally as a standard of good practice. The DAC awards 9.8 Continuing Education Units (CEUs) on the course certificate for successful completion of this course.
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
