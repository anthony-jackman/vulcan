<script setup>
import ContactInfo from '@/components/ContactModal.vue';
import { ref, computed } from 'vue';

const modalActive = ref(false);
const selectedContactId = ref('');
const skedDatas = [
  {
    "classId": "00001",
    "startDate": "10/16/2023",
    "stopDate": "10/27/2023",
    "location": "Ft. Bliss",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000002"
  },
  {
    "classId": "00002",
    "startDate": "11/27/2023",
    "stopDate": "12/08/2023",
    "location": "Ft. Bliss",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000002"
  },
  {
    "classId": "00003",
    "startDate": "01/22/2024",
    "stopDate": "02/02/2024",
    "location": "Ft. Bliss",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000002"
  },
  {
    "classId": "00004",
    "startDate": "08/12/2024",
    "stopDate": "08/23/2024",
    "location": "Ft. Bliss",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000002"
  },
  {
    "classId": "00005",
    "startDate": "03/04/2024",
    "stopDate": "03/15/2024",
    "location": "Ft. Bliss",
    "classNumb": "005",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000002"
  },
  {
    "classId": "00006",
    "startDate": "03/18/2024",
    "stopDate": "03/29/2024",
    "location": "Ft. Bliss",
    "classNumb": "006",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000002"
  },
  {
    "classId": "00007",
    "startDate": "04/08/2024",
    "stopDate": "04/19/2024",
    "location": "Ft. Bliss",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000002"
  },
  {
    "classId": "00008",
    "startDate": "09/09/2024",
    "stopDate": "09/20/2024",
    "location": "Ft. Bliss",
    "classNumb": "008",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000002"
  },
  {
    "classId": "00009",
    "startDate": "06/03/2024",
    "stopDate": "06/14/2024",
    "location": "Ft. Bliss",
    "classNumb": "009",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000002"
  },
  {
    "classId": "00010",
    "startDate": "07/08/2024",
    "stopDate": "07/19/2024",
    "location": "Ft. Bliss",
    "classNumb": "010",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000002"
  },
  {
    "classId": "00011",
    "startDate": "09/11/2023",
    "stopDate": "09/22/2023",
    "location": "Ft. Liberty, NC",
    "classNumb": "008",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000003"
  },
  {
    "classId": "00012",
    "startDate": "10/16/2023",
    "stopDate": "10/27/2023",
    "location": "Ft. Liberty, NC",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000003"
  },
  {
    "classId": "00013",
    "startDate": "11/27/2023",
    "stopDate": "12/08/20234",
    "location": "Ft. Liberty, NC",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000003"
  },
  {
    "classId": "00014",
    "startDate": "01/22/2024",
    "stopDate": "02/02/2024",
    "location": "Ft. Liberty, NC",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000003"
  },
  {
    "classId": "00015",
    "startDate": "03/04/2024",
    "stopDate": "03/15/2024",
    "location": "Ft. Liberty, NC",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000003"
  },
  {
    "classId": "00016",
    "startDate": "03/18/2024",
    "stopDate": "03/29/2024",
    "location": "Ft. Liberty, NC",
    "classNumb": "005",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000003"
  },
  {
    "classId": "00017",
    "startDate": "06/03/2024",
    "stopDate": "06/14/2024",
    "location": "Ft. Liberty, NC",
    "classNumb": "006",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000003"
  },
  {
    "classId": "00018",
    "startDate": "07/22/2024",
    "stopDate": "08/02/2024",
    "location": "Ft. Liberty, NC",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000003"
  },
  {
    "classId": "00019",
    "startDate": "09/09/2024",
    "stopDate": "09/20/2024",
    "location": "Ft. Liberty, NC",
    "classNumb": "008",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000003"
  },
  {
    "classId": "00020",
    "startDate": "09/11/2023",
    "stopDate": "09/22/2023",
    "location": "Ft. Campbell, KY",
    "classNumb": "010",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000004"
  },
  {
    "classId": "00021",
    "startDate": "10/16/2023",
    "stopDate": "10/27/2023",
    "location": "Ft. Campbell, KY",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000004"
  },
  {
    "classId": "00022",
    "startDate": "11/27/2023",
    "stopDate": "12/08/2023",
    "location": "Ft. Campbell, KY",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000004"
  },
  {
    "classId": "00023",
    "startDate": "01/22/2024",
    "stopDate": "02/02/2024",
    "location": "Ft. Campbell, KYC",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000004"
  },
  {
    "classId": "00024",
    "startDate": "03/04/2024",
    "stopDate": "03/15/2024",
    "location": "Ft. Campbell, KY",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000004"
  },
  {
    "classId": "00025",
    "startDate": "04/08/2024",
    "stopDate": "04/19/2024",
    "location": "Ft. Campbell, KY",
    "classNumb": "005",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000004"
  },
  {
    "classId": "00026",
    "startDate": "05/13/2024",
    "stopDate": "05/24/2024",
    "location": "Ft. Campbell, KY",
    "classNumb": "006",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000004"
  },
  {
    "classId": "00027",
    "startDate": "06/03/2024",
    "stopDate": "06/14/2024",
    "location": "Ft. Campbell, KY",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000004"
  },
  {
    "classId": "00028",
    "startDate": "07/22/2024",
    "stopDate": "08/02/2024",
    "location": "Ft. Campbell, KY",
    "classNumb": "008",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000004"
  },
  {
    "classId": "00029",
    "startDate": "09/09/2024",
    "stopDate": "09/20/2024",
    "location": "Ft. Campbell, KY",
    "classNumb": "009",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000004"
  },
  {
    "classId": "00030",
    "startDate": "07/08/2024",
    "stopDate": "07/19/2024",
    "location": "Ft. Campbell, KY",
    "classNumb": "010",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000004"
  },
  {
    "classId": "00031",
    "startDate": "07/24/2023",
    "stopDate": "08/04/2023",
    "location": "Ft. Carson, CO",
    "classNumb": "010",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000005"
  },
  {
    "classId": "00032",
    "startDate": "10/16/2023",
    "stopDate": "10/27/2023",
    "location": "Ft. Carson, CO",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000005"
  },
  {
    "classId": "00033",
    "startDate": "11/27/2023",
    "stopDate": "12/08/2023",
    "location": "Ft. Carson, CO",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000005"
  },
  {
    "classId": "00034",
    "startDate": "01/22/2024",
    "stopDate": "02/02/2024",
    "location": "Ft. Carson, CO",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000005"
  },
  {
    "classId": "00035",
    "startDate": "02/05/2024",
    "stopDate": "02/16/2024",
    "location": "Ft. Carson, CO",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000005"
  },
  {
    "classId": "00036",
    "startDate": "03/04/2024",
    "stopDate": "03/15/2024",
    "location": "Ft. Carson, CO",
    "classNumb": "005",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000005"
  },
  {
    "classId": "00037",
    "startDate": "03/18/2024",
    "stopDate": "03/29/2024",
    "location": "Ft. Carson, CO",
    "classNumb": "006",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000005"
  },
  {
    "classId": "00038",
    "startDate": "04/08/2024",
    "stopDate": "04/19/2024",
    "location": "Ft. Carson, CO",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000005"
  },
  {
    "classId": "00039",
    "startDate": "04/22/2024",
    "stopDate": "05/03/2024",
    "location": "Ft. Carson, CO",
    "classNumb": "008",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000005"
  },
  {
    "classId": "00040",
    "startDate": "06/03/2024",
    "stopDate": "06/14/2024",
    "location": "Ft. Carson, CO",
    "classNumb": "009",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000005"
  },
  {
    "classId": "00041",
    "startDate": "07/08/2024",
    "stopDate": "07/19/2024",
    "location": "Ft. Carson, CO",
    "classNumb": "010",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000005"
  },
  {
    "classId": "00042",
    "startDate": "09/09/2024",
    "stopDate": "09/20/2024",
    "location": "Ft. Carson, CO",
    "classNumb": "011",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000005"
  },
  {
    "classId": "00043",
    "startDate": "07/22/2024",
    "stopDate": "08/02/2024",
    "location": "Ft. Carson, CO",
    "classNumb": "012",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000005"
  },
  {
    "classId": "00044",
    "startDate": "08/05/2024",
    "stopDate": "08/16/2024",
    "location": "Ft. Carson, CO",
    "classNumb": "013",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000005"
  },
  {
    "classId": "00045",
    "startDate": "09/11/2023",
    "stopDate": "09/22/2023",
    "location": "Ft. Drum, NY",
    "classNumb": "009",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000006"
  },
  {
    "classId": "00046",
    "startDate": "10/16/2023",
    "stopDate": "10/27/2023",
    "location": "Ft. Drum, NY",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000006"
  },
  {
    "classId": "00047",
    "startDate": "11/27/2023",
    "stopDate": "12/08/2023",
    "location": "Ft. Drum, NY",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000006"
  },
  {
    "classId": "00048",
    "startDate": "01/22/2024",
    "stopDate": "02/02/2024",
    "location": "Ft. Drum, NY",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000006"
  },
  {
    "classId": "00049",
    "startDate": "03/04/2024",
    "stopDate": "03/15/2024",
    "location": "Ft. Drum, NY",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000006"
  },
  {
    "classId": "00050",
    "startDate": "03/18/2024",
    "stopDate": "03/29/2024",
    "location": "Ft. Drum, NY",
    "classNumb": "005",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000006"
  },
  {
    "classId": "00051",
    "startDate": "06/03/2024",
    "stopDate": "06/14/2024",
    "location": "Ft. Drum, NY",
    "classNumb": "006",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000006"
  },
  {
    "classId": "00052",
    "startDate": "07/08/2024",
    "stopDate": "07/19/2024",
    "location": "Ft. Drum, NY",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000006"
  },
  {
    "classId": "00053",
    "startDate": "08/14/2023",
    "stopDate": "08/25/2023",
    "location": "Ft. Cavazos, TX",
    "classNumb": "013",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00054",
    "startDate": "09/11/2023",
    "stopDate": "09/22/2023",
    "location": "Ft. Cavazos, TX",
    "classNumb": "014",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00055",
    "startDate": "10/16/2023",
    "stopDate": "10/27/2023",
    "location": "Ft. Cavazos, TX",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00056",
    "startDate": "11/27/2023",
    "stopDate": "12/08/2023",
    "location": "Ft. Cavazos, TX",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00057",
    "startDate": "01/22/2024",
    "stopDate": "02/02/2024",
    "location": "Ft. Cavazos, TX",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00058",
    "startDate": "02/05/2024",
    "stopDate": "02/16/2024",
    "location": "Ft. Cavazos, TX",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00059",
    "startDate": "03/04/2024",
    "stopDate": "03/15/2024",
    "location": "Ft. Cavazos, TX",
    "classNumb": "005",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00060",
    "startDate": "03/18/2024",
    "stopDate": "03/29/2024",
    "location": "Ft. Cavazos, TX",
    "classNumb": "006",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00061",
    "startDate": "04/01/2024",
    "stopDate": "04/12/2024",
    "location": "Ft. Cavazos, TX",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00062",
    "startDate": "04/15/2024",
    "stopDate": "04/26/2024",
    "location": "Ft. Cavazos, TX",
    "classNumb": "008",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00063",
    "startDate": "04/29/2024",
    "stopDate": "05/10/2024",
    "location": "Ft. Cavazos, TX",
    "classNumb": "009",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00064",
    "startDate": "05/13/2024",
    "stopDate": "05/24/2024",
    "location": "Ft. Cavazos, TX",
    "classNumb": "010",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00065",
    "startDate": "06/03/2024",
    "stopDate": "06/14/2024",
    "location": "Ft. Cavazos, TX",
    "classNumb": "011",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00066",
    "startDate": "07/08/2024",
    "stopDate": "07/19/2024",
    "location": "Ft. Cavazos, TX",
    "classNumb": "012",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00067",
    "startDate": "07/22/2024",
    "stopDate": "08/02/2024",
    "location": "Ft. Cavazos, TX",
    "classNumb": "013",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00068",
    "startDate": "08/12/2024",
    "stopDate": "08/23/2024",
    "location": "Ft. Cavazos, TX",
    "classNumb": "014",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00069",
    "startDate": "09/09/2024",
    "stopDate": "09/20/2024",
    "location": "Ft. Cavazos, TX",
    "classNumb": "015",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000007"
  },
  {
    "classId": "00070",
    "startDate": "10/16/2023",
    "stopDate": "10/27/2023",
    "location": "Ft. Lewis, WA",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000008"
  },
  {
    "classId": "00071",
    "startDate": "11/27/2023",
    "stopDate": "12/08/2023",
    "location": "Ft. Lewis, WA",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000008"
  },
  {
    "classId": "00072",
    "startDate": "01/22/2024",
    "stopDate": "02/02/2024",
    "location": "Ft. Lewis, WA",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000008"
  },
  {
    "classId": "00073",
    "startDate": "03/04/2024",
    "stopDate": "03/15/2024",
    "location": "Ft. Lewis, WA",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000008"
  },
  {
    "classId": "00074",
    "startDate": "04/08/2024",
    "stopDate": "04/19/2024",
    "location": "Ft. Lewis, WA",
    "classNumb": "005",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000008"
  },
  {
    "classId": "00075",
    "startDate": "06/03/2024",
    "stopDate": "06/14/2024",
    "location": "Ft. Lewis, WA",
    "classNumb": "006",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000008"
  },
  {
    "classId": "00076",
    "startDate": "07/08/2024",
    "stopDate": "07/19/2024",
    "location": "Ft. Lewis, WA",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000008"
  },
  {
    "classId": "00077",
    "startDate": "04/22/2024",
    "stopDate": "05/03/2024",
    "location": "Ft. Lewis, WA",
    "classNumb": "008",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000008"
  },
  {
    "classId": "00078",
    "startDate": "07/22/2024",
    "stopDate": "08/02/2024",
    "location": "Ft. Lewis, WA",
    "classNumb": "009",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000008"
  },
  {
    "classId": "00079",
    "startDate": "10/16/2023",
    "stopDate": "10/27/2023",
    "location": "Ft. Johnson, LA",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000009"
  },
  {
    "classId": "00080",
    "startDate": "11/27/2023",
    "stopDate": "12/08/2023",
    "location": "Ft. Johnson, LA",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000009"
  },
  {
    "classId": "00081",
    "startDate": "03/04/2024",
    "stopDate": "03/15/2024",
    "location": "Ft. Johnson, LA",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000009"
  },
  {
    "classId": "00082",
    "startDate": "04/08/2024",
    "stopDate": "04/19/2024",
    "location": "Ft. Johnson, LA",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000009"
  },
  {
    "classId": "00083",
    "startDate": "06/03/2024",
    "stopDate": "06/14/2024",
    "location": "Ft. Johnson, LA",
    "classNumb": "005",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000009"
  },
  {
    "classId": "00084",
    "startDate": "09/11/2023",
    "stopDate": "09/22/2023",
    "location": "Ft. Riley, KS",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000010"
  },
  {
    "classId": "00085",
    "startDate": "10/16/2023",
    "stopDate": "10/27/2023",
    "location": "Ft. Riley, KS",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000010"
  },
  {
    "classId": "00086",
    "startDate": "11/27/2023",
    "stopDate": "12/08/2023",
    "location": "Ft. Riley, KS",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000010"
  },
  {
    "classId": "00087",
    "startDate": "01/22/2024",
    "stopDate": "02/02/2024",
    "location": "Ft. Riley, KS",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000010"
  },
  {
    "classId": "00088",
    "startDate": "03/04/2024",
    "stopDate": "03/15/2024",
    "location": "Ft. Riley, KS",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000010"
  },
  {
    "classId": "00089",
    "startDate": "06/03/2024",
    "stopDate": "06/14/2024",
    "location": "Ft. Riley, KS",
    "classNumb": "005",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000010"
  },
  {
    "classId": "00090",
    "startDate": "07/08/2024",
    "stopDate": "07/19/2024",
    "location": "Ft. Riley, KS",
    "classNumb": "006",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000010"
  },
  {
    "classId": "00091",
    "startDate": "09/09/2024",
    "stopDate": "09/20/2024",
    "location": "Ft. Riley, KS",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000010"
  },
  {
    "classId": "00092",
    "startDate": "03/18/2024",
    "stopDate": "03/29/2024",
    "location": "Ft. Riley, KS",
    "classNumb": "008",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000010"
  },
  {
    "classId": "00093",
    "startDate": "08/21/2023",
    "stopDate": "09/01/2023",
    "location": "Ft. Sill, OK",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000011"
  },
  {
    "classId": "00094",
    "startDate": "03/18/2024",
    "stopDate": "03/29/2024",
    "location": "Ft. Sill, OK",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000011"
  },
  {
    "classId": "00095",
    "startDate": "04/22/2024",
    "stopDate": "05/03/2024",
    "location": "Ft. Sill, OK",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000011"
  },
  {
    "classId": "00096",
    "startDate": "07/22/2024",
    "stopDate": "08/02/2024",
    "location": "Ft. Sill, OK",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000011"
  },
  {
    "classId": "00097",
    "startDate": "09/11/2023",
    "stopDate": "09/22/2023",
    "location": "Ft. Stewart, GA",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000012"
  },
  {
    "classId": "00098",
    "startDate": "10/16/2023",
    "stopDate": "10/27/2023",
    "location": "Ft. Stewart, GA",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000012"
  },
  {
    "classId": "00099",
    "startDate": "01/22/2024",
    "stopDate": "02/02/2024",
    "location": "Ft. Stewart, GA",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000012"
  },
  {
    "classId": "00100",
    "startDate": "03/04/2024",
    "stopDate": "03/15/2024",
    "location": "Ft. Stewart, GA",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000012"
  },
  {
    "classId": "00101",
    "startDate": "04/22/2024",
    "stopDate": "05/03/2024",
    "location": "Ft. Stewart, GA",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000012"
  },
  {
    "classId": "00102",
    "startDate": "06/03/2024",
    "stopDate": "06/14/2024",
    "location": "Ft. Stewart, GA",
    "classNumb": "005",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000012"
  },
  {
    "classId": "00103",
    "startDate": "07/08/2024",
    "stopDate": "07/19/2024",
    "location": "Ft. Stewart, GA",
    "classNumb": "006",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000012"
  },
  {
    "classId": "00104",
    "startDate": "11/27/2023",
    "stopDate": "12/08/2023",
    "location": "Ft. Stewart, GA",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000012"
  },
  {
    "classId": "00105",
    "startDate": "07/24/2023",
    "stopDate": "08/04/2023",
    "location": "McAlester, OK",
    "classNumb": "013",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00106",
    "startDate": "08/07/2023",
    "stopDate": "08/18/2023",
    "location": "McAlester, OK",
    "classNumb": "014",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00107",
    "startDate": "08/21/2023",
    "stopDate": "09/01/2023",
    "location": "McAlester, OK",
    "classNumb": "015",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00108",
    "startDate": "09/11/2023",
    "stopDate": "09/22/2023",
    "location": "McAlester, OK",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00109",
    "startDate": "10/16/2023",
    "stopDate": "10/27/2023",
    "location": "McAlester, OK",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00110",
    "startDate": "11/27/2023",
    "stopDate": "12/08/2023",
    "location": "McAlester, OK",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00111",
    "startDate": "01/22/2024",
    "stopDate": "02/02/2024",
    "location": "McAlester, OK",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00112",
    "startDate": "03/04/2024",
    "stopDate": "03/15/2024",
    "location": "McAlester, OK",
    "classNumb": "005",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00113",
    "startDate": "03/18/2024",
    "stopDate": "03/29/2024",
    "location": "McAlester, OK",
    "classNumb": "006",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00114",
    "startDate": "04/22/2024",
    "stopDate": "05/03/2024",
    "location": "McAlester, OK",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00115",
    "startDate": "05/13/2024",
    "stopDate": "05/24/2024",
    "location": "McAlester, OK",
    "classNumb": "008",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00116",
    "startDate": "06/03/2024",
    "stopDate": "06/14/2024",
    "location": "McAlester, OK",
    "classNumb": "009",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00117",
    "startDate": "02/05/2024",
    "stopDate": "02/16/2024",
    "location": "McAlester, OK",
    "classNumb": "010",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00118",
    "startDate": "07/08/2024",
    "stopDate": "07/19/2024",
    "location": "McAlester, OK",
    "classNumb": "011",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00119",
    "startDate": "07/22/2024",
    "stopDate": "08/02/2024",
    "location": "McAlester, OK",
    "classNumb": "012",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00120",
    "startDate": "08/05/2024",
    "stopDate": "08/16/2024",
    "location": "McAlester, OK",
    "classNumb": "013",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00121",
    "startDate": "08/19/2024",
    "stopDate": "08/30/2024",
    "location": "McAlester, OK",
    "classNumb": "014",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00122",
    "startDate": "09/09/2024",
    "stopDate": "09/20/2024",
    "location": "McAlester, OK",
    "classNumb": "015",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000001"
  },
  {
    "classId": "00123",
    "startDate": "08/12/2024",
    "stopDate": "08/23/2024",
    "location": "Vilseck, GE",
    "classNumb": "012",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000013"
  },
  {
    "classId": "00124",
    "startDate": "09/13/2024",
    "stopDate": "09/20/2024",
    "location": "Vilseck, GE",
    "classNumb": "013",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000013"
  },
  {
    "classId": "00125",
    "startDate": "10/16/2023",
    "stopDate": "10/27/2023",
    "location": "Vilseck, GE",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000013"
  },
  {
    "classId": "00126",
    "startDate": "11/27/2023",
    "stopDate": "12/08/2023",
    "location": "Vilseck, GE",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000013"
  },
  {
    "classId": "00127",
    "startDate": "01/22/2024",
    "stopDate": "02/02/2024",
    "location": "Vilseck, GE",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000013"
  },
  {
    "classId": "00128",
    "startDate": "02/26/2024",
    "stopDate": "02/16/2024",
    "location": "Vilseck, GE",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000013"
  },
  {
    "classId": "00129",
    "startDate": "02/26/2024",
    "stopDate": "03/08/2024",
    "location": "Vilseck, GE",
    "classNumb": "005",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000013"
  },
  {
    "classId": "00130",
    "startDate": "03/18/2024",
    "stopDate": "03/29/2024",
    "location": "Vilseck, GE",
    "classNumb": "006",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000013"
  },
  {
    "classId": "00131",
    "startDate": "04/08/2024",
    "stopDate": "04/19/2024",
    "location": "Vilseck, GE",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000013"
  },
  {
    "classId": "00132",
    "startDate": "04/29/2024",
    "stopDate": "05/10/2024",
    "location": "Vilseck, GE",
    "classNumb": "008",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000013"
  },
  {
    "classId": "00133",
    "startDate": "04/22/2024",
    "stopDate": "05/03/2024",
    "location": "Vilseck, GE",
    "classNumb": "011",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000013"
  },
  {
    "classId": "00134",
    "startDate": "05/13/2024",
    "stopDate": "05/24/2024",
    "location": "Vilseck, GE",
    "classNumb": "009",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000013"
  },
  {
    "classId": "00135",
    "startDate": "06/03/2024",
    "stopDate": "06/14/2024",
    "location": "Vilseck, GE",
    "classNumb": "010",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000013"
  },
  {
    "classId": "00136",
    "startDate": "09/11/2023",
    "stopDate": "09/22/2023",
    "location": "Wheeler Airfield, HI",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000014"
  },
  {
    "classId": "00137",
    "startDate": "10/16/2023",
    "stopDate": "10/27/2023",
    "location": "Wheeler Airfield, HI",
    "classNumb": "001",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000014"
  },
  {
    "classId": "00138",
    "startDate": "11/27/2023",
    "stopDate": "12/08/2023",
    "location": "Wheeler Airfield, HI",
    "classNumb": "002",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000014"
  },
  {
    "classId": "00139",
    "startDate": "03/04/2024",
    "stopDate": "03/16/2024",
    "location": "Wheeler Airfield, HI",
    "classNumb": "003",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000014"
  },
  {
    "classId": "00140",
    "startDate": "04/08/2024",
    "stopDate": "04/19/2024",
    "location": "Wheeler Airfield, HI",
    "classNumb": "004",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000014"
  },
  {
    "classId": "00141",
    "startDate": "06/03/2024",
    "stopDate": "06/14/2024",
    "location": "Wheeler Airfield, HI",
    "classNumb": "005",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000014"
  },
  {
    "classId": "00142",
    "startDate": "07/08/2024",
    "stopDate": "07/19/2024",
    "location": "Wheeler Airfield, HI",
    "classNumb": "006",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000014"
  },
  {
    "classId": "00142",
    "startDate": "09/09/2024",
    "stopDate": "09/20/2024",
    "location": "Wheeler Airfield, HI",
    "classNumb": "007",
    "status": "Scheduled",
    "contact": "Available",
    "contactId": "000014"
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
    "pocTitle": 'For Registration Availability for this course at Ft Bliss, TX',
    "pocName": 'Yvette Webb-Sosa',
    "pocEmail": 'yvette.d.webb-sosa.civ@army.mil',
    "pocPhone1": '915-744-8118',
    "pocPhone2": '',
    "pocdsnPhone": '612-8118',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''
  },
  {
    "contactId": '000003',
    "pocTitle": 'For Registration Availability for this course at Ft Liberty, NC',
    "pocName": 'Emmitt Spurgeon',
    "pocEmail": 'emmitt.l.spurgeon.civ@army.mil',
    "pocPhone1": '910-396-9224',
    "pocPhone2": '',
    "pocdsnPhone": '236-9224',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''
  },
  {
    "contactId": '000004',
    "pocTitle": 'For Registration Availability for this course at Ft Campbell, KY',
    "pocName": 'Brent Holman',
    "pocEmail": 'brent.m.holman.civ@army.mil',
    "pocPhone1": '210-412-6623',
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
    "pocTitle": 'For Registration Availability for this course at Ft Carson, CO',
    "pocName": 'Kenneth Isenberg',
    "pocEmail": 'kenneth.e.isenberg.civ@army.mil',
    "pocPhone1": '719-526-3617',
    "pocPhone2": '',
    "pocdsnPhone": '691-3617',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''
  },
  {
    "contactId": '000006',
    "pocTitle": 'For Registration Availability for this course at Ft Drum, NY',
    "pocName": 'Michelle Lejeune',
    "pocEmail": 'michelle.m.lejeune.civ@army.mil',
    "pocPhone1": '315-772-3462',
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
    "pocTitle": 'For Registration Availability for this course at Ft Cavazos, TX',
    "pocName": 'Joe Robbins',
    "pocEmail": 'joe.l.robbins.civ@army.mil',
    "pocPhone1": '254-553-1533',
    "pocPhone2": '',
    "pocdsnPhone": '663-1533',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''
  },
  {
    "contactId": '000008',
    "pocTitle": 'For Registration Availability for this course at Ft Lewis, WA',
    "pocName": 'Sheree Cruz',
    "pocEmail": 'sheree.c.cruz.civ@army.mil',
    "pocPhone1": '253-477-2055',
    "pocPhone2": '',
    "pocdsnPhone": '677-2055',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''
  },
  {
    "contactId": '000009',
    "pocTitle": 'For Registration Availability for this course at Ft Johnson, LA',
    "pocName": 'Paul Dructor',
    "pocEmail": 'paul.l.dructor.civ@army.mil',
    "pocPhone1": '337-531-9776',
    "pocPhone2": '',
    "pocdsnPhone": '863-9776',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''
  },
  {
    "contactId": '000010',
    "pocTitle": 'For Registration Availability for this course at Ft Riley, KS',
    "pocName": 'Edward McKendry',
    "pocEmail": 'edward.m.mckendry.civ@army.mil',
    "pocPhone1": '785-239-1290',
    "pocPhone2": '',
    "pocdsnPhone": '856-1290',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''
  },
  {
    "contactId": '000011',
    "pocTitle": 'For Registration Availability for this course at Ft Sill, KS',
    "pocName": 'Ronald J Rayos',
    "pocEmail": 'ronald.j.rayos.civ@army.mil',
    "pocPhone1": '580-442-2830',
    "pocPhone2": '',
    "pocdsnPhone": '639-2830',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''
  },
  {
    "contactId": '000012',
    "pocTitle": 'For Registration Availability for this course at Ft Stewart, GA',
    "pocName": 'Robert Haile',
    "pocEmail": 'robert.w.haile.civ@army.mil',
    "pocPhone1": '912-767-5501',
    "pocPhone2": '',
    "pocdsnPhone": '870-5501',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''
  },
  {
    "contactId": '000013',
    "pocTitle": 'For Registration Availability for this course at Rose Barracks, Vilseck, GE',
    "pocName": 'Elizabeth Foresman',
    "pocEmail": 'elizabeth.g.foresman.civ@army.mil',
    "pocPhone1": '49-9662-83-5106',
    "pocPhone2": '',
    "pocdsnPhone": '314-476-5106',
    "altpocName": '',
    "altpocEmail": '',
    "altpocPhone1": '',
    "altpocPhone2": '',
    "altpocdsnPhone": ''
  },
  {
    "contactId": '000014',
    "pocTitle": 'For Registration Availability for this course at Schofield Barracks, Wheeler Airfield, HI',
    "pocName": 'Cheryl Soriano',
    "pocEmail": 'cheryl.l.soriano.civ@army.mil',
    "pocPhone1": '808-655-4854',
    "pocPhone2": '',
    "pocdsnPhone": '315-455-4854',
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
    <h2 class="subtitle is-inline is-bold">Availability: </h2>If you are affiliated with the Navy or the Marine Corps, request quotas via the <a href='###'>Navy Training page</a> of this website. For all other students, admission to a course is by nomination from the prospective student's command. If the nominating command has access to ATRRS, the submission must be made via ATRRS.
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

<style lang="scss" scoped>
// #crseTopics ul {
//   list-style: disc;
// }
</style>
