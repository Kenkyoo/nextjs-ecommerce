import { Suspense } from "react";
import { SkeletonCard, SkeletonProducts } from "@/components/skeletons";
import ProductsGrid from "@/app/ui/dashboard/products-grid";
import LatestSmartPhones from "@/app/ui/dashboard/latest-smartphones";
import { SmartPagination } from "@/components/pagination";
import { fetchTotalProducts } from "@/app/lib/data";
import Heading from "@/app/ui/heading";
import InfiniteProducts from "@/app/ui/dashboard/infinite-products";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const pageSize = 12;
  const totalCount = await fetchTotalProducts(query);
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <main>
      <Suspense fallback={<SkeletonCard />}>
        <LatestSmartPhones />
      </Suspense>
      <InfiniteProducts />
      <Heading title={"Products"} />
      <Suspense fallback={<SkeletonProducts />}>
        <ProductsGrid query={query} currentPage={currentPage} />
      </Suspense>
      <SmartPagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}
