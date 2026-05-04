import { ServiceSubPage } from "@/components/pages/ServiceSubPage";

export const metadata = {
  title: "Ventilation Troubleshooting & Solutions",
  description:
    "Expert diagnosis and resolution of ventilation system issues. BVS identify root causes quickly and restore full system performance.",
};

export default function TroubleshootingPage() {
  return (
    <ServiceSubPage
      tagline="Ventilation Services"
      title="Troubleshooting & Solutions"
      intro="Ventilation problems can disrupt building comfort, air quality, and energy costs. Our engineers get to the root cause quickly - diagnosing faults, proposing practical fixes, and restoring performance without unnecessary disruption."
      featuresTitle="How we help"
      features={[
        {
          title: "System Diagnosis",
          body: "Comprehensive on-site assessment to identify the source of poor performance, unusual noise, temperature imbalance, or airflow problems.",
        },
        {
          title: "Airflow Balancing",
          body: "Rebalancing supply and extract volumes across zones so every area of your building receives the fresh air it needs.",
        },
        {
          title: "Filter & Component Checks",
          body: "Inspection and replacement of blocked filters, worn belts, failing motors, and other components that degrade system output.",
        },
        {
          title: "Controls & Sensors",
          body: "Testing and recalibration of thermostats, damper actuators, and control panels to ensure accurate, efficient operation.",
        },
        {
          title: "Ductwork Inspection",
          body: "Identifying leaks, blockages, or deterioration in ductwork that reduce efficiency and allow contamination to enter the airstream.",
        },
        {
          title: "Written Report & Recommendations",
          body: "A clear, costed report outlining what was found, what was fixed on the day, and any further remedial works recommended.",
        },
      ]}
      relatedLinks={[
        { href: "/solutions/ventilation/validation-surveys", label: "Validation & Surveys" },
        { href: "/solutions/ahu", label: "AHU Solutions" },
        { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
        { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
        { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Solutions" },
        { href: "/contact", label: "Contact Us" },
      ]}
    />
  );
}
