import styles from '@/styles/components/overview/BudgetsOverview.module.css';
import HeaderOverview from './HeaderOverview';
import formatVal from '@/utils/formatVal';
import BudgetsChart from '../budgets/BudgetsChart';
import budgetData from '@/utils/budgetData';

const BudgetsOverview = ({ budgets, transactions }) => {
  const budgetObj = budgetData(budgets, transactions);

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
      <HeaderOverview title="Budgets" btnText="See Details" link="/budgets" />
      <div className={styles.content}>
        <div className={styles.chart}>
          <BudgetsChart budgetObj={budgetObj} budgets={budgets} />
        </div>
        <div className={styles.details}>
          {budgets.slice(0, 4).map((budget) => generateBudgetEl(budget))}
        </div>
      </div>
    </div>
  );
};

export default BudgetsOverview;
