import CardWrapper from "../../ui/dashboard/cards";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { lusitana } from "../../ui/fonts";
import { fetchRevenue } from "../../lib/data";
import { fetchLatestInvoices, fetchCardData } from "../../lib/data";
import { Suspense } from "react";
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from "../../ui/skeletons";

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();

  return (
    <main>
    <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
      Dashboard
    </h1>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    <CardWrapper />
    </div>
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
    <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense> 
      <LatestInvoices latestInvoices={latestInvoices} />
    </div>
  </main>
  );
}