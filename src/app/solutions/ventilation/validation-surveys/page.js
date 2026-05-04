import { ServiceSubPage } from "@/components/pages/ServiceSubPage";

export const metadata = {
  title: "Ventilation Validation & Surveys",
  description:
    "Detailed AHU validation surveys and condition reports from BVS. Know exactly what your ventilation assets need - with costed recommendations included.",
};

export default function ValidationSurveysPage() {
  return (
    <ServiceSubPage
      tagline="Ventilation Services"
      title="Validation & Surveys"
      intro="Air handling units are significant capital assets. Our validation surveys give you a clear, independent picture of system condition - with prioritised, costed recommendations so you can plan maintenance budgets with confidence."
      featuresTitle="What our surveys cover"
      features={[
        {
          title: "Full Condition Assessment",
          body: "Engineers inspect every major component: fans, coils, filters, dampers, controls, and structural integrity of the casing and frame.",
        },
        {
          title: "Airflow Measurement",
          body: "Accurate supply and extract airflow readings compared against design specifications, identifying underperformance or imbalance.",
        },
        {
          title: "Thermal Performance Testing",
          body: "Heating and cooling coil performance checks to ensure your system is delivering the temperatures required by your building.",
        },
        {
          title: "Contamination & Hygiene Check",
          body: "Assessment of internal cleanliness, microbial risk, and compliance with CIBSE and HTM ventilation hygiene guidance.",
        },
        {
          title: "Detailed Written Report",
          body: "A comprehensive condition report with photographic evidence, priority-rated defects, and costed recommendations for remedial works.",
        },
        {
          title: "Ongoing Asset Management",
          body: "We track asset condition over time so you can plan refurbishment cycles and avoid costly emergency breakdowns.",
        },
      ]}
      relatedLinks={[
        { href: "/solutions/ventilation/troubleshooting", label: "Troubleshooting & Solutions" },
        { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
        { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement & Repair" },
        { href: "/solutions/ahu", label: "AHU Solutions Overview" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/contact", label: "Contact Us" },
      ]}
    />
  );
}
