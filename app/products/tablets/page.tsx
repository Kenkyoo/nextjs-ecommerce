import { Metadata } from "next";
import TabletsGrid from "@/app/ui/tablets/tablets-grid";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchTotalTablets } from "@/app/lib/data";
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
  const totalCount = await fetchTotalTablets(query);
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div>
      <Heading title="Tablets" />
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <TabletsGrid query={query} currentPage={currentPage} />
      </Suspense>
      <SmartPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
