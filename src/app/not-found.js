import Link from "next/link";
import { Container } from "@/components/site/Container";

export const metadata = {
  title: "Page Not Found | BVS Building Ventilation Solutions",
};

const links = [
  { href: "/", label: "Homepage" },
  { href: "/solutions/ahu", label: "AHU Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5f3ef]">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/5 bg-[#111418] py-20 sm:py-28">

        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#297858]/20 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[-120px] h-[280px] w-[280px] rounded-full bg-[#297858]/10 blur-3xl" />
        </div>

        <Container className="relative">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* LEFT */}
            <div>

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Error 404
              </p>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.02] text-white sm:text-6xl">
                The page you&apos;re looking for isn&apos;t available
              </h1>

              <div className="mt-5 h-[3px] w-14 bg-[#297858]" />

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/65">
                The page may have moved, the address may be incorrect, or the content may no longer exist.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
                >
                  Return to homepage
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Contact BVS
                </Link>
              </div>

            </div>

            {/* RIGHT */}
            <div className="border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                Popular pages
              </p>

              <div className="mt-5 divide-y divide-white/10 border-y border-white/10">

                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between py-4 transition-colors hover:text-white"
                  >
                    <span className="text-sm font-semibold text-white/75 transition-colors group-hover:text-white">
                      {link.label}
                    </span>

                    <span className="text-[#297858] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}

              </div>

              <div className="mt-6 border-l-2 border-[#297858] pl-4">
                <p className="text-xs leading-6 text-white/45">
                  If you followed a broken link or expected to find specific project information,
                  contact us and we&apos;ll point you in the right direction.
                </p>
              </div>

            </div>

          </div>

        </Container>
      </section>

      {/* LOWER STRIP */}
      <section className="border-t border-black/5 bg-white py-6">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs text-slate-500">
              BVS Building Ventilation Solutions
            </p>

            <div className="flex flex-wrap gap-5 text-xs text-slate-500">
              <a
                href="tel:01256518170"
                className="transition-colors hover:text-slate-900"
              >
                01256 518170
              </a>

              <Link
                href="/contact"
                className="transition-colors hover:text-slate-900"
              >
                Contact us
              </Link>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}