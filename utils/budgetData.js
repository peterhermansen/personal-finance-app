export default function budgetData(budgets, transactions) {
  const budgetNames = budgets.map((el) => el.category);
  const maxBudget = budgets.reduce((acc, cur) => acc + cur.maximum, 0);
  const spentBudget = Math.ceil(
    Math.abs(
      transactions
        // Filter transactions to budget categories + less than one month old
        .filter((el) => {
          const transactionDate = new Date(el.date);
          const curDate = new Date('2024-08-19T20:23:12Z');
          if (
            budgetNames.includes(el.category) &&
            curDate - transactionDate < 1000 * 60 * 60 * 24 * 30
          )
            return el;
        })
        // Reduce budgeted transactions to total value
        .reduce((acc, cur) => acc + cur.amount, 0),
    ),
  );

  return { maxBudget, spentBudget };
}
