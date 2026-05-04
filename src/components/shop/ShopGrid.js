"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

export function ShopGrid({ products, categories }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === null) return products;
    return products.filter((p) => p.categories.includes(activeCategory));
  }, [products, activeCategory]);

  return (
    <div>
      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
            activeCategory === null
              ? "bg-[#297858] text-white"
              : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
          }`}
        >
          All <span className="ml-1 opacity-70">({products.length})</span>
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
              activeCategory === cat.id
                ? "bg-[#297858] text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            {cat.name}{" "}
            <span className="ml-1 opacity-70">({cat.count})</span>
          </button>
        ))}
      </div>

      {/* Count line */}
      <p className="mb-6 text-xs text-slate-400">
        {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        {activeCategory !== null ? ` in ${categories.find((c) => c.id === activeCategory)?.name}` : ""}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} categories={categories} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-sm text-slate-500">
          No products found in this category.
        </p>
      )}
    </div>
  );
}

function ProductCard({ product, categories }) {
  const catName =
    categories.find((c) => product.categories.includes(c.id))?.name || "";

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex flex-col overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-white">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.title.replace(/<[^>]*>/g, "")}
            fill
            unoptimized
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-slate-50">
            <span className="font-display text-4xl font-extrabold text-slate-200">
              BVS
            </span>
          </div>
        )}

        {/* Category badge */}
        {catName && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-emerald-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              {catName}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
        <h3 className="text-sm font-bold leading-snug text-slate-900 group-hover:text-slate-700">
          {product.title}
        </h3>
        {product.excerpt && (
          <p className="mt-2 flex-1 text-xs leading-5 text-slate-500 line-clamp-3">
            {product.excerpt}
          </p>
        )}
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-700 transition-colors group-hover:text-emerald-600">
          View Product
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
