import React from 'react';
import Image from 'next/image';

export interface SidebarItemProps {
  pathname: string;
  src: string;
  alt: string;
  children?: React.ReactNode;
}

export default function SidebarItem({
  pathname,
  src,
  alt,
  children,
}: SidebarItemProps) {
  return (
    <li>
      <a href={pathname} className="flex items-center h-9 mx-1 gap-3.5">
        <Image className="ml-5" src={src} alt={alt} width={18} height={18} />
        <span className="font-medium text-zinc-50">{children}</span>
      </a>
    </li>
  );
}
