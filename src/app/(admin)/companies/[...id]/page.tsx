import React from 'react';
import Header from '@/app/components/header';

interface PageProps {
  params: Promise<{ id: string[] }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <div>
      <Header>Companies ({String(id)})</Header>
      <p className="p-3">{new Date().toTimeString()}</p>
    </div>
  );
}
