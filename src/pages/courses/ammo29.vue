<script setup>
import ContactInfo from '@/components/ContactModal.vue';
import { ref, computed } from 'vue';

const modalActive = ref(false);
const selectedContactId = ref('');
const skedDatas = [
  {
    "classId": "00001",
    "startDate": "09/11/2023",
    "stopDate": "09/15/2023",
    "location": "McAlester, OK",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00002",
    "startDate": "12/04/2023",
    "stopDate": "12/08/2023",
    "location": "Rota, Spain, AE",
    "classNumb": "701",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00003",
    "startDate": "03/04/2024",
    "stopDate": "03/08/2024",
    "location": "San Diego, CA",
    "classNumb": "702",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00004",
    "startDate": "04/01/2024",
    "stopDate": "04/05/2024",
    "location": "Norfolk, VA",
    "classNumb": "703",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00005",
    "startDate": "04/22/2024",
    "stopDate": "04/26/2024",
    "location": "Yokosuka, Japan, AP",
    "classNumb": "704",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00006",
    "startDate": "04/29/2024",
    "stopDate": "05/03/2024",
    "location": "Okinawa, Japan, AP",
    "classNumb": "705",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00007",
    "startDate": "01/22/2024",
    "stopDate": "01/26/2024",
    "location": "HCBH-Kaneohe Bay, HI",
    "classNumb": "706",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  }
];
const sitePocs = ref([
  {
    "contactId": '000001',
    "pocTitle": 'For Registration Availability for this Navy course',
    "pocName": 'NOSSA Registrar',
    "pocEmail": 'https://nossa.dc3n.navy.mil/nrws3/',
    "pocPhone1": '',
    "pocPhone2": '',
    "pocdsnPhone": '',
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
  <h1 class="title has-text-centered mt-3">AMMO-29 Navy Electrical Explosives Safety (CERT) (4E-F34/645-F18 (MC))</h1>
  <section id="isap" class="has-background-grey-lighter has-text-grey-dark has-text-centered block">
    <p>You will receive your Individualized Student Assessment Plan (ISAP) information upon arrival to this class.</p>
  </section>
  <section id="description" class="block">
    <h2 class="subtitle is-inline is-bold">Description: </h2>This course satisfies mandatory training requirements for the certification of Navy and Marine Corps Engineers, Technicians, and Safety personnel involved in the design, installation, test, maintenance, and inspection of Naval electrical explosives operating buildings, handling facilities, and storage areas as prescribed by DoDI 5160.68 and NAVSEA OP 5, Volume 1. This course provides a comprehensive review of Navy guidance and National Fire Protection Association (NFPA) standards governing electrical explosives safety, as well as technical training in the application of explosives safety concepts to include zones of protection, grounding, bonding, static electricity, electrical equipment in hazardous (classified) locations, Hazards of Electromagnetic Radiation to Ordnance (HERO), Fuel (HERF), and Personnel (HERP), and lightning protection system (LPS) inspection and testing standards and criteria. Students will receive hands-on training in operating LPS test equipment to conduct the inspection of a Naval explosives facility.
  </section>
  <section id="audience" class="block">
    <h2 class="subtitle is-inline is-bold">Audience: </h2>Navy and Marine Corps Engineers, Technicians, and Safety personnel involved in the design, installation, test, maintenance, and inspection of electrical services and lightning/grounding systems for Naval explosives facilities as prescribed by DoDI 5160.68 and NAVSEA OP 5, Volume 1. <span class="has-text-weight-bold has-text-danger">NOTE:</span> This course is rated FD3 and not available to International Military Students.
  </section>
    <section id="crseLngth" class="block">
    <h2 class="subtitle is-inline is-bold">Length: </h2>4.5 Days.
  </section>
  <section id="specInfo" class="block">
    <h2 class="subtitle is-inline is-bold">Special Information: </h2>This course is considered certification training for Navy and Marine Corps Engineers, Technicians, and Safety personnel involved in the design, installation, test, maintenance, and inspection of electrical services and lightning/grounding systems for Naval explosives facilities as prescribed by DoDI 5160.68 and NAVSEA OP 5, Volume 1.  Students are required to bring safety shoes and clothing suitable for participating in a one-day LPS inspection field training exercise.
  </section>
  <section id="reqEqp" class="block">
    <h2 class="subtitle is-inline is-bold">Required Equipment: </h2>None.
  </section>
  <section id="prereqs" class="block">
    <h2 class="subtitle is-inline is-bold">Prerequisites: </h2>None.
  </section>
  <section id="navyCin" class="block">
    <h2 class="subtitle is-inline is-bold">Navy Course Identification Number (CIN): </h2>A-4E-3001
  </section>
  <section id="navyCdp" class="block">
    <h2 class="subtitle is-inline is-bold">Course Data Processing Code (CDP): </h2>02RH
  </section>
  <section id="secClnc" class="block">
    <h2 class="subtitle is-inline is-bold">Security Clearance: </h2>None required.
  </section>
  <section id="crseTopics" class="block">
    <h2 class="subtitle is-inline is-bold">Course Topics: </h2>
    <div class="content">
      <ul>
      <li>Lightning Protection Systems Regulatory Guidance</li>
      <li>Hazardous Effects of Lightning</li>
      <li>Lightning Protection Systems</li>
      <li>Zone of Protection</li>
      <li>Strike Termination Devices</li>
      <li>Lightning Conductors</li>
      <li>Bonding</li>
      <li>Grounding Systems</li>
      <li>LPS Electrical Tests</li>
      <li>Visual Inspection Plans and Electrical Test Plans</li>
      <li>LPS Inspection Field Exercise</li>
      <li>Hazardous (Classified) Locations</li>
      <li>HERO, HERP, and HERF</li>
    </ul>
    </div>
  </section>
  <section id="availability" class="block">
    <h2 class="subtitle is-inline is-bold">Availability: </h2> If you are affiliated with the Navy or the Marine Corps, request quotas via the <a href='###'>Navy Training page</a> of this website. For all other students, admission to a course is by nomination from the prospective student's command. If the nominating command has access to ATRRS, the submission must be made via ATRRS.
  </section>
  <section id="iacet" class="block">
    <h2 class="subtitle is-inline is-bold">The IACET Standard: </h2>DAC has been approved by the International Association for Continuing Education and Training (IACET) as an Authorized Provider of Continuing Education Units (CEUs).  In obtaining this accreditation, the Defense Ammunition Center has demonstrated that it complies with the ANSI/IACET Standard which is recognized internationally as a standard of good practice. The DAC awards 3.4 Continuing Education Units (CEUs) on the course certificate for successful completion of this course.
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
          <td colspan="6">No classes scheduled at this time</td>
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
