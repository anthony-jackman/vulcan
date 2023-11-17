<script setup>
import { AccordionList, AccordionItem } from "vue3-rich-accordion";
</script>

<template>
  <h2 class="title has-text-centered mt-3">Frequently Asked Questions</h2>
  <hr />

  <div class="sandbox">
    <div class="sandbox__accordion-block" :style="{ width: accordionBlockWidthPercents + '%' }">
      <AccordionList v-model:state="state">
        <AccordionItem id="mId1">
          <template #summary>Where can I get the DoD root certificate?</template>
          <div>
            <p>
              To get to the security certificate for your CAC reader, click the link below and follow the directions.<br />
              <a href="https://xxxxxxxx" target="_blank">link to get the certificates</a>
            </p>
          </div>
        </AccordionItem>
        <AccordionItem id="mId2">
          <template #summary>What other software do I need to take DAC online training courses?</template>
          <div>
            <p>Be sure the following application is installed on your computer before launching your course:</p>
            <ul>
              <li>Windows Media Player</li>
            </ul>
          </div>
        </AccordionItem>
        <AccordionItem id="mId3">
          <template #summary>How do I access a course?</template>
          <div>
            <p>Download this <a href='/docs/alms_registration_steps_2022dec08.pdf' target='_blank'>document</a> (PDF format) for step-by-step instructions on how to register for a course and access the course in the ALMS.</p>
          </div>
        </AccordionItem>
        <AccordionItem id="mId4">
          <template #summary>How do I register for a course?</template>
          <div>
            <p>Download this <a href='/docs/alms_registration_steps_2022dec08.pdf' target='_blank'>document</a> (PDF format) for step-by-step instructions on how to register for a course and access the course in the ALMS.</p>
          </div>
        </AccordionItem>
        <AccordionItem id="mId5">
          <template #summary>What if I registered for a course but have not received verification or it is not listed in "My Enrollments"?</template>
          <div>
            <p>Login to ATRRS at <a href='https://www.atrrs.army.mil/selfdevctr/' target='_blank'>https://www.atrrs.army.mil/selfdevctr/</a> and verify that your registration submitted properly for the course you selected. If it does not appear there, then re-register for the course.</p>
            <p>If your registration appears in ATRRS but is not available in the ALMS, then contact the Army Training Help Desk at:</p>
            <address>
              Army Training Help Desk<br />
              Hours: 24/7, 365 days per year<br />
              DSN: 826-4745<br />
              Primary Toll Free: <a href="tel:18772510730">1-877-251-0730</a><br />
              Secondary Toll Free: <a href="tel:18002752872">1-800-275-2872</a><br />
              Commercial: <a href="tel:17578784745">1-757-878-4745</a><br />
              Select Option #1 for the ALMS
            </address>
          </div>
        </AccordionItem>
        <AccordionItem id="mId6">
          <template #summary>What resources do I need to complete AMMO-37-DL?</template>
          <div class="pubreqs">
            <p>To complete AMMO-37-DL course, you must have the latest editions of:</p>
            <ul class="pl-5">
              <li>the International Maritime Dangerous Goods (IMDG) Code.</li>
              <li>the International Air Transport Association (IATA) regulations.</li>
            </ul>
          </div>
        </AccordionItem>
        <AccordionItem id="mId7">
          <template #summary>How do I contact the Army Learning Management System (ALMS) Help Desk?</template>
          <div>
            <p>We need to discuss this 'page'.  second link on live site is very old (2013). first link is broke.</p>
          </div>
        </AccordionItem>
        <AccordionItem id="mId8">
          <template #summary>How do I print a certificate of completion?</template>
          <div>
            <p>For courses completed in the ALMS, login to AKO, access the ALMS main page, and select “Detailed Training Records”.  A list of the courses you have completed will appear.  Under “Completion Status”, select “Print Certificate of Completion”.  After the certificate loads, you can print it by using the printer icon on the ALMS webpage and NOT the normal printing from your internet browser.</p>
            <p>For more precise instructions, see this <a href="/docs/how_to_print_certificates_in_alms.pdf" target="_blank">How to Print Certificates</a> (pdf).</p>
          </div>
        </AccordionItem>
      </AccordionList>
    </div>
  </div>

  <!-- <search>Title Filter</search> -->
  <!-- <ul>
    <li><a href='#'>Where can I get the DoD root certificate?</a></li>
    <li><a href='#'>What other software do I need to take DAC online training courses?</a></li>
    <li><a href='#'>How do I access a course?</a></li>
    <li><a href='#'>How do I register for a course?</a></li>
    <li><a href='#'>What if I registered for a course but have not received verification or it is not listed in "My Enrollments"?</a></li>
    <li><a href='#'>What resources do I need to complete AMMO-37-DL?</a></li>
    <li><a href='#'>How do I contact the Army Learning Management System (ALMS) Help Desk?</a></li>
    <li><a href='#'>How do I print a certificate of completion?</a></li>
  </ul> -->
</template>
