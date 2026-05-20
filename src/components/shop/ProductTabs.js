"use client";

import { useState } from "react";

export function ProductTabs({ content, weight, dimensions, attributes }) {
  const hasDimensions =
    dimensions &&
    (dimensions.length || dimensions.width || dimensions.height);

  const hasAdditional =
    weight ||
    hasDimensions ||
    (attributes && attributes.length > 0);

  const tabs = [
    { id: "description", label: "Description", show: !!content },
    { id: "additional", label: "Additional Information", show: !!hasAdditional },
  ].filter((t) => t.show);

  const [active, setActive] = useState(tabs[0]?.id || "description");

  if (tabs.length === 0) return null;

  return (
    <div>
      {/* Tab bar */}
      <div className="flex border-b border-slate-200">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={`-mb-px border-b-2 px-6 py-3.5 text-sm font-semibold transition-colors ${
              active === t.id
                ? "border-[#297858] text-[#297858]"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Description */}
      {active === "description" && content && (
        <div
          className="wp-content mt-8"
          dangerouslySetInnerHTML={{ __html: content }}
          suppressHydrationWarning
        />
      )}

      {/* Additional Information */}
      {active === "additional" && (
        <div className="mt-8">
          <table className="w-full border-collapse text-sm">
            <tbody className="divide-y divide-slate-100">
              {weight && (
                <tr>
                  <td className="w-40 py-3 pr-8 font-semibold text-slate-700">
                    Weight
                  </td>
                  <td className="py-3 text-slate-500">{weight} kg</td>
                </tr>
              )}
              {hasDimensions && (
                <tr>
                  <td className="py-3 pr-8 font-semibold text-slate-700">
                    Dimensions
                  </td>
                  <td className="py-3 text-slate-500">
                    {[
                      dimensions.length,
                      dimensions.width,
                      dimensions.height,
                    ]
                      .filter(Boolean)
                      .join(" × ")}{" "}
                    {dimensions.unit || "cm"}
                  </td>
                </tr>
              )}
              {attributes &&
                attributes.map((attr) =>
                  attr.terms && attr.terms.length > 0 ? (
                    <tr key={attr.name}>
                      <td className="py-3 pr-8 font-semibold text-slate-700">
                        {attr.name}
                      </td>
                      <td className="py-3 text-slate-500">
                        {attr.terms.join(", ")}
                      </td>
                    </tr>
                  ) : null,
                )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
