'use client';
import '@/styles/globals.css';
import '@/styles/queries.css';
import styles from '@/styles/components/bills/page.module.css';
import data from '@/data.json';
import { useStateContext } from '@/app/stateContext';
import billData from '@/utils/billData';
import Summary from '@/components/bills/Summary';
import Total from '@/components/bills/Total';
import Bills from '@/components/bills/Bills';

export default function BillsPage() {
  const { sidebarOpen } = useStateContext();
  const bills = billData(data.transactions);

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
