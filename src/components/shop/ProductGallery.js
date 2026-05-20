"use client";

import { useState } from "react";
import Image from "next/image";

export function ProductGallery({ images, title }) {
  const [selected, setSelected] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-square items-center justify-center border border-slate-100 bg-white shadow-sm">
        <span className="text-5xl font-extrabold text-slate-200">BVS</span>
      </div>
    );
  }

  const main = images[selected] || images[0];

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative aspect-square overflow-hidden border border-slate-100 bg-white shadow-sm">
        <Image
          key={main.src}
          src={main.src}
          alt={main.alt || title}
          fill
          unoptimized
          sizes="(max-width: 1024px) 100vw, 460px"
          className="object-contain p-8 transition-opacity duration-200"
          priority
        />
      </div>

      {/* Thumbnails — only render when there are multiple images */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img.src + i}
              type="button"
              aria-label={`View image ${i + 1}`}
              onClick={() => setSelected(i)}
              className={`relative h-16 w-16 shrink-0 overflow-hidden border-2 bg-white transition-all duration-150 ${
                selected === i
                  ? "border-[#297858]"
                  : "border-slate-100 opacity-60 hover:border-slate-300 hover:opacity-100"
              }`}
            >
              <Image
                src={img.thumbnail || img.src}
                alt={img.alt || `${title} view ${i + 1}`}
                fill
                unoptimized
                sizes="64px"
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
