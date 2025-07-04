import { lusitana } from "@/app/ui/fonts";
import { ProductCard } from "@/components/productCard";
import { fetchAllProducts } from "@/app/lib/data";

export default async function ProductsGrid({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const products = await fetchAllProducts(query, currentPage);

  return (
    <div
      className={`${lusitana.className} mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
