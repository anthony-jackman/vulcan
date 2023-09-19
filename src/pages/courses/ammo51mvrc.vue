<script setup>
import ContactInfo from '@/components/ContactModal.vue';
import { ref, computed } from 'vue';

const modalActive = ref(false);
const selectedContactId = ref('');
const skedDatas = [
  {
    "classId": "00001",
    "startDate": "09/25/2023",
    "stopDate": "09/028/2023",
    "location": "McAlester, OK",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00002",
    "startDate": "06/24/2024",
    "stopDate": "06/27/2024",
    "location": "McAlester, OK",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00003",
    "startDate": "07/29/2024",
    "stopDate": "08/01/2024",
    "location": "McAlester, OK",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00004",
    "startDate": "08/12/2024",
    "stopDate": "08/15/2024",
    "location": "McAlester, OK",
    "classNumb": "005",
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
  <h1 class="title has-text-centered mt-3">AMMO-51-MV/RC Naval Motor Vehicle and Railcar Inspection (CERT) (4E-F40/645-F24 (MC))</h1>
  <section id="isap" class="has-background-grey-lighter has-text-grey-dark has-text-centered block">
    <p>You will receive your Individualized Student Assessment Plan (ISAP) information upon arrival to this class.</p>
  </section>
  <section id="description" class="block">
    <h2 class="subtitle is-inline is-bold">Description: </h2>This course satisfies mandatory certification training for Navy and Marine Corps personnel responsible for inspecting Department of Transportation (DoT), Department of Defense (DoD), and Navy transport equipment (e.g. motor vehicles, railcars) as prescribed by DoDI 5160.68, NAVSEA OP 5, Volume 1, and NAVSEA SW020-AF-HBK-010. This course provides a comprehensive review of DoD, DoT, and Navy guidance, techniques, and procedures for inspecting motor vehicles and railcars used for on-/off-station shipments of A&E and other related hazardous materials, as well as technical training in the application of compatibility, placarding, transportation safety, physical security, and blocking and bracing for ISO intermodal containers and tactical/non-tactical vehicles. Students will receive hands-on training in performing motor vehicle inspection procedures using DD Form 626 (Motor Vehicle Inspection &dash; Transporting Hazardous Material) and railcar inspection procedures using NAVSEA Form 8023/3 (Railcar Inspection Checklist). This certification is good for two (2) years.
    <br />
    To maintain certification requires the completion of two (2) Distance Learning (DL) courses offered by DAC; Course No. 4E-F42/645-F26 (DL), NAVAL MOTOR VEHICLE INSPECTION (CERT) and Course No. 4EF43/645-F27 (DL), NAVAL RAILCAR INSPECTION (CERT), to be completed every two (2) years.
  </section>
  <section id="audience" class="block">
    <h2 class="subtitle is-inline is-bold">Audience: </h2>Navy and Marine Corps personnel responsible for inspecting DoD, DoT, and Navy transport equipment (e.g. motor vehicles, railcars) as prescribed by DoDI 5160.68, NAVSEA OP 5, Volume 1, and NAVSEA SW020-AF-HBK-010. <span class="has-text-weight-bold has-text-danger">NOTE:</span> This course is rated FD3 and not available to International Military Students.
  </section>
    <section id="crseLngth" class="block">
    <h2 class="subtitle is-inline is-bold">Length: </h2>3.5 Days.
  </section>
  <section id="reqEqp" class="block">
    <h2 class="subtitle is-inline is-bold">Required Equipment: </h2>Students are required to bring safety shoes and clothing suitable for participating in a motor vehicle and railcar inspection field exercise during two (2) days of the course.
  </section>
  <section id="prereqs" class="block">
    <h2 class="subtitle is-inline is-bold">Prerequisites: </h2>Completion of Course No. 4E-F29/645-F13 (DL), BASICS OF NAVAL EXPL HAZARD CONTROL (CERT) or 4E-F39/645-F23 (DL), NAVAL EXPL SAFETY MGRS/SUPVRS ORIENTN (CERT), offered by the Defense Ammunition Center (DAC) via distance learning (DL) is highly recommended.
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
      <li>References for Naval Motor Vehicles and Railcars</li>
      <li>Compatibility for Naval Motor Vehicles and Railcars</li>
      <li>Placarding for Naval Motor Vehicles and Railcars</li>
      <li>Security for Naval Motor Vehicles and Railcars</li>
      <li>Blocking and Bracing Drawings for Naval Motor Vehicles and Railcars</li>
      <li>Truckload Drawings for Naval Motor Vehicles</li>
      <li>DD Form 626, Motor Vehicle Inspection</li>
      <li>NAVSEA 8023/3, Railcar Inspection</li>
    </ul>
    </div>
  </section>
  <section id="availability" class="block">
    <h2 class="subtitle is-inline is-bold">Availability: </h2> If you are affiliated with the Navy or the Marine Corps, request quotas via the <a href='###'>Navy Training page</a> of this website. For all other students, admission to a course is by nomination from the prospective student's command. If the nominating command has access to ATRRS, the submission must be made via ATRRS.
  </section>
  <section id="iacet" class="block">
    <h2 class="subtitle is-inline is-bold">The IACET Standard: </h2>DAC has been approved by the International Association for Continuing Education and Training (IACET) as an Authorized Provider of Continuing Education Units (CEUs).  In obtaining this accreditation, the Defense Ammunition Center has demonstrated that it complies with the ANSI/IACET Standard which is recognized internationally as a standard of good practice. The DAC awards 2.6 Continuing Education Units (CEUs) on the course certificate for successful completion of this course.
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
          <td>{{ skedData.contact }}</td>
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
