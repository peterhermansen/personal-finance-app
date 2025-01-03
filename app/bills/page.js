'use client';
import '@/styles/globals.css';
import '@/styles/queries.css';
import styles from '@/styles/components/bills/page.module.css';
import { useStateContext } from '@/app/stateContext';
import billData from '@/utils/billData';
import Summary from '@/components/bills/Summary';
import Total from '@/components/bills/Total';
import Bills from '@/components/bills/Bills';
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';

export default function BillsPage() {
  const { sidebarOpen, transactions } = useStateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (transactions) setLoading(false);
  }, [transactions]);

  if (loading) return <Loading />;

  const bills = billData(transactions);

  return (
    <div
      className={`container ${sidebarOpen ? 'container--sidebar-open' : 'container--sidebar-closed'}`}
    >
      <div className="content">
        <div className="top">
          <h1 className="title text-1 bold">Recurring Bills</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <Total bills={bills} />
            <Summary bills={bills} />
          </div>

          <div className={styles.right}>
            <Bills bills={bills} />
          </div>
        </div>
      </div>
    </div>
  );
}
