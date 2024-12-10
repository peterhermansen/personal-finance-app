import fs from 'fs';
import path from 'path';
import '../styles/globals.css';
import SummaryOverview from '@/components/overview/SummaryOverview';
import PotsOverview from '@/components/overview/PotsOverview';
import TransactionsOverview from '@/components/overview/TransactionsOverview';

export default async function Page() {
  // Read, parse, and assign JSON data to variable
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return (
    <div className="container">
      <h1 className="title text-1">Overview</h1>

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

      <div className="content grid grid--2-cols">
        <div>
          <PotsOverview data={data.pots} />
          <TransactionsOverview data={data.transactions} />
        </div>

        <div></div>
      </div>
    </div>
  );
}
