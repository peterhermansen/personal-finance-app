'use client';
import '@/styles/globals.css';
import '@/styles/queries.css';
import styles from '@/styles/components/transactions/page.module.css';
import { useStateContext } from '@/app/stateContext';
import TransactionsRow from '@/components/transactions/TransactionRow';
import TransactionFilters from '@/components/transactions/TransactionFilters';
import Pagination from '@/components/transactions/Pagination';
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';

export default function TransactionsPage() {
  const { sidebarOpen, transactions, windowSize } = useStateContext();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    if (transactions) {
      setLoading(false);
      setFilteredData(transactions);
    }
  }, [transactions]);

  if (loading) if (loading) return <Loading />;

  return (
    <div
      className={`container ${windowSize.width > 1200 ? (sidebarOpen ? 'container--sidebar-open' : 'container--sidebar-closed') : ''}`}
    >
      <div className="top">
        <h1 className="title text-1 bold">Transactions</h1>
      </div>

      <div className={styles.content}>
        <TransactionFilters
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          data={transactions}
        />
        <div>
          <div
            className={`${styles['transaction-headers']} ${styles.layout} gray text-5`}
          >
            <span>Recipient / Sender</span>
            <span>Category</span>
            <span>Transaction Date</span>
            <span className="transaction-amount">Amount</span>
          </div>
          <div className="divider"></div>
        </div>

        <ul className={styles['transaction-list']}>
          {filteredData.slice(page * 10, page * 10 + 10).map((el, i) => {
            return (
              <TransactionsRow
                data={el}
                i={i}
                totalRows={filteredData.length}
                key={el.date}
                display={windowSize.width < 944 ? 'overview' : null}
              />
            );
          })}
        </ul>

        <Pagination filteredData={filteredData} page={page} setPage={setPage} />
      </div>
    </div>
  );
}
