import { BespokeCategoryPage, getBespokeCategoryData } from "@/components/bespoke/BespokeCategoryPage";
import { pageMetadata, truncateDescription, authoredTitle } from "@/lib/seo";
import { decodeHtmlEntities } from "@/lib/wordpress/api";

export const revalidate = 86400;

const PAGE_SLUG = "axial-fan-shop";
const CATEGORY_SLUG = "axial-fans";
const HEADING = "Axial Fans";

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
      `${HEADING} for high airflow, low-to-medium pressure ventilation. Off-the-shelf or custom-built to your specification.`,
    path: `/${PAGE_SLUG}`,
  });
}

export default async function AxialFanShopPage() {
  const { page, products, categories, category } = await getBespokeCategoryData(PAGE_SLUG, CATEGORY_SLUG);
  return (
    <BespokeCategoryPage
      heading={HEADING}
      eyebrow="Fans"
      heroDescription="Best suited for high airflow, low-to-medium pressure applications: general ventilation, heat rejection, and plant room supply or extract."
      path={`/${PAGE_SLUG}`}
      page={page}
      products={products}
      categories={categories}
      category={category}
      servicePagePath="/ec-fan-upgrades-and-retrofits-for-hvac"
      servicePageLabel="Fan Upgrades & Retrofits"
    />
  );
}
