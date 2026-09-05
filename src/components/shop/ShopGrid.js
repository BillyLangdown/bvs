"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { BESPOKE_CATEGORY_PATHS } from "@/lib/bespokeCategoryMap";

export function ShopGrid({ products, categories, initialCategory = null }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filtered = useMemo(() => {
    if (!activeCategory) return products;
    return products.filter((p) => p.categories.includes(activeCategory));
  }, [products, activeCategory]);

  const activeCatName = categories.find((c) => c.id === activeCategory)?.name || "";

  const populatedCategories = categories.filter((c) =>
    products.some((p) => p.categories.includes(c.id))
  );

  return (
    <div>
      {/* Category filter */}
      {populatedCategories.length > 1 && (
        <div className="mb-8 flex flex-wrap items-center gap-2 border border-slate-200 bg-white p-3">
          <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
            Filter
          </span>
          <Link
            href="/shop"
            prefetch={false}
            onClick={(e) => {
              e.preventDefault();
              setActiveCategory(null);
              window.history.pushState(null, "", "/shop");
            }}
            className={`border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-colors ${
              activeCategory === null
                ? "border-[#297858] bg-[#297858] text-white"
                : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300"
            }`}
          >
            All
          </Link>
          {populatedCategories.map((c) => {
            // Categories with a dedicated landing page navigate there for
            // real, instead of filtering this grid in place — that page is
            // the canonical URL for the category now (see
            // src/lib/bespokeCategoryMap.js).
            const bespokePath = BESPOKE_CATEGORY_PATHS[c.slug];
            return (
              <Link
                key={c.id}
                href={bespokePath || `/shop/category/${c.slug}`}
                prefetch={false}
                onClick={
                  bespokePath
                    ? undefined
                    : (e) => {
                        e.preventDefault();
                        const next = activeCategory === c.id ? null : c.id;
                        setActiveCategory(next);
                        window.history.pushState(null, "", next ? `/shop/category/${c.slug}` : "/shop");
                      }
                }
                className={`border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-colors ${
                  activeCategory === c.id
                    ? "border-[#297858] bg-[#297858] text-white"
                    : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300"
                }`}
              >
                {c.name}
              </Link>
            );
          })}
        </div>
      )}

      <p className="mb-6 text-[11px] text-slate-400">
        {filtered.length} {filtered.length === 1 ? "product" : "products"}
        {activeCatName ? ` in ${activeCatName}` : ""}
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} categories={categories} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product, categories }) {
  const catName =
    categories.find((c) => product.categories.includes(c.id))?.name || "";

  return (
    <div className="group flex flex-col overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
      {/* Image */}
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
            <span className="text-4xl font-extrabold text-slate-200">BVS</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {catName && (
            <span className="rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              {catName}
            </span>
          )}
          {product.stockClass === "in-stock" && (
            <span className="border border-[#297858] bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#297858]">
              In Stock
            </span>
          )}
          {product.stockClass === "out-of-stock" && (
            <span className="border border-slate-300 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Out of Stock
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
        <div className="mt-4 flex items-end justify-between border-t border-slate-100 pt-4">
          <Link
            href={`/shop/${product.slug}`}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-800"
          >
            View Details
            <span className="inline-flex text-slate-400 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href={`/shop/${product.slug}#enquire`}
            className="text-sm font-semibold text-[#297858] transition-colors hover:text-[#1d5c42]"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
