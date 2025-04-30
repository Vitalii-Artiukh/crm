import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl text-green-600 font-extralight">Settings Page</h1>
    </main>
  );
}
