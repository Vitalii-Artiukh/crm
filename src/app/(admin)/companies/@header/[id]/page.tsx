import React from 'react';
import Header from '@/app/components/header';
import getQueryClient from '@/lib/utils/getQueryClient';
import { Company, getCompany } from '@/lib/api';

export interface PageProps {
  params: Promise<{ id: string }>;
  // params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const queryClient = getQueryClient();
  // const companyId = use(params);

  await queryClient.prefetchQuery({
    queryKey: ['companies', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  // const company = queryClient.getQueryData(['companies', id]) as Company;

  return <Header>{`Company (${id})`}</Header>;
}
