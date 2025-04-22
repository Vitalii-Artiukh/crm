import React from 'react';
import { headers } from 'next/headers';

export interface ServerComponentCopyProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentCopyProps) {
  return (
    <div>
      <span>Server component copy</span>
      {children}
    </div>
  );
}
