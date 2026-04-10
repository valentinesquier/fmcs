"use client";

import Image from "next/image";

const BRANDS = [
  { name: "Le Figaro", src: "/images/logos/le-figaro.svg" },
  { name: "NRJ12", src: "/images/logos/nrj12.svg" },
  { name: "Muscle & Fitness", src: "/images/logos/muscle-fitness.svg" },
  { name: "Decathlon", src: "/images/logos/decathlon.svg" },
  { name: "Gymshark", src: "/images/logos/gymshark.svg" },
  { name: "G-Shock", src: "/images/logos/g-shock.svg" },
  { name: "Danone", src: "/images/logos/danone.svg" },
  { name: "Fitness Park", src: "/images/logos/fitness-park.jpeg" },
  { name: "Coalition Nutrition", src: "/images/logos/coalition.svg" },
  { name: "Le Progrès", src: "/images/logos/le-progres.png" },
];

export default function BrandMarquee() {
  return (
    <div className="py-6 bg-white overflow-hidden">
      {/* Top divider fade */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#e5e5e5] to-transparent" />

      <p className="text-[0.6875rem] text-[#888] text-center uppercase tracking-[0.1em] font-500 mt-5 mb-4">
        Apparu dans
      </p>

      {/* Marquee with fade edges */}
      <div className="relative">
        {/* Fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        {/* Fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="inline-flex items-center justify-center mx-8 sm:mx-12 shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={120}
                height={40}
                className="h-6 sm:h-8 w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider fade */}
      <div className="h-px mt-5 bg-gradient-to-r from-transparent via-[#e5e5e5] to-transparent" />
    </div>
  );
}
