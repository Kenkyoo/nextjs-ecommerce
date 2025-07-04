import { lusitana } from "@/app/ui/fonts";
import { fetchSmartPhones } from "@/app/lib/data";
import { ProductCard } from "@/components/productCard";

export default async function SmartPhonesGrid({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const smartphones = await fetchSmartPhones(query, currentPage);
  return (
    <div
      className={`${lusitana.className} w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5`}
    >
      {smartphones.map((smartphone) => (
        <div key={smartphone.id}>
          <ProductCard product={smartphone} />
        </div>
      ))}
    </div>
  );
}
