import React from 'react';
import { headers } from 'next/headers';

export interface ServerComponentCopyProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentCopyProps) {
  console.log('Server component copy');
  console.log(headers());
  return (
    <div>
      <span>Server component copy</span>
      {children}
    </div>
  );
}
