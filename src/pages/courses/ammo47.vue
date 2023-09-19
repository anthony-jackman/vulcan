<script setup>
import ContactInfo from '@/components/ContactModal.vue';
import { ref, computed } from 'vue';

const modalActive = ref(false);
const selectedContactId = ref('');
const skedDatas = [
  {
    "classId": "00001",
    "startDate": "08/07/2023",
    "stopDate": "08/11/2023",
    "location": "Ellsworth AFB, SD",
    "classNumb": "706",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00002",
    "startDate": "08/28/2023",
    "stopDate": "09/01/2023",
    "location": "Ramstein, AE",
    "classNumb": "707",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00003",
    "startDate": "11/13/2023",
    "stopDate": "11/17/2023",
    "location": "TBD",
    "classNumb": "701",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000003"
  },
  {
    "classId": "00004",
    "startDate": "01/22/2024",
    "stopDate": "	01/26/2024",
    "location": "Aviano, Italy, AE",
    "classNumb": "702",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00005",
    "startDate": "04/22/2024",
    "stopDate": "04/26/2024",
    "location": "Kadena AFB, Japan, AP",
    "classNumb": "703",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00006",
    "startDate": "05/06/2024",
    "stopDate": "05/10/2024",
    "location": "Kirkland AFB, NM",
    "classNumb": "704",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00007",
    "startDate": "06/10/2024",
    "stopDate": "06/14/2024",
    "location": "ATKW, NY",
    "classNumb": "705",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00008",
    "startDate": "08/19/2024",
    "stopDate": "08/23/2024",
    "location": "Hickam AFB, HI",
    "classNumb": "706",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00009",
    "startDate": "08/26/2024",
    "stopDate": "08/30/2024",
    "location": "TBD",
    "classNumb": "707",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000003"
  },
  {
    "classId": "00010",
    "startDate": "05/20/2024",
    "stopDate": "05/24/2024",
    "location": "March AFB, CA",
    "classNumb": "708",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  }
];
const sitePocs = ref([
  {
    "contactId": '000001',
    "pocTitle": 'For Registration Availability for this course at Ellisworth AFB, SD',
    "pocName": 'Edmundo Perales',
    "pocEmail": 'edmundo.perales@us.af.mil',
    "pocPhone1": '918-420-8036',
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
    "pocTitle": 'For Registration Availability for this course at Ramstein AFB, AE',
    "pocName": 'Edmundo Perales',
    "pocEmail": 'edmundo.perales@us.af.mil',
    "pocPhone1": '918-420-8036',
    "pocPhone2": '918-420-8489',
    "pocdsnPhone": '956-8707',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''

  },
  {
    "contactId": '000003',
    "pocTitle": 'For Registration Availability for this course at To Be Determined',
    "pocName": 'Anita Cannon',
    "pocEmail": 'anita.cannon@us.af.mil',
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
    "contactId": '000004',
    "pocTitle": 'For Registration Availability for this course at Aviano, Italy, AE',
    "pocName": 'Anita Cannon',
    "pocEmail": 'anita.cannon@us.af.mil',
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
    "contactId": '000005',
    "pocTitle": 'For Registration Availability for this course at Kadena AFB, Japan, AP',
    "pocName": 'Anita Cannon',
    "pocEmail": 'anita.cannon@us.af.mil',
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
    "contactId": '000006',
    "pocTitle": 'For Registration Availability for this course at Kirkland AFB, NM',
    "pocName": 'Anita Cannon',
    "pocEmail": 'anita.cannon@us.af.mil',
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
    "contactId": '000007',
    "pocTitle": 'For Registration Availability for this course at ATKW, NY',
    "pocName": 'Anita Cannon',
    "pocEmail": 'anita.cannon@us.af.mil',
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
    "contactId": '000008',
    "pocTitle": 'For Registration Availability for this course at Hickam AFB, HI',
    "pocName": 'Anita Cannon',
    "pocEmail": 'anita.cannon@us.af.mil',
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
    "contactId": '000009',
    "pocTitle": 'For Registration Availability for this course at March AFB, CA',
    "pocName": 'Anita Cannon',
    "pocEmail": 'anita.cannon@us.af.mil',
    "pocPhone1": '',
    "pocPhone2": '',
    "pocdsnPhone": '',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''

  },
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
  <h1 class="title has-text-centered mt-3">AMMO-47 Air Force Electrical Explosive Safety (CERT) (4E-F37/645-F21 (MC))</h1>
  <section id="isap" class="has-background-grey-lighter has-text-grey-dark has-text-centered block">
    <p>You will receive your Individualized Student Assessment Plan (ISAP) information upon arrival to this class.</p>
  </section>
  <section id="description" class="block">
    <h2 class="subtitle is-inline is-bold">Description: </h2>This course satisfies mandatory training requirements for the certification of Base Civil Engineers, Base Safety Personnel, and Technicians involved in the design, installation, test, and inspection of electrical services and lightning/grounding systems in hazardous locations on Air Force Installations as prescribed by DoDI 5160.68, AFI 32-1065, and NFPA 780. This course provides a comprehensive review of Air Force guidance and National Fire Protection Association (NFPA) standards governing electrical explosives safety, as well as technical training in the application of explosives safety concepts to include zones of protection, grounding, bonding, static electricity, electrical equipment in hazardous (classified) locations, Hazards of Electromagnetic Radiation to Ordnance (HERO), Fuel (HERF), and Personnel (HERP), and lightning protection system (LPS) inspection and testing standards and criteria.  Students will receive hands-on training in operating LPS test equipment to conduct the inspection of an Air Force explosives facility.
  </section>
  <section id="audience" class="block">
    <h2 class="subtitle is-inline is-bold">Audience: </h2>Base Civil Engineers, Base Safety Personnel, and Technicians requiring certification training in the design, installation, test, maintenance and inspection of electrical services and lightning/grounding systems in hazardous locations on Air Force installations as prescribed by DoDI 5160.68, AFI 32-1065, and NFPA 780.
  </section>
    <section id="crseLngth" class="block">
    <h2 class="subtitle is-inline is-bold">Length: </h2>4.5 Days.
  </section>
  <section id="specInfo" class="block">
    <h2 class="subtitle is-inline is-bold">Special Information: </h2>Students are required to bring safety shoes and clothing suitable for participating in a one-day LPS inspection field training exercise.
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
    <h2 class="subtitle is-inline is-bold">Course Topics: </h2>
    <div class="content">
      <ul>
      <li>LPS Regulatory Guidance</li>
      <li>Hazardous Effects of Lightning</li>
      <li>Lightning Protection Systems</li>
      <li>Zone of Protection</li>
      <li>Strike Termination Devices</li>
      <li>Lightning Conductors</li>
      <li>Bonding</li>
      <li>Grounding Systems</li>
      <li>Inspection, Testing and Recordkeeping</li>
    </ul>
    </div>
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
