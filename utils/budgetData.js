export default function budgetData(budgets, transactions) {
  const budgetNames = budgets.map((el) => el.category);
  const budgetNameObj = budgetNames.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});

  const budgetTransactionArray = budgetNames.reduce((acc, cur) => {
    acc[cur] = [];
    return acc;
  }, {});
  const maxBudget = budgets.reduce((acc, cur) => acc + cur.maximum, 0);

  const filteredBudgets = transactions
    // Filter transactions to budget categories + less than one month old
    .filter((el) => {
      const transactionDate = new Date(el.date);
      const curDate = new Date('2024-08-19T20:23:12Z');
      if (
        budgetNames.includes(el.category) &&
        curDate - transactionDate < 1000 * 60 * 60 * 24 * 30
      )
        return el;
    });

  const budgetTransactions = transactions
    .filter((el) => {
      if (budgetNames.includes(el.category)) return el;
    })
    .reduce((acc, cur) => {
      acc[cur.category].push(cur);
      return acc;
    }, budgetTransactionArray);

  const spentBudgets = filteredBudgets.reduce((acc, cur) => {
    acc[cur.category] = acc[cur.category] + Math.abs(cur.amount);
    return acc;
  }, budgetNameObj);

  const spentBudget = Math.ceil(
    Math.abs(
      Object.keys(spentBudgets).reduce(
        (acc, cur) => acc + spentBudgets[cur],
        0,
      ),
    ),
  );

  return { maxBudget, spentBudgets, spentBudget, budgetTransactions };
}
