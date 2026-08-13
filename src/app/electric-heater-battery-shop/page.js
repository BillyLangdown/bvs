import { BespokeCategoryPage, getBespokeCategoryData } from "@/components/bespoke/BespokeCategoryPage";
import { pageMetadata, truncateDescription, authoredTitle } from "@/lib/seo";
import { decodeHtmlEntities } from "@/lib/wordpress/api";

export const revalidate = 86400;

const PAGE_SLUG = "electric-heater-battery-shop";
const CATEGORY_SLUG = "electric-heater-battery";
const HEADING = "Electric Heater Batteries";

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
      `${HEADING} for frost protection, pre-heating and re-heating air in commercial HVAC systems. Off-the-shelf or custom-built to your specification.`,
    path: `/${PAGE_SLUG}`,
  });
}

export default async function ElectricHeaterBatteryShopPage() {
  const { page, products, categories, category } = await getBespokeCategoryData(PAGE_SLUG, CATEGORY_SLUG);
  return (
    <BespokeCategoryPage
      heading={HEADING}
      eyebrow="Heater Batteries"
      heroDescription="Inline electric heating elements for ductwork and air handling units: frost protection, pre-heating and re-heating for commercial HVAC systems."
      path={`/${PAGE_SLUG}`}
      page={page}
      products={products}
      categories={categories}
      category={category}
      servicePagePath="/commercial-boiler-and-heating-services"
      servicePageLabel="Heating Services"
    />
  );
}
