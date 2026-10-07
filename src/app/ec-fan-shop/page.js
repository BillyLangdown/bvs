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
      `${HEADING} in stock from Ziehl-Abegg and ebm-papst. We can source any EC fan or replacement fan, with lower energy consumption and lower maintenance.`,
    path: `/${PAGE_SLUG}`,
  });
}

export default async function EcFanShopPage() {
  const { page, products, categories, category } = await getBespokeCategoryData(PAGE_SLUG, CATEGORY_SLUG);
  return (
    <BespokeCategoryPage
      heading={HEADING}
      eyebrow="Fans"
      heroDescription="EC fans offer lower energy consumption and lower maintenance. We stock Ziehl-Abegg and ebm-papst, and can source any EC fan or replacement fan for your air handling unit."
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
