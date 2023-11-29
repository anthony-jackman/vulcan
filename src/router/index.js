import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue';
import ClassroomTrngPage from '@/pages/ClassroomTrngPage.vue';
import OnlineTrngPage from '@/pages/OnlineTrngPage.vue';
// import MobileAppsPage from '@/pages/MobileAppsPage.vue';
import NavyTrngPage from '@/pages/NavyTrngPage.vue';
// import QACECpage from '@/pages/QACECPage.vue';
// import COPpage from '@/pages/CommPracticePage.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Home - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This site offers helpful need to know items for all warfighters to get their needed training.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, web-based training, ammunition, hazardous material, storage, transportation, Helpdesk, learning management system, lms'
          }
        ]
      }
    },
    {
      path: '/classroom',
      name: 'classroom',
      component: ClassroomTrngPage,
      meta: {
        title: 'Classroom Training - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This webpage offers information on courses that are delivered in a classroom setting to ammunition and hazardous material storage and transportation students.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, hazardous material, storage, transportation'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo01',
      name: 'ammo01',
      // component: ammo01page
      component: () => import('@/pages/courses/ammo01.vue'),
      meta: {
        title: 'Conventional Ammunition - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive study of conventional ammunition families, such as Small Arms, Artillery, Grenades, Mortars, Propellant, Pyrotechnics, Land Mines, Rockets, Demolition Materials, Bombs, and Cartridge and Propellant Actuated Devices.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, small arms, mortars, gernades, propellant, pyrotechnics, land mines, rockets, demolition materials, bombs, cartridge and propellant activators'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo04',
      name: 'ammo04',
      component: () => import('@/pages/courses/ammo04.vue'),
      meta: {
        title: 'Ammunition Demilitarization - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of regulations governing the demilitarization of munitions, emerging technologies for resource recovery and recycling, and environmental requirements and decontamination methods (e.g. Military Munitions Rule - MMR), as well as technical training in the application of ammunition demilitarization methods, procedures, and techniques for open burning and open detonation operations.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, demilitarization, environmental requirements, decontamination, recycling, procedures, regulations'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo12',
      name: 'ammo12',
      component: () => import('@/pages/courses/ammo12.vue'),
      meta: {
        title: 'Ammunition Storage - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides technical training in properly applying regulations governing the storage, inventory, and physical security of A&E, as well as concepts critical to conducting A&E storage functions to include drawings, planographs, placards, packaging, compatibility, security construction statements, Controlled Item Inventory Codes (CIICs), and Net Explosives Weight (NEW).'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, storage, inventory, physical security, drawings, planographs, placards, packaging, compatibility, security construction, CIIC, net explosives weight'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo14',
      name: 'ammo14',
      component: () => import('@/pages/courses/ammo14.vue'),
      meta: {
        title: 'Ammunition Surveillance - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive overview of the conventional ammunition surveillance program, as well as technical training in properly applying regulations, procedures, and documentation to support the Ammunition Surveillance Program, Stockpile Reliability Program, and Propellant Stability Program.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, storage, inventory, surveillance, Stockpile Reliability Program, Propellant Stability Program'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo28',
      name: 'ammo28',
      component: () => import('@/pages/courses/ammo28.vue'),
      meta: {
        title: 'Army Electrical Explosives Safety - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of Army guidance and National Fire Protection Association (NFPA) standards governing electrical explosives safety, as well as technical training in the application of explosives safety concepts to include zones of protection, grounding, bonding, static electricity, electrical equipment in hazardous (classified) locations, Hazards of Electromagnetic Radiation to Ordnance (HERO), Fuel (HERF), and Personnel (HERP), and lightning protection system (LPS) inspection and testing standards and criteria.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, electrical explosives safety, explosive safety concepts, zone of protection, grounding, bonding, static electricity, HERO, HERF, HERP, lightning protection system, LPS, inspection, testing'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo29',
      name: 'ammo29',
      component: () => import('@/pages/courses/ammo29.vue'),
      meta: {
        title: 'Navy Electrical Explosives Safety - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of Army guidance and National Fire Protection Association (NFPA) standards governing electrical explosives safety, as well as technical training in the application of explosives safety concepts to include zones of protection, grounding, bonding, static electricity, electrical equipment in hazardous (classified) locations, Hazards of Electromagnetic Radiation to Ordnance (HERO), Fuel (HERF), and Personnel (HERP), and lightning protection system (LPS) inspection and testing standards and criteria.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, electrical explosives safety, explosive safety concepts, zone of protection, grounding, bonding, static electricity, HERO, HERF, HERP, lightning protection system, LPS, inspection, testing'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo33',
      name: 'ammo33',
      component: () => import('@/pages/courses/ammo33.vue'),
      meta: {
        title: 'Explosives Safety and Environmental Risk Management - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course is an overview of environmental regulations, as well as technical training in the application of basic explosives principles, the Navy Explosives Safety Program, ammunition storage and compatibility criteria, ammunition security and transportation requirements, explosives accident/incident reporting, explosives safety inspections, and station environmental compliance. '
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, Navy, ammunition, explosive safety, explosives accident/incident reporting'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo36',
      name: 'ammo36',
      component: () => import('@/pages/courses/ammo36.vue'),
      meta: {
        title: 'Explosives Safety for Naval Facility Planning - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of regulations governing Department of Defense (DoD) and Department of Navy (DoN) explosives safety quantity distance (ESQD) standards and the application of these standards, as well as technical training in the preparation and review of DoN site plans submitted for various explosives facilities. Students will receive hands-on training during a Facility Design Problems Workshop using ESQD calculations, scenarios, maps, waivers, and current regulatory guidance.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, Navy, ammunition, explosive safety, quantity distance, preparation and review of site plans, ESQD'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo38',
      name: 'ammo38',
      component: () => import('@/pages/courses/ammo38.vue'),
      meta: {
        title: 'Guided Missiles and Large Rockets - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides technical training in properly applying regulatory guidance governing guided missile and large rocket surveillance operations, as well as concepts critical to guided missile and large rocket munitions to include model designations, design concepts and system characteristics, humidity and desiccant monitoring and exchange, safety considerations, maintenance and testing, storage, physical security, and inspection types, intervals, standards, criteria, and reports. '
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, Navy, ammunition, explosive safety, large rockets, guided missile, design concepts, maintenance and testing, storage, inspection, standards'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo43',
      name: 'ammo43',
      component: () => import('@/pages/courses/ammo43.vue'),
      meta: {
        title: 'Intermodal Dry Cargo Container/CSC Reinspection - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of guidance, techniques, and procedures for reinspecting intermodal dry cargo containers, as well as technical training in applying CSC container types and structural/non-structural components, reporting and administrative requirements, decal specifications, tools and equipment, and reinspection standards and criteria as directed in US Public Law and Joint Service regulations.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, Department of Transportation, CSC container, structural components, reporting, administraive requirements, tools and equipment, inspection, reinspection'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo47',
      name: 'ammo47',
      component: () => import('@/pages/courses/ammo47.vue'),
      meta: {
        title: 'Air Force Electrical Explosive Safety - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of Air Force guidance and National Fire Protection Association (NFPA) standards governing electrical explosives safety, as well as technical training in the application of explosives safety concepts to include zones of protection, grounding, bonding, static electricity, electrical equipment in hazardous (classified) locations, Hazards of Electromagnetic Radiation to Ordnance (HERO), Fuel (HERF), and Personnel (HERP), and lightning protection system (LPS) inspection and testing standards and criteria.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, electrical explosives safety, explosive safety concepts, zone of protection, grounding, bonding, static electricity, HERO, HERF, HERP, lightning protection system, LPS, inspection, testing'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo51mv',
      name: 'ammo51mv',
      component: () => import('@/pages/courses/ammo51mv.vue'),
      meta: {
        title: 'Naval Motor Vehicle Inspection - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of DoD, DoT, and Navy guidance, techniques, and procedures for inspecting motor vehicles used for on-/off-station shipments of ammunition and explosives (A&E) and other related hazardous materials, as well as technical training in the application of compatibility, placarding, transportation safety, physical security, and blocking and bracing for ISO intermodal containers and tactical/non-tactical vehicles.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, guidance, techiques, procedures, inspecting, motor vehicles, explosives and hazard compatibility, placarding, transportation safety, physical security, blocking, bracing, intermodal container'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo51mvrc',
      name: 'ammo51mvrc',
      component: () => import('@/pages/courses/ammo51mvrc.vue'),
      meta: {
        title: 'Naval Motor Vehicle and Railcar Inspection - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of DoD, DoT, and Navy guidance, techniques, and procedures for inspecting motor vehicles and railcars used for on-/off-station shipments of A&E and other related hazardous materials, as well as technical training in the application of compatibility, placarding, transportation safety, physical security, and blocking and bracing for ISO intermodal containers and tactical/non-tactical vehicles.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, guidance, techiques, procedures, inspecting, motor vehicles, rail car, explosives and hazard compatibility, placarding, transportation safety, physical security, blocking, bracing, intermodal container'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo54',
      name: 'ammo54',
      component: () => import('@/pages/courses/ammo54.vue'),
      meta: {
        title: 'Risk Management and SOPs - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of regulations governing the risk management process, as well as technical training in applying risk management principles, conducting hazard analyses, and developing SOPs for A&E operations.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, review, regulations, risk management process, applying principles, conducting hazard analyses, developing SOP'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo60',
      name: 'ammo60',
      component: () => import('@/pages/courses/ammo60.vue'),
      meta: {
        title: 'Technical Ammunition - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of regulations governing A&E operations, as well as training in applying technical A&E concepts to include National Stock Numbers (NSNs) and Lot Numbers, Controlled Item Inventory Codes (CIICs), conveyance inspections (DD Form 626), storage procedures, storage drawings, placarding, packaging, marking, compatibility, explosives safety, physical security, condition codes, defect codes, surveillance inspections, financial responsibilities, and records management.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, national stock number, lot numbers, CIIC, conveyance inspection, storage procedures, storage drawings, placarding, packaging, marking, financial responsibility, record management, defect codes, condition codes'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo62',
      name: 'ammo62',
      component: () => import('@/pages/courses/ammo62.vue'),
      meta: {
        title: 'Technical Transportation of Hazardous Materials - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a comprehensive review of regulations governing the transportation of hazardous materials by all modes (land, vessel, and commercial/military air). International regulations covered include the International Maritime Dangerous Goods Code and the International Air Transport Association Dangerous Goods Regulations. United States regulations include the Department of Transportation (DOT) 49 Code of Federal Regulations (CFR) and AFMAN 24-604. '
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, transportation, hazardous materials, land, vessel, commercial air, military air, international regulations, IMDG code, IATA Dangerous Goods Regulations, Department of Transportation, AFMAN 24-604, 49 CFR'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo74',
      name: 'ammo74',
      component: () => import('@/pages/courses/ammo74.vue'),
      meta: {
        title: 'Explosives Safety Officer Orientation - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of Navy and Marine Corps guidance governing the Explosives Safety and Qualification/Certification (QUAL/CERT) programs and ESO responsibilities for command administration and management, as well as technical training in applying requirements for standard operating procedures (SOPs), magazine area and range operations, operating buildings and production lines, waterfront and airfield explosives operations, environmental compliance, Program 05 special considerations, lightning protection, grounding, emissions control, motor vehicle and railroad transportation, ordnance/materiel/weight handling equipment (OHE/MHE/WHE), physical security, and inventory management.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, Navy, US Marine Corps, guidance, Explosive Safety, Qual/Cert, Explosive Safety Officer, administration, management'
          }
        ]
      }
    },
    {
      path: '/classroom/ammo82',
      name: 'ammo82',
      component: () => import('@/pages/courses/ammo82.vue'),
      meta: {
        title: 'U.S. Army ESQD and Site Planning - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of regulations governing ESQD concepts and practices, as well as technical training in interpreting and applying ESQD tables and explosives safety considerations not directly outlined in ESQD tables, determining safe distance measurement points, managing previously determined explosives limits, and properly preparing site approval documentation.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ESQD, concept, practice, interpreting, ESQD tables, explosive safety considerations, site planning approval'
          }
        ]
      }
    },
    {
      path: '/classroom/pack1b',
      name: 'pack1b',
      component: () => import('@/pages/courses/pack1b.vue'),
      meta: {
        title: 'Military Preservation and Packaging - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides technical hands-on training in applying unit and intermediate military packaging and preservation methods, outer packing procedures, cleaning and drying processes, containerization load planning, load blocking and bracing, palletized and unitized loads, preservative materials, cushioning, marking, and labeling in accordance with military packaging policy criteria and packaging specifications and standards.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, unit, intermediate, packaging, preservation, methods, outside packing, cleaning, drying, processes, containerization load, blocking, bracing, cushioning, marking, labeling'
          }
        ]
      }
    },
    {
      path: '/mobileapps',
      name: 'mobileapps',
      component: () => import('@/pages/MobileAppsPage.vue'),
      meta: {
        title: 'Mobile Applications & Performance Support Tools - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This page provides narritives for the mobile applications and performance support tools for Ammunition and Hazardous Storage and Shipping processes.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, performance support tool, mobile application, google play, iTunes, yellow book'
          }
        ]
      }
    },
    {
      path: '/navytrng',
      name: 'navytrng',
      component: NavyTrngPage,
      meta: {
        title: 'Navy Training - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This page provides narritive U. S. Navy and Marine Corps hazardous material and ammunition storage and transportation training and points of contact.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, USN, USMC, ammunition, hazardous material, storage, transportation, training, point of contact'
          }
        ]
      }
    },
    {
      path: '/commpractice',
      name: 'commpract',
      component: () => import('@/pages/CommPracticePage.vue'),
      meta: {
        title: 'Communities of Practice - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This page provides narritive for the ammunition and hazardous material communities of practice.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, CoP, community, practice, DAU'
          }
        ]
      }
    },
    {
      path: '/online',
      name: 'online',
      component: OnlineTrngPage,
      meta: {
        title: 'Distance (Online) Learning - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This webpage offers information on courses that are delivered in via the internet for ammunition and hazardous material storage and transportation students.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, hazardous material, web, distance, learning, storage, transportation'
          }
        ]
      }
    },
    {
      path: '/online/ammo10dl',
      name: 'ammo10dl',
      component: () => import('@/pages/courses/ammo10dl.vue'),
      meta: {
        title: 'Ammunition Quality Assurance - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a comprehensive review of how ammunition is evaluated, classified, and managed throughout its lifecycle as well as technical training in the application of ammunition surveillance tasks including inspections, ammunition data cards (ADCs), condition codes, defect codes, and depot surveillance records (DSRs) for conventional and missile munitions.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, surveillance, inspections, ammunition data cards, condition codes, defect codes, lifecycle, management'
          }
        ]
      }
    },
    {
      path: '/online/ammo18dl',
      name: 'ammo18dl',
      component: () => import('@/pages/courses/ammo18dl.vue'),
      meta: {
        title: 'Basics of Naval Expl Hazard Control - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of Department of Defense (DoD) and Department of Navy (DoN) regulations governing ammunition and explosives hazards and explosives safety principles and practices, as well as technical training in the application of storage compatibility, explosives classification, explosives safety quantity distance, hazard control, explosives facilities, transportation, and handling operations, and an overview of the QUAL/CERT program.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, explosive safety principles, practices, storage compatibility, classficiation, ESQD, explosive facilities, transportation, handling operations'
          }
        ]
      }
    },
    {
      path: '/online/ammo28dl',
      name: 'ammo28dl',
      component: () => import('@/pages/courses/ammo28dl.vue'),
      meta: {
        title: 'Army Electrical Explosive Safety - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of Army guidance and National Fire Protection Association (NFPA) standards governing electrical explosives safety, as well as technical training in the application of explosives safety concepts to include zones of protection, grounding, bonding, static electricity, electrical equipment in hazardous (classified) locations, Hazards of Electromagnetic Radiation to Ordnance (HERO), Fuel (HERF), and Personnel (HERP), and lightning protection system (LPS) inspection and testing standards and criteria.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, electrical explosives safety, explosive safety concepts, zone of protection, grounding, bonding, static electricity, HERO, HERF, HERP, lightning protection system, LPS, inspection, testing'
          }
        ]
      }
    },
    {
      path: '/online/ammo29dl',
      name: 'ammo29dl',
      component: () => import('@/pages/courses/ammo29dl.vue'),
      meta: {
        title: 'Navy Electrical Explosives Safety - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of Army guidance and National Fire Protection Association (NFPA) standards governing electrical explosives safety, as well as technical training in the application of explosives safety concepts to include zones of protection, grounding, bonding, static electricity, electrical equipment in hazardous (classified) locations, Hazards of Electromagnetic Radiation to Ordnance (HERO), Fuel (HERF), and Personnel (HERP), and lightning protection system (LPS) inspection and testing standards and criteria.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, electrical explosives safety, explosive safety concepts, zone of protection, grounding, bonding, static electricity, HERO, HERF, HERP, lightning protection system, LPS, inspection, testing'
          }
        ]
      }
    },
    {
      path: '/online/ammo31dl',
      name: 'ammo31dl',
      component: () => import('@/pages/courses/ammo31dl.vue'),
      meta: {
        title: 'Environmental Consideration for Ammo Pers - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a review of explosives safety and environmental regulatory guidance, as well as a comprehensive review of environmental laws, hazardous waste identification, hazard communication and training, spill prevention, response, and reporting, and hazardous waste management.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, explosives safety, environmental regulations, laws, hazardous waste identification, communication, spill prevention, response, reporting, management'
          }
        ]
      }
    },
    {
      path: '/online/ammo36dl',
      name: 'ammo36dl',
      component: () => import('@/pages/courses/ammo36dl.vue'),
      meta: {
        title: 'Expl Safety for Naval Facility Planning - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of regulations governing Department of Defense (DoD) and Department of Navy (DoN) explosives safety quantity distance (ESQD) standards and the application of these standards, as well as technical training in the preparation and review of DoN site plans submitted for various explosives facilities.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ESQD, application, preparation, review of DoN site plans'
          }
        ]
      }
    },
    {
      path: '/online/ammo37dl',
      name: 'ammo37dl',
      component: () => import('@/pages/courses/ammo37dl.vue'),
      meta: {
        title: 'General Trans of Haz Mat Refresher - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a comprehensive review of changes to regulations governing the transportation of hazardous materials by all modes (i.e., land, vessel, and commercial/military air). International regulations covered include the International Maritime Dangerous Goods (IMDG) Code and the International Air Transport Association (IATA) Dangerous Goods Regulation.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, transportation, hazardous materials, land, vessel, commercial air, military air, international regulations, IMDG code, IATA Dangerous Goods Regulations, Department of Transportation, AFMAN 24-604, 49 CFR'
          }
        ]
      }
    },
    {
      path: '/online/ammo43dl',
      name: 'ammo43dl',
      component: () => import('@/pages/courses/ammo43dl.vue'),
      meta: {
        title: 'Intermodal Dry Cargo Container/CSC Reinspection - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of guidance, techniques, and procedures for reinspecting intermodal dry cargo containers, as well as technical training in applying CSC container types and structural/non-structural components, reporting and administrative requirements, decal specifications, tools and equipment, and reinspection standards and criteria as directed in US Public Law and Joint Service regulations.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, Department of Transportation, CSC container, structural components, reporting, administraive requirements, tools and equipment, inspection, reinspection'
          }
        ]
      }
    },
    {
      path: '/online/ammo45dl',
      name: 'ammo45dl',
      component: () => import('@/pages/courses/ammo45dl.vue'),
      meta: {
        title: 'Introduction to Ammunition - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a review of regulatory guidance applicable to the safe conduct of A&E operations, as well as a comprehensive review of A&E classes and characteristics and safe handling procedures and explosives safety requirements for the receipt, storage, maintenance, demilitarization, and issue of ammunition at U.S. Army installations.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, regulatory guidance, safe conduct, operations, characteristics and safe handling, explosive safety requirements, receipt, storage, maintenance, demil, issue ammunition'
          }
        ]
      }
    },
    {
      path: '/online/ammo47dl',
      name: 'ammo47dl',
      component: () => import('@/pages/courses/ammo47dl.vue'),
      meta: {
        title: 'Air Force Electrical Explosive Safety - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of Air Force guidance and National Fire Protection Association (NFPA) standards governing electrical explosives safety, as well as technical training in the application of explosives safety concepts to include zones of protection, grounding, bonding, static electricity, electrical equipment in hazardous (classified) locations, Hazards of Electromagnetic Radiation to Ordnance (HERO), Fuel (HERF), and Personnel (HERP), and lightning protection system (LPS) inspection and testing standards and criteria.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, electrical explosives safety, explosive safety concepts, zone of protection, grounding, bonding, static electricity, HERO, HERF, HERP, lightning protection system, LPS, inspection, testing'
          }
        ]
      }
    },
    {
      path: '/online/ammo49dl',
      name: 'ammo49dl',
      component: () => import('@/pages/courses/ammo49dl.vue'),
      meta: {
        title: 'Naval Expl Safety Mgrs/Supvrs Orientation - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of Department of Defense (DoD) and Department of Navy (DoN) regulations governing the Explosives Safety and Qualification/Certification (QUAL/CERT) program and ESO responsibilities for command administration and management, as well as technical training in the application of facility certification and master planning, ammunition and explosives (A&E) standard operating procedures (SOPs), operational risk management (ORM) and lightning protection requirements, arms, ammunition, and explosives (AA&E) transportation, equipment, and physical security requirements, and Navy publications and instructions for safely managing ordnance operations, conducting explosives safety self-inspections (ESSIs), and implementing the QUAL/CERT program.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, explosive safety principles, practices, storage compatibility, classficiation, ESQD, explosive facilities, transportation, handling operations'
          }
        ]
      }
    },
    {
      path: '/online/ammo51mvdl',
      name: 'ammo51mvdl',
      component: () => import('@/pages/courses/ammo51mvdl.vue'),
      meta: {
        title: 'Naval Motor Vehicle Inspection - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of DoD, DoT, and Navy guidance, techniques, and procedures for inspecting motor vehicles used for on-/off-station shipments of ammunition and explosives (A&E) and other related hazardous materials, as well as technical training in the application of compatibility, placarding, transportation safety, physical security, and blocking and bracing for ISO intermodal containers and tactical/non-tactical vehicles.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, guidance, techiques, procedures, inspecting, motor vehicles, explosives and hazard compatibility, placarding, transportation safety, physical security, blocking, bracing, intermodal container'
          }
        ]
      }
    },
    {
      path: '/online/ammo51rcdl',
      name: 'ammo51rcdl',
      component: () => import('@/pages/courses/ammo51rcdl.vue'),
      meta: {
        title: 'Naval Railcar Inspection - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of DoD, DoT, and Navy guidance, techniques, and procedures to inspect railcars used for on-/off-station shipments of A&E and other related hazardous materials, as well as training in the application of compatibility, placarding, transportation safety, physical security of sensitive conventional arms, ammunition, and explosives (AA&E), and blocking and bracing for ISO intermodal containers.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, guidance, techiques, procedures, inspecting, railcar, explosives and hazard compatibility, placarding, transportation safety, physical security, blocking, bracing, intermodal container'
          }
        ]
      }
    },
    {
      path: '/online/ammo54dl',
      name: 'ammo54dl',
      component: () => import('@/pages/courses/ammo54dl.vue'),
      meta: {
        title: 'Risk Management and SOPs - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of regulations governing the risk management process, as well as technical training in applying risk management principles, conducting hazard analyses, and developing SOPs for A&E operations.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, review, regulations, risk management process, applying principles, conducting hazard analyses, developing SOP'
          }
        ]
      }
    },
    {
      path: '/online/ammo63dl',
      name: 'ammo63dl',
      component: () => import('@/pages/courses/ammo63dl.vue'),
      meta: {
        title: 'U.S. Army Expl Safety Familiarization - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of DoD and Army guidance for explosives safety and the characteristics and terminology relevant to ammunition, explosives, and propellant items, as well as technical training in the application of hazard classification principles and associated hazard classes, divisions, and compatibility groups for the storage and transport of A&E, quantity distance (QD) principles used to determine appropriate levels of protection and minimum separation distances for A&E in storage, A&E safe storage requirements, and A&E-specific operational safety concepts including the risk management and hazard analysis processes, standard operating procedures (SOPs), tools and equipment maintenance, on- and off-post transportation activities, inert certification and demilitarization functions, electrical safety methods, and fire protection measures.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, comprehensive review, ammunition, explosives, propellant, hazard classification, divisions, compatibility groups, storage, transportation, quantity distance, SOPs, risk management, hazard analysis, electrical safety, fire protection'
          }
        ]
      }
    },
    {
      path: '/online/ammo64dl',
      name: 'ammo64dl',
      component: () => import('@/pages/courses/ammo64dl.vue'),
      meta: {
        title: 'Class V Issue & Turn-In Proc - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of the procedures to properly request, draw, and turn-in Class V materials for units, as well as technical training in conducting ammunition authorizations, requests, and issues, ensuring field accountability of sub-unit turn-ins, preparing ammunition for turn-in, completing reconciliation documentation, and ensuring proper management of the amnesty program.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, procedures, request, draw, turn-in, class V materials, authorizations, field accountability, reconciliation, amnesty'
          }
        ]
      }
    },
    {
      path: '/online/ammo66dl',
      name: 'ammo66dl',
      component: () => import('@/pages/courses/ammo66dl.vue'),
      meta: {
        title: 'Radiation Safety - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a comprehensive review of regulations governing the use, storage, transport, and disposal of radioactive materials and the methods used to limit and document exposures to radiation hazards. This course provides training in the technical application of basic nuclear physics, ionizing radiation, units of measure, detection, and measurement, radiation dosimetry, radiation accidents and incidents, and radioactive waste disposal.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, regulations, use, storage, transportation, disposal, radioactive materials, limitations, exposures, basic nuclear physics, ionizing radiation, units of measure, radiation dosimetry, radiation accidents and incidents, waste disposal'
          }
        ]
      }
    },
    {
      path: '/online/ammo67dl',
      name: 'ammo67dl',
      component: () => import('@/pages/courses/ammo67dl.vue'),
      meta: {
        title: 'Hazmat Familiarization/Safety in Trans - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a comprehensive review of the nine hazard classes and documentation pertinent to hazardous material shipments. United States regulations include the Department of Transportation (DOT) 49 Code of Federal Regulations (CFR), as well as U.S. Military regulations. Course topics emphasize vehicle inspections, hazardous materials, Material Safety Data Sheet (MSDS), Joint Hazard Classification System (JHCS) data sheets, the HAZMAT Table, communication, security, and the Emergency Response Guidebook (ERG).'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, federal regulations, 49 code, vehicle inspections, hazardous material, MSDS, JHCS, hazmat table, communication, security, Emergency Response Guidebook'
          }
        ]
      }
    },
    {
      path: '/online/ammo68dl',
      name: 'ammo68dl',
      component: () => import('@/pages/courses/ammo68dl.vue'),
      meta: {
        title: 'Military Munitions Rule - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of DoD and Army guidance and federal law governing the identification, management, and transportation of hazardous waste. This course additionally provides technical training in the application of the Military Munitions Rule (MMR) for the proper designation of military munitions as waste munitions and the conduct of WMM operations to include inventory, inspection, and disposal procedures, storage, transportation, production, and permitting requirements, and firing range, recycling, and emergency response operations.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, DOD, Army, guidance, federal, law, identification, management, transportation, hazardous, waste'
          }
        ]
      }
    },
    {
      path: '/online/ammo75dl',
      name: 'ammo75dl',
      component: () => import('@/pages/courses/ammo75dl.vue'),
      meta: {
        title: 'Ammunition Physical Security - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a comprehensive review of regulatory guidance applicable to Department of Army physical security program requirements for the storage of ammunition and explosives. This course specifically provides training on the interpretation and application of AR 190-11 (Physical Security of Arms, Ammunition, and Explosives) and FEDLOG to determine Controlled Item Inventory Codes (CIICs) and associated security risk categories, physical security measures for ammunition and explosives sites, and special requirements for Security Risk Categories I and II.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, Army, physical, security, CIIC, AR 190-11, FEDLOG, security rish categories, risk categories'
          }
        ]
      }
    },
    {
      path: '/online/ammo76dl',
      name: 'ammo76dl',
      component: () => import('@/pages/courses/ammo76dl.vue'),
      meta: {
        title: 'Identification of Ammunition - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a review of regulatory guidance applicable to the identification of ammunition, as well as training on the use and interpretation of ammunition color coding, special markings, National Stock Numbers (NSNs), DoD Identification Codes (DODICs), and ammunition lot numbers and propellant lot numbers.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, DODICs, NSN, special markings, lot numbers, propellant, ammunition, ammunition color codes'
          }
        ]
      }
    },
    {
      path: '/online/ammo78dl',
      name: 'ammo78dl',
      component: () => import('@/pages/courses/ammo78dl.vue'),
      meta: {
        title: 'Ammunition Publications - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a comprehensive review of the various publications used by all branches of Service within the DoD, as well as technical training in the application and interpretation of DoD, Army, Air Force, Navy, and multi-service publications and federal law. This course additionally provides an overview of the numbering systems used to identify and manage DoD and Service-specific guidance (e.g., military specifications and standards, DoD issuances, administrative, technical, and joint publications).'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ammunition, interpretation, DoD, Army, Air Force, Navy, multi-service, publications, federal law'
          }
        ]
      }
    },
    {
      path: '/online/ammo97dl',
      name: 'ammo97dl',
      component: () => import('@/pages/courses/ammo97dl.vue'),
      meta: {
        title: 'Munitions History Program - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a comprehensive review of MHP website functions, main menu modules, submenus, links, and other useful features and available resources. This course additionally provides detailed technical training in navigating the MHP website, reviewing and updating MHP records, retrieving Depot Surveillance Records (DSRs), and creating new inspection records and data record headers. '
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, operations, website, DSR, inspection, data, record headers'
          }
        ]
      }
    },
    {
      path: '/online/ammo99dl',
      name: 'ammo99dl',
      component: () => import('@/pages/courses/ammo99dl.vue'),
      meta: {
        title: 'Application of US Army ESQD Principles - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a comprehensive review of DoD and U.S. Army governing regulations and procedures critical to ensuring compliance with ESQD requirements.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, ESQD, requirements, Army, regulations, procedures'
          }
        ]
      }
    },
    {
      path: '/online/ammo100dl',
      name: 'ammo100dl',
      component: () => import('@/pages/courses/ammo100dl.vue'),
      meta: {
        title: 'Army Explosive Safety Site Planning - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This course provides a comprehensive review of regulations governing explosives safety site plans and the explosives safety site plan approval process, as well as technical training in the application of explosives safety quantity distance (ESQD) safe separation distances and net explosives weight (NEW) limits, the preparation of explosives safety site plan packages using ESQD calculations, scenarios, maps, waivers, and drawings, and the proper and complete submission of explosives safety site plan packages with supporting documentation including transmittal letters, installation maps, site maps, and supporting worksheets as required by DoD and DA guidance.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, explosives, safety, separation, site, planning, NEW, ESQD, maps, waivers, drawings, documentation, transmittal letters'
          }
        ]
      }
    },
    {
      path: '/online/ammo107dl',
      name: 'ammo107dl',
      component: () => import('@/pages/courses/ammo107dl.vue'),
      meta: {
        title: 'Intro to Expl Sfty Mgmt for Sfty Pros - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a comprehensive review of U.S. Army governing regulations and procedures critical to conducting safe A&E operations at retail and depot levels, as well as training in the application of standard risk management practices, explosives safety program management, explosives hazards, explosives storage, explosives safety site planning and licensing, and ammunition malfunction and incident procedures.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, explosives, safe operations, retail, depot, risk management, program management, hazards, storage, safety site planning, licensing, ammunition malfunction, incident procedures'
          }
        ]
      }
    },
    {
      path: '/online/ammo108dl',
      name: 'ammo108dl',
      component: () => import('@/pages/courses/ammo108dl.vue'),
      meta: {
        title: 'Ammo Handlers - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a comprehensive review of safe ammunition handling procedures, as well as technical training in identifying vehicle inspection and ammunition transportation requirements and conducting the request, receipt, turn-in, and storage of training, operational-load, and combat-load munitions.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, explosives, ammunition, request, receipt, turn-in, storage, training, operational-load, combat-load'
          }
        ]
      }
    },
    {
      path: '/online/ammo112dl',
      name: 'ammo112dl',
      component: () => import('@/pages/courses/ammo112dl.vue'),
      meta: {
        title: 'Ammunition and Explosives Storage Safety - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course content includes a comprehensive review of U.S. Army governing regulations and procedures critical to conducting safe A&E storage operations at retail and depot levels, as well as training in the application of A&E storage drawings, planographs, and documentation, authorized A&E storage activities and material handling equipment (MHE), and compatibility, stock management, Standing Operating Procedures (SOPs), and Magazine Data Cards for the safe storage of A&E.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, regulations, procedures, safe storage operations, retail, depot, drawings, planographs, documentation, material handling equipment, compatibility, stock management, SOPs, MDS'
          }
        ]
      }
    },
    {
      path: '/online/pack1adl',
      name: 'pack1adl',
      component: () => import('@/pages/courses/pack1adl.vue'),
      meta: {
        title: 'Defense Basic Preservation and Packing - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course provides a comprehensive review of military packaging and preservation methods, military packaging policy criteria, and packaging specifications and standards, as well technical training in the application of cleaning and drying processes, preservation materials, cushioning, unit and intermediate packing methods, military marking and labeling, outer packaging procedures, palletized and unitized loads, containerization, and blocking and bracing.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, packaging, preservation, policy criteria, specifications, cleaning, drying, cushioning, marking, labeling, outer packaging'
          }
        ]
      }
    },
    {
      path: '/qacec',
      name: 'qacec',
      component: () => import('@/pages/QACECPage.vue'),
      meta: {
        title: 'Quality Standards & CEC - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course provides a narritive text that discusses quality standards and college credit authorities for our courses.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, quality, standards, college'
          }
        ]
      }
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('@/pages/FAQPage.vue'),
      meta: {
        title: 'Quality Standards & CEC - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'Course provides a narritive text that discusses quality standards and college credit authorities for our courses.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, quality, standards, college'
          }
        ]
      }
    },
    {
      path: '/navytrngsites/20srgGulfport',
      name: '20srgGulfport',
      component: () => import('@/pages/locations/20srgGulfport.vue')
    },
    {
      path: '/navytrngsites/dacMcAlester',
      name: 'dacMcAlester',
      component: () => import('@/pages/locations/dacMcAlester.vue')
    },
    {
      path: '/navytrngsites/ewtglantLittleCreek',
      name: 'ewtglantLittleCreek',
      component: () => import('@/pages/locations/ewtglantLittleCreek.vue')
    },
    // {
    //   path: '/navytrngsites/fltactYokosuka',
    //   name: 'fltactYokosuka',
    //   component: () => import('@/pages/locations/fltactYokosuka.vue')
    // },
    {
      path: '/navytrngsites/mcagc29Palms',
      name: 'mcagc29Palms',
      component: () => import('@/pages/locations/mcagcc29Palms.vue')
    },
    {
      path: '/navytrngsites/mcasCherryPoint',
      name: 'mcasCherryPoint',
      component: () => import('@/pages/locations/mcasCherryPoint.vue')
    },
    {
      path: '/navytrngsites/mcasMiramar',
      name: 'mcasMiramar',
      component: () => import('@/pages/locations/mcasMiramar.vue')
    },
    {
      path: '/navytrngsites/mcasPendleton',
      name: 'mcasPendleton',
      component: () => import('@/pages/locations/mcasPendleton.vue')
    },
    {
      path: '/navytrngsites/mcbPendleton',
      name: 'mcbPendleton',
      component: () => import('@/pages/locations/mcbPendleton.vue')
    },
    {
      path: '/navytrngsites/mcbhKaneoheBay',
      name: 'mcbhKaneoheBay',
      component: () => import('@/pages/locations/mcbhKaneoheBay.vue')
    },
    {
      path: '/navytrngsites/navairfacElCentro',
      name: 'navairfacElCentro',
      component: () => import('@/pages/locations/navairfacElCentro.vue')
    },
    {
      path: '/navytrngsites/navairstaJacksonville',
      name: 'navairstaJacksonville',
      component: () => import('@/pages/locations/navairstaJacksonville.vue')
    },
    {
      path: '/navytrngsites/navairstaOceana',
      name: 'navairstaOceana',
      component: () => import('@/pages/locations/navairstaOceana.vue')
    },
    {
      path: '/navytrngsites/navairstaSigonella',
      name: 'navairstaSigonella',
      component: () => import('@/pages/locations/navairstaSigonella.vue')
    },
    {
      path: '/navytrngsites/navairstaWhidbeyIs',
      name: 'navairstaWhidbeyIs',
      component: () => import('@/pages/locations/navairstaWhidbeyIs.vue')
    },
    {
      path: '/navytrngsites/navairwpnstaChinaLake',
      name: 'navairwpnstaChinaLake',
      component: () => import('@/pages/locations/navairwpnstaChinaLake.vue')
    },
    {
      path: '/navytrngsites/navbaseGuam',
      name: 'navbaseGuam',
      component: () => import('@/pages/locations/navbaseGuam.vue')
    },
    {
      path: '/navytrngsites/navbaseSanDiego',
      name: 'navbaseSanDiego',
      component: () => import('@/pages/locations/navbaseSanDiego.vue')
    },
    {
      path: '/navytrngsites/navmagIndianIsland',
      name: 'navmagIndianIsland',
      component: () => import('@/pages/locations/navmagIndianIsland.vue')
    },
    {
      path: '/navytrngsites/navstaNorfolk',
      name: 'navstaNorfolk',
      component: () => import('@/pages/locations/navstaNorfolk.vue')
    },
    {
      path: '/navytrngsites/navstaRota',
      name: 'navstaRota',
      component: () => import('@/pages/locations/navstaRota.vue')
    },
    {
      path: '/navytrngsites/navsupactBahrain',
      name: 'navsupactBahrain',
      component: () => import('@/pages/locations/navsupactBahrain.vue')
    },
    {
      path: '/navytrngsites/navsupactNaples',
      name: 'navsupactNaples',
      component: () => import('@/pages/locations/navsupactNaples.vue')
    },
    {
      path: '/navytrngsites/navwpnstaCharleston',
      name: 'navwpnstaCharleston',
      component: () => import('@/pages/locations/navwpnstaCharleston.vue')
    },
    {
      path: '/navytrngsites/navwpnstaSealBeach',
      name: 'sealbeach',
      component: () => import('@/pages/locations/navwpnstaSealBeach.vue')
    },
    {
      path: '/navytrngsites/nuwcKeyport',
      name: 'nuwcKeyport',
      component: () => import('@/pages/locations/nuwcKeyport.vue')
    },
    {
      path: '/navytrngsites/okinawa',
      name: 'okinawa',
      component: () => import('@/pages/locations/okinawa.vue')
    },
    {
      path: '/navytrngsites',
      name: 'navytrngsites',
      component: () => import('@/pages/NavyTrainingSitesPage.vue')
    },
    {
      path: '/privacy',
      name: 'privacy-security',
      component: () => import('@/pages/PrivacyPage.vue'),
      meta: {
        title: 'Privacy Notice - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This page discusses how Defense Ammunition Center handles privacy concerns on this website.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, privacy, security'
          }
        ]
      }
    },
    {
      path: '/accessibility',
      name: 'accessibility',
      component: () => import('@/pages/AccessibilityPage.vue'),
      meta: {
        title: 'Accessibility - DAC Catalog',
        metaTags: [
          {
            name: 'description',
            content: 'This page discusses efforts we have taken to ensure this website can be used by all.'
          },
          {
            name: 'keywords',
            content: 'Defense Ammunition Center, 508, WCAG, accessibility'
          }
        ]
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/pages/NotFoundPage.vue')
    }
  ]
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
