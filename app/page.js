'use client';
import '@/styles/globals.css';
import '@/styles/queries.css';
import SummaryOverview from '@/components/overview/SummaryOverview';
import PotsOverview from '@/components/overview/PotsOverview';
import TransactionsOverview from '@/components/overview/TransactionsOverview';
import BillsOverview from '@/components/overview/BillsOverview';
import BudgetsOverview from '@/components/overview/BudgetsOverview';
import { useStateContext } from '@/app/stateContext';
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';

export default function OverviewPage() {
  const { sidebarOpen, balance, budgets, pots, transactions, windowSize } =
    useStateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (balance && budgets && pots && transactions) setLoading(false);
  }, [balance, budgets, pots, transactions]);

  if (loading) return <Loading />;

  return (
    <div
      className={`container ${windowSize.width > 1200 ? (sidebarOpen ? 'container--sidebar-open' : 'container--sidebar-closed') : ''}`}
    >
      <div className="top">
        <h1 className="title text-1 bold">Overview</h1>
      </div>

      <div className="summaries">
        <SummaryOverview
          header="Current Balance"
          value={balance.current}
          style="dark"
        />
        <SummaryOverview header="Income" value={balance.income} style="light" />
        <SummaryOverview
          header="Expenses"
          value={balance.expenses}
          style="light"
        />
      </div>

      <div className="content grid grid-overview">
        <div>
          <PotsOverview data={pots} />
          <TransactionsOverview data={transactions} display="overview" />
        </div>

        <div>
          <BudgetsOverview budgets={budgets} transactions={transactions} />
          <BillsOverview data={transactions} />
        </div>
      </div>
    </div>
  );
}
