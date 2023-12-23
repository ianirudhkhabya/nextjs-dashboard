import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { fetchFilteredCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

type PageProps = {
  searchParams?: {
    query?: string;
  };
};

export default async function Page({ searchParams }: PageProps) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <Suspense key={query} fallback={<CustomersTableSkeleton />}>
      <Table customers={customers} />
    </Suspense>
  );
}
