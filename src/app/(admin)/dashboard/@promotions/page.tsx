import React from 'react';
import DashboardCard from '@/app/components/dashboard-card';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import SummaryTableCell from '@/app/components/summary-table-cell';
import { getSummaryPromotions } from '@/lib/api';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data: any = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(getSummaryPromotions());
    }, 4000);
  });

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {data.map(
          ({
            promotionId,
            promotionsName,
            companyTitle,
            discount,
          }: {
            promotionId: string;
            promotionsName: string;
            companyTitle: string;
            discount: number;
          }) => (
            <tr key={promotionId}>
              <SummaryTableCell>{companyTitle}</SummaryTableCell>
              <SummaryTableCell>{promotionsName}</SummaryTableCell>
              <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
            </tr>
          ),
        )}
      </SummaryTable>
    </DashboardCard>
  );
}
