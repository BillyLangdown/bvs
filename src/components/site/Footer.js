import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

const ahuLinks = [
  { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
  { href: "/air-handling-unit-manufactoring-and-installation", label: "Manufacturing & Installation" },
  { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
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
    <footer className="relative bg-[#0b0d10]">
      
    
      {/* MAIN FOOTER */}
      <div className="border-t border-white/5 bg-[#0b0d10]">
        <Container className="py-16">

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

            {/* BRAND */}
            <div className="flex flex-col">
              <Link
                href="/"
                className="inline-block w-fit transition-opacity hover:opacity-80"
              >
                <Image
                  src="/bvs-logo.webp"
                  alt="BVS Building Ventilation Solutions"
                  width={120}
                  height={65}
                  className="h-9 w-auto"
                />
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
                AHU refurbishment, manufacturing, installation,
                EC fan upgrades, coil replacement, and controls.
                Supporting commercial and critical environments UK-wide.
              </p>

              <div className="mt-6 flex flex-col gap-2 text-sm">
                <a
                  href="tel:01256518170"
                  className="text-zinc-300 transition-colors hover:text-white"
                >
                  01256 518170
                </a>

                <a
                  href="mailto:info@bvs-ltd.co.uk"
                  className="text-zinc-300 transition-colors hover:text-white"
                >
                  info@bvs-ltd.co.uk
                </a>

                <address className="not-italic text-zinc-500 leading-6">
                  Unit 23, Sandleheath Industrial Estate<br />
                  Old Brickyard Road, Sandleheath<br />
                  Fordingbridge, SP6 1PA
                </address>
              </div>

              {/* SOCIALS */}
              <div className="mt-6 flex items-center gap-2">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center border border-white/10 text-sm font-semibold text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
                >
                  in
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center border border-white/10 text-sm font-semibold text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
                >
                  f
                </a>
              </div>
            </div>

            {/* LINKS */}
            {[
              { title: "AHU Solutions", links: ahuLinks },
              { title: "Other Services", links: serviceLinks },
              { title: "Company", links: companyLinks },
            ].map((group) => (
              <div key={group.title}>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                  {group.title}
                </p>

                <ul className="flex flex-col gap-3">
                  {group.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </Container>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5">
          <Container className="flex flex-col gap-3 py-5 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} Building Ventilation Solutions Ltd.
            </p>

            <div className="flex gap-5">
              <Link href="/privacy-policy" className="hover:text-zinc-400">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-zinc-400">
                Terms
              </Link>
            </div>

          </Container>
        </div>
      </div>
    </footer>
  );
}