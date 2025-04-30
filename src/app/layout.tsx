import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const fonts = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts.className}>{children}</body>
    </html>
  );
}
