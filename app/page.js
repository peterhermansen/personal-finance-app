'use client';
import '@/styles/globals.css';
import '@/styles/queries.css';
import SummaryOverview from '@/components/overview/SummaryOverview';
import PotsOverview from '@/components/overview/PotsOverview';
import TransactionsOverview from '@/components/overview/TransactionsOverview';
import BillsOverview from '@/components/overview/BillsOverview';
import BudgetsOverview from '@/components/overview/BudgetsOverview';
import data from '@/data.json';
import { useStateContext } from '@/app/stateContext';

export default function Overview() {
  const { sidebarOpen } = useStateContext();

  return (
    <div
      className={`container ${sidebarOpen ? 'container--sidebar-open' : 'container--sidebar-closed'}`}
    >
      <h1 className="title text-1 bold">Overview</h1>

      <div className="summaries">
        <SummaryOverview
          header="Current Balance"
          value={data.balance.current}
          style="dark"
        />
        <SummaryOverview
          header="Income"
          value={data.balance.income}
          style="light"
        />
        <SummaryOverview
          header="Expenses"
          value={data.balance.expenses}
          style="light"
        />
      </div>

      <div className="content grid grid-overview">
        <div>
          <PotsOverview data={data.pots} />
          <TransactionsOverview data={data.transactions} display="overview" />
        </div>

        <div>
          <BudgetsOverview
            budgets={data.budgets}
            transactions={data.transactions}
          />
          <BillsOverview data={data.transactions} />
        </div>
      </div>
    </div>
  );
}
