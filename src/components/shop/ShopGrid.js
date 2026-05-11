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
      <div className="mb-8 border-b border-slate-200 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Filter
          </span>
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
      </div>

      {/* Count line */}
      <p className="mb-6 text-xs text-slate-400">
        {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        {activeCategory !== null
          ? ` in ${categories.find((c) => c.id === activeCategory)?.name}`
          : ""}
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

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProductCard({ product, categories }) {
  const catName =
    categories.find((c) => product.categories.includes(c.id))?.name || "";

  return (
    <div className="group flex flex-col overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
      {/* Image — links to product detail */}
      <Link href={`/shop/${product.slug}`} className="relative block h-52 overflow-hidden bg-white" tabIndex={-1}>
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

        {/* Badges */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {catName && (
            <span className="bg-[#297858] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              {catName}
            </span>
          )}
          {product.inStock && (
            <span className="border border-[#297858] bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#297858]">
              In Stock
            </span>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="text-sm font-bold leading-snug text-slate-900 hover:text-slate-700">
            {product.title}
          </h3>
        </Link>
        {product.excerpt && (
          <p className="mt-2 flex-1 text-xs leading-5 text-slate-500 line-clamp-3">
            {product.excerpt}
          </p>
        )}

        {/* Actions */}
        <div className="mt-4 flex items-center gap-5 border-t border-slate-100 pt-4">
          <Link
            href={`/shop/${product.slug}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-800"
          >
            View Details
            <ArrowIcon />
          </Link>
          <Link
            href={`/shop/${product.slug}#enquire`}
            className="flex items-center gap-1.5 text-sm font-semibold text-[#297858] transition-colors hover:text-[#1d5c42]"
          >
            Enquire Now
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
