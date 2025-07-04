import { Metadata } from "next";
import LaptopsGrid from "@/app/ui/laptops/laptops-grid";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchTotalLaptops } from "@/app/lib/data";
import { SmartPagination } from "@/components/pagination";
import Heading from "@/app/ui/heading";

export const metadata: Metadata = {
  title: "Tablets",
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const pageSize = 3;
  const totalCount = await fetchTotalLaptops(query);
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div>
      <Heading title="Laptops" />
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <LaptopsGrid query={query} currentPage={currentPage} />
      </Suspense>
      <SmartPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
