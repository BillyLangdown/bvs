import { BespokeCategoryPage, getBespokeCategoryData } from "@/components/bespoke/BespokeCategoryPage";
import { pageMetadata, truncateDescription, authoredTitle } from "@/lib/seo";
import { decodeHtmlEntities } from "@/lib/wordpress/api";

export const revalidate = 86400;

const PAGE_SLUG = "ec-fan-shop";
const CATEGORY_SLUG = "ec-fans";
const HEADING = "EC Fans";

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
      `Ziehl-Abegg ${HEADING}, up to 50% more efficient with drastically reduced maintenance costs. Off-the-shelf or custom-built to your specification.`,
    path: `/${PAGE_SLUG}`,
  });
}

export default async function EcFanShopPage() {
  const { page, products, categories, category } = await getBespokeCategoryData(PAGE_SLUG, CATEGORY_SLUG);
  return (
    <BespokeCategoryPage
      heading={HEADING}
      eyebrow="Fans"
      heroDescription="Ziehl-Abegg EC fans with integrated VSD as standard: highly efficient, drastically reduced maintenance costs, always-on inverter control."
      path={`/${PAGE_SLUG}`}
      page={page}
      products={products}
      categories={categories}
      category={category}
      servicePagePath="/ec-fan-upgrades-and-retrofits-for-hvac"
      servicePageLabel="EC Fan Upgrades & Retrofits"
    />
  );
}
