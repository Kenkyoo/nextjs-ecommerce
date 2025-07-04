import { Suspense } from "react";
import { RevenueChartSkeleton } from "@/app/ui/skeletons";
import SmartPhonesGrid from "@/app/ui/dashboard/smartphones-grid";
import { SmartPagination } from "@/components/pagination";
import { fetchTotalSmartPhones } from "@/app/lib/data";
import Heading from "@/app/ui/heading";

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
  const totalCount = await fetchTotalSmartPhones(query);
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <main>
      <Heading title="Smartphones" />
      <Suspense fallback={<RevenueChartSkeleton />}>
        <SmartPhonesGrid query={query} currentPage={currentPage} />
      </Suspense>
      <SmartPagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}
