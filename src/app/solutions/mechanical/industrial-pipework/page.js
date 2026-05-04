import { ServiceSubPage } from "@/components/pages/ServiceSubPage";

export const metadata = {
  title: "Industrial Pipework",
  description:
    "Commercial and industrial pipework installation, maintenance, and repair from BVS. Supporting HVAC, heating, and process pipework across the UK.",
};

export default function IndustrialPipeworkPage() {
  return (
    <ServiceSubPage
      tagline="Mechanical Solutions"
      title="Industrial Pipework"
      intro="Reliable pipework is the backbone of any heating, cooling, or ventilation system. Our engineers install, maintain, and repair commercial and industrial pipework systems to the highest standards - with minimal disruption to your operations."
      featuresTitle="Pipework services"
      features={[
        {
          title: "HVAC Pipework",
          body: "Design and installation of chilled water, hot water, and refrigerant pipework systems to serve air handling units and FCUs across commercial buildings.",
        },
        {
          title: "Heating Systems",
          body: "Primary and secondary heating circuit installation including LTHW, MTHW, and HTW pipework for commercial heating plant.",
        },
        {
          title: "Pipework Modification & Extension",
          body: "Extension, modification, or reconfiguration of existing pipework to accommodate building changes, new plant, or system upgrades.",
        },
        {
          title: "Pressure Testing & Commissioning",
          body: "All systems are hydraulically pressure-tested and flushed before commissioning, with full documentation provided.",
        },
        {
          title: "Insulation & Lagging",
          body: "Thermal insulation and vapour barriers applied to all pipework to maintain system efficiency and comply with Part L regulations.",
        },
        {
          title: "Leak Detection & Repair",
          body: "Rapid identification and repair of leaks in existing systems, minimising water damage and downtime for your business.",
        },
      ]}
      relatedLinks={[
        { href: "/solutions/mechanical/mechanical-electrical", label: "Mechanical & Electrical Solutions" },
        { href: "/solutions/mechanical/commercial-boiler-heating", label: "Commercial Boiler & Heating" },
        { href: "/air-handling-unit-installation", label: "AHU Installation" },
        { href: "/solutions/ahu", label: "AHU Solutions" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/contact", label: "Contact Us" },
      ]}
    />
  );
}
