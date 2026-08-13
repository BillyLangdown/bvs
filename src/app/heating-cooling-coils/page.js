import { BespokeCategoryPage, getBespokeCategoryData } from "@/components/bespoke/BespokeCategoryPage";
import { pageMetadata, truncateDescription, authoredTitle } from "@/lib/seo";
import { decodeHtmlEntities } from "@/lib/wordpress/api";

export const revalidate = 86400;

const PAGE_SLUG = "heating-cooling-coils";
const CATEGORY_SLUG = "heating-cooling-coils";
const HEADING = "Heating & Cooling Coils";

export async function generateMetadata() {
  const { page } = await getBespokeCategoryData(PAGE_SLUG, CATEGORY_SLUG);
  const seo = page?.aioseo_head_json || {};
  const fallbackTitle = decodeHtmlEntities(page?.title?.rendered || HEADING);
  const authored = authoredTitle(seo.title, page?.title?.rendered);
  return pageMetadata({
    title: authored || fallbackTitle,
    description:
      seo.description ||
      truncateDescription(page?.excerpt?.rendered) ||
      `LTHW, DX, steam and CW coils supplied off-the-shelf or custom-built to your specification. ${HEADING} sourced and supplied by BVS.`,
    path: `/${PAGE_SLUG}`,
  });
}

export default async function HeatingCoolingCoilsPage() {
  const { page, products, categories, category } = await getBespokeCategoryData(PAGE_SLUG, CATEGORY_SLUG);
  return (
    <BespokeCategoryPage
      heading={HEADING}
      eyebrow="Coils"
      heroDescription="LTHW heating coils, cooling water coils, DX coils, steam coils and electric heater batteries. Off-the-shelf or built to your exact specification."
      path={`/${PAGE_SLUG}`}
      page={page}
      products={products}
      categories={categories}
      category={category}
      servicePagePath="/air-handling-unit-coil-replacement"
      servicePageLabel="Coil Replacement Service"
    />
  );
}
