import { ServiceSubPage } from "@/components/pages/ServiceSubPage";

export const metadata = {
  title: "Commercial Boiler & Heating",
  description:
    "Commercial boiler installation, servicing, and repair from BVS. Gas Safe registered engineers covering businesses across the UK.",
};

export default function CommercialBoilerHeatingPage() {
  return (
    <ServiceSubPage
      tagline="Mechanical Solutions"
      title="Commercial Boiler & Heating"
      intro="Keeping your building warm and your energy bills in check starts with a well-maintained commercial heating system. Our Gas Safe registered engineers install, service, and repair commercial boilers and heating plant across the UK."
      featuresTitle="Heating services"
      features={[
        {
          title: "Commercial Boiler Installation",
          body: "Supply and installation of commercial condensing boilers, cascade systems, and associated plant for new builds and refurbishments.",
        },
        {
          title: "Boiler Servicing & Maintenance",
          body: "Scheduled servicing contracts to keep boilers operating at peak efficiency, reduce breakdowns, and maintain Gas Safe compliance.",
        },
        {
          title: "Emergency Boiler Repair",
          body: "Fast response to boiler breakdowns to minimise disruption, with engineers carrying common spare parts for first-visit fixes.",
        },
        {
          title: "Heating System Design",
          body: "Heat loss calculations and system design for new installations, ensuring correctly sized plant for your building's requirements.",
        },
        {
          title: "Energy Efficiency Upgrades",
          body: "Replacement of ageing inefficient boilers with modern high-efficiency plant, with ROI analysis and energy cost savings projections.",
        },
        {
          title: "Gas Safe Certification",
          body: "All gas works are carried out by Gas Safe registered engineers with full certification, landlord gas safety records, and compliance documentation.",
        },
      ]}
      relatedLinks={[
        { href: "/solutions/mechanical/mechanical-electrical", label: "Mechanical & Electrical Solutions" },
        { href: "/solutions/mechanical/industrial-pipework", label: "Industrial Pipework" },
        { href: "/solutions/ventilation/validation-surveys", label: "Ventilation Surveys" },
        { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/contact", label: "Contact Us" },
      ]}
    />
  );
}
