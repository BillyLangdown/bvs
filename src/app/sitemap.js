const BASE = "https://www.bvs-ltd.co.uk";

export default function sitemap() {
  const routes = [
    // Homepage
    { url: BASE, priority: 1.0, changeFrequency: "weekly" },

    // Core service pages
    { url: `${BASE}/air-handling-unit-refurbishment`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/air-handling-unit-coil-replacement`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/air-handling-unit-manufacturing-and-installation`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/air-handling-unit-maintenance`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/air-handling-unit-controller-solutions-upgrades`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/ec-fan-upgrades-and-retrofits-for-hvac`, priority: 0.9, changeFrequency: "monthly" },

    // Solutions (new pages without old equivalents)
    { url: `${BASE}/solutions/ahu`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/solutions/ventilation`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/solutions/ventilation/ducting-repair-replacement`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/solutions/mechanical/mechanical-electrical`, priority: 0.8, changeFrequency: "monthly" },

    // Established service pages (old URLs preserved)
    { url: `${BASE}/air-handling-unit-troubleshooting`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/ahu-validation-ventilation-surveys`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/mechanical-solutions`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/commercial-boiler-and-heating-services`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/industrial-pipework-services`, priority: 0.8, changeFrequency: "monthly" },

    // Industries (old URLs preserved)
    { url: `${BASE}/hospital-ventilation`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/hotel-leisure-ventilation`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/industries/defence`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/education-ventilation`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/sport-facility-ventilation`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/retail-ventilation`, priority: 0.8, changeFrequency: "monthly" },

    // Case studies
    { url: `${BASE}/case-studies`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/case-studies/bath-private-hospital-ahu-refurbishment`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/burlington-street-office-coil-replacement`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/car-dealership-farnborough-coil-replacement`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/concorde-simulator-ventilation`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/disney-headquarters-ventilation-survey`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/friary-meadow-ahu-replacement`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/gresham-street-office-ahu-refurbishment`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/kingly-street-extract-fan-duct`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/leisure-centre-dorset-ec-fan-upgrade`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/marriott-forest-of-arden-pool-ventilation`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/newton-mearns-ahu-refurbishment-pipework`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/nhs-hammersmith-ahu-refurbishment`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/pembroke-offices-ahu-refurbishment`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/pharmaceutical-lab-coil-replacement`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/procook-westfield-ahu-controller-upgrade`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/red-distillery-ahu-refurbishment`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/ringwood-leisure-ahu-controller-upgrade`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/toca-football-o2-ahu-refurbishment`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/warner-leisure-hotel-gunton-hall-ahu`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/case-studies/blackfriars-office-bloom-development-ahu-manufacturing`, priority: 0.7, changeFrequency: "yearly" },

    // Supporting pages
    { url: `${BASE}/about-us`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE}/contact`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/get-a-quote`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/careers`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE}/our-blogs`, priority: 0.6, changeFrequency: "weekly" },
    { url: `${BASE}/hvac-resources`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE}/shop`, priority: 0.6, changeFrequency: "weekly" },
  ];

  return routes.map((r) => ({
    url: r.url,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
