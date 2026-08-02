import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// Called by a WordPress save_post hook whenever a post, product, or page is
// published or updated, so pages only regenerate when content actually
// changes instead of on a timer. See the PHP snippet in the handover notes
// for the WordPress side of this.
const PATHS_BY_TYPE = {
  post: (slug) => [`/our-blogs/${slug}`, "/our-blogs", "/sitemap.xml"],
  product: (slug) => [`/shop/${slug}`, "/shop", "/sitemap.xml"],
  page: (slug) => [`/${slug}`],
};

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body || body.secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const { type, slug } = body;
  const buildPaths = PATHS_BY_TYPE[type];
  if (!buildPaths || !slug) {
    return NextResponse.json(
      { error: "type must be one of post/product/page, and slug is required" },
      { status: 400 }
    );
  }

  const paths = buildPaths(slug);
  paths.forEach((path) => revalidatePath(path));

  return NextResponse.json({ revalidated: true, paths });
}
