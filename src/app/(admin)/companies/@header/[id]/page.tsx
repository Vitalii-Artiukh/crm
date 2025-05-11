// 'use client';
import React, { use } from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const companyId = use(params);
  return <Header>{`Company (${companyId.id})`}</Header>;
}
