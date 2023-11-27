<template>
  <h1 class="title has-text-centered mt-3">Mobile Apps for Training</h1>
  <hr class="divider"/>

  <div class="mobileapps">
    <div id="yellowbook">
      <h2 class="subtitle">Yellow Book</h2>
      <div class="flex-container">
        <div id="appIcon" class="mb-2 mr-3">
          <img src='@/assets/icons/yellowbook_icon.png' alt='drawing of the orange letters y and b on a yellow background' />
          <a href='/videos/yellowBook_demo.mp4' target='_blank'>Watch the demo movie</a>
        </div>
        <div id="appdescript" class='flex-item'>
          <p>Yellow Book provides THE USER IN THE FIELD with a ready "user friendly" consolidated reference to basic data and regulatory criteria. Hazard classification, physical security, marking, transportation and storage data and criteria for selected conventional ammunition and explosive items, guided missiles and rockets, current at the time of publishing, are presented in this listing. The data and criteria contained in this app are primarily derived from:</p>
          <ul id="appTopics">
            <li>Joint Hazard Classification (JHCS) data base</li>
            <li>Federal Logistics Information System data on Compact Disc (FED LOG)</li>
            <li>Title 49, Code of Federal Regulations (49 CFR)</li>
            <li>Emergency Response Guidebook</li>
          </ul>
          <p>This mobile app is not intended to supersede, contravene, or modify any of these publications or any other DoD or service criteria.</p>
          <div id="appStores" class="mt-2">
            <button>
              <a href='http://itunes.apple.com/us/app/yellow-book/id520715004?mt=8' target='_blank'><img src='@/assets/icons/appstore_icon.png' alt='iPhone App Store icon on a black background' /></a>
            </button>
            <button>
              <a href="https://play.google.com/store/apps/details?id=com.serco.yellowbook" target="_blank">
                <img src='@/assets/icons/googleplay_icon.png' alt='Andriod App Store icon on a black background' />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
