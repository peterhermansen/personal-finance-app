'use client';
import '@/styles/globals.css';
import '@/styles/queries.css';
import { useStateContext } from '@/app/stateContext';
import styles from '@/styles/components/budgets/page.module.css';
import BudgetsChart from '@/components/budgets/BudgetsChart';
import Summary from '@/components/budgets/Summary';
import budgetData from '@/utils/budgetData';
import Budget from '@/components/budgets/Budget';
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';

export default function BudgetsPage() {
  const { sidebarOpen, budgets, transactions } = useStateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (transactions && budgets) setLoading(false);
  }, [transactions, budgets]);

  if (loading) return <Loading />;

  const budgetObj = budgetData(budgets, transactions);

  return (
    <div
      className={`container ${sidebarOpen ? 'container--sidebar-open' : 'container--sidebar-closed'}`}
    >
      <div className="content">
        <div className="top">
          <h1 className="title text-1 bold">Budgets</h1>
          <button className="btn-add text-4 bold">+ Add New Budget</button>
        </div>

        <div className={styles.content}>
          <div className={styles.summary}>
            <div className={styles.chart}>
              <BudgetsChart budgetObj={budgetObj} budgets={budgets} />
            </div>
            <Summary budgetObj={budgetObj} budgets={budgets} />
          </div>

          <div className={styles.details}>
            {budgets.map((el) => {
              return (
                <Budget budget={el} budgetObj={budgetObj} key={el.category} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
