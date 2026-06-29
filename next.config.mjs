/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*.webp",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*.avif",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [
      // ── WordPress date-based blog URLs → new React blog URLs ─────────
      { source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug", destination: "/our-blogs/:slug", permanent: true },
      { source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug/", destination: "/our-blogs/:slug", permanent: true },

      // ── Manufacturing / installation (typo fix + merge) ──────────────
      { source: "/air-handling-unit-manufacturing",                            destination: "/air-handling-unit-manufacturing-and-installation", permanent: true },
      { source: "/air-handling-unit-manufacturing/",                           destination: "/air-handling-unit-manufacturing-and-installation", permanent: true },
      { source: "/air-handling-unit-installation",                             destination: "/air-handling-unit-manufacturing-and-installation", permanent: true },
      { source: "/air-handling-unit-installation/",                            destination: "/air-handling-unit-manufacturing-and-installation", permanent: true },
      { source: "/air-handling-unit-manufactoring-and-installation",           destination: "/air-handling-unit-manufacturing-and-installation", permanent: true },
      { source: "/air-handling-unit-manufactoring-and-installation/",          destination: "/air-handling-unit-manufacturing-and-installation", permanent: true },

      // ── Old nested paths → canonical root-level URLs ─────────────────
      { source: "/solutions/ventilation/troubleshooting",    destination: "/air-handling-unit-troubleshooting",        permanent: true },
      { source: "/solutions/ventilation/troubleshooting/",   destination: "/air-handling-unit-troubleshooting",        permanent: true },
      { source: "/solutions/ventilation/validation-surveys", destination: "/ahu-validation-ventilation-surveys",       permanent: true },
      { source: "/solutions/ventilation/validation-surveys/",destination: "/ahu-validation-ventilation-surveys",       permanent: true },
      { source: "/solutions/mechanical",                     destination: "/mechanical-solutions",                     permanent: true },
      { source: "/solutions/mechanical/",                    destination: "/mechanical-solutions",                     permanent: true },
      { source: "/solutions/mechanical/commercial-boiler-heating",   destination: "/commercial-boiler-and-heating-services", permanent: true },
      { source: "/solutions/mechanical/commercial-boiler-heating/",  destination: "/commercial-boiler-and-heating-services", permanent: true },
      { source: "/solutions/mechanical/industrial-pipework",   destination: "/industrial-pipework-services",           permanent: true },
      { source: "/solutions/mechanical/industrial-pipework/",  destination: "/industrial-pipework-services",           permanent: true },
      { source: "/industries/hospital",                      destination: "/hospital-ventilation",                    permanent: true },
      { source: "/industries/hospital/",                     destination: "/hospital-ventilation",                    permanent: true },
      { source: "/industries/education",                     destination: "/education-ventilation",                   permanent: true },
      { source: "/industries/education/",                    destination: "/education-ventilation",                   permanent: true },
      { source: "/industries/hotel",                         destination: "/hotel-leisure-ventilation",               permanent: true },
      { source: "/industries/hotel/",                        destination: "/hotel-leisure-ventilation",               permanent: true },
      { source: "/industries/leisure-centre",                destination: "/sport-facility-ventilation",              permanent: true },
      { source: "/industries/leisure-centre/",               destination: "/sport-facility-ventilation",              permanent: true },
      { source: "/industries/retail",                        destination: "/retail-ventilation",                      permanent: true },
      { source: "/industries/retail/",                       destination: "/retail-ventilation",                      permanent: true },
      { source: "/about",                                    destination: "/about-us",                                permanent: true },
      { source: "/about/",                                   destination: "/about-us",                                permanent: true },
      { source: "/blogs",                                    destination: "/our-blogs",                               permanent: true },
      { source: "/blogs/",                                   destination: "/our-blogs",                               permanent: true },
      { source: "/blogs/:slug",                              destination: "/our-blogs/:slug",                         permanent: true },
      { source: "/resources",                                destination: "/hvac-resources",                          permanent: true },
      { source: "/resources/",                               destination: "/hvac-resources",                          permanent: true },

      // ── Old sport/gym/leisure pages ─────────────────────────────────
      { source: "/indoor-gym-ventilation",                   destination: "/sport-facility-ventilation",              permanent: true },
      { source: "/indoor-gym-ventilation/",                  destination: "/sport-facility-ventilation",              permanent: true },
      { source: "/gym-ventilation",                          destination: "/sport-facility-ventilation",              permanent: true },
      { source: "/gym-ventilation/",                         destination: "/sport-facility-ventilation",              permanent: true },
      { source: "/sport-facilities-ventilation",             destination: "/sport-facility-ventilation",              permanent: true },
      { source: "/sport-facilities-ventilation/",            destination: "/sport-facility-ventilation",              permanent: true },

      // ── Old boiler/kitchen pages ─────────────────────────────────────
      { source: "/boiler-installation-commissioning",        destination: "/commercial-boiler-and-heating-services",  permanent: true },
      { source: "/boiler-installation-commissioning/",       destination: "/commercial-boiler-and-heating-services",  permanent: true },
      { source: "/commercial-kitchen-ventilation",           destination: "/hotel-leisure-ventilation",               permanent: true },
      { source: "/commercial-kitchen-ventilation/",          destination: "/hotel-leisure-ventilation",               permanent: true },

      // ── Old event/venue page ─────────────────────────────────────────
      { source: "/event-venue-ventilation",                  destination: "/retail-ventilation",                      permanent: true },
      { source: "/event-venue-ventilation/",                 destination: "/retail-ventilation",                      permanent: true },

      // ── Misc old pages → homepage ────────────────────────────────────
      { source: "/corona-virus-guidlines",                   destination: "/",                                        permanent: true },
      { source: "/corona-virus-guidlines/",                  destination: "/",                                        permanent: true },
      { source: "/how-were-helping-unlock-uk-buildings-through-safe-ventilation", destination: "/", permanent: true },
      { source: "/how-were-helping-unlock-uk-buildings-through-safe-ventilation/", destination: "/", permanent: true },
      { source: "/thank-you",                                destination: "/",                                        permanent: true },
      { source: "/thank-you/",                               destination: "/",                                        permanent: true },

      // ── Jobs page ────────────────────────────────────────────────────
      { source: "/job-vacancy",                              destination: "/careers",                                 permanent: true },
      { source: "/job-vacancy/",                             destination: "/careers",                                 permanent: true },

      // ── Old blog URLs ────────────────────────────────────────────────
      { source: "/our-blogs-2",                              destination: "/our-blogs",                               permanent: true },
      { source: "/our-blogs-2/",                             destination: "/our-blogs",                               permanent: true },
      { source: "/our-blogs/page/:page",                     destination: "/our-blogs",                               permanent: true },
      { source: "/our-blogs-page-:page",                     destination: "/our-blogs",                               permanent: true },
      { source: "/our-blogs-page-:page/",                    destination: "/our-blogs",                               permanent: true },
      { source: "/category/:slug*",                          destination: "/our-blogs",                               permanent: true },

      // ── Old site pages being dropped → nearest equivalent ────────────
      { source: "/ventilation-consultants",                  destination: "/air-handling-unit-troubleshooting",       permanent: true },
      { source: "/ventilation-consultants/",                 destination: "/air-handling-unit-troubleshooting",       permanent: true },
      { source: "/dental-clinic-ventilation",                destination: "/hospital-ventilation",                    permanent: true },
      { source: "/dental-clinic-ventilation/",               destination: "/hospital-ventilation",                    permanent: true },
      { source: "/swimming-pool-ventilation",                destination: "/sport-facility-ventilation",              permanent: true },
      { source: "/swimming-pool-ventilation/",               destination: "/sport-facility-ventilation",              permanent: true },
      { source: "/event-venue-ventilation-2",                destination: "/retail-ventilation",                      permanent: true },
      { source: "/event-venue-ventilation-2/",               destination: "/retail-ventilation",                      permanent: true },
      { source: "/kitchen-ventilation",                      destination: "/hotel-leisure-ventilation",               permanent: true },
      { source: "/kitchen-ventilation/",                     destination: "/hotel-leisure-ventilation",               permanent: true },
      { source: "/commercial-twin-fans",                     destination: "/shop",                                    permanent: true },
      { source: "/commercial-twin-fans/",                    destination: "/shop",                                    permanent: true },
      { source: "/panel-filters-shop",                       destination: "/shop",                                    permanent: true },
      { source: "/panel-filters-shop/",                      destination: "/shop",                                    permanent: true },
      { source: "/pipework-testing-commissioning",           destination: "/industrial-pipework-services",            permanent: true },
      { source: "/pipework-testing-commissioning/",          destination: "/industrial-pipework-services",            permanent: true },
      { source: "/gas-oil-systems",                          destination: "/commercial-boiler-and-heating-services",  permanent: true },
      { source: "/gas-oil-systems/",                         destination: "/commercial-boiler-and-heating-services",  permanent: true },
      { source: "/vrv-vrf-systems",                          destination: "/mechanical-solutions",                    permanent: true },
      { source: "/vrv-vrf-systems/",                         destination: "/mechanical-solutions",                    permanent: true },
      { source: "/testimonials",                             destination: "/case-studies",                            permanent: true },
      { source: "/testimonials/",                            destination: "/case-studies",                            permanent: true },

      // ── Old case study standalone pages → new /case-studies/ URLs ────
      { source: "/concorde-project",                         destination: "/case-studies/concorde-simulator-ventilation",              permanent: true },
      { source: "/concorde-project/",                        destination: "/case-studies/concorde-simulator-ventilation",              permanent: true },
      { source: "/toca-football-02-arena-2",                 destination: "/case-studies/toca-football-o2-ahu-refurbishment",          permanent: true },
      { source: "/toca-football-02-arena-2/",                destination: "/case-studies/toca-football-o2-ahu-refurbishment",          permanent: true },
      { source: "/marriott-hotel-forest-of-arden-swimming-pool",  destination: "/case-studies/marriott-forest-of-arden-pool-ventilation", permanent: true },
      { source: "/marriott-hotel-forest-of-arden-swimming-pool/", destination: "/case-studies/marriott-forest-of-arden-pool-ventilation", permanent: true },
      { source: "/forest-of-arden-marriott-hotel",           destination: "/case-studies/marriott-forest-of-arden-pool-ventilation",   permanent: true },
      { source: "/forest-of-arden-marriott-hotel/",          destination: "/case-studies/marriott-forest-of-arden-pool-ventilation",   permanent: true },
      { source: "/red-distillery-au-vodka",                  destination: "/case-studies/red-distillery-ahu-refurbishment",            permanent: true },
      { source: "/red-distillery-au-vodka/",                 destination: "/case-studies/red-distillery-ahu-refurbishment",            permanent: true },
      { source: "/friary-meadow-projects",                   destination: "/case-studies/friary-meadow-ahu-replacement",               permanent: true },
      { source: "/friary-meadow-projects/",                  destination: "/case-studies/friary-meadow-ahu-replacement",               permanent: true },
      { source: "/disney-hq-hammersmith-case-study",         destination: "/case-studies/disney-headquarters-ventilation-survey",      permanent: true },
      { source: "/disney-hq-hammersmith-case-study/",        destination: "/case-studies/disney-headquarters-ventilation-survey",      permanent: true },
      { source: "/warner-hotel-gunton-hall-ahu-manufacturing-case-study",  destination: "/case-studies/warner-leisure-hotel-gunton-hall-ahu", permanent: true },
      { source: "/warner-hotel-gunton-hall-ahu-manufacturing-case-study/", destination: "/case-studies/warner-leisure-hotel-gunton-hall-ahu", permanent: true },
      { source: "/blackfriars-office-bloom-development-ahu-manufacturing-case-study",  destination: "/case-studies/blackfriars-office-bloom-development-ahu-manufacturing", permanent: true },
      { source: "/blackfriars-office-bloom-development-ahu-manufacturing-case-study/", destination: "/case-studies/blackfriars-office-bloom-development-ahu-manufacturing", permanent: true },

      // ── Clean up ugly "-2" slug ───────────────────────────────────────
      { source: "/education-ventilation-2",                  destination: "/education-ventilation",                   permanent: true },
      { source: "/education-ventilation-2/",                 destination: "/education-ventilation",                   permanent: true },

      // ── WooCommerce products and categories → shop (catch-all) ─────────
      { source: "/product/:slug*",                           destination: "/shop",                                    permanent: true },
      { source: "/product-category/:slug*",                  destination: "/shop",                                    permanent: true },

      // ── Collapse old redirect chains to single hops ───────────────────
      { source: "/hvac-maintenance",                         destination: "/air-handling-unit-maintenance",           permanent: true },
      { source: "/hvac-maintenance/",                        destination: "/air-handling-unit-maintenance",           permanent: true },
      { source: "/ahu-maintenance-2",                        destination: "/air-handling-unit-maintenance",           permanent: true },
      { source: "/ahu-maintenance-2/",                       destination: "/air-handling-unit-maintenance",           permanent: true },
      { source: "/heating-hot-water-systems",                destination: "/commercial-boiler-and-heating-services",  permanent: true },
      { source: "/heating-hot-water-systems/",               destination: "/commercial-boiler-and-heating-services",  permanent: true },
      { source: "/commercial-boiler-replacement-repairs",    destination: "/commercial-boiler-and-heating-services",  permanent: true },
      { source: "/commercial-boiler-replacement-repairs/",   destination: "/commercial-boiler-and-heating-services",  permanent: true },
      { source: "/hotel-ventilation-refurbishment",          destination: "/hotel-leisure-ventilation",               permanent: true },
      { source: "/hotel-ventilation-refurbishment/",         destination: "/hotel-leisure-ventilation",               permanent: true },
      { source: "/hotel-ventilation",                        destination: "/hotel-leisure-ventilation",               permanent: true },
      { source: "/hotel-ventilation/",                       destination: "/hotel-leisure-ventilation",               permanent: true },

      // ── Other old redirect aliases from old site ──────────────────────
      { source: "/hvac-contracting-and-installations",       destination: "/air-handling-unit-manufacturing-and-installation", permanent: true },
      { source: "/hvac-contracting-and-installations/",      destination: "/air-handling-unit-manufacturing-and-installation", permanent: true },
      { source: "/ahu-coil-replacement",                     destination: "/air-handling-unit-coil-replacement",     permanent: true },
      { source: "/ahu-coil-replacement/",                    destination: "/air-handling-unit-coil-replacement",     permanent: true },
      { source: "/ahu-troubleshooting-solutions",            destination: "/air-handling-unit-troubleshooting",      permanent: true },
      { source: "/ahu-troubleshooting-solutions/",           destination: "/air-handling-unit-troubleshooting",      permanent: true },
      { source: "/dentist-ventilation",                      destination: "/hospital-ventilation",                   permanent: true },
      { source: "/dentist-ventilation/",                     destination: "/hospital-ventilation",                   permanent: true },
      { source: "/supermarket-ventilation",                  destination: "/retail-ventilation",                     permanent: true },
      { source: "/supermarket-ventilation/",                 destination: "/retail-ventilation",                     permanent: true },
      { source: "/hospital-ventilation-refurbishment",       destination: "/hospital-ventilation",                   permanent: true },
      { source: "/hospital-ventilation-refurbishment/",      destination: "/hospital-ventilation",                   permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    remotePatterns: (() => {
      const base = process.env.WP_BASE_URL;
      if (!base) return [];
      try {
        const u = new URL(base);
        return [
          {
            protocol: u.protocol.replace(":", ""),
            hostname: u.hostname,
            port: u.port || "",
            pathname: "/**",
          },
          // Some WP installs serve images from www.* even if base is without/with it.
          ...(u.hostname.startsWith("www.")
            ? []
            : [
                {
                  protocol: u.protocol.replace(":", ""),
                  hostname: `www.${u.hostname}`,
                  port: u.port || "",
                  pathname: "/**",
                },
              ]),
        ];
      } catch {
        return [];
      }
    })(),
  },
};

export default nextConfig;
