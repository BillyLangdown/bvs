import { ServiceSubPage } from "@/components/pages/ServiceSubPage";

export const metadata = {
  title: "Mechanical & Electrical Solutions",
  description:
    "Commercial mechanical and electrical services from BVS. From HVAC-associated M&E works to full project management on commercial sites.",
};

export default function MechanicalElectricalPage() {
  return (
    <ServiceSubPage
      tagline="Mechanical Solutions"
      title="Mechanical & Electrical Solutions"
      intro="We provide a full range of mechanical and electrical services to support HVAC installations and commercial building projects. From minor associated works to full M&E project delivery, our engineers are equipped to handle the complete scope."
      featuresTitle="Our M&E capabilities"
      features={[
        {
          title: "HVAC-Associated M&E",
          body: "All mechanical and electrical works required to support new or refurbished air handling units, including power supplies, controls wiring, and commissioning.",
        },
        {
          title: "Electrical Installation",
          body: "First-fix and second-fix electrical works for ventilation plant rooms, including distribution boards, containment, and equipment connections.",
        },
        {
          title: "Controls Integration",
          body: "Integration of HVAC controls with building management systems (BMS), ensuring seamless automated operation and energy efficiency.",
        },
        {
          title: "Commissioning & Testing",
          body: "Full system commissioning, witnessed testing, and certification to ensure all mechanical and electrical elements operate to specification.",
        },
        {
          title: "Project Management",
          body: "End-to-end project management for M&E works, coordinating subcontractors, trades, and programme delivery on commercial sites.",
        },
        {
          title: "Health & Safety Compliance",
          body: "All works carried out to current BS, IEE, and CDM regulations with full documentation and sign-off provided.",
        },
      ]}
      relatedLinks={[
        { href: "/solutions/mechanical/industrial-pipework", label: "Industrial Pipework" },
        { href: "/solutions/mechanical/commercial-boiler-heating", label: "Commercial Boiler & Heating" },
        { href: "/air-handling-unit-installation", label: "AHU Installation & Contracting" },
        { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Solutions" },
        { href: "/solutions/ahu", label: "AHU Solutions" },
        { href: "/contact", label: "Contact Us" },
      ]}
    />
  );
}
