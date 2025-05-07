'use client';

import React from 'react';

export interface GlobalErrorProps {}

export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p className="ml-6">Something globally went wrong</p>
        </div>
      </body>
    </html>
  );
}
