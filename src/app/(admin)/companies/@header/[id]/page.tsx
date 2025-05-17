import React, { use } from 'react';
import Header from '@/app/components/header';
import getQueryClient from '@/lib/utils/getQueryClient';
import { Company, getCompany } from '@/lib/api';

export interface PageProps {
  // params: Promise<{ id: string }>;
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const queryClient = getQueryClient();
  // const companyId = use(params);

  await queryClient.prefetchQuery({
    queryKey: ['companies', params.id],
    queryFn: () => getCompany(params.id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', params.id]) as Company;

  return <Header>{`Company (${params.id})`}</Header>;
}
