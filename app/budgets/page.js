'use client';
import '@/styles/globals.css';
import '@/styles/queries.css';
import data from '@/data.json';
import { useStateContext } from '@/app/stateContext';
import styles from '@/styles/components/budgets/page.module.css';
import BudgetsChart from '@/components/budgets/BudgetsChart';
import Summary from '@/components/budgets/Summary';
import budgetData from '@/utils/budgetData';
import Budget from '@/components/budgets/Budget';

export default function BudgetsPage() {
  const { sidebarOpen } = useStateContext();
  const budgetObj = budgetData(data.budgets, data.transactions);

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
              <BudgetsChart budgetObj={budgetObj} budgets={data.budgets} />
            </div>
            <Summary budgetObj={budgetObj} budgets={data.budgets} />
          </div>

          <div className={styles.details}>
            {data.budgets.map((el) => {
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
