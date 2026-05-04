import { Container } from "@/components/site/Container";

export const metadata = {
  title: "Shop",
  description: "Shop",
};

export default function ShopPage() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Shop</h1>
      <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        Placeholder page. If you’re integrating WooCommerce later, this can
        become the storefront.
      </p>
    </Container>
  );
}

