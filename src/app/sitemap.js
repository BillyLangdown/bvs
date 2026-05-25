const BASE = "https://www.bvs-ltd.co.uk";

export default function sitemap() {
  const routes = [
    // Homepage
    { url: BASE, priority: 1.0, changeFrequency: "weekly" },

    // Core service pages
    { url: `${BASE}/air-handling-unit-refurbishment`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/air-handling-unit-coil-replacement`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/air-handling-unit-manufactoring-and-installation`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/air-handling-unit-controller-solutions-upgrades`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/ec-fan-upgrades-and-retrofits-for-hvac`, priority: 0.9, changeFrequency: "monthly" },

    // Solutions
    { url: `${BASE}/solutions/ahu`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/solutions/ventilation`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/solutions/ventilation/ducting-repair-replacement`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/solutions/ventilation/troubleshooting`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/solutions/ventilation/validation-surveys`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/solutions/mechanical`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/solutions/mechanical/commercial-boiler-heating`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/solutions/mechanical/industrial-pipework`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/solutions/mechanical/mechanical-electrical`, priority: 0.8, changeFrequency: "monthly" },

    // Industries
    { url: `${BASE}/industries`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/industries/hospital`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/industries/hotel`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/industries/defence`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/industries/education`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/industries/leisure-centre`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/industries/retail`, priority: 0.8, changeFrequency: "monthly" },

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

    // Supporting pages
    { url: `${BASE}/about`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE}/contact`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/get-a-quote`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/careers`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE}/blogs`, priority: 0.6, changeFrequency: "weekly" },
    { url: `${BASE}/resources`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE}/shop`, priority: 0.6, changeFrequency: "weekly" },
    { url: `${BASE}/products`, priority: 0.6, changeFrequency: "weekly" },
  ];

  return routes.map((r) => ({
    url: r.url,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
