"use client";

import { useState, useMemo, useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { BESPOKE_CATEGORY_PATHS } from "@/lib/bespokeCategoryMap";

// Product types that have reliable diameter data. Axial fans have none yet
// (their descriptions carry no size), and coils, heater batteries and the
// mixed "All" view must not offer it. Add a slug here once its products
// carry diameter properly in WooCommerce.
const DIAMETER_CATEGORY_SLUGS = new Set(["ec-fans"]);

const SORT_OPTIONS = [
  { value: "newest", label: "Newest" },
  { value: "name-asc", label: "Name A-Z" },
  { value: "sku-asc", label: "SKU A-Z" },
  { value: "diameter-asc", label: "Diameter: small to large" },
];

// Missing values (no SKU, no diameter) always sort last
function compareBy(getValue) {
  return (a, b) => {
    const av = getValue(a);
    const bv = getValue(b);
    if (av == null && bv == null) return 0;
    if (av == null) return 1;
    if (bv == null) return -1;
    if (typeof av === "string") return av.localeCompare(bv, "en", { numeric: true });
    return av - bv;
  };
}

const SORTERS = {
  "name-asc": compareBy((p) => p.title),
  "sku-asc": compareBy((p) => p.sku),
  "diameter-asc": compareBy((p) => p.diameter),
};

function singular(noun) {
  if (/ies$/i.test(noun)) return noun.replace(/ies$/i, "y");
  return noun.replace(/s$/i, "");
}

function ChevronDown({ className = "" }) {
  return (
    <svg
      viewBox="0 0 12 12"
      width="10"
      height="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 4.5 6 8.5l4-4" />
    </svg>
  );
}

// Native <select> keeps keyboard, screen reader and mobile picker behaviour
// for free, so only the look is custom. The "Brand:" style prefix is part of
// the label, so the current selection always reads as "Brand: Ziehl-Abegg".
function FilterSelect({ id, label, prefix, value, onChange, allLabel, options, className = "" }) {
  const active = value !== "";
  return (
    <label
      htmlFor={id}
      className={`relative inline-flex h-9 items-center border bg-white pl-3 text-[12px] transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#297858] ${
        active ? "border-[#297858]" : "border-slate-200 hover:border-slate-300"
      } ${className}`}
    >
      <span className="font-normal text-slate-400">{prefix}</span>
      <select
        id={id}
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`h-full cursor-pointer appearance-none bg-transparent pl-1.5 pr-8 text-[12px] font-semibold focus:outline-none ${
          active ? "text-[#297858]" : "text-slate-600"
        }`}
      >
        {allLabel != null && <option value="">{allLabel}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
    </label>
  );
}

export function ShopGrid({ products, categories, initialCategory = null, countLabel = "products" }) {
  const uid = useId();
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeBrand, setActiveBrand] = useState(null);
  const [activeDiameter, setActiveDiameter] = useState(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sort, setSort] = useState("newest");

  // Remember the incoming order so "Newest" (the API's own order) can be restored
  const indexed = useMemo(() => products.map((p, i) => ({ ...p, _order: i })), [products]);

  const typeOptions = useMemo(
    () =>
      categories
        .filter((c) => products.some((p) => p.categories.includes(c.id)))
        .map((c) => ({ id: c.id, slug: c.slug, label: c.name }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    [categories, products],
  );

  const inCategory = useMemo(() => {
    if (!activeCategory) return indexed;
    return indexed.filter((p) => p.categories.includes(activeCategory));
  }, [indexed, activeCategory]);

  // Brand and diameter options narrow with the product type, so they never lead to an empty grid
  const brandOptions = useMemo(
    () =>
      [...new Set(inCategory.map((p) => p.brand).filter(Boolean))]
        .sort((a, b) => a.localeCompare(b))
        .map((b) => ({ value: b, label: b })),
    [inCategory],
  );
  const diameterOptions = useMemo(
    () =>
      [...new Set(inCategory.map((p) => p.diameter).filter(Boolean))]
        .sort((a, b) => a - b)
        .map((d) => ({ value: String(d), label: `${d}mm` })),
    [inCategory],
  );

  // Diameter is contextual: offered only for product types listed in
  // DIAMETER_CATEGORY_SLUGS, never on the mixed "All" view.
  const activeCategorySlug = categories.find((c) => c.id === activeCategory)?.slug || "";
  const diameterApplies = DIAMETER_CATEGORY_SLUGS.has(activeCategorySlug);

  // A selection that no longer exists after changing product type simply drops out
  const brand = brandOptions.some((o) => o.value === activeBrand) ? activeBrand : null;
  const diameter =
    diameterApplies && diameterOptions.some((o) => o.value === String(activeDiameter))
      ? activeDiameter
      : null;
  const hasStockItems = inCategory.some((p) => p.stockClass === "in-stock");
  const stockOnly = inStockOnly && hasStockItems;

  const showType = typeOptions.length > 1;
  const showBrand = brandOptions.length > 1;
  const showDiameter = diameterApplies && diameterOptions.length > 1;
  const sortOptions = SORT_OPTIONS.filter((o) => o.value !== "diameter-asc" || showDiameter);
  const effectiveSort = sortOptions.some((o) => o.value === sort) ? sort : "newest";

  const filtered = useMemo(() => {
    let list = inCategory;
    if (brand) list = list.filter((p) => p.brand === brand);
    if (diameter) list = list.filter((p) => p.diameter === diameter);
    if (stockOnly) list = list.filter((p) => p.stockClass === "in-stock");
    const sorter = SORTERS[effectiveSort];
    return sorter ? [...list].sort(sorter) : [...list].sort((a, b) => a._order - b._order);
  }, [inCategory, brand, diameter, stockOnly, effectiveSort]);

  const activeCount = [activeCategory && showType, brand, diameter, stockOnly].filter(Boolean).length;

  function selectCategory(id) {
    setActiveCategory(id);
    // Leaving a type that supports diameter clears it, so no hidden filter lingers
    const next = categories.find((c) => c.id === id);
    if (!next || !DIAMETER_CATEGORY_SLUGS.has(next.slug)) setActiveDiameter(null);
    // Keep the address bar honest for the in-place filter; generated category
    // pages keep their own URL, everything else sits on /shop.
    const cat = categories.find((c) => c.id === id);
    const url = cat && !BESPOKE_CATEGORY_PATHS[cat.slug] ? `/shop/category/${cat.slug}` : "/shop";
    if (typeof window !== "undefined" && categories.length > 1) window.history.pushState(null, "", url);
  }

  function clearAll() {
    setActiveCategory(null);
    setActiveBrand(null);
    setActiveDiameter(null);
    setInStockOnly(false);
    if (typeof window !== "undefined" && categories.length > 1) window.history.pushState(null, "", "/shop");
  }

  const countNoun = filtered.length === 1 ? singular(countLabel) : countLabel;

  const chipClass = (active) =>
    `shrink-0 border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#297858] ${
      active
        ? "border-[#297858] bg-[#297858] text-white"
        : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300"
    }`;

  return (
    <div>
      {/* Product type: primary filter, visible chips (scrolls sideways on narrow screens) */}
      {showType && (
        <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible md:pb-0">
          <span className="mr-1 shrink-0 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
            Product
          </span>
          <button
            type="button"
            onClick={() => selectCategory(null)}
            aria-pressed={activeCategory === null}
            className={chipClass(activeCategory === null)}
          >
            All
          </button>
          {typeOptions.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => selectCategory(activeCategory === c.id ? null : c.id)}
              aria-pressed={activeCategory === c.id}
              className={chipClass(activeCategory === c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      <p className="mb-3 text-[12px] font-semibold text-slate-500" aria-live="polite">
        {filtered.length} {countNoun}
      </p>

      {/* Secondary attributes + sort: always visible, no panel */}
      <div className="mb-6 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        {showBrand && (
          <FilterSelect
            id={`${uid}-brand`}
            label="Brand"
            prefix="Brand:"
            value={brand || ""}
            onChange={(v) => setActiveBrand(v || null)}
            allLabel="All brands"
            options={brandOptions}
          />
        )}
        {showDiameter && (
          <FilterSelect
            id={`${uid}-diameter`}
            label="Fan diameter"
            prefix="Fan diameter:"
            value={diameter ? String(diameter) : ""}
            onChange={(v) => setActiveDiameter(v ? Number(v) : null)}
            allLabel="All diameters"
            options={diameterOptions}
          />
        )}
        {hasStockItems && (
          <button
            type="button"
            onClick={() => setInStockOnly(!inStockOnly)}
            aria-pressed={stockOnly}
            className={`inline-flex h-9 items-center gap-2 border bg-white px-3 text-[12px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#297858] ${
              stockOnly
                ? "border-[#297858] text-[#297858]"
                : "border-slate-200 text-slate-600 hover:border-slate-300"
            }`}
          >
            <span
              aria-hidden="true"
              className={`flex h-3.5 w-3.5 items-center justify-center border ${
                stockOnly ? "border-[#297858] bg-[#297858]" : "border-slate-300"
              }`}
            >
              {stockOnly && (
                <svg viewBox="0 0 12 12" width="9" height="9" fill="none" stroke="white" strokeWidth="2">
                  <path d="m2.5 6.2 2.2 2.2 4.8-4.8" />
                </svg>
              )}
            </span>
            In stock only
          </button>
        )}
        {activeCount > 1 && (
          <button
            type="button"
            onClick={clearAll}
            className="px-1 text-[11px] font-semibold text-[#297858] underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#297858]"
          >
            Clear filters
          </button>
        )}

        <FilterSelect
          id={`${uid}-sort`}
          label="Sort by"
          prefix="Sort by:"
          value={effectiveSort}
          onChange={setSort}
          options={sortOptions}
          className="ml-auto"
        />
      </div>

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
          {product.stockBadge &&
            product.stockClass !== "in-stock" &&
            product.stockClass !== "out-of-stock" && (
              <span className="border border-amber-500 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-600">
                {product.stockBadge}
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
