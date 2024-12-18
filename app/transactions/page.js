'use client';
import '@/styles/globals.css';
import '@/styles/queries.css';
import styles from '@/styles/components/transactions/TransactionsPage.module.css';
import data from '@/data.json';
import { useStateContext } from '@/app/stateContext';
import TransactionsRow from '@/components/transactions/TransactionRow';
import TransactionFilters from '@/components/transactions/TransactionFilters';
import { useState } from 'react';

export default function Transactions() {
  const { sidebarOpen } = useStateContext();
  const [filteredData, setFilteredData] = useState(data.transactions);

  return (
    <div
      className={`container ${sidebarOpen ? 'container--sidebar-open' : 'container--sidebar-closed'}`}
    >
      <h1 className="title text-1 bold">Transactions</h1>
      <div className={styles.content}>
        <TransactionFilters
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          data={data.transactions}
        />
        <div>
          <div
            className={`${styles['transaction-headers']} grid-transaction-columns gray text-5`}
          >
            <span>Recipient / Sender</span>
            <span>Category</span>
            <span>Transaction Date</span>
            <span className="transaction-amount">Amount</span>
          </div>
          <div className="divider"></div>
        </div>

        <ul className={styles['transaction-list']}>
          {filteredData.slice(0, 10).map((el, i) => {
            return (
              <TransactionsRow
                data={el}
                i={i}
                totalRows={filteredData.length}
                key={el.date}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
