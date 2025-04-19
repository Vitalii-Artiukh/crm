import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl text-indigo-600 font-bold">Dashboard Page</h1>
    </main>
  );
}
