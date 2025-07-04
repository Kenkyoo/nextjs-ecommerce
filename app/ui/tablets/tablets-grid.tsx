import { lusitana } from "@/app/ui/fonts";
import { ProductCard } from "@/components/productCard";
import { fetchTablets } from "@/app/lib/data";

export default async function TabletsGrid({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const tablets = await fetchTablets(query, currentPage);

  return (
    <div
      className={`${lusitana.className} w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5`}
    >
      {tablets.map((tablet) => (
        <div key={tablet.id}>
          <ProductCard product={tablet} />
        </div>
      ))}
    </div>
  );
}
