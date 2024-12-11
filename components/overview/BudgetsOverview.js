import styles from '@/styles/components/overview/BudgetsOverview.module.css';
import HeaderOverview from './HeaderOverview';
import formatVal from '@/utils/formatVal';
import BudgetsChart from '../budgets/BudgetsChart';

const BudgetsOverview = ({ budgets, transactions }) => {
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

  function generateBudgetEl(budget) {
    const budgetColor = {
      backgroundColor: budget.theme,
    };

    return (
      <div className={styles.budget} key={budget.category}>
        <div className={`${styles['budget-color']}`} style={budgetColor}></div>
        <div className={`${styles['budget-text']}`}>
          <div className={`${styles['budget-title']}`}>
            <span className="text-5">{budget.category}</span>
          </div>
          <div className={`${styles['pot-value']}`}>
            <span className="text-5 bold">${formatVal(budget.maximum)}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.budgets}>
      <HeaderOverview title="Budgets" btnText="See Details" />
      <div className={styles.content}>
        <div className={styles.chart}>
          <BudgetsChart data={budgets} />
          <div className={styles['chart-text']}>
            <span className="text-1 bold">${spentBudget}</span>
            <span className="text-5 gray">of ${maxBudget} limit</span>
          </div>
        </div>
        <div className={styles.details}>
          {budgets.slice(0, 4).map((budget) => generateBudgetEl(budget))}
        </div>
      </div>
    </div>
  );
};

export default BudgetsOverview;
