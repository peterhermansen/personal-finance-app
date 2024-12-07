import fs from 'fs';
import path from 'path';
import '../styles/globals.css';
import Summary from '@/components/overview/Summary';

export default async function Page() {
  // Read, parse, and assign JSON data to variable
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return (
    <>
      <h1 className="title">Overview</h1>
      <div className="summaries">
        <Summary
          header="Current Balance"
          value={data.balance.current}
          style="dark"
        />
        <Summary header="Income" value={data.balance.income} style="light" />
        <Summary
          header="Expenses"
          value={data.balance.expenses}
          style="light"
        />
      </div>
    </>
  );
}
