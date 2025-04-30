import React from 'react';
import StatusLabel, { Status } from '@/app/components/status-label';
import Image from 'next/image';
import clsx from 'clsx';

export interface CompanyRowProps {
  id: string;
  category: string;
  company: string;
  status: Status;
  promotion: boolean;
  country: string;
  joinedDate: string;
}

const labelByStatus = {
  [Status.Active]: 'Active',
  [Status.NotActive]: 'Not Active',
  [Status.Pending]: 'Pending',
  [Status.Suspended]: 'Suspended',
};

export default function CompanyRow({
  id,
  category,
  company,
  status,
  promotion,
  country,
  joinedDate,
}: CompanyRowProps) {
  return (
    <tr className="h-14 text-center text-gray-900 bg-white">
      <td className="text-xs font-medium text-blue-700 rounded-1 border-1-4 border-blue-700">
        {category}
      </td>
      <td>
        <a href={`/companies/${id}`}>{company}</a>
      </td>
      <td>
        <StatusLabel status={status}>{labelByStatus[status]}</StatusLabel>
      </td>
      <td>
        <div className="inline-flex items-center gap-1">
          <Image
            src={`/icons/${promotion ? 'check' : 'x-mark'}.svg`}
            alt="promotion icons"
            width={16}
            height={16}
          />
          <span
            className={clsx(
              'text-sm font-medium',
              promotion ? 'text-green-700' : 'text-red-700',
            )}
          >
            {promotion ? 'Yes' : 'No'}
          </span>
        </div>
      </td>
      <td>{country}</td>
      <td className="rounded-r">
        {new Date(joinedDate).toLocaleDateString('uk-UA')}
      </td>
    </tr>
  );
}
