'use client';

import React, { use, useEffect } from 'react';
import Header from '@/app/components/header';
import { notFound, useParams } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string[] }>;
}

export default function Page({ params }: PageProps) {
  const companyId = use(params);

  // useEffect(() => {
  //   const id = Number.parseInt(companyId.id);
  //   if (Number.isNaN(id)) {
  //     notFound();
  //   }
  // }, [companyId]);

  return (
    <div>
      <Header>Companies ({companyId.id})</Header>
    </div>
  );
}
