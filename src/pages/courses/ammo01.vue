<script setup>
import ContactInfo from '@/components/ContactModal.vue';
import { ref, computed, onMounted } from 'vue';

const modalActive = ref(false);
const selectedContactId = ref('');
let skedDatas = ref([]);
let sitePocs = ref([]);

onMounted(async () => {
  const responseSkedData = await fetch('/data/ammo01sched.json');
  skedDatas.value = await responseSkedData.json();

  const responseSitePocs = await fetch('/data/ammo01poc.json');
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
};
function closeModal() {
  modalActive.value = false;
};

</script>

<template>
  <h1 class="title has-text-centered mt-3">AMMO-01 Conventional Ammunition Orientation (9E-F62/920-F30)</h1>
  <section id="isap" class="has-background-grey-lighter has-text-grey-dark has-text-centered block">
    You will receive your Individualized Student Assessment Plan (ISAP) information upon arrival to this class.
  </section>
  <section id="description" class="block">
    <h2 class="subtitle is-inline is-bold">Description: </h2>This course provides a comprehensive study of conventional ammunition families &dash; Small Arms, Artillery, Grenades, Mortars, Propellant, Pyrotechnics, Land Mines, Rockets, Demolition Materials, Bombs, and Cartridge and Propellant Actuated Devices. This course also provides technical training in the application of regulatory guidance, technical manuals, drawings, packaging, marking, color-coding, and lot numbering for conventional ammunition and the identification of items by Federal Supply Class (FSC), National Stock Number (NSN), Department of Defense Identification Code (DODIC), and Department of Defense Ammunition Code (DODAC). Course instruction emphasizes utilizing the Joint Hazard Classification System (JHCS) and Munitions History Program (MHP) to obtain conventional ammunition data, as well as applying military writing principles to prepare correspondence, forms, and reports critical to conducting QASAS/Ammunition Manager tasks. Training is provided IAW DoDI 5160.68, AR 690-950, and AR 385-10.
  </section>
  <section id="audience" class="block">
    <h2 class="subtitle is-inline is-bold">Audience: </h2>Students enrolled in Intern Programs for either the Quality Assurance Specialist, Ammunition Surveillance (QASAS) Career Program 20, or the Ammunition Management Career Program 33. This training is not available to international military students. <span class="has-text-weight-bold has-text-danger">NOTE:</span> This course is rated FD3 and not available to International Military Students.
  </section>
  <section id="crseLngth" class="block">
    <h2 class="subtitle is-inline is-bold">Length: </h2>13 weeks.
  </section>
  <section id="reqEqp" class="block">
    <h2 class="subtitle is-inline is-bold">Required Equipment: </h2>None.
  </section>
  <section id="prereqs" class="block">
    <h2 class="subtitle is-inline is-bold">Prerequisites: </h2>None.
  </section>
  <section id="secClnc" class="block">
    <h2 class="subtitle is-inline is-bold">Security Clearance: </h2>None required.
  </section>
  <section id="crseTopics" class="block">
    <h2 class="subtitle is-bold">Course Topics:</h2>
    <div class="content">
      <ul>
      <li>Identification of Ammunition</li>
      <li>Conventional Ammunition</li>
      <li>DOD Publications</li>
      <li>Ammunition Drawings</li>
    </ul>
    </div>
  </section>
  <section id="iacet" class="block">
    <h2 class="subtitle is-inline is-bold">The IACET Standard: </h2>DAC has been approved by the International Association for Continuing Education and Training (IACET) as an Authorized Provider of Continuing Education Units (CEUs). In obtaining this accreditation, the Defense Ammunition Center has demonstrated that it complies with the ANSI/IACET Standard which is recognized internationally as a standard of good practice. The DAC awards 48.8 Continuing Education Units (CEUs) on the course certificate for successful completion of this course.
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
        <tr v-else v-for="skedData in skedDatas" :key="skedData.classId">
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
