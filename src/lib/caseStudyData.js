export const caseStudies = [
  // ── REFURBISHMENT ────────────────────────────────────────────────────────
  {
    slug: "nhs-hammersmith-ahu-refurbishment",
    sector: "Healthcare / NHS",
    location: "Hammersmith, London",
    image: "/nhs-hammersmith-fulham-case-study.webp",
    headline: "NHS Trust AHU Refurbishment, Live Facility",
    relevantIf: [
      "Your AHU is in a live clinical facility that stays operational during works",
      "You need targeted component repair rather than full unit replacement",
      "Reliability and indoor air quality cannot be compromised",
    ],
    summary:
      "Fan drives, filters, dampers, coil face, and bathroom extract fans overhauled. Operational life extended without full replacement or disruption to the trust.",
    services: ["refurbishment"],
  },
  {
    slug: "bath-private-hospital-ahu-refurbishment",
    sector: "Healthcare / Private",
    location: "Bath",
    image: "/private-hospital-bath-case-study.webp",
    headline: "Operating Theatre AHU Refurbishment with EC Upgrade",
    relevantIf: [
      "Theatre or clinical-grade air quality standards are required throughout",
      "Energy reduction is part of the refurbishment brief",
      "Works must fit around a live clinical programme",
    ],
    summary:
      "Full internal refurbishment with EC supply and extract fans and a custom heat recovery exchanger. Energy reduced, theatre air quality maintained throughout.",
    services: ["refurbishment", "ec-fan"],
  },
  {
    slug: "toca-football-o2-ahu-refurbishment",
    sector: "Sport & Entertainment",
    location: "O2 Arena, London",
    image: "/toca-intereactive-arena-case-study.webp",
    headline: "AHU Refurbishment, High-Footfall Venue",
    relevantIf: [
      "Your venue has limited maintenance windows between events or trading hours",
      "Works must be programmed tightly around the operational calendar",
      "Asset life extension is preferred over full unit replacement",
    ],
    summary:
      "Targeted internal refurbishment at the O2 Arena. Fan and filtration systems upgraded. Works coordinated around the venue's operational schedule.",
    services: ["refurbishment"],
  },
  {
    slug: "red-distillery-ahu-refurbishment",
    sector: "Industrial / Food & Drink",
    location: "UK",
    image: "/red-english-group-distillery-case-study.webp",
    headline: "AHU Refurbishment, Active Production Facility",
    relevantIf: [
      "Your environment has specific temperature or humidity requirements tied to production",
      "Shutdown windows need to be planned around a production schedule",
      "The facility remains operational during the works",
    ],
    summary:
      "AHU assessed, components replaced, and fully recommissioned at a working distillery. Planned around the production schedule with minimal process downtime.",
    services: ["refurbishment"],
  },
  {
    slug: "newton-mearns-ahu-refurbishment-pipework",
    sector: "Retail / Shopping Centre",
    location: "Glasgow",
    image: "/newton-mearns-case-study.webp",
    headline: "Shopping Centre AHU Refurbishment & Gas Pipework",
    relevantIf: [
      "Your AHU serves a live retail or public environment that cannot close",
      "Belt-driven fans are overdue for upgrading",
      "Gas distribution infrastructure also needs a compliance review",
    ],
    summary:
      "Three weatherproof AHUs refurbished with EC fans and new direct-fired burners. Gas distribution replaced in 316 stainless steel. Shopping centre stayed open throughout.",
    services: ["refurbishment"],
  },
  {
    slug: "gresham-street-office-ahu-refurbishment",
    sector: "Commercial Office",
    location: "London",
    image: "/gresham-street-office-case-study.webp",
    headline: "Full Internal Refurbishment, City Office AHU",
    relevantIf: [
      "Multiple internal components have reached end of life at the same time",
      "Air volume requirements have changed since the original installation",
      "You need a complete strip-out and recommission rather than piecemeal repair",
    ],
    summary:
      "All internal components replaced: frost coil, cooling coil, heating coil, filtration, and fan assembly. Rematched to revised air volumes and recommissioned.",
    services: ["refurbishment", "coil"],
  },
  {
    slug: "marriott-forest-of-arden-pool-ventilation",
    sector: "Hotel / Leisure",
    location: "Forest of Arden",
    image: "/warner-hotel-forest-of-arden-case-study.webp",
    headline: "Pool Hall AHU Troubleshooting & Survey, Marriott",
    relevantIf: [
      "Your pool hall AHU is failing to reach target temperature or humidity",
      "The unit was recently installed or maintained but is still underperforming",
      "You want an independent assessment before committing to replacement",
    ],
    summary:
      "AHU installed three years prior was only reaching 24°C against a 31°C target. Full survey identified ductwork leaks, diffuser inadequacy, and control issues. Rectification programme defined.",
    services: ["refurbishment"],
  },

  // ── EC FAN ───────────────────────────────────────────────────────────────
  {
    slug: "leisure-centre-dorset-ec-fan-upgrade",
    sector: "Leisure / Swimming Pool",
    location: "Dorset",
    image: "/dorset-leisure-centre-case-study.webp",
    headline: "EC Fan Retrofit, Swimming Pool AHU",
    relevantIf: [
      "Belt-driven fans in a pool hall or humid environment have failed or are near failure",
      "Humidity and temperature control has been lost or is unreliable",
      "You want to extend AHU life without a full casing replacement",
    ],
    summary:
      "Two Ziehl-Abegg GR561 EC fans installed within the existing casing after catastrophic belt-drive failure. Humidity and temperature control restored. Belt maintenance eliminated.",
    services: ["ec-fan"],
  },

  // ── MANUFACTURING ────────────────────────────────────────────────────────
  {
    slug: "warner-leisure-hotel-gunton-hall-ahu",
    sector: "Hotel / Leisure",
    location: "Norfolk",
    image: "/warner-hotel-gunton-case-study.webp",
    headline: "Custom AHU Manufactured & Installed, Hotel Pool Hall",
    relevantIf: [
      "Restricted plantroom access prevents a standard unit being delivered whole",
      "End-of-life AHU in a pool hall or glazed, humid environment",
      "You need full scope: design, manufacture, install, and commission under one contract",
    ],
    summary:
      "Made-to-specification AHU for a glazed pool hall. Manufactured flatpack for restricted access, rebuilt on site. Heat recovery, humidity control, and Trend controls included.",
    services: ["manufacturing"],
  },
  {
    slug: "friary-meadow-ahu-replacement",
    sector: "Care / Retirement",
    location: "UK",
    image: "/friary-meadow-case-study.webp",
    headline: "AHU Replacement, Continuously Occupied Retirement Village",
    relevantIf: [
      "The building is continuously occupied and cannot be vacated for works",
      "Resident comfort and air quality must be maintained throughout",
      "A standard catalogue replacement is not available or suitable for the space",
    ],
    summary:
      "Replacement AHU designed to performance spec, supplied, installed, and commissioned at a working retirement village. Planned to avoid disruption to residents throughout.",
    services: ["manufacturing"],
  },

  // ── COIL REPLACEMENT ─────────────────────────────────────────────────────
  {
    slug: "burlington-street-office-coil-replacement",
    sector: "Commercial Office",
    location: "London",
    image: "/burlington-street-office-case-study.webp",
    headline: "Frost Coil Replacement, Restricted Plantroom Access",
    relevantIf: [
      "Your frost or heating coil has failed and needs replacing",
      "Restricted access means a standard single-piece coil cannot reach the plant room",
      "You need a solution that avoids structural modifications to the building",
    ],
    summary:
      "Coil manufactured in two sections to navigate a restricted plantroom. Sections connected in situ. Full performance maintained. No structural works required.",
    services: ["coil"],
  },
  {
    slug: "pharmaceutical-lab-coil-replacement",
    sector: "Pharmaceutical / Industrial",
    location: "UK",
    image: "/pharmaceutical-lab-case-study.webp",
    headline: "AHU Coil Replacement, Pharmaceutical Production",
    relevantIf: [
      "Your process environment has strict temperature and humidity tolerances",
      "Coil replacement must match original performance exactly",
      "Works need to be planned around production with minimum downtime",
    ],
    summary:
      "Coil measured on site, manufactured to exact specification, and installed around the production schedule. Performance verified before handover.",
    services: ["coil"],
  },
  {
    slug: "car-dealership-farnborough-coil-replacement",
    sector: "Automotive / Commercial",
    location: "Farnborough",
    image: "/car-dealership-case-study.webp",
    headline: "Heating Coil & Pipework Replacement, Commercial Premises",
    relevantIf: [
      "Your heating coil has failed or is consistently underperforming",
      "Associated pipework also needs replacing at the same time",
      "Works need to be completed to current installation standards",
    ],
    summary:
      "Heating coil and all associated pipework removed and replaced. Insulation fitted throughout. Commissioned and tested to BS 6644:2011.",
    services: ["coil"],
  },

  // ── CONTROLLER UPGRADES ──────────────────────────────────────────────────
  {
    slug: "ringwood-leisure-ahu-controller-upgrade",
    sector: "Leisure",
    location: "Ringwood",
    image: "/ringwood-leisure-center-case-study.webp",
    headline: "Controller Upgrade: £100k AHU Replacement Avoided",
    relevantIf: [
      "You've been advised to replace AHUs that appear structurally sound",
      "Controls are failing but the mechanical structure of the unit is in good condition",
      "You want an independent assessment before committing to capital expenditure",
    ],
    summary:
      "External consultants recommended full replacement at over £100k. Root cause was failing controls. Two Trend controllers installed. Both units now fully operational at a fraction of the cost.",
    services: ["controller"],
  },
  {
    slug: "procook-westfield-ahu-controller-upgrade",
    sector: "Retail",
    location: "Westfield, London",
    image: "/procook-westfield-case-study.webp",
    headline: "AHU Controller Upgrade, Westfield Retail Store",
    relevantIf: [
      "AHU controls are obsolete or have failed and the system has stopped working",
      "You need automated scheduling aligned to your trading or operating hours",
      "Temperature control across the occupied space is unreliable",
    ],
    summary:
      "Failed fan motor and obsolete controls replaced with a Trend BMS controller and new temperature sensor. Automated scheduling, accurate climate control, and manual override restored.",
    services: ["controller"],
  },
];
