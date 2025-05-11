// 'use client';
import React, { use } from 'react';

interface PageProps {
  params: Promise<{ id: string[] }>;
  // params: { id: string };
}

export default function Page({ params }: PageProps) {
  const companyId = use(params);
  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${companyId.id}`}</p>
    </div>
  );
}
