import Image from "next/image";

const clientLogos = [
  { src: "/nhs-logo.webp", alt: "NHS" },
  { src: "/disney-logo.webp", alt: "Disney" },
  { src: "/marriott-logo.webp", alt: "Marriott Hotels" },
  { src: "/moorfields-logo.webp", alt: "Moorfields Eye Hospital" },
  { src: "/ihg-logo.webp", alt: "IHG Hotels & Resorts" },
  { src: "/travelodge-logo.webp", alt: "Travelodge" },
  { src: "/waitrose-logo.webp", alt: "Waitrose" },
  { src: "/westfield-logo.webp", alt: "Westfield" },
  { src: "/fenwick-logo.webp", alt: "Fenwick" },
  { src: "/freedomleisure-logo.webp", alt: "Freedom Leisure" },
  { src: "/queenmary-logo.webp", alt: "Queen Mary University" },
  { src: "/alpinef1-logo.webp", alt: "Alpine F1 Team" },
];

export function TrustedByBar() {
  return (
    <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
      <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
        Trusted by leading organisations
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-x-14">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              unoptimized
              className="h-11 w-auto shrink-0 object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
