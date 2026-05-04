import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const ahuLinks = [
  { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
  { href: "/air-handling-unit-manufacturing", label: "AHU Manufacturing" },
  { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
  { href: "/air-handling-unit-installation", label: "Installation" },
  { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
  { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Solutions" },
];

const serviceLinks = [
  { href: "/solutions/ventilation/troubleshooting", label: "Ventilation Troubleshooting" },
  { href: "/solutions/ventilation/validation-surveys", label: "Validation & Surveys" },
  { href: "/solutions/mechanical/mechanical-electrical", label: "Mechanical & Electrical" },
  { href: "/solutions/mechanical/industrial-pipework", label: "Industrial Pipework" },
  { href: "/solutions/mechanical/commercial-boiler-heating", label: "Boiler & Heating" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blogs", label: "Blog" },
  { href: "/resources", label: "HVAC Resources" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer>
      {/* Top border + main footer - clearly distinct from slate-900 page sections */}
      <div className="border-t-[3px] border-emerald-600 bg-zinc-950">
        <Container className="py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">

            {/* Brand */}
            <div className="flex flex-col gap-5">
              <Link href="/" className="inline-block w-fit transition-opacity hover:opacity-80">
                <Image
                  src="/BVS-logo.webp"
                  alt="BVS Building Ventilation Solutions"
                  width={120}
                  height={65}
                  className="h-9 w-auto"
                />
              </Link>

              <p className="text-sm leading-6 text-zinc-400">
                40+ years of AHU expertise - refurbishment, manufacturing, installation,
                and controls. Nationwide.
              </p>

              <div className="flex flex-col gap-1.5 text-sm">
                <a href="tel:01256518170" className="text-zinc-300 hover:text-white">
                  01256 518170
                </a>
                <a href="mailto:info@bvs-ltd.co.uk" className="text-zinc-300 hover:text-white">
                  info@bvs-ltd.co.uk
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-8 w-8 items-center justify-center border border-zinc-700 text-[11px] font-bold text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white"
                >
                  in
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-8 w-8 items-center justify-center border border-zinc-700 text-[11px] font-bold text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white"
                >
                  f
                </a>
              </div>
            </div>

            {/* AHU Solutions */}
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                AHU Solutions
              </p>
              <ul className="flex flex-col gap-2">
                {ahuLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                Other Services
              </p>
              <ul className="flex flex-col gap-2">
                {serviceLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company + Newsletter */}
            <div className="flex flex-col gap-7">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                  Company
                </p>
                <ul className="flex flex-col gap-2">
                  {companyLinks.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-zinc-800 pt-6">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                  Newsletter
                </p>
                <p className="mb-3 text-xs text-zinc-500">HVAC insights. No spam.</p>
                <NewsletterForm source="footer" compact />
              </div>
            </div>

          </div>
        </Container>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800">
          <Container className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              {[
                { src: "/Gas_Safe_Register_logo.png", alt: "Gas Safe Registered" },
                { src: "/constructionline-gold-logo.png", alt: "Constructionline Gold" },
                { src: "/safeContractor-approved.png", alt: "SafeContractor Approved" },
              ].map((logo) => (
                <div key={logo.alt} className="flex items-center justify-center rounded bg-white px-2.5 py-1.5" title={logo.alt}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    height={28}
                    width={90}
                    unoptimized
                    className="h-7 w-auto object-contain"
                    style={{ height: "28px", width: "auto", maxWidth: "72px" }}
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} Building Ventilation Solutions Ltd.
            </p>
          </Container>
        </div>
      </div>
    </footer>
  );
}
