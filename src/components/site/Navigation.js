"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "./Container";

/* ── NAV DATA ───────────────────────────────────────────────────────── */

const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/solutions",
    label: "Services",
    columns: [
      {
        heading: "AHU Services",
        href: "/solutions/ahu",
        items: [
          {
            href: "/ec-fan-upgrades-and-retrofits-for-hvac/",
            label: "EC Fan Upgrades",
            description: "Cut fan energy consumption & Retrofit into existing casings.",
            icon: FanIcon,
          },
          {
            href: "/air-handling-unit-coil-replacement/",
            label: "Coil Replacement",
            description: "Restore AHU efficiency without full replacement.",
            icon: WrenchIcon,
          },
          {
            href: "/air-handling-unit-refurbishment/",
            label: "AHU Refurbishment",
            description: "Extend asset life by 10–15 years. Condition reports with costed solutions.",
            icon: RotateIcon,
          },
          {
            href: "/air-handling-unit-manufactoring-and-installation/",
            label: "AHU Manufacturing & Installation",
            description: "Custom-built AHUs and end-to-end installation, from survey to commissioning.",
            icon: FactoryIcon,
          },
          {
            href: "/air-handling-unit-controller-solutions-upgrades",
            label: "Controller Solutions & Upgrades",
            description: "Modernise obsolete AHU controls for energy efficiency and BMS integration.",
            icon: CpuIcon,
          },
        ],
      },
      {
        heading: "Other Services",
        href: "/solutions",
        groups: [
          {
            heading: "Ventilation Solutions",
            href: "/solutions/ventilation",
            items: [
              {
                href: "/solutions/ventilation/validation-surveys",
                label: "Validation Surveys",
                description: "Comprehensive AHU surveys with prioritised recommendations.",
                icon: ClipboardIcon,
              },
              {
                href: "/solutions/ventilation/troubleshooting",
                label: "Troubleshooting",
                description: "Diagnose and resolve ventilation performance and compliance issues.",
                icon: SearchIcon,
              },
              {
                href: "/solutions/ventilation/ducting-repair-replacement",
                label: "Ducting Repairs & Replacements",
                description: "Repair, reline, or replace failed ductwork with minimal disruption.",
                icon: PipeIcon,
              },
            ],
          },
          {
            heading: "Commercial Boiler & Pipework",
            href: "/solutions/mechanical",
            items: [
              {
                href: "/solutions/mechanical/industrial-pipework",
                label: "Commercial Pipework",
                description: "Installation, maintenance, and repair of commercial pipework systems.",
                icon: ToolsIcon,
              },
              {
                href: "/solutions/mechanical/commercial-boiler-heating",
                label: "Commercial Boiler Services",
                description: "Gas Safe registered boiler installation, servicing, and repair.",
                icon: FlameIcon,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    href: "/industries",
    label: "Industries",
    children: [
      {
        href: "/industries/hospital",
        label: "Hospital & Healthcare",
        description: "Critical environment ventilation for NHS and private healthcare.",
        icon: HealthIcon,
      },
      {
        href: "/industries/education",
        label: "Education",
        description: "Ventilation and AHU services for schools, colleges, and universities.",
        icon: EducationIcon,
      },
      {
        href: "/industries/hotel",
        label: "Hotels",
        description: "Maintaining guest comfort and air quality across hotel sites.",
        icon: HotelIcon,
      },
      {
        href: "/industries/defence",
        label: "Defence",
        description: "Secure, compliant ventilation for defence and government facilities.",
        icon: ShieldIcon,
      },
      {
        href: "/industries/leisure-centre",
        label: "Leisure Centres",
        description: "High-humidity AHU and ventilation management for leisure facilities.",
        icon: LeisureIcon,
      },
      {
        href: "/industries/retail",
        label: "Retail",
        description: "Commercial HVAC for retail parks, supermarkets, and shopping centres.",
        icon: RetailIcon,
      },
    ],
  },
  { href: "/shop", label: "Shop" },
  {
    href: "/about",
    label: "About",
    children: [
      {
        href: "/about",
        label: "About BVS",
        description: "40+ years of AHU expertise. Who we are and how we work.",
        icon: IdCardIcon,
      },
      {
        href: "/case-studies",
        label: "Case Studies",
        description: "A look into our portfolio of past projects and challenges tackled.",
        icon: ClipboardIcon,
      },
      {
        href: "/blogs",
        label: "Blog",
        description: "HVAC insights, guides, and industry news from our engineers.",
        icon: NewspaperIcon,
      },
      {
        href: "/resources",
        label: "HVAC Resources",
        description: "Practical knowledge and technical guidance for facilities teams.",
        icon: BookIcon,
      },
      {
        href: "/careers",
        label: "Careers",
        description: "Join the BVS team. Roles across engineering and operations.",
        icon: BriefcaseIcon,
      },
    ],
  },
];

/* ── COMPONENT ──────────────────────────────────────────────────────── */

export function Navigation() {
  const [activeKey, setActiveKey] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileExpanded, setMobileExpanded] = React.useState(null);
  const closeTimerRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = `sticky top-0 z-50 bg-white transition-shadow duration-300 ${
    scrolled ? "shadow-[0_1px_24px_rgba(0,0,0,0.08)]" : "border-b border-slate-100"
  }`;

  const linkClass =
    "text-[13px] font-semibold uppercase tracking-wide text-slate-700 hover:text-emerald-700 transition-colors";

  function scheduleClose() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setActiveKey(null), 80);
  }

  function cancelClose() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  }

  function closeDropdown() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveKey(null);
  }

  return (
    <header className={`relative ${headerClass}`}>
      <Container className="flex h-16 items-center gap-6">
        {/* Logo */}
        <Link
  href="/"
  className="flex items-center gap-4 shrink-0 transition-opacity hover:opacity-80"
>
  <Image
    src="/bvs-logo.webp"
    alt="BVS Building Ventilation Solutions"
    width={148}
    height={80}
    className="h-10 w-auto"
    priority
  />

  {/* Divider */}
  <div className="hidden sm:block h-8 w-px bg-slate-200" />

  {/* Stacked text */}
  <span className="hidden sm:flex flex-col text-[10px] leading-[1.1] uppercase tracking-[0.15em] text-slate-600">
    <span>Building</span>
    <span>Ventilation</span>
    <span>Solutions</span>
  </span>
</Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-end gap-6 whitespace-nowrap lg:flex">
          {navItems.map((item) =>
            item.columns ? (
              <MegaDropdown
                key={item.href}
                item={item}
                linkClass={linkClass}
                isActive={activeKey === item.href}
                onOpen={() => { cancelClose(); setActiveKey(item.href); }}
                onClose={scheduleClose}
                onKeepOpen={cancelClose}
                onItemClick={closeDropdown}
              />
            ) : item.children?.length ? (
              <NavDropdown
                key={item.href}
                item={item}
                linkClass={linkClass}
                isActive={activeKey === item.href}
                onOpen={() => { cancelClose(); setActiveKey(item.href); }}
                onClose={scheduleClose}
                onKeepOpen={cancelClose}
                onItemClick={closeDropdown}
              />
            ) : (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:01256518170"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#297858] transition-colors whitespace-nowrap"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.42 2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l1.39-1.39a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" /></svg>
            01256 518170
          </a>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center bg-[#297858] px-5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#1d5c42] whitespace-nowrap"
          >
            Enquire
          </Link>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex flex-1 items-center justify-end gap-2 lg:hidden">
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center bg-emerald-700 px-4 text-xs font-bold uppercase tracking-wide text-white"
          >
            Enquire
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-600"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full z-50 max-h-[80vh] overflow-y-auto border-t border-slate-100 bg-white shadow-xl lg:hidden">
          <div className="divide-y divide-slate-100">
            {navItems.map((item) => {
              const allChildren = item.columns
                ? item.columns.flatMap((col) =>
                    col.items
                      ? col.items
                      : (col.groups ?? []).flatMap((g) => g.items)
                  )
                : item.children ?? [];

              return allChildren.length ? (
                <div key={item.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-6 py-4 text-left text-[13px] font-semibold uppercase tracking-wide text-slate-700"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.href ? null : item.href)
                    }
                  >
                    {item.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`text-slate-400 transition-transform ${mobileExpanded === item.href ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path d="M5.5 7.5a1 1 0 0 1 1.4 0L10 10.6l3.1-3.1a1 1 0 1 1 1.4 1.4l-3.8 3.8a1 1 0 0 1-1.4 0L5.5 8.9a1 1 0 0 1 0-1.4Z" />
                    </svg>
                  </button>
                  {mobileExpanded === item.href && (
                    <div className="bg-slate-50 px-6 pb-4">
                      {item.columns && (
                        <>
                          {item.columns.map((col) => (
                            <div key={col.heading}>
                              {col.items && (
                                <>
                                  <p className="mt-4 mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    {col.heading}
                                  </p>
                                  {col.items.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className="flex items-start gap-3 border-b border-slate-100 py-3 last:border-0"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      <span className="mt-0.5 shrink-0 text-emerald-700">{child.icon()}</span>
                                      <span>
                                        <span className="block text-[13px] font-semibold text-slate-900">{child.label}</span>
                                        <span className="mt-0.5 block text-xs text-slate-500">{child.description}</span>
                                      </span>
                                    </Link>
                                  ))}
                                </>
                              )}
                              {col.groups && col.groups.map((group) => (
                                <div key={group.heading}>
                                  <p className="mt-4 mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    {group.heading}
                                  </p>
                                  {group.items.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className="flex items-start gap-3 border-b border-slate-100 py-3 last:border-0"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      <span className="mt-0.5 shrink-0 text-emerald-700">{child.icon()}</span>
                                      <span>
                                        <span className="block text-[13px] font-semibold text-slate-900">{child.label}</span>
                                        <span className="mt-0.5 block text-xs text-slate-500">{child.description}</span>
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          ))}
                        </>
                      )}
                      {!item.columns &&
                        allChildren.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-start gap-3 border-b border-slate-100 py-3 last:border-0"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="mt-0.5 shrink-0 text-emerald-700">{child.icon()}</span>
                            <span>
                              <span className="block text-[13px] font-semibold text-slate-900">{child.label}</span>
                              <span className="mt-0.5 block text-xs text-slate-500">{child.description}</span>
                            </span>
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-4 text-[13px] font-semibold uppercase tracking-wide text-slate-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="p-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="flex h-11 w-full items-center justify-center bg-emerald-700 text-sm font-bold uppercase tracking-wide text-white"
                onClick={() => setMobileOpen(false)}
              >
                Enquire
              </Link>
              <a
                href="tel:01256518170"
                className="flex h-11 w-full items-center justify-center gap-2 border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                onClick={() => setMobileOpen(false)}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.42 2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l1.39-1.39a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" /></svg>
                01256 518170
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ── MEGA DROPDOWN (Services - two columns) ─────────────────────────── */

function MegaDropdown({ item, linkClass, isActive, onOpen, onClose, onKeepOpen, onItemClick }) {
  return (
    <div className="static" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        className={`inline-flex items-center gap-1 whitespace-nowrap ${linkClass}`}
        aria-haspopup="menu"
        aria-expanded={isActive ? "true" : "false"}
        onFocus={onOpen}
        onBlur={onClose}
      >
        {item.label}
        <ChevronIcon />
      </button>

      <div
        className={`absolute left-0 right-0 top-full z-50 pt-2 transition duration-150 ${
          isActive ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onMouseEnter={onKeepOpen}
        onMouseLeave={onClose}
      >
        <div className="w-full border-t-2 border-emerald-700 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.14)] ring-1 ring-black/5">
          <Container className="py-6">
            <div className="grid grid-cols-2 divide-x divide-slate-100">
              {item.columns.map((col) => (
                <div key={col.heading} className="first:pr-8 last:pl-8">
                  {/* Single-group column (AHU Services) */}
                  {col.items && (
                    <>
                      <p className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        {col.heading}
                      </p>
                      <div className="flex flex-col">
                        {col.items.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group flex items-start gap-3 border-l-2 border-transparent px-3 py-3 transition-all hover:border-[#297858] hover:bg-slate-50"
                            onClick={onItemClick}
                          >
                            <span className="mt-0.5 shrink-0 text-emerald-700 transition-colors group-hover:text-emerald-600">
                              {child.icon()}
                            </span>
                            <span className="min-w-0">
                              <span className="block text-[13px] font-bold text-slate-900 group-hover:text-emerald-800">
                                {child.label}
                              </span>
                              <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                                {child.description}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                  {/* Multi-group column (Ventilation + Boiler stacked) */}
                  {col.groups && (
                    <div className="flex flex-col gap-6">
                      {col.groups.map((group, gi) => (
                        <div key={group.heading} className={gi > 0 ? "border-t border-slate-100 pt-6" : ""}>
                          <p className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                            {group.heading}
                          </p>
                          <div className="flex flex-col">
                            {group.items.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="group flex items-start gap-3 border-l-2 border-transparent px-3 py-3 transition-all hover:border-[#297858] hover:bg-slate-50"
                                onClick={onItemClick}
                              >
                                <span className="mt-0.5 shrink-0 text-emerald-700 transition-colors group-hover:text-emerald-600">
                                  {child.icon()}
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-[13px] font-bold text-slate-900 group-hover:text-emerald-800">
                                    {child.label}
                                  </span>
                                  <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                                    {child.description}
                                  </span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

/* ── STANDARD DROPDOWN ──────────────────────────────────────────────── */

function NavDropdown({ item, linkClass, isActive, onOpen, onClose, onKeepOpen, onItemClick }) {
  return (
    <div className="static" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        className={`inline-flex items-center gap-1 whitespace-nowrap ${linkClass}`}
        aria-haspopup="menu"
        aria-expanded={isActive ? "true" : "false"}
        onFocus={onOpen}
        onBlur={onClose}
      >
        {item.label}
        <ChevronIcon />
      </button>

      <div
        className={`absolute left-0 right-0 top-full z-50 pt-2 transition duration-150 ${
          isActive ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onMouseEnter={onKeepOpen}
        onMouseLeave={onClose}
      >
        <div className="w-full border-t-2 border-emerald-700 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.14)] ring-1 ring-black/5">
          <Container className="py-4">
            <div className={`grid md:gap-x-8 md:gap-y-1 ${item.children.length > 4 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="group flex w-full min-w-0 items-start gap-3 overflow-hidden border-l-2 border-transparent px-4 py-4 transition-all hover:border-[#297858] hover:bg-slate-50 md:px-5"
                  onClick={onItemClick}
                >
                  <span className="mt-0.5 shrink-0 text-emerald-700 transition-colors group-hover:text-emerald-600">
                    {child.icon()}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-bold text-slate-900 group-hover:text-emerald-800">
                      {child.label}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-500 [text-wrap:pretty]">
                      {child.description}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

/* ── Icons ─────────────────────────────────────────────────────────── */

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" className="text-slate-400 relative -top-px" aria-hidden="true">
      <path d="M5.5 7.5a1 1 0 0 1 1.4 0L10 10.6l3.1-3.1a1 1 0 1 1 1.4 1.4l-3.8 3.8a1 1 0 0 1-1.4 0L5.5 8.9a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}
function CpuIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth="2" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}
function RotateIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 1 1-2.64-6.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M21 3v6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function WrenchIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a4 4 0 0 0-5.7 5.7L3 18l3 3 6-6a4 4 0 0 0 5.7-5.7l-3 3-2-2 3-3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function FactoryIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 21V9l6 3V9l6 3V7l6 3v11H3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M7 21v-6M11 21v-4M15 21v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}
function HardHatIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 13a8 8 0 0 1 16 0v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-4Z" stroke="currentColor" strokeWidth="2" /><path d="M12 5v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M7 9v4M17 9v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}
function FanIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /><path d="M12 12c0-4 2-7 5-7 1.7 0 3 1.3 3 3 0 3-3 5-8 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M12 12c-4 0-7-2-7-5 0-1.7 1.3-3 3-3 3 0 5 3 5 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M12 12c0 4-2 7-5 7-1.7 0-3-1.3-3-3 0-3 3-5 8-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M12 12c4 0 7 2 7 5 0 1.7-1.3 3-3 3-3 0-5-3-5-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
}
function ClipboardIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 5h6m-5 0a2 2 0 0 0-2 2v1h8V7a2 2 0 0 0-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M7 8h10v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
}
function SearchIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" /><path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}
function PipeIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 8h10a3 3 0 0 1 3 3v4a3 3 0 0 0 3 3h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M3 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}
function ToolsIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a4 4 0 0 0-5.7 5.7L3 18l3 3 6-6a4 4 0 0 0 5.7-5.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 7h4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function FlameIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2c0 5-5 6-5 11a5 5 0 0 0 10 0c0-5-5-6-5-11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M12 14c0 2-1.5 3-1.5 4.5a1.5 1.5 0 0 0 3 0C13.5 17 12 16 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
}
function IdCardIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M8 10h5M8 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M16 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="currentColor" /></svg>;
}
function NewspaperIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 4h12v16H6V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M8 8h8M8 12h8M8 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M6 20H4a2 2 0 0 1-2-2V8h4v12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
}
function BookIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 0-2 2V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M18 21V3" stroke="currentColor" strokeWidth="2" /></svg>;
}
function BriefcaseIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M4 7h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M4 12h16" stroke="currentColor" strokeWidth="2" /></svg>;
}
function EducationIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3 2 9l10 6 10-6-10-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M6 12v5c2 2 8 2 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M22 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}
function ShieldIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3 4 7v6c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
}
function HotelIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M2 20V6h20v14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M2 10h20" stroke="currentColor" strokeWidth="2" /><path d="M6 20v-4h4v4M14 20v-4h4v4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
}
function LeisureIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 17c0-3 2-5 4-6.5S12 8 12 8s2 .5 5 2.5S21 14 21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M2 20h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M12 8V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}
function HealthIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 4h6v4h4v6h-4v4H9v-4H5V8h4V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
}
function RetailIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 4h18l-2 8H5L3 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
}
function MenuIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M3 12h18M3 6h18M3 18h18" /></svg>;
}
function XIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>;
}
