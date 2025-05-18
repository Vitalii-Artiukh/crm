import React from 'react';
import Toolbar from '@/app/components/toolbar';
import AddPromotionButton from '@/app/components/add-promotion-button';
import SearchInput from '@/app/components/search-input';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <Toolbar action={<AddPromotionButton companyId={id} />}>
      <SearchInput />
    </Toolbar>
  );
}
